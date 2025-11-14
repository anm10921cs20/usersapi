const jsonServer =  require('json-server'); // ✅ worksnpm start
const server = jsonServer.create();
const router = jsonServer.router('db.json');
const middlewares = jsonServer.defaults();


const PORT = process.env.PORT || 3500;

server.use(middlewares);
server.use(router);

