require 'sinatra'

get '/' do
  erb :index
end

get '/yeah' do
  erb :yeah
end

