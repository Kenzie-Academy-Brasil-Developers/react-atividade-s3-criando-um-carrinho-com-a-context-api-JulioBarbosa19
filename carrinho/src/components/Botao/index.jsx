import { useContext } from "react";
import { CatalogueContext } from "../../providers/Catalogo/catalogue";
import { CartContext } from "../../providers/Carrinho/cart";
import { StyleButton } from "./style";

const Button = ({type, item}) => {
    const {cart, addToCart, removeFromCart} = useContext(CartContext);
    const {catalogue, addToCatalogue, removeFromCatalogue} = useContext(CatalogueContext);

    const text = type === "catalogue" ? "Add to cart" : "Remove from cart";

    const handleClick = () =>{
        if(type === 'catalogue'){
            removeFromCatalogue(item);
            addToCart(item);
        }else {
            removeFromCart(item);
            addToCatalogue(item);
        }
    }

    return (
    <StyleButton onClick={handleClick}>{text}</StyleButton>
    )
}

export default Button;