import { Route, BrowserRouter, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Post from './pages/Post';
import About from './pages/About';
import Catgories from './pages/Categories';
import CreateArticle from './pages/Create-Article';
import PostDashboard from './pages/Post-Dashboard';
import Profile from './pages/Profile';


function App() {  
  
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Home />} />
        <Route path="/:id" element={<Post />} />
        <Route path='/categories' element={<Catgories />} />
        <Route path='/about' element={<About />} />
        <Route path='/create-post' element={<CreateArticle />} />
        <Route path='/dashboard' element={<PostDashboard />} />
        <Route path='/profile' element={<Profile />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;