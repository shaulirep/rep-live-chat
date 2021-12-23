# Login as Chatwoot user
sudo -i -u chatwoot

# Navigate to the Chatwoot directory
cd rep-live-chat

# Pull the latest version of the develop branch
git pull

# Ensure the ruby version is upto date
rvm install "ruby-3.0.2"
rvm use 3.0.2 --default

# Update dependencies
bundle
yarn

# Recompile the assets
rake assets:precompile RAILS_ENV=production

# Migrate the database schema
RAILS_ENV=production bundle exec rake db:migrate

# Switch back to root user
exit

# Copy the updated targets
sudo cp /home/chatwoot/rep-live-chat/deployment/chatwoot-web.1.service /etc/systemd/system/chatwoot-web.1.service
sudo cp /home/chatwoot/rep-live-chat/deployment/chatwoot-worker.1.service /etc/systemd/system/chatwoot-worker.1.service
sudo cp /home/chatwoot/rep-live-chat/deployment/chatwoot.target /etc/systemd/system/chatwoot.target

# Restart the chatwoot server
sudo systemctl restart chatwoot.target
