import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";
import React from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { login } from "../state/Auth/Action";

const LoginForm = () => {

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();

    const data = new FormData(e.currentTarget);

    const formData = {
      email: data.get("email"),
      password: data.get("password"),
    };

    dispatch(login(formData))
    console.log(formData);
  };

  const handleClick = () => {
    navigate("/register");
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <Grid spacing={3} container>
          <Grid size={{ xs: 12 }}>
            <TextField
              required
              id="email"
              name="email"
              label="Email"
              fullWidth
              autoComplete="email"
            />
          </Grid>
          <Grid size={{ xs: 12 }}>
            <TextField
              required
              type="password"
              id="password"
              name="password"
              label="Password"
              fullWidth
              autoComplete="password"
            />
          </Grid>
          <Grid size={{ xs: 12 }}>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              size="large"
              sx={{
                mt: 2,
                padding: "10px",
                borderRadius: "10px",
                background: "linear-gradient(45deg, #6a11cb, #2575fc)",
                color: "#fff",
                fontWeight: "bold",
                textTransform: "none",
                "&:hover": {
                  background: "linear-gradient(45deg, #5a0fbf, #1e63e0)",
                },
              }}
            >
              Login
            </Button>
          </Grid>
        </Grid>
        <div className="mt-10 flex justify-center items-center ">
          <div>
            Don't Have an Account? 
            <button className="text-purple-600 font-bold cursor-pointer mx-2 hover:underline" 
            onClick={handleClick}>
              Register
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default LoginForm;
