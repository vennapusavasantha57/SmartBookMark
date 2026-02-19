import React from "react";
import BookmarkList from "./Components/BookmarkList";
import AddBookmark from "./Components/AddBookmark";
import "./styles/bookmark.css";

function App() {
  return (
    <div className="app-container">
      <h1>Smart Bookmark</h1>
      <AddBookmark />
      <BookmarkList />
    </div>
  );
}

export default App;
