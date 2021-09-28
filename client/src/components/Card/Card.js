import React from "react";
import "./Card.css";
import Moment from "react-moment";


export default function Card({ blog }) {
  return (
    <>
 
    <div className={blog.views === 0 ?
    "card Card NewCard artist-card" : "card Card "}>
    <div className="backgroundEffect"></div>
      <div
        className="CardImg artist-card__img"
        style={{ backgroundImage: `url(${blog.coverImage})` }}
      ></div>

      <h4 className="card-title">{blog.title}</h4>
      <div className="container-fluid card-content">
        <small className="text-muted">
          {" "}
          By: {" " + blog.userId.userName + "  "}
          <img src={blog.userId.avatar} alt="" className="Avatar" />
          {" . "}
          <Moment date={blog.date} fromNow />
        </small>
        <p>
          <small className="text-muted cat">Category: {blog.category}</small>
        </p>
        <p>
          <small className="text-muted">
            Last updated <Moment date={blog.update} fromNow />
          </small>
        </p>
      </div>

      {blog.views === 0 ? (
        <span className="badge badge-success Alert">New</span>
      ) : null}
      {blog.views !== 0 ? (
        <span className="badge badge-pill badge-info CardViews">
          <i className="fas fa-eye"></i> {blog.views}
        </span>
      ) : null} <div>

    
    </div>
    </div>
   
    </>
  );
}



