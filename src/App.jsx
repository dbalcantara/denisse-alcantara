import './App.css'
import HomePage from './components/HomePage';
import AboutPage from './components/AboutPage';
import { BrowserRouter as Router, Route} from 'react-router-dom';
import ProjectPage from './components/ProjectPage';


function App() {
  return (
      <Router basename={process.env.PUBLIC_URL}>
          <Route path="/" element={ HomePage() } />
          <Route path="/about" element={ AboutPage() } />
          <Route path="/projects" element={ ProjectPage() } />
      </Router>
  )
}

export default App
