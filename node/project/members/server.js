import { app } from "./app.js";
import dotenv from 'dotenv';

dotenv.config();

const PORT = process.env.PORT || 3989;

app.listen(PORT, () => {
	console.log(`Server listen on port ${PORT}...`);
});
