
import express from 'express';
const cors = require('cors');

import {
  getData,
  storeData,
} from "./routes";

export const app = express();
const port = 3000;
app.use(cors());
app.use(express.json({ limit: "5MB" }));
app.use(express.urlencoded({ limit: "5MB", extended: true }));

app.use('/createUser', storeData);
app.use('/getData', getData);


app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});