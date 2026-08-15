---
layout: publication
title: "SweepSense: Sensing 5 GHz in 5 Milliseconds with Low-cost Radios"
short_title: "SweepSense"
tags: Spectrum-Sensing Communications
cover: /assets/images/pubpic/sweepsense.png
authors: "Yeswanth Guddeti, Raghav Subbaraman, Moein Khazraee, Aaron Schulman, Dinesh Bharadia"
author_list:
    - name: Yeswanth Guddeti
      url: https://www.linkedin.com/in/yeswanth-reddy/
      email: yguddeti@ucsd.edu
    - name: Raghav Subbaraman # url field is optional
      url: https://rsubbaraman.github.io
      email: rsubbara@ucsd.edu
    - name: Moein Khazraee
      url: https://www.moeinkhazraee.com/
      email: moein@csail.mit.edu
    - name: Aaron Schulman
      url: https://cseweb.ucsd.edu/~schulman/
      email: schulman@cs.ucsd.edu
    - name: Dinesh Bharadia
      url: https://dineshb-ucsd.github.io/
      email: dineshb@ucsd.edu
eqcon: false
conference: "NSDI 2019"
conference_site: https://www.usenix.org/conference/nsdi19
paper: https://www.usenix.org/system/files/nsdi19-guddeti.pdf
slides: https://www.usenix.org/sites/default/files/conference/protected-files/nsdi19_slides_guddeti.pdf
github: https://github.com/ucsdsysnet/SweepSense/tree/master
video: https://www.youtube.com/embed/87HCFut56E8
#https://www.usenix.org/conference/nsdi19/presentation/guddeti
description:
    - title: Abstract
      image: /assets/images/pubpic/sweepsense.png
      text: "Wireless transmissions occur intermittently across the entire spectrum. For example, WiFi and Bluetooth devices transmit frames across the 100 MHz-wide 2.4 GHz band, and LTE devices transmit frames between 700 MHz and 3.7 GHz. Today, only high-cost radios can sense across the spectrum with sufficient temporal resolution to observe these individual transmissions. We present “SweepSense”, a low-cost radio architecture that senses the entire spectrum with high-temporal resolution by rapidly sweeping across it. Sweeping introduces new challenges for spectrum sensing: SweepSense radios only capture a small number of distorted samples of transmissions. To overcome this challenge, we correct the distortion with self-generated calibration data, and classify the protocol that originated each transmission with only a fraction of the transmission’s samples. We demonstrate that SweepSense can accurately identify four protocols transmitting simultaneously in the 2.4 GHz unlicensed band. We also demonstrate that it can simultaneously monitor the load of several LTE base stations operating in disjoint bands."
    - title: Open source artifact
      text: "SweepSense is implemented on a USRP N210 with a modified CBX daughtercard. The harware modification unlocks the VCO. The VCO is fed with a sawtooth voltage waveform from the USRP N210 FPGA. The output of the VCO is used to drive a mixer and implement the sweeping radio. Downconverting while sweeping introduces distortions in the signal, which we remove using an 'unsweeping' process and is discussed in the paper. Detailed description of the hardware modifications, FPGA image, and unsweeping code is available at https://github.com/ucsdsysnet/SweepSense/. This work won the Qualcomm Innovation Fellowship 2019!"
osd: "We propose a new receiver architecture for spectrum sensing radios where sampling is done along with quick sweeping of the center frequency. This is motivated by the intuition that a sweeping radio may miss lesser transmissions than one that sequentially tunes to different bands. We implement this using an open loop VCO fed with a sawtooth voltage waveform. The output of the VCO is used to drive a mixer and implement the sweeping radio. The architecture has been prototyped on a USRP N210 with a CBX daughterboard. Downconverting while sweeping introduces distortions in the signal, which we remove using an 'unsweeping' process and is discussed in the paper."
citation:
    - text: "Guddeti, Y., Subbaraman, R., Khazraee, M., Schulman, A., & Bharadia, D. (2019). SweepSense: Sensing 5 GHz in 5 Milliseconds with Low-cost Radios. In 16th USENIX Symposium on Networked Systems Design and Implementation (NSDI 19) (pp. 317-330)."
      biburl: nope
      bibtex: "@inproceedings{guddeti2019sweepsense,
  title=SweepSense: Sensing 5 GHz in 5 Milliseconds with Low-cost Radios},
  author={Guddeti, Yeswanth and Subbaraman, Raghav and Khazraee, Moein and Schulman, Aaron and Bharadia, Dinesh},
  booktitle={16th USENIX Symposium on Networked Systems Design and Implementation (NSDI 19)},
  pages={317--330},
  year={2019}
}"
---

