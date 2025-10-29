import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Navigation from './Pages/Navigations';
import Home from './Pages/Home';
import About from './Pages/About';
import NoPage from './Pages/NoPage';
import Contact from './Pages/Contact';


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigation />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="*" element={<NoPage />} />
          <Route path="contact" element={<Contact />} />

        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
