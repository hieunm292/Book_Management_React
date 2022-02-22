import React from 'react'
import './FormInput.css'
const FormInput = () => {
  return (
    <>
      <div className={'div-FormInput d-flex flex-row'}>
        <div className={'div-Input-space'}>
          <label className={'form-label label-Input'}>Title</label>
          <input type="email" className={'form-control'} id="exampleInputEmail1" aria-describedby="emailHelp" />
        </div>

        <div className={'div-Input-space'}>
          <label className={'form-label label-Input'}>Author</label>
          <input type={'password'} className={'form-control'} id="exampleInputPassword1" />
        </div>

        <div className={'div-Input-space'}>
          <label className={'form-label label-Input'}>Released Year</label>
          <input type="email" className={'form-control'} id="exampleInputEmail1" aria-describedby="emailHelp" />
        </div>

        <div className={'div-Input-space'}>
          <label className={'form-label label-Input'}>Category</label>
          <input type={'password'} className={'form-control'} id="exampleInputPassword1" />
        </div>


        <div className={'div-Input-space'}>
          <label className={'form-label label-Input label-disable'}>Category</label>
          <button type="button" className={'form-control btn btn-primary'}>Submit</button>
        </div>

        <div className={'div-Input-space'}>
          <label className={'form-label label-Input label-disable'}>Category</label>
          <button type="button" className={'form-control btn btn-outline-primary'}>Cancel</button>
        </div>
      </div>
    </>
  )
}

export default FormInput
