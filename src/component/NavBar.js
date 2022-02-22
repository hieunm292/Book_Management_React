import React from 'react'
import './NavBar.css'
import { Link, Outlet, useParams } from 'react-router-dom'
import FormInput from './form/FormInput'
import SearchInput from './search/SearchInput'

const NavBar = () => {
  const { invoiceId } = useParams();
  console.log(invoiceId)
	return (
		<>
      <div className={'div-NavBar margin-page'}>
        <nav className='navbar navbar-expand-lg navbar-light bg-light'>
          <div className='container-fluid'>
            <div className='collapse navbar-collapse' id='navbarText'>
              <ul className='navbar-nav me-auto mb-2 mb-lg-0'>
                <li className='nav-item'>
                  <Link to={'/search'} className='nav-link active'>
                    Search
                  </Link>
                </li>
                <li className='nav-item'>
                  <Link to={'/form'} className='nav-link'>
                    Form
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>
        <FormInput />
        <SearchInput />
      </div>
      <Outlet />
		</>
	)
}

export default NavBar
