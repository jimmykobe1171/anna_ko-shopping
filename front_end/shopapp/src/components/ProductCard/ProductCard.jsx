import { Link } from "react-router-dom"
import Button from '../Button/Button'
export default function ProductCard() {
    
    return (
      <main className="card">
        <h1>Balenciaga</h1>
        {/* <p>{actor}</p>
        <img src={`https://picsum.photos/id/${img}/200/300`} alt={actor} /> */}
         <Link to="cart"><Button buttonType='inverted'>Add to card</Button></Link>
      </main>
    );
  }