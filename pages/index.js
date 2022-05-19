import { apiUrl } from '../config'
import Head from 'next/head'
import Article from '../components/ArticleList'


export default function Home({ articles }) {
  

  return (
    <div className=''>
      <Head>
        <title>Frontend News</title>
      </Head>
      <h1>Welcome to NextJs</h1>  

      <Article articleList={articles} />
    </div>
  )
}

export const getStaticProps = async () => {
  const res = await fetch(`${apiUrl}/api/articles`);
  const articles = await res.json()

  return {
    props: {
      articles
    }
  }
}


// export const getStaticProps = async () => {
//   const res = await fetch(`https://jsonplaceholder.typicode.com/posts?_limit=6`);
//   const articles = await res.json()

//   return {
//     props: {
//       articles
//     }
//   }
// }

