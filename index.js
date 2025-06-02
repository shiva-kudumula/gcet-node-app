import express from 'express';

const app = express();

// 👇 This route handles requests to http://localhost:8080/
app.get('/', (req, res) => {
  res.send('Welcome to GCET Node App!');
});

app.listen(3000, () => {
  console.log('Server Started');
});
app.get("/name",(req, res)=>{res.send('shiva')});
app.get("/weather",(req, res)=>{res.send('33 degrees')});
