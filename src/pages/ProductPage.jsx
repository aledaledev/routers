import React from 'react'
import { useParams } from 'react-router-dom'
import { products } from './StorePage'

const ProductPage = () => {

  //usando parametros
  const {id} = useParams()
  const {name,description,price} = products.find(item => item.id === id)

  return (
    <div>
        <h3>{name}</h3>
        <p>{description}</p>
        <span>$ {price}</span>
    </div>
  )
}

export default ProductPage