import React from 'react'
import { useDispatch, useSelector } from 'react-redux';

function ZipCodeInfo() {

    const zipCodeInfo = useSelector(state => state.zipCodeReducer.zipCodeData)
    console.log(zipCodeInfo)

    
  return (
    <div>Z</div>
  )
}

export default ZipCodeInfo