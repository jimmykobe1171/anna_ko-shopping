import Summary from "../../components/Summary/Summary";
import ShoppingItem from "../../components/ShoppingItem/ShoppingItem";
import { useState } from "react";
import Button from "../../components/Button/Button";
export default function Cart({products}){
    const [cart, setCart] = useState()

    function handleRemove(id){
        // const newCart = cart.filter((product)=product.id !==id);
        // setCart(newCart)

    }



    return (
        <>
        <h1> My Shopping Bag</h1>
        <ShoppingItem />
        <Button buttonType='inverted' onClick={handleRemove}>Remove item</Button>
        <Button buttonType='inverted'>Go To Checkout</Button>
        <Summary />
        </>
    )
}