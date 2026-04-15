import { BrowserRouter, Routes, Route } from 'react-router-dom'
import MainPage from './pages/MainPage'
import DetailPage from './pages/DetailPage'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/restaurant/:id" element={<DetailPage />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App