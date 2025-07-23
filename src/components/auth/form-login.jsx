import { useState } from "react";
import { Form } from "./form-components";
import { Button, TextField } from "@mui/material";
import { auth } from "../../firebase";
import { signInWithEmailAndPassword } from "firebase/auth";
import { FirebaseError } from "firebase/app";
import { Error } from "./error";

export function LoginForm({ setIsPopupOpen }) {
  const errors = {
    "auth/invalid-credential": "Log in failed. Please try again",
  };
  const [isLoading, setLoading] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const onChange = (e) => {
    const {
      target: { name, value },
    } = e;
    if (name === "email") {
      setEmail(value);
    } else if (name === "password") {
      setPassword(value);
    }
  };
  const onSubmit = async (e) => {
    e.preventDefault();
    setError("");
    if (isLoading || email === "" || password === "") return;
    try {
      setLoading(true);
      await signInWithEmailAndPassword(auth, email, password);
      setIsPopupOpen(false);
    } catch (err) {
      let displayedErrMsg = "Unknown error.";
      if (err instanceof FirebaseError) {
        displayedErrMsg = errors[err.code] ?? "Unknown error.";
      }
      setError(displayedErrMsg);
    } finally {
      setLoading(false);
    }
  };

  return (
    <Form onSubmit={onSubmit}>
      <TextField
        label="E-mail"
        type="email"
        id="email"
        size="small"
        sx={{ width: "100%" }}
        name="email"
        onChange={onChange}
        value={email}
      ></TextField>
      <TextField
        label="Password"
        type="password"
        id="password"
        size="small"
        sx={{ width: "100%" }}
        name="password"
        onChange={onChange}
        value={password}
      ></TextField>
      <Button type="submit" variant="contained">
        Log In
      </Button>
      {error !== "" ? <Error message={error}></Error> : null}
    </Form>
  );
}
