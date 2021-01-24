import Item from "src/components/Item/Item";

export const QUERY = gql`
  query FIND_ITEM_BY_ID($name: String!) {
    findItem(name: $name) {
      id
      name
      about
      image
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

export const Failure = ({error}) => <div>Error: {error.message}</div>

export const Success = ({findItem}) => {
  return findItem.map((item) => <Item key={item.id} item={item} />)
}
