import { Form, Input } from "./form-components";
import { Button } from "@mui/material";

export function LoginForm() {
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
      <Button type="submit" variant="contained">
        Log In
      </Button>
    </Form>
  );
}
