import './App.css'
import HomePage from './components/HomePage';
import AboutPage from './components/AboutPage';
import ProjectPage from './components/ProjectPage';
import { Routes, Route, HashRouter } from "react-router-dom";




function App() {
  return (
    <>
      <HashRouter>
        <Routes>
        <Route path="#/denisse-alcantara" element={<HomePage />} />
        <Route path="#/denisse-alcantara/about" element={<AboutPage />} />
        <Route path="#/denisse-alcantara/projects" element={<ProjectPage />} />
        </Routes>
      </HashRouter>



    </>

  )
}

export default App
