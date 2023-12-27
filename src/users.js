import { useNavigate } from "react-router-dom";
import UserForm from "./userForm";
import UsersTable from "./usersTable";

const Users = () => {
    
  const navigate = useNavigate();
  
  const usersData = [
    {id: 1, name: "Sithija Karunasena"}
  ];
  return (
    <div className="flex flex-col md:flex-row  ">
        
      <div id="addForm" className="w-[40%] m-auto">
        <UserForm />
      </div>
      {/* <button
        className="mx-auto px-2 py-1 hover:scale-110 transition-all text-lg font-extrabold text-cyan-600 flex flex-col mt-5 hover:border-cyan-500 hover:border-2 rounded-full mb-[100%]"
        onClick={handleSeeListClick}
      >
        See the List ⬇️
      </button>
      <button
        className="mx-auto px-2 py-1 hover:scale-110 transition-all text-lg font-extrabold text-cyan-600 flex flex-col mt-5 hover:border-cyan-500 hover:border-2 rounded-full "
        onClick={handleAddUserClick}
      >
        Add a User ⬆️
      </button> */}
      <div id="table" className="w-[40%] m-auto">
        <UsersTable rows={usersData} />
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
