Rails.application.routes.draw do
  get 'fridge/index'

  get 'fridge/new' => "fridge#new"

  post 'fridge/' => "fridge#create"

  



  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
