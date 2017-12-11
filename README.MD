# Reddit

## Introduction
Reddit inspired by reddit.com. Users can create posts that they are passionate about, and others can make votes up and down.

Contributers&ensp;·&ensp;[Jeff Chiu](https://www.linkedin.com/in/jeffchiu1)


## Installation

Installation is super friendly using `npm`

```
$ npm install 
$ npm start
```

### Technologies Used 
- [Express](https://expressjs.com/)
-  Node.js
-  MongoDB & Mongoose (ODM)
-  JSON Web Tokens (JWT)


### Development
```
sudo mongod
```
This will start an mongod database, this requires dot.env


### Production Build
```
npm run build
npm run build:start
```
This will create a production build and will start a server at http://localhost:8000/


### Deployment
Install the Heroku toolbelt.
```
heroku create myapp
git push heroku master
```

***
## How to use Reddit Project

It's avaliable at
https://reddit-clone-tutorial.herokuapp.com

# Reddit Clone project structure

Followed the design pattern use by the Model View Controller. MVC helps to separate the concerns and avoids large architectural bugs which are the biggest drain on the speed of a dev team.

Express and NodeJS to design the interfaces, use inspirations (like Reddit.com!), and keep in mind the rules of a good user interface.

# Getting Started: User Narratives & Wireframes

If you are not familiar with [Reddit](https://www.reddit.com/), navigate there now and explore this internet wonderland. Check out its [history](https://en.wikipedia.org/wiki/Reddit#History) if you like. 


# Technical Planning

Here are some of the routes and features I build

* Comment on posts
* Create a post
* Show all posts
* Make comments on comments
* Sign up
* Login
* Associate posts, comments, and votes with their author
* Search
* Create subreddit
* Create a post on a subreddit
* Show all subreddits
* Vote up a post
* Vote up a comment
* Sort posts by # of votes



# Bootstrapping Express.js

Ok, we've got user narratives, wireframes, and a plan for the first few features we'll do. Time to get started coding! Remember not to "work ahead", instead always do the absolute minimum work to get what you are working on to function and then move to the next.

1. Create an npm project (hint: `$ npm init`) - remember to make your main file called `server.js`.
1. Bootstrap Express.js. You can use Handlebars or Jade as a templating engine if you like. [Express documentation](https://expressjs.com/en/starter/hello-world.html). Now run your server and get "hello world" to appear.


### Authors
- [Jeff Chiu](https://www.linkedin.com/in/jeffchiu1) - Front/Back End


### License 
This project is licensed under the MIT License - see the [LICENSE.](https://tldrlegal.com/license/mit-license) file for details
