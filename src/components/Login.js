import React from 'react'
import '../styles/Login.css';

function Login() {
  return (
    <div>
      <div className="login-box">
        <form>
          <div className="user-box">
            <input type="text" name="" required=""/>
            <label>Kullanıcı Adı</label>
          </div>
          <div className="user-box">
            <input type="password" name="" required=""/>
            <label>Şifre</label>
          </div>
          <a href="#">
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            Giriş Yap
          </a>
        </form>
      </div>
    </div>
  )
}

export default Login