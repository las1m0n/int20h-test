import {Link, routes} from '@redwoodjs/router'
import './styles.css'

const BlogPost = ({item}) => {
  return (
    <>
      <div className="col-md-4 box-border">
        <div className="app-container">
          <img className="card-img-top"
               style={{height: "128px", width: "128px", display: "block"}}
               src={item.image}/>
          <Link className="text-item" to={routes.itemPage({id: item.id})}>{item.name}</Link>
        </div>
      </div>
    </>
  )
}

export default BlogPost
