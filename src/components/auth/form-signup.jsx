import { Form } from "./form-components";
import { Button, TextField } from "@mui/material";

import { FirebaseError } from "firebase/app";
import { useState } from "react";
import { Error } from "./error";
import { auth } from "../../firebase";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";

export function SignUpForm() {
  const [isLoading, setLoading] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const errors = {
    "auth/email-already-in-use": `Email already registered.\nTry logging in instead.`,
    "auth/weak-password": "Password should be at least 6 characters.",
    "auth/invalid-email": "Invalid email.",
  };
  const onChange = (e) => {
    const {
      target: { name, value },
    } = e;
    if (name === "name") {
      setName(value);
    } else if (name === "email") {
      setEmail(value);
    } else if (name === "password") {
      setPassword(value);
    }
  };
  const onSubmit = async (e) => {
    e.preventDefault();
    setError("");
    if (isLoading || name === "" || email === "" || password === "") return;
    try {
      setLoading(true);
      const credentials = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      await updateProfile(credentials.user, {
        displayName: name,
      });
    } catch (err) {
      let displayedErrMsg = "Unknown error.";
      if (err instanceof FirebaseError) {
        displayedErrMsg = errors[err.code];
        setError(displayedErrMsg);
      }
    } finally {
      setLoading(false);
    }
  };
  return (
    <Form onSubmit={onSubmit}>
      <TextField
        label="Name"
        type="text"
        name="name"
        size="small"
        value={name}
        sx={{ width: "100%" }}
        onChange={onChange}
        required
      ></TextField>
      <TextField
        label="E-mail"
        type="email"
        name="email"
        size="small"
        value={email}
        sx={{ width: "100%" }}
        onChange={onChange}
        required
      ></TextField>
      <TextField
        label="Password"
        type="password"
        name="password"
        size="small"
        value={password}
        sx={{ width: "100%" }}
        onChange={onChange}
        required
      ></TextField>
      <Button type="submit" variant="contained">
        Sign up
      </Button>
      {error !== "" ? <Error message={error}></Error> : null}
    </Form>
  );
}
