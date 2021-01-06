import { useState, useContext, useEffect } from 'react';
import { useHistory } from 'react-router-dom'
import { Auth } from '../../Context/AuthContext';

import { Form } from '../Login/styles';

function Login() {
  const { user, loading } = useContext(Auth);
  const history = useHistory();

  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  useEffect(() => {
    if (user !== null) history.replace('/');
  }, [user, history])

  const handleLoginChange = (e) => {
    e.preventDefault();
  }

  return (
    <Form onSubmit={handleLoginChange}>
      <label htmlFor="name">Nome</label>
      <input type="text" id="name" placeholder="digite seu nome"
        value={username} onChange={e => setUsername(e.target.value)} />

      <label htmlFor="email">E-mail</label>
      <input type="email" id="email" placeholder="digite seu e-mail"
        value={email} onChange={e => setEmail(e.target.value)} />

      <label htmlFor="password">Password</label>
      <input type="password" id="password" placeholder="digite sua senha"
        value={password} onChange={e => setPassword(e.target.value)} />

      <button type="submit" disabled={loading === true && true}>
        {loading ? 'Carregando...' : 'Cadastrar'}
      </button>
    </Form>
  );
}

export default Login;