const express = require('express')
const app = express()
const port = 3000
const { Sequelize } = require('sequelize');


app.get('/', (req, res) => {
  res.json({body: "hello, diseno"}).status(400)
})

app.post('/', async (req, res) => {
    const sequelize = new Sequelize('postgres://postgres:postgres@database-1.cu1uurva19bz.us-east-1.rds.amazonaws.com:5432/postgres') 
    try {
        await sequelize.authenticate();
        const [results, metadata] = await sequelize.query("INSERT INTO public.diseno(id, num) VALUES (2,300);");
        console.log(results)
        return res.json({ok: true, message: "updated value correctly"}).statusCode(200)
      } catch (error) {
        console.error('Unable to connect to the database:', error);
        return res.json({ok: false, message: "could not update value"}).statusCode(200)
      }
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})