import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import axios from "axios";
import { IconButton } from "@mui/material";
import RemoveRedEyeIcon from "@mui/icons-material/RemoveRedEye";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import Link from "next/link";
import { useDispatch } from "react-redux";
import ResponseMessage from "../../components/common/ResponseMessage";
import { signin } from "../../src/features/authSlice";

export default function Register() {
  const [formValue, setFormValue] = useState({
    name: "",
    email: "",
    password: "",
    mobile: "",
  });
  const [loading, setLoading] = useState();
  const [showPassword, setShowPassword] = useState();
  const [error, setError] = useState();
  const [msg, setMsg] = useState();
  const dispatch = useDispatch();
  const router = useRouter();

  const inputObj = [
    {
      key: 0,
      type: "text",
      name: "name",
      placeholder: "Name",
      value: formValue.name,
    },
    {
      key: 1,
      type: "text",
      name: "email",
      placeholder: "Email",
      value: formValue.email,
    },
    {
      key: 2,
      type: "text",
      name: "mobile",
      placeholder: "Mobile number",
      value: formValue.mobile,
    },
    {
      key: 3,
      type: "password",
      name: "password",
      placeholder: "Password",
      value: formValue.password,
    },
  ];

  function validateEmail(mail) {
    if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(mail)) {
      setError("");
      return true;
    }
    setError("invalid email");
    return false;
  }

  function handleChange(event) {
    setFormValue((prev) => ({
      ...prev,
      [event.target.name]: event.target.value,
    }));
  }

  async function handleSubmit(event) {
    event.preventDefault();
    if (!formValue.password || !formValue.name || !formValue.email) {
      setError("Fill all the fields");
      return;
    }

    if (validateEmail(formValue.email)) {
      setLoading(true);
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_SERVER_URL}/auth/register`,
        {
          method: "POST",
          body: JSON.stringify(formValue),
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      const data = await response.json();
      setLoading(false);

      if (data.error) {
        setError(data.error);
      } else {
        window.localStorage.setItem("token", data.token);
        dispatch(signin(data.token));
        router.push("/");
      }
    }
  }

  function handleSnackBarOnClose() {
    setError(null);
    setMsg(null);
  }

  return (
    <>
      <ResponseMessage
        handleSnackBarOnClose={handleSnackBarOnClose}
        error={error}
        message={msg}
      />
      <section className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
        <form
          onSubmit={handleSubmit}
          className="flex flex-col shadow-0 us:px-10 p-5 justify-center w-screen sm:w-[340px] sm:h-auto shadow-lg rounded-xl"
        >
          <h1 className="text-3xl pb-8 font-slab text-orange-500 tracking-wider text-center">
            Register
          </h1>
          <main className="flex flex-col space-y-4 items-center justify-center">
            {inputObj.map((item) => {
              return (
                <div key={item.key} className=" relative w-full">
                  <input
                    {...item}
                    type={
                      item.type === "password"
                        ? showPassword
                          ? "text"
                          : "password"
                        : "text"
                    }
                    onChange={handleChange}
                    autoComplete="off"
                    className={`border block px-3 py-2 w-full focus:border-orange-500 outline-none ${
                      item.type === "password" ? "relative" : null
                    }`}
                  />
                  {item.type === "password" ? (
                    <IconButton
                      onClick={() => setShowPassword((prev) => !prev)}
                      sx={{ position: "absolute", top: "1px", right: "8px" }}
                    >
                      {showPassword ? (
                        <VisibilityOffIcon sx={{ color: "orange" }} />
                      ) : (
                        <RemoveRedEyeIcon sx={{ color: "orange" }} />
                      )}
                    </IconButton>
                  ) : null}
                </div>
              );
            })}
            <button
              type="submit"
              className="px-6 py-2 bg-orange-500 text-white w-full cursor-pointer hover:ring-2 ring-orange-400 ring-offset-2"
            >
              {loading ? "Loading..." : msg ? msg : "Submit"}
            </button>
          </main>
          <footer>
            <Link href="/login">
              <a className="pt-4 inline-block hover:underline text-sm text-slate-500">
                {"Already have an account?"}
              </a>
            </Link>
          </footer>
        </form>
      </section>
    </>
  );
}
