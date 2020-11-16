# Trying out Nest.js and GraphQL

## Description

Very basic [Nest](https://github.com/nestjs/nest) server with [GraphQL](https://graphql.org/) query and mutation. No DB connected, all happening in machine's memory. Based on YT tutorial by [Pragmatic Reviews](https://www.youtube.com/watch?v=SNooMUGOaaM).

## Installation

```bash
$ npm install
```

## Running the app

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev
```

Having the server running, go to http://localhost:3000/graphql (host and port might be different) and try out query or mutation.

Example of mutations - adding a new video entry:

```bash
mutation createVideo {
  	createVideo(
      input: {title: "My first video", url: "https://myvideo.com/1", userId: "1"}
    ) {
    id
    title
    url
    author {
      name
      id
    }
  }
}
```

Query - get all video entries

```bash
query videos {
  videos {
    title
    url
    author {
      name
      id
    }
  }
}
```
