import { app } from "./app.js";

const PORT = process.env.PORT || 5478;

app.listen(PORT, () => {
	console.log(`Server listening on ${PORT}...`);
});
