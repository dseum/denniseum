---
title: 'Ubuntu PHP Installation'
date: '2021-10-21'
archived: true
---

This is a brief article so that I can remember how to properly install PHP 8 on Ubuntu LTS. Note that this is as Apache module.

```bash
sudo apt update
sudo add-apt-repository ppa:ondrej/php
sudo apt update
sudo apt install php8.0 libapache2-mod-php8.0
sudo apt install php8.0-{mysql,cli,common,imap,ldap,xml,fpm,curl,mbstring,zip}
```
