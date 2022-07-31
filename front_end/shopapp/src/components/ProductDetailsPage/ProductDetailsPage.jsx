import Button from "../Button/Button";
import { useState } from "react";
import { Routes, Route, useParams } from "react-router-dom";
;
// import { Link } from "react-router-dom";
const ProductDetailsPage = (props) => {

// useEffect

const { product, index } = props;
return (
     <>
         <p>
            <h1>Hello</h1>
            {/* {product.price}
            <br />
            {product.description}
            <br />
            {/* <Link to={`/product/${index}`}>
                <img src={product.brand} />
            </Link> */} 
            <Button buttonType='inverted'>Add to cart</Button>
        </p>
    </>
    );
}





export default ProductDetailsPage