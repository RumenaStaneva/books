import React, { useEffect, useState } from 'react';
import BookCreate from './components/BookCreate';
import BookList from './components/BookList';
import axios from 'axios';

function App() {
    const [books, setBooks] = useState([]);

    const createBook = async (title) => {
        const response = await axios.post('http://localhost:3001/books', {
            title,
        });
        const updatedBooks =
            [
                ...books,
                response.data
            ]
        setBooks(updatedBooks);
    }

    const fetchBooks = async () => {
        const response = (await axios.get('http://localhost:3001/books')).data;
        setBooks(response);
    }

    useEffect(() => {
        fetchBooks()
    }, [])

    const deleteBookById = async (id) => {
        await axios.delete(`http://localhost:3001/books/${id}`);

        const updatedBooks = books.filter((book) => {
            return book.id !== id
        });
        setBooks(updatedBooks);
    }

    const editBookById = async (id, newTitle) => {
        await axios.put(`http://localhost:3001/books/${id}`, {
            title: newTitle
        })
        const newBooks = books.map((book) => {
            if (book.id == id) {
                return { ...book, title: newTitle }
            }
            return book;
        });
        setBooks(newBooks);
    }

    return <div className='app'>
        <h1>Reading list</h1>
        <BookList books={books} onDelete={deleteBookById} onEdit={editBookById} />
        <BookCreate onCreate={createBook} />
    </div>
}

export default App;