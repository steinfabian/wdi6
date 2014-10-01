Rails.application.routes.draw do
  root :to => 'pages#welcome'
  get '/magic_8' => 'games#m8'
  get '/secret_number' => 'games#sn'
  get '/rock_paper_scissors' => 'games#rps'
  get '/games/rock_paper_scissors' => 'games#rock_paper_scissors'
end
