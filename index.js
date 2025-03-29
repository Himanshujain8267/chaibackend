require('dotenv').config()
const express = require('express')
const app = express()
const port = 5000
const githubdata = {
   
        "message": "Not Found",
        "documentation_url": "https://docs.github.com/rest",
        "status": "404"
      
}

app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.get('/twitter',(req , res)=>{
res.send('himanshudotcom')
}) 
app.get('/login',(req,res)=>{
    res.send('<h1>please login at chai or code </h1>')
})
app.get('/chaiorcode',(req,res)=>{
    res.send('hloeveryone')
})
app.get('/hloeveryone',(req,res)=>{
    res.send('hlo_everyone')
})
app.get('/github' , (req , res)=>{
res.json(githubdata)
})
app.get('/githubsecond' , (req , res)=>{
    res.send("hlo everyone")
    })
app.listen(process.env.PORT, () => {
    console.log(`Example app listening on port ${port}`)
})