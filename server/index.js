const express = require(`express`);
const mess = require(`./Controllers/Messages_controller`)



const app = express()

app.use(express.json());
app.use(express.static(__dirname + '/../public/build'));

const PORT = 3001

app.post('/api/messages', mess.create)
app.get('/api/messages', mess.read)
app.put('/api/messages/:id', mess.update)
app.delete('/api/messages/:id', mess.delete)





app.listen(PORT, () => {
    console.log(`${PORT} IS RUNNING`)
})