require 'sinatra'

get '/' do
  erb :index
end

get '/tutorials_old/:name' do
  erb params[:name].to_sym
end

get '/tutorials/:slug' do
  slug = params[:slug]
  erb ('tutorials/'+slug).to_sym
end

