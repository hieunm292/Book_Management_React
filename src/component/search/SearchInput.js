import React from 'react'
import './SearchInput.css'

const SearchInput = () => {
  return (
    <>
      <div className={'div-SearchInput d-flex flex-row'}>
        <div className={'div-Input-space'}>
          <label className={'form-label label-Input'}>Keyword</label>
          <input type="email" className={'form-control'} id="exampleInputEmail1" aria-describedby="emailHelp" />
        </div>

        <div className={'div-Input-space'}>
          <label className={'form-label label-Input'}>Category</label>
          <input type={'password'} className={'form-control'} id="exampleInputPassword1" />
        </div>

        <div className={'div-Input-space'}>
          <label className={'form-label label-Input label-disable'}>Category</label>
          <button type="button" className={'form-control btn btn-primary'}>Search</button>
        </div>

        <div className={'div-Input-space'}>
          <label className={'form-label label-Input label-disable'}>Category</label>
          <button type="button" className={'form-control btn btn-outline-primary'}>Clear</button>
        </div>
      </div>
    </>
  )
}

export default SearchInput

