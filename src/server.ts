import { http } from "./http";
import "./websocket/client";

http.listen(3333, () => console.log('Server running on port 3333'));