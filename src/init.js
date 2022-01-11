//모든 것을 초기화 시켜줌
import "./db";
import "./models/Video";
import "./models/User";
import app from "./server";

const PORT = 4300;

const handleListening = () =>
  console.log(`✅ Server listenting on port http://localhost:${PORT} 🚀`);

app.listen(PORT, handleListening);
