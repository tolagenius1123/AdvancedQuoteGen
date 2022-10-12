import Navbar from "./components/Navbar";
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import QuoteGenerator from "./components/QuoteGenerator";
import AddQuote from "./components/AddQuote";
import Auth from "./components/Auth";
import { GoogleOAuthProvider } from '@react-oauth/google';

function App() {
  return (
    <GoogleOAuthProvider clientId="464529379469-vdr1g7oiheaohu700tfibgnp8glgqe34.apps.googleusercontent.com">
    <div className="App">
      <BrowserRouter>
        {/* <Navbar /> */}
        <Routes>
          <Route path="/" element={<Auth/>}/>
          <Route path="/quotes" element={<QuoteGenerator/>}/>
          <Route path="/addquote" element={<AddQuote/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  </GoogleOAuthProvider>

  );
}

export default App;
