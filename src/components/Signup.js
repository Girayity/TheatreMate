import React from 'react';

function SignUp() {
  return (
    <div>
      <div className="login-box">
        <form>
          <div className="user-box">
            <input type="text" name="" required=""/>
            <label>Kullanıcı Adı</label>
          </div>
          <div className="user-box">
            <input type="email" name="" required=""/>
            <label>Email</label>
          </div>
          <div className="user-box">
            <input type="password" name="" required=""/>
            <label>Şifre</label>
          </div>
          <div className="user-box">
            <input type="password" name="" required=""/>
            <label>Şifre Tekrar</label>
          </div>
          <a href="#">
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            Kayıt Ol
          </a>
        </form>
      </div>
    </div>
  );
}

export default SignUp;