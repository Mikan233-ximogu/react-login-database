const Router = require('@koa/router');
const User = require('../models/User');
const bcrypt = require('bcrypt');

const router = new Router();

router.post('/register', async (ctx) => {
  const { username, password } = ctx.request.body;
  try {
    const hashedPassword = await bcrypt.hash(password, 10);
    const newUser = await User.create({ username, password: hashedPassword });
    ctx.status = 201;
    ctx.body = { message: '注册成功', user: newUser };
  } catch (err) {
    ctx.status = 400;
    ctx.body = { message: '注册失败', error: err.message };
  }
});


router.post('/login', async (ctx) => {
  const { username, password } = ctx.request.body;
  try {
    const user = await User.findOne({ where: { username } });
    if (user && await bcrypt.compare(password, user.password)) {
      ctx.status = 200;
      ctx.body = { message: '登录成功~' };
    } else {
      ctx.status = 401;
      ctx.body = { message: '用户名或密码有误！' };
    }
  } catch (err) {
    ctx.status = 500;
    ctx.body = { message: '登录失败...', error: err.message };
  }
});

module.exports = router;
