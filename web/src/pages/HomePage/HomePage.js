import AppLayout from 'src/layouts/AppLayout'
import ItemsCell from "../../components/ItemsCell/ItemsCell"
import React from 'react';

const HomePage = () => {
  return (
    <AppLayout>
      <div className="container">
        <div className="row pt-3">
          <ItemsCell/>
        </div>
      </div>
    </AppLayout>
  )
}

export default HomePage
