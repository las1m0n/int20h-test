import { Link, routes } from '@redwoodjs/router'
import AppLayout from 'src/layouts/AppLayout'

const ListItemsPage = () => {
  return (
    <AppLayout>
      <main>
        <Link to={routes.home()}>Return home</Link>
      </main>
    </AppLayout>
  )
}

export default ListItemsPage
