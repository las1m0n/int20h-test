import {Link, routes} from '@redwoodjs/router'

const BlogPost = ({item}) => {
  return (
    <>
      <div className="col-md-4">
        <div className="card mb-4 shadow-sm">
          <img className="card-img-top"
               style={{height: "225px", width: "100%", display: "block"}}
               src="https://giftmall.com.ua/uploads/media/catalog_preview/0001/08/thumb_7390_catalog_preview_catalog_picture.jpeg"
               data-holder-rendered="true"/>
          <div className="card-body">
            <p className="card-text">{item.name}</p>
            <div className="d-flex justify-content-between align-items-center">
              <div className="btn-group">
                <Link className="btn btn-sm btn-outline-secondary" to={routes.itemPage({id:item.id})}>Страница товара</Link>
              </div>
              <small className="text-muted">Тут цена</small>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default BlogPost
