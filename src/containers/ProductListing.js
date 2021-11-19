import axios from 'axios'
import React,{useEffect} from 'react'
import { useDispatch, useSelector } from 'react-redux'
import ProductComponent from './ProductComponent'
import {setProducts} from '../redux/actions/productActions'
const ProductListing = () => {

    useEffect(() => {
        fetchProducts()
    }, [])

   const products = useSelector((state) => state)
   const dispatch = useDispatch()

   const fetchProducts = async()=>{

    const productsResponse = await axios.get("https://fakestoreapi.com/products").catch(err=>alert(err))
   
    dispatch(setProducts(productsResponse.data))
    }
    return (
        <div class="ui grid-container" style={{padding:"100px"}}>
            <ProductComponent />
        </div>
    )
}

export default ProductListing
