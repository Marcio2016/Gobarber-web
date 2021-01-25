import React from 'react';
import { Link } from 'react-router-dom';

import logo from '~/assets/logo.svg';

function SignUp() {
  return (
    <>
      <img src={logo} alt="GoBarber" />

      <form action="">
        <input type="text" placeholder="Nome completo" />
        <input type="email" placeholder="E-mail" />
        <input type="password" placeholder="Senha" />

        <button type="submit">Criar conta</button>
        <Link to="/">Já possuo Login</Link>
      </form>
    </>
  );
}

export default SignUp;
