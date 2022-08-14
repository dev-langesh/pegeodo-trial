import { Alert, Snackbar } from "@mui/material";
import React, { useEffect, useRef, useState } from "react";
import { inputObj } from "./inputData";
import UploadImage from "./UploadImage";

export default function CreateProfile() {
  const [formData, setFormData] = useState(null);
  const [error, setError] = useState(null);
  const [message, setMessage] = useState(null);

  const formRef = useRef(null);

  useEffect(() => {
    setTimeout(() => {
      setError("");
    }, 3000);
  }, [error]);

  function changeHandler(e) {
    setFormData((prev) => {
      return {
        ...prev,
        [e.target.name]: e.target.value,
      };
    });
  }

  function handleClose() {
    setMessage(false);
    setError(false);
  }

  async function submitHandler(e) {
    e.preventDefault();

    const xhr = new XMLHttpRequest();

    xhr.open("POST", `${process.env.NEXT_PUBLIC_SERVER_URL}/plants`, true);

    xhr.upload.addEventListener("progress", (e) => {
      console.log(Math.ceil((e.loaded / e.total) * 100));
    });

    const data = new FormData(formRef?.current);

    xhr.send(data);

    xhr.onreadystatechange = function () {
      if (this.readyState === 4) {
        const res = JSON.parse(this.response);
        if (res.error) {
          setError(res.error);
        } else {
          setMessage(res.message);
        }

        console.log(res);
      }
    };
  }

  return (
    <>
      <Snackbar open={message ? true : false} autoHideDuration={6000}>
        <Alert onClose={handleClose} severity="success" sx={{ width: "100%" }}>
          {message}
        </Alert>
      </Snackbar>
      <Snackbar open={error ? true : false} autoHideDuration={10000}>
        <Alert onClose={handleClose} severity="error" sx={{ width: "100%" }}>
          {error}
        </Alert>
      </Snackbar>
      <form
        ref={formRef}
        onSubmit={submitHandler}
        className="flex flex-col sm:flex-row p-4 w-screen h-auto overflow-auto md:space-x-6"
      >
        <UploadImage />

        <section className="space-y-3 pt-6 pr-4 flex flex-col flex-1  content-center w-full sm:w-[350px]">
          {inputObj.map((item) => {
            return (
              <input
                type="text"
                onChange={changeHandler}
                className="border block px-4 py-2 focus:border focus:border-orange-500 focus:ring ring-orange-50 outline-none w-full"
                key={item.id}
                {...item}
                id={item.id.toString()}
              />
            );
          })}
          <textarea
            name="description"
            onChange={changeHandler}
            placeholder="Description"
            className="border focus:border-orange-500 focus:ring ring-orange-100 outline-none p-4 mt-6 !h-40 w-full lg:hidden block "
          ></textarea>

          <button
            type="submit"
            className="bg-orange-500 p-2 text-white text-center border border-orange-500  hover:ring-2 ring-orange-500 ring-offset-2  tracking-wider"
          >
            Submit
          </button>
        </section>
        <section className=" hidden lg:block">
          <textarea
            name="description"
            onChange={changeHandler}
            placeholder="Description"
            className="border focus:border-orange-500 focus:ring ring-orange-100 outline-none p-4 ml-6 mt-6 !h-40 w-96 block "
          ></textarea>
        </section>
      </form>
    </>
  );
}
