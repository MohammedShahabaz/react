import logo from "./logo.svg";
import "./App.css";
import React from "react";

import { useState, useEffect } from "react";

// class App extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = { apiResponse: "" };
//   }

//   CallApi() {
//     fetch("http://localhost:9000/testAPI")
//       .then((res) => res.text())
//       .then((res) => this.setState({ apiResponse: res }));
//     console.log(this.state.apiResponse);
//   }

//   componentWillUnmount() {
//     this.CallApi();
//   }

//   render() {
//     return (
//       <div className="App">
//         <header className="App-header">
//           {/* <img src={logo} className="App-logo" alt="logo" /> */}
//           <p>{this.state.apiResponse}</p>
//         </header>
//         <p>{this.state.apiResponse}</p>
//       </div>
//     );
//   }
// }

function App() {
  const [state, setState] = useState("");

  const fetchAllDetails = async () => {
    const response = await fetch(`http://localhost:9000/testAPI`);
    const data = await response.text();
    setState(data);
    console.log(data);
  };
  useEffect(() => {
    fetchAllDetails();
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>{state}</p>
      </header>
      <p>{state}</p>
    </div>
  );
}

export default App;
