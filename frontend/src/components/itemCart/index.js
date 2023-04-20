import React from "react";
import '../../styles/sudul/itemCart.css';

function ItemCart() {

    const userType = sessionStorage.getItem("user-type");

    return (
        <div className="container">
            {userType === ("Buyer") && (
                <div className="floating-parent">
                    <div className="tooltip">My Cart</div>
                    <div className="right-button">
                        <i class="fa-solid fa-phone-flip"></i>
                    </div>
                </div>
            )}
        </div>
    );
}
export default ItemCart;