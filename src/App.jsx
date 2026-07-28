import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Home";
import ProjectPage from './pages/ProjectPage'

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        {/* Route URL untuk halaman projects */}
        <Route path="/projects" element={<ProjectPage />} /> 
      </Routes>
    </BrowserRouter>
  )
}

export default App
