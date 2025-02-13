import "../Css/product.css"
export default function Product(props) {
    return (
        <div className="product">
            <img src={props.product.image} alt="product-image" />
            <h2>{props.product.title}</h2>
            <p>{props.product.description}</p>
            <div className="info">
                <button onClick={_ => props.setCartCounter(props.cartCounter + 1)}>Add to Cart</button>
                <span className="price">{props.product.price}</span>
            </div>
        </div>
    )
}