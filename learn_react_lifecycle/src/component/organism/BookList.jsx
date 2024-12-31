import {useEffect, useState} from "react";
import {SectionTag} from "../atoms/SectionTag.jsx";

export const BookList = () => {
    const [books, setBooks] = useState([]);

    useEffect(() => {
        const fetchBooks = async () => {
            try{
                const response = await fetch('/Data/books.json');
                const data = await response.json();
                setBooks(data);
            }catch(e){
                console.error(e);
            }finally {
                /*setLoading()*/
            }
        }
        fetchBooks();
    }, [])

    return (
        <SectionTag>
            <div className={'p-4'}>
                <h2 className={'text-2xl font-bold'}>Book List</h2>
                <ul className={'list-disc pl-5'}>
                    {books.map((book) => (
                        <li key={book.id}>
                            <strong>{book.title}</strong> by {book.author}
                        </li>
                    ))}
                </ul>
            </div>
        </SectionTag>
    )
}