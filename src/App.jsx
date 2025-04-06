import './App.css'
import HomePage from './components/HomePage';
import AboutPage from './components/AboutPage';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import ProjectPage from './components/ProjectPage';


function App() {
  return (
    <>
            <Route path="/denisse-alcantara/" element={ HomePage() } />
          <Route path="/denisse-alcantara/about" element={ AboutPage() } />
          <Route path="/denisse-alcantara/]/projects" element={ ProjectPage() } />

    </>

  )
}

export default App
