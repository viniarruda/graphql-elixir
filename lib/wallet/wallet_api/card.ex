defmodule Wallet.WalletApi.Card do
  use Ecto.Schema
  import Ecto.Changeset

  schema "cards" do
    field :completed_at, :utc_datetime
    field :content, :string

    timestamps()
  end

  @doc false
  def changeset(card, attrs) do
    card
    |> cast(attrs, [:content, :completed_at])
    |> validate_required([:content])
  end
end
