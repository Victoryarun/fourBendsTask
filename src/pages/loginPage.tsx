import { useState } from "react";
//Styles
import {
  Grid,
  TextField,
  FormControl,
  InputLabel,
  OutlinedInput,
  InputAdornment,
  IconButton,
  FormHelperText,
  Box,
} from "@mui/material";
import { FormStyle, PageTitle, Button, ImgContentSec } from "../assets/css";
import { Login, Visibility, VisibilityOff } from "@mui/icons-material";
//Helper
import { formValid } from "../helpers";
//Redux
import { useDispatch } from "react-redux";
import { setUserAuth } from "../redux/action";
//Images
import loginImg from "../assets/img/before-login.png";

interface IFormData {
  username: string;
  password: string;
}

interface IState {
  formData: IFormData;
  errorData: IFormData & { authError: string };
  showPassword: boolean;
}

const LoginPage = () => {
  const dispatch = useDispatch();
  const [loader, setLoader] = useState<boolean>(false);
  const [state, setState] = useState<IState>({
    formData: {
      username: "kminchelle",
      password: "0lelplR",
    },
    errorData: {
      username: "",
      password: "",
      authError: "",
    },
    showPassword: false,
  });

  const { formData, errorData, showPassword } = state;

  const changeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setState((state) => ({
      ...state,
      formData: {
        ...state.formData,
        [name]: value,
      },
      errorData: {
        ...state.errorData,
        [name]: "",
        authError: "",
      },
    }));
  };

  const handleClickShowPassword = () =>
    setState((state) => ({ ...state, showPassword: !showPassword }));

  const handleMouseDownPassword = (
    event: React.MouseEvent<HTMLButtonElement>
  ) => event.preventDefault();

  const formValidation = () => {
    let errors: IFormData = {
      username: "",
      password: "",
    };
    errors.username = formData.username.length > 0 ? "" : "Enter the username";
    errors.password = formData.password.length > 0 ? "" : "Enter the password";

    setState((state) => ({
      ...state,
      errorData: { ...state.errorData, ...errors },
    }));
    return errors;
  };

  const submit = async () => {
    if (formValid(formData, formValidation())) {
      setLoader(true);
      const response = await fetch("https://dummyjson.com/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      }).then((res) => res.json());

      if (response.message !== "Invalid credentials") {
        const data = {
          ...response,
          isAuthenticated: response.token.length > 0,
        };
        localStorage.setItem("user", JSON.stringify(data));
        dispatch(setUserAuth(data));
      } else {
        setLoader(false);
        setState((state) => ({
          ...state,
          errorData: { ...state.errorData, authError: response.message },
        }));
      }
    }
  };

  const inValidCrediential = errorData.authError.length > 0;
  const userNameValid = errorData.username.length > 0;
  const passwordValid = errorData.password.length > 0;

  return (
    <>
      <PageTitle>Login</PageTitle>

      <Grid container spacing={5} justifyContent="center" alignItems="center">
        <Grid item lg={4}>
          <ImgContentSec>
            <img className="img" src={loginImg} alt="login Img" />
          </ImgContentSec>
        </Grid>

        <Grid item lg={4}>
          <FormStyle>
            <FormControl fullWidth>
              <TextField
                disabled={loader}
                fullWidth
                label="Username"
                name="username"
                value={formData.username}
                variant="outlined"
                onChange={changeHandler}
                error={userNameValid || inValidCrediential}
              />
              {userNameValid && (
                <FormHelperText error={userNameValid}>
                  {errorData.username}
                </FormHelperText>
              )}
            </FormControl>

            <FormControl variant="outlined" fullWidth>
              <InputLabel error={passwordValid}>Password</InputLabel>
              <OutlinedInput
                type={showPassword ? "text" : "password"}
                endAdornment={
                  <InputAdornment position="end">
                    <IconButton
                      onClick={handleClickShowPassword}
                      onMouseDown={handleMouseDownPassword}
                      edge="end"
                    >
                      {showPassword ? <VisibilityOff /> : <Visibility />}
                    </IconButton>
                  </InputAdornment>
                }
                label="Password"
                name="password"
                onChange={changeHandler}
                error={passwordValid || inValidCrediential}
                value={formData.password}
                disabled={loader}
              />
              {passwordValid && (
                <FormHelperText error={passwordValid}>
                  {errorData.password}
                </FormHelperText>
              )}
            </FormControl>

            {inValidCrediential && (
              <Box mb={2} display="flex" justifyContent="center" width="100%">
                <FormHelperText error={inValidCrediential}>
                  {errorData.authError}
                </FormHelperText>
              </Box>
            )}

            <Button onClick={submit} disabled={loader}>
              {loader ? (
                "Loading..."
              ) : (
                <>
                  <Login /> Login
                </>
              )}
            </Button>
          </FormStyle>
        </Grid>
      </Grid>
    </>
  );
};

export default LoginPage;