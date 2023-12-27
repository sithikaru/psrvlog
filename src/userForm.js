import React from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";

const UserForm = (props) => {
  return (
    <div className="flex items-center justify-center h-screen ">
      <div className="border bg-white shadow-xl p-8 rounded-lg text-center hover:shadow-[#87f8cd6d] hover:shadow-2xl w-[30%]">
        <h1 className="font-extrabold text-6xl mb-6 text-center">
          User Form
        </h1>
        <div className="flex items-center justify-center mb-4">
          <div className="flex flex-col items-start gap-3">
            <TextField
              label="ID"
              type="number"
              id="id"
              name="id"
              className="w-[300px] mb-2"
              placeholder="Enter ID"
              value={''}
              onChange={(e) => {}}
              variant="outlined"
            />
            <TextField
              label="Name"
              type="text"
              id="name"
              name="name"
              className="w-[300px] mb-2 font-bold"
              placeholder="Enter Name"
              value={''}
              onChange={(e) => {}}
              variant="outlined"
            />
          </div>
        </div>
        <div>
        <button  className="px-8 py-4 rounded-3xl text-white text-3xl bg-black hover:scale-110 transition-all ">
            Add ✅
          </button>
        </div>
      </div>
    </div>
  );
};

export default UserForm;
