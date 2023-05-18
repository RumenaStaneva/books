import React, { useState } from "react";
import BookEdit from './BookEdit';

function BookShow({ book, onDelete, onEdit }) {
    const [showEdit, setShowEdit] = useState(false);
    const handleEditBook = () => {
        setShowEdit(!showEdit);
    };
    const handleDeleteBook = () => {
        onDelete(book.id);
    };

    const handleSubmit = (id, newTitle) => {
        setShowEdit(false);
        onEdit(id, newTitle);
    };

    let content = <h3>{book.title}</h3>
    if (showEdit) {
        content = <BookEdit book={book} handleSubmit={handleSubmit} />
    }


    return <div className="book-show">
        <img src={`https://picsum.photos/seed/${book.id}/300/200`} alt="pics" />
        <div>{content}</div>
        <div className="actions">
            <button className="edit" onClick={handleEditBook}>Edit</button>
            <button className="delete" onClick={handleDeleteBook}>Delete</button>
        </div>
    </div>
}

export default BookShow;