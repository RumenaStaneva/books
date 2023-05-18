import React, { useState } from "react";

function BookEdit({ book, handleSubmit }) {
    const [newTitle, setNewTitle] = useState(book.title);
    const editBookName = (e) => {
        e.preventDefault();
        handleSubmit(book.id, newTitle);
    }

    const handleChange = (e) => {
        let value = e.target.value;
        setNewTitle(value);
    };


    return <form className="book-edit" action="submit" onSubmit={editBookName}>
        <label htmlFor="edit">Title</label>
        <input name="edit" type="text" className="input" value={newTitle} onChange={handleChange} />
        <button className="button is-primary">Save</button>
    </form>
}

export default BookEdit;