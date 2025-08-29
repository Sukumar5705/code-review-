require('dotenv').config()
const app = require('./src/app')

app.listen(3000,(req,res)=>{
    console.log(`Server running on http://localhost:3000`)
})