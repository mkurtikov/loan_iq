# Ansible configuration management

## Workstation setup

### Install Ansible

Use this manual <http://docs.ansible.com/ansible/intro_installation.html>

### Prepare environment

Use this manual https://docs.ansible.com/ansible/latest/user_guide/windows_setup.html

### Update inventory file

Inventory  file should contain dns domain name of VM.
example:
```bash
[cmedb]
ENKEFBLDEVCMEFE.develop.fcbt

[loaniqdb]
ENKEFBLDEVMT.develop.fcbt

[restapi]
ENKEFBLDEVRAPI.develop.fcbt

[misysboard]
ENKEFBLDEVUXP.develop.fcbt
```

### Encrypt/Decrypt var/main.yml

## Encrypt

```bash
ansible-vault encrypt vars/main.yml
```

## Decript

```bash
ansible-vault decrypt vars/main.yml
```


### Change variables in vars/main.yml

## USAGE

#### Full setup (all roles)

```bash
ansible-playbook -i inventory all.yml
```

#### CMEDB

```bash
ansible-playbook -i inventory  cmedb.yml
```
#### LOANIQDB

```bash
ansible-playbook -i inventory CRM loaniqdb.yml
```

#### RESTAPI

```bash
ansible-playbook -i inventory CRM restapi.yml
```

#### MISYSBOARD

```bash
ansible-playbook -i inventory misysboard.yml
```
