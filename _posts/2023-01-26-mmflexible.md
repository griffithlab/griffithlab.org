---
layout: publication
title: "mmFlexible: Flexible Directional Frequency Multiplexing for Multi-user mmWave Networks"
short_title: "mmFlexible"
tags: Communications
cover: /assets/images/pubpic/dpa.png
authors: "Ish Kumar Jain, Rohith Reddy Vennam, Raghav Subbaraman, and Dinesh Bharadia"
# needed for publications/
author_list:

    - name: Ish Kumar Jain # url field is optional
      url: https://ishjain.github.io/
      email: ikjain@ucsd.edu
    - name: Rohith Reddy Vennam
      url: https://acsweb.ucsd.edu/~rvennam/
      email: rvennam@ucsd.edu
    - name: Raghav Subbaraman
      url: https://rsubbaraman.github.io/
      email: rsubbara@ucsd.edu
    - name: Dinesh Bharadia
      url: https://dineshb-ucsd.github.io/
      email: dineshb@ucsd.edu
eqcon: false #Put true if you want equal contrribution on pub page
conference: "Infocom 2023 [Submitted: July 2022, Accepted: Dec 2022, Presented: May 2023]"
conference_site: https://infocom2023.ieee-infocom.org/program
paper: /files/mmflexible.pdf
video: https://www.youtube.com/embed/Xo1JbZHfBCY
video_str: Video
slides: /files/slides_mmflexible.pdf
github: https://github.com/ucsdwcsng/dpa
dataset: https://github.com/ucsdwcsng/mMobile
miscs:  # whatever you need to add Extra
    - content_type: Poster
      content_url: /files/dpa_hotmobile_poster.pdf # hat tip: do not use tabs for idnentation, yaml doesnt support it
    - content_type: Dataset
      content_url: https://github.com/ucsdwcsng/mMobile
medias: 
    - type: UCSD News
      url: https://today.ucsd.edu/story/uc-san-diego-researchers-present-new-wireless-system-for-greater-5g-access
    - type: TechXplore
      url: https://techxplore.com/news/2023-05-wireless-greater-5g-access.html
    - type: ScienceDaily
      url: https://www.sciencedaily.com/releases/2023/05/230518120909.htm
    - type: InceptiveMind
      url: https://www.inceptivemind.com/researchers-introduce-new-wireless-system-greater-5g-access/30839/
    - type: NewsWise
      url: https://www.newswise.com/articles/this-technology-could-bring-the-fastest-version-of-5g-to-your-home-and-workplace
description: # all combinations are possible: (title+text+image, title+image, text+image etc), things will be populated in orders
    - title: "How multi-beams support multiple users without loosing power per-beam"
      text: "Modern mmWave systems have limited scalability due to inflexibility in performing frequency multiplexing. All the frequency components in the signal are beamformed to one direction via pencil beams and cannot be streamed to other user directions. We present a new flexible mmWave system called mmFlexible that enables flexible directional frequency multiplexing, where different frequency components of the mmWave signal are beamformed in multiple arbitrary directions with the same pencil beam. Our system makes two key contributions: (1) We propose a novel mmWave front-end architecture called a delay-phased array that uses a variable delay and variable phase element to create the desired frequency-direction response. (2) We propose a novel algorithm called FSDA (Frequency-space to delay-antenna) to estimate delay and phase values for the real-time operation of the delay-phased array. Through evaluations with mmWave channel traces, we show that mmFlexible provides a 60-150% reduction in worst-case latency compared to baselines."
      image: /assets/images/respic/5G/dpa_hotmobile.png
      image_width: 800 # px
    - title: "Delay-Phased Array Architecture Details"
      text: "DPA architecture consists of programmable delay and programmable phase element per antenna with a single-RF chain. These elements can be programmed together to create flexible beam responses that are not possible by either of the two elements alone. Our insight is to control two knobs: delays τn and phase Φn to get the desired response."
      image: /assets/images/respic/5G/dpa_architecture.png
      image_width: 800 # px
    # - title: "mmFlexible End-End Design Overview"
    #   text: "Implementation overview for mmFlexible with four main components: Data traffic generator, Fast beam scan angle estimation, a scheduler, and our FSDA algorithm."
    #   image: /assets/images/respic/5G/mmreliable_overview.png
    #   image_width: 800 # px
    - title: "Best Poster Runner-up Award at Hotmobile'23"
      text: ""
      image: /assets/images/respic/5G/dpa_hotmobile_poster.png
      image_width: 800 # px
# press:
#   date: "June 15, 2023"
#   url: https://today.ucsd.edu/story/uc-san-diego-researchers-present-new-wireless-system-for-greater-5g-access
#   headline: "UC San Diego Researchers Present New Wireless System for Greater 5G Access"
# press2:
#   date: "May 18, 2023"
#   url: https://techxplore.com/news/2023-05-wireless-greater-5g-access.html
#   headline: "Researchers Present New Wireless System for Greater 5G Access"
# press3:
#   date: "May 18, 2023"
#   url: https://www.sciencedaily.com/releases/2023/05/230518120909.htm
#   headline: "New Wireless System for Greater 5G Access"
# press4:
#   date: "May 22, 2023"
#   url: https://www.inceptivemind.com/researchers-introduce-new-wireless-system-greater-5g-access/30839/
#   headline: "Researchers Introduce New Wireless System for Greater 5G Access"
# poster: files/dpa_hotmobile.pdf
# dataset: https://github.com/ucsdwcsng/mMobile
osd: "Our dataset which consists of multiple indoor and outdoor experiments for up to 30 m gNB-UE link. In each experiment, we fixed the location of the gNB and move the UE with an increment of roughly one degrees. The table above specifies the direction of user movement with respect to gNB-UE link, distance resolution, and the number of user locations for which we conduct channel measurements. Outdoor 30 m data also contains blockage between 3.9 m to 4.8 m. At each location, we scan the transmission beam and collect data for each beam. By doing so, we can get the full OFDM channels for different locations along the moving trajectory with all the beam angles. Moreover, we use 240 kHz subcarrier spacing, which is consistent with the 5G NR numerology at FR2, so the data we collect will be a true reflection of what a 5G UE will see."
---

