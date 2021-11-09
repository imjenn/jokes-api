const JokeController = require("../controllers/joke.controller");

module.exports = app => {
    app.get("/api/jokes/", JokeController.findAllJokes);
    app.get("/api/jokes/:id", JokeController.findOneJoke);
    // app.get("/api/jokes/random", JokeController.findRandomJoke);
    app.put("/api/jokes/update/:id", JokeController.updateExistingJoke);
    app.post("/api/jokes/new", JokeController.createJoke);
    app.delete("/api/jokes/delete/:id", JokeController.deleteJoke);
}