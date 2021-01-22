import {Link, routes} from '@redwoodjs/router'

const AppLayout = ({children}) => {
  return (
    <>
      <header>
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
          <Link className="navbar-brand" to={routes.home()}>int20h Hackathon</Link>
          <div className="collapse navbar-collapse" id="navbarColor01">
            <ul className="navbar-nav mr-auto">
              <li className="nav-item active">
                <Link className="nav-link" to={routes.home()}>Home<span className="sr-only">(current)</span></Link>
              </li>
            </ul>
            <form className="form-inline">
              <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search"/>
              <button className="btn btn-outline-info my-2 my-sm-0" type="submit">Search</button>
            </form>
          </div>
        </nav>
      </header>
      <main>
        {children}
      </main>
    </>
  )
}

export default AppLayout
