---
layout: publication
title: "ForceSticker: Wireless, Batteryless, Thin & Flexible Force Sensors"
short_title: "ForceSticker"
tags: Backscatter
cover: /assets/images/force-sticker-UCSD-teaser.jpg
authors: "Agrim Gupta, Daegue Park, Shayaun Bashar, Cedric Girerd, Nagarjun Bhat, Siddhi Mundhra, Tania Morimoto, Dinesh Bharadia" # needed for publications/
author_list:
    - name: Agrim Gupta
      url: https://agrim9.github.io/
      email: agg003@ucsd.edu
    - name: Daegue Park # url field is optional
      email: d8park@ucsd.edu
    - name: Shayaun Bashar
      email:  sbashar@ucsd.edu
    - name: Cedric Girerd
      email:  cgirerd@ucsd.edu
    - name: Nagarjun Bhat
      email:  nbhat@ucsd.edu
    - name: Siddhi Mundhra
      email: siddhimundhra201105@gmail.com
    - name: Tania Morimoto
      email: tkmorimoto@ucsd.edu
    - name: Dinesh Bharadia
      url: https://dineshb-ucsd.github.io/
      email: dineshb@ucsd.edu
eqcon: false #Put true if you want equal contrribution on pub page
conference: "ACM IMWUT Vol. 7, No. 1, Article 13/ Ubicomp'23"
conference_site: https://www.ubicomp.org/ubicomp-iswc-2023/
paper: https://dl.acm.org/doi/abs/10.1145/3580793
video: https://www.youtube.com/embed/arSO7shzFT4?si=hygEYTRO50bvhs0b
video_str: 30 sec. teaser
miscs:  # whatever you need to add Extra
    - content_type: Ubicomp Talk
      content_url: https://www.youtube.com/embed/0ezsSe8hJb8 # hat tip: do not use tabs for idnentation, yaml doesnt support it
    - content_type: Medium Blog
      content_url: https://medium.com/ubicomp-iswc-2023/forcesticker-wireless-batteryless-thin-flexible-force-sensors-796294399c91
description: # all combinations are possible: (title+text+image, title+image, text+image etc), things will be populated in orders
    - text: "Any two objects in contact with each other exert a force that could be simply due to gravity or mechanical contact, such as any ubiquitous object exerting weight on a platform or the contact between two bones at our knee joints. The most ideal way of capturing these contact forces is to have a flexible force sensor which can conform well to the contact surface. Further, the sensor should be thin enough to not affect the contact physics between the two objects. The two hindrances to achieve this thin form-factor are batteries, and wires."
      image: /assets/images/force-sticker-banner.png
      image_width: 800 # px
    - title: How to make force-sensors in sicker form factor? # if you want a title to precede the text
      text: "In the force-sticker paper, we show that the force-information can be piggybacked over existing RFIDs, with no additional power and requirement of any interfacing electronics, by simply interfacing a force sensitive capacitor to the RFID. Hence, the designed force-stickers consist of a thin parallel-plate capacitor, smaller than a rice grain that deforms under applied force, and is interfaced in between the RFID squiggly antenna and the RFID IC. But, how does the force-information from the capacitor get communicated via the RFID IC, without requiring any more electronics and power? The secret sauce lies in the capacitor-design, choosing the correct polymer and correct dimensions! For more technical details, please read our paper."
      image: /assets/images/force-sticker-design.png
      image_width: 800 # px
medias:
    - type: UCSD News
      url: https://today.ucsd.edu/story/wireless-battery-free-electronic-stickers-gauge-forces-between-touching-objects
    - type: Hackster.io
      url: https://www.hackster.io/news/use-the-forcesticker-76d0a9137262
    - type: Products of Tomorrow, by tech-briefs
      url: https://www.techbriefs.com/component/content/article/tb/pub/features/articles/49613

citation:
    - text: "Gupta, Agrim, et al. \"ForceSticker: Wireless, Batteryless, Thin & Flexible Force Sensors.\" Proceedings of the ACM on Interactive, Mobile, Wearable and Ubiquitous Technologies 7.1 (2023): 1-32."
      thumbnail: /assets/images/forcesticker-thumbnail.png
      bibtex: "
      <pre xml:space=\"preserve\">
 @article{gupta2023forcesticker,

  title={ForceSticker: Wireless, Batteryless, Thin & Flexible Force Sensors},

  author={Gupta, Agrim and Park, Daegue and Bashar, Shayaun and Girerd, Cedric and Bhat, Nagarjun and Mundhra, Siddhi and Morimoto, Tania K and Bharadia, Dinesh},

  journal={Proceedings of the ACM on Interactive, Mobile, Wearable and Ubiquitous Technologies},

  volume={7},
  number={1},
  pages={1--32},
  year={2023},

  publisher={ACM New York, NY, USA}
}
</pre>
"
      links:
      - type: PDF
        url: /files/forcesticker.pdf
      - type: ACM DL
        url: https://dl.acm.org/doi/abs/10.1145/3580793
      - type: Arxiv
        url: https://arxiv.org/abs/2209.09217
      - type: Slides
        url: /files/forcesticker_slides.pdf
---


