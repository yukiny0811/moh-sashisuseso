require 'sinatra/reloader' if development?
require 'sinatra/cookies'

# load models
require "./models/models.rb"
require "./models/photodata.rb"

# load modules
require "sass"
require "pry" if development?
require "json"
require 'securerandom'
require "open-uri"
require "json"
require "net/http"
require "uri"

# configs
enable :sessions
set :sass, {:style => :compact }

# load helpers
require "./appHelpers"



