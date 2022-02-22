import React, { useContext, useEffect } from 'react'
import { HEADER_ACTION, HeaderContext } from '../reducer/Header.Reducer'
import { PATH } from '../utils/Constant'

const FormPage = () => {
  const headerCTX = useContext(HeaderContext)
  useEffect(() => {
    headerCTX.changeTitle(HEADER_ACTION.SET_TITLE, PATH.form)
  }, [])
	return (
    <>
      <p> This si Form Page</p>
    </>
  )
}

export default FormPage
