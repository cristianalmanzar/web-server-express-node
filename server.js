const express = require('express')
const app = express()
 
app.get('/',  (req, res) => {

  let data = {
    name: 'Cristian Almanzar Castro',
    power: 'Developer',
    age: 21
  }

  res.send(data);
})

app.listen(3000, () => {
    console.log("Listening request from port: 3000");
});