---
layout: page
# title: "Adaptive Smart Surfaces for Wireless Channel Morphing to enable full multiplexing and multi-user gains"
permalink: smartsurfaces/
---


---
<style>
.justified-title {
    text-align: justify;
    text-justify: inter-word;
    display: flex;
    justify-content: space-between;
      font-size: 30px;
    width: 100%;
}

</style>

<h1 class="justified-title">
  Adaptive Smart Surfaces for Wireless Channel Morphing
</h1>


### Synopsis
<p style="font-size:20px"> Modern wireless standards promise to enable high throughput wireless links by using multiple antennas on the UEs and Basestations. However, the increase in the number of antennas do not lead to proportional increase in the achieved link througput. The primary reason for this is that the wireless channel do not have good enough multipath and is not well conditioned to support projected MIMO throughput. For example, closely spaced antennas on a user device have correlated wireless channels and do not allow for efficient spatial multiplexing of data streams. </p>

<!-- In today's wireless networks, the typical operating paradigm is to have different users occupying different frequency band such that they don't interfere. Multiple user MIMO (mu-MIMO) has been previously attempted to solve this problem and have multiple users communicating over a single frequency band. However, mu-MIMO implementations have never been robust since it requires favorable channel conditions not always guaranteed in real wireless channels. Typical reasons for this is that user locations being close to each other (Fig. 1) makes the channels correlated, and does not allow for efficient interference separations, as interference is almost indistinguishable from the intended users' signals. -->

<div class="container-fluid">

  <!-- Row 1: Full-width image -->
  <div class="row mb-4">
    <div class="col-md-12 text-center">
      <img src="{{ site.url }}{{ site.baseurl }}/assets/images/pubpic/smartsurface_fig.png" class="img-fluid" style="max-height: 250px;">
      <p style="font-size: 20px;">Fig 1: Smartsurface can lead to multiplexing gain</p>
    </div>
  </div>

  <!-- Row 3: Wider image + narrower one -->
<div class="row mb-4">
  <!-- RIS_intro image (wider) -->
  <div class="col-md-8 text-center">
    <img src="{{ site.url }}{{ site.baseurl }}/assets/images/smartsurface/RIS_intro.png"
         class="img-fluid"
         style="max-height: 300px; width: auto;">
    <p style="font-size: 20px;">Fig 2: Polarization of an EM wave changes upon reflection and scattering and arrives at random at the UE</p>
  </div>

  <!-- tx_rx_mismatch image (narrower) -->
  <div class="col-md-4 text-center">
    <img src="{{ site.url }}{{ site.baseurl }}/assets/images/smartsurface/tx_rx_mismatch.jpg"
         class="img-fluid"
         style="max-height: 300px; width: auto;">
    <p style="font-size: 20px;">Fig 3: Antenna Polarization mismatch at the receiver causes signal loss</p>
  </div>
</div>



<p style="margin-top:1cm; font-size:20px"> In the past , we have demonstrated how the multiplexing capability of the wireless channel can be increased by creating new multipath in the channel. We achieved this by designing smartsurfaces that can be deployed on walls as to create diverse paths from a UE to Basestation. The smartsurfaces create a strong reflection and makes the wireless channel well-conditioned to support multiple spatial streams. </p>

<h1 class="justified-title">
  Polar-RIS: Practical Limits of RIS Performance
</h1>

<p style="margin-top:1cm; font-size:20px">Our research addressed a critical challenge in modern wireless communication: maximizing the performance of MIMO (Multiple-Input Multiple-Output) systems in crowded sub-6GHz frequencies. While MIMO technology enables faster data rates by transmitting multiple data streams simultaneously, its effectiveness depends heavily on maintaining strong, diverse signal paths between devices. Through detailed simulations and theoretical analysis, we demonstrated how subtle polarization mismatches-caused by device orientations and environmental reflections-severely degrade MIMO performance in real-world indoor environments. To overcome this, we developed Polar-RIS, an innovative smart surface technology that actively corrects polarization distortions while amplifying signals.  </p>


<h3>Media Article</h3>

<div style="text-align: center;">
  <iframe width="560" height="315"
    src="https://www.youtube.com/embed/QxGTibWVc0c"
    title="YouTube video player"
    frameborder="0"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
    allowfullscreen>
  </iframe>
</div>

<h3>Team Members</h3>

<style>
    .team-container {
        display: flex;
        flex-wrap: wrap;
        gap: 20px; /* Space between items */
    }
    
    .team-member {
        display: flex;
        flex-direction: column;
        align-items: center;
        width: 200px; /* Ensure all items have the same width */
        text-align: center;
    }

    .team-member img {
        width: 200px;
        height: 200px;
        object-fit: cover; /* Ensures images fit well within the given dimensions */
    }

    .team-member p {
        font-size: 20px;
        margin: 10px 0 0 0; /* Space above the caption */
    }
</style>

<div class="team-container">
<div class="team-member">
    <a href="{{ site.url }}{{ site.baseurl }}/assets/images/teampic/PeixingLi.jpg">
        <img src="{{ site.url }}{{ site.baseurl }}/assets/images/teampic/PeixingLi.jpg" alt="Peixing Li">
    </a>
    <p>Peixing Li, UC San Diego</p>
</div>

<div class="team-member">
    <a href="{{ site.url }}{{ site.baseurl }}/assets/images/teampic/manideep.jpg">
        <img src="{{ site.url }}{{ site.baseurl }}/assets/images/teampic/manideep.jpg" alt="Manideep Dunna">
    </a>
    <p>Dr. Manideep Dunna, UC San Diego</p>
</div>
    
<div class="team-member">
    <a href="{{ site.url }}{{ site.baseurl }}/assets/images/teampic/golnaz.JPG">
        <img src="{{ site.url }}{{ site.baseurl }}/assets/images/teampic/golnaz.JPG" alt="Golnaz Salehi">
    </a>
    <p>Golnaz Salehi, UC San Diego</p>
</div>

<div class="team-member">
    <a href="{{ site.url }}{{ site.baseurl }}/assets/images/teampic/nagarjun.jpg">
        <img src="{{ site.url }}{{ site.baseurl }}/assets/images/teampic/nagarjun.jpg" alt="Nagarjun Bhat">
    </a>
    <p>Nagarjun Bhat, UC San Diego</p>
</div>
<div class="team-member">
  <a href="{{ site.url }}{{ site.baseurl }}/assets/images/teampic/sajjad.jpeg">
      <img src="{{ site.url }}{{ site.baseurl }}/assets/images/teampic/sajjad.jpeg" alt="Dr. Sajjad Nassirpour">
  </a>
  <p>Dr. Sajjad Nassirpour, SDSU</p>
</div>

<div class="team-member">
    <a href="{{ site.url }}{{ site.baseurl }}/assets/images/teampic/xiaozhen.jpeg ">
        <img src="{{ site.url }}{{ site.baseurl }}/assets/images/teampic/xiaozhen.jpeg " alt="Dr. Xiaozhen Yang">
    </a>
    <p>Dr. Xiaozhen Yang, UC San Diego</p>
</div>

<div class="team-member">
    <a href="{{ site.url }}{{ site.baseurl }}/assets/images/teampic/alireza.png">
        <img src="{{ site.url }}{{ site.baseurl }}/assets/images/teampic/alireza.png" alt="Alireza Vahid">
    </a>
    <p>Alireza Vahid: PI, Rochester Institute of Technology</p>
  </div>


<div class="team-member">
    <a href="{{ site.url }}{{ site.baseurl }}/assets/images/teampic/DanSievenpiper.jpeg">
        <img src="{{ site.url }}{{ site.baseurl }}/assets/images/teampic/DanSievenpiper.jpeg" alt="Daniel Sievenpiper">
    </a>
    <p>Daniel Sievenpiper: PI, UC San Diego</p>
</div>

<div class="team-member">
    <a href="{{ site.url }}{{ site.baseurl }}/assets/images/teampic/dinesh.jpg">
        <img src="{{ site.url }}{{ site.baseurl }}/assets/images/teampic/dinesh.jpg" alt="Dinesh Bharadia">
    </a>
    <p>Dinesh Bharadia: PI, UC San Diego</p>
  </div>

</div>

<div class="container">
  <h3>Publications</h3>

<div class="row">
    <a style="background-color: white; color: orange;" href="{{ site.url }}{{ site.baseurl }}/files/scattermimo.pdf">
      ScatterMIMO: Enabling Virtual MIMO using smartsurfaces
    </a><br>
    Manideep Dunna, Chi Zhang, Daniel Sievenpiper, Dinesh Bharadia
  </div>

<div class = "row">
<a style="background-color: white; color: orange;" href="{{ site.url }}{{ site.baseurl }}/files/Xiaozhen_ACES.pdf"> Simultaneous Beam-Steering and Polarization Conversion Using a Varactor-Integrated Metasurface
</a> <br>
Xiaozhen Yang, Dinesh Bharadia, Daniel Sievenpiper
</div>

<div class = "row">
<a style="background-color: white; color: orange;" href="{{ site.url }}{{ site.baseurl }}/files/Arxiv_alireza.pdf"> Control and Placement of Intelligent Surfaces for IoT systems</a> <br>
Sajjad Nassirpour, Alireza Vahid, Dinh-Thuan Do, Dinesh Bharadia
</div>

<div class = "row">
<div class="container">
<a style="background-color: white; color: orange;" href="https://ieeexplore.ieee.org/abstract/document/9518272"> Capacity of the Torn Paper Channel with Lost Pieces</a> <br>
    Ravi, Aditya Narayan and Vahid, Alireza and Shomorony, Ilan <br>
    ISIT 2021
</div>
</div>


<div class = "row">
<div class="container">
<a style="background-color: white; color: orange;" href="https://ieeexplore.ieee.org/abstract/document/10220203"> Beamforming Design in Reconfigurable Intelligent Surface-Assisted IoT Networks Based on Discrete Phase Shifters and Imperfect CSI</a> <br>
    Sajjad Nassirpour, Alireza Vahid, Dinh-Thuan Do, Dinesh Bharadia<br>
    Globecom 2020
</div>
</div>


<div class = "row">
<div class="container">
<a style="background-color: white; color: orange;" href="https://doi.org/10.1016/j.acha.2021.03.004"> Ranking recovery from limited pairwise comparisons using low-rank matrix completion</a> <br>
    Levy, Tal and Vahid, Alireza and Giryes, Raja<br>
    Harmonic Analysis Journal, 2021
</div>
</div>


<div class = "row">
<div class="container">
<a style="background-color: white; color: orange;" href="https://ieeexplore.ieee.org/document/10462034"> Multifunctional Metasurface: Simultaneous Beam Steering, Polarization Conversion, and Phase Offset</a> <br>
    Xiaozhen Yang, Erda Wen, Dinesh Bharadia, Daniel F. Sievenpiper<br>
    IEEE Transactions on Antennas and Propagation, 2024
</div>
</div>



