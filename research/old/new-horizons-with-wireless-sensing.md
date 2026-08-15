---
layout: research
heading: New Horizons with Wireless Sensing
pubtag: New-Horizons-with-Wireless-Sensing
carousels:
  - images:
    - image: /assets/images/research/map.png
permalink: new-horizons-with-wireless-sensing
---

Extending the Horizon of wireless sensing – Continuum Force Sensing: 

Over the last few years, there has been a significant push to utilize wireless signals for communicating information and sensing the environment and human interactions, even with our research as outlined before. Today, we have wireless sensing capabilities to sense the ambient temperature of the environment, vibrations, hand gestures, and even breathing rate. Force is another such physical phenomenon that enables richer information about both the environment and human interactions. For instance, objects placed on a table exert their gravitational forces, and the contact interactions via our hands/feet are guided by the sense of contact force felt by our skin. Thus, the ability to sense the contact forces can allow us to measure all these ubiquitous interactions, enabling a myriad of applications in AR/VR. However, to date, the rich information that force can give about our ubiquitous environment and the touch interactions have not been captured by wireless sensors. Furthermore, force sensors are a critical requirement for safer surgeries, which require measuring complex contact forces experienced as a surgical instrument interacts with the surrounding tissues during the surgical procedure. 

However, with currently available discrete point-force sensors, which require a battery to sense the forces and communicate the readings wirelessly, these ubiquitous sensing and surgical sensing applications are not practical. This motivates the development of new force sensors that can sense force on a continuum and communicate wirelessly without consuming significant power to enable a battery-free design [Fig. 8]. Breaking away from traditional sensing methods, which have different sensing and communication blocks (eg. MEMS force sensors + BLE communication modules), WiForce, our work unifies these into a joint sensing and communication paradigm that is sufficiently low-powered and can be made potentially battery-less as well. Instead of using hundreds of sensors deployed across the length, WiForce designs a single continuous force-sensitive strip that transduces force magnitude and location onto variations in the reflected signal. These variations in reflected signals translate to variations in the wireless channel measured by any externally located device. Thus, the WiForce sensor can be read by any appropriate waveform capable of channel sounding, like FMCW for radar sensing and OFDM for Wi-Fi.
