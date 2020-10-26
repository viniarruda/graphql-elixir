# Wallet

To start your Phoenix server:

- Install dependencies with `mix deps.get`
- Create and migrate your database with `mix ecto.setup`
- Install Node.js dependencies with `cd assets && npm install`
- Start Phoenix endpoint with `mix phx.server`

Now you can visit [`localhost:4000`](http://localhost:4000) from your browser.

Ready to run in production? Please [check our deployment guides](https://hexdocs.pm/phoenix/deployment.html).

## Setup

```sh
cp .env.example .env;
```


## Running

```sh
docker-compose run --service-ports --use-alias --rm app_dev bash;
$ MIX_ENV=dev mix phx.server
```

## Troubleshooting

```
ERROR: Network netw declared as external, but could not be found. Please create the network manually using `docker network create netw` and try again.
```

Run:

```sh
docker network create netw
```

## Learn more

- Official website: https://www.phoenixframework.org/
- Guides: https://hexdocs.pm/phoenix/overview.html
- Docs: https://hexdocs.pm/phoenix
- Forum: https://elixirforum.com/c/phoenix-forum
- Source: https://github.com/phoenixframework/phoenix

Playground Graphql: `http://localhost:4000/api`
