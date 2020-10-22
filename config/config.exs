# This file is responsible for configuring your application
# and its dependencies with the aid of the Mix.Config module.
#
# This configuration file is loaded before any dependency and
# is restricted to this project.

# General application configuration
use Mix.Config

config :wallet,
  ecto_repos: [Wallet.Repo]

# Configures the endpoint
config :wallet, WalletWeb.Endpoint,
  url: [host: "localhost"],
  secret_key_base: "FefEFI8PCNvS1ZyjLgwYX9ypFQQ5RDD+NbSHbJnb6j614SWaj3z3h/r99+3IGDlq",
  render_errors: [view: WalletWeb.ErrorView, accepts: ~w(html json)],
  pubsub: [name: Wallet.PubSub, adapter: Phoenix.PubSub.PG2],
  live_view: [signing_salt: "wSWwHc/v"]

# Configures Elixir's Logger
config :logger, :console,
  format: "$time $metadata[$level] $message\n",
  metadata: [:request_id]

# Use Jason for JSON parsing in Phoenix
config :phoenix, :json_library, Jason

# Import environment specific config. This must remain at the bottom
# of this file so it overrides the configuration defined above.
import_config "#{Mix.env()}.exs"
