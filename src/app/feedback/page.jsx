"use client";
import Footer from "@/components/Footer/Footer";
import Header from "@/components/header/Header";
import React, { useState } from "react";
import { sendContactForm } from "../../lib/api.js";

const initValues = {
  name: "",
  email: "",
  phone: "",
  feedback: "",
  comment: "",
};

const initState = { isloading: false, error: "", values: initValues };

export default function ContactPage() {
  const [state, setState] = useState(initState);
  const { values, isloading, error } = state;

  const handleChange = ({ target }) =>
    setState((prev) => ({
      ...prev,
      values: {
        ...prev.values,
        [target.name]: target.value,
      },
    }));

  const onSubmit = async (e) => {
    e.preventDefault();
    setState((prev) => ({
      ...prev,
      isloading: true,
      error: "",
    }));
    try {
      await sendContactForm(values);
      setState(initState);
    } catch (error) {
      setState((prev) => ({
        ...prev,
        isloading: false,
        error: error.message,
      }));
    }
  };

  return (
    <>
      <div>
        <Header activeLink={"/feedback"} />
      </div>
      <main className="flex justify-center feedback-container">
        <div className="flex flex-col items-center w-[32rem] max-x-[90%]">
          <p className="mt-8 sm:mt-12 mb-6 sm:mb-8 roundeded text-center bg-[#5a5eb7] py-4 sm:py-6 text-white text-2xl sm:text-3xl w-[90%]">
            Feedback and suggestions
          </p>
          <form
            className="w-full flex flex-col items-center gap-2"
            onSubmit={onSubmit}
          >
            <input
              className="border-2 border-[#aaaaaa]  w-full p-2 text-base text-[#75758b]"
              type="text"
              name="name"
              placeholder="Name"
              required
              value={values.name}
              onChange={handleChange}
            />
            <input
              className="border-2 border-[#aaaaaa]  w-full p-2 text-base text-[#75758b]"
              type="email"
              name="email"
              placeholder="Email"
              required
              value={values.email}
              onChange={handleChange}
            />
            <input
              className="border-2 border-[#aaaaaa]  w-full p-2 text-base text-[#75758b]"
              type="number"
              name="phone"
              placeholder="Phone number"
              required
              value={values.phone}
              onChange={handleChange}
            />
            <select
              id="feedback"
              className="select select-bordered border-2 border-[#aaaaaa] w-full rounded-none text-base text-[#75758b]"
              name="feedback"
              value={values.feedback}
              onChange={handleChange}
            >
              <option value="" disabled>
                Feedback type
              </option>
              <option value="Customer service">Customer service</option>
              <option value="Payment">Payment</option>
              <option value="Train">Train</option>
              <option value="Crime">Crime</option>
              <option value="Commercial & Retail">Commercial & Retail</option>
              <option value="Station parking">Station parking</option>
              <option value="Staff & Personnel">Staff & Personnel</option>
            </select>
            <textarea
              className="border-2 border-[#aaaaaa]  w-full p-2 text-base text-[#75758b]"
              type="text"
              name="comment"
              placeholder="Comment"
              required
              value={values.comment}
              onChange={handleChange}
            ></textarea>
            <button
              className="mb-8 sm:mb-12 mt-6 sm:mt-8 w-[85%] p-2 text-white bg-[#149145]"
              disabled={
                !values.name ||
                !values.email ||
                !values.phone ||
                !values.feedback ||
                !values.comment ||
                isloading
              }
            >
              {isloading ? "Submitting..." : "Submit"}
            </button>
            {error && <p style={{ color: "red" }}>{error}</p>}
          </form>
        </div>
      </main>
      <div>
        <Footer />
      </div>
    </>
  );
}
