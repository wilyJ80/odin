export const logPathData = (req, res) => {
	res.send(`
Params: ${req.params.username}
Query: ${JSON.stringify(req.query)}
`);
};
