import { BrowserRouter, Route, Routes } from "react-router-dom";
// import Header from "./Components/Header";
// import MoveList from "./Pages/MoveList";
// import MoveDetails from "./Pages/MoveDetails";
// import LogIn from "./Pages/LogIn";
// import Register from "./Pages/Register";
// import WatchLists from "./Pages/WatchLists";
import { languageContext } from "./context/language";
import React, { Suspense, useState } from "react";
const Header = React.lazy(() => import("./Components/Header"));
const MoveList = React.lazy(() => import("./Pages/MoveList"));
const MoveDetails = React.lazy(() => import("./Pages/MoveDetails"));
const LogIn = React.lazy(() => import("./Pages/LogIn"));
const Register = React.lazy(() => import("./Pages/Register"));
const WatchLists = React.lazy(() => import("./Pages/WatchLists"));

function App() {
  const [language, setLanguage] = useState("en");
  // const changeLanguage = (newLanguage) => {
  //   setLanguage(newLanguage);
  // };

  // const getDirection = () => {
  //   return languages === "ar" ? "rtl" : "ltr";
  // };
  // const translate = (key) => {
  //   return translations[languages][key] || key; // Default to key if translation not found
  // };
  return (
    <>
      <BrowserRouter>
        <languageContext.Provider value={{ language, setLanguage }}>
          <div style={{direction:language==="ar"?"rtl":"ltr"}}>
          <Header />
          <div className="container">
            <Suspense fallback={<div>Loading....</div>}>
              <Routes >
                <Route path="/" element={<MoveList />} />
                <Route path="/movedetails/:id" element={<MoveDetails />} />
                <Route path="/login" element={<LogIn />} />
                <Route path="/register" element={<Register />} />
                <Route path="/watchlists" element={<WatchLists />} />
              </Routes>
            </Suspense>
          </div>
          </div>
        </languageContext.Provider>
      </BrowserRouter>
    </>
  );
}

export default App;
