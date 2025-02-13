import "../Css/products-list.css"
import Product from "./Product"
export default function ProductsList(props) {
    const list = props.products.map(p => {
        return <Product product={p} key={p.id} cartCounter={props.cartCounter} setCartCounter={props.setCartCounter} />
    })
    return (
        <div className="products-list">
            {list}
        </div>
    )
}