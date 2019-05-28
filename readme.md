Ansible configuration management
Workstation setup
Install Ansible
Use this manual http://docs.ansible.com/ansible/intro_installation.html

Prepare environment
Use this manual https://docs.ansible.com/ansible/latest/user_guide/windows_setup.html

Update inventory file
Inventory file should contain dns domain name of VM. example:

[frontend]
crmdevxfe1.develop.fcbt
crmdevxfe2.develop.fcbt

[common]
crmdevxasync1.develop.fcbt
crmdevxasync2.develop.fcbt

[backend_db]
crmdevxasync1.develop.fcbt

[backend]
crmdevxasync2.develop.fcbt

[DB]
crmdevxbe.develop.fcbt

[SSRS]
crmdevxssrs.develop.fcbt
