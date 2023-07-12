/**
	Title: whatABook-scripts.js
    Author: William John Austin & TiaNeicia Mosley
    Date: 12 July 2023
    Description: MongoDB Shell Scripts for the Customer and Books collections for What-A-Book Project.
 */

// Deletes the Customer and Books collections.
db.books.drop()
db.customers.drop()

// Create the Customer and Books collections using Document Validation.
db.createCollection("books", {
	validator: { $jsonSchema: {
		bsonType: "object",
		properties: {
			title: {
				bsonType: "string"
			},
			genre: {
				bsonType: "string"
			},
			author: {
				bsonType: "string"
			},
            bookId: {
                bsonType: "string"
            }
		}
	}}
})

db.createCollection("customers", {
	validator: { $jsonSchema: {
		bsonType: "object",
		properties: {
			firstName: {
				bsonType: "string"
			},
			lastName: {
				bsonType: "string"
			},
			customerId: {
				bsonType: "string"
			},
			wishlist: {
				bsonType: "array"
			}
		}
	}}
})

//Fiction Books
tale = {
    "title":"A Tale of Two Cities",
    "genre":"Fiction",
    "author":"Charles Dickens",
    "bookId":"2001"
}

expectation = {
    "title":"Great Expectations",
    "genre":"Fiction",
    "author":"Charles Dickens",
    "bookId":"2002"
}
oliver = {
    "title":"Oliver Twist",
    "genre":"Fiction",
    "author":"Charles Dickens",
    "bookId":"2003"
}
scarlet = {
    "title":"The Scarlet Letter",
    "genre":"Fiction",
    "author":"Nathaniel Hawthorne",
    "bookId":"2004"
}

//Insert Fiction Section documents
db.books.insertOne(tale)
db.books.insertOne(expectation)
db.books.insertOne(oliver)
db.books.insertOne(scarlet)

//Science Fiction Books
dune1 = {
    "title":"Dune",
    "genre":"Science Fiction",
    "author":"Frank Herbert",
    "bookId":"3001"
}
dune2 = {
    "title":"Dune Messiah",
    "genre":"Science Fiction",
    "author":"Frank Herbert",
    "bookId":"3002"
}
dune3 = {
    "title":"Children of Dune",
    "genre":"Science Fiction",
    "author":"Frank Herbert",
    "bookId":"3003"
}
dune4 = {
    "title":"God Emperor of Dune",
    "genre":"Science Fiction",
    "author":"Frank Herbert",
    "bookId":"3004"
}
dune5 = {
    "title":"Heretics of Dune",
    "genre":"Science Fiction",
    "author":"Frank Herbert",
    "bookId":"3005"
}
dune6 = {
    "title":"Chapterhouse: Dune",
    "genre":"Science Fiction",
    "author":"Frank Herbert",
    "bookId":"3006"
}

//Insert the SciFi Section documents
db.books.insertOne(dune1)
db.books.insertOne(dune2)
db.books.insertOne(dune3)
db.books.insertOne(dune4)
db.books.insertOne(dune5)
db.books.insertOne(dune6)

//Fantasy Books
potter1 = {
    "title":"Harry Potter and the Sorcerer's Stone",
    "genre":"Fantasy",
    "author":"J.K. Rowling",
    "bookId":"4001"
}
potter2 = {
    "title":"Harry Potter and the Chamber of Secrets",
    "genre":"Fantasy",
    "author":"J.K. Rowling",
    "bookId":"4002"
}
potter3 = {
    "title":"Harry Potter and the Prisoner of Azkaban",
    "genre":"Fantasy",
    "author":"J.K. Rowling",
    "bookId":"4003"
}
potter4 = {
    "title":"Harry Potter and the Goblet of Fire",
    "genre":"Fantasy",
    "author":"J.K. Rowling",
    "bookId":"4004"
}
potter5 = {
    "title":"Harry Potter and the Order of the Phoenix",
    "genre":"Fantasy",
    "author":"J.K. Rowling",
    "bookId":"4005"
}
potter6 = {
    "title":"Harry Potter and the Half Blood Prince",
    "genre":"Fantasy",
    "author":"J.K. Rowling",
    "bookId":"4006"
}
potter7 = {
    "title":"Harry Potter and the Deathly Hallows",
    "genre":"Fantasy",
    "author":"J.K. Rowling",
    "bookId":"4007"
}
hobbit = {
    "title":"The Hobbit",
    "genre":"Fantasy",
    "author":"J.R.R. Tolkien",
    "bookId":"4008"
}
lotr1 = {
    "title":"The Lord of the Rings - The Fellowship of the Ring",
    "genre":"Fantasy",
    "author":"J.R.R. Tolkien",
    "bookId":"4009"
}
lotr2 = {
    "title":"The Lord of the Rings - The Two Towers",
    "genre":"Fantasy",
    "author":"J.R.R. Tolkien",
    "bookId":"4010"
}
lotr3 = {
    "title":"The Lord of the Rings - The Return of the King",
    "genre":"Fantasy",
    "author":"J.R.R. Tolkien",
    "bookId":"4011"
}

//Insert the Fantasy Section documents
db.books.insertOne(potter1)
db.books.insertOne(potter2)
db.books.insertOne(potter3)
db.books.insertOne(potter4)
db.books.insertOne(potter5)
db.books.insertOne(potter6)
db.books.insertOne(potter7)
db.books.insertOne(hobbit)
db.books.insertOne(lotr1)
db.books.insertOne(lotr2)
db.books.insertOne(lotr3)


//Romance Books
shades1 = {
    "title":"50 Shades of Grey",
    "genre":"Romance",
    "author":"E.L. James",
    "bookId":"5001"
}
shades2 = {
    "title":"50 Shades Darker",
    "genre":"Romance",
    "author":"E.L. James",
    "bookId":"5002"
}
shades3 = {
    "title":"50 Shades Freed",
    "genre":"Romance",
    "author":"E.L. James",
    "bookId":"5003"
}
court = {
    "title":"The Court of Thorns and Roses",
    "genre":"Romance",
    "author":"Sarah J. Maas",
    "bookId":"5004"
}
achilles = {
    "title":"The Song of Achilles",
    "genre":"Romance",
    "author":"Madeline Miller",
    "bookId":"5005"
}

//Insert the Romance Section documents
db.books.insertOne(shades1)
db.books.insertOne(shades2)
db.books.insertOne(shades3)
db.books.insertOne(court)
db.books.insertOne(achilles)

//Mystery Books
patient = {
    "title":"The Silent Patient",
    "genre":"Mystery",
    "author":"Alex Michaelides",
    "bookId":"6001"
}
rose = {
    "title":"The Name of the Rose",
    "genre":"Mystery",
    "author":"Umberto Eco",
    "bookId":"6002"
}
girl = {
    "title":"Gone Girl",
    "genre":"Mystery",
    "author":"Gilian Flynn",
    "bookId":"6003"
}
dragon = {
    "title":"The Girl with the Dragon Tattoo",
    "genre":"Mystery",
    "author":"Stieg Larsson",
    "bookId":"6004"
}

//Insert the Mystery Section documents
db.books.insertOne(patient)
db.books.insertOne(rose)
db.books.insertOne(girl)
db.books.insertOne(dragon)

will = {
    "firstName":"William",
    "lastName":"Austin",
    "customerId":"1001",
    "wishlist": [
        {
            "title":"A Tale of Two Cities",
            "genre":"Fiction",
            "author":"Charles Dickens",
            "bookId":"5001"
        },
        {
            "title":"Dune",
            "genre":"Science Fiction",
            "author":"Frank Herbert",
            "bookId":"5002"
        },
        {
            "title":"Harry Potter and the Prisoner of Azkaban",
            "genre":"Fantasy",
            "author":"J.K. Rowling",
            "bookId":"5003"
        }
    ]
}
mary = {
    "firstName":"Mary",
    "lastName":"Brown",
    "customerId":"1002",
    "wishlist":[
        {
            "title":"50 Shades of Grey",
            "genre":"Romance",
            "author":"E.L. James",
            "bookId":"5004"
        }
    ]
}
judy =     {
    "firstName":"Judy",
    "lastName":"Mueller",
    "customerId":"1003",
    "wishlist":[
        {
            "title":"The Name of the Rose",
            "genre":"Mystery",
            "author":"Umberto Eco",
            "bookId":"6002"
        },
        {
            "title":"50 Shades Freed",
            "genre":"Romance",
            "author":"E.L. James",
            "bookId":"5003"
        }
    ]
}
bradley = {
    "firstName":"Bradley",
    "lastName":"Davis",
    "customerId":"1004",
    "wishlist":[
        {
            "title":"The Lord of the Rings - The Return of the King",
            "genre":"Fantasy",
            "author":"J.R.R. Tolkien",
            "bookId":"4011"
        },
        {
            "title":"The Lord of the Rings - The Two Towers",
            "genre":"Fantasy",
            "author":"J.R.R. Tolkien",
            "bookId":"4010"
        }
    ]
}

//Insert the documents
db.customers.insertOne(will)
db.customers.insertOne(mary)
db.customers.insertOne(bradley)
db.customers.insertOne(judy)
