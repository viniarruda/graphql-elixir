"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _express = require('express');

var _AuthController = require('./app/controllers/AuthController'); var _AuthController2 = _interopRequireDefault(_AuthController);
var _CardController = require('./app/controllers/CardController'); var _CardController2 = _interopRequireDefault(_CardController);
var _RoutesController = require('./app/controllers/RoutesController'); var _RoutesController2 = _interopRequireDefault(_RoutesController);
var _SignUpController = require('./app/controllers/SignUpController'); var _SignUpController2 = _interopRequireDefault(_SignUpController);

var _auth = require('./app/middlewares/auth'); var _auth2 = _interopRequireDefault(_auth);

const routes = new (0, _express.Router)();

routes.post('/session', _AuthController2.default.store);

routes.use(_auth2.default);

routes.get('/routes', _RoutesController2.default.show);
routes.get('/sign-up/states', _SignUpController2.default.listStates);
routes.get('/sign-up/cities', _SignUpController2.default.listCities);
routes.get('/sign-up/professions', _SignUpController2.default.listProfessions);
routes.get('/sign-up/autocomplete', _SignUpController2.default.autoComplete);

routes.post('/cards/virtual', _CardController2.default.createVirtualCard);

exports. default = routes;
