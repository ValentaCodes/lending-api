import express from "express";
import { testConnection } from "./config/connection.js";

import routes from "./routes/index.js"

const app = express();
const PORT = process.env.PORT || 3001;

//Check that we can successfully connect to db
await testConnection();

//Middleware
app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.use(routes);

//start server
app.listen(PORT, () => console.log("Now listening on http://localhost:" + PORT));