import React, { useState } from "react";
import BookEdit from './BookEdit';
import useBooksContext from "../hooks/use-books-context";

function BookShow({ book }) {
    const { deleteBookById } = useBooksContext();
    const [showEdit, setShowEdit] = useState(false);
    const handleEditBook = () => {
        setShowEdit(!showEdit);
    };
    const handleDeleteBook = () => {
        deleteBookById(book.id);
    };

    const handleSubmit = () => {
        setShowEdit(false);
    };

    let content = <h3>{book.title}</h3>
    if (showEdit) {
        content = <BookEdit book={book} onSubmit={handleSubmit} />
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