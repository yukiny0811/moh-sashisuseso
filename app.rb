require 'bundler/setup'
Bundler.require

require "./appRequires"

# not_found do
#   redirect "/"
# end

enable :sessions

set :bind, '0.0.0.0'

configure do
  enable :cross_origin
end

before do
  response.headers['Access-Control-Allow-Origin'] = '*'
end

options "*" do
  response.headers["Allow"] = "GET, PUT, POST, DELETE, OPTIONS"
  response.headers["Access-Control-Allow-Headers"] = "Authorization, Content-Type, Accept, X-User-Email, X-Auth-Token"
  response.headers["Access-Control-Allow-Origin"] = "*"
  200
end


# get "/" do
#   slim :index
# end

get "/" do
  slim :send_photo
end

get "/showimage" do
  @photo = Photo.all
  slim :showimage
end

post "/send" do
  file = params[:file][:tempfile]
  logger.info file
  Photo.create(
    data: file.read
  )
  redirect "/"
end

get "/getimage/:photo_id" do 
  logger.info Photo.all
  photo = Photo.find_by(id: params[:photo_id])
  content_type 'application/octet-stream'
  photo.data
end