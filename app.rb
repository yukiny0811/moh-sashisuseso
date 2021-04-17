require 'bundler/setup'
Bundler.require

require "./appRequires"
require 'stringio'

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
  photo = Photo.find_by(id: params[:photo_id])
  # data = Base64.encode64(photo.data).gsub(/\n/, "") +  "\n"
  # data = Base64.strict_encode64(photo.data)
  content_type 'application/octet-stream'
  # logger.info photo.data
  # data
  photo.data
  # data
  # data = Base64.encode64(photo.data)
  # data
end

get "/create_image" do
  slim :create_image
end

post "/send_created_image" do
  # logger.info "this is yuki"
  # logger.info params[:file]
  # logger.info Base64.decode64(params[:file]);
  # logger.info params[:file][:tempfile]
  Photo.create(
    data: Base64.decode64(params[:file])
  )
end