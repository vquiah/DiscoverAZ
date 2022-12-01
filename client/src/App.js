import './App.css';
import AddBtn from './components/AddBtn';
import Header from './components/Header'
import Main from './components/Main'
import Post from './components/Post';
import Profile from './components/Profile'



function App() {
  return (
    <div className='main_app'>
     <Header />
     {/* <Main />
     <Profile /> */}
     <Post/>
     <AddBtn />

    </div>
  );
}

export default App;
