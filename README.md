# Quick URL. A Minimal URL Shortener

Live demo: https://url-vyd3.onrender.com

Paste a long, ugly link. Get back a short one. Every click gets tracked.

## Features

- Shortens any URL into a clean 6 character code using nanoid
- Redirects short codes straight to the original URL
- Tracks click count on every redirect
- Auto adds https:// if you forget to type it
- Single page React UI, no clutter

## Tech Stack

**Frontend:** React 19, Vite
**Backend:** Node.js, Express 5, MongoDB, Mongoose
**Other tools:** nanoid for short ID generation, CORS, Morgan for request logging, dotenv for config

## API Reference

**Create a short URL**
```
POST /api/url/Shoorten
Content-Type: application/json

{
  "originalUrl": "https://example.com/some/very/long/link"
}
```
Response
```
{
  "message": "Url Created Successfully",
  "url": "https://your-backend.onrender.com/api/url/abc123"
}
```

**Redirect**
```
GET /api/url/:shortId
```
Redirects to the original URL and increments its click count.

## Project Structure

```
url/
├── backend/
│   └── src/
│       ├── app.js
│       ├── config/
│       │   └── database.js
│       ├── controller/
│       │   └── url.controller.js
│       ├── model/
│       │   └── url.model.js
│       └── routes/
│           └── url.routes.js
└── frontend/
    └── src/
        ├── App.jsx
        └── components/
            ├── UrlShortner.jsx
            └── styles/
                └── UrlShortener.css
```

## Running It Locally

Clone the repo
```
git clone https://github.com/Notanormaldev/url.git
cd url
```

**Backend setup**
```
cd backend
npm install
```
Create a `.env` file in `/backend`
```
PORT=3000
MONGO_URI=your_mongodb_connection_string
BASE_URL=http://localhost:3000
```
Run it
```
npm run dev
```

**Frontend setup**
```
cd frontend
npm install
npm run dev
```

## Live Demo

Frontend: https://url-vyd3.onrender.com

## Author

Built by Harsh Patel ([@Notanormaldev](https://github.com/Notanormaldev))
