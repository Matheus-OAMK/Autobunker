import dotenv from "dotenv";
dotenv.config();
import app from "./app.js";

const port = process.env.PORT;


app.listen(port, () =>
  console.log(`Server started and is listening to ... ${port}`)
);
