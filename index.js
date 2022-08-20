const app = require('express')();
const PORT = 5000;

app.listen(PORT, () => console.log(`livin the dream...`));

app.get('/tshirt', (req,res) => {
    res.status(200).send({
        tshirt: 'Everthread',
        size: 'XL'
    })
});