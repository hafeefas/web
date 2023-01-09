import Home from './Home'
import CompanyBio from './CompanyBio'
import PostPage from './PostPage'
import SingleProduct from './SingleProduct'
import { Routes, Route } from 'react-router-dom'

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route exact path="/bio" element={<CompanyBio />} />
      <Route exact path="/post" element={<PostPage />} />
      <Route exact path="/product" element={<SingleProduct />} />

    </Routes>
  );
}

export default App;
