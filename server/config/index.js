module.exports = {
	port: 4000,
	mongodb: {
		url: 'mongodb://172.16.82.75:27017/quark',
		options: {}
	},
	middleware:['handlerError'],
	jwt: {secret: 'huangwei9527'},
	crypto: {secret: '#*#*huangwei9527*#*#'},
	baseUrl: 'http://172.16.82.75'
}
