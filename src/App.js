import { useNavigate } from "react-router-dom";
import "./App.css";

function App() {
  const navigate = useNavigate();

  return (
    <header className="flex items-center justify-center h-screen">
      <div className="border bg-white shadow-xl p-8 rounded-lg text-center hover:shadow-[#87f8cd6d] hover:shadow-2xl">
        <h1 className="font-extrabold text-6xl mb-8 text-left">
          User
          <br />
          Management
          <br />
          System ⬇️
          <br />
        </h1>
        <div className="flec flex-col">
          <button
            onClick={() => navigate("/users")}
            className="px-8 py-4 rounded-3xl text-white text-3xl bg-black hover:scale-110 transition-all flex flex-col mx-auto"
          >
            Users 🧤
          </button>
        </div>
      </div>
    </header>
  );
}

export default App;
