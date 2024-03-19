import Hero from "./Hero";
import Laptop from "./Laptop";
import Phone from "./Phone";
import Tablet from "./Tablet";
import Person from "./components/Person";
const App = () => {
  return (
    <>
      {/* <Tablet />
      <Phone />
      <Hero />
      <Laptop /> */}
      <Person name={"superman"} />
      <Person name={"spiderman"} />
      <Person name={"batman"} />
    </>
  );
};

export default App;
