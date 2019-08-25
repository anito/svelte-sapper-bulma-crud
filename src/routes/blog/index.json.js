import posts from './_posts.js';

let keys = Object.keys(posts);

const contents = JSON.stringify(keys.map(key => {
	let post = posts[key];
	return {
		title: post.title,
		slug: key
	};
}));

export function get(req, res) {
	res.writeHead(200, {
		'Content-Type': 'application/json'
	});

	res.end(contents);
}