const app = require("./app");
require("dotenv").config();


const PORT = process.env.PORT || 3000;

app.use("/api/students" , require("../prisma_routes/student"))
app.use("/api" , require("./auth/index"))
app.use("/api/instructor" , require("../prisma_routes/instructors"))
app.use("/students" , require ("./api/students"))

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}...`);
});
