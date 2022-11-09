import React, { Suspense } from "react";
import Navbar from "./components/Navbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
// import QuoteGenerator from "./components/QuoteGenerator";
// import AddQuote from "./components/AddQuote";
// import Auth from "./components/Auth";
import { GoogleOAuthProvider } from "@react-oauth/google";
const QuoteGenerator = React.lazy(() => import("./components/QuoteGenerator"));
const AddQuote = React.lazy(() => import("./components/AddQuote"));
const Auth = React.lazy(() => import("./components/Auth"));

function App() {
  return (
    <GoogleOAuthProvider clientId="464529379469-vdr1g7oiheaohu700tfibgnp8glgqe34.apps.googleusercontent.com">
      <div className="App">
        <BrowserRouter>
          {/* <Navbar /> */}
          <Suspense fallback={<div>Loading...</div>}>
            <Routes>
              <Route path="/" element={<Auth />} />
              <Route path="/quotes" element={<QuoteGenerator />} />
              <Route path="/addquote" element={<AddQuote />} />
            </Routes>
          </Suspense>
        </BrowserRouter>
      </div>
    </GoogleOAuthProvider>
  );
}

export default App;
