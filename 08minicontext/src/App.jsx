import Login from "./Components/Login";
import Profile from "./Components/Profile";
import UserContextProvider from "./Context/UserContextProvider";

function App() {
  return (
    <UserContextProvider>
      <div
        className="flex flex-col justify-center items-center gap-4
      "
      >
        <h1>React With Chai</h1>

        <Login />
        <Profile />
      </div>
    </UserContextProvider>
  );
}

export default App;
