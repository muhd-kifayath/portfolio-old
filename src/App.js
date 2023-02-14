import './App.scss';
import { Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Page from './components/Page';
import About from './components/About';


function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Page />} />
      </Routes>
    </>
  );
}

export default App;
