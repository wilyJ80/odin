import { app } from "./app.js";
const PORT = 3002;

app.listen(PORT, () => {
	console.log(`Server listening on port ${PORT}...`);
});
