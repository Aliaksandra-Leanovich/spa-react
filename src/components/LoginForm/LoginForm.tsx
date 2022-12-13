import { yupResolver } from "@hookform/resolvers/yup";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { useState } from "react";
import { Controller, useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { ButtonVariants } from "../../enums/ButtonVariants";
import { getAuthError, validationSchema } from "../../helper";
import { routes } from "../../routes";
import { useAppDispatch } from "../../store/hooks";
import { setUserToken } from "../../store/slices/userSlice";
import { app } from "../../utils";
import { Button } from "../Button/Button";
import { Input } from "../Input";
import { IUserForm } from "../types";
import { ContainerFormSC, StyledFormSC } from "./styles";

export const LoginForm = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const localStorageKey = "userToken";

  const [error, setError] = useState("");

  const {
    register,
    handleSubmit,
    clearErrors,
    control,
    formState: { errors },
  } = useForm<IUserForm>({
    resolver: yupResolver(validationSchema),
  });

  const setUserTokenToStorage = (token: string) => {
    localStorage.setItem(localStorageKey, token);
    dispatch(setUserToken(token));
  };

  const onSubmit = (data: IUserForm) => {
    const auth = getAuth(app);

    signInWithEmailAndPassword(auth, data.email, data.password)
      .then(async (userCredential) => {
        const token = await userCredential.user.getIdToken();
        setUserTokenToStorage(token);
        navigate(routes.HOME);
      })
      .catch((error) => {
        setError(getAuthError(error.code));
      });
  };

  return (
    <ContainerFormSC>
      <StyledFormSC onSubmit={handleSubmit(onSubmit)}>
        <Controller
          name="email"
          control={control}
          render={({ field: { onChange, value } }) => (
            <Input
              type="email"
              label="email"
              value={value}
              onChange={onChange}
              errors={errors.email?.message || error}
              register={register}
              placeholder="Enter your email"
            />
          )}
          rules={{
            required: false,
            onChange: () => {
              if (errors) {
                clearErrors("password");
                clearErrors("email");
              }
            },
          }}
        />
        <Controller
          name="password"
          control={control}
          render={({ field: { onChange, value, onBlur } }) => (
            <Input
              type="password"
              label="password"
              value={value}
              onChange={onChange}
              errors={errors.password?.message}
              register={register}
              placeholder="Enter your password"
            />
          )}
          rules={{
            required: false,
            onChange: () => {
              if (!errors) {
                clearErrors("password");
                clearErrors("email");
              }
            },
          }}
        />
        <Button variant={ButtonVariants.secondary} type="submit">
          Login
        </Button>
      </StyledFormSC>
    </ContainerFormSC>
  );
};
