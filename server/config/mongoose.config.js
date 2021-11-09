const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost/jokes", {
	// These are options we pass to get rid of deprecation messages in our terminal
	// MongoDB has two connection string formats and the old format is now deprecated and uses an old URL format
	// We use the new format by default and newURLParser drops support for old formats
	useNewUrlParser: true,
	// False by default. We set it to true to use mdb's new connection management engine
	useUnifiedTopology: true,
})
	.then(() => console.log("Established a connection to the database"))
	.catch(err => console.log("Something went wrong when connecting to the database", err));