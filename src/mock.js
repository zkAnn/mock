const api = require('./api.js');
exports.mock = function(url, method) {
    let result = '';
    url = url.split('?')[0];
    method = method.toLowerCase();
    if (url === '/') {
        result = `
        <h3>接口总览：</h3>
      <div>
        <h3>GET</h3>
        <pre>
          ${JSON.stringify(api.get,null,4)}
        </pre>
        <h3>POST</div>
        <pre>
          ${JSON.stringify(api.post,null,4)}
        </pre>
      </div>
      `
    } else {
        result = api[method][url];
    }

    return result
}