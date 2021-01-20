import {Form, Label, TextAreaField, Submit, useQuery} from "@redwoodjs/web";
import ItemsCell from "src/components/ItemsCell/ItemsCell";
import {useState} from "react";

const QUERY = gql`
  query FIND_ITEM_BY_ID($name: String!) {
    item(name: $name) {
      id
      name
      shop
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
    name: ""
  });

  const {loading, error, data} = useQuery(QUERY, {
    variables: {name: formState.name}
  })

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
        {data?.item?.map(it => (
          <ul>
            <li>
              <p>{it.name}</p>
              <p>{it.currentPrice}</p>
              <p>{it.shop}</p>
              {it.priceMap.map(i => (
                <div>
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
