import Link from 'next/link'
import { useRouter } from 'next/router'
import React from 'react'

type Props = {}

const AboutPage = (props: Props) => {
  const router = useRouter()

  console.log(router.query)
  console.log(props)

  return (
    <div>
      <Link
        href='/'
        legacyBehavior
      >
        <a>To Home Page</a>
      </Link>
      AboutPage
    </div>
  )
}

export async function getServerSideProps() {
  return {
    props: {
      name: 'Vinh Duc'
    }
  }
}

export default AboutPage
