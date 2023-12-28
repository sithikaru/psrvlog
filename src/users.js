import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import UserForm from "./userForm";
import UsersTable from "./usersTable";

const Users = () => {
  const navigate = useNavigate();
  const [usersData, setUsersData] = useState([{ id: 1, name: "Sithija Karunasena" }]);

  const addUserData = (newUser) => {
    // Add the new user to the usersData array
    setUsersData((prevUsersData) => [...prevUsersData, newUser]);
  };

  const deleteUserData = (userId) => {
    // Filter out the user with the given ID
    const updatedUsersData = usersData.filter((user) => user.id !== userId);
    setUsersData(updatedUsersData);
  };

  return (
    <div className="flex flex-col md:flex-row  ">
      <div id="addForm" className="w-[40%] m-auto">
        <UserForm onAddUser={addUserData} />
      </div>

      <div id="table" className="w-[40%] m-auto">
        <UsersTable rows={usersData} onDelete={deleteUserData} />
      </div>

      <div className="bottom-0 fixed right-0 mb-5 mr-5">
        <button
          onClick={() => navigate("/")}
          className="px-4 py-2 rounded-3xl text-white text-xl bg-teal-600 opacity-70 hover:scale-110 hover:opacity-100 transition-all "
        >
          ↩️ Back
        </button>
      </div>
    </div>
  );
};

export default Users;
