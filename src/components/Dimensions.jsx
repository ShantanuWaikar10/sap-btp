import React, { useState } from "react";

const Sidebar = () => {
  const [dropped, setDropped] = useState(false);

  const handleDragStart = (e) => {
    e.dataTransfer.setData("text", e.target.id);
  };

  const handleDragOver = (e) => {
    e.preventDefault();
  };

  const handleDrop = (e) => {
    e.preventDefault();
    const data = e.dataTransfer.getData("text");
    const draggedEl = document.getElementById(data);
    e.target.appendChild(draggedEl);
    setDropped(true);
  };

  return (
    <>
      <div className="h-60 w-1/4 overflow-auto bg-[#171c22] p-4">
        <div className="bg-[#1c232b] p-2 rounded-2xl">
          <div className="">
            <h1 className="text-white font-bold">Dimensions</h1>
            <hr class="border-white"></hr>
          </div>

          <div className="flex flex-col text-white">
            <h1 className="font-bold ">Rows</h1>

            {/* Drop Zone */}
            <div
              id="dropZone"
              onDrop={handleDrop}
              onDragOver={handleDragOver}
              className="w-full min-h-[50px] rounded-lg grid grid-cols-1 items-center justify-center transition-colors duration-300 mb-5"
            ></div>
          </div>

          <div className="flex flex-col text-white">
            <h1 className="font-bold ">Colums</h1>

            {/* Drop Zone */}
            <div
              id="dropZone"
              onDrop={handleDrop}
              onDragOver={handleDragOver}
              className="w-full min-h-[50px] rounded-lg grid grid-cols-1 items-center justify-center transition-colors duration-300"
            ></div>
          </div>

          <div className="flex flex-col text-white">
            <h1 className="font-bold ">Available Fields</h1>
            <h1
              id="Sample_data_1"
              draggable="true"
              onDragStart={handleDragStart}
              className="text-white cursor-pointer"
            >
              Sample Data 1
            </h1>
            <h1
              id="Sample_data_2"
              draggable="true"
              onDragStart={handleDragStart}
              className="text-white cursor-pointer"
            >
              Sample Data 2
            </h1>
          </div>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
