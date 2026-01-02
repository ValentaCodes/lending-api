import express from "express";
import { testConnection } from "./config/connection.js";

import routes from "./routes/index.js"

const app = express();
const PORT = process.env.PORT || 3001;


await testConnection();


app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.use(routes);

app.listen(PORT, () => console.log("Now listening on http://localhost:" + PORT));