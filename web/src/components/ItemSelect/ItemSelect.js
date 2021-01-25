import PriceInfo from "src/components/PriceInfo/PriceInfo";
import ChartItem from "src/components/Chart/Chart";

const ItemSelect = ({item}) => {
  return (
    <div>
      <div className="container">
        <div className="row pt-lg-5">
          <div className="col-md-6">
            <div
              className="row g-0 border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative">
              <div className="col-auto d-none d-lg-block">
                <img alt="" src={item.image} style={{width: "64px"}}/>
              </div>
              <div className="col p-4 d-flex flex-column position-static">

                <h3 className="mb-0">{item.name}</h3>
                <p className="text-item">{item.about}</p>
                {item.priceInfo.map((item, i) => (
                  <div key={i}>
                    <img alt="img" src={item.shop.imageUrl} style={{width: "80px", height: "30px"}}/>
                    <PriceInfo info={item}/>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className="col-md-6">
          </div>
        </div>
      </div>
      <hr />
      <div className="p-4 p-md-5 mb-4 mt-2">
        <div className="col-md-6 px-0">
          <ChartItem data={item.priceMap} />
        </div>
      </div>
    </div>
  )
}

export default ItemSelect
