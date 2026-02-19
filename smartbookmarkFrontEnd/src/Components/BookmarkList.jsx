import React, { useEffect, useState } from "react";
import {
  getAllBookmarks,
  deleteBookmark
} from "../services/bookmarkService";

function BookmarkList() {
  const [bookmarks, setBookmarks] = useState([]);

  useEffect(() => {
    loadBookmarks();
  }, []);

  const loadBookmarks = () => {
    getAllBookmarks().then((res) => setBookmarks(res.data));
  };

  const handleDelete = (id) => {
    deleteBookmark(id).then(() => loadBookmarks());
  };

  return (
    <div className="list-card">
      <h2>Saved Bookmarks</h2>

      {bookmarks.map((b) => (
        <div key={b.id} className="bookmark-item">
          <div className="bookmark-info">
            <b>{b.title}</b>
            <br />
            <a href={b.url} target="_blank" rel="noreferrer">
              {b.url}
            </a>
            <p>{b.description}</p>
          </div>

          <button
            className="btn btn-danger"
            onClick={() => handleDelete(b.id)}
          >
            Delete
          </button>
        </div>
      ))}
    </div>
  );
}

export default BookmarkList;
