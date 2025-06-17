import { Form, Input, Button } from "./form-components";

export function SignUpForm() {
  return (
    <Form>
      <div>
        <label htmlFor="email">E-mail</label>
        <Input type="email" id="email" required />
      </div>
      <div>
        <label htmlFor="password">Password</label>
        <Input type="password" id="password" required />
      </div>
      <Button type="submit">Sign up</Button>
    </Form>
  );
}
