import './css/App.css'
import Favourites from './pages/favourites'
import Home from './pages/Home'
import { Routes, Route } from 'react-router-dom'
import NavBar from './components/Navbar'
import Test from './pages/Test'

function App() {
  return <div>
    <NavBar />
    <main className="main-content">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/favourites" element={<Favourites />} />
        <Route path="/test" element={<Test />} />
      </Routes>
    </main>
  </div>

}


export default App
