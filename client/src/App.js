// import logo from './logo.svg';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Main from './views/Main';
import Form from './views/Form';
import Present from './views/Present';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route element={<Main /> } path='/' default/>
          <Route element={<Form /> } path='/signup' />
          <Route element={<Present /> } path='/Home' />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
