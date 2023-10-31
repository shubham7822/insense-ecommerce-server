const express = require("express")
const dotEnv = require("dotenv")
const connectDB = require("./config/db")
const productRoutes  = require("./routes/productRoutes");
const userRoutes = require("./routes/userRoutes");
const { createProxyMiddleware } = require('http-proxy-middleware');
const { notFound, errorHandler } = require("./middlewares/errorMiddleware");
const stripe = require("./routes/stripe")

dotEnv.config()
connectDB();

const app = express()

const PORT = process.env.PORT || 5000


app.use(express.json());

app.use("/api/products", productRoutes);
app.use("/api/users",userRoutes)
app.use("/api/stripe",stripe)
app.use(notFound)
app.use(errorHandler)

app.use('/api', createProxyMiddleware({
    target: 'http://127.0.0.1:8000/',
    headers: {
        "Connection": "keep-alive"
    },
}));

app.listen(PORT,() => {
    console.log(`server running on port ${PORT}`)
})