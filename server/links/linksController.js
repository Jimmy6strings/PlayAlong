var Link = require('./linkModel.js');

//promisify mongoose method using 'q' promise library
var findLink = Q.nbind(Link.findOne, Link);
var createLink = Q.nbind(Link.create, Link);
var findAllLinks = Q.nbind(Link.find, Link);

module.exports = {
  allLinks: function (req, res, next) {
    findAllLinks({})
      .then(function (links) {
        res.json(links);
      })
      .fail(function (error) {
        next(error);
      });
  },

  newLink: function (req, res, next) {
    var url = req.body.url;
    if (!url) {
      return next(new Error('Not a valid url'));
    }

    findLink({url: url})
      .then(function (match) {
        if (match) {
          res.send(match);
        } else {
          return url;
        }
      })
      .then(function (title) {
        if (title) {
          var newLink = {
            title: title,
            url: url,
            baseUrl: req.headers.origin,

          };
          return createLink(newLink);
        }
      })
      .then(function (createdLink) {
        if (createdLink) {
          res.json(createdLink);
        }
      })
      .fail(function (error) {
        next(error);
      });
  }
}