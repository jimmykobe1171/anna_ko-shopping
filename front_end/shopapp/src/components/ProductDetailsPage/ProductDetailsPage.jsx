import './ProductDetailsPage.css';
import Button from "../Button/Button";
import { useState, useEffect } from "react";

import { Routes, Route, useParams } from "react-router-dom";
import axios from "axios";
// import { Link } from "react-router-dom";
const ProductDetailsPage = () => {
const [product, setProduct]=useState('')
const {id} = useParams();
const getSingleProduct = async () =>{
    const { data } = await axios.get(`http://localhost:8000/api/product/${id}`)
    console.log(data)
    setProduct(data)
}

 useEffect(()=> {
    getSingleProduct();
 }, [])


return (
     <>
         
            <div className="user-setting2">
            <h1>detail page</h1>
            <p>{product.name}</p>
            <p>${product.price}</p>
            <p>{product.category}</p>
            {/* <p>{product.cloth_size}</p> */}
            <p>{product.description}</p>
           <p>{product.image}</p>
          
            <br />
            {product.description}
            <br />
            {/* <Link to={`/product/${index}`}>
                <img src={product.brand} />
            </Link> */} 
            <Button buttonType='inverted'>Add to cart</Button>
            <div className="dummy" />
            </div>
        
    </>
    );
}





export default ProductDetailsPage