import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./pages/Home";
import PhotoGallery from "./pages/PhotoGallery";
import PeoplesList from "./pages/PeoplesList";
import Sales from "./pages/Sales";
import Purchases from "./pages/Purchases";
import ItemsList from "./pages/ItemsList";
import Settings from "./pages/Settings";
import Purchases from "./pages/Purchases";
import Reports from "./pages/Reports";
import Sidebar from "./components/Sidebar";
import './mystyle.css';
function App() {
  return (
    <>
      <Router>
        <Sidebar />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/peopleslist" component={PeoplesList} />
          <Route path="/sales" component={Sales} />
          <Route path="/purchases" component={Purchases} />
          <Route path="/itemslist" component={ItemsList} />
          <Route path="/settings" component={Settings} />
          <Route path="/purchases" component={Purchases} />
          <Route path="/gallery" component={PhotoGallery} />
          <Route path="/reports" component={Reports} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
