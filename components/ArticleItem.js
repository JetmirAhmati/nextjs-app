import Link from 'next/dist/client/link';
import articleStlyes from '../styles/Article.module.css'
import Image from 'next/image';

const ArticleItem = ({ article }) => {
    return (
        <Link href="/article/[id]" passHref as={`/article/${article.id}`}>
            <a className={articleStlyes.card}>
                <h3>{article.title}</h3>
                <Image src={article.imgSrc} alt="sfs" layout='raw' width={200} height={200}></Image>
                <p>{article.excerpt}</p>
            </a>
        </Link>
    )
}

export default ArticleItem