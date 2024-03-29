import { j as e } from "./index-3AYkAJmI.js";
import "./react-vendor-D0AUhhr_.js";
function d() {
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
                e.jsx("span", { children: "Enter Password" }),
                e.jsx("input", {
                  type: "password",
                  className:
                    "border border-solid border-[#EDEFF5] p-3 rounded-xl mt-1",
                  placeholder: "Enter Admin password",
                }),
              ],
            }),
            e.jsxs("div", {
              className: "flex flex-col",
              children: [
                e.jsx("span", { children: "Confirm Password" }),
                e.jsx("input", {
                  type: "password",
                  className:
                    "border border-solid border-[#EDEFF5] p-3 rounded-xl mt-1",
                  placeholder: "Confirm Admin password",
                }),
              ],
            }),
            e.jsx("div", {
              children: e.jsx("button", {
                className: "rounded-xl w-full text-[white] bg-[#5573EF] p-3",
                children: "Set Password",
              }),
            }),
          ],
        }),
      ],
    }),
  });
}
export { d as default };
