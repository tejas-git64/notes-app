import React from "react";
import Note from "./Note";
import pencil from "../assets/write-svgrepo-com.svg";
import spinner from "../assets/loading-03-svgrepo-com.svg";

export default function Notes(props) {
  //Text manipulation
  function addBold() {
    props.txt.current.classList.toggle("font-bold");
  }

  function addItalic() {
    props.txt.current.classList.toggle("italic");
  }

  //Create Bullets
  function createBullet() {
    props.txt.current.value += "\t\u2022  ";
  }

  //Set note color
  function setColor(e) {
    props.main.current.style.backgroundColor = `${e.target.value}`;
  }

  return (
    <>
      <div className="w-full sm:w-5/6 h-[calc(100%-18%)] sm:h-[calc(100%-14%)] my-6 mx-auto">
        <ul
          style={{ background: "linear-gradient(45deg,#ffffff45,#ffffff21)" }}
          className={`h-full py-8 pt-7 px-3.5 m-auto relative overflow-y-scroll overflow-x-hidden scroll-smooth sm transition-all ease-in-out delay-25 grid gap-y-6 gap-x-2 rounded-md grid-rows-[repeat(auto-fit,minmax(auto,1fr))] grid-cols-[repeat(auto-fit,minmax(340px,1fr))] ${
            props.darkMode ? "dark" : "bg-white"
          }`}
        >
          {props.notes.length > 0 ? (
            props.notes.map((note) => (
              <Note
                main={props.main}
                col={props.col}
                noteText={note.text}
                saveNote={props.saveNote}
                lastModified={note.lastModified}
                txt={props.txt}
                li={props.li}
                la={props.la}
                notes={props.notes}
                color={note.color}
                bold={note.bold}
                italic={note.italic}
                size={props.size}
                save={props.save}
                createBullet={createBullet}
                setColor={setColor}
                addBold={addBold}
                addItalic={addItalic}
              />
            ))
          ) : (
            <p
              className={`w-full absolute h-full font-bold flex justify-center items-center text-2xl md:text-4xl text-center ${
                props.darkMode ? "text-gray-300" : "text-gray-200"
              }`}
            >
              You currently have no notes :/
            </p>
          )}
          <div
            id="loading"
            style={{ background: "linear-gradient(75deg,#fffffffe,#ffffffe3)" }}
            className="bg-slate-100 bg-blend-darken absolute w-full h-full z-10 top-0 left-0 flex justify-center items-center hidden"
          >
            <section className="w-28 h-28 bg-white shadow-2xl rounded-3xl flex justify-center items-center">
              <img
                src={spinner}
                alt="loading"
                className="w-14 invert-[0.2] animate-spin"
              />
            </section>
          </div>
        </ul>
        <button
          ref={props.createBtn}
          onClick={props.createNewNote}
          className="bottom-12 right-6 w-14 h-14 px-3 transition-all ease-in-out delay-25 hover:w-36 hover:pt-0 shadow-lg bg-yellow-300 absolute rounded-full overflow-x-hidden flex justify-between items-center"
        >
          <img src={pencil} className="w-8 h-8" alt="new-note" />
          <p className="text-center mx-auto ml-3 text-black font-semibold whitespace-nowrap">
            New note
          </p>
        </button>
      </div>
    </>
  );
}
