import React, { useContext } from 'react'
import {data , data1} from'./App'

const ChildC = () => {
    const name=useContext(data);
    const gender=useContext(data1);

  return (

   <>
   <p>{gender}</p>
   <p>{name}</p>

   </>
  )
}

export default ChildC