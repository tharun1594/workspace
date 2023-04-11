import './index.css'
import {Component} from 'react'

class BlogItem extends Component {
  render() {
    const {eachList} = this.props
    const {title, description, publishedDate} = eachList
    return (
      <li className="blog-item">
        <div className="header-container">
          <h1 className="title">{title}</h1>
          <p className="time">{publishedDate}</p>
        </div>
        <p className="description">{description}</p>
      </li>
    )
  }
}

export default BlogItem
