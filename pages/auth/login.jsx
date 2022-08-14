import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import { IconButton } from "@mui/material";
import RemoveRedEyeIcon from "@mui/icons-material/RemoveRedEye";
import Link from "next/link";
import { useDispatch } from "react-redux";
import { signin } from "../../src/features/authSlice";
import ResponseMessage from "../../components/common/ResponseMessage";

export default function Login() {
  const [formValue, setFormValue] = useState({ email: "", password: "" });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [msg, setMsg] = useState("");
  const [showPassword, setShowPassword] = useState();
  const router = useRouter();
  const dispatch = useDispatch();

  const inputObj = [
    {
      key: 0,
      type: "text",
      name: "email",
      placeholder: "Email",
      value: formValue.email,
    },
    {
      key: 1,
      type: "password",
      name: "password",
      placeholder: "Password",
      value: formValue.password,
    },
  ];

  useEffect(() => {
    if (error) {
      setTimeout(() => {
        setError("");
      }, 3000);
    }
  }, [error]);

  function handleChange(event) {
    setFormValue((prev) => ({
      ...prev,
      [event.target.name]: event.target.value,
    }));
  }

  async function handleSubmit(event) {
    event.preventDefault();

    if (!formValue.password || !formValue.email) {
      setError("Fill all the fields");
      return;
    }

    setLoading(true);
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_SERVER_URL}/auth/login`,
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
      setMsg(data.message);
      window.localStorage.setItem("token", data.token);
      dispatch(signin(data.token));
      router.push("/");
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
      />{" "}
      <section className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
        <form
          onSubmit={handleSubmit}
          className="flex flex-col shadow-lg us:px-10 p-5 justify-center w-screen sm:w-[300px] sm:h-auto rounded-lg"
        >
          <h1 className="text-3xl pb-8 font-slab text-center text-orange-500 tracking-wider">
            Login
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
                    className={`border px-4 py-2 w-full block focus:border-orange-500 outline-none ${
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
              className="px-6 py-2 w-full bg-orange-500 text-white  cursor-pointer hover:ring-2 ring-orange-500 ring-offset-2"
            >
              {loading ? "Loading..." : "Submit"}
            </button>
          </main>
          <footer>
            <Link href="/forget-password">
              <a className="pt-4 inline-block hover:underline text-sm text-slate-500">
                {"Forget Password?"}
              </a>
            </Link>
            <br />
            <Link href="/register">
              <a className=" inline-block hover:underline text-sm text-slate-500">
                {"Don't have an account?"}
              </a>
            </Link>
          </footer>
        </form>
      </section>
    </>
  );
}
