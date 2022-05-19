import { apiUrl } from '../../../config';
import Link from 'next/link';


const article = (article) => {
    return (
        <div className='grid'> Article ID:  {article.id}
            <h1>
                {article.title}
            </h1>
            <p>
                {article.body}
            </p>
            <br />
            <Link href='/'>
                <button>Go Back </button>
            </Link>
        </div>
    )
}

export const getStaticProps = async (context) => {
    const res = await fetch(`${apiUrl}/api/articles/${context.params.id}`)
    const article = await res.json();

    return {
        props: article
    }
}


export const getStaticPaths = async () => {
    const res = await fetch(`${apiUrl}/api/articles`)
    const articles = await res.json();
    const ids = articles.map(article => article.id)

    const paths = ids.map(id => ({ params: { id: id.toString() } }))

    return {
        paths,
        fallback: false
    }
}

export default article
