console.log(">>>>>", "resolving");

const req = require.context(".", true, /^.+\/([^/]+)\/index\.js$/);

console.log(">>>>>", req);

req.keys().forEach(key => {
	const componentName = key.replace(/^.+\/([^/]+)\/index\.js/, "$1");

	console.log(">>>>>", "module", componentName);

	console.log((module.exports[componentName] = req(key).default));

	// module.exports { key: req(key) }
});
