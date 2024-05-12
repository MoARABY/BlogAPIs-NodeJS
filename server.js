const express = require('express');
const app = express();
const helmet = require('helmet');
const morgan = require('morgan');
require('dotenv').config(); 


// Middlewares
const dbConnection = require('./config/dbConnection');
const authRoute=require("./routes/authRoute")
const userRoute=require("./routes/userRoute")
const postRoute=require("./routes/postRoute")
const categoryRoute=require("./routes/categoryRoute")
const uploadRoute=require("./routes/uploadRoute")

// use Middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(helmet());
app.use(morgan('common'));


// requests ===================================================
app.get("/", (req, res) => {
    res.send("bolg api");
})
app.use("/api/auth", authRoute);
app.use("/api/user", userRoute);
app.use("/api/post", postRoute);
app.use("/api/category", categoryRoute);
app.use("/api/upload", uploadRoute);

// ============================================================

// SWAGGER =========================================
const swaggerUi = require('swagger-ui-express');
const swaggerDocument = require('./swagger_output.json');
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));
// =================================================


const PORT=process.env.PORT || 5000
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
    dbConnection();
});

