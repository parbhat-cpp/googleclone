import './App.css'
import DataProvider from './DataProvider';
import Home from './pages/Home'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import SearchPage from './pages/SearchPage';

function App() {

  return (
    <DataProvider>
      <div className='App'>
        <BrowserRouter>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/search' element={<SearchPage />} />
          </Routes>
        </BrowserRouter>
      </div>
    </DataProvider>
  )
}

export default App
