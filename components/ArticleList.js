import articleStlyes from '../styles/Article.module.css'
import ArticleItem from './ArticleItem';

const ArticleList = ({ articleList }) => {
    return (
        <div className={articleStlyes.grid}>
            {articleList.map(article => <ArticleItem key={article.id} article={article} />)}
        </div>
    )
}

export default ArticleList