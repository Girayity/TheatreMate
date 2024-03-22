import React from 'react';
import '../styles/Home.css';
import BannerImage from '../images/main-banner.jpg';

export const Home = () => {
    return (
        <div className="mainPage" style={{ backgroundImage: `url(${BannerImage})` }}> 
            <div className="banner-box">  
                <h1>MART AYINDA 30'DAN FAZLA OYUNU SİZLERLE BULUŞTURUYORUZ </h1>
                <p id="text" className="text" style={{ marginTop: '5%' }}> 
                27 Mart Dünya Tiyatro Gününüz Kutlu Olsun<br/>
                </p>
            </div>  
        </div>
    );
};

export default Home; 
