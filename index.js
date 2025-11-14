const jsonServer =  require('json-server'); // ✅ worksnpm start
const server = jsonServer.create();
const router = jsonServer.router('db.json');
const middlewares = jsonServer.defaults();


const Port = process.env.PORT || 3000;

server.listen(3000, () => {
  console.log("JSON Server running at port 3000");
});

server.use(middlewares);
server.use(router);

