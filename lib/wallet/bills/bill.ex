defmodule Wallet.Bills.Bill do
  use Ecto.Schema
  import Ecto.Changeset

  schema "bills" do
    field :month, :string
    field :value, :float
    field :year, :string

    timestamps()
  end

  @doc false
  def changeset(bill, attrs) do
    bill
    |> cast(attrs, [:month, :year, :value])
    |> validate_required([:month, :year, :value])
  end
end
