import "./App.css"
import { GetThemeValues } from "./context/Context";
import Navigation from "./components/Navigation";
import UserCard from "./components/UserCard";
import UserSearch from "./components/UserSearch";
import { useContext } from "react";
import { GitHubContext } from "./context/UserContext";

function App() {

  const { darkTheme } = GetThemeValues()

  const { user, loading } = useContext(GitHubContext)
  
  return (
    <div className={`${darkTheme ? "bg-[#141D2F]" : "bg-[#F6F8FF]"} App lg:py-[9rem] lg:px-[22.188rem] md:py-[8.75rem] md:px-[6.063rem] py-[1.938rem] px-[1.5rem]`}>
      <Navigation />
      <UserSearch />
      {loading && <h1 className={`${darkTheme ? "text-[#FFF]" : "text-black"}`}>Loading</h1>}
      {
        user ? <UserCard /> : <h1 className={`${darkTheme ? "text-[#FFF]" : "text-[#141D2F]"} font-bold text-2xl mt-4`}>Please no user</h1>
      }
    </div>
  );
}

export default App;