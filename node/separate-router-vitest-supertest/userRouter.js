import Router from "express";

export const userRouter = Router();

userRouter.get("/:username/messages", (req, res) => {
	res.send(`
Params: ${req.params.username}
Query: ${JSON.stringify(req.query)}
`);
}).use((req, res) => {
	res.status(404).send('Error 404');
});
