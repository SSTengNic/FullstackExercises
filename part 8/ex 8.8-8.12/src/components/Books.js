import { ALL_BOOKS } from "../queries";
import { useQuery } from "@apollo/client";
import { useState } from "react";

const Books = (props) => {
  const result = useQuery(ALL_BOOKS);

  if (result.loading) {
    <div>Loading...</div>;
  }

  if (!props.show) {
    return null;
  }

  const books = result.data.allBooks;

  return (
    <div>
      <h2>books</h2>

      <table>
        <tbody>
          <tr>
            <th>title</th>
            <th>author</th>
            <th>published</th>
          </tr>
          {books.map((a) => (
            <tr key={a.title}>
              <td>{a.title}</td>
              <td>{a.author}</td>
              <td>{a.published}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Books;
