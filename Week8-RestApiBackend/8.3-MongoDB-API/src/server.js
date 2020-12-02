const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const mongoose = require('mongoose')
mongoose.connect('mongodb://localhost/pizza')
const db = mongoose.connection

const app = express()
const port = 3000

app.use(bodyParser.json())
app.use(cors())

let db_status = 'MongoDB connection not successful'

db.on('error', console.error.bind(console, 'connection error:'))
db.once('open', () => db_status = 'Successful opened connection to Mongo!')

// Documentation: https://mongoosejs.com/docs/guides.html

// Define a mongoose schema aka model
const pizzaSchema = new mongoose.Schema({
    id: String,
    crust: String,
    cheese: String,
    sauce: String,
    toppings: [String],
    orderId: String
});

const customerSchema = new mongoose.Schema({
    name: String,
    address: String,
    city: String,
    state: String,
    postalCode: String
});

const orderSchema = new mongoose.Schema({
    id: String,
    pizzas: [String],
    customer: String
});

// This adds all the mongoose methods to the pizzaModel
const Pizza = mongoose.model('Pizza', pizzaSchema);
const Customer = mongoose.model('Customer', customerSchema);
const Order = mongoose.model('Order', orderSchema);

app.get('/', (req,res) => res.send(db_status))

app.post('/orders', (req, res) => {
    const newOrder = new Order({});
    const customer = new Customer(req.body.customer);
    customer.save((error, data) => {});
    const pizzaIds = req.body.pizzas.map(pizza => {
        const newPizza = new Pizza({...pizza, orderId: newOrder._id});
        newPizza.save((error, data) => {});
        return newPizza._id;
    });
    newOrder.pizzas = pizzaIds;
    newOrder.customer = customer._id;
    newOrder.save((error, data) => {
        return error ? res.sendStatus(500).json(error) : res.json(data);
    })
});

// Routes are typically plural nouns, not verbs.   Verbs are taken care of by the request type
app.post('/pizzas', (req, res) => {
    const newPizza = new Pizza(req.body);
    // The save method comes from Mongoose
    newPizza.save((error, data) => {
        // sendStatus sends 200 by default
        return error ? res.sendStatus(500).json(error) : res.json(data);
    });
});

app.get('/pizzas', (req, res) => {
    Pizza.find({}, (error, data) => {
        return error ? res.sendStatus(500).json(error) : res.json(data);
    })
})

app.get('/pizzas/:pizzaId', (req, res) => {
    // Request parameters (params) are defined in the route, queryParams are provided after the url behind a ? and & in key=value pairs
    Pizza.findById(req.params.pizzaId, (error, data) => {
        return error ? res.sendStatus(500).json(error) : res.json(data);
    })
})

app.put('/pizzas/:pizzaId', (req, res) => {
    const data = req.body;
    Pizza.findByIdAndUpdate(
        req.params.pizzaId,
        {$set: {
            crust: data.crust,
            cheese: data.cheese,
            sauce: data.sauce,
            toppings: data.toppings
        }},
        (error, data) => {
            return error ? res.sendStatus(500).json(error) : res.json(req.body);
        })
})

app.delete('/pizzas/:pizzaId', (req, res) => {
    Pizza.findByIdAndDelete(
        req.params.pizzaId,
        {},
        (error, data) => {
            return error ? res.sendStatus(500).json(error) : res.json(data);
        })
})

app.listen(port, () => console.log(`Example app listening of port ${port}`))
