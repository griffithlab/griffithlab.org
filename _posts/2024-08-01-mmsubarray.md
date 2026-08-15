---
layout: publication
title: "mmSubArray: Enabling Joint Satellite-Terrestrial Networks in Millimeter-wave Band"
short_title: "mmSubArray"
tags: Communications
cover:  /assets/images/mmsubarray/mmsubarray_cover.png
authors: "Rohith Reddy Vennam, Ish Kumar Jain, Nagarjun Bhat, Suriyaa Muruganandan and Dinesh Bharadia"
# needed for publications/
author_list:

    - name: Rohith Reddy Vennam
      url: https://acsweb.ucsd.edu/~rvennam/
      email: rvennam@ucsd.edu
    - name: Ish Kumar Jain # url field is optional
      url: https://ishjain.github.io/
      email: ikjain@ucsd.edu
    - name: Nagarjun Bhat
      url: https://www.linkedin.com/in/nagarjun-bhat
      email: nbhat@ucsd.edu
    - name: Suriyaa Muruganandan
    #   url: https://rsubbaraman.github.io/
      email: smm233@ucsd.edu
    - name: Luke Wilson
      email: l5wilson@ucsd.edu
    - name: Dinesh Bharadia
      url: https://dineshb-ucsd.github.io/
      email: dineshb@ucsd.edu
eqcon: false #Put true if you want equal contrribution on pub page
conference: "SmallSat 2024 [Submitted: June 2024, Presented: August 2024]"
conference_site: https://digitalcommons.usu.edu/smallsat/2024/all2024/41/
conference: "Small Satellite Conference 2024"
conference_site: https://smallsat.org/
paper: /files/mmsubarray.pdf
slides: /files/mmsubarray_slides.pdf
video: https://www.youtube.com/embed/uGWcX8MJM4Y
github: https://github.com/ucsdwcsng/mmSubArray
# video_str: 1 min teaser
# miscs: # additional items
#     - content_type: Slides
#       content_url: https://wcsng.ucsd.edu/files/mmspoof_slides.pdf
description:  
    - text: "The future of global connectivity depends on the seamless integration of satellite and terrestrial networks. Satellites and ground stations can now relay data between terrestrial base stations and remote devices, breaking coverage barriers and enabling global connectivity. However, current satellite-to-device architectures require ground stations with extensive fiber backhaul across difficult terrain, leading to high deployment costs, scalability challenges, and increased latency. To address this, we propose <b><i>JointNets: Joint satellite and terrestrial networks</i></b> by deploying ground stations within terrestrial coverage areas and using high-speed millimeter-wave links for backhaul. This eliminates the need for long optical fibers, simplifies ground station deployment, enhances scalability, and reduces latency."
      image: /assets/images/mmsubarray/proposed_joint_satellite_5G.png
      image_width: 800 # px (check this image resolution and how it populate on webpage)
      
    - text: "A major challenge in enabling <b><i>JointNets</i></b> is that ground station to satellite uplink transmissions (27.5 to 30.0 GHz) interfere with 5G links, leading to reduced efficiency or complete link failure. Current approches, such as distance, frequency, and direction separation, often cause spectrum inefficiency and coverage gaps. This paper introduces <b>mmSubArray: An array of sub-band phased arrays</b> using commercial off-the-shelf phased arrays to enable full-spectrum utilization and joint satellite-terrestrial networks. Our <b>mmSubArray</b> approach splits the bandwidth into overlapping and non-overlapping subbands, with different phased arrays beaming each subband at the base station." 
    # Additionally, we have open-sourced our Python simulator and hardware implementation source codes, providing valuable tools for industrial deployment and future research."
      image: /assets/images/mmsubarray/proposed_mmsubarray.png
      image_width: 800 # px (check this image resolution and how it populate on webpage)

    - text: "<b>Enabling Backhaul</b>: Using commercial phased arrays, we demonstrate that simultaneous mmWave transmissions in non-overlapping bands do not suffer significant degradation due to interference. <b>mmSubArray</b> employs one or more phased arrays to beam non-overlapping bands toward interfering ground stations. This allows <b>mmSubArray</b> to enable backhaul for ground stations or support users in interfering directions."
      image: /assets/images/mmsubarray/proposed_mmsubarray_backhaul.png
      image_width: 800 # px (check this image resolution and how it populate on webpage)

    - text: "<b>Enabling Coexistence</b>: In the overlapping band, we use the other phased arrays to serve users in non-interfering directions. However, simply beaming in other directions is not sufficient to enable coexistence in many scenarios. We may still have side lobes that fall along the interference directions, causing interference issues. Our key idea is to apply nulling along with beaming in other directions; together, these techniques suppress the interference power below the noise floor and enable coexistence in overlapping bands. Through extensive simulations and real-world measurements, we demonstrate the interference challenges and evaluate the efficacy of our approach." 
      image: /assets/images/mmsubarray/proposed_mmsubarray_coexistence.png
      image_width: 800 # px (check this image resolution and how it populate on webpage)
    # - text: "<p style='color: red;'>This website is still under construction. Full details will be available after August 3rd, 2024.</p>"
    #   image: /assets/images/mmsubarray/proposed_mmsubarray.pdf
    #   image_width: 800 # px (check this image resolution and how it populate on webpage)
# medias:
#     - type: Team Develops New “Attacker” Device to Improve Autonomous Car Safety
#       url: https://today.ucsd.edu/story/team-develops-new-attacker-device-to-improve-autonomous-car-safety
citation:
    - text: 'Vennam, Rohith Reddy, et al. "mmSubArray: Enabling Joint Satellite and 5G Networks With Full-Spectrum Utilization in Millimeter-Wave Bands." (2024).'
      bib: bibtex-link
      bibtex: "
      <pre xml:space=\"preserve\">
  @article{vennam2024mmsubarray,
  title={mmSubArray: Enabling Joint Satellite and 5G Networks With Full-Spectrum Utilization in Millimeter-Wave Bands},
  author={Vennam, Rohith Reddy and Jain, Ish Kumar and Bhat, Nagarjun and M, Suriyaa and Bharadia, Dinesh},
  year={2024}
  organization={smallsat}
}
}
</pre>
"
---
