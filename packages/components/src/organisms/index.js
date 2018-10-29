const req = require.context(".", true, /^.+\/([^/]+)\/index\.js$/);

req.keys().forEach(key => {
	const componentName = key.replace(/^.+\/([^/]+)\/index\.js/, "$1");
	console.log("module", componentName);
	if (componentName) module.exports[componentName] = req(key).default;
});
