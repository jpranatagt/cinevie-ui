#!/bin/bash

set -eu

# ============================================================ #
# VARIABLES
# ============================================================ #

TIMEZONE=Asia/Jakarta

# the name of the new user to create
USERNAME=u_cinevie

# force all output to be presented in en_US for duration of this script running
# this would avoid any "setting locale failed" errors while this script is running
export LC_ALL=en_US.UTF-8

# ============================================================= #
# LOGIC
# ============================================================= #

# enable the "universe" repository (package)
apt update
apt --yes install software-properties-common

apt update
add-apt-repository --yes universe

# update all software packages including configuration files if newer ones are available
apt --yes -o Dpkg::Options::="--force-confnew" upgrade

# set the system timezone and install all locales
timedatectl set-timezone ${TIMEZONE}
apt --yes install locales-all

# add the new user and give them sudo privileges
id -u "${USERNAME}" &> /dev/null || useradd --create-home --shell "/bin/bash" --groups sudo "${USERNAME}"

# force a password to be set for the new user the first time they log in
passwd --delete "${USERNAME}"
chage --lastday 0 "${USERNAME}"

# copy the SSH keys from root user to the new user
rsync --archive --chown=${USERNAME}:${USERNAME} /root/.ssh /home/${USERNAME}

# configure firewall to allow SSH, HTTP, and HTTPS traffic
apt --yes install ufw
ufw allow 22
ufw allow 80/tcp
ufw allow 443/tcp
ufw --force enable

# install Caddy
sudo apt install -y debian-keyring debian-archive-keyring apt-transport-https
curl -1sLf 'https://dl.cloudsmith.io/public/caddy/stable/gpg.key' | sudo gpg --batch --yes --dearmor -o /usr/share/keyrings/caddy-stable-archive-keyring.gpg
curl -1sLf 'https://dl.cloudsmith.io/public/caddy/stable/debian.deb.txt' | sudo tee /etc/apt/sources.list.d/caddy-stable.list
sudo apt update
sudo apt install caddy -y
sudo apt autoremove -y

# NODE and YARN
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.1/install.sh | bash && source .bashrc && nvm install v16.16.0 && npm i --location=global pm2 yarn serve

# safely serve on port 80 purpose
sudo apt-get install libcap2-bin
sudo setcap cap_net_bind_service=+ep `readlink -f \`which node\``
