---
layout: research
permalink: spectrum_sensing
heading: Spectrum Sensing
pubtag: Spectrum-Sensing
carousels:
  - images:
    - image: /assets/images/spectrumsensing/pcb_only.jpg
    - image: /assets/images/spectrumsensing/spectrogram.jpg
    - image: /assets/images/spectrumsensing/raghav_sensing.jpg
    - image: /assets/images/pubpic/spectrum_sensing/searchlight.png
people:
  - Dinesh Bharadia
  - Raghav Subbaraman
  - Richard Bell
  - Hadi Givehchian
  - Kevin Mills
  - Raini Wu
  - Sreevatsank Kadaveru
sponsors:
  - name: NSF(-SII-2232481)
    picture: /assets/images/sponsors/nsf.svg
  - name: IARPA SCISRS
    picture: /assets/images/sponsors/scisrs.png
---

Spectrum usage has evolved over many decades, shaped by both state-of-the art technological progress and the intended use cases. Over the last few years, usage of wireless spectum has become increasingly fragmented and congested. The rapid adoption of new and complex protocols such as LTE and 5G-NR with along with existing legacy systems like FM Radio and Defense wireless deployments have uncovered challenges in spectrum allocation, regulation and monitoring. Adoption of spectrum sharing standards such as CBRS signal a future where
the usage of wireless spectrum needs to be strictly monitored and regulated to maximize utilization while being secure and tolerant to faults. To this end, there is a need of a sensing entity to extract valuable information from the wireless spectrum for a variety of use cases.

An ideal spectrum sensing entity would have an oracular view of spectrum usage. However, implementing such a system is challenging due to the highly dynamic nature of spectrum usage. These dynamics present themselves in the time domain, as fleeting signals of the order of ms, and in the frequency domain where a multitude of signals and protocols are
crammed into ever-more-congested bandwidth. Added to this, the nature of usage varies from place to place, depending on density of users, terrain and even weather. Our current thrust in this direction is in **designing and building novel spectrum sensing architectures that can scale to next-generation wireless networks** and their requirements.

Our architecture **SweepSense**, combines sweep-frequency downconversion with simultaneous sampling and achieves **large bandwidth, high-time resolution** sensing. Through our work, we show that **SweepSense** can be implemented on existing radios with minimal cost overheads, and provides promising performance over state-of-art.

<div>
  <a><img src="/assets/images/pubpic/spectrum_sensing/sweepsense_spectrogram.png" width="75%" style="float: center" ></a>
  <br>
  <a href="https://github.com/ucsdsysnet/SweepSense/tree/master"> SweepSense spectrogram of the 2.4 GHz ISM band showing WiFi and Bluetooth transmissions. 100 MHz bandwidth available with only a 25 MSps radio. </a>
</div>

We also investigate orchestration, networking and data management of spectrum sensor deployments. A sensor that can observe large amounts of spectrum will also generate large amounts of data that comes with the cost of backhaul and storage capacity. We show that **powerful spectrum sensors can be deployed on low bandwidth backhaul by
exploiting the sparsity in the spectrum to compress the information captured**. Our algorithm, **SparSDR**, uses **Overlapped Fourier Transform based compression to allow sparsity proportional scaling of backhaul bandwidth**.
