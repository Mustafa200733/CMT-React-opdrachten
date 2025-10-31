import "./App.css";
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import HomePage from './Pages/HomePage';
import DetailPage from './Pages/Detail.page'
function App() {

  return (
    
  <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
          <Route path="/animal/:id" element={<DetailPage />} />
 </Routes>
    </BrowserRouter>    
    
  )
}

export default App
