import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { MainLayout } from '@/components/layout'

const Home = () => {
  const router = useRouter()

  const goToPostDetail = () => {
    router.push({
      pathname: '/posts/[postId]',
      query: {
        postId: 123,
        ref: 'social'
      }
    })
  }
  return (
    <div className={styles.container}>
      <Head>
        <title>Welcome to Vin</title>
        <meta
          name='description'
          content='Learn next with Vinh Duc'
        />
        <link
          rel='icon'
          href='/favicon.ico'
        />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to <a href='https://github.com/leducvinhh'>Duc Vinh!</a>
        </h1>

        <p className={styles.description}>
          Get started by editing <code className={styles.code}>pages/index.js</code>
        </p>

        <Link
          href='/about'
          legacyBehavior
        >
          <a>Go To About</a>
        </Link>

        <button onClick={goToPostDetail}>Go to Post Detail</button>

        <div className={styles.grid}>
          <a
            href='https://nextjs.org/docs'
            className={styles.card}
          >
            <h2>Documentation &rarr;</h2>
            <p>Find in-depth information about Next.js features and API.</p>
          </a>

          <a
            href='https://nextjs.org/learn'
            className={styles.card}
          >
            <h2>Learn &rarr;</h2>
            <p>Learn about Next.js in an interactive course with quizzes!</p>
          </a>

          <a
            href='https://github.com/vercel/next.js/tree/master/examples'
            className={styles.card}
          >
            <h2>Examples &rarr;</h2>
            <p>Discover and deploy boilerplate example Next.js projects.</p>
          </a>

          <a
            href='https://vercel.com/new?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app'
            className={styles.card}
          >
            <h2>Deploy &rarr;</h2>
            <p>Instantly deploy your Next.js site to a public URL with Vercel.</p>
          </a>
        </div>
      </main>

      <footer className={styles.footer}>
        <a
          href='https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app'
          target='_blank'
          rel='noopener noreferrer'
        >
          Powered by{' '}
          <span className={styles.logo}>
            <Image
              src='/vercel.svg'
              alt='Vercel Logo'
              width={72}
              height={16}
            />
          </span>
        </a>
      </footer>
    </div>
  )
}

Home.Layout = MainLayout

export default Home
