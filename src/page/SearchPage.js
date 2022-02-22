import React, { useContext, useEffect } from 'react'
import { HEADER_ACTION, HeaderContext } from '../reducer/Header.Reducer'
import { PATH } from '../utils/Constant'

const SearchPage = () => {
  const headerCTX = useContext(HeaderContext)
  useEffect(() => {
    headerCTX.changeTitle(HEADER_ACTION.SET_TITLE, PATH.search)
  }, [])

  return (
    <>
      <p> This is Search Page</p>
    </>
  )
}

export default SearchPage
