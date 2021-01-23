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
        {console.log(resState.results)}
        {resState.results.slice(0, 1).map((item, i) => (
          <li key={i}>{item.title} по цене <strong>{item.price}</strong></li>
        ))}
      </ul>
    </div>
  )
}

export default PriceInfo