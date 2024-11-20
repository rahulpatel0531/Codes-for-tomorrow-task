const express = require('express')
const db = require('./models/index')
const authRoutes = require('./routes/authRoutes')
const categoryRoutes = require('./routes/categoryRoutes')

const cors = require('cors')
const app = express()
const port = 3000

// Sync all model to database
db.sequelize.sync({ alter: true })
.then(() => {
    console.log('All models were synchronized successfully.');
})
.catch((err) => {
    console.log('Error:', err);
})

// Load middleware
app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use(cors());

// Load Routes
app.use('/auth', authRoutes)
app.use('/api', categoryRoutes)

app.listen(port, () => {
  console.log(`Server running at port ${port}`)
})