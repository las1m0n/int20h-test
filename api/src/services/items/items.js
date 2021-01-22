import {db} from 'src/lib/db'

export const items = () => {
  return db.item.findMany({
    include: {
      priceMap: {
        select: {
          id: true,
          price: true,
          date: true
        }
      },
      priceInfo: {
        select: {
          shop: true,
          url: true,
          id: true
        }
      }
    }
  })
}

export const item = ({id}) => {
  return db.item.findUnique({
    where: {id},
    include: {
      priceMap: {
        select: {
          id: true,
          price: true,
          date: true
        }
      },
      priceInfo: {
        select: {
          shop: true,
          url: true,
          id: true
        }
      }
    }
  })
}
export const findItem = ({name}) => {
  return db.item.findMany({
    where: {
      name: {
        equals: name.toLowerCase()
      }
    },
    include: {
      priceMap: {
        select: {
          id: true,
          price: true,
          date: true
        }
      },
      priceInfo: {
        select: {
          shop: true,
          url: true,
          id: true
        }
      }
    }
  })
}
