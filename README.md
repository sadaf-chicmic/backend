backend/
│
├── src/
│   ├── controllers/
│   ├── routes/
│   ├── services/
│   ├── models/
│   ├── data/
│   ├── middlewares/
│   ├── utils/
│   ├── config/
│   ├── app.js
│   └── server.js
│
├── README.md
├── package.json
└── .env


##
| Layer      | Responsibility                                     |
| ---------- | -------------------------------------------------- |
| Route      | Match URL                                          |
| Controller | Handle HTTP request & response                     |
| Service    | Business logic                                     |
| Model      | Database operations                                |
| Middleware | Cross-cutting concerns (auth, validation, logging) |
