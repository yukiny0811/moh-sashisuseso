run:
	ruby app.rb
bundle:
	bundle install --path vendor/bundle
mig:
	bundle exec rake db:migrate
create:
	bundle exec rake db:create_migration NAME=${NAME}
seed:
	bundle exec rake db:seed
push:
	git add .
	git commit -m "asdas"
	git push origin master
