import React from 'react';
import { Link } from 'react-router-dom';

import logo from '~/assets/logo.svg';

function SignIn() {
  return (
    <>
      <img src={logo} alt="GoBarber" />

      <form action="">
        <input type="email" placeholder="E-mail" />
        <input type="password" placeholder="Senha" />

        <button type="submit">Acessar</button>
        <Link to="/register">Criar conta gratuita</Link>
      </form>
    </>
  );
}

export default SignIn;
