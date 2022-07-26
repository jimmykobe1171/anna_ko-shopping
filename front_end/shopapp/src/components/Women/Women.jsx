import ProductList from "../ProductList/ProductList";
import { Link } from "react-router-dom"
import Button from '../Button/Button'
export default function Women(){

    return (
        <div>

        <h1>All Designers</h1>
        <Link to="products"><h3>Gucci</h3></Link>
        <Link to='products'><h3>Valentino</h3></Link>

        </div>
    
    )
}