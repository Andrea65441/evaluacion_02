import app from "./app.js";
import { config } from "./config/env.js";

PORT = env.port

app.listen(env.port, () => {
    console.log(`CampusCloud ejecutándose en http://localhost:${env.port}`);
});