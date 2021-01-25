import React from 'react';
import { Link } from 'react-router-dom';
import { Form, Input } from '@rocketseat/unform';
import * as YUP from 'yup';

import logo from '~/assets/logo.svg';

const schema = YUP.object().shape({
  name: YUP.string().required('O nome é obrigatório'),
  email: YUP.string()
    .email('Insira um e-mail válido')
    .required('O e-mail é obrigatório'),

  password: YUP.string()
    .min(6, 'No minimo 6 carateres')
    .required('A senha é obrigatória'),
});

function SignUp() {
  const handleSubmit = (data) => {
    // eslint-disable-next-line no-console
    console.log(data);
  };

  return (
    <>
      <img src={logo} alt="GoBarber" />

      <Form onSubmit={handleSubmit} schema={schema}>
        <Input name="name" type="text" placeholder="Nome completo" />
        <Input name="email" type="email" placeholder="E-mail" />
        <Input name="password" type="password" placeholder="Senha" />

        <button type="submit">Criar conta</button>
        <Link to="/">Já possuo Login</Link>
      </Form>
    </>
  );
}

export default SignUp;
