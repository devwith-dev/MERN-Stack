import About from './About';
import { Contact } from './Contact';
import Header from './Header';
import { Routes, Route } from "react-router-dom";
function App() {
  return (
    <Routes>
      <Route path='/' element={<Header/>}/>
      <Route path='/about' element={<About/>}/>
      <Route path='/contact' element={<Contact/>}/>
    </Routes>
  );
}

export default App;
