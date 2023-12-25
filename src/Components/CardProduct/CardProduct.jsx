import "./CardProduct.css";
import { Buttons } from "../index";

const CardProduct = (props) => {
    return (
        <div className="card-product">
            <img src={props.image} alt="card product" />
            <div className="product-info">
                <h3>{props.title}</h3>
                <p>{props.time}</p>
                <div className="product-price">
                    <span>{props.price}</span>
                    <span>{props.price}</span>
                </div>
                <Buttons>Order Now</Buttons>
            </div>
        </div>
    );
};

export default CardProduct;
