const Joke = require("../models/joke.model");

// Get all jokes
module.exports.findAllJokes = (req, res) => {
    Joke.find()
        .then(allJokes => res.json({ jokes: allJokes }))
        .catch(err => res.json({ message: "Something went wrong", error: err }));
};

// Get a single joke
module.exports.findOneJoke = (req, res) => {
    Joke.findOne({ _id: req.params.id })
        .then(singleJoke => res.json({ joke: singleJoke }))
        .catch(err => res.json({ message: "Something went wrong", error: err }));
};

// Get a random joke
// module.exports.findRandomJoke = (req, res) => {
//     Joke.findOne({ _id: req.params.id })
//         .then(singleJoke => res.json({ joke: singleJoke }))
//         .catch(err => res.json({ message: "Something went wrong", error: err }));
// };

// Create a joke
module.exports.createJoke = (req, res) => {
    console.log(req.body);
    Joke.create(req.body)
        .then(newJoke => res.json({ joke: newJoke }))
        .catch(err => res.json({ message: "Something went wrong", error: err }));
};


// Update a joke
module.exports.updateExistingJoke = (req, res) => {
    Joke.findOneAndUpdate({ _id: req.params.id }, req.body, { new: true })
      .then(updatedJoke => res.json({ joke: updatedJoke }))
      .catch(err => res.json({ message: "Something went wrong", error: err }));
};

// Delete a joke
module.exports.deleteJoke = (req, res) => {
    Joke.deleteOne({ _id: req.params.id })
      .then(result => res.json({ result: result }))
      .catch(err => res.json({ message: "Something went wrong", error: err }));
};