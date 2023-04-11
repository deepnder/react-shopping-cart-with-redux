import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux';
import { add } from '../store/cartSlice';

export default function Products() {
    const dispatch=useDispatch()

    const [products,setProducts]=useState([])
    useEffect(()=> {
        const fetchData=async()=>{
            const productData= await fetch('https://fakestoreapi.com/products');
const data= await productData.json()
 setProducts(data)
 }
 fetchData()
    },[])

const handleAdd=(product)=>{
dispatch(add(product))
}


  return (
    <>
    <div className="productsWrapper">
            {products.map((product) => (
                <div className="card" key={product.id}>
                    <img src={product.image} alt="" />
                    <h4>{product.title}</h4>
                    <h5>{product.price}</h5>
                    <button onClick={() => handleAdd(product)} className="btn">
                        Add to cart
                    </button>
                </div>
            ))}
        </div>
    
    </>
  )
}
