# Adze
###### Minimal blogging CMS

## Introduction

Adze is a minimal blogging CMS built on top of Node.js and MongoDB. It favors simplicity over being a full-blown CMS. This makes Adze a perfect choice for integrating a blog with a static site or adding a blog to clients' sites.

I got the idea to build _Adze_ after a client had asked me to integrate a blogging feature into her static website. Static site generators were out of the question, since she didn't want to redeploy the site after every blog post, but all of the existing blogging platforms felt like overkill for what she needed.

**About the name:** An _adze_ (pronounced "ads") is a tool used in carpentry to strip bark off of logs, leaving only the core essence (the lumber).

## Local Installation

#### 1. Clone the repo

```bash
$ git clone https://github.com/benjaminj6/adze.git
```

#### 2. Install dependencies
```bash
# Using npm
$ npm install

# Using yarn
$ yarn
```

#### 3. Set up Environment

* Create a `.env` file at the root of your project
* Adze uses the following environment variables:

| variable      | function                     |
|:--------------|:-----------------------------|
| `ADMIN_EMAIL` | The email used to log in     |
| `PASSWORD`    | The password used to log in  |
| `NAME`        | Name of your blog            |
| `PORT`        | Port on which to listen to   |
| `DB_URL`      | Url of your MongoDB database |

#### 4. Start!

```
npm run dev

# or

yarn dev
```

\* The `dev` script will automatically add a user based on your `ADMIN_EMAIL` and `PASSWORD` environment variables.

## Features

#### Write Posts

![New Post](http://i.imgur.com/VYx5YSF.png)

Click 'New Post' to get started on creating new content. Simple as pie.

#### Add Tags

![Tags](http://i.imgur.com/KwkNGK2.png)

You can add as many tags as you like in the top right of the editing screen. Use colors to keep everything organized.

#### Edit Posts

![Editor](http://i.imgur.com/OsERmIa.png)

Every post is editable. Simply select the post from the menu on the left to begin editing

#### View by Category

![Category View](http://i.imgur.com/mRH7agg.png)

All of that tagging you did wasn't for nothing &mdash; view your posts by category under the "Categories" tab on the left

#### Display!

Integration into an existing website is simple. Since the CMS is decoupled from the website, all you have to do is a `GET` request to `<YOURHOST>/api/posts`. You can use any request library you like &mdash; fetch, axios, jquery, you name it!

## API

| Method   | Endpoint             | Request Body                                                                                                           | Action                                                                      |
|:---------|:---------------------|:-----------------------------------------------------------------------------------------------------------------------|:----------------------------------------------------------------------------|
| `GET`    | `/api/posts/`        |                                                                                                                        | Returns an array including all of your posts, sorted chronologically        |
| `GET`    | `/api/posts/:number` |                                                                                                                        | Returns an array including the most recent posts up to the amount specified |
| `POST`   | `api/posts`          | A JSON object containing `title` (String), `post` (String of markdown), and tags (Array, optional)                     | Add a post.                                                                 |
| `PATCH`  | `api/posts/:id`      | A JSON object containing `title` (String, optional), `post` (String of markdown, optional), and tags (Array, optional) | Edit a post.                                                                |
| `DELETE` | `/api/posts/:id`     |                                                                                                                        | Delete a post.                                                              |
| `GET`    | `/api/tags/`         |                                                                                                                        | Returns an array of all tags                                                |
| `POST`   | `/api/tags/`         | A JSON object containing `name` (String), and `color` (String, hex value)                                              | Creates a new tag                                                           |
| `PATCH`  | `/api/tags/:id`      | A JSON object containing `name` (String, optional), or `color` (String, hex value, optional)                           | Edit a tag                                                                  |
| `DELETE` | `/api/tags/:id`      |                                                                                                                        | Delete a tag, including all references to it in posts                       |

## Technologies Used

* [Node.js](//nodejs.org/)
* [Yarn](//yarnpkg.com/)
* [Koa](//koajs.com/)
* [MongoDB](//www.mongodb.com/)
* [Hyperapp (with JSX)](//github.com/hyperapp/hyperapp)
* [Webpack](//webpack.js.org/)
