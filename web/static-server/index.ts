import express from 'express';
const app = express();

app.get('/', (req, res) => {
  const name = process.env.NAME || 'World';
  res.send(`Hello ${name}!`);
});

app.get('/packet', (req, res) => {
  res.redirect("https://storage.googleapis.com/ugahacks-public/external/UH7SponsorshipPacket.pdf");
});

const port = process.env.PORT || 8080;
app.listen(port, () => {
  console.log(`helloworld: listening on port ${port}`);
});
