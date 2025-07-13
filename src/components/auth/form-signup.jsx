import { Form, Input } from "./form-components";
import { Button, TextField } from "@mui/material";

export function SignUpForm() {
  return (
    <Form>
      <div>
        <TextField
          label="E-mail"
          type="email"
          id="email"
          size="small"
          sx={{ width: "100%" }}
        ></TextField>
      </div>
      <div>
        <TextField
          label="Password"
          type="password"
          id="password"
          size="small"
          sx={{ width: "100%" }}
        ></TextField>
      </div>
      <Button type="submit" variant="contained">
        Sign up
      </Button>
    </Form>
  );
}
