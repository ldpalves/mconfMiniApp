Rails.application.routes.draw do
  get 'index/landing'
  resources :messages
  get 'index/index'
  root 'index#landing'
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end