import "./App.css"
import CardDetails from "./components/CardDetails";
import Navigation from "./components/Navigation";
import SearchBar from "./components/SearchBar";

function App() {
  return (
    <div className="App">
      <div className="lg:pt-[9rem] lg:px-[22.188rem] md:pt-[8.75rem] md:px-[6.063rem] pt-[1.938rem] px-[1.5rem]">
      <Navigation />
      <SearchBar />
      <CardDetails />
      </div>
    </div>
  );
}

export default App;
