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

//Query to Display a wishlist by customerId
db.customers.aggregate([
    {
        $project:
        {
            customerId: 1,
            wishlist: 1
        }
    },
    {
        $match:
        {
            customerId:"1002"
        }
    }
])

//Query to add a book to a customer's wishlist
db.customers.updateOne(
    {"customerId":"1002"},
    {"$addToSet": {
        wishlist: {
            "title":"50 Shades Darker",
            "genre":"Romance",
            "author":"E.L. James",
            "bookId":"5002"
        }
    }}
)

//Query to remove a book from a wishlist
db.customers.updateOne(
    {"customerId":"1002"}, 
    {"$pull": {
        wishlist:{
            "bookId":{
                $eq:"5002"
            }
        }
    } 
})