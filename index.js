const express = require("express");
const app = express();

let persons = [
    {
        name: "Arto Hellas",
        number: "040-123456",
        id: 1
    },
    {
        name: "Ada Lovelace",
        number: "12-43-234345",
        id: 2
    }
]

app.get("/api/persons", (req, res) => {
    res.json(persons);
});

const PORT = 3001;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});