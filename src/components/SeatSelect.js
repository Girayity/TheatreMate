import React from 'react'
import { Link, useParams } from 'react-router-dom';
import '../styles/SeatSelect.css';

export default function SeatSelect() {
    const { playName } = useParams();

    // Koltuklar için bir dizi oluştur
    const rows = Array.from({ length: 8 }, (_, index) => String.fromCharCode(65 + index));
    const seats = Array.from({ length: 16 }, (_, index) => index + 1);

    function buyTicket() {
        console.log("ok")
    }
    
    return (
        <div className='seat-select-div'>
            <div className="seat-section">
                <ul className="showcase">
                    <li>
                    <div id="" className="seat"></div>
                    <small>Boş</small>
                    </li>
                    <li>
                    <div className="seat selected"></div>
                    <small>Seçili</small>
                    </li>
                    <li>
                    <div id="" className="seat occupied"></div>
                    <small>Dolu</small>
                    </li>
                </ul>
                
                <div className="container-seat">
                    <div className="stage">SAHNE</div>
                        {/* Koltukları döngü ile oluştur */}
                        {rows.map(row => (
                            <div key={row} className="row">
                                {seats.map(seat => (
                                    <div key={`${row}-${seat}`} className="seat">
                                        {row}{seat}
                                    </div>
                                ))}
                            </div>
                        ))}
                </div>
            </div>

            <div className="payment-section">
                <p className="text">
                    <span id="count">0</span> adet koltuk seçtiniz. 
                </p>
                <Link to={`/plays/${playName}/payment`}>
                    <button className="button-seatSelect" onClick={buyTicket}>Devam Et</button>
                </Link>
                
            </div>
        </div>
    );
}
