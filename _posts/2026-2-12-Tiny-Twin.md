---
layout: publication
title: "Tiny-Twin: A CPU-Native Full-stack Digital Twin for NextG Cellular Networks"
short_title: "Tiny-Twin"
tags: Networking, Systems
cover: /assets/images/tinytwin/tinytwin_intro_tt.png
authors: "Ali Mamaghani, Ushasi Ghosh, Ish Kumar Jain, Srinivas Shakkottai, Dinesh Bharadia"
disp_cover: "False"
# needed for publications/
author_list:
    - name: Ali Mamaghani
      url: https://www.linkedin.com/in/ali-mamaghani/
      email: amamaghani@ucsd.edu
    - name: Ushasi Ghosh # url field is optional
      url: https://ushasigh.github.io/
      email: ughosh@ucsd.edu
    - name: Ish Kumar Jain # url field is optional
      email: ikjain@ucsd.edu
    - name: Srinivas Shakkottai # url field is optional
      email: sshakkot@tamu.edu
    - name: Dinesh Bharadia
      url: https://dineshb-ucsd.github.io/
      email: dineshb@ucsd.edu
eqcon: false #Put true if you want equal contrribution on pub page
conference: "IEEE DySPAN 2026"
conference_site: https://dyspan2026.ieee-dyspan.org/
paper: /files/TinyTwin_DySpan.pdf
# slides: /files/mmsubarray_slides.pdf
# video: https://www.youtube.com/embed/uGWcX8MJM4Y
#github: https://github.com/ucsdwcsng/ArrayLink
# video_str: 1 min teaser
# miscs: # additional items
#     - content_type: Slides
#       content_url: https://wcsng.ucsd.edu/files/mmspoof_slides.pdf
description:  
    - text: "NextG cellular networks continue to grow in architectural complexity, particularly with the rise of flexible functional splits—techniques that partition the protocol stack between centralized units (CUs), distributed units (DUs), and remote radio units (RUs). These systems span heterogeneous deployments including millimeter-wave, sub-6 GHz, and satellite links, each with distinct characteristics and performance requirements. Developing, testing, and debugging such intricate systems is challenging and requires high-fidelity digital twins that can accurately emulate network behavior at scale. However, existing simulation solutions have fundamental limitations: many rely on specialized hardware accelerators that are expensive and unavailable to most researchers, while others provide only limited fidelity or cannot model the full protocol stack. This gap between simulation accessibility and fidelity has become a significant bottleneck for nextG network innovation and testing."

      image: /assets/images/tinytwin/fig3.png
      image_width: 800 # px (check this image resolution and how it populate on webpage)


    - text: "Tiny-Twin addresses these challenges head-on by providing a CPU-native, full-stack digital twin platform purpose-built for NextG cellular networks. Our key innovation is enabling accurate, full-stack simulation of complete network protocols—from physical layer through MAC and RLC to higher layers—while running efficiently on standard computing hardware without specialized accelerators. Tiny-Twin supports multiple functional splits (including split-7.2 and split-8), diverse network topologies, and heterogeneous deployment scenarios. The system is architected to handle realistic traffic patterns, mobility events, and channel conditions while maintaining simulation fidelity. Our extensive evaluation on a real-world O-RAN compliant testbed demonstrates that Tiny-Twin achieves near real-time simulation performance across diverse scenarios—including multi-user environments, high-speed mobility, congestion conditions, and degraded signal scenarios—while accurately predicting network behavior. This makes Tiny-Twin an accessible, practical tool for researchers, developers, and operators to rapidly prototype, validate, and optimize algorithms before deployment to live networks."

   

    #   image: /assets/images/mmsubarray/proposed_joint_satellite_5G.png
    #   image_width: 800 # px (check this image resolution and how it populate on webpage)
    # - text: "<p style='color: red;'>This website is still under construction. Full details will be available after August 3rd, 2024.</p>"
    #   image: /assets/images/mmsubarray/proposed_mmsubarray.pdf
    #   image_width: 800 # px (check this image resolution and how it populate on webpage)
# medias:
#     - type: Team Develops New “Attacker” Device to Improve Autonomous Car Safety
#       url: https://today.ucsd.edu/story/team-develops-new-attacker-device-to-improve-autonomous-car-safety
citation:
    - text: 'Ali Mamaghani, Ushasi Ghosh, Ish Kumar Jain, Vicram Rajagopalan, Srinivas Shakkottai, Dinesh Bharadia. "Tiny-Twin: A CPU-Native Full-stack Digital Twin for NextG Cellular Networks." In 2026 IEEE International Symposium on Dynamic Spectrum Access Networks (DySPAN)'

    #   bib: bibtex-link
    #   bibtex: "
    #   <pre xml:space=\"preserve\">
    #     @article{
    #     vennam2024mmsubarray,
    #     title={mmSubArray: Enabling Joint Satellite and 5G Networks With Full-Spectrum Utilization in Millimeter-Wave Bands},
    #     author={Vennam, Rohith Reddy and Jain, Ish Kumar and Bhat, Nagarjun and M, Suriyaa and Bharadia, Dinesh},
    #     year={2024}
    #     organization={smallsat}
    #     }   
    #     }
    #     </pre>
    #     "
---
