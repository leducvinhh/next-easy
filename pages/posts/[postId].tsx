import { GetStaticPaths, GetStaticProps, GetStaticPropsContext } from 'next'
import { useRouter } from 'next/router'
import React from 'react'

type Props = {
  post: any
}

const PostDetailPage = ({ post }: Props) => {
  const router = useRouter()

  if (router.isFallback) {
    return <div>Loading...</div>
  }

  if (!post) return null

  return (
    <div>
      <h1>{post.title}</h1>
      <p>{post.description}</p>
    </div>
  )
}

export const getStaticPaths: GetStaticPaths = async () => {
  const response = await (await fetch('https://js-post-api.herokuapp.com/api/posts?_page=1&_limit=10')).json()

  const listId = response.data.map((item: any) => ({
    params: {
      postId: item.id
    }
  }))

  return {
    paths: listId,
    fallback: true
  }
}

export const getStaticProps: GetStaticProps<Props> = async (context: GetStaticPropsContext) => {
  const postId = context?.params?.postId

  const response = await (await fetch(`https://js-post-api.herokuapp.com/api/posts/${postId}`)).json()

  return {
    props: {
      post: response
    },
    revalidate: 10
  }
}

export default PostDetailPage
