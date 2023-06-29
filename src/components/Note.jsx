import React, { useState } from "react";

export default function Note(props) {
  let [hide, setHide] = useState(true);

  //h-[calc(100vh-30vh)]
  function expand(e) {
    setHide(!hide);
  }

  //Delete Note
  function deleteNote(e) {
    if (confirm("Delete this note?") === true) {
      document.getElementById("note").remove();
    } else {
      console.log("Delete cancelled...");
    }
  }

  return (
    <>
      <li
        ref={props.li}
        id="note"
        key={props.notes.id}
        className="w-[calc(100%-3%)] mx-auto"
      >
        <div
          ref={props.main}
          style={{ backgroundColor: `${props.color}` }}
          onDoubleClick={expand}
          className={`group m-auto w-full sm:w-full relative shadow-2xl h-63 border-2 overflow- ${
            props.darkMode ? "dark" : "bg-white"
          } relative z-10 rounded-md`}
        >
          <div id="input" className="transition-all ease-in-out delay-25 p-4">
            <textarea
              ref={props.txt}
              value={props.noteText}
              id="text"
              className={`h-40 w-full max-h-auto resize-none placeholder:font-medium text-black placeholder:text-gray-400 outline-none bg-transparent ${
                props.bold === "true" ? "font-bold" : ""
              } ${props.italic === "true" ? "italic" : ""}`}
              placeholder="Write something here..."
            ></textarea>
          </div>
          <ul className="w-full mt-0 p-2 px-6 rounded-b-md flex justify-between items-center">
            <li>
              <p ref={props.la} className="w-auto px-2 text-gray-400">
                LastModified: {props.lastModified}
              </p>
            </li>
            <li>
              <button
                ref={props.save}
                type="button"
                onClick={props.saveNote}
                className="rounded-full bg-teal-400 font-bold text-white p-2 px-6 visible"
              >
                Save
              </button>
            </li>
          </ul>
          <div
            ref={props.col}
            className={`flex m-0 p-1 w-full rounded-b-md border-t-2 ${
              hide ? "hidden" : "visible"
            }`}
          >
            <ul className="flex w-2/4 items-center">
              <li className="w-8 h-8 mr-1 ">
                <button
                  onClick={props.setColor}
                  value="#ffd0d0"
                  className="m-0 p-0 w-4 h-4 rounded-full bg-red-300"
                ></button>
              </li>
              <li className="w-8 h-8 mr-1">
                <button
                  onClick={props.setColor}
                  value="#d0e6ff"
                  className="m-0 p-0 w-4 h-4 rounded-full bg-blue-300"
                ></button>
              </li>
              <li className="w-8 h-8 mr-1">
                <button
                  onClick={props.setColor}
                  value="#d8ffd0"
                  className="m-0 p-0 w-4 h-4 rounded-full bg-green-300"
                ></button>
              </li>
              <li className="w-8 h-8 mr-1">
                <button
                  onClick={props.setColor}
                  value="#fcffd0"
                  className="m-0 p-0 w-4 h-4 rounded-full bg-yellow-300"
                ></button>
              </li>
              <li className="w-8 h-8 mr-1">
                <button
                  onClick={props.setColor}
                  value="#ead0ff"
                  className="m-0 p-0 w-4 h-4 rounded-full bg-purple-300"
                ></button>
              </li>
            </ul>
            <div className="w-2/4 flex justify-end">
              <button
                // onClick={() => textStyle({ type: "bold" })}
                onClick={props.addBold}
                className="mx-1 p-2 pt-3"
              >
                <svg
                  className="w-3 invert-[calc(100%-60%)]"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 384 512"
                >
                  <path d="M0 64C0 46.3 14.3 32 32 32H80 96 224c70.7 0 128 57.3 128 128c0 31.3-11.3 60.1-30 82.3c37.1 22.4 62 63.1 62 109.7c0 70.7-57.3 128-128 128H96 80 32c-17.7 0-32-14.3-32-32s14.3-32 32-32H48V256 96H32C14.3 96 0 81.7 0 64zM224 224c35.3 0 64-28.7 64-64s-28.7-64-64-64H112V224H224zM112 288V416H256c35.3 0 64-28.7 64-64s-28.7-64-64-64H224 112z" />
                </svg>
              </button>
              <button onClick={props.addItalic} className="mx-1 p-2 pt-3">
                <svg
                  className="w-3 invert-[calc(100%-60%)]"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 384 512"
                >
                  <path d="M128 64c0-17.7 14.3-32 32-32H352c17.7 0 32 14.3 32 32s-14.3 32-32 32H293.3L160 416h64c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32-14.3-32-32s14.3-32 32-32H90.7L224 96H160c-17.7 0-32-14.3-32-32z" />
                </svg>
              </button>
              <button onClick={props.createBullet} className="mx-1 p-2 pt-3">
                <svg
                  className="w-3 invert-[calc(100%-60%)]"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 448 512"
                >
                  <path d="M0 96C0 78.3 14.3 64 32 64H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32s14.3-32 32-32H416c17.7 0 32 14.3 32 32z" />
                </svg>
              </button>
              <button onClick={deleteNote} className="mx-1 p-2 pt-3">
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  className="w-4 invert-[calc(100%-70%)]"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                  <g
                    id="SVGRepo_tracerCarrier"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  ></g>
                  <g id="SVGRepo_iconCarrier">
                    {" "}
                    <path
                      d="M8 1.5V2.5H3C2.44772 2.5 2 2.94772 2 3.5V4.5C2 5.05228 2.44772 5.5 3 5.5H21C21.5523 5.5 22 5.05228 22 4.5V3.5C22 2.94772 21.5523 2.5 21 2.5H16V1.5C16 0.947715 15.5523 0.5 15 0.5H9C8.44772 0.5 8 0.947715 8 1.5Z"
                      fill="#000000"
                    ></path>{" "}
                    <path
                      d="M3.9231 7.5H20.0767L19.1344 20.2216C19.0183 21.7882 17.7135 23 16.1426 23H7.85724C6.28636 23 4.98148 21.7882 4.86544 20.2216L3.9231 7.5Z"
                      fill="#000000"
                    ></path>{" "}
                  </g>
                </svg>
              </button>
            </div>
          </div>
        </div>
      </li>
    </>
  );
}
