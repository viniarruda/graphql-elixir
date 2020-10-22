"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { newObj[key] = obj[key]; } } } newObj.default = obj; return newObj; } } function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _jsonwebtoken = require('jsonwebtoken'); var _jsonwebtoken2 = _interopRequireDefault(_jsonwebtoken);
var _yup = require('yup'); var Yup = _interopRequireWildcard(_yup);

var _auth = require('../../config/auth'); var _auth2 = _interopRequireDefault(_auth);

class SessionController {
  async store(req, res) {
    const schema = Yup.object().shape({
      email: Yup.string()
        .email()
        .required(),
      password: Yup.string().required(),
    });

    if (!(await schema.isValid(req.body))) {
      return res.status(400).json({ error: 'Validation fails' });
    }

    const { email, password } = req.body;

    if (
      process.env.APP_EMAIL !== email &&
      process.env.APP_PASSWORD !== password
    ) {
      return res.status(404).json({ error: 'User not found' });
    }

    const user = {
      id: process.env.ID_USER,
      name: 'Admin mock',
      email,
    };

    return res.json({
      token: _jsonwebtoken2.default.sign(user, _auth2.default.secret, {
        expiresIn: _auth2.default.expiresIn,
      }),
    });
  }
}

exports. default = new SessionController();
