const Express = require("express");
var cors = require('cors');

const app = Express();
app.use(cors());
const port = 3001;

app.get('/', async function(req, res){
    res.json({
        message: "Suheri"
    });
});

app.listen(port, async () => {
    console.log('Running on '+port+' port');
});