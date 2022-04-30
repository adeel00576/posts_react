import './App.css';
import LogIn from './components/LogIn';
import UserPost from './components/UserPost';
import "bootstrap/dist/css/bootstrap.min.css";
import { Link, Route, Routes } from 'react-router-dom';
import { Login} from '@mui/icons-material';
import AddPost from './components/AddPost';
import SignUp from './components/SignUp';
import AllPost from './components/AllPost';
import AddComment from './components/AddComment';
import ViewComments from './components/ViewComments';




function App() {
  return (
    <div className="App">
      <nav className="navbar navbar-expand navbar-dark bg-dark">
        <a href="/" className="navbar-brand">
          PostBlog
        </a>
        <div className="navbar-nav mr-auto">
          <li className="nav-item">
            <Link to={"/add_post"} className="nav-link">
              Add Post
            </Link>
          </li>
          <li className="nav-item">
            <Link to={"/sign_up"} className="nav-link">
              SignUp
            </Link>
          </li>
          <li className="nav-item">
            <Link to={"/login"} className="nav-link">
              LogIn
            </Link>
          </li>
          <li className="nav-item">
            <Link to={"/show_post"} className="nav-link">
              All Post
            </Link>
          </li>
        </div>
      </nav>
      
      <Routes>
        <Route path="/" element={<Login/>} />
        <Route path="/login" element={<LogIn/>} />
        <Route path="/user_posts" element={<UserPost/>} />
        <Route path="/add_post" element={<AddPost/>} />
        <Route path="/sign_up" element={<SignUp/>} />
        <Route exact path="/show_post" element={<AllPost/>} />
        <Route path="/Add_comment/:id" element={<AddComment/>} />
        <Route path="/view_comments/:id" element={<ViewComments/>} />


        


      </Routes>
    </div>
  );
}

export default App;


