import Button from '../Button/Button'
import { Link } from "react-router-dom"
export default function Summary(){

    return (
        <>
        <h3>Total</h3>
        <h3>Shipping estimate</h3>
        <h3>Order Total</h3>
        <Link to="checkout">
                        <Button buttonType='inverted'>Go To Checkout</Button>
                    </Link>
        </>
    )
}