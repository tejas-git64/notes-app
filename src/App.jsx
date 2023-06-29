import React, { useState, useRef } from "react";
import { nanoid } from "nanoid";
import "./App.css";
import Nav from "./components/Nav";
import Notes from "./components/Notes";
import Sidebar from "./components/Sidebar";

export function App() {
  const hour = new Date().getHours();
  const imgs = [
    "https://images.unsplash.com/photo-1678129767422-f076b5ceb236?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1632&q=80",
    "https://images.unsplash.com/photo-1511497584788-876760111969?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1632&q=80",
    "https://images.unsplash.com/photo-1523712999610-f77fbcfc3843?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
    "https://images.unsplash.com/photo-1663056323273-d1c7955fd1aa?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1471&q=80",
    "https://images.unsplash.com/photo-1613590928141-93eb1bbfb59f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1528&q=80",
    "https://images.unsplash.com/photo-1524721696987-b9527df9e512?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1633&q=80",
    "https://images.unsplash.com/photo-1556611832-469505829679?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
    "https://images.unsplash.com/photo-1625931454497-c7ebe17c760f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1473&q=80",
    "https://images.unsplash.com/photo-1554668036-b85c20687cad?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
  ];

  const main = useRef();
  const col = useRef();
  const txt = useRef();
  const li = useRef();
  const last = useRef();
  const save = useRef();
  const createBtn = useRef();

  const date = new Date(document.lastModified);

  let note = {
    color: "",
    bold: false,
    italic: false,
    lastModified: "",
  };

  let allNotes = [];
  let files;
  let [notes, setNotes] = useState([]);

  //Creating a new note
  function createNewNote() {
    allNotes.push(note);
    setNotes([...allNotes, ...notes]);
    console.log(notes);
  }

  //Saving note
  function saveNote(e) {
    console.log(notes);
    save.current.classList.add("hidden");
    createBtn.current.classList.add("hidden");
    allNotes.push({
      text: `${txt.current.value}`,
      id: nanoid(),
      color: `${main.current.style.backgroundColor}`,
      bold: `${txt.current.classList.contains("font-bold") ? true : false}`,
      italic: `${txt.current.classList.contains("italic") ? true : false}`,
      lastModified: `${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}}`,
    });
    setNotes([...allNotes, ...notes]);
    localStorage.setItem("notes", JSON.stringify(notes));
  }

  //Deleting all notes
  function deleteAll() {
    if (confirm("Delete all notes?") === true) {
      setNotes([]);
    } else {
      console.log("Deletion cancelled...");
    }
  }

  function sortNotes(e) {
    switch (e.target.value) {
      case "Size(S-L)":
        setNotes(
          notes.sort(function (a, b) {
            return a.text.length - b.text.length;
          })
        );
        break;
      case "Size(L-S)":
        setNotes(
          ...notes,
          notes.sort(function (a, b) {
            return b.text.length - a.text.length;
          })
        );
        break;
      case "LastModified":
        setNotes(
          ...notes,
          notes.sort(function (a, b) {
            return b.lastModified - a.lastModified;
          })
        );
        break;
    }
  }

  function setFile(e) {
    files = e.target.files[0];
    const reader = new FileReader();
    reader.readAsText(files);
    reader.onloadend = (e) => {
      const json = JSON.parse(e.target.result);
      setTimeout(() => {
        setNotes(json);
      }, 2000);
      console.log(json);
    };
  }

  //DarkMode
  const [darkMode, setDarkMode] = useState(false);
  function toggleDarkMode() {
    setDarkMode((prevDarkMode) => !prevDarkMode);
  }

  window.onload = () => {
    switch (true) {
      case hour > 15:
        setDarkMode((prev) => !prev);
        break;
      default:
        console.log("hmmmm....");
    }
  };

  //Change Background
  const [back, setBack] = useState(
    "https://w0.peakpx.com/wallpaper/814/537/HD-wallpaper-digital-art-portrait-display-nature-trees-forest-cityscape-building-mountains-upside-down-simple-background.jpg"
  );

  function changeBackground(e) {
    //e.preventDefault()
    console.log(e.target.id);
    setBack(imgs[e.target.id]);
    setBar((prev) => !prev);
  }

  //Sidebar
  const [bar, setBar] = useState(false);
  function showSlideBar() {
    setBar((prev) => !prev);
  }

  return (
    <div
      id="main"
      style={{ backgroundImage: `url(${back})` }}
      className={`App mx-0 bg-blend-multiply ${
        !darkMode ? "bg-neutral-200" : "dark"
      } bg-no-repeat bg-cover bg-center w-full h-screen transition-all flex-col align-middle justify-items-center relative`}
    >
      <Nav
        darkMode={darkMode}
        barState={bar}
        toggleDarkMode={toggleDarkMode}
        showSlideBar={showSlideBar}
        hour={hour}
      />
      <Sidebar
        barState={bar}
        changeBackground={changeBackground}
        darkMode={darkMode}
        notes={notes}
        showSlideBar={showSlideBar}
        deleteAll={deleteAll}
        setFile={setFile}
        sortNotes={sortNotes}
      />
      <Notes
        darkMode={darkMode}
        notes={notes}
        createNewNote={createNewNote}
        saveNote={saveNote}
        deleteAll={deleteAll}
        main={main}
        col={col}
        createBtn={createBtn}
        save={save}
        txt={txt}
        li={li}
        la={last}
      />
    </div>
  );
}

export default App;
