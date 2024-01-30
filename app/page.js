"use client";
import React from "react";
import { useState } from "react";
const page = () => {
  const [title, settitle] = useState("");
  const [desc, setdesc] = useState("");
  const [pval, setpval] = useState("");
  const [maintask, setmaintask] = useState([]);
  const submithandler = (e) => {
    e.preventDefault();
    title && desc && setmaintask([...maintask, { title, desc }]);

    settitle("");
    setdesc("");
  };
  let renderedTask = <h2>No Task Available</h2>;
  if (maintask.length > 0) {
    renderedTask = maintask.map((t, i) => {
      return (
        <li key={i} className="flex justify-between text-lg px-60">
          <h5>{t.title}</h5>
          <h6>{t.desc}</h6>
          <div className="flex gap-2">
            <button
              className="px-3 py-2 bg-red-400 rounded flex mb-6"
              onClick={() => {
                const newarray = [...maintask];
                newarray.splice(i, 1);
                setmaintask(newarray);
              }}
            >
              Delete
            </button>
            <button
              className="px-3 py-2 bg-green-400 rounded flex mb-6"
              onClick={(e) => {
                let promptValue = prompt("enter val");
                maintask[length - 1] = promptValue;
              }}
            >
              Update
            </button>
          </div>
        </li>
      );
    });
  }
  return (
    <>
      <h1 className="text-zinc-100 text-[30px] bg-black text-center p-5 font-bold">
        To Do List
      </h1>
      <form onSubmit={submithandler} className="pl-32">
        <input
          type="text"
          className="border-2 border-black rounded m-16 p-2 "
          placeholder="Enter Task Here "
          value={title}
          onChange={(e) => {
            settitle(e.target.value);
          }}
        ></input>
        <input
          type="text"
          className="border-2 border-black rounded m-16 p-2"
          placeholder="Enter Description Here"
          value={desc}
          onChange={(e) => {
            setdesc(e.target.value);
          }}
        ></input>
        <button className="px-4 py-2 bg-black text-white rounded font-semibold mx-16">
          Add Task
        </button>
      </form>

      <div className="w-full min-h-16 bg-slate-500 text-center text-white pt-5  ">
        <ul> {renderedTask} </ul>
      </div>
    </>
  );
};

export default page;
