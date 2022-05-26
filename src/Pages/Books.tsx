import { useEffect, useState } from "react";
import { connect } from "react-redux";
import { getBooks } from "../redux/actions/books";
import BookCard from "../components/bookCard";

const Books = ({ getBooks }: any) => {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    const onSucces = (books: any) => {
      setBooks(books.list);
    };

    getBooks({ onSucces: onSucces });
  }, [getBooks]);

  console.log(books);
  return (
    <>
      <h2>Libros</h2>
      {books.length > 0 ? (
        books.map((book: any) => {
          return <BookCard key={book.title} book={book} />;
        })
      ) : (
        <div></div>
      )}
    </>
  );
};

const mapStateToProps = (state: any) => {
  return {
    isLoading: state.auth.isLoading,
  };
};

export default connect(mapStateToProps, { getBooks })(Books);
