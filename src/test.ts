import axios from 'axios';
import { Agent } from 'https';
// 忽略证书 本地开了代理时使用
const agent = new Agent({
  rejectUnauthorized: false
});
axios
  .get('https://github.com', { httpsAgent: agent })
  .then(res => {
    console.log(res.data);
  })
  .catch(err => {
    console.log(err);

    return err;
  });
