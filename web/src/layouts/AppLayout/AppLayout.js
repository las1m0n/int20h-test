import {Link, routes} from '@redwoodjs/router'

const AppLayout = ({children}) => {
  return (
    <>
      <header>
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <Link className="navbar-brand" to={routes.home()}>int20h Hackathon</Link>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav"
                  aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item active">
                <Link className="nav-link" to={routes.home()}>Home<span className="sr-only">(current)</span></Link>
              </li>
            </ul>
          </div>
        </nav>
      </header>
      <main>{children}</main>
    </>
  )
}

export default AppLayout
