# StockManagement
To provide a better stock/warehouse management system to facilitate on a long term the company’s products to be easily manageable and easy to track the flows and it can be used to sell anything. This will help the company have an idea of everything that enters and goes out of the company.

# Features

## Common Features
- User can sign in
- User can view all categories
- User can view all Procuts

## Admin (User) Features
- Admin can add a new user (Employee)
- Admin can view all users (employees)
- Admin can add a product category
- Admin can view all categories
- Admin can view all Procuts
- Admin can view all products history

## Employee (User) Features
- Employee can edit his/her account password
- Employee can add a product in stock
- Employee can view only his/her products history
- Employee can update a product
- Employee can move out a product in stock

## Getting Started
To get started with this app you have to follow all instruction below carefully and implement.

## Prerequisites
First all of, Install the softwares on your local machine
- Install `NodeJS` [NodeJs](https://nodejs.org/en/download/)
- Install `Git` [Git](https://git-scm.com/)

## Installing the App
Make sure that you have cloned this Repo to your local machine
- By running `git clone`
- or download the Ziped folder on `GitHub`
- Then after run `cd StockManagement` to open the folder or simplly double on the downloaded folder
- To install all dependencies locally run this command `npm i` or `npm install` in terminal

### Scripts to use
- run `npm run test` to run tests
- run `npm run dev` to start App
- run `npm run coveralls` to run and view test coverages

## API endpoints

**API endpoints with no authentication**
- POST `api/v1/signin` User Sign in.

**API endpoints with authentication**

**About users**
- POST `api/v1/employees` User creation.
- POST `api/v1/employees/<employee-id>/password` Edit password
- GET `api/v1/employees` View all employees

**Product Category**
- POST `api/v1/categories` Create a category
- GET `api/v1/categories` View all categories

**About Product**
- POST `api/v1/products` Create a product
- GET `api/v1/products` View all products
- PATCH `api/v1/products/<product-id>` Modify a product

**About Product History**
- GET `api/v1/products/history` View all products history
- PATCH `api/v1/products/move-out` move out a product in stock status


## GitHub Pages
- link [StockManagement UI](https://the-a-team-sup.github.io/StockManagement/UI/pages/)

## Tools Used

### Back End
* Node JS
* Express (Framework)

### Front End
* HTML
* CSS
* Javascript

## Heroku Deployment
- link [sup-1-stock-management-app](https://sup-1-stock-management-app.herokuapp.com/)

## DOCUMENTATION
  link: [API documentation with POSTMAN]()

## Pivot Tracker Stories
[Project Stories](https://www.pivotaltracker.com/n/projects/2429082)

## Author
- the-a-team
---

## Copyright
Copyright (c) the-a-team, Software Developers
