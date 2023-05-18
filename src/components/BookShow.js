import React from "react";

function BookShow({ book, onDelete }) {
    const deleteBook = () => {
        onDelete(book.id);
    }

    return <div className="book-show">
        <div className="actions">
            <button className="delete" onClick={deleteBook}>Delete</button>
        </div>
        {book.title}
    </div>
}

export default BookShow;