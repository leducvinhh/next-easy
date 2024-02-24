import { useRouter } from 'next/router'
import React from 'react'

type Props = {}

const PostDetailPage = (props: Props) => {
  const router = useRouter()
  console.log(router)
  return (
    <div>
      PostDetailPage
      <p>Params: {JSON.stringify(router.query)}</p>
    </div>
  )
}

export default PostDetailPage
