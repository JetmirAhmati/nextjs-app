import { apiUrl } from '../config'
import Head from 'next/head'
import Article from '../components/ArticleList';

export default function Home({ articles }) {
 

  const checkBroswer = ()=> {
    let userAgent = navigator.userAgent;
    let browserName;
    
    if(userAgent.match(/chrome|chromium|crios/i)){
        browserName = "chrome";
      }

      else if(userAgent.match(/firefox|fxios/i)){
        browserName = "firefox";
      } 

      else if(userAgent.match(/safari line/i)){
        browserName = "Line";
      }

       else if(userAgent.match(/safari/i)){
        browserName = "safari";
      }

      else if(userAgent.match(/opr\//i)){
        browserName = "opera";
      }
       else if(userAgent.match(/edg/i)){
        browserName = "edge";
      }

      else {
        browserName="No browser detection";
      }

      {alert(window.navigator.userAgent, browserName)}
  }

  return (
    <div className='home-page'>
      <Head>
        <title>Frontend News</title>
      </Head>

      <h1>Welcome to NextJs</h1>

      <Article articleList={articles} />
    </div>
  )
}





export const getStaticProps = async () => {
  // const res = await fetch(`https://jsonplaceholder.typicode.com/posts?_limit=6`);
  const res = await fetch(`${apiUrl}/api/articles`); //apiUrl
  const articles = await res.json()

  return { props: { articles } }
}

