"use strict";Object.defineProperty(exports, "__esModule", {value: true});class RoutesController {
  show(req, res) {
    return res.json({
      signup: {
        states: {
          route: '/sign-up/states',
          queryParams: {
            countryId: '45',
          },
        },
        cities: {
          route: '/sign-up/cities',
          queryParams: {
            stateId: 'SP',
          },
        },
        professions: {
          route: '/sign-up/professions',
        },
        autocomplete: {
          route: '/sign-up/autocomplete',
          queryParams: {
            apiKey: 'string',
            input: 'uriEncode',
          },
        },
      },
    });
  }
}

exports. default = new RoutesController();
