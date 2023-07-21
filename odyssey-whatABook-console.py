#################################################
# Title: odyssey-whatABook-console.py
# Author: William Austin & TiaNieicia Mosley
# Date: July, 21 2023
# Description: Python Console Application for What-A-Book 
#################################################


#Import the Mongo Client so we can use Mongo in our Console

from pymongo import MongoClient
import certifi


client = MongoClient('mongodb+srv://web335_user:s3cret@cluster0.hkbvlmn.mongodb.net/?retryWrites=true&w=majority')

#Defining our database variables 
db = client['web335DB']
books = db['books']
customers = db['customers']

print()
print('Welcome to What-A-Book!')
print()
print('Our Collection:')

#Display the Full Collection of What-A-Book
for book in db.books.find():
    print("Title:", book.get("title"))
    print("Author:", book.get("author"))
    print("Genre:", book.get("genre"))
    print("Book ID:", book.get("bookId"))

#Defines our Genres
genres = ["Fiction", "Science Fiction", "Fantasy", "Romance", "Mystery"]

#Displaying our list of Genres
print()
print('Genres:')
print()
for genre in genres:
    print(genre)

#Inputting Genre To Display only books in that Genre
print()
genre_choice = input("Choose one of Genres and we'll show you what we've got - ")
print()
print(genre_choice, "- GOOD choice!")
print()

#Displaying the Books in the Selected Genre
print("Here's what we got in", genre_choice,":")
for book in db.books.find({"genre": genre_choice}):
    print("Title:", book.get("title"))
    print("Author:", book.get("author"))
    print("Genre:", book.get("genre"))
    print("Book ID:", book.get("bookId"))

#Input Customer ID and We will show you the wishlist
customer_id = input("Please enter your customer ID to view your wishlist - ")

try:
    customer = db.customers.find_one({"customerId": customer_id})
    
    if customer:
        first_name = customer.get("firstName", '')
        last_name = customer.get("lastName", '')
        wishlist = customer.get("wishlist")
        print("Customer's Name:", f"{first_name} {last_name}".title())
        print()
        print("Wishlist")
        print(wishlist)

    else:
        raise Exception("Sorry, customer does not exist in the WhatABook database.")
except Exception as e:
    print("\033[31m" + str(e) + "\033[0m")