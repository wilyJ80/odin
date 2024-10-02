import { app } from "./app.js";
const PORT = 3044;

app.listen(PORT, () => {
	console.log(`Server listening on port ${PORT}...`);
});
