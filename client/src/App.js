import "./App.css";
import { useState, useEffect } from "react";
import Footer from "./components/Footer/Footer";
import Navi from "./components/Navbar/Navi";
import { Switch, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import About from "./pages/About/About";
import Blogs from "./pages/Blogs/Blogs";
import SiginIn from "./pages/SignIn/SignIn";
import SignUp from "./pages/SignUp/SignUp";
import axios from "axios";
import baseURL from "./config/baseURL";
import Profile from "./pages/Profile/Profile";
import MyBlogs from "./pages/MyBlogs/MyBlogs";
import setAuth from "./config/setAuth";
import CreateBlog from "./pages/CreateBlog/CreateBlog";
import EditBlog from "./pages/EditBlog/EditBlog";
import Blog from "./pages/Blog/Blog";
import MyBlogsAdmin from "./pages/MyBlogsAdmin.js/MyBlogAdmin";
import CurrentUsers from "./pages/CurrentUsers/CurrentUsers";





function App() {
  const [user, setUser] = useState();

  const getUser = async () => {
    const userId = localStorage.getItem("userId");
    if (userId) {
      const userData = await axios.get(baseURL + "/users/" + userId);
      console.log(userData);
      setUser(userData.data);
    }
  };


  
  const setAuthToken = async () => {
    const token = localStorage.getItem("token");
    if (token) {
      setAuth(token);
    }
  };

  useEffect(() => {
    getUser();
    setAuthToken();
  }, []);

  return (
    <div>
      <Navi user={user} />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>

        <Route exact path="/about">
          <About />
        </Route>

        <Route exact path="/blogs">
          <Blogs />
        </Route>

        {!user && (
          <Route exact path="/signin">
            <SiginIn />
          </Route>
        )}

        {!user && (
          <Route exact path="/signup">
            <SignUp />
          </Route>
        )}
        {user && (
          <Route exact path="/profile">
            <Profile user={user} />
          </Route>
        )}
        {user && (
          <Route exact path="/my-blogs">
            <MyBlogs user={user} />
          </Route>
        )}

        {user && user.isAdmin && (
          <Route exact path="/all-blogs-admin">
            <MyBlogsAdmin user={user} />
          </Route>
        )}
        {user && user.isAdmin && (
          <Route exact path="/current-users">
            <CurrentUsers user={user} />
          </Route>
        )}
        {user && (
          <Route exact path="/create-blog">
            <CreateBlog user={user} />
          </Route>
        )}
        {user && (
          <Route exact path="/edit-blog/:id">
            <EditBlog user={user} />
          </Route>
        )}
        <Route exact path="/blog/:id">
          <Blog />
        </Route>
      </Switch>

      <Footer />
      
    </div>
  );
}

export default App;


