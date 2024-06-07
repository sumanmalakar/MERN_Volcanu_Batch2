import React, { useContext } from 'react'
import ProductContext from './context/ProductContext'
const App = () => {
  const {data} = useContext(ProductContext)
  return (
    <div>App {data} </div>
  )
}

export default App