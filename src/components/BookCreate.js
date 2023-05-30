import React, { useState } from "react";
import useBooksContext from "../hooks/use-books-context";


function BookCreate() {
    const { createBook } = useBooksContext();

    const [book, setBook] = useState('');
    const handleChange = (e) => {
        const title = e.target.value;
        setBook(title);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        createBook(book);
        setBook('');

    }
    return <div className="book-create">
        <h3>Add a book</h3>
        <form action="submit" onSubmit={handleSubmit}>
            <label htmlFor="create-input">Title:</label>
            <input name="create-input" className="input" type="text" onChange={handleChange} value={book} />
            <button className="button" onSubmit={handleSubmit}>Create!</button>
        </form>
    </div>
}

export default BookCreate;