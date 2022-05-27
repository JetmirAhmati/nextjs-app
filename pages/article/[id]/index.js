import { apiUrl } from '../../../config';
import Link from 'next/link';
import Image from 'next/image';


const article = (article) => {
    return (
        <article className='grid'> Article ID:  {article.id}
            <h1>
                {article.title}
            </h1>
            <figure>
                <Image src={article.imgSrc} alt="sfgbsfg" layout='raw'></Image>
            </figure>
            <p>
                {article.body}
            </p>
            <br />
            <Link href='/'>
                <button>Go Back </button>
            </Link>
        </article>
    )
}

export const getServerSideProps = async (context) => {
    console.log('contex', context)
    const res = await fetch(`${apiUrl}/api/articles/${context.params.id}`) //apiUrl
    // const res = await fetch(`https://jsonplaceholder.typicode.com/posts?_limit=6`);


    const article = await res.json();
    console.log(article);

    return {
        props: article
    }
}


// export const getStaticPaths = async () => {
//     const res = await fetch(`${apiUrl}/api/articles`)
//     // const res = await fetch(`https://jsonplaceholder.typicode.com/posts?_limit=6`);
//     const articles = await res.json();
//     const ids = articles.map(article => article.id)

//     const paths = ids.map(id => ({ params: { id: id.toString() } }))

//     return {
//         paths,
//         fallback: false
//     }
// }

export default article
