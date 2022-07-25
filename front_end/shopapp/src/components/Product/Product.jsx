import Button from '../Button/Button'
export default function Product() {

    return (
        <>
      <div className="product-card">
        {/* <img src={imageUrl} alt={`${name}`} />
        <div className="">
            <span className="brand">{brand}</span>
            <span className="style">{style}</span>
            <span className="size">{size}</span>
            <span className="description">{descriprion}</span>
            <span className="price">{price}</span> */}
            <Button buttonType='inverted'>Add to card</Button>
        {/* </div> */}
      </div>
    
        </>
    )
}