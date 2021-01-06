import { Form } from './styles'

function Login() {
  return (
    <Form>
      <label htmlFor="email">E-mail</label>
      <input type="email" id="email" placeholder="digite seu e-mail" />

      <label htmlFor="password">Password</label>
      <input type="password" id="password" placeholder="digite sua senha" />

      <button type="submit">Login</button>
    </Form>
  );
}

export default Login;