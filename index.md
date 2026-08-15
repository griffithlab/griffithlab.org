---
layout: article
aside:
  news: true
title:
carousels:
  - images:
    - image: /assets/images/picpic/graduation_2024.jpg
    - image: /assets/images/picpic/graduation_2023.jpg
    - image: /assets/images/picpic/birch_2022.jpg
    - image: /assets/images/picpic/roshan_graduation.jpg
    - image: /assets/images/picpic/diwali.jpg
    - image: /assets/images/picpic/diwalifirework.jpg
    - image: /assets/images/picpic/frisbee.jpg
    - image: /assets/images/picpic/dinner_2022.jpg
    - image: /assets/images/picpic/group_christmas21.jpg
    - image: /assets/images/picpic/manibday.jpg
# article_header:
#   type: overlay
#   theme: dark
#   background_color: '#203028'
#   background_image:
#     src: /assets/images/atkinson.jpeg
#     gradient: 'linear-gradient(135deg, rgba(34, 139, 87 , .4), rgba(139, 34, 139, .4))'
---
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap">
<style>
  /* Landing page title */
  h1 {
    font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
    font-size: 30px;
    font-weight: 700;
    color: #D6001C;
    letter-spacing: -0.2px;
  }
</style>

<h1 class="landing-title" style="font-size: 44px; line-height: 1.15; font-weight: 700; color: #D6001C; margin: 8px 0 6px;">Wireless AI and Systems Lab</h1>
<p class="landing-subtitle" style="font-size: 21px; line-height: 1.4; font-weight: 500; color: #4a5560; margin: 0 0 22px;">All things AI and radios from future 6G, sensing, robots, and more!</p>

<p class="landing-lead">We build the next generation of wireless systems, bringing together <strong>AI</strong>, <strong>edge compute</strong>, and <strong>robotics</strong> to create networks that sense, think, and adapt in the real world. Our work spans rigorous theory to deployed prototypes, closing the loop from idea to real-world impact.</p>
<!-- #### Mission Statement
<!-- 
The mission of the overall group is to solve real-world problems by first identifying the right problems to solve, then creating a theoretical model and theoretical breakthrough and practical realization of those solutions, and iterate! --> 

{% include carousel.html height="50" unit="%" duration="7" number="1" %}
<h3 class="landing-section-title">Research Overview</h3>

<p class="landing-body">WCSNG designs sensing, communication, and networking technologies for robots, autonomous systems, and everyday devices. Increasingly, our research lives at the intersection of wireless and AI: real-time edge compute and machine learning that put intelligence <em>inside</em> the network, from RAN intelligent controllers and learned signal processing to perception and autonomy on robots. We take each idea from a working prototype to a theoretical model and breakthrough, then to practical realization and real-world deployment, and iterate.</p>

<h3 class="landing-section-title">Key Research Areas</h3>

<div class="research-grid">
  <a class="research-card" href="https://wcsng.ucsd.edu/wireless-sensing.html">
    <span class="research-card__icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="1.6"/><path d="M16.2 7.8a6 6 0 0 1 0 8.4M7.8 16.2a6 6 0 0 1 0-8.4M19.1 4.9a10 10 0 0 1 0 14.2M4.9 19.1a10 10 0 0 1 0-14.2"/></svg></span>
    <span class="research-card__title">Wireless Sensing</span>
    <span class="research-card__desc">CM-accurate localization across WiFi, UWB, BLE &amp; 5G</span>
  </a>
  <a class="research-card" href="https://wcsng.ucsd.edu/communication.html">
    <span class="research-card__icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round"><line x1="12" y1="10" x2="12" y2="21"/><path d="M9 21h6"/><path d="M7.6 8.4a4 4 0 0 1 8.8 0"/><path d="M5 6a7 7 0 0 1 14 0"/><circle cx="12" cy="9" r="1.3"/></svg></span>
    <span class="research-card__title">Towards 6G</span>
    <span class="research-card__desc">Sustainable massive MIMO &amp; real-time RAN intelligence</span>
  </a>
  <a class="research-card" href="https://wcsng.ucsd.edu/backscatter.html">
    <span class="research-card__icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round"><rect x="7" y="7" width="10" height="10" rx="1.5"/><path d="M9.5 3v2M14.5 3v2M9.5 19v2M14.5 19v2M3 9.5h2M3 14.5h2M19 9.5h2M19 14.5h2"/></svg></span>
    <span class="research-card__title">Ubiquitous IoT</span>
    <span class="research-card__desc">Ultra-low-power backscatter &amp; wireless power transfer</span>
  </a>
  <a class="research-card" href="https://wcsng.ucsd.edu/spectrum_sensing.html">
    <span class="research-card__icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round"><line x1="4" y1="20" x2="4" y2="14"/><line x1="9" y1="20" x2="9" y2="9"/><line x1="14" y1="20" x2="14" y2="4"/><line x1="19" y1="20" x2="19" y2="11"/></svg></span>
    <span class="research-card__title">Spectrum Sensing</span>
    <span class="research-card__desc">Sweeping 5 GHz of spectrum in a millisecond</span>
  </a>
  <a class="research-card" href="https://wcsng.ucsd.edu/vehicular.html">
    <span class="research-card__icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round"><path d="M3 13l2-5.2A2 2 0 0 1 6.9 6.5h10.2A2 2 0 0 1 19 7.8L21 13"/><path d="M3 13h18v4H4a1 1 0 0 1-1-1z"/><circle cx="7.5" cy="17.5" r="1.5"/><circle cx="16.5" cy="17.5" r="1.5"/></svg></span>
    <span class="research-card__title">Autonomous Vehicles</span>
    <span class="research-card__desc">Radar perception &amp; sensor fusion in bad weather</span>
  </a>
  <a class="research-card" href="https://wcsng.ucsd.edu/privacy.html">
    <span class="research-card__icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round"><path d="M12 3l7 3v5c0 4.5-3 7.6-7 9-4-1.4-7-4.5-7-9V6z"/><path d="M9.2 12l2 2 3.6-4"/></svg></span>
    <span class="research-card__title">Security &amp; Privacy</span>
    <span class="research-card__desc">Exposing &amp; defending RF systems from attacks</span>
  </a>
</div>



<!--
### Wireless Sensing
We create cutting-edge sensing solutions to enhance the capabilities of robots and autonomous devices, including flexible robots and privacy-preserving localization techniques. We are pioneering next-generation localization systems for Industrial IoT 4.0, enabling safer and more efficient smart manufacturing, warehouse management, and private 5G networks. We have developed autonomous robots and deep-learning powered localization systems that enable easy-to-deploy location services, even in complex environments.

### Towards xG
We are overcoming the limitations of traditional mmWave connectivity to enable reliable, high-throughput communication for indoor and outdoor scenarios. We create new Massive MIMO architecture that is sustainable. We develop real-time RAN Intelligent Controller and AI algorithms for network optimization.



### Communication and Power Delivery for IoT Devices
We are developing ultra-low power WiFi communication and wireless power transfer technologies to dramatically improve the energy efficiency and connectivity of IoT devices. We build a low-power, long-range, and reliable backscatter systems. We improve the range of WiFi with smart surface deployment. We developed a universal sensing platform using wireless, batteryless RFID and flexible sensors.

### Spectrum Sensing
Sweep-Sensing 5 GHz in a milli-second: Sensing the entire spectrum with high-resolution and dynamic range in time, frequency, and space (wide-area) in cost efficiency is a need of the day and near-impossible. Such sensing would enable highly efficient communication, securing our communications and preserving our privacy.
Shipping the sensed spectrum data: Accurate spectrum sensing with just a single sensor generates 800 Mbps, which cannot be shipped in real-time. Enabling >1000x compression and shipping only necessary information.

### Autonomous Vehicles
We developed perception in bad-weather using Radar-based sensors and Enabled Cameras to perceive the depth in a sensor fusion approach.

### Security and Privacy
We expose the vulnerability of RF communication and sensing systems (e.g., spoofing automotive radars, jamming communication radios ) and prepare appropriate counter-measures to protect communication and sensing systems.

-->


<!-- #### Our Approach
We embrace a holistic approach to research, combining fundamental theoretical exploration with practical implementation. We design and build prototypes to test and refine our concepts, ensuring our solutions are not only innovative but also practical and deployable in the real world. -->


