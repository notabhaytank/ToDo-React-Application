"use client"
import React, { useState } from 'react';

function Page(props) {
    const [title, setTitle] = useState("");
    const [desc, setDesc] = useState("");
    const [mainTask, setMainTask] = useState([]);

    const submitHandler = (e) => {
        e.preventDefault();
        setMainTask([...mainTask, { title, desc }]);
        setTitle("");
        setDesc("");
    };

    const deleteHandler = (i) => {
        let copytask = [...mainTask];
        copytask.splice(i, 1);
        setMainTask(copytask);
    };

    let renderTask = <h2 className="text-center text-white text-xl mt-4">No Tasks Available</h2>;

    if (mainTask.length > 0) {
        renderTask = mainTask.map((t, i) => {
            return (
                <li key={i} className="flex items-center justify-between text-white mb-4">
                    <div className="w-3/4">
                        <h5 className="text-xl font-semibold">{t.title}</h5>
                        <p className="text-sm text-gray-300">{t.desc}</p>
                    </div>
                    <button onClick={() => { deleteHandler(i) }} className="text-gray-300">
                        ⚔️
                    </button>
                </li>
            );
        });
    }

    return (
        <div className="bg-slate-950 min-h-screen md:pt-44  p-4">
            <h1 className="text-center text-4xl text-white font-black py-8">100x TODOist</h1>
            <form onSubmit={submitHandler} className="flex md:mx-[33vw] flex-col space-y-4">
                <input
                    placeholder="Enter Title"
                    className="border-2 border-white rounded-lg px-3 py-2"
                    type="text"
                    value={title}
                    onChange={(e) => {
                        setTitle(e.target.value);
                    }}
                />
                <input
                    placeholder="Enter Description"
                    className="border-2 border-white rounded-lg px-3 py-2"
                    type="text"
                    value={desc}
                    onChange={(e) => {
                        setDesc(e.target.value);
                    }}
                />
                <button className="bg-green-800 text-white rounded-lg px-4 py-2 text-sm hover:bg-green-600">Add Task</button>
                <hr className="my-8" />
            </form>

            <div className="max-w-md py-5 mx-auto">
                <ul>{renderTask}</ul>
            </div>
        </div>
    );
}

export default Page;
