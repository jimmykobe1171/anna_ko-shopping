
import './Women.css';
import React from "react"
const Women=({products})=> {
    //const [product, setProduct]= useState({
    //     brand:'',
    //     description:'', 
    //     price:'',

    // });
    // const handleChange =(e)=> {
    //     e.preventDefault();
        
    // }

    
    return (
      <>
          <div className="row">
              <div className="column">
                  {/* <Link to='women'>
                      <Button buttonType='inverted'>Shop Women</Button>
                  </Link> */}

                  <img src='https://cdn-static.farfetch-contents.com/cms-cm10/caas/v1/media/3670830/data/c155d53e0c53cd51241840519c5f11f9/1x1_two-columns/637/data.jpeg' alt="" />
                  <h4>$500</h4>

              </div>
              <div className="column">
                  {/* <Link to="men"> */}
                      {/* <Button buttonType='inverted'>Shop Men</Button>
                  </Link> */}

                  <img src="https://cdn-static.farfetch-contents.com/cms-cm10/caas/v1/media/3670276/data/47355043f142e0642a2c4a6e85583d2a/3x4_three-columns/480/data.jpeg" alt="" />
              </div>
              <div className="column">
                  {/* <Link to="kids">
                      <Button buttonType='inverted'>Shop Kids</Button>
                  </Link> */}

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
     export default Women
