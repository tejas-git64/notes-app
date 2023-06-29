import React, { useEffect, useState } from "react";
import settings from "../assets/settings-2-svgrepo-com.svg";
import night from "../assets/night.png";
import day from "../assets/sun.png";

export default function Nav(props) {
  const hour = new Date().getHours();
  let [greeting, setGreeting] = useState("");

  useEffect(() => {
    switch (true) {
      default:
        setGreeting("Your Notes");
        break;
      case hour > 6 && hour < 12:
        setGreeting("Good morning! 🌅");
        break;
      case hour > 12 && hour < 15:
        setGreeting("Good afternoon! ☀️");
        break;
      case hour > 15 && hour < 18:
        setGreeting("Good evening! 🌇");
        break;
      case hour > 18 && hour < 6:
        setGreeting("Good night 🌜");
        break;
    }
  }, []);

  return (
    <div className="w-full h-auto px-8 pr-16 py-3 pb-0">
      <ul className="w-full h-14 flex items-center justify-between">
        <li>
          <p
            className={`text-2xl m-auto mt-1 md:text-3xl xl:text-3xl font-bold ${
              props.darkMode ? "text-white" : "text-stone-100"
            } drop-shadow-lg`}
          >
            {greeting}
          </p>
        </li>
        <div className="w-1/4 flex justify-end items-center">
          <li>
            <button
              onClick={props.toggleDarkMode}
              className="fixed top-3 right-16 w-12 h-12 p-0 m-auto py-4 mr-4 z-[12] transition-all ease-in delay-35 drop-shadow-md"
            >
              <img
                src={props.darkMode ? day : night}
                alt="time-of-the-day"
                className={`w-7 h-7 mt-0.5 md:w-8 md:h-8 md:mt-0 p-0 m-0 ${
                  props.darkMode ? "invert" : "invert-0"
                }`}
              />
            </button>
          </li>
          <li>
            <button
              onClick={props.showSlideBar}
              className={`fixed top-0 w-12 h-12 my-5 z-[12] transform m-auto drop-shadow-md`}
            >
              <img
                src={settings}
                className={`w-8 h-8 md:w-10 md:h-10 p-0 m-0 transition-all ease-in-out delay-25 ${
                  props.darkMode ? "invert" : "invert-0"
                } ${props.barState ? "rotate-45" : "-rotate-45"}`}
                alt="user"
              />
            </button>
          </li>
        </div>
      </ul>
    </div>
  );
}
