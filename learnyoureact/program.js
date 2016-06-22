const express = require('express');
const app = express();

app.set('port', (process.argv[2] || 3000));
app.set('view engine', 'jsx');
app.set('views', `${__dirname}/views`);
app.engine('jsx', require('express-react-views').createEngine({ transformViews: false }));

require('babel-core/register')({
  presets: ['es2015', 'react'],
});

app.use('/', (req, res) => {
  res.render('index', '');
});

app.listen(app.get('port'));
