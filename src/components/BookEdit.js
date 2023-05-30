import React, { useState } from "react";
import useBooksContext from "../hooks/use-books-context";


function BookEdit({ book, onSubmit }) {
    const [newTitle, setNewTitle] = useState(book.title);
    const { editBookById } = useBooksContext();

    const handleChange = (e) => {
        let value = e.target.value;
        setNewTitle(value);
    };

    const editBookName = (e) => {
        e.preventDefault();

        onSubmit();
        editBookById(book.id, newTitle);
    }


    return <form className="book-edit" onSubmit={editBookName}>
        <label htmlFor="edit">Title</label>
        <input name="edit" type="text" className="input" value={newTitle} onChange={handleChange} />
        <button className="button is-primary">Save</button>
    </form>
}

export default BookEdit;