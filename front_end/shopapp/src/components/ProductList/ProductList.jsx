import { Link } from "react-router-dom"

const ProductList=({products})=> {
    //const [product, setProduct]= useState({
    //     brand:'',
    //     description:'', 
    //     price:'',

    // });
    // const handleChange =(e)=> {
    //     e.preventDefault();
        
    // }

    
  
    return (
      <div>
        {products.map(({id, brand})=>(
          <div key={id}>
            <h1>{brand}</h1>
          </div>
        ))}
      </div>
    )}
     export default ProductList