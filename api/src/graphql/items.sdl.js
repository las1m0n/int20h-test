export const schema = gql`
  type PriceMap {
    id: Int!
    price: Float!
    date: DateTime
  }

  type Shop {
    id: Int!
    name: String!
    imageUrl: String!
  }

  type ShopItem {
    id: Int!
    shop: Shop!
    url: String
  }

  type Item {
    id: Int!
    name: String!
    about: String!
    image: String!
    priceInfo: [ShopItem!]!
    priceMap: [PriceMap!]!
  }

  type Query {
    findItem(name: String!): [Item!]!
    item(id: Int!): Item
    items: [Item!]!
  }
`
