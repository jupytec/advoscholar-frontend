import { j as e } from "./index-3AYkAJmI.js";
import { L as s } from "./react-vendor-D0AUhhr_.js";
function o() {
  return e.jsx("div", {
    className: "h-screen flex justify-center sm:items-center bg-white",
    children: e.jsxs("div", {
      className:
        "rounded-3xl w-full max-w-lg sm:border-color mt-10 sm:mt-0 p-4 sm:p-10 sm:border border-solid sm:border-[#EDEFF5]",
      children: [
        e.jsx("div", {
          className: "text-center",
          children: e.jsx("h1", {
            className: "text-2xl",
            children: "Welcome back!",
          }),
        }),
        e.jsxs("div", {
          className: "flex flex-col mt-6 gap-5",
          children: [
            e.jsxs("div", {
              className: "flex flex-col",
              children: [
                e.jsx("span", { children: "School Url" }),
                e.jsx("input", {
                  type: "text",
                  className:
                    "border border-solid border-[#EDEFF5] p-3 rounded-xl mt-1",
                  placeholder: "Enter school url",
                }),
              ],
            }),
            e.jsxs("div", {
              className: "flex flex-col",
              children: [
                e.jsx("span", { children: "Password" }),
                e.jsx("input", {
                  type: "password",
                  className:
                    "border border-solid border-[#EDEFF5] p-3 rounded-xl mt-1",
                  placeholder: "Enter school url",
                }),
              ],
            }),
            e.jsx("div", {
              className: "text-right",
              children: e.jsx(s, {
                to: "/forgot_password",
                children: e.jsx("p", {
                  className: "text-[#5573EF] cursor-pointer",
                  children: "Forgot your password?",
                }),
              }),
            }),
            e.jsx("div", {
              children: e.jsx("button", {
                className: "rounded-xl w-full text-[white] bg-[#5573EF] p-3",
                children: "Log in",
              }),
            }),
          ],
        }),
      ],
    }),
  });
}
export { o as default };
