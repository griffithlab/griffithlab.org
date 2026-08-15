---
layout: publication
title: "High Resolution Spectral Analysis and Signal Segregation Using the Polyphase Channelizer"
short_title: "Channogram"
tags: Spectrum-Sensing
cover: /assets/images/searchlight.png
authors: "Richard Bell, Radhika Mathuria, Fred Harris, Peter Gerstoft, Dinesh Bharadia" # needed for publications/
author_list:
    - name: Richard Bell
      email: rcbell@ucsd.edu
    - name: Radhika Mathuria # url field is optional
      email: rmathuria@ucsd.edu
    - name: Fred Harris
      email:  fjharris@ucsd.edu
    - name: Peter Gerstoft
      email:  pgerstoft@ucsd.edu
    - name: Dinesh Bharadia
      url: https://dineshb-ucsd.github.io/
      email: dineshb@ucsd.edu
eqcon: false #Put true if you want equal contrribution on pub page
conference: "2022 56th Asilomar Conference on Signals, Systems, and Computers"
conference_site: https://www.asilomarsscconf.org/
paper: https://ieeexplore.ieee.org/abstract/document/10051908
cover: /assets/images/channelizer.png
miscs:
   - content_type: Talk Slides
     content_url: /files/RBell_Asilomar_2022_Slides.pdf
   - content_type: Poster
     content_url: /files/RBell_Asilomar_2022_Poster.pdf
description:
  - title: "Abstract"
    text: "The windowed fast Fourier transform (FFT) is the ubiquitous tool for spectral analysis because it is fast and easy to use. In this paper we will show how the polyphase channelizer can replace the FFT for spectral analysis and produce estimates of the power spectral density (PSD) and the short-time Fourier transform (STFT) spectrogram. We refer to the polyphase channelizer equivalents of these estimates respectively as the channelizer power spectral density (cPSD) and the channogram. It will be shown that the spectral resolution of the cPSD and channogram improves upon the well-established FFT-based estimators for a given FFT length while introducing minimal processing overhead. We will then discuss Parseval's theorem equivalent for the polyphase channelizer. Finally, we will show how the polyphase channelizer leads to straightforward signal segregation and inversion back to time domain when signals of random and unknown center frequencies and bandwidth are encountered. This is an important enabler for real-time radio frequency (RF) signal classification using machine learning algorithms."
--- 
