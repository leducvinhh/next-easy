import { useRouter } from 'next/router'
import React from 'react'

type Props = {}

const PostCatchAllRoute = (props: Props) => {
  const router = useRouter()

  return (
    <div>
      PostCatchAllRoute
      <p>Params: {JSON.stringify(router.query)}</p>
    </div>
  )
}

export default PostCatchAllRoute
