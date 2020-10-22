defmodule WalletWeb.Api.Schema do
  use Absinthe.Schema
  
  object :wallet_card do
    # ID!
    field :id, non_null(:id) 
    field :content, non_null(:string)
    
    field :is_completed, non_null(:boolean) do
      resolve(fn %{completed_at: completed_at}, _, _ ->
        {:ok, !is_nil(completed_at)}
      end)
    end
  end
  
  object :wallet_bill do
    field :id, non_null(:id)
    field :month, non_null(:string)
    field :year, non_null(:string)
    field :value, non_null(:integer)
  end
  
  mutation do
    field :create_wallet_card, non_null(:boolean) do
      arg :content, non_null(:string)
      
      resolve(fn %{content: content}, _ ->
        case Wallet.WalletApi.create_card(%{content: content}) do
          {:ok, %Wallet.WalletApi.Card{}} ->
            {:ok, true}
          _ ->
            {:ok, false}
        end
      end)
    end
  end
  
  query do
    field :hello, :string do
      resolve(fn _, _ ->
        {:ok, "Hello World"}
      end)
    end
    
    field :bills, non_null(list_of(non_null(:wallet_bill))) do
      resolve(fn _,_ ->
        {:ok, Wallet.Bills.list_bills()}
      end)
    end

    field :wallet_cards, non_null(list_of(non_null(:wallet_card))) do
      resolve(fn _, _ ->
        {:ok, Wallet.WalletApi.list_cards()}
      end)
    end
    
  end
end