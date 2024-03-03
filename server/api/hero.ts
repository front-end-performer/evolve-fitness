import { db } from "../db/index";

export default defineEventHandler(async (request) => {
  const method = request.node.req.method;

  console.log(method);
  

  if (method === "GET") {
    return db.hero;
  }

  // if (method === "POST") {
  //   console.log(method);
  //   const body = useBody();

  //   //   return db.hero;
  // }
});
