import { useState, useContext, useEffect } from 'react';
import { useHistory } from 'react-router-dom'
import { Auth } from '../../Context/AuthContext';

import { Form } from './styles';

function Login() {
  const { user, signIn, loading } = useContext(Auth);
  const history = useHistory();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  useEffect(() => {
    if (user !== null) history.replace('/');
  }, [user, history])

  const handleLoginChange = (e) => {
    e.preventDefault();
    signIn(email, password)
  }

  return (
    <Form onSubmit={handleLoginChange}>
      <label htmlFor="email">E-mail</label>
      <input type="email" id="email" placeholder="digite seu e-mail"
        value={email} onChange={e => setEmail(e.target.value)} />

      <label htmlFor="password">Password</label>
      <input type="password" id="password" placeholder="digite sua senha"
        value={password} onChange={e => setPassword(e.target.value)} />

      <button type="submit" disabled={loading === true && true}>
        {loading ? 'Carregando...' : 'Logar'}
      </button>
    </Form>
  );
}

export default Login;