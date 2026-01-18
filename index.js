const expressApp = require("json-serve/expressApp");
const server = expressApp.create();
const router = expressApp.router('db.json');
const data = expressApp.default();

server.listen(3000, () => {
  console.log("server run");
  
})

server.use(router);
server.use(data);