
const express = require('express')
const app = express()
const cors = require('cors')
const port =process.env.PORT|| 5000


require('dotenv').config();
app.use(cors())
app.get('/', (req, res) => {
  res.send('Amajon Surver!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
