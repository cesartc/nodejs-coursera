### Server-side Development with NodeJS, Express and MongoDB

Here are some notes I have taken during this course in which I formally learned about Node.js after empirically working on it for a while.

All files within any **assignmentXX** folder are strictly following **Airbnb's JavaScript Style Guide** using [ESLint](https://eslint.org/)

Best Node.js' event loop explanation:
[https://www.youtube.com/watch?v=8aGhZQkoFbQ](https://www.youtube.com/watch?v=8aGhZQkoFbQ)

Express params:
- Routing parameters
```sh
# resource/:id
req.params.id
```
- Query parameters
```sh
# resource?id=123
req.query.id
```
- Body parameters
```sh
req.body.id
```

