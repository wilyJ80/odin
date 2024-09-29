import { app } from "./app.js";
const PORT = 3000;

export const server = app.listen(PORT, () => {
	console.log(`Server listening on port ${PORT}`);
});
