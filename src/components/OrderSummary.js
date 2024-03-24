import React from 'react';
import '../styles/OrderSummary.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimesCircle } from '@fortawesome/free-solid-svg-icons';


function OrderSummary({ products }) {
    products = [{name: "oyun1", price: "30", type:"tam"}, {name: "oyun1", price: "20", type:"tam"}, {name: "oyun1", price: "20", type:"öğrenci"}, {name: "oyun4", price: "20", type:"öğrenci"}]

    const removeProduct = (index) => {
        console.log("deleted")
    }

    return (
        <div>   
            <div className="order-summary">
                <h2>Biletler</h2>
                <ul>
                    {products.map((product, index) => (
                        <li key={index} className="product-container">
                            <div className="product-info">
                                <span className="close-button" onClick={() => removeProduct(index)}><FontAwesomeIcon icon={faTimesCircle}/></span>
                                <span><b>Oyun İsmi: </b>{product.name}&nbsp;</span>
                                <span><b>Bilet Tipi: </b>{product.type}&nbsp;</span>
                                <span><b>Bilet Tutarı: </b>{product.price}&nbsp;TL</span>
                            </div>
                        </li>
                    ))}
                </ul>
            </div>
            <div className="total">
                <span className='total-text'><b>TOPLAM TUTAR: 90 TL</b></span>

            </div>
        </div>
    );
}

export default OrderSummary;