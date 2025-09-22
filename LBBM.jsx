import React, { useState } from "react";

export default function App() {
const \[books, setBooks] = useState(\[
{ id: 1, title: "The Great Gatsby", author: "F. Scott Fitzgerald" },
{ id: 2, title: "1984", author: "George Orwell" },
{ id: 3, title: "To Kill a Mockingbird", author: "Harper Lee" },
]);

const \[search, setSearch] = useState("");
const \[newTitle, setNewTitle] = useState("");
const \[newAuthor, setNewAuthor] = useState("");

const filteredBooks = books.filter(
(book) =>
book.title.toLowerCase().includes(search.toLowerCase()) ||
book.author.toLowerCase().includes(search.toLowerCase())
);

const handleAddBook = (e) => {
e.preventDefault();
if (newTitle.trim() === "" || newAuthor.trim() === "") return;
const newBook = {
id: Date.now(),
title: newTitle,
author: newAuthor,
};
setBooks(\[...books, newBook]);
setNewTitle("");
setNewAuthor("");
};

const handleRemoveBook = (id) => {
setBooks(books.filter((book) => book.id !== id));
};

return (
\<div style={{ maxWidth: "600px", margin: "20px auto", fontFamily: "Arial" }}>
\<h1 style={{ textAlign: "center" }}>📚 Library Management</h1>

```
  {/* Search Input */}
  <input
    type="text"
    placeholder="Search by title or author..."
    value={search}
    onChange={(e) => setSearch(e.target.value)}
    style={{
      width: "100%",
      padding: "8px",
      marginBottom: "15px",
      borderRadius: "5px",
      border: "1px solid #ccc",
    }}
  />

  {/* Book List */}
  <ul style={{ listStyle: "none", padding: 0 }}>
    {filteredBooks.length > 0 ? (
      filteredBooks.map((book) => (
        <li
          key={book.id}
          style={{
            border: "1px solid #ddd",
            padding: "10px",
            marginBottom: "10px",
            borderRadius: "5px",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <div>
            <strong>{book.title}</strong> <br />
            <small>by {book.author}</small>
          </div>
          <button
            onClick={() => handleRemoveBook(book.id)}
            style={{
              background: "red",
              color: "white",
              border: "none",
              padding: "5px 10px",
              borderRadius: "4px",
              cursor: "pointer",
            }}
          >
            Remove
          </button>
        </li>
      ))
    ) : (
      <p>No books found</p>
    )}
  </ul>

  {/* Add Book Form */}
  <form onSubmit={handleAddBook} style={{ marginTop: "20px" }}>
    <input
      type="text"
      placeholder="Book Title"
      value={newTitle}
      onChange={(e) => setNewTitle(e.target.value)}
      style={{
        width: "100%",
        padding: "8px",
        marginBottom: "10px",
        borderRadius: "5px",
        border: "1px solid #ccc",
      }}
    />
    <input
      type="text"
      placeholder="Author"
      value={newAuthor}
      onChange={(e) => setNewAuthor(e.target.value)}
      style={{
        width: "100%",
        padding: "8px",
        marginBottom: "10px",
        borderRadius: "5px",
        border: "1px solid #ccc",
      }}
    />
    <button
      type="submit"
      style={{
        background: "green",
        color: "white",
        border: "none",
        padding: "8px 15px",
        borderRadius: "5px",
        cursor: "pointer",
      }}
    >
      Add Book
    </button>
  </form>
</div>
```

);
}
