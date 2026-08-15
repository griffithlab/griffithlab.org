---
layout: page
permalink: code/
---
<h2>Code</h2>
<ul>
{% for article in site.posts %}
  {% if article.github %}
    <li> 
      <a href="{{ article.github }}">{{ article.title }}</a> 
      {% if article.osd %}
        <p>{{ article.osd }}</p>
      {% endif %}
    </li>
  {% endif %}
{% endfor %}
</ul>

<h2>Datasets</h2>
<ul>
{% for article in site.posts %}
  {% if article.dataset %}
    <li> 
      <a href="{{ article.dataset }}">{{ article.title }}</a> 
      {% if article.osd %}
        <p>{{ article.osd }}</p>
      {% endif %}
    </li>
  {% endif %}
{% endfor %}
</ul>
  