# TokPlay

TokPlay is a video promotion website that allows users watch videos. This platform used for shops to showcase their videos and promote their products. By utilizing WebSocket for real-time chatting, users can comment on a video in real-time. Additionally, TokPlay implements JWT (JSON Web Token) for secure user login and account creation. TokPlay is used as a mid-term project in Generasi GIGIH 3.0.

## Features

-   Video Upload and Sharing
-   Promote Products
-   Real-Time Comments
-   JWT Authentication
-   Search Functionality
-   Tags Filtering

## Tech Stack

**Server:** Node, Express, MongoDB

## Documentation

[API Structure Gist Documentation](https://gist.github.com/varomnrg/4d17bb6ccf4b1f926d7b9ba408e9e3ce)

## Database Schema

### users

| fields     | type     |
| :--------- | :------- |
| `username` | `string` |
| `email`    | `string` |
| `password` | `string` |

### videos

| fields         | type     |
| :------------- | :------- |
| `videoId`      | `string` |
| `thumbnailUrl` | `string` |
| `videoUrl`     | `string` |
| `title`        | `string` |
| `channel`      | `string` |
| `tags`         | `Array`  |

### products

| fields        | type     |
| :------------ | :------- |
| `name`        | `string` |
| `price`       | `number` |
| `description` | `string` |
| `videoId`     | `string` |
| `imageUrl`    | `string` |
| `productUrl`  | `string` |

### comments

| fields     | type     |
| :--------- | :------- | -------------------------------------- |
| `videoId`  | `string` |
| `userId`   | `string` |
| `username` | `string` | added to make read faster on websocket |
| `comment`  | `string` |

## How to run project locally

1. Clone the project

```bash
  git clone https://github.com/varomnrg/tokplay
```

2. Go to the project directory

```bash
  cd tokplay
```

3. Install dependencies

```bash
  npm install
```

4. Create an .env file

```text
  PORT=<port>
  DB_URL=mongodb://127.0.0.1:27017/<dbname>
  JWT_SECRET=<any string>

```

5. Start the development server

```bash
  npm run dev
```

## Authors

-   [@varomnrg](https://www.github.com/varomnrg)
