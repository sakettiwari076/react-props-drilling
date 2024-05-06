import React from 'react'
import {data} from './App'

const ChildC = () => {
  return (

   <>
   {/* // only one function accept problematic when there are more than one value to pass */}
   <data.Consumer >
    {
        (name) => {
            return (
                <h1>{name}</h1>
            )
        }
    }

   </data.Consumer>
   </>
  )
}

export default ChildC