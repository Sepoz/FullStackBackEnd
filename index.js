const express = require("express");
const app = express();

app.use(express.json());

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

app.get("/info", (req, res) => {
    res.send(`<h3>Phonebook has info for ${persons.length} people</h3> <h3>${new Date().toUTCString()}</h3>`)
});

app.get("/api/persons/:id", (req, res) => {
    const id = Number(req.params.id);
    const person = persons.find(pers => pers.id === id);
    
    if (person) {
        res.json(person);
    } else {
        res.status(404).end();
    };
});

app.delete("/api/persons/:id", (req, res) => {
    const id = Number(req.params.id);
    persons = persons.filter(person => person.id !== id);

    res.status(204).end();
});


app.post("/api/persons", (req, res) => {
    const body = req.body;

    if (!body.name && !body.number) {
        return res.status(400).json({
            error: "content missing"
        });
    };

    const person = {
        name: body.name,
        number: body.number,
        id: Math.floor(Math.random() * 1000000)
    };

    persons = persons.concat(person);

    res.json(person);
});

const PORT = 3001;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});