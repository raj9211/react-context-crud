import React, { useState, useEffect } from "react";
import './App.css';
import Header from "./Header";
import AddContact from "./AddContact";
import ContactList from "./ContactList";
import ContactDetail from "./ContactDetail";
import EditContact from "./EditContact";
import { ContactsCrudContextProvider } from "../context/ContactsCrudContext";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import api from "../api/contact";



function App() {
  return (
    <div className="ui container">
      <Router>
        <Header />
        <ContactsCrudContextProvider>
          <Routes>
            <Route path="/"
              exact
              element={<ContactList />}
            >
            </Route>
            <Route path="/add"
              element={<AddContact />}
            >
            </Route>

            <Route path="/edit"
              element={<EditContact />}
            >
            </Route>

            <Route path="/contact/:id" element={ContactDetail}></Route>
          </Routes>
        </ContactsCrudContextProvider>
      </Router>
    </div>
  );
}

export default App;
