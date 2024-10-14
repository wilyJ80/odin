import { app } from "./app.js";

const PORT = process.env.PORT || 5739;

app.listen(PORT, () => {
	console.log(`App listening on port ${PORT}`);
});
