import { app } from "./app.js";
const PORT = 3001;

app.listen(PORT, () => {
	console.log(`Server listening on port ${PORT}... endpoint /:username/messages`);
});
