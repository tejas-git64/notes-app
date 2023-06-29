import React from "react";
import trash from "../assets/delete-svgrepo.svg";
import exp from "../assets/export-svgrepo.svg";

export default function Sidebar(props) {
  function importNotes() {
    props.showSlideBar();
    document.getElementById("loading").classList.remove("hidden");
    setTimeout(() => {
      document.getElementById("loading").classList.add("hidden");
    }, 2000);
  }

  function exportNotes() {
    props.showSlideBar();
    var json = JSON.stringify(props.notes);
    console.log(json);
    const a = document.getElementById("export");
    document.getElementById("loading").classList.remove("hidden");
    setTimeout(() => {
      document.getElementById("loading").classList.add("hidden");
      props.setNotes(data);
    }, 500);
    a.href = `data:text/json,${json}`;
    a.download = `notesdata.txt`;
  }

  return (
    <>
      <div
        id="sidebar"
        className={`px-8 py-6 fixed overflow-y-scroll w-full sm:w-3/4 md:w-2/4 lg:w-2/5 xl:w-[calc(100%-69%)] shadow-xl h-full top-0 right-0 transition-all ease-in delay-35 z-[11] transform ${
          props.barState ? "-translate-x-0" : "translate-x-full"
        } ${props.darkMode ? "bg-zinc-900" : "bg-white"}`}
      >
        <h1
          className={`text-2xl text-left font-bold mb-4 ${
            props.darkMode ? "text-white" : "text-black"
          }`}
        >
          Settings
        </h1>
        <ul className="py-4 flex flex-col">
          <li
            className={`w-full flex justify-between items-center px-4 py-3 sm:px-4 sm:py-2 my-2 rounded-lg ${
              props.darkMode ? "bg-zinc-800" : "bg-gray-100"
            }`}
          >
            <p
              className={`font-bold ${
                props.darkMode ? "bg-zinc-800" : "text-black"
              } `}
            >
              Sort by
            </p>
            <select
              name="time"
              id="modification"
              onChange={props.sortNotes}
              className={`w-36 h-10 ${
                props.darkMode
                  ? "bg-zinc-600 text-white"
                  : "bg-gray-300 text-zinc-800"
              } font-semibold rounded-lg text-center`}
            >
              <option value="Size(S-L)">Size (S-L)</option>
              <option value="Size(L-S)">Size (L-S)</option>
              <option name="Last modified" value="LastModified">
                Last modified
              </option>
            </select>
          </li>
          <h2
            className={`text-left font-bold text-lg mt-6 ${
              props.darkMode ? "text-white" : "bg-white text-black"
            }`}
          >
            Backup/Restore{" "}
          </h2>
          <li className="w-full flex justify-around my-2 rounded-lg">
            <a
              id="export"
              onClick={exportNotes}
              className={`w-full flex px-4 py-2 justify-between items-center rounded-lg ${
                props.darkMode ? "bg-zinc-800" : "bg-gray-100"
              }`}
            >
              <p
                className={`font-bold ${
                  props.darkMode ? "text-white" : "text-black"
                }`}
              >
                Export to device
              </p>
              <img
                src={exp}
                alt="export"
                className={`w-10 h-10 py-2 hover:shadow-lg hover:bg-yellow-300 rounded-lg ${
                  props.darkMode ? "bg-zinc-400" : "bg-zinc-300"
                }`}
              />
            </a>
          </li>
          <li className="w-full flex justify-around my-2 items-center rounded-lg">
            <a
              id="import"
              className={`w-full flex sm:px-4 px-3 py-3 justify-between items-center rounded-lg ${
                props.darkMode ? "bg-zinc-800" : "bg-gray-100"
              }`}
            >
              <p
                className={`font-bold ${
                  props.darkMode ? "text-white" : "text-black"
                }`}
              >
                Import from device
              </p>
              <input
                type="file"
                name="file"
                onInput={importNotes}
                onInputCapture={props.setFile}
                className={`w-28 sm:file:w-28 file:p-2 file:font-semibold file:font-sans hover:file:shadow-lg hover:file:bg-yellow-300 file:border-0 sm:file:p-2 rounded-md file:text-base file:px-3 ${
                  props.darkMode ? "file:bg-zinc-400" : "bg-zinc-300"
                }`}
              />
            </a>
          </li>
          <h2
            className={`text-left font-bold text-lg mt-6 ${
              props.darkMode ? "text-white" : "text-black"
            }`}
          >
            Background
          </h2>
          <li
            className={`w-full py-2 my-2 mt-2 2xl:mb-12 ${
              props.darkMode ? "bg-zinc-800" : "bg-white"
            } rounded-lg`}
          >
            <div
              className={`w-full py-2 my-2 mt-2 ${
                props.darkMode ? "bg-zinc-800" : "bg-gray-100"
              }`}
            >
              <button onClick={props.changeBackground}>
                <img
                  src="https://images.unsplash.com/photo-1678129767422-f076b5ceb236?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1632&q=80"
                  alt="background"
                  id="0"
                  className="w-36 h-24 m-2 mx-3 bg-fixed transition-all ease-in delay-35 hover:scale-95 rounded-lg"
                />
              </button>
              <button onClick={props.changeBackground}>
                <img
                  src="https://images.unsplash.com/photo-1511497584788-876760111969?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1632&q=80"
                  alt="background"
                  id="1"
                  className="w-36 h-24 m-2 mx-3 bg-fixed transition-all ease-in delay-35 hover:scale-95 rounded-lg"
                />
              </button>
              <button onClick={props.changeBackground}>
                <img
                  src="https://images.unsplash.com/photo-1523712999610-f77fbcfc3843?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
                  alt="background"
                  id="2"
                  className="w-36 h-26 m-2 mx-3 bg-fixed transition-all ease-in delay-35 hover:scale-95 rounded-lg"
                />
              </button>
              <button onClick={props.changeBackground}>
                <img
                  src="https://images.unsplash.com/photo-1663056323273-d1c7955fd1aa?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1471&q=80"
                  alt="background"
                  id="3"
                  className="w-36 h-26 m-2 mx-3 bg-fixed transition-all ease-in delay-35 hover:scale-95 rounded-lg"
                />
              </button>
              <button onClick={props.changeBackground}>
                <img
                  src="https://images.unsplash.com/photo-1613590928141-93eb1bbfb59f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1528&q=80"
                  alt="background"
                  id="4"
                  className="w-36 h-24 m-2 mx-3 bg-fixed transition-all ease-in delay-35 hover:scale-95 rounded-lg"
                />
              </button>
              <button onClick={props.changeBackground}>
                <img
                  src="https://images.unsplash.com/photo-1524721696987-b9527df9e512?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1633&q=80"
                  alt="background"
                  id="5"
                  className="w-36 h-24 m-2 mx-3 bg-fixed transition-all ease-in delay-35 hover:scale-95 rounded-lg"
                />
              </button>
              <button onClick={props.changeBackground}>
                <img
                  src="https://images.unsplash.com/photo-1556611832-469505829679?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
                  alt="background"
                  id="6"
                  className="w-36 h-26 m-2 mx-3 bg-fixed transition-all ease-in delay-35 hover:scale-95 rounded-lg"
                />
              </button>
              <button onClick={props.changeBackground}>
                <img
                  src="https://images.unsplash.com/photo-1625931454497-c7ebe17c760f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1473&q=80"
                  alt="background"
                  id="7"
                  className="w-36 h-26 m-2 mx-3 bg-fixed transition-all ease-in delay-35 hover:scale-95 rounded-lg"
                />
              </button>
              <button onClick={props.changeBackground}>
                <img
                  src="https://images.unsplash.com/photo-1554668036-b85c20687cad?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
                  alt="background"
                  id="8"
                  className="w-36 h-26 m-2 mx-3 bg-fixed transition-all ease-in delay-35 hover:scale-95 rounded-lg"
                />
              </button>
            </div>
          </li>
          <li className="w-[calc(100%-35%)] mx-auto flex justify-around">
            <button
              onClick={props.deleteAll}
              className={`w-full h-12 px-4 mt-20 xl:mt-10 flex justify-between rounded-lg ${
                props.darkMode ? "bg-zinc-800" : "bg-gray-100"
              } items-center transition-all ease-out delay-25 hover:invert-0 hover:shadow-lg hover:bg-red-400`}
            >
              <p
                className={`text-lg font-bold whitespace-nowrap ${
                  props.darkMode ? "text-gray-300" : "text-black"
                }`}
              >
                Clear all notes
              </p>
              <img
                src={trash}
                alt="delete"
                className={`w-10 h-10 p-2 pr-0 rounded-full`}
              />
            </button>
          </li>
        </ul>
      </div>
    </>
  );
}
