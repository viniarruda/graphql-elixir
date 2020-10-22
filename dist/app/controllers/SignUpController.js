"use strict";Object.defineProperty(exports, "__esModule", {value: true});// import * as Yup from 'yup';

class SignUpController {
  async listStates(req, res) {
    try {
      const { countryId } = req.query;

      if (!countryId) {
        return res.status(400).json({
          error: 'CountryId is required',
        });
      }

      const states = [
        {
          value: 'AC',
          name: 'Acre',
        },
        {
          value: 'AL',
          name: 'Alagoas',
        },
        {
          value: 'AM',
          name: 'Amazonas',
        },
        {
          value: 'AP',
          name: 'Amapá',
        },
        {
          value: 'BA',
          name: 'Bahia',
        },
        {
          value: 'CE',
          name: 'Ceará',
        },
        {
          value: 'DF',
          name: 'Distrito Federal',
        },
        {
          value: 'ES',
          name: 'Espírito Santo',
        },
        {
          value: 'GO',
          name: 'Goiás',
        },
        {
          value: 'MA',
          name: 'Maranhão',
        },
        {
          value: 'MG',
          name: 'Minas Gerais',
        },
        {
          value: 'MS',
          name: 'Mato Grosso do Sul',
        },
        {
          value: 'MT',
          name: 'Mato Grosso',
        },
        {
          value: 'PA',
          name: 'Pará',
        },
        {
          value: 'PB',
          name: 'Paraíba',
        },
        {
          value: 'PE',
          name: 'Pernambuco',
        },
        {
          value: 'PI',
          name: 'Piauí',
        },
        {
          value: 'PR',
          name: 'Paraná',
        },
        {
          value: 'RJ',
          name: 'Rio de Janeiro',
        },
        {
          value: 'RN',
          name: 'Rio Grande do Norte',
        },
        {
          value: 'RO',
          name: 'Rondônia',
        },
        {
          value: 'RR',
          name: 'Roraima',
        },
        {
          value: 'RS',
          name: 'Rio Grande do Sul',
        },
        {
          value: 'SC',
          name: 'Santa Catarina',
        },
        {
          value: 'SE',
          name: 'Sergipe',
        },
        {
          value: 'SP',
          name: 'São Paulo',
        },
        {
          value: 'TO',
          name: 'Tocantins',
        },
      ];

      return res.status(201).json(states);
    } catch (error) {
      return res.status(404).json({ error });
    }
  }

  async listCities(req, res) {
    try {
      const { stateId } = req.query;

      if (!stateId) {
        return res.status(400).json({
          error: 'StateId is required',
        });
      }

      const cities = [
        {
          name: 'São Paulo',
          value: 'sao_paulo',
        },
        {
          name: 'Guarulhos',
          value: 'guarulhos',
        },
        {
          name: 'Olimpia',
          value: 'olimpia',
        },
        {
          name: 'São Bernardo do Campo',
          value: 'sao_bernardo',
        },
        {
          name: 'São Caetano do Sul',
          value: 'sao_caetano',
        },
        {
          name: 'Diadema',
          value: 'diadema',
        },
        {
          name: 'Osasco',
          value: 'osasco',
        },
        {
          name: 'Carapicuiba',
          value: 'carapicuiba',
        },
      ];

      return res.status(201).json(cities);
    } catch (error) {
      return res.status(404).json({ error });
    }
  }

  async listProfessions(req, res) {
    const professions = [
      {
        name: 'Profissional Autônomo',
        value: 1,
      },
      {
        name: 'Profissional da Iniciativa Privada',
        value: 2,
      },
      {
        name: 'Funcionário Público',
        value: 3,
      },
      {
        name: 'Aposentado',
        value: 4,
      },
      {
        name: 'Dona-de-Casa',
        value: 5,
      },
      {
        name: 'Pensionista',
        value: 6,
      },
      {
        name: 'Desempregado',
        value: 7,
      },
    ];

    return res.status(200).json(professions);
  }

  async autoComplete(req, res) {
    try {
      const { apiKey, input } = req.query;

      if (!apiKey && !input) {
        return res
          .status(400)
          .json({ message: 'should pass apiKey and input' });
      }

      const response = {
        predictions: [
          {
            description:
              'Avenida Engenheiro Luis Carlos Berrini - Brooklin Novo, São Paulo - SP, Brasil',
            id: '6dd0d34234d9dde0e268f3f662f45456e33442f5',
            matched_substrings: [
              {
                length: 37,
                offset: 0,
              },
            ],
            place_id:
              'Ek5BdmVuaWRhIEluZ2VuaWVybyBMdWlzIENhcmxvcyBCZXJyaW5pIC0gQnJvb2tsaW4gTm92bywgU8OjbyBQYXVsbyAtIFNQLCBCcmFzaWwiLiosChQKEgmHT5btNFfOlBHUGo-2rE47zRIUChIJ9e7JZKRQzpQRdRlLmDzB7NU',
            reference:
              'Ek5BdmVuaWRhIEluZ2VuaWVybyBMdWlzIENhcmxvcyBCZXJyaW5pIC0gQnJvb2tsaW4gTm92bywgU8OjbyBQYXVsbyAtIFNQLCBCcmFzaWwiLiosChQKEgmHT5btNFfOlBHUGo-2rE47zRIUChIJ9e7JZKRQzpQRdRlLmDzB7NU',
            structured_formatting: {
              main_text: 'Avenida Engenheiro Luis Carlos Berrini',
              main_text_matched_substrings: [
                {
                  length: 37,
                  offset: 0,
                },
              ],
              secondary_text: 'Brooklin Novo, São Paulo - SP, Brasil',
            },
            terms: [
              {
                offset: 0,
                value: 'Avenida Engenheiro Luis Carlos Berrini',
              },
              {
                offset: 40,
                value: 'Brooklin Novo',
              },
              {
                offset: 55,
                value: 'São Paulo',
              },
              {
                offset: 67,
                value: 'SP',
              },
              {
                offset: 71,
                value: 'Brasil',
              },
            ],
            types: ['route', 'geocode'],
          },
          {
            description:
              'Avenida Engenheiro Luis Engenio - Eng, Taubaté - SP, Brasil',
            id: '6dd0d34234d9dde0e268f3f662f45456e33442f5',
            matched_substrings: [
              {
                length: 37,
                offset: 0,
              },
            ],
            place_id:
              'Ek5BdmVuaWRhIEluZ2VuaWVybyBMdWlzIENhcmxvcyBCZXJyaW5pIC0gQnJvb2tsaW4gTm92bywgU8OjbyBQYXVsbyAtIFNQLCBCcmFzaWwiLiosChQKEgmHT5btNFfOlBHUGo-2rE47zRIUChIJ9e7JZKRQzpQRdRlLmDzB7NU',
            reference:
              'Ek5BdmVuaWRhIEluZ2VuaWVybyBMdWlzIENhcmxvcyBCZXJyaW5pIC0gQnJvb2tsaW4gTm92bywgU8OjbyBQYXVsbyAtIFNQLCBCcmFzaWwiLiosChQKEgmHT5btNFfOlBHUGo-2rE47zRIUChIJ9e7JZKRQzpQRdRlLmDzB7NU',
            structured_formatting: {
              main_text: 'Avenida Engenheiro Luis Carlos Berrini',
              main_text_matched_substrings: [
                {
                  length: 37,
                  offset: 0,
                },
              ],
              secondary_text: 'Brooklin Novo, São Paulo - SP, Brasil',
            },
            terms: [
              {
                offset: 0,
                value: 'Avenida Engenheiro Luis Carlos Berrini',
              },
              {
                offset: 40,
                value: 'Brooklin Novo',
              },
              {
                offset: 55,
                value: 'São Paulo',
              },
              {
                offset: 67,
                value: 'SP',
              },
              {
                offset: 71,
                value: 'Brasil',
              },
            ],
            types: ['route', 'geocode'],
          },
          {
            description: 'Rua Engenho - Novo, Olimpia - SP, Brasil',
            id: '6dd0d34234d9dde0e268f3f662f45456e33442f5',
            matched_substrings: [
              {
                length: 37,
                offset: 0,
              },
            ],
            place_id:
              'Ek5BdmVuaWRhIEluZ2VuaWVybyBMdWlzIENhcmxvcyBCZXJyaW5pIC0gQnJvb2tsaW4gTm92bywgU8OjbyBQYXVsbyAtIFNQLCBCcmFzaWwiLiosChQKEgmHT5btNFfOlBHUGo-2rE47zRIUChIJ9e7JZKRQzpQRdRlLmDzB7NU',
            reference:
              'Ek5BdmVuaWRhIEluZ2VuaWVybyBMdWlzIENhcmxvcyBCZXJyaW5pIC0gQnJvb2tsaW4gTm92bywgU8OjbyBQYXVsbyAtIFNQLCBCcmFzaWwiLiosChQKEgmHT5btNFfOlBHUGo-2rE47zRIUChIJ9e7JZKRQzpQRdRlLmDzB7NU',
            structured_formatting: {
              main_text: 'Avenida Engenheiro Luis Carlos Berrini',
              main_text_matched_substrings: [
                {
                  length: 37,
                  offset: 0,
                },
              ],
              secondary_text: 'Brooklin Novo, São Paulo - SP, Brasil',
            },
            terms: [
              {
                offset: 0,
                value: 'Rua engenho',
              },
              {
                offset: 40,
                value: 'Novo',
              },
              {
                offset: 55,
                value: 'Olimpia',
              },
              {
                offset: 67,
                value: 'SP',
              },
              {
                offset: 71,
                value: 'Brasil',
              },
            ],
            types: ['route', 'geocode'],
          },
          {
            description: 'Rua Engenho - Novo, Olimpia - SP, Brasil',
            id: '6dd0d34234d9dde0e268f3f662f45456e33442f5',
            matched_substrings: [
              {
                length: 37,
                offset: 0,
              },
            ],
            place_id:
              'Ek5BdmVuaWRhIEluZ2VuaWVybyBMdWlzIENhcmxvcyBCZXJyaW5pIC0gQnJvb2tsaW4gTm92bywgU8OjbyBQYXVsbyAtIFNQLCBCcmFzaWwiLiosChQKEgmHT5btNFfOlBHUGo-2rE47zRIUChIJ9e7JZKRQzpQRdRlLmDzB7NU',
            reference:
              'Ek5BdmVuaWRhIEluZ2VuaWVybyBMdWlzIENhcmxvcyBCZXJyaW5pIC0gQnJvb2tsaW4gTm92bywgU8OjbyBQYXVsbyAtIFNQLCBCcmFzaWwiLiosChQKEgmHT5btNFfOlBHUGo-2rE47zRIUChIJ9e7JZKRQzpQRdRlLmDzB7NU',
            structured_formatting: {
              main_text: 'Avenida Engenheiro Luis Carlos Berrini',
              main_text_matched_substrings: [
                {
                  length: 37,
                  offset: 0,
                },
              ],
              secondary_text: 'Brooklin Novo, São Paulo - SP, Brasil',
            },
            terms: [
              {
                offset: 0,
                value: 'Rua Engenho',
              },
              {
                offset: 40,
                value: 'Novo',
              },
              {
                offset: 55,
                value: 'Olimpia',
              },
              {
                offset: 67,
                value: 'SP',
              },
              {
                offset: 71,
                value: 'Brasil',
              },
            ],
            types: ['route', 'geocode'],
          },
          {
            description: 'Rua Engenho - Novo, Olimpia - SP, Brasil',
            id: '6dd0d34234d9dde0e268f3f662f45456e33442f5',
            matched_substrings: [
              {
                length: 37,
                offset: 0,
              },
            ],
            place_id:
              'Ek5BdmVuaWRhIEluZ2VuaWVybyBMdWlzIENhcmxvcyBCZXJyaW5pIC0gQnJvb2tsaW4gTm92bywgU8OjbyBQYXVsbyAtIFNQLCBCcmFzaWwiLiosChQKEgmHT5btNFfOlBHUGo-2rE47zRIUChIJ9e7JZKRQzpQRdRlLmDzB7NU',
            reference:
              'Ek5BdmVuaWRhIEluZ2VuaWVybyBMdWlzIENhcmxvcyBCZXJyaW5pIC0gQnJvb2tsaW4gTm92bywgU8OjbyBQYXVsbyAtIFNQLCBCcmFzaWwiLiosChQKEgmHT5btNFfOlBHUGo-2rE47zRIUChIJ9e7JZKRQzpQRdRlLmDzB7NU',
            structured_formatting: {
              main_text: 'Avenida Engenheiro Luis Carlos Berrini',
              main_text_matched_substrings: [
                {
                  length: 37,
                  offset: 0,
                },
              ],
              secondary_text: 'Brooklin Novo, São Paulo - SP, Brasil',
            },
            terms: [
              {
                offset: 0,
                value: 'Rua Engenho',
              },
              {
                offset: 40,
                value: 'Novo',
              },
              {
                offset: 55,
                value: 'Olimpia',
              },
              {
                offset: 67,
                value: 'SP',
              },
              {
                offset: 71,
                value: 'Brasil',
              },
            ],
            types: ['route', 'geocode'],
          },
        ],
        status: 'OK',
      };

      return res.status(200).json(response);
    } catch (error) {
      return res.status(400).json(error);
    }
  }
}

exports. default = new SignUpController();
