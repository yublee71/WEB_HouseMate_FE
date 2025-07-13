import { Form } from "./form-components";
import { Button, TextField } from "@mui/material";

export function LoginForm() {
  return (
    <Form>
      <div>
        {/* <label htmlFor="email">E-mail</label> */}
        <TextField
          label="E-mail"
          type="email"
          id="email"
          size="small"
          sx={{ width: "100%" }}
        ></TextField>
        {/* <Input type="email" id="email" required /> */}
      </div>
      <div>
        {/* <label htmlFor="password">Password</label> */}
        <TextField
          label="Password"
          type="password"
          id="password"
          size="small"
          sx={{ width: "100%" }}
        ></TextField>
        {/* <Input type="password" id="password" required /> */}
      </div>
      <Button type="submit" variant="contained">
        Log In
      </Button>
    </Form>
  );
}
