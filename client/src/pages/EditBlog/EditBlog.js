import React, {
  useState
  , useEffect
} from "react";
import axios from "axios";
import baseURL from "../../config/baseURL";
import {
  useParams
} from "react-router-dom";
import Spinner from "../../components/Spinner/Spinner";
import ReactQuill from "react-quill";
import toolbarOptions from "./toolbarOptions";

export default function EditBlog() {
  const [content, setContent] = useState();
  const [blog, setBlog] = useState([]);
  const [error, setError] = useState();
  const [success, setSuccess] = useState();
  const [loading, setLoading] = useState(true);
  let {
      id
  } = useParams();
  const submitHandler = async(e) => {
      e.preventDefault();
      const title = e.target.title.value;
      const coverImage = e.target.coverImage.value;
      const category = e.target.category.value;
      const blogData = {
          content
          , category
          , coverImage
          , title
      , };

      console.log("blogData ==> ", blogData);
      try {
          const res = await axios.post(
              baseURL + "/blogs/edit/" + blog._id
              , blogData
          );
          if (res.data.error) {
              setError(res.data.error);
              setSuccess(null);
          } else {
              setError(null);
              setSuccess("the Blog Edited successfully, redirect in 1s");
              setTimeout(() => {
                  window.location.replace("/Blogs");
              }, 1000);
          }
          console.log("RES ==> ", res.data);
      } catch (e) {
          console.log(e);
      }
      // POST req  ==> http://localhost:5000/api/v1/signup
  };

  useEffect(() => {
      const getBlog = async() => {
          setLoading(true);
          try {
              const blogData = await axios.get(baseURL + "/blogs/" + id);
              setBlog(blogData.data);
              setContent(blogData.data.content);
              setLoading(false);
          } catch (e) {
              console.log(e);
              setLoading(false);
          }
      };
      getBlog()
  }, [id]);
  console.log(blog);
  return (
      <div className=" p-3 border bg-light wrapper-container Page">
    <h1>Edit Blog</h1>
    {error && (
      <div className="alert alert-danger" role="alert">
        {error}
      </div>
    )}
    {success && (
      <div className="alert alert-success" role="alert">
        {success}
      </div>
    )}
    {loading ? (
      <Spinner />
    ) : (
      <form onSubmit={submitHandler} className="edit-blog">
        <div className="mb-3">
          <label htmlFor="exampleInputEmail1" className="form-title">
            Title
          </label>
          <input
            defaultValue={blog.title}
            name="title"
            type="text"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputEmail1" className="form-category">
            Category
          </label>
          <input
            defaultValue={blog.category}
            name="category"
            type="text"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputPassword1" className="form-cover">
            Cover Image URL
          </label>
          <input
            defaultValue={blog.coverImage}
            name="coverImage"
            type="text"
            className="form-control"
            id="exampleInputPassword1"
          />
        </div>

        <div className="mb-3">
          <label htmlFor="exampleInputPassword1" className="form-content">
            Content
          </label>
          <ReactQuill
            modules={{ toolbar: toolbarOptions }}
            value={content}
            onChange={setContent}
            theme="snow"
          />
        </div>

        <button type="submit" className="submit-btn btn-primary">
          Submit
        </button>
      </form>
    )}
  </div>
  );
}