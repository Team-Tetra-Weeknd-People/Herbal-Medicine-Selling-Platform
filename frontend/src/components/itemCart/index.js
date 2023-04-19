import React from "react";
import '../../styles/sudul/itemCart.css';

function ItemCart(){
    return(
        <div className="container">
            <a href="tel:">
                <div className="floating-parent">
                 <div className="tooltip">My Cart</div>
                     <div className="right-button">
                         <i class="fa-solid fa-phone-flip"></i>
                    </div>
                </div>
            </a>
        </div>
    );
}
export default ItemCart;