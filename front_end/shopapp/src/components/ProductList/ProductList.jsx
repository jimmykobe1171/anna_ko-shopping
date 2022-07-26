import { Link } from "react-router-dom"
export default function ProductList() {
    /* const actors = [];
    movies.map((movie) => actors.push(...movie.cast));
  
    const allActors = new Set(actors);
    const uniqueActors = Array.from(allActors);
    console.log(uniqueActors);
   */
    return (
      <>
        <h1>All products of one designer</h1>
       <Link to="product"> <div>dress</div></Link>
        <div>coat</div>
        
      </>
    );
  }