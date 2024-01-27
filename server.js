const express = require('express');
const app = express();
const PORT = 3000;

app.get("/", (req, res) => {

    res.sendFile("/Users/sanjeevmidda/Desktop/fridge backend/fridgeDB.json");
})

app.listen(PORT, () => {
    console.log("Server up and running on PORT: " + PORT);
})