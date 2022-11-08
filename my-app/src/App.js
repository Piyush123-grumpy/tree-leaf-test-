import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import FormAndTablepage from "./pages/FormAndTablepage";
import Profiles from "./pages/Profiles";
import { useState, useEffect } from "react";

const getLocalItems = () => {
  let list = localStorage.getItem("items");
  if (list) {
    return JSON.parse(localStorage.getItem("items"));
  } else {
    return [];
  }
}
function compare(a, b) {
  if (a < b) {
    return -1;
  }
  if (a > b) {
    return 1;
  }
  return 0;
}
;

function App() {
  const [data, setData] = useState(getLocalItems());
  const [edited, setEdited] = useState(null);
  const [toggleSubmit, setTogglesubmit] = useState(true);
  const [editValue, setEditvalue] = useState({});

  useEffect(() => {
    localStorage.setItem("items", JSON.stringify(data));
  }, [data]);

  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            <FormAndTablepage
              data={data}
              setData={setData}
              compare={compare}
              edited={edited}
              setEdited={setEdited}
              toggleSubmit={toggleSubmit}
              setTogglesubmit={setTogglesubmit}
              editValue={editValue}
              setEditvalue={setEditvalue}
            />
          }
        />
        <Route
          path="/profile"
          element={
            <Profiles
              data={data}
              setData={setData}
              compare={compare}
              edited={edited}
              setEdited={setEdited}
              toggleSubmit={toggleSubmit}
              setTogglesubmit={setTogglesubmit}
              editValue={editValue}
              setEditvalue={setEditvalue}
            />
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
