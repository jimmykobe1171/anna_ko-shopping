import ProductDetailsPage from '../ProductDetailsPage/ProductDetailsPage';
import './Kids.css';
import { Link } from "react-router-dom"
const Kids=({products})=> {
  //const [product, setProduct]= useState({
  //     brand:'',
  //     description:'', 
  //     price:'',

  // });
  // const handleChange =(e)=> {
  //     e.preventDefault();
      
  // }
  const filtered = products.filter(obj => {
    return obj.category === 'kids';
  });

  console.log(filtered)
  return (
    <div>
      {filtered.map(product => {
        //   <ProductDetailsPage product={product} index={i}/>
        return (
          <div className="user-setting">
          <div key={product.id}>
            <h4><Link to={`kids/:id`}>{product.brand}</Link></h4>
            <h4>$ {product.price}</h4>
            <h4> {product.descriprion}</h4>
  
            {/* <h4>{product.name}</h4> */}
            </div>

            
          </div>
        );
      })}
    </div>
  );
}

  
   export default Kids