import cors from "cors";
import express from "express";
import { getServices, getSubServices } from "./services.js";
const app = express();

app.use(cors());
app.use(express.json());

app.get("/services", getServices);
app.get("/sub-services/:service", getSubServices);
export default app;
