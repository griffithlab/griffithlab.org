---
title: "WCSNG - Tutorials"
layout: page
excerpt: "Remote access"
sitemap: false
permalink: remote_access
---

# Notes on Remote Access
```
Author: Raghav Subbaraman
```

For everyone working from home (Coronavirus crisis of 2020), it is important to understand certain good practices as well as usefulness of various methods to allow secure and functional remote access.

## SSH

1. Probably the most familiar way to access a computer remotely
2. Requires direct/tunneled access to your machine over the internet
3. Requires installation of an ssh server on your lab machine for it to be accessible:
    1. __```sudo apt install openssh-server```__
4. X Forwarding allows for remote accessing the GUI of one application at a time (like MATLAB, sublime etc.)
	1. __```ssh -X <yourusername>@<yourmachineip>```__
	2. Then any GUI software that supports X forwarding may be used.
	3. Pros: Simple, requires no configuration at all
	4. Cons: Tends to be slow, works on a per-program basis and is not a full-fledged GUI.
	5. If you feel your internet is slow, you may try enabling compression at the host using the -C option
		1. __```ssh -XC <yourusername>@<yourmachineip>```__
		2. This may or may not help, because the experience is based on both latency and throughput.
	6. Sometimes __ssh -YC may__ work better than -X. However, -Y should be used with [caution](https://askubuntu.com/questions/35512/what-is-the-difference-between-ssh-y-trusted-x11-forwarding-and-ssh-x-u). 
5. Good Practices (Enough to raise attacker barrier of entry to a point where it’s not worth spending time for given RoI):
	1. __CHANGE YOUR DEFAULT SSH PORT FROM PORT 22.__
		1. [Instructions Here](https://www.cyberciti.biz/faq/howto-change-ssh-port-on-linux-or-unix-server/)
		2. Many bots usually attack port 22. Since many of us have public IPs, it’s best not to keep it open.
		3. In general, the threat is low, because the sshd has in built mechanisms to stop brute force attacks (so does the UCSD Firewall hopefully). But bots do not tire. And some of us use weak passwords.
	2. __USE SSH KEYS FOR AUTHENTICATION, NOT PLAINTEXT PASSWORDS:__
		1. [Instructions Here](https://wiki.archlinux.org/index.php/SSH_keys)
		2. Although passwords are tunneled securely, having weak plaintext passwords makes the computer susceptible to brute force attacks. Especially when on port 22.

## Remote Desktop (Full GUI)

[General Overview of different remote desktop methods.](https://www.howtogeek.com/257655/remote-desktop-roundup-teamviewer-vs.-splashtop-vs.-windows-rdp/) 

For those not having any specific need like accessing a Windows system, there’s the easy way to do Remote Desktop (TeamViewer), and the correct way to do it (VNC over SSH).

### TeamViewer

1. Many people are familiar and have the habit of using the TeamViewer software. Therefore, securing it is a matter of concern.
2. Pros:
	1. Ease of setup and use
	2. Is easily compatible over various operating systems
3. Cons:
	1. It’s unsafe if used incorrectly
	2. A usually disregarded effect: TeamViewer controls your actual desktop, so logging out without locking your machine leaves it open to the eyes of anyone who may be walking around nearby. It turns the monitor on when you access it too.
	3. Doesn’t work without a monitor connected (I’ve tried, it goes [wonkers](https://community.teamviewer.com/t5/Knowledge-Base/How-do-I-use-TeamViewer-on-headless-systems/ta-p/4256)).
	4. Allows only one session to a computer at a time
	5. Sometimes TeamViewer sessions get tagged and the UCSD firewall may block your IP from ever being able to access UCSD network again (Manideep may elaborate more on this), until ITS reverts the block.
	6. Goes through a 3rd party service.
4. [Learn about How to secure TeamViewer](https://www.howtogeek.com/257376/how-to-lock-down-teamviewer-for-more-secure-remote-access/)

### VNC

[Refer to this link for layman overview.]( https://www.howtogeek.com/257655/remote-desktop-roundup-teamviewer-vs.-splashtop-vs.-windows-rdp/)

1. Pros:
	1. Infinite sessions (infinite users)
	2. Doesn’t need a monitor, will not trigger the OS from displaying anything. It makes a separate (internal) display for every session.
	3. Can be tunneled over SSH
	4. Fine grained control over resolution, color-depth etc to optimize performance.
	5. Easily works across Operating Systems.
2. Cons:
	1. Slightly more difficult to set up.
3. [Simple Guide to setting up VNC (Ubuntu 18.04)](https://www.digitalocean.com/community/tutorials/how-to-install-and-configure-vnc-on-ubuntu-18-04): 
	3. Follow until __Step 3__.
	4. __However__, the ~/.vnc/xstartup needs to be set up like this:
		```

		~/.vnc/xstartup   
		#!/bin/bash    
		unset SESSION_MANAGER   
		unset DBUS_SESSION_BUS_ADDRESS   
		xrdb $HOME/.Xresources   
		startxfce4 &   
		```
	5. And when starting the VNC Server, use this command: __```vncserver :2 -localhost -geometry 1920x1080 -depth 24```__
		1. __-localhost argument makes sure that the vncserver only allows connections originating from localhost. (essential for security)__
		2. :2 (+5900) stands for the port number that the server will listen on. So :2 is port 5902
		3. -geometry argument defines the resolution and aspect ratio
		4. -depth is the color depth (24 bit in this case)
	6. Now we can set up an SSH port forwarding from the client to the VNC Server machine:
		1. STEP 3 in: https://www.digitalocean.com/community/tutorials/how-to-install-and-configure-vnc-on-ubuntu-18-04
		2. Remember to use the new SSH port, and not port 22.
	7. Now fire up the VNCViewer and connect to __localhost:5902__, you’re good to go!. Some free VNCViewer applications:
		1. Remmina (Ubuntu)
		2. VNCViewer (Windows, link)


## Miscellaneous

### Terminal Multiplexing:
1. We usually may need to run multiple programs together, and therefore require multiple bash shells. It is not advised to open a new ssh session for every new command that we want to run.
Therefore, use one of the following:
	1. Byobu
	2. Terminator
	3. tmux
	4. screen

