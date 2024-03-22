import React from 'react';
import { useParams } from 'react-router-dom';
import '../styles/Payment.css';

function Payment() {
  const { playName } = useParams();

  return (
    <div>
      <h2>{playName} için Ödeme</h2>
      <p>Burada {playName} oyunu için ödeme işlemi gerçekleştirilecek.</p>
    </div>
  );
}

export default Payment;