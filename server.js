import express from "express";
import sum from "./sum.js";


const app = express();
const PORT = 8080;





// Test API
app.get("/home", (req, res) => {
    res.json({
        message: "Im root "
    });
});

app.get("/getSum/:a/:b", async(req, res) => {
    const {a,b}=req.params;
    res.json({
        ans:sum(parseInt(a),parseInt(b))
    })
});

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});