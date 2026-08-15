---
layout: page
title: "Sustainable Base Station Deployments"
authors: "Agrim Gupta, Sajjad Nassirpour, Dinesh Bharadia, Alireza Vahid"
author_list:
    - name: Agrim Gupta
      url: https://agrim9.github.io/
      email: agg003@ucsd.edu
    - name: Sajjad Nassirpour
      email: sajjad.nassirpour@ucdenver.edu
    - name: Dinesh Bharadia
      url: https://dineshb-ucsd.github.io/
      email: dineshb@ucsd.edu
    - name: Alireza Vahid
      url: www.alirezavahid.com
      email: alireza.vahid@ucdenver.edu

tags: sustainability
permalink: sustainability/
---
<style type="text/css" rel="stylesheet">
.videoWrapper {
    position: relative;
    padding-bottom: 56.25%; /* 16:9 */
    padding-top: 25px;
    height: 0;
}
.videoWrapper iframe {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
}
</style>


<div class="row">
<div class="col-sm-8 clearfix">
<br>
<p style="font-size:30px">Towards green wireless networks via base station densification</p>
<p align="justify"> 
With uniform densification of base-stations, the dependency on power amplifiers to transmit at unreasonble high powers reduces and opens the foors for greener wireless networks.
Checkout our short HotCarbon'22 workshop paper on the same:<br>
<a style="background-color: white; color: orange;" href="{{ site.url }}{{ site.baseurl }}/assets/images/pubpic/hotc_img.png">"Multiple smaller base stations are greener than a single powerful one"</a> 

</p>
</div>


<div class="col-sm-4 style=float: right;">
<!-- <div class="videoWrapper">
  <iframe width="560" height="315" src="https://drive.google.com/file/d/1825BK0-l8t_vvKw26bb-Maba-qALoHEl/preview" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
</div> -->
<a href="{{ site.url }}{{ site.baseurl }}/assets/images/pubpic/hotc_img.png"><img src="{{ site.url }}{{ site.baseurl }}/assets/images/pubpic/hotc_img.png" width="50%" style="float: center" > </a>
</div>
</div>





# Building next-generation power-efficient base-stations with GreenMO
<div class="row">
<div class="col-sm-6 clearfix">
<br>
<p style="font-size:30px">Motivation</p>
<p align="justify"> 
Today, wireless base-stations consume a lot of power and contribute significantly to the carbon footprint of wireless industry (1.4%), which compares to that of aviation industry (2%).
Further, with next-generation networks connecting more users, and even more devices, the power consumption is only going to increase, with <span style="color:orange;">more antennas</span> and <span style="color:red;">more data backhauling</span> required.
</p>
</div>


<div class="col-sm-6 style=float: right;">
<!-- <div class="videoWrapper">
  <iframe width="560" height="315" src="https://drive.google.com/file/d/1825BK0-l8t_vvKw26bb-Maba-qALoHEl/preview" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
</div> -->
<a href="{{ site.url }}{{ site.baseurl }}/assets/images/pubpic/greenmo_motiv.png"><img src="{{ site.url }}{{ site.baseurl }}/assets/images/pubpic/greenmo_motiv.png" width="75%" style="float: center" > </a>
</div>
</div>

---


<div class="row">


<div class="col-sm-6" style="float: left;">
 <p style="font-size:30px">GreenMO breaks power-spectrum tradeoff</p>
GreenMO virtualizes a single high bandwidth RF chain over multiple antennas to create a best of both worlds solution which is as power efficient as OFDMA and as spectral efficient as massive MIMO.
</div>
<a href="{{ site.url }}{{ site.baseurl }}/assets/images/pubpic/greenmo_tradeoff.png"><img src="{{ site.url }}{{ site.baseurl }}/assets/images/pubpic/greenmo_tradeoff.png" width="75%" style="float: center" > </a>

<div class="col-sm-6" style="float: right;">
<p style="font-size:30px">Prototype hardware</p>
We design a custom PCB which can allows for 4 users multiplexing via 8 antennas connnected to a single RF chain of WARPv3 SDR
</div>
</div>
<center>
<a href="{{ site.url }}{{ site.baseurl }}/assets/images/pubpic/greenmo_pcb.png"><img src="{{ site.url }}{{ site.baseurl }}/assets/images/pubpic/greenmo_pcb.png" width="75%" > </a> <br>
</center>


---

## Publications

<div class = "row">
<div class="container">
<a style="background-color: white; color: orange;" href="{{ site.url }}{{ site.baseurl }}/files/hotc_paper.pdf">Multiple smaller base stations are greener than a single powerful one:
Densification of Wireless Cellular Networks</a> <br>
    Agrim Gupta, Ish Jain, Dinesh Bharadia<br>
    HotCarbon'22<br>
</div>
</div>


<div class = "row">
<div class="container">
<a style="background-color: white; color: orange;">GreenMO: Flexible and Virtualized Green
Communications Architecture</a> <br>
    Agrim Gupta, Sajjad Nassirpour, Eamon Patamasing, Manideep Dunna, Alireza Vahid, Dinesh Bharadia<br>
    (Under submission)<br>
</div>
</div>

