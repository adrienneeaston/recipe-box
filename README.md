# recipe-box
**Author:** 
Adrienne Easton  
**Version:** 0.1.0

## Description
* A recipe search app, using the Edamam API.
* Expansion of initial code from a basic React recipe app tutorial from [Dev Ed](https://www.youtube.com/watch?v=U9T6YkEDkMo).
* Added features for style preferences, better accessibility, and additional features. 

## New Features 

* Updated to a more user friendly style.
* Adding features to maximize accessibility, as described in accessibility section below.
* Database storage (in progress).
* Ability to upload non-api recipes, such as text, photo, or url (in progress).

## Accessibility

* Descriptive alt tags
* Color contrast ratio for buttons 5.52:1
* Color contrast ratio for recipes 21:1

## Architecture

* HTML
* CSS
* JavaScript
* jquery
* React
* Edamam API

## User Stories

### Users
* As a user I want a clean interface so that I understand what I need to do.
* As a user I want easily navigate my pages so that I don't frustrated.
* As a user I want to be able to maximally access the information with disabilities taken into account.
* As a user I want to be able to search for recipes based on main ingreient.
* As a user I want to be able to store my favorite recipes to access later.
* As a user I want to be able to store uploaded pictures I have taken of favorite recipes from recipe books.
* As a user I want to be able to store to favorites urls for for favorite recipes on websites.
* As a user I want to be able to sort based on type of meal (breakfast, lunch, dinner, etc).

### Developers
* As a developer I want clean easily readable code so that I can understand what's happening without depending on comments
* As a developer I want a well organized clear file tree so that I can easily navigate and connect all of the code.
* As a developer I want to make a functional intuitive front end.
* As a developer I want to write code that maximizes accessibility.
* As a developer I want to enable teh user to save favorite recipes from their api search or from rceipes they have found in books on websites.
* As a developer I want a well structured database so that I can easily retrieve and update the data within it.

## Scope
### MVP
* Front end: 
Search form for recipes
* API
Edmamam
* Server
Send what the front end needs 

### Stretch Goals
* Database for storing favorites from the api  
* A way to store favorites that are not from the api
  * photos
  * links to websites
  * text
* Sorting by meal type (breakfast, lunch, dinner, etc.)

## Set up instructions
* You will need API keys for Edamam in the .env as: 
  * REACT_APP_APP_ID  
  * REACT_APP_APP_KEY
* `npm i` to add dependancies.
* Start with `npm start`.
