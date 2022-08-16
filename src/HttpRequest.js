const Promise = require('bluebird');
const requestWithJWT = Promise.promisify(require('google-oauth-jwt').requestWithJWT());

class HttpRequest {

	_checkBasicRequired(url, jwt) {
		if (url === undefined) {
			throw new Error('Missing argument; requst url needed');
		} else if (jwt === undefined) {
			throw new Error('Missing argument; jwt needed');
		}
	}

	_checkRequired(url, params, jwt) {
		if (url === undefined) {
			throw new Error('Missing argument; requst url needed');
		} else if (params === undefined) {
			throw new Error('Missing argument; query terms needed');
		} else if (jwt === undefined) {
			throw new Error('Missing argument; jwt needed');
		}
	}

	get(url, params, jwt) {
		this._checkRequired(url, params, jwt);

		let options = {
			url: url,
			jwt: jwt,
			qs: params,
			useQuerystring: true
		};

		console.log('HttpRequest.js:35', 'get - options:', options);

		return requestWithJWT(options);
	}

	post(url, params, jwt, query) {
		this._checkRequired(url, params, jwt);

		let options = {
			method: 'POST',
			url: url,
			jwt: jwt,
			body: params,
			qs: query,
			json: true
		};

		console.log('HttpRequest.js:52', 'post - options:', options);

		return requestWithJWT(options);
	}

	postWithQueryString(url, querystring, jwt) {
		this._checkRequired(url, querystring, jwt);

		let options = {
			method: 'POST',
			url: url,
			jwt: jwt,
			qs: querystring,
			json: true
		};

		console.log('HttpRequest.js:68', 'postWithQueryString - options:', options);

		return requestWithJWT(options);
	}

	put(url, params, jwt, query) {
		this._checkRequired(url, params, jwt);

		let options = {
			method: 'PUT',
			url: url,
			jwt: jwt,
			body: params,
			qs: query,
			json: true
		};

		console.log('HttpRequest.js:84', 'put - options:', options);

		return requestWithJWT(options);
	}
	
	patch(url, params, jwt, query) {
		this._checkRequired(url, params, jwt);

		let options = {
			method: 'PATCH',
			url: url,
			jwt: jwt,
			body: params,
			qs: query,
			json: true
		};


		console.log('HttpRequest.js:102', 'patch - options:', options);

		return requestWithJWT(options);
	}

	delete(url, params, jwt) {
		this._checkBasicRequired(url, jwt);

		let options = {
			method: 'DELETE',
			url: url,
			jwt: jwt,
			qs: params
		};

		console.log('HttpRequest.js:118', 'delete - options:', options);

		return requestWithJWT(options)
	}
}

module.exports = HttpRequest;
