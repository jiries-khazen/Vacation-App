import './App.css';
import Login from "./Components/Login/Login";
import Vacation from "./Components/Vacations/Vacation";
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={< Vacation />}></Route>
          <Route path="/vacations" element={< Vacation />}></Route>
          <Route path="/login" element={< Login />}></Route>
          {/* <Route path="*" element={<NotFound />} /> */}
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
