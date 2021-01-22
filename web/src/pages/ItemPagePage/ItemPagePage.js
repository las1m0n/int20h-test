import { Link, routes } from '@redwoodjs/router'
import AppLayout from "src/layouts/AppLayout/AppLayout";
import ItemCell from "src/components/ItemCell/ItemCell"

const ItemPagePage = ({id}) => {
  return (
    <AppLayout>
      <ItemCell id={id} />
    </AppLayout>
  )
}

export default ItemPagePage
