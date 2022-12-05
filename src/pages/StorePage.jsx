import React from 'react'
import { Link } from 'react-router-dom'

export const products = [
  {
    id:'19casbfd142',
    name:'Chair',
    description: 'beautiful chair with one percent of lava',
    price:1200,
  },
  {
    id:'76ca6hopp18',
    name:'Table',
    description: 'only a red wooden table with insects',
    price:100,
  },
  {
    id:'25sdnb1co53',
    name:'Glass',
    description: 'you want water? here is a glass cup for you (without water)',
    price:250,
  }
]

const StorePage = () => {
  return (
    <div>
        <h2>Store</h2>
        <ul>
          {products.map(({id,name,price}) => {
            return (
              <li key={id}>
                <h3><Link to={`/store/${id}`}>{name}</Link></h3>
                <small>$ {price}</small>
              </li>
            )
          })}
        </ul>
    </div>
  )
}

export default StorePage