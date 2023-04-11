import './index.css'
import BlogItem from '../BlogItem'

const BlogList = props => (
    const {blogList} = props;

    return(
        <div className="blog-list">
            {blogList.map(eachList => <BlogItem eachList={eachList} key={eachList.id}/>)}
        </div>
    )
)

export default BlogList