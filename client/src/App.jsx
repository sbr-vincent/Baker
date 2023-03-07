import { Route, Routes } from "react-router-dom";
import Home from "./views/Home";
import { Button } from '@mui/material';
import ResponsiveAppBar from "./components/ResponsiveAppBar";


function App() {
  return (
    <div className="App">
      <ResponsiveAppBar />
      <Routes>
        <Route path="/" element={ <Home /> }></Route>
      </Routes>
    </div>
  );
}

export default App;
