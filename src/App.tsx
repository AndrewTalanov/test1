import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import Home from './components/Home';
import First from './components/First';
import Second from './components/Second';

function App() {

  type Dog = { bark: () => void }
  type Cat = { meow: () => void }

  type DogOrCat = Dog & Cat;

  const test: DogOrCat = { bark: () => console.log('ok'), meow: () => console.log('ok')}


  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="first" element={<First />} />
          <Route path="second" element={<Second />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
