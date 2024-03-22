import React from 'react'
import { Link, useParams } from 'react-router-dom';
import '../styles/SeatSelect.css';

export default function SeatSelect() {
    const { playName } = useParams();

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
                    <div className="row">
                    <div id="1" className="seat occupied">A1</div>
                    <div id="2" className="seat">B2</div>
                    <div id="3" className="seat">C3</div>
                    <div id="4" className="seat">D4</div>
                    <div id="5" className="seat">E5</div>
                    <div id="6" className="seat">F6</div>
                    <div id="7" className="seat occupied">G7</div>
                    <div id="8" className="seat occupied">H8</div>
                    <div id="9" className="seat">J9</div>
                    <div id="10" className="seat">K10</div>
                    <div id="11" className="seat">L11</div>
                    <div id="12" className="seat">M12</div>
                    <div id="13" className="seat">N13</div>
                    <div id="14" className="seat">O14</div>
                    <div id="15" className="seat">P15</div>
                    <div id="16" className="seat">R16</div>
                    </div>
                    <div className="row">
                    <div id="1" className="seat">A1</div>
                    <div id="2" className="seat">B2</div>
                    <div id="3" className="seat">C3</div>
                    <div id="4" className="seat">D4</div>
                    <div id="5" className="seat">E5</div>
                    <div id="6" className="seat">F6</div>
                    <div id="7" className="seat">G7</div>
                    <div id="8" className="seat">H8</div>
                    <div id="9" className="seat">J9</div>
                    <div id="10" className="seat">K10</div>
                    <div id="11" className="seat">L11</div>
                    <div id="12" className="seat">M12</div>
                    <div id="13" className="seat">N13</div>
                    <div id="14" className="seat">O14</div>
                    <div id="15" className="seat">P15</div>
                    <div id="16" className="seat">R16</div>
                    </div>
                    <div className="row">
                    <div id="1" className="seat">A1</div>
                    <div id="2" className="seat">B2</div>
                    <div id="3" className="seat">C3</div>
                    <div id="4" className="seat">D4</div>
                    <div id="5" className="seat">E5</div>
                    <div id="6" className="seat">F6</div>
                    <div id="7" className="seat">G7</div>
                    <div id="8" className="seat">H8</div>
                    <div id="9" className="seat">J9</div>
                    <div id="10" className="seat">K10</div>
                    <div id="11" className="seat">L11</div>
                    <div id="12" className="seat">M12</div>
                    <div id="13" className="seat">N13</div>
                    <div id="14" className="seat">O14</div>
                    <div id="15" className="seat">P15</div>
                    <div id="16" className="seat">R16</div>
                    </div>
                    <div className="row">
                    <div id="1" className="seat">A1</div>
                    <div id="2" className="seat">B2</div>
                    <div id="3" className="seat">C3</div>
                    <div id="4" className="seat">D4</div>
                    <div id="5" className="seat">E5</div>
                    <div id="6" className="seat">F6</div>
                    <div id="7" className="seat">G7</div>
                    <div id="8" className="seat">H8</div>
                    <div id="9" className="seat">J9</div>
                    <div id="10" className="seat">K10</div>
                    <div id="11" className="seat">L11</div>
                    <div id="12" className="seat">M12</div>
                    <div id="13" className="seat">N13</div>
                    <div id="14" className="seat">O14</div>
                    <div id="15" className="seat">P15</div>
                    <div id="16" className="seat">R16</div>
                    </div>
                    <div className="row">
                    <div id="1" className="seat">A1</div>
                    <div id="2" className="seat">B2</div>
                    <div id="3" className="seat">C3</div>
                    <div id="4" className="seat">D4</div>
                    <div id="5" className="seat">E5</div>
                    <div id="6" className="seat">F6</div>
                    <div id="7" className="seat">G7</div>
                    <div id="8" className="seat">H8</div>
                    <div id="9" className="seat">J9</div>
                    <div id="10" className="seat">K10</div>
                    <div id="11" className="seat">L11</div>
                    <div id="12" className="seat">M12</div>
                    <div id="13" className="seat">N13</div>
                    <div id="14" className="seat">O14</div>
                    <div id="15" className="seat">P15</div>
                    <div id="16" className="seat">R16</div>
                    </div>
                    <div className="row">
                    <div id="1" className="seat">A1</div>
                    <div id="2" className="seat">B2</div>
                    <div id="3" className="seat">C3</div>
                    <div id="4" className="seat">D4</div>
                    <div id="5" className="seat">E5</div>
                    <div id="6" className="seat">F6</div>
                    <div id="7" className="seat">G7</div>
                    <div id="8" className="seat">H8</div>
                    <div id="9" className="seat">J9</div>
                    <div id="10" className="seat">K10</div>
                    <div id="11" className="seat">L11</div>
                    <div id="12" className="seat">M12</div>
                    <div id="13" className="seat">N13</div>
                    <div id="14" className="seat">O14</div>
                    <div id="15" className="seat">P15</div>
                    <div id="16" className="seat">R16</div>
                    </div>
                    <div className="divider"></div>
                    <div className="row">
                    <div id="1" className="seat">A1</div>
                    <div id="2" className="seat">B2</div>
                    <div id="3" className="seat">C3</div>
                    <div id="4" className="seat">D4</div>
                    <div id="5" className="seat">E5</div>
                    <div id="6" className="seat">F6</div>
                    <div id="7" className="seat">G7</div>
                    <div id="8" className="seat">H8</div>
                    <div id="9" className="seat">J9</div>
                    <div id="10" className="seat">K10</div>
                    <div id="11" className="seat">L11</div>
                    <div id="12" className="seat">M12</div>
                    <div id="13" className="seat">N13</div>
                    <div id="14" className="seat">O14</div>
                    <div id="15" className="seat">P15</div>
                    <div id="16" className="seat">R16</div>
                    </div>
                    <div className="row">
                    <div id="1" className="seat">A1</div>
                    <div id="2" className="seat">B2</div>
                    <div id="3" className="seat">C3</div>
                    <div id="4" className="seat">D4</div>
                    <div id="5" className="seat">E5</div>
                    <div id="6" className="seat">F6</div>
                    <div id="7" className="seat">G7</div>
                    <div id="8" className="seat">H8</div>
                    <div id="9" className="seat">J9</div>
                    <div id="10" className="seat">K10</div>
                    <div id="11" className="seat">L11</div>
                    <div id="12" className="seat">M12</div>
                    <div id="13" className="seat">N13</div>
                    <div id="14" className="seat">O14</div>
                    <div id="15" className="seat">P15</div>
                    <div id="16" className="seat">R16</div>
                    </div>
                    <div className="row">
                    <div id="1" className="seat">A1</div>
                    <div id="2" className="seat">B2</div>
                    <div id="3" className="seat">C3</div>
                    <div id="4" className="seat">D4</div>
                    <div id="5" className="seat">E5</div>
                    <div id="6" className="seat">F6</div>
                    <div id="7" className="seat">G7</div>
                    <div id="8" className="seat">H8</div>
                    <div id="9" className="seat">J9</div>
                    <div id="10" className="seat">K10</div>
                    <div id="11" className="seat">L11</div>
                    <div id="12" className="seat">M12</div>
                    <div id="13" className="seat">N13</div>
                    <div id="14" className="seat">O14</div>
                    <div id="15" className="seat">P15</div>
                    <div id="16" className="seat">R16</div>
                    </div>
                    <div className="row">
                    <div id="1" className="seat">A1</div>
                    <div id="2" className="seat">B2</div>
                    <div id="3" className="seat">C3</div>
                    <div id="4" className="seat">D4</div>
                    <div id="5" className="seat">E5</div>
                    <div id="6" className="seat">F6</div>
                    <div id="7" className="seat">G7</div>
                    <div id="8" className="seat">H8</div>
                    <div id="9" className="seat">J9</div>
                    <div id="10" className="seat">K10</div>
                    <div id="11" className="seat">L11</div>
                    <div id="12" className="seat">M12</div>
                    <div id="13" className="seat">N13</div>
                    <div id="14" className="seat">O14</div>
                    <div id="15" className="seat">P15</div>
                    <div id="16" className="seat">R16</div>
                    </div>
                    <div className="row">
                    <div id="1" className="seat">A1</div>
                    <div id="2" className="seat">B2</div>
                    <div id="3" className="seat">C3</div>
                    <div id="4" className="seat">D4</div>
                    <div id="5" className="seat">E5</div>
                    <div id="6" className="seat">F6</div>
                    <div id="7" className="seat">G7</div>
                    <div id="8" className="seat">H8</div>
                    <div id="9" className="seat">J9</div>
                    <div id="10" className="seat">K10</div>
                    <div id="11" className="seat">L11</div>
                    <div id="12" className="seat">M12</div>
                    <div id="13" className="seat">N13</div>
                    <div id="14" className="seat">O14</div>
                    <div id="15" className="seat">P15</div>
                    <div id="16" className="seat">R16</div>
                    </div>
                    <div className="row">
                    <div id="1" className="seat">A1</div>
                    <div id="2" className="seat">B2</div>
                    <div id="3" className="seat">C3</div>
                    <div id="4" className="seat">D4</div>
                    <div id="5" className="seat">E5</div>
                    <div id="6" className="seat">F6</div>
                    <div id="7" className="seat">G7</div>
                    <div id="8" className="seat">H8</div>
                    <div id="9" className="seat">J9</div>
                    <div id="10" className="seat">K10</div>
                    <div id="11" className="seat">L11</div>
                    <div id="12" className="seat">M12</div>
                    <div id="13" className="seat">N13</div>
                    <div id="14" className="seat">O14</div>
                    <div id="15" className="seat">P15</div>
                    <div id="16" className="seat">R16</div>
                    </div>
                </div>
            </div>

            <div className="payment-section">
                <p className="text">
                    <span id="count">0</span> adet koltuk seçtiniz. 
                </p>
                <p className="text">
                    Ödemeniz gereken tutar <span
                    id="total"
                    >0</span
                > Lira.
                </p>
                <Link to={`/plays/${playName}/payment`}>
                    <button className="custom-btn btn-1" onClick={buyTicket}>ÖDEME YAP</button>
                </Link>
                
            </div>
        </div>
    );
}
