import {Form, Label, TextAreaField, Submit, useQuery} from "@redwoodjs/web";
import ItemsCell from "src/components/ItemsCell/ItemsCell";
import {useState} from "react";
import axios from 'axios';
import React from "react";

const QUERY = gql`
  query FIND_ITEM_BY_ID($name: String!) {
    item(name: $name) {
      id
      name
      shop
      url
      currentPrice
      priceMap {
        id
        price
        date
      }
    }
  }
`

const SearchCell = (props) => {
  const [formState, setFormState] = useState({
    name: "",
    results: []
  });

  const {loading, error, data} = useQuery(QUERY, {
    variables: {name: formState.name}
  })

  async function getInfo(url) {
    const response = await axios.get(url)
    return response.data?.results[0]
  }

  return (
    <div className="form-group">
      <input
        value={formState.name}
        onChange={(e) =>
          setFormState({
            ...formState,
            name: e.target.value
          })
        }
        type="text"
        className="form-control"
        placeholder="Поиск"
      />

      <div>
        {data?.item?.map((it, index) => (
          <ul>
            <li key={index}>
              <p>Магазин: {it.shop} Товар: {it.name}</p>
              <div>
                {getInfo(it.url)}
              </div>
              График
              {it.priceMap.map((i, ind) => (
                <div key={ind}>
                  <p>{i.price}</p>
                  <p>{i.date}</p>
                </div>
              ))}
            </li>
            <hr/>
          </ul>
        ))}
      </div>
    </div>
  );
}

export default SearchCell
