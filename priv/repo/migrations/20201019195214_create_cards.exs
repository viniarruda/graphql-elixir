defmodule Wallet.Repo.Migrations.CreateCards do
  use Ecto.Migration

  def change do
    create table(:cards) do
      add :content, :string, null: false
      add :completed_at, :utc_datetime

      timestamps()
    end

  end
end
