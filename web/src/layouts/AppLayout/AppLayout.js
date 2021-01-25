import { Link, routes } from '@redwoodjs/router'
import { useState } from 'react'
import UseAnimation from 'react-useanimations'
import searchToX from 'react-useanimations/lib/searchToX'
import './styles.css'

const AppLayout = ({ children }) => {
  const [searchPhrase, setSearchPhrase] = useState('')
  return (
    <div className="app-container">
      <header>
        <Link to={routes.home()}><h1>ЦеноСравнитель</h1></Link>
      </header>
      <main>
        <input
          value={searchPhrase}
          onChange={(e) => setSearchPhrase(e.target.value)}
          className="search-bar"
          placeholder="Крупа гречаная"
        />
        <UseAnimation
          onClick={() => {
            if (searchPhrase) setSearchPhrase('')
            else {
              //handleSearch
            }
          }}
          size={14}
          animation={searchToX}
          wrapperStyle={{
            position: 'absolute',
            right: 4,
            top: 16
          }}
          strokeColor="#1EB763"
        />

        <h4>Топ-товары</h4>

        {children}
      </main>
    </div>
  )
}

export default AppLayout
