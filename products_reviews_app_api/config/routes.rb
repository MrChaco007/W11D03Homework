Rails.application.routes.draw do
  resources :products, only: [:index, :show] do
    resources :reviews, except: [:show]
  end
end
