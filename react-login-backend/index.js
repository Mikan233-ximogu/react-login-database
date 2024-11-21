const Koa = require('koa');
const bodyParser = require('koa-bodyparser');
const authRoutes = require('./routes/auth');
const cors = require('@koa/cors');

const app = new Koa();

app.use(cors());
app.use(bodyParser());
app.use(authRoutes.routes()).use(authRoutes.allowedMethods());

app.listen(4000, () => {
  console.log('Server running on http://localhost:4000');
});
