defmodule WalletWeb.Router do
  use WalletWeb, :router

  pipeline :browser do
    plug :accepts, ["html"]
    plug :fetch_session
    plug :fetch_flash
    plug :protect_from_forgery
    plug :put_secure_browser_headers
  end

  pipeline :api do
    plug :accepts, ["json"]
  end

  scope "/", WalletWeb do
    pipe_through :browser

    get "/", PageController, :index
  end

  # Other scopes may use custom stacks.
   scope "/api"  do
     pipe_through :api
     
     get "/", Absinthe.Plug.GraphiQL, schema: WalletWeb.Api.Schema, interface: :playground
     post "/", Absinthe.Plug, schema: WalletWeb.Api.Schema
   end
end
