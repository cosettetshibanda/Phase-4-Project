Rails.application.routes.draw do
  resources :carseats
  resources :reviews
  post "/signup", to: "users#create"
  get "/me", to: "users#show"
  post "/login", to: "sessions#create"
  delete "/logout", to: "sessions#destroy"
  get "/reviews/:name/:number", to: "reviews#review_length"
  # get "/mostExpensive", to: "carseats#mostExpensive"
  # get "/popular_seats/:number", to: "carseats#popular_seats"
  # get "/budget/:number", to: "carseats#budget"
  # get "reviewsWith/:number/stars", to: "reviews#findReviews"
  # get "findMode/:string", to: "carseats#findMode"
  # get "/search/:word", to: "carseats#search"
  # get "/rearMode", to: "carseats#rearMode"
  # Routing logic: fallback requests for React Router.
  # Leave this here to help deploy your app later!
  get "*path", to: "fallback#index", constraints: ->(req) { !req.xhr? && req.format.html? }
end
