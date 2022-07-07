// importing 
import express from 'express'
import mongoose from 'mongoose';
import Messages from './dbMessage.js'
import Pusher from 'pusher';
import Cors from 'cors';
// app config
const app = express();

const pusher = new Pusher({
    appId: "1433640",
    key: "aadcacb8c0cb926f8055",
    secret: "b55c0d3265559ac2f9a8",
    cluster: "ap2",
    useTLS: true
  });


//middlewares




const connection_url = "mongodb+srv://admin:swVxK54EtbYDCxvY@cluster0.5yfyj.mongodb.net/?retryWrites=true&w=majority"
mongoose.connect(connection_url)

const db = mongoose.connection
db.once('open',()=>{
    console.log("DB connected")
    const msgCollection = db.collection("messagecontents")
    const changeStream = msgCollection.watch();
    changeStream.on('change', (change)=>{
        console.log(change)
        if(change.operationType === "insert"){
            const messageDetails = change.fullDocument;
            pusher.trigger('message', 'inserted',{
                name: messageDetails.name,
                message: messageDetails.message,
                timestamp: messageDetails.timestamp
            })
        }
        else{
            console.log('Error Triggered pusher')
        }
    })
})


app.use(express.json())
app.use(Cors())
app.use((req, res, next)=>{
    res.setHeader("Access-Control-Allow-Origin", "*")
    res.setHeader("Access-Control-Allow-Header", "*")
    next();
})



// DB config


// api routes
app.get('/', (req, res)=>{
    res.status(200).send('hello world')
})

app.get('/messages/sync', (req,res)=>{
    Messages.find((err, data)=>{
        if(err){
            res.status(500).send(err)
        }
        else{
            res.status(200).send(data)
        }
    })
})

app.post('/messages/new',(req, res)=>{
    const dbMessage = req.body;
    Messages.create(dbMessage, (err, data)=>{
        if(err){
            res.status(500).send(err);
        }
        else{
            res.status(201).send(`new message created: \n ${data}`);
        }
    })
})
//listen server
app.listen(process.env.PORT || 9000, ()=> console.log(`Listening on local host`))


// admin password : swVxK54EtbYDCxvY