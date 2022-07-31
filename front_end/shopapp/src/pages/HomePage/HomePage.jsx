import { Link } from "react-router-dom"
//import * as getProducts from '../../Utilities/product-api'
// import {useEffect} from 'react'
// import { useState } from "react";
// import Women from "../../components/Women/Women";
// import Men from '../../components/Men/Men';
// import Kids from '../../components/Kids/Kids';
import Button from '../../components/Button/Button'
import "./HomePage.css";

// import axios from 'axios'
export default function Home({user}) {
    // const [products, setProducts] = useState();
    // function componentDidMount() {
	// 	//console.log('it mounted');
	// 	let data;
	// 	axios.get('http://localhost:8000/api/product/')
	// 		.then((res) => {
	// 			data = res.data;
	// 			console.log(data);
               
	// 			setProducts(data);
	// 		})
	// 		.catch((err) => {});
	// }
	// useEffect(() => {
	// 	componentDidMount();
	// }, []);
    

//  async function getProducts(){
//   const res = axios('http://localhost:8000/api/product/', 'GET')
//   console.log(res.data)
//   return res.data
// }

//  async function getProductss(){
//     const products = await getProducts()
//     console.log(products)
//  }

//  useEffect(()=>{
//     getProductss()

//  }, [])


    return (
        <>
            <div className="section-container">
                <div className="section-container">
                  
                    <Link to='women'>
                        <Button buttonType='inverted'>Shop Women</Button>
                    </Link>

                    <img src='https://cdn-static.farfetch-contents.com/cms-cm10/caas/v1/media/3670830/data/c155d53e0c53cd51241840519c5f11f9/1x1_two-columns/637/data.jpeg' alt="" />

                </div>
                <div className="section-container">
                    <Link to="men">
                        <Button buttonType='inverted'>Shop Men</Button>
                    </Link>

                    <img src="https://cdn-static.farfetch-contents.com/cms-cm10/caas/v1/media/3670276/data/47355043f142e0642a2c4a6e85583d2a/3x4_three-columns/480/data.jpeg" alt="" />
                </div>
                <div className="section-container">
                    <Link to="kids">
                        <Button buttonType='inverted'>Shop Kids</Button>
                    </Link>

                    <img src="https://cdn-static.farfetch-contents.com/cms-cm10/caas/v1/media/3671646/data/c1d9914c4cdc1bdcbeacd0bf27753288/1x1_messaging-side/637/data.jpeg" alt="" />

                </div>

                {/* <Women />
            <Men />
            <Kids /> */}
                <div className="dummy" />
            </div>

        </>
    );
}