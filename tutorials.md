---
title: "WCSNG - Tutorials"
layout: page
excerpt: "WCSNG -- Tutorials"
sitemap: false
permalink: tutorials
---

# Tutorials/ Resources


{% assign number_printed = 0 %}
{% for publi in site.data.tutorials_list %}

{% assign even_odd = number_printed | modulo: 2 %}
{% if publi.highlight == 1 %}

{% if even_odd == 0 %}
<div class="row">
{% endif %}

<div class="col-sm-8 clearfix">
 <div class="well">
  <pubtit> <font size="+2"><a href="{{ site.url }}{{ site.baseurl }}{{ publi.link.url }}">{{ publi.title }}</a></font></pubtit>
  <meta name="publi.keywords.name" content="{{ publi.keywords.content }}">
  <img src="{{ site.url }}{{ site.baseurl }}/assets/images/tutorialspic/remote_access.jpg" class="img-responsive" width="30%" style="float: right; margin-right: 5px; margin-left: 10px " />
  <p>{{ publi.description }}</p>
  <p><em>{{ publi.authors }}</em></p>
  <!--<p><strong><a href="{{ site.url }}{{ site.baseurl }}{{ publi.link.url }}.html">{{ publi.link.display }}</a></strong></p>-->
  <p class="text-danger"><strong> {{ publi.news1 }}</strong></p>
  <p> {{ publi.news2 }}</p>
  <!--<p><strong><a href="{{ site.url }}{{ site.baseurl }}/{{ publi.website.url }}">{{ publi.website.display }}</a></strong></p>-->
 </div>
</div>

{% assign number_printed = number_printed | plus: 1 %}

{% if even_odd == 1 %}
</div>
{% endif %}

{% endif %}
{% endfor %}

{% assign even_odd = number_printed | modulo: 2 %}
{% if even_odd == 1 %}
</div>
{% endif %}

<!--Our overarching goal is to explore and understand new quantum states of electronic matter on the atomic scale. To do so, we use and develop novel spectroscopic-imaging scanning tunneling microscopy (SI-STM) tools to visualize the relevant quantum mechanical degrees of freedom.

Questions of interest include: (i), How does the Mott state collapse upon doping and how is this related to the complex phase diagram of high-temperature superconductors? (ii), What is the strange metal phase seen in correlated electron systems? Is this an exotic long-range entangled state? What is the mechanism of dissipation in that state? (iii), Why is the transition temperature in high-temperature superconductors so high? 
 
![]({{ site.url }}{{ site.baseurl }}/images/respic/layers_real.jpg){: style="width: 300px; float: right; border: 10px"}

Currently, our instrument of choice  is SI-STM.  State-of-the-art SI-STM measures an array of tunneling spectra on a given sample, registered to the atomic sites with picometer precision. Each is proportional to the local density of states at a given location. Ideally, the recorded spectra are so tightly packed that the measurement yields a three-dimensional mapping of the local density of states as a function of locations and energy. This is shown on the image on the right-hand side (10x10 nm2), and its Fourier transform, below.

The quantum materials which we will investigate encapsulate some of the great unsolved mysteries of physics. They include high-temperature superconductors, quantum-critical compounds, graphene, and topological electronic matter that can be used for error-resistant quantum computing.

![]({{ site.url }}{{ site.baseurl }}/images/respic/layers_fft.jpg){: style="width: 300px; float: left; border: 10px"}

A main goal is to use modern technology to build the new instrumentation needed to understand these quantum materials. I learned my trade in [Seamus Davis’ SI-STM lab](http://davisgroup.lassp.cornell.edu/) and with [Felix Baumberger](http://dpmc.unige.ch/gr_baumberger/index.html), and later moved as an [ETH fellow](http://www.ethfellows.ethz.ch/) to [Andreas Wallraff’s qudev lab](http://www.qudev.ethz.ch/) where we investigated coupled cavity arrays in circuit QED. This allowed me to learn new techniques such as high frequency measurements, low temperature noise-free amplification, and quantum-limited measurements. The goal is to combine these with SI-STM.

This will enable the instrumental capabilities to visualize the different quantum mechanical degrees of freedom needed to understand next-generation quantum materials. STM will be the main method, but we use different spectroscopic-imaging techniques to visualize not only the topography, but also the density of states, spins, and other degrees of freedom hidden below the surface.
-->
