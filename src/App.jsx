import './App.css'
import HomePage from './components/HomePage';
import AboutPage from './components/AboutPage';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import ProjectPage from './components/ProjectPage';
import { HashRouter} from 'react-router-dom';



function App() {
  return (
    <>
      <Router basename="/denisse-alcantara">
        <Routes>
        <Route path="/" element={ HomePage() } />
        <Route path="/about" element={ AboutPage() } />
        <Route path="/projects" element={ ProjectPage() } />
        </Routes>
      
    </Router>


    </>

  )
}

export default App
