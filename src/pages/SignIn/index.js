import React from 'react';
import { Link } from 'react-router-dom';
import { Form, Input } from '@rocketseat/unform';
import * as YUP from 'yup';

import logo from '~/assets/logo.svg';

const schema = YUP.object().shape({
  email: YUP.string()
    .email('Insira um e-mail válido')
    .required('O e-mail é obrigatório'),

  password: YUP.string().required('A senha é obrigatória'),
});

function SignIn() {
  const handleSubmit = (data) => {
    // eslint-disable-next-line no-console
    console.log(data);
  };

  return (
    <>
      <img src={logo} alt="GoBarber" />

      <Form schema={schema} onSubmit={handleSubmit}>
        <Input name="email" type="email" placeholder="E-mail" />
        <Input name="password" type="password" placeholder="Senha" />

        <button type="submit">Acessar</button>
        <Link to="/register">Criar conta gratuita</Link>
      </Form>
    </>
  );
}

export default SignIn;
