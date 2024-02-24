import { GetStaticProps, GetStaticPropsContext } from 'next'
import Link from 'next/link'
import React from 'react'

type Post = {
  id: string
  title: string
  description: string
}

type Props = {
  posts: Post[]
}

const PostListPage = ({ posts }: Props) => {
  return (
    <div>
      {posts.map((item) => (
        <div key={item.id}>
          <h2>
            <Link
              href={`/posts/${item.id}`}
              legacyBehavior
            >
              <a>{item.title}</a>
            </Link>
          </h2>
          <p>{item.description}</p>
        </div>
      ))}
    </div>
  )
}

export const getStaticProps: GetStaticProps<Props> = async (context: GetStaticPropsContext) => {
  const response = await (await fetch('https://js-post-api.herokuapp.com/api/posts?_page=1&_limit=10')).json()

  return {
    props: {
      posts: response.data.map((item: any) => ({
        id: item.id,
        title: item.title,
        description: item.description
      }))
    }
  }
}

export default PostListPage
