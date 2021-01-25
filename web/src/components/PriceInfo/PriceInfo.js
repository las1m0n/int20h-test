import axios from "axios";
import {useEffect, useState} from "react";

const getShopResults = (url) =>
  axios.get(url).then(res =>
    res.data?.results.map(({title, price}) => ({
      title,
      price
    }))
  )



const PriceInfo = ({info}) => {
  const [resState, setResState] = useState({
    results: []
  })


  useEffect(() => {
    getShopResults(info.url).then(results => {
      setResState({results})
    })
  }, []);

  return (
    <div>
      <ul>
        {resState.results.slice(0, 1).map((item, i) => (
          <p>{item.title} по цене <strong>{item.price.toString().substr(0, 2).concat(".", item.price.toString().substr(3))}</strong></p>
        ))}
      </ul>
    </div>
  )
}

export default PriceInfo
