'use strict';

var spec = {
  name: 'P2P',
  message: 'Internal Error on counoscoincore-p2p Module {0}'
};

module.exports = require('counoscoincore-lib').errors.extend(spec);
