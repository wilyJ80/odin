import express from 'express';
import { userRouter } from "./userRouter.js";
export const app = express();

app.use("/user", userRouter);

app.use((req, res) => {
	res.status(404).send('Error 404');
});
