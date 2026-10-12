// import express from "express";
// import dotenv from "dotenv";
// import cors from "cors";
// dotenv.config();
// const app = express();

// const PORT = process.env.PORT;
// app.get("/", (req, res) => {
//   res.send("Server is running");
// });
// app.use(
//   cors({
//     origin: [
//       "http://localhost:5173",
//       "http://localhost:5174",
//       "http://localhost:5175",
//     ],
//     credentials: true,
//   })
// );
// app.use(express.json());
// app.use(express.urlencoded({ extended: true }));
// app.listen(PORT, () => {
//   console.log(`Server is running on port ${PORT}`);
// });

import "dotenv/config";

import express from "express";
import cors from "cors";
import contactRoutes from "./routes/contactRoutes.js";

const app = express();

const PORT = process.env.PORT || 5000;

app.use(
  cors({
    origin: [
      "http://localhost:5173",
      "http://localhost:5174",
      "http://localhost:5175",
    ],
    credentials: true,
  })
);

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.send("Server is running");
});

app.use("/api/contact", contactRoutes);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});