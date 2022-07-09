import { useContext } from "react";

import { CatalogueContext } from "../../providers/Catalogo/catalogue";
import { CartContext } from "../../providers/Carrinho/cart";
import Button from "../Botao";
import {Ul, Container} from './style';
const ListaProdutos = ({type}) => {

    const {catalogue} = useContext(CatalogueContext);
    const {cart} = useContext(CartContext);

    return(
        <>
        <Container>
       {type ==='catalogue' ? <h2>Catalogo de produtos</h2> : <h2> Carrinho de Compras</h2>}

        
   
        <Ul>

            {type === 'catalogue' && catalogue.map((item, index) =>(
                
                
                <li key={index}>
                    {item.name} <Button type={type} item={item} />
                </li>
                
            ))}
         </Ul>
      
          <Ul>
            {type === 'cart' && cart.map((item, index) =>(
            
           
                <li key={index}>
                {item.name} <Button type={type} item={item} />
                </li>
             
            ))}
        </Ul>

        </Container>
        </>
    )
}

export default ListaProdutos;