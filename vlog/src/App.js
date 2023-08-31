import { BrowserRouter, Route, Routes } from "react-router-dom";
import AddVlog from "./AddVlog";
import "./App.css";
import Download from "./Components/Download";
import Footer from "./Components/Footer";
import Homepage from "./Components/Homepage";
import LoginSignup from "./Components/LoginSignup";
import Notify from "./Components/Notify";
import Profile from "./Components/Profile";
import Search from "./Components/Search";
import Watch from "./Components/Watch";

function App() {
  
  return (<div className="App">
    <BrowserRouter>


      <Routes>
        <Route>

          <Route>
            <Route path="/Profile" element={<Profile />} />
            <Route path="/Notifications" element={<Notify />} />
            <Route path="/Search" element={<Search />} />
            <Route path="/Download" element={<Download />} />
            <Route path="/AddVlog" element={<AddVlog />} />
            <Route path="/footer" element={<Footer />} />


            <Route path="/" element={<Homepage />} />
            <Route path="/watch/:id" element={<Watch />} />


          </Route>


          <Route>

            < Route path="/Login" element={<LoginSignup />} />
          </Route>






        </Route>










      </Routes>
    </BrowserRouter>

  </div>)
}

export default App;
