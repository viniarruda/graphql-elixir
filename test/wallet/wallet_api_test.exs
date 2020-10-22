defmodule Wallet.WalletApiTest do
  use Wallet.DataCase

  alias Wallet.WalletApi

  describe "cards" do
    alias Wallet.WalletApi.Card

    @valid_attrs %{completed_at: "2010-04-17T14:00:00Z", content: "some content"}
    @update_attrs %{completed_at: "2011-05-18T15:01:01Z", content: "some updated content"}
    @invalid_attrs %{completed_at: nil, content: nil}

    def card_fixture(attrs \\ %{}) do
      {:ok, card} =
        attrs
        |> Enum.into(@valid_attrs)
        |> WalletApi.create_card()

      card
    end

    test "list_cards/0 returns all cards" do
      card = card_fixture()
      assert WalletApi.list_cards() == [card]
    end

    test "get_card!/1 returns the card with given id" do
      card = card_fixture()
      assert WalletApi.get_card!(card.id) == card
    end

    test "create_card/1 with valid data creates a card" do
      assert {:ok, %Card{} = card} = WalletApi.create_card(@valid_attrs)
      assert card.completed_at == DateTime.from_naive!(~N[2010-04-17T14:00:00Z], "Etc/UTC")
      assert card.content == "some content"
    end

    test "create_card/1 with invalid data returns error changeset" do
      assert {:error, %Ecto.Changeset{}} = WalletApi.create_card(@invalid_attrs)
    end

    test "update_card/2 with valid data updates the card" do
      card = card_fixture()
      assert {:ok, %Card{} = card} = WalletApi.update_card(card, @update_attrs)
      assert card.completed_at == DateTime.from_naive!(~N[2011-05-18T15:01:01Z], "Etc/UTC")
      assert card.content == "some updated content"
    end

    test "update_card/2 with invalid data returns error changeset" do
      card = card_fixture()
      assert {:error, %Ecto.Changeset{}} = WalletApi.update_card(card, @invalid_attrs)
      assert card == WalletApi.get_card!(card.id)
    end

    test "delete_card/1 deletes the card" do
      card = card_fixture()
      assert {:ok, %Card{}} = WalletApi.delete_card(card)
      assert_raise Ecto.NoResultsError, fn -> WalletApi.get_card!(card.id) end
    end

    test "change_card/1 returns a card changeset" do
      card = card_fixture()
      assert %Ecto.Changeset{} = WalletApi.change_card(card)
    end
  end
end
