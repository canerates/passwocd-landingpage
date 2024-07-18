import { Route, Routes, useLocation } from "react-router-dom";
import { useEffect } from 'react';
import Home from './pages/Home'
import PrivacyPolicy from "./pages/PrivacyPolicy";

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

function App() {

  return(
    <div className='App'>
      <ScrollToTop />
      <Routes> 
        <Route exact path='/' element={<Home />} />
        <Route path='/privacy' element={<PrivacyPolicy/>} />
      </Routes>
    </div>
  )
}

export default App;