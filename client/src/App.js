import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import CreatePost from './components/CreatePost';

import Error from './components/Error';
import Main from './components/Main'
import Post from './components/Post';
import Profile from './components/Profile'
import SharedLayout from './components/SharedLayout';



function App() {
  return (
 <BrowserRouter>
  <Routes>
    <Route path='/' element={<SharedLayout/>}> 
      <Route index element={<Main/>} />
      <Route path='/post' element={<Post/>} />
      <Route path='/profile' element={<Profile/>} />
      <Route path='/create' element={<CreatePost/>} />
    </Route>
    <Route path='*' element={<Error/>}/>
  </Routes>
 </BrowserRouter>
  );
}

export default App;
