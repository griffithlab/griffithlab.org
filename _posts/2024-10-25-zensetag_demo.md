---
layout: publication
title : "Demo - ZenseTag: Real-Time Passive RFID Sensing"
short_title: "ZenseTag-Demo"
tags: Backscatter
cover: /assets/images/zensetag/zeta-demo-overview.jpg
conference: "ACM MobiCom'24 Demo"
conference_site: https://www.sigmobile.org/mobicom/2024/
authors: "Ishan Bansal, Nagarjun Bhat, Agrim Gupta, Harine Govindarajan, Dinesh Bharadia"
author_list:
    - name: Ishan Bansal
      url: https://b-ishan.github.io/
      email: isbansal@ucsd.edu
    - name: Nagarjun Bhat
      email: nbhat@ucsd.edu
    - name: Agrim Gupta
      url: https://agrim9.github.io
      email: agg003@ucsd.edu
    - name: Harine Govindarajan
      email: hgovindarajan@ucsd.edu
    - name: Dinesh Bharadia
      url: https://dineshb-ucsd.github.io/
      email: dineshb@ucsd.edu
paper: https://dl.acm.org/doi/pdf/10.1145/3636534.3698850
video: https://www.youtube.com/embed/7mvNrl5CLU8
video_str: Demonstration of ZenseTag
miscs:  # whatever you need to add Extra
    - content_type: Project Webpage
      content_url: https://wcsng.ucsd.edu/zensetag
    - content_type: Digital Library
      content_url:  https://dl.acm.org/doi/10.1145/3636534.3698850
    
description: # all combinations are possible: (title+text+image, title+image, text+image etc), things will be populated in orders
    - title: Winner of Best Demo - Runner Up at MobiCom 2024 
    - title: Applications for ZenseTag
      text: "Sensing enables interaction with and quantification of the natural world, yet the adoption of sensing systems is limited due to battery dependence, complex interfaces, energy-harvesting needs, and readout latency. To address these issues, we introduce ZenseTag—a miniaturized, sticker-like platform that interfaces commercial sensors directly with COTS RFID tags. ZenseTag leverages the impedance response of these sensors to stimuli at Radio Frequencies, specifically tuned to the UHF RFID band. It integrates reliable differential analog sensing hardware with robust software for accurate, low-latency readouts, even amidst multipath effects. \nFor demonstration, a PC will connect to an Impinj RF reader, which is linked to a high-gain antenna positioned near the trialing ZenseTag. The tag consists of a ZenseTag PCB interfaced with a sticker-like antenna and two RF ICs, with one IC connected to a sensor for specific applications. For example, testing the soil moisture tag will require a pot of dry soil, while the light sensor will need an external light source. \nTo showcase ZenseTag's capabilities in detecting soil moisture, force, and luminosity, we will vary the soil moisture by adding water to the pot, press and release the force-sensitive resistor (FSR), and cover/uncover the photodiode. The response for each application will be displayed on a GUI developed for this purpose. Additionally, the demonstration will highlight ZenseTag’s robustness against obstacles and the movement of people around the sensors. We have thoroughly evaluated all three sensors: soil moisture, force, and light."    
      image: /assets/images/zensetag/zeta-apps.jpg
      image_width: 800 # px  

citation:
    - text: "Ishan Bansal, Nagarjun Bhat, Agrim Gupta, Harine Govindarajan, and Dinesh Bharadia. 2024. ZenseTag: An RFID assisted Twin-Tag Single Antenna COTS Sensor Interface. In Proceedings of the 30th Annual International Conference on Mobile Computing and Networking (ACM MobiCom '24). Association for Computing Machinery, New York, NY, USA, 1757–1759. https://doi.org/10.1145/3636534.3698850"
      bibtex: "
      <pre xml:space=\"preserve\">
      @inproceedings{10.1145/3636534.3698850,
      author = {Bansal, Ishan and Bhat, Nagarjun and Gupta, Agrim and Govindarajan, Harine and Bharadia, Dinesh},
      title = {ZenseTag: An RFID assisted Twin-Tag Single Antenna COTS Sensor Interface},
      year = {2024},
      isbn = {9798400704895},
      publisher = {Association for Computing Machinery},
      address = {New York, NY, USA},
      url = {https://doi.org/10.1145/3636534.3698850},
      doi = {10.1145/3636534.3698850},
      abstract = {Sensing allows us to interact with and quantify the natural world. Despite the advancements in sensor versatility, sensing systems still suffer from limited adoption due to their dependence on batteries, complex interfaces, energy-harvesting modules, and readout latency. To address these challenges, we present ZenseTag --- a miniaturized, sticker-like platform that can interface commercial sensors directly with COTS RFID tags. ZenseTag exploits the impedance response of COTS sensors to the measured stimulus at Radio Frequencies, tuned to the UHF RFID band. It combines reliable hardware realization of differential analog sensing with robust software for accurate, low-latency sensor readouts, even in the presence of multipath effects.},
      booktitle = {Proceedings of the 30th Annual International Conference on Mobile Computing and Networking},
      pages = {1757–1759},
      numpages = {3},
      location = {Washington D.C., DC, USA},
      series = {ACM MobiCom '24}
      }
      </pre>
      "
---