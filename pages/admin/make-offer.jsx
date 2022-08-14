import { Button } from "@mui/material";
import axios from "axios";
import React, { useRef, useState } from "react";

export default function MakeOffer() {
  const [state, setState] = useState({});
  const [error, setError] = useState("");
  const [message, setMessage] = useState("");

  const formRef = useRef(null);

  function changeHandler(e) {
    setState((prev) => {
      return {
        ...prev,
        [e.target.name]: e.target.value,
      };
    });
    console.log(e.target.value);
  }

  async function submitHandler(e) {
    e.preventDefault();
    console.log(state);
    const xhr = new XMLHttpRequest();

    xhr.open("POST", `${process.env.NEXT_PUBLIC_SERVER_URL}/offers`, true);

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
    <section>
      <form
        ref={formRef}
        onSubmit={submitHandler}
        className="flex flex-col p-4 shadow-lg mx-auto mt-10 w-[300px] space-y-4"
      >
        <h1 className="text-center text-xl p-4">Make Offer</h1>
        <input
          onChange={changeHandler}
          value={state.name}
          name="name"
          type="text"
          id="from"
          placeholder="Offer Name"
          className="p-2 border"
        />
        <input type="file" name="image" />

        <label htmlFor="from">From</label>

        <input
          onChange={changeHandler}
          value={state.from}
          name="from"
          type="datetime-local"
          id="from"
          placeholder="Starting time"
          className="p-2 border"
        />
        <label htmlFor="to">To</label>
        <input
          onChange={changeHandler}
          value={state.to}
          name="to"
          type="datetime-local"
          id="to"
          placeholder="Ending time"
          className="p-2 border"
        />
        <input
          onChange={changeHandler}
          name="reduceAmount"
          type="number"
          value={state.reduceAmount}
          className="p-2 border"
          placeholder="Amount to be reduced"
        />
        <Button type="submit">Submit</Button>
      </form>
    </section>
  );
}
