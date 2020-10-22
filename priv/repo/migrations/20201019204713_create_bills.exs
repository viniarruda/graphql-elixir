defmodule Wallet.Repo.Migrations.CreateBills do
  use Ecto.Migration

  def change do
    create table(:bills) do
      add :month, :string
      add :year, :string
      add :value, :float

      timestamps()
    end

  end
end
