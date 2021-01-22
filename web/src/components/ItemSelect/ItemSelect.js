const ItemSelect = ({item}) => {
  return (
    <div>
      <div className="p-4 p-md-5 mb-4 mt-2">
        <div className="col-md-6 px-0">
        </div>
      </div>
      <div className="container">
        <div className="row pt-lg-5">
          <div className="col-md-6">
            <div
              className="row g-0 border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative">
              <div className="col-auto d-none d-lg-block">
                <svg className="bd-placeholder-img" width="200" height="250" xmlns="http://www.w3.org/2000/svg"
                     role="img"
                     aria-label="Placeholder: Thumbnail" preserveAspectRatio="xMidYMid slice" focusable="false">
                  <title>Placeholder</title>
                  <rect width="100%" height="100%" fill="#55595c"></rect>
                  <text x="50%" y="50%" fill="#eceeef" dy=".3em">Thumbnail</text>
                </svg>
              </div>
              <div className="col p-4 d-flex flex-column position-static">
                <strong className="d-inline-block mb-2 text-primary"></strong>
                <h3 className="mb-0">{item.name}</h3>
                <p className="card-text mb-auto">Описание товара</p>
                <p className="card-text mb-auto">Цены из супермаркетов</p>
              </div>
            </div>
          </div>
          <div className="col-md-6">
          </div>
        </div>
      </div>
    </div>
  )
}

export default ItemSelect
