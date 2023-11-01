const express = require("express")
const dotEnv = require("dotenv")
const connectDB = require("./config/db")
const productRoutes  = require("./routes/productRoutes");
const userRoutes = require("./routes/userRoutes");
const { createProxyMiddleware } = require('http-proxy-middleware');
const { notFound, errorHandler } = require("./middlewares/errorMiddleware");
const stripe = require("./routes/stripe")
const cors = require("cors");
dotEnv.config()
connectDB();

const app = express()

const PORT = process.env.PORT || 5000

app.use(cors({
    origin:" https://shivkrupa.onrender.com"
}))
app.use(express.json());

app.get("/",(req,res) => {
    res.send("shivkrupa insense server!")
})
app.use("/api/products", productRoutes);
app.use("/api/users",userRoutes)
app.use("/api/stripe",stripe)

app.use(notFound)
app.use(errorHandler)

app.listen(PORT,() => {
    console.log(`server running on port ${PORT}`)
})