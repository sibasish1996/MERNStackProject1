import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchApi } from './Demo.action'

const Demo = () => {

  const dispatch = useDispatch()
  const data = useSelector((state) => state.demoProject.get('data')?.toJS());

  useEffect(()=>{
    dispatch(fetchApi())
  },[])
  console.log(data,"llll");
  
  return (
    <div>
      jklhnhhhkjhjkhk
    </div>
  )
}

export default Demo
