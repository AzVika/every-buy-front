"use client";

import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import EyePassword from "@/assets/Svg/EyePassword.svg";
import EyeInvisibleFilled from "@/assets/Svg/EyeInvisibleFilled.svg";
import CommonInput from "@/components/ui/CommonInput/CommonInput";
import { Form, SubmitButton, TogglePasswordButton } from "./Login.styled";
import Image from "next/image";
import { login } from "@/redux/auth/operations";
import { selectIsLoggedIn } from "@/redux/auth/selectors";
import { useAppDispatch, useAppSelector } from "@/redux/store";
// import axios from "axios";

const Login: React.FC = () => {
  const router = useRouter();
  const [emailOrPhone, setEmailOrPhone] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [showPassword, setShowPassword] = useState<boolean>(false);
  const dispatch = useAppDispatch();
  const isLoggedIn = useAppSelector(selectIsLoggedIn);

  useEffect(() => {
    isLoggedIn && router.push("/user");
  }, [isLoggedIn]);

  // for testing
  // login: "mitskp11@gmail.com",
  // password: "14fgGH7_er$$",

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    // const userRegisterData = {
    //   login: emailOrPhone,
    //   password: password,
    // };

    // try {
    //   const response = await axios.post(
    //     "https://service-authorization-b1jx.onrender.com/auth/auth",
    //     userRegisterData
    //   );
    //   localStorage.setItem("token", `Bearer ${response.data.data.token}`);
    // } catch (error) {
    //   console.error("Login failed", error);
    // }
    dispatch(
      login({
        login: emailOrPhone,
        password: password,
      })
    );
  };

  return (
    <>
      <Form onSubmit={handleSubmit}>
        <CommonInput
          typeTitle="emailOrPhone"
          text="Телефон або e-mail"
          typeInput="text"
          id="emailOrPhone"
          value={emailOrPhone}
          setValue={(e) => setEmailOrPhone(e.target.value)}
          required={true}
          placeholder="Введіть номер телефону або e-mail"
        />

        <CommonInput
          typeTitle="password"
          text="Введіть пароль"
          typeInput={showPassword ? "text" : "password"}
          id="password"
          value={password}
          setValue={(e) => setPassword(e.target.value)}
          placeholder="Введіть пароль"
        >
          <TogglePasswordButton
            type="button"
            onClick={() => setShowPassword(!showPassword)}
            style={{
              position: "absolute",
              right: "0.5rem",
              top: "50%",
              transform: "translateY(-50%)",
            }}
          >
            <Image
              src={showPassword ? EyePassword : EyeInvisibleFilled}
              alt="Toggle Password Visibility"
            />
          </TogglePasswordButton>
        </CommonInput>

        <SubmitButton type="submit">Увійти</SubmitButton>
      </Form>
    </>
  );
};

export default Login;
