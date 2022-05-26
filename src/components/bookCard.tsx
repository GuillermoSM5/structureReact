import { FunctionComponent } from "react";
import { Card } from "antd";

interface BookCardProps {
  book: any;
}

const BookCard: FunctionComponent<BookCardProps> = ({ book }) => {
  console.log(book);
  return <Card title={book.title}></Card>;
};

export default BookCard;
