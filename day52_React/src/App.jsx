import React, { useState } from "react";
import Todos from "./components/Todos";
import Form from "./components/Form";
const App = () => {
  const [data, setData] = useState([
    {
      id: 1,
      title: "MERN Batch - 2",
      description: "This is Batch very Talented",
    },
    {
      id: 2,
      title: "Avengers Infinity War",
      description: "This is one the best movie in Marvel Avengers Series",
    },
    {
      id: 3,
      title: "Chennai Express",
      description: "This is one the best movie of SRK and Deepika",
    }
  ]);
  return (
    <>
      {/* <h1>First React Project</h1> */}
      <Form />
      <Todos data={data} />
    </>
  );
};

export default App;
