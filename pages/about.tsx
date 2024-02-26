import Header from '@/components/common/Header'
import dynamic from 'next/dynamic'
import { useRouter } from 'next/router'
import React, { useEffect, useState } from 'react'

// const Header = dynamic(() => import('@/components/common/Header'), {
//   ssr: false
// })

type Props = {}

const AboutPage = (props: Props) => {
  const [postList, setPostList] = useState([])
  const router = useRouter()

  const page = router.query?.page

  useEffect(() => {
    if (!page) return
    ;(async () => {
      const response = await (await fetch(`https://js-post-api.herokuapp.com/api/posts?_page=${page}`)).json()
      setPostList(response.data)
    })()
  }, [page])

  function handleNextPage() {
    router.push(
      {
        pathname: '/about',
        query: {
          page: router.query.page ? Number(router.query.page) + 1 : 2
        }
      },
      undefined,
      { shallow: true }
    )
  }

  return (
    <div>
      <h1>AboutPage</h1>

      <Header />

      <ul className='post-list'>
        {postList.map((item: any) => (
          <li key={item.id}>{item.title}</li>
        ))}
      </ul>

      <button onClick={handleNextPage}>Next Page</button>
    </div>
  )
}

export async function getStaticProps() {
  console.log('getStaticProps')
  return {
    props: {
      name: 'Vinh Duc'
    }
  }
}

// export async function getServerSideProps() {
//   return {
//     props: {
//       name: 'Vinh Duc'
//     }
//   }
// }

export default AboutPage
