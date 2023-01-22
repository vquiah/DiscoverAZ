import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import {CreatePost,Error,Landing,Login,Main, Post, Profile} from './pages/index'
import { SharedLayout } from './components/index';



function App() {
  return (
 <BrowserRouter>
  <Routes>

  <Route index element={<Landing/>} />
      <Route path='/posts' element={<Main/>} />
      <Route path='/post' element={<Post/>} />
      <Route path='/profile' element={<Profile/>} />
      <Route path='/create' element={<CreatePost/>} />
    {/* </Route> */}
    {/* <Route path='/' element={<SharedLayout/>}>  */}
    {/* <Route path='*' element={<Error/>}/> */}
  </Routes>
 </BrowserRouter>
  );
}

export default App;
