const Mock = require('mockjs');

const get = {
    '/api/index': Mock.mock({
        'status': 1,
        'message': 'success',
        'result|1': [{
            'author': '@name',
            'comment': '@cparagraph',
            'date': '@datetime'
        }]
    })
}
const post = {
    '/api/index': Mock.mock({
        'status': 1,
        'message': 'success',
        'result|1': [{
            'author': '@name',
            'comment': '@cparagraph',
            'date': '@datetime'
        }]
    })
}
module.exports = {
    get,
    post
}