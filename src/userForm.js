import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import addUserData from "./users";

const UserForm = ({ onAddUser }) => {
  const [id, setId] = useState("");
  const [name, setName] = useState("");

  const handleAddUserClick = () => {
    // Validate input (you can add more validation if needed)
    if (!id || !name) {
      alert("Please enter both ID and Name.");
      return;
    }

    // Create a new user object
    const newUser = {
      id: parseInt(id),
      name: name,
    };

    // Call the parent component's callback function
    onAddUser(newUser);

    // Clear the input fields
    setId("");
    setName("");
  };

  return (
    <div className="pb-[100px]">
      <div className="flex flex-col items-center justify-center pt-[10%] mx-auto">
        <div className="border bg-white shadow-xl p-8 rounded-lg text-center hover:shadow-[#87f8cd6d] hover:shadow-2xl">
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
                value={id < 1 ? "" : id}
                onChange={(e) => setId(e.target.value)}
                variant="outlined"
              />
              <TextField
                label="Name"
                type="text"
                id="name"
                name="name"
                className="w-[300px] mb-2 font-bold"
                placeholder="Enter Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                variant="outlined"
              />
            </div>
          </div>
          <div>
            <button
              onClick={handleAddUserClick}
              className="px-8 py-4 rounded-3xl text-white text-3xl bg-black hover:scale-110 transition-all "
            >
              Add ✅
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserForm;
