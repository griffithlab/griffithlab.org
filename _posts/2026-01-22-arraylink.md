---
layout: publication
title: "Satellites are closer than you think: A near field MIMO approach for Ground stations (ArrayLink)"
short_title: "ArrayLink"
tags: Communications
cover:  /assets/images/arraylink/arraylink_cover.png
authors: "Rohith Reddy Vennam, Luke Wilson, Ish Kumar Jain, and Dinesh Bharadia"
# needed for publications/
author_list:
    - name: Rohith Reddy Vennam
      url: https://acsweb.ucsd.edu/~rvennam/
      email: rvennam@ucsd.edu
    - name: Luke Wilson
      email: l5wilson@ucsd.edu
    - name: Ish Kumar Jain # url field is optional
      url: https://ishjain.github.io/
      email: ikjain@ucsd.edu
    - name: Dinesh Bharadia
      url: https://dineshb-ucsd.github.io/
      email: dineshb@ucsd.edu
eqcon: false #Put true if you want equal contrribution on pub page
conference: "IEEE INFOCOM 2026 [Submitted: July 2025, Accepted: Dec 2025]"
conference_site: https://infocom2026.ieee-infocom.org/
paper: /files/arraylink_paper.pdf
slides: /files/arraylink_slides.pdf
video: https://www.youtube.com/embed/HJBeDMcrmWs
github: https://github.com/ucsdwcsng/ArrayLink
video_str: Demo
miscs:  # whatever you need to add Extra
    - content_type: Poster
      content_url: /files/arraylink_poster.pdf # hat tip: do not use tabs for idnentation, yaml doesnt support it
    # - content_type: Demo
    #   content_url: https://youtu.be/HJBeDMcrmWs # hat tip: do not use tabs for idnentation, yaml doesnt support it

description:  
    - text: "The rapid growth of low Earth orbit (LEO) satellite constellations has revolutionized broadband access, Earth observation, and direct-to-device connectivity. However, the expansion of ground station infrastructure has not kept pace, creating a critical bottleneck in satellite-to-ground backhaul capacity. Traditional parabolic dish antennas, though effective for geostationary (GEO) satellites, are ill-suited for dense, fast-moving LEO networks due to mechanical steering delays and their inability to track multiple satellites simultaneously. Phased array antennas offer electronically steerable beams and multi-satellite support. However, their integration into ground stations is limited by the high cost, hardware issues, and complexity of achieving sufficient antenna gain."
      image: /assets/images/arraylink/arraylink_motivation.png
      image_width: 800 # px (check this image resolution and how it populate on webpage)

    - text: "We introduce ArrayLink, a distributed phased array architecture that coherently combines multiple small, commercially available panels to achieve high-gain beamforming and unlock line-of-sight MIMO spatial multiplexing with minimal additional capital expenditure. By spacing 16 32x32 panels across a kilometer‐scale aperture, ArrayLink enters the radiative near-field, focusing energy in both angle and range while supporting up to four simultaneous spatial streams on a single feeder link. Through rigorous theoretical analysis, detailed 2D beam pattern simulations and real-world hardware experiments, we show that ArrayLink (i) achieves dish-class gain exceeding that of a 1.47 m reflector, (ii) maintains four parallel streams at ranges of hundreds of kilometers (falling to two beyond 2000 km), and (iii) exhibits tight agreement across theory, simulation, and experiment with minimal variance. These findings pave the way for a practical and scalable approach to boosting satellite backhaul capacity."
    #   image: /assets/images/mmsubarray/proposed_joint_satellite_5G.png
    #   image_width: 800 # px (check this image resolution and how it populate on webpage)
    # - text: "<p style='color: red;'>This website is still under construction. Full details will be available after August 3rd, 2024.</p>"
    #   image: /assets/images/mmsubarray/proposed_mmsubarray.pdf
    #   image_width: 800 # px (check this image resolution and how it populate on webpage)
# medias:
#     - type: Team Develops New “Attacker” Device to Improve Autonomous Car Safety
#       url: https://today.ucsd.edu/story/team-develops-new-attacker-device-to-improve-autonomous-car-safety
citation:
    - text: 'Rohith Reddy Vennam, Luke Wilson, Ish Kumar Jain, Dinesh Bharadia. "Satellites are Closer Than You Think: A Near-Field MIMO Approach for Ground Stations." In IEEE INFOCOM 2026-IEEE Conference on Computer Communications, IEEE, 2026.'
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
