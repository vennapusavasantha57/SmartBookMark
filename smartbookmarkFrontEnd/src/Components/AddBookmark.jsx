import React, { useState } from "react";
import { saveBookmark } from "../services/bookmarkService";

function AddBookmark() {
  const [bookmark, setBookmark] = useState({
    title: "",
    url: "",
    description: ""
  });

  const handleChange = (e) => {
    setBookmark({ ...bookmark, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    saveBookmark(bookmark).then(() => {
      setBookmark({ title: "", url: "", description: "" });
      window.location.reload();
    });
  };

  return (
    <div className="form-card">
      <h2>Add Bookmark</h2>

      <form onSubmit={handleSubmit}>
        <input
          name="title"
          placeholder="Title"
          value={bookmark.title}
          onChange={handleChange}
          required
        />

        <input
          name="url"
          placeholder="URL"
          value={bookmark.url}
          onChange={handleChange}
          required
        />

        <input
          name="description"
          placeholder="Description"
          value={bookmark.description}
          onChange={handleChange}
        />

        <button className="btn btn-primary" type="submit">
          Save Bookmark
        </button>
      </form>
    </div>
  );
}

export default AddBookmark;
