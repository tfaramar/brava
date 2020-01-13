Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  namespace :api, defaults: {format: :json} do
    resources :users, only: [:create, :show, :index] do
      resources :follows, only: [:create]
    end
    resources :activities, only: [:create, :destroy, :update, :show, :index] do
      resources :kudos, only: [:create]
    end
    resources :kudos, only: [:destroy]
    resources :follows, only: [:destroy]
    resource :session, only: [:create, :destroy]
  end

  root "static_pages#root"
end
