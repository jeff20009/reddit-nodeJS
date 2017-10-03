In this project, I  develop a clone of Reddit with posts, subreddits, authentication, and even a search bar. Here's the tech stack

1. Node.js
1. Express.js
1. MongoDB & Mongoose (ODM)
1. JSON Web Tokens (JWT)


# Reddit Clone project structure

 I follow the design pattern use by the Model View Controller. MVC helps to separate the concerns and avoids large architectural bugs which are the biggest drain on the speed of a dev team.

I use the Express and NodeJS to design the interfaces, use inspirations (like Reddit.com!), and keep in mind the rules of a good user interface.

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

In what order should we fulfill these tasks? Write the order down somewhere that you would do these tasks. When you are done, hover over the solution to see what order these tasks in this project.

1. Create a post
1. Show all posts
1. Comment on posts
1. Create subreddits
1. Create a post on a subreddit
1. Show all subreddits
1. Sign up and Login
1. Associate posts, comments with their author
1. Make comments on comments
1. Vote a post up
1. Vote a comment up
1. Sort posts by # of votes

# Bootstrapping Express.js

Ok, we've got user narratives, wireframes, and a plan for the first few features we'll do. Time to get started coding! Remember not to "work ahead", instead always do the absolute minimum work to get what you are working on to function and then move to the next.

1. Create an npm project (hint: `$ npm init`) - remember to make your main file called `server.js`.
1. Bootstrap Express.js. You can use Handlebars or Jade as a templating engine if you like. [Express documentation](https://expressjs.com/en/starter/hello-world.html). Now run your server and get "hello world" to appear.
1. Once you have "hello world" and a template engine installed, move on to the next step.
1. Now add bootstrap to your layout template `<head>` using the CDN.
