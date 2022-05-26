import Link from 'next/dist/client/link';
import articleStlyes from '../styles/Article.module.css'

const ArticleItem = ({ article }) => {
    return (
        <Link href="/article/[id]" as={`/article/${article.id}`}>
            <a className={articleStlyes.card}>
                <h3>{article.title}</h3>
                <img src={article.imgSrc}></img>
                <p>{article.excerpt}</p>
            </a>
        </Link>
    )
}

export default ArticleItem