import logo from './logo.svg';
import './App.css';
import { Post } from './Components/Post';
import { SeePost } from './Components/SeePost';
import {Routes ,Route }  from 'react-router-dom'
function App() {
  return (
    <div className="App">
      {/* <h1>Post App</h1> */}
      <Routes>
        <Route path="/" element={<SeePost />} />
        <Route path="/post" element={<Post />}/>
      </Routes>
      {/* <Post /> */}
    </div>
  );
}

export default App;
