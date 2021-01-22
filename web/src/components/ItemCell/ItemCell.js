import ItemSelect from "src/components/ItemSelect/ItemSelect";

export const QUERY = gql`
  query FIND_BY_ID ($id: Int!) {
    item(id: $id) {
      id
      name
      about
      priceInfo {
        id
        url
        shop {
          id
          name
          imageUrl
        }
      }
      priceMap {
        id
        price
        date
      }
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => <div>Empty</div>

export const Failure = ({error}) => <div>Error</div>

export const Success = ({item}) => {
  return <ItemSelect item={item}/>
}
