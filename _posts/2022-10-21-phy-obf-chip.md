---
layout: publication
title: "Protecting Bluetooth User Privacy Through Obfuscation of Carrier Frequency Offset"
short_title: "PHY Obfuscation Chip"
tags: Security
cover: /assets/images/pubpic/ble-obf-chip.png
authors: "Ali Nikoofard, Hadi Givehchian, Nishant Bhaskar, Aaron Schulman, Dinesh Bharadia, Patrick P. Mercier"
# needed for /publications/
author_list:
    - name: Ali Nikoofard
    - name: Hadi Givehchian
    - name: Nishant Bhaskar
    - name: Aaron Schulman
    - name: Dinesh Bharadia
    - name: Patrick Mercier
eqcon: false #Put true if you want equal contrribution on pub page
conference: "IEEE TCAS II 2023"
paper: /files/phy-obf-chip.pdf
description:
    - text: "This brief presents the analysis, design, and measurement results of an integrated circuit designed to prevent tracking the location of Bluetooth Low Energy (BLE) transmitters. Conventional BLE transmitters have unique RF fingerprints due to variation-induced imperfections in the underlying circuits.
Coupled with BLE’s wide adoption in mobile devices and tendency to transmit continuously, BLE has become a significant threat to the location privacy of individual users. The primary source of this privacy threat is that BLE transmitters have a unique Carrier Frequency Offset (CFO) that can be easily fingerprinted by passive adversaries. To combat this, a test chip is developed that pseudo-randomly changes its CFO by switching in a binary-weighted set of semi-identical MIM capacitors into the tank of an LC voltage controlled oscillator, all while maintaining compatibility with BLE standard specifications. Measurement results reveal that privacy preservation can be improved from only a few seconds with a conventional design, to over a day with the proposed design. "
---
