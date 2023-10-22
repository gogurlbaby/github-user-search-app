import "./App.css"
import CardDetails from "./components/CardDetails";
import { GetThemeValues } from "./components/Context";
import Navigation from "./components/Navigation";
import SearchBar from "./components/SearchBar";

function App() {

  const {darkTheme} = GetThemeValues()
  
  return (
    <div className="App">
      <div className={`${darkTheme ? "bg-[#141D2F]" : "bg-[#F6F8FF]"} lg:py-[9rem] lg:px-[22.188rem] md:py-[8.75rem] md:px-[6.063rem] py-[1.938rem] px-[1.5rem]`}>
      <Navigation />
      <SearchBar />
      <CardDetails />
      </div>
    </div>
  );
}

export default App;
// bg-[#F6F8FF]