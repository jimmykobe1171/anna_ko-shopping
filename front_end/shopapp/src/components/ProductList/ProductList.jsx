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
    const filtered = products.filter(obj => {
      return obj.category === 'women';
    });

    console.log(filtered)
    return (
      <div>
        {products.map(product => {
          return (
            <div key={product.id}>
              <h2>{product.brand}</h2>
              <h2>$ {product.price}</h2>
              <h2> {product.descriprion}</h2>
              <h2>{product.category}</h2>
              <h2>{product.name}</h2>
  
              
            </div>
          );
        })}
      </div>
    );
  }
  
    // return (
    //   // <div>
    //   // {Object.values(employee).map((value, index) => {
    //   //   return (
    //   //     <div key={index}>
    //   //       <h2>{value}</h2>
    //   //       </div>

    //   <div>
    //     {products.map(({id, brand})=>(
    //       <div key={id}>
    //         <h1>{brand}</h1>
    //         <h1>{brand[0]}</h1>
    //       </div>
    //     ))}
    //   </div>
    // )}
     export default ProductList