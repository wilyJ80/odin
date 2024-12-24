import { app } from "./app.js";

const PORT = process.env.PORT || 2047;

app.listen(PORT, () => {
	console.log(`Server listening on port ${PORT}...`);
});
