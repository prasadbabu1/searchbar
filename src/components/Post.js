import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addPost, deletePost, updatePost } from "../features/postSlice";

const Post = () => {
  const posts = useSelector((state) => state.posts);
  const dispatch = useDispatch();
  
const[editIndex,setEditIndex]=useState(-1)
  const [formData, setFormData] = useState({ title: "", content: "" });
  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleAddPost = () => {
    if (editIndex==-1 ){
        dispatch(addPost(formData));
        setFormData({ title: "", content: "" });

    }
    else{
       dispatch(updatePost({id:posts[editIndex].id,...formData}))
       setFormData({ title: "", content: "" });
       setEditIndex(-1)

       
    }
   
  };

  const handleDeletePost = (id) => {
    dispatch(deletePost({ id }));
  };
  const handleUpdatePost = (id) => {
    const postUpdate=posts[id];
    setFormData({title:postUpdate.title,content:postUpdate.content});
    setEditIndex(id)
  
  };

  if (posts) {
    console.log(posts, "hello");
  }
  return (
    <div className="blogs">
      <h1>Blog Post</h1>
      <div className="add-data">
        <h2>Add Post</h2>
        <label>Title:</label>
        <input
          type="text"
          name="title"
          placeholder="Enter the title"
          value={formData.title}
          onChange={handleInputChange}
        />
        <label>Content:</label>
        <textarea
          name="content"
          value={formData.content}
          onChange={handleInputChange}
        />
        <button onClick={handleAddPost} className="btn">
          {editIndex === -1 ? "Add":"Update"}
        </button>
      </div>

      <div className="postView">
        <h2>Posts</h2>
        <ul className="list-view">
          {posts.map((post,i) => {
            return (
              <li key={post.id} className="listdisplay">
                <strong>Title:{post.title}</strong>
                <p>Content:{post.content}</p>
                <button
                  onClick={() => handleDeletePost(post.id)}
                  className="btn"
                >
                  Delete
                </button>
                <button className="btn" onClick={() => handleUpdatePost(i)}>
                  Update Post
                </button>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default Post;
