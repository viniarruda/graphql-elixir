defmodule Wallet.BillsTest do
  use Wallet.DataCase

  alias Wallet.Bills

  describe "bills" do
    alias Wallet.Bills.Bill

    @valid_attrs %{month: "some month", value: 120.5, year: "some year"}
    @update_attrs %{month: "some updated month", value: 456.7, year: "some updated year"}
    @invalid_attrs %{month: nil, value: nil, year: nil}

    def bill_fixture(attrs \\ %{}) do
      {:ok, bill} =
        attrs
        |> Enum.into(@valid_attrs)
        |> Bills.create_bill()

      bill
    end

    test "list_bills/0 returns all bills" do
      bill = bill_fixture()
      assert Bills.list_bills() == [bill]
    end

    test "get_bill!/1 returns the bill with given id" do
      bill = bill_fixture()
      assert Bills.get_bill!(bill.id) == bill
    end

    test "create_bill/1 with valid data creates a bill" do
      assert {:ok, %Bill{} = bill} = Bills.create_bill(@valid_attrs)
      assert bill.month == "some month"
      assert bill.value == 120.5
      assert bill.year == "some year"
    end

    test "create_bill/1 with invalid data returns error changeset" do
      assert {:error, %Ecto.Changeset{}} = Bills.create_bill(@invalid_attrs)
    end

    test "update_bill/2 with valid data updates the bill" do
      bill = bill_fixture()
      assert {:ok, %Bill{} = bill} = Bills.update_bill(bill, @update_attrs)
      assert bill.month == "some updated month"
      assert bill.value == 456.7
      assert bill.year == "some updated year"
    end

    test "update_bill/2 with invalid data returns error changeset" do
      bill = bill_fixture()
      assert {:error, %Ecto.Changeset{}} = Bills.update_bill(bill, @invalid_attrs)
      assert bill == Bills.get_bill!(bill.id)
    end

    test "delete_bill/1 deletes the bill" do
      bill = bill_fixture()
      assert {:ok, %Bill{}} = Bills.delete_bill(bill)
      assert_raise Ecto.NoResultsError, fn -> Bills.get_bill!(bill.id) end
    end

    test "change_bill/1 returns a bill changeset" do
      bill = bill_fixture()
      assert %Ecto.Changeset{} = Bills.change_bill(bill)
    end
  end
end
