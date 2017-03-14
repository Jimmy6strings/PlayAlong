var linksController = require('../links/linkController.js');

module.exports = function (app, express) {

  // authentication middleware used to decode token and made available on the request
  // app.use('/api/links', helpers.decode);
  app.get('/api/links/', linksController.allLinks);
  app.post('/api/links/', linksController.newLink);


};