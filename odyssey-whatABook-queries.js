/**
	Title: odyssey-whatABook-queries.js
    Author: William Austin & TiaNiecia Butler
    Date: July 1, 2023
    Description: Aggregate Queries 
 */

//Query to Display the full list of books
db.books.find();

//Query to Display a list of books by genre
db.books.find({"genre":"Mystery"});

//Query to Display a list of books by author
db.books.find({"author":"J.K. Rowling"});

//Query to Display a book by bookId
db.books.find({"bookId":"2004"});