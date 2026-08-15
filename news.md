---
title: "News"
layout: article
permalink: /allnews.html
---

<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap">

<div class="news-page">
{% for article in site.data.news.news %}<div class="news-entry">
<span class="news-entry__date">{{ article.date }}</span>
<div class="news-entry__card">{{ article.headline }}</div>
</div>{% endfor %}
</div>
