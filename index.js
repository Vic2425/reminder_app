const express = require('express');
const app = express();
const port = process.env.PORT || 4001;
const routes = require('./routes/index.js');

app.use(express.json());
app.use(routes);
app.get('/', (req, res) => {
    res.send('Welcome ...')
})

app.listen(port, () => {
    console.log(`App is listening on port ${port}...`)
});
