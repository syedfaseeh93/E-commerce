import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { getUser, register } from "../state/Auth/Action";
import { store } from "../state/store";

const RegisterForm = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const jwt = localStorage.getItem("jwt");
  console.log("Jwt Token",jwt);
  
  //This line means => Give me Redux Data
  const { auth } = useSelector((store) => store);

  useEffect(() => {
    if (jwt) {
      dispatch(getUser(jwt));
    }
  }, [jwt]);

  const HandleSubmit = (e) => {
    e.preventDefault();

    const data = new FormData(e.currentTarget);

    const userData = {
      firstName: data.get("firstName"),
      lastName: data.get("lastName"),
      email: data.get("email"),
      password: data.get("password"),
      mobile: data.get("mobile"),
    };

    dispatch(register(userData));

    console.log(userData);
  };

  const handleClick = () => {
    navigate("/login");
  };

  return (
    <div>
      <form onSubmit={HandleSubmit}>
        <Grid spacing={3} container>
          <Grid size={{ xs: 12, sm: 6 }}>
            <TextField
              required
              id="firstName"
              name="firstName"
              label="First Name"
              fullWidth
              autoComplete="given-name"
            />
          </Grid>
          <Grid size={{ xs: 12, sm: 6 }}>
            <TextField
              required
              id="lastName"
              name="lastName"
              label="Last Name"
              fullWidth
              autoComplete="given-name"
            />
          </Grid>
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
            <TextField
              required
              id="mobile"
              name="mobile"
              label="Mobile"
              fullWidth
              autoComplete="mobile"
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
              Register
            </Button>
          </Grid>
        </Grid>
        <div className="mt-10 flex justify-center items-center ">
          <div>
            Already Have an Account ?
            <button
              className="text-purple-600 font-bold cursor-pointer mx-2 hover:underline"
              onClick={handleClick}
            >
              Login
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default RegisterForm;
