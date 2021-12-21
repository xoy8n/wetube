import express from "express";

const PORT = 4000;

//express() function을 사용하면 express application을 생성해줌
const app = express();

const handleListening = () => console.log(`✅ Server listening on port http://localhost:${PORT} 🚀`);

// 어떤 port를 listening할 건지
app.listen(PORT, handleListening);
