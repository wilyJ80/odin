const fs = require('fs/promises');

const filename = 'filename.txt';
const content = 'Some content!';

(async function writeit() {
	try {
		const data = await fs.readFile('get.js', 'utf8');
		console.log(data);
	} catch (error) {
		console.error(error);
	}
})();
