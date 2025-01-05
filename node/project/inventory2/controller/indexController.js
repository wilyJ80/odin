/**
 * @param {import('express').Request} req
 * @param {import('express').Response} res
 */
export const getIndex = async (req, res) => {
	res.render('index.html');
};
