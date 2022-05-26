import request from "./request";

const urlGetBooks = `/api/v1/books`;

export const getBooks = () =>{
    return request(urlGetBooks,{method:'Get'})
}