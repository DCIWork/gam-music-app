import './Blogs.css';
// import React, { useEffect, useState } from "react";
// import Card from "../../components/Card/Card";
// import axios from "axios";
// import baseURL from "../../config/baseURL";
// import { Link } from "react-router-dom";

// import Clicks from '../clicks/Clicks';





// export default function Blogs() {


//     const [blogs, setBlogs] = useState([]);
//     const [loading, setLoading] = useState(true);

//     const getBlogs = async () => {
//     setLoading(true);
//     try {
//       const blogData = await axios.get(baseURL + "/blogs");
//       setBlogs(blogData.data);
//       setLoading(false);
//     } catch (e) {
//       console.log(e);
//       setLoading(false);
//     }
// };

// useEffect(() => {
//     getBlogs();
// }, []);

// console.log(blogs);


//   return (
//     <div className="container-fluid blogsContainer Page grid ">
//       {/* <h1>Blogs</h1> */}
//       <h1>Blogs</h1>
//       <div 
//       className="row animate__animated animate__lightSpeedInLeft animate__delay-0.8s">
        
//               {blogs.map((blog, index) => (
                  
//                   <div className="col-12 col-md-4" key={index}>
//               <Link to={"/blog/" + blog._id} style={{ textDecoration: "none" }}>
//                 <Card blog={blog} />
//               </Link>
//               <Clicks /> 
//             </div>

// ))}
// {blogs.length < 1 && !loading && "Blogs Not Found!"}
        
//       </div>
//     </div>
   
//   );
// }


import React, { useEffect, useState } from "react";
import Card from "../../components/Card/Card";
import axios from "axios";
import baseURL from "../../config/baseURL";
import { Link } from "react-router-dom";
import Spinner from "../../components/Spinner/Spinner";
export default function Blogs() {
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);

  const getBlogs = async () => {
    setLoading(true);
    try {
      const blogData = await axios.get(baseURL + "/blogs");
      setBlogs(blogData.data);
      setLoading(false);
    } catch (e) {
      console.log(e);
      setLoading(false);
    }
  };
  useEffect(() => {
    getBlogs();
  }, []);
  console.log(blogs);
  return (
    <div className="blogs-container Page">
      <h1>Blogs</h1>
      <div class="row">
        {loading ? (
          <Spinner />
        ) : (
          blogs.map((blog, idx) => (
            <div className="col-sm-12 col-md-6 col-lg-4 col-xl-3" key={idx}>
              <Link to={"/blog/" + blog._id} style={{ textDecoration: "none" }}>
                <Card blog={blog} />
              </Link>
            </div>
          ))
        )}
        {blogs.length < 1 && !loading && "Blogs Not Found!"}
      </div>
    </div>
  );
}