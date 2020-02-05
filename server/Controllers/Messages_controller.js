let messages = []
let id = 0


module.exports = {

    create: (req, res) => {
        const{text, time} = req.body

        let newMessage = {
            text: text,
            time: time,
            id: id
        }
        messages.push(newMessage)
        id++
        res.status(200).send(messages)
    },

    read: (req, res) => {
        res.status(200).send(messages)
    },

    update: (req, res) => {
        console.log(req.body)
        const {text} = req.body
        const updateId = req.params.id
        const messagesIndex = messages.findIndex(bleh => bleh.id === +updateId)    

        let message = messages[messagesIndex]
        console.log(messagesIndex)

console.log(messages[messagesIndex])
        messages[messagesIndex] = {
            id: req.param.id,
            text: req.body.text || messages[messagesIndex].text,
            time: req.body.time || messages[messagesIndex].time
            
        };
        res.status(200).send(messages)
    },


    delete: (req, res) => {
        let index = null;
        messages.forEach((meh, i) => {
            if(meh.id === +req.params.id) index = i
        })
        messages.splice(index, 1)
        res.status(200).send(messages)
    }


    }

