import { app } from "./app.js";

const PORT = process.env.APP_PORT || 5478;

app.listen(PORT, () => {
	console.log(`Server listening on ${PORT}...`);
});
