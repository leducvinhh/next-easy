import { GetServerSidePropsContext } from 'next'
import { useRouter } from 'next/router'
import React from 'react'

type Props = {
  query: any
  post: any
}

const ParamsPage = ({ query, post }: Props) => {
  const router = useRouter()
  const [seconds, setSeconds] = React.useState(0)

  React.useEffect(() => {
    const interval = setInterval(() => {
      setSeconds((prev) => {
        if (prev > 60) {
          clearInterval(interval)
        }
        return prev + 1
      })
    }, 1000)

    return () => clearInterval(interval)
  }, [])

  return (
    <div>
      <p>Time: {seconds}</p>

      <h2>Post Detail</h2>
      <p>{post?.title}</p>
      <p>{post?.author}</p>
      <p>{post?.description}</p>
    </div>
  )
}

export async function getServerSideProps(context: GetServerSidePropsContext) {
  context.res.setHeader('Cache-Control', 's-maxage=5, stale-while-revalidate=5')

  await new Promise((resolve) => setTimeout(resolve, 3000))

  const postId = context.query.postId
  if (!postId) return { props: { query: context.query } }

  const response = await (await fetch(`https://js-post-api.herokuapp.com/api/posts/${postId}`)).json()

  return {
    props: {
      query: context.query,
      post: response
    }
  }
}

export default ParamsPage
