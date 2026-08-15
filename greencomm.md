---
layout: page
# title: "Adaptive Smart Surfaces for Wireless Channel Morphing to enable full multiplexing and multi-user gains"
permalink: greencomm/
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
  Cross-Layer Interference Management: Bringing Interference Alignment to Reality
</h1>


### Synopsis
<p style="font-size:20px"> The rapid growth of wireless communication has intensified energy demands for both base stations and user equipment (UE), requiring innovations at both ends to enhance power efficiency. On the base-station side, traditional systems like massive MIMO consume significant energy due to the linear scaling of power with the number of RF chains. Solutions such as GreenMO and PhaseMO address these challenges by introducing virtualized RF chains and adaptive load-based optimizations, achieving up to 50% power savings and enhanced spectrum efficiency. Additionally, DensQuer demonstrates the benefits of base-station densification, where smaller, strategically placed cells reduce transmit power needs, improve energy efficiency by 3x, and simplify deployment with lower infrastructure requirements. </p>

<p style="margin-top:1cm; font-size:20px"> For user equipment, power consumption remains dominated by key subsystems like display and cellular connectivity. Tools like Google’s On Device Power Rails Monitor (ODPM) have revealed specific energy usage patterns, informing optimization strategies. For instance, densified base-station networks help reduce UE transmit power by 10–15 dB, extending battery life by 50% for smartphones. These innovations not only enhance user experience but also contribute to reducing the carbon footprint of mobile devices, addressing an important sustainability challenge in modern communication systems. </p>
<!-- In today's wireless networks, the typical operating paradigm is to have different users occupying different frequency band such that they don't interfere. Multiple user MIMO (mu-MIMO) has been previously attempted to solve this problem and have multiple users communicating over a single frequency band. However, mu-MIMO implementations have never been robust since it requires favorable channel conditions not always guaranteed in real wireless channels. Typical reasons for this is that user locations being close to each other (Fig. 1) makes the channels correlated, and does not allow for efficient interference separations, as interference is almost indistinguishable from the intended users' signals. -->

<!-- <div class="col-sm-12 clearfix">

<div class="col-sm-9" style="float: left;">
 <img src="{{ site.url }}{{ site.baseurl }}/assets/images/pubpic/smartsurface_fig.png" width="100%" height="250px" style="float: center" > 
 <!--</a> a href="{{ site.url }}{{ site.baseurl }}/assets/images/pubpic/smartsurface_fig1.jpg"-->
 <!-- <p style="font-size:20px">Fig 1: Smartsurface can lead to multiplexing gain</p>
</div> -->

<div class="col-sm-12 clearfix">
    <div class="col-sm-9" style="display: flex; flex-direction: column; align-items: center; margin: auto;">
        <img src="{{ site.url }}{{ site.baseurl }}/assets/images/intro_fin.png" width="60%" height="250px" style="display: block; margin: auto;">
        <p style="font-size:20px; text-align: center;">Fig 1: Impact of densification on UE and base-station power consumption</p>
</div>



<!-- <div class="col-sm-6" style="float: left;">
 <a href="{{ site.url }}{{ site.baseurl }}/images/pubpic/ia_fig2.png"><img src="{{ site.url }}{{ site.baseurl }}/images/pubpic/ia_fig2.png" width="100%" height="250px" style="float: center" > </a>
 <p style="font-size:20px">Fig. 2</p>
</div> -->

</div>






### Personnel


<!-- <div class="row">


<div class="col-sm-4" style="float: left; margin-right: 20px;">
    <p style="font-size:20px">Dinesh Bharadia: PI, UC San Diego</p>
    <a href="{{ site.url }}{{ site.baseurl }}/assets/images/teampic/dinesh.jpg">
        <img src="{{ site.url }}{{ site.baseurl }}/assets/images/teampic/dinesh.jpg" width="200px" height="200px" style="display: block; margin: auto;">
    </a>
</div>

<div class="col-sm-4" style="float: left; margin-right: 20px;">
    <p style="font-size:20px">Daniel Sievenpiper: PI, UC San Diego</p>
    <a href="{{ site.url }}{{ site.baseurl }}/assets/images/teampic/DanSievenpiper.jpeg">
        <img src="{{ site.url }}{{ site.baseurl }}/assets/images/teampic/DanSievenpiper.jpeg" width="200px" height="200px" style="display: block; margin: auto;">
    </a>
</div>

<div class="col-sm-4" style="float: left; margin-right: 20px;">
    <p style="font-size:20px">Alireza Vahid: PI, CU Denver</p>
    <a href="{{ site.url }}{{ site.baseurl }}/assets/images/teampic/alireza.png">
        <img src="{{ site.url }}{{ site.baseurl }}/assets/images/teampic/alireza.png" width="200px" height="200px" style="display: block; margin: auto;">
    </a>
</div>

<div class="col-sm-4" style="float: left;">
    <p style="font-size:20px">Dr. Manideep Dunna, UC San Diego</p>
    <a href="{{ site.url }}{{ site.baseurl }}/assets/images/teampic/manideep.jpg">
        <img src="{{ site.url }}{{ site.baseurl }}/assets/images/teampic/manideep.jpg" width="200px" height="200px" style="display: block; margin: auto;">
    </a>
</div>


<div class="col-sm-4" style="float: left;margin-left: 10px">
 <p style="font-size:20px">Dr. Xiaozhen Yang, UC San Diego</p>
<a href="{{ site.url }}{{ site.baseurl }}/assets/images/teampic/XiaozhenYang.jpg"><img src="{{ site.url }}{{ site.baseurl }}/assets/images/teampic/XiaozhenYang.jpg" width="200px"  height="200px" style=" margin: auto;"> </a> -->

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
        <a href="{{ site.url }}{{ site.baseurl }}/assets/images/teampic/dinesh.jpg">
            <img src="{{ site.url }}{{ site.baseurl }}/assets/images/teampic/dinesh.jpg" alt="Dinesh Bharadia">
        </a>
        <p>Dinesh Bharadia: PI, UC San Diego</p>
    </div>

    <div class="team-member">
        <a href="{{ site.url }}{{ site.baseurl }}/assets/images/teampic/alireza.png">
            <img src="{{ site.url }}{{ site.baseurl }}/assets/images/teampic/alireza.png" alt="Alireza Vahid">
        </a>
        <p> Alireza Vahid: PI, Rochester Institute of Technology</p>
    </div>

    <div class="team-member">
        <a href="{{ site.url }}{{ site.baseurl }}/assets/images/teampic/sajjad.jpeg">
            <img src="{{ site.url }}{{ site.baseurl }}/assets/images/teampic/sajjad.jpeg" alt="Sajjad Nassirpour">
        </a>
        <p> Sajjad Nassirpour, San Diego State University</p>
    </div>

    <div class="team-member">
        <a href="{{ site.url }}{{ site.baseurl }}/assets/images/teampic/agrim.pnj">
            <img src="{{ site.url }}{{ site.baseurl }}/assets/images/teampic/agrim.png" alt="Agrim Gupta">
        </a>
        <p> Agrim Gupta, UC San Diego</p>
    </div>

    <div class="team-member">
        <a href="{{ site.url }}{{ site.baseurl }}/assets/images/teampic/adel.jpg">
            <img src="{{ site.url }}{{ site.baseurl }}/assets/images/teampic/adel.JPG" alt="Adel Heidari">
        </a>
        <p> Adel Heidari, UC San Diego</p>
    </div>
</div>






### Publications

<div class = "row">
<div class="container">
<a style="background-color: white; color: orange;" href="{{ site.url }}{{ site.baseurl }}/files/greenmo.pdf"> Greenmo: Enabling virtualized, sustainable massive mimo with a single rf chain</a> <br>
Agrim Gupta, Sajjad Nassirpour, Manideep Dunna, Eamon Patamasing, Alireza Vahid, Dinesh Bharadia
</div>
</div>


<div class = "row">
<div class="container">
<a style="background-color: white; color: orange;" href="{{ site.url }}{{ site.baseurl }}/files/DensQuer.pdf"> Densify & Conquer: Densified, smaller base-stations can conquer
the increasing carbon footprint problem in nextG wireless </a> <br>
Agrim Gupta, Adel Heidari, Jiaming Jin, Dinesh Bharadia
</div>
</div>

<div class = "row">
<div class="container">
<a style="background-color: white; color: orange;" href="{{ site.url }}{{ site.baseurl }}/files/3Ws.pdf"> 3 W’s of smartphone power consumption: Who, Where and How
much is draining my battery?</a> <br>
Agrim Gupta, Adel Heidari, Avyakta Kalipattapu, Ish Kumar Jain, Dinesh Bharadia
</div>
</div>

<div class = "row">
<div class="container">
<a style="background-color: white; color: orange;" href="{{ site.url }}{{ site.baseurl }}/files/phaseMO.pdf"> PhaseMO: Future-Proof, Energy-efficient, Adaptive
Massive MIMO </a> <br>
Adel Heidari, Agrim Gupta, Ish Kumar Jain, Dinesh Bharadia
</div>
</div>

<div class = "row">
<div class="container">
<a style="background-color: white; color: orange;" href="{{ site.url }}{{ site.baseurl }}/files/BeamDesign_RIS.pdf"> Beamforming Design in Reconfigurable Intelligent Surface-Assisted IoT Networks Based on Discrete Phase Shifters and Imperfect CSI </a> <br>
Sajjad Nassirpour, Alireza Vahid, Dinh-Thuan Do, Dinesh Bharadia
</div>
</div>


<div class = "row">
<div class="container">
<a style="background-color: white; color: orange;" href="{{ site.url }}{{ site.baseurl }}/files/Arxiv_alireza.pdf"> Control and Placement of Finite-Resolution Intelligent Surfaces in IoT Systems with Imperfect CSI </a> <br>
Sajjad Nassirpour, Alireza Vahid, Dinh-Thuan Do, Dinesh Bharadia
</div>
</div>

<div class = "row">
<div class="container">
<a style="background-color: white; color: orange;" href="{{ site.url }}{{ site.baseurl }}/files/PowEff.pdf"> Power-Efficient Analog Front-End Interference Suppression With Binary Antennas</a> <br>
Sajjad Nassirpour, Agrim Gupta, Alireza Vahid, Dinesh Bharadia
</div>
</div>


<!-- <div class = "row">
<div class="container">
<a style="background-color: white; color: orange;" href="https://doi.org/10.1016/j.acha.2021.03.004"> Ranking recovery from limited pairwise comparisons using low-rank matrix completion</a> <br>
    Levy, Tal and Vahid, Alireza and Giryes, Raja<br>
    Harmonic Analysis Journal, 2021
</div>
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
<a style="background-color: white; color: orange;" href="https://ieeexplore.ieee.org/abstract/document/9348147"> Communicating over the Torn-Paper Channel</a> <br>
    Shomorony, Ilan and Vahid, Alireza<br>
    Globecom 2020
</div>
</div> -->


