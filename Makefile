# ======================================================================== #
# PRODUCTION
# ======================================================================== #

# fill with dedicated machine ip address or domain name
production_host_ip='api.cinevie.jpranata.tech'

# please use the same username between ./remote/setup/01.sh with
# the following production username for consistency and clarity
production_username='u_cinevie'

## production/setup: setup timezone, locales, user, universe repository, firewall, failban2, golang, postgresql database and caddy
.PHONY: production/setup
production/setup:
	rsync -rP --delete ./remote/setup root@${production_host_ip}:~/setup-ui/
	ssh -t root@${production_host_ip} 'bash /root/setup-ui/01.sh'
	sleep 10

## production/configure/cinevie.service: configure the production systemd cinevie.service file
.PHONY: production/configure/cinevie.service
production/configure/cinevie.service:
	rsync -rP --delete ./build ${production_username}@${production_host_ip}:~
	rsync -P ./remote/production/cinevie.service ${production_username}@${production_host_ip}:~
	ssh -t ${production_username}@${production_host_ip} '\
		sudo mv ~/cinevie.service /etc/systemd/system/ \
		&& sudo systemctl enable cinevie \
		&& sudo systemctl restart cinevie \

## production/configure/caddyfile: configure the production of Caddyfile
.PHONY: production/configure/caddyfile
production/configure/caddyfile:
	rsync -P ./remote/production/Caddyfile ${production_username}@${production_host_ip}:~
	ssh -t ${production_username}@${production_host_ip} '\
		sudo mv ~/Caddyfile /etc/caddy/ \
		&& sudo systemctl reload caddy \
	'
## production/update: update binary and configuration on production machine
.PHONY: production/update
production/update: production/configure/cinevie.service production/configure/caddyfile

## production/all: run the entire setup and configurations for a ready to use production REST API
.PHONY: production/all
production/all: production/setup production/configure/cinevie.service production/configure/caddyfile
