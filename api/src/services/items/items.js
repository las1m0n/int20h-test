import { db } from 'src/lib/db'

export const item = ({ name }) => {
  return db.item.findMany({
    where: {
      name: {
        equals: name
      }
    },
    include: {
      priceMap: {
        select: {
          id: true,
          price: true,
          date: true
        }
      }
    }
  })
}
