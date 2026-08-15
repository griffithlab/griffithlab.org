---
layout: articles
title: Team
permalink: team/
---
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap">
<style>
  .team-page h3,
  .team-page h4 {
    font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
    color: #D6001C;
    font-weight: 700;
    margin-top: 32px;
  }

  p {
    line-height: 130%;
    margin: 0;
  }

  /* Card: rounded, elevated, grows on hover */
  .card.card--flat {
    position: relative;
    overflow: hidden;
    border-radius: 14px;
    background: #fff;
    box-shadow: 0 6px 18px rgba(24, 43, 73, 0.12);
    transition: transform 0.22s cubic-bezier(0.2, 0.8, 0.3, 1.1), box-shadow 0.22s ease;
  }
  .card.card--flat:hover {
    transform: translateY(-6px) scale(1.04);
    box-shadow: 0 20px 42px rgba(24, 43, 73, 0.28);
    z-index: 2;
  }

  /* Whole card is clickable */
  .card__link {
    display: block;
    color: inherit;
    text-decoration: none !important;
  }

  .card__image {
    position: relative;
    overflow: hidden;
  }
  .card__image img,
  .card__image .image {
    width: 100%;
    height: 260px;
    object-fit: cover;
    object-position: top center;
    display: block;
    transition: transform 0.35s ease;
  }
  .card.card--flat:hover .card__image img {
    transform: scale(1.06);
  }

  /* Name/role overlay with a readable gradient */
  .overlay {
    color: #fff;
    padding: 16px 14px 12px;
  }
  .overlay--bottom {
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    background: linear-gradient(to top, rgba(10, 18, 33, 0.92) 0%, rgba(10, 18, 33, 0.55) 52%, rgba(10, 18, 33, 0) 100%);
  }
  .member-name {
    font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
    font-weight: 600;
    font-size: 15px;
    color: #fff;
    margin: 0 0 2px;
  }
  .overlay i {
    color: #e2e6ec;
    font-size: 13px;
  }

  /* Placeholder cards (alumni without a photo) */
  .card__image-placeholder {
    display: flex;
    align-items: center;
    justify-content: center;
    min-height: 120px;
    padding: 18px 14px;
    text-align: center;
    border-radius: 14px;
    background: linear-gradient(135deg, #21395f 0%, #182B49 100%);
  }
  .card__image-placeholder p,
  .card__image-placeholder a {
    color: #fff;
  }
  .card__image-placeholder i {
    color: #cfd6e0;
    font-size: 13px;
  }

  i {
    color: #555555;
    font-size: 14px;
  }
</style>

<div class="team-page" markdown="0">


<div class="article-list grid grid--sm grid--p-3">
  <div class="cell cell--12 cell--md-4 cell--lg-3">
    <div class="card card--flat">
      <a class="card__link" href="https://dineshb-ucsd.github.io/">
      <div class="card__image">
        <img class="image" src="/assets/images/teampic/dinesh.jpg" />
            <div class="overlay overlay--bottom">
              <header>
                <p class="member-name">Dinesh Bharadia</p>
                <p><i>Principal Investigator, Associate Professor ECE</i></p>
              </header>
            </div>
      </div>
      </a>
    </div>
  </div>
  <div class="cell cell--12 cell--md-4 cell--lg-3">
    <div class="card card--flat">
      <a class="card__link" href="https://en.wikipedia.org/wiki/Fredric_J._Harris">
      <div class="card__image">
        <img class="image" src="/assets/images/teampic/fred.jpg" />
            <div class="overlay overlay--bottom">
              <header>
                <p class="member-name">Fred Harris</p>
                <p><i>Honorable Member, Adjunct Professor ECE</i></p>
              </header>
            </div>
      </div>
      </a>
    </div>
  </div>
</div>


<h3>PhD Students</h3>
<div class="article-list grid grid--sm grid--p-3">
  {% for people in site.data.people %}
    {% if people.role == "PhD" %}
      <div class="cell cell--12 cell--md-4 cell--lg-3">
        <div class="card card--flat">
          {% if people.website %}<a class="card__link" href="{{ people.website }}">{% endif %}
          <div class="card__image">
                <img class="image" src="{{ people.picture }}" alt="Profile image of {{ people.name }}" />
            <div class="overlay overlay--bottom">
              <header>
                <p class="member-name">{{ people.name }}</p>
                <p><i>{{ people.role }}</i></p>
              </header>
            </div>
          </div>
          {% if people.website %}</a>{% endif %}
        </div>
      </div>
    {% endif %}
  {% endfor %}
</div>


<h3>Collaborations and Postdoctoral Researchers</h3>
<div class="article-list grid grid--sm grid--p-3">
{% for people in site.data.people %}
  {% if people.role != "PhD" and people.role != "Principal Investigator" %}
   <div class="cell cell--12 cell--md-4 cell--lg-3">
      <div class="card card--flat">
        {% if people.website %}<a class="card__link" href="{{ people.website }}">{% endif %}
        <div class="card__image">
            <img class="image" src="{{ people.picture }}" alt="Profile image of {{ people.name }}" />
          <div class="overlay overlay--bottom">
            <header>
              <p class="member-name">{{ people.name }}</p>
              <p><i>{{ people.role }}</i></p>
            </header>
          </div>
        </div>
        {% if people.website %}</a>{% endif %}
      </div>
    </div>
  {% endif %}
{% endfor %}
</div>


<div>
  <h3>Masters Students</h3>
  <div class="row">
    <div class="column">
      {% for people in site.data.people_text %}
        {% if people.role == "MS" %}
          {% if people.col == 1 %}
            <p style="line-height: 150%">{{ people.name }}</p>
          {% endif %}
        {% endif %}
      {% endfor %}
    </div>
    <div class="column">
      {% for people in site.data.people_text %}
        {% if people.role == "MS" %}
          {% if people.col == 2 %}
            <p style="line-height: 150%">{{ people.name }}</p>
          {% endif %}
        {% endif %}
      {% endfor %}
    </div>
  </div>
  <h3>Undergraduate Students</h3>
  <div class="row">
    <div class="column">
      {% for people in site.data.people_text %}
        {% if people.role == "BS" %}
          {% if people.col == 1 %}
            <p style="line-height: 150%">{{ people.name }}</p>
          {% endif %}
        {% endif %}
      {% endfor %}
    </div>
    <div class="column">
      {% for people in site.data.people_text %}
        {% if people.role == "BS" %}
          {% if people.col == 2 %}
            <p style="line-height: 150%">{{ people.name }}</p>
          {% endif %}
        {% endif %}
      {% endfor %}
    </div>
  </div>
<h3>Alumni</h3>
<h4>PhD</h4>
<div class="article-list grid grid--sm grid--p-3">
  {% assign alumni_with_pics = site.data.alumni | where_exp: "item", "item.picture" %}
  {% assign alumni_without_pics = site.data.alumni | where_exp: "item", "item.picture == nil" %}

  <!-- Alumni with Pictures -->
  {% for people in alumni_with_pics %}
    {% if people.role == "PhD" %}
      <div class="cell cell--12 cell--md-4 cell--lg-3">
        <div class="card card--flat">
            {% if people.website %}<a class="card__link" href="{{ people.website }}">{% endif %}
            <div class="card__image">
              <img class="image" src="{{ people.picture }}" />
              <div class="overlay overlay--bottom">
                <header>
                  <p class="member-name">{{ people.name }}</p>
                  <p><i>Class of {{ people.year }}{% if people.now %}, {{ people.now }}{% endif %}</i></p>
                </header>
              </div>
            </div>
            {% if people.website %}</a>{% endif %}
        </div>
      </div>
    {% endif %}
  {% endfor %}

  <!-- Alumni without Pictures -->
  <div class="list-group">
    {% for people in alumni_without_pics %}
      {% if people.role == "PhD" %}
        <div class="cell cell--12 cell--md-4 cell--lg-3">
          <div class="card card--flat">
              <div class="card__image-placeholder">
                <div class="placeholder-content">
                  {% if people.website %}
                    <p><a href="{{ people.website }}">{{ people.name }}</a></p>
                  {% else %}
                    <p>{{ people.name }}</p>
                  {% endif %}
                  <p><i>Class of {{ people.year }}{% if people.now %}, {{ people.now }}{% endif %}</i></p>
                </div>
              </div>
          </div>
        </div>
      {% endif %}
    {% endfor %}
  </div>
</div>

 
<h4>Postdocs and Researchers</h4>
<div class="article-list grid grid--sm grid--p-3">
  {% assign alumni_with_pics = site.data.alumni | where_exp: "item", "item.picture" %}
  {% assign alumni_without_pics = site.data.alumni | where_exp: "item", "item.picture == nil" %}

  {% for people in alumni_with_pics %}
    {% if people.role == "Visiting Researcher" or people.role == "Postdoc" %}
      <div class="cell cell--12 cell--md-4 cell--lg-3">
        <div class="card card--flat">
          {% if people.website %}<a class="card__link" href="{{ people.website }}">{% endif %}
          <div class="card__image">
            <img class="image" src="{{ people.picture }}" />
            <div class="overlay overlay--bottom">
              <header>
                <p class="member-name">{{ people.name }}</p>
                <p><i>{{ people.role }}{% if people.now %}, {{ people.now }}{% endif %}</i></p>
              </header>
            </div>
          </div>
          {% if people.website %}</a>{% endif %}
        </div>
      </div>
    {% endif %}
  {% endfor %}
  <div class="list-group">
    {% for people in alumni_without_pics %}
      {% if people.role == "Researcher" or people.role == "Postdoc" %}
        <div class="cell cell--12 cell--md-4 cell--lg-3">
          <div class="card card--flat">
            <div class="card__image-placeholder">
              <div class="placeholder-content">
                  {% if people.website %}
                    <p><a href="{{ people.website }}">{{ people.name }}</a></p>
                  {% else %}
                    <p>{{ people.name }}</p>
                  {% endif %}
                <p><i>{{ people.role }}{% if people.now %}, {{ people.now }}{% endif %}</i></p>
              </div>
            </div>
          </div>
        </div>
      {% endif %}
    {% endfor %}
  </div>
</div>



<div class="row">
  <h4>Masters</h4>
  <div class="column">
    {% for people in site.data.alumni %}
      {% if people.role == "MS" %}
        {% if people.col == 1 %}
          <div class="row">
                {% if people.website %}
                  <p><a href="{{ people.website }}">{{ people.name }}</a></p>
                {% else %}
                  <p>{{ people.name }}</p>
                {% endif %}
            <p><i> Class of {{ people.year }}{% if people.now %}, {{ people.now }} {% endif %}</i></p>
            <br>
          </div>
        {% endif %}
      {% endif %}
    {% endfor %}
  </div>
  <div class="column">
    {% for people in site.data.alumni %}
      {% if people.role == "MS" %}
        {% if people.col == 2 %}
          <div class="row">
                {% if people.website %}
                  <p><a href="{{ people.website }}">{{ people.name }}</a></p>
                {% else %}
                  <p>{{ people.name }}</p>
                {% endif %}
            <p><i> Class of {{ people.year }}{% if people.now %}, {{ people.now }} {% endif %}</i></p>
            <br>
          </div>
        {% endif %}
      {% endif %}
    {% endfor %}
  </div>
</div>

<div class="row">
  <h4>Undergraduate</h4>
  <div class="column">
    {% for people in site.data.alumni %}
      {% if people.role == "BS" %}
        {% if people.col == 1 %}
          <div class="row">
                {% if people.website %}
                  <p><a href="{{ people.website }}">{{ people.name }}</a></p>
                {% else %}
                  <p>{{ people.name }}</p>
                {% endif %}
            <p><i> Class of {{ people.year }}{% if people.now %}, {{ people.now }} {% endif %}</i></p>
            <br>
          </div>
        {% endif %}
      {% endif %}
    {% endfor %}
  </div>
  <div class="column">
    {% for people in site.data.alumni %}
      {% if people.role == "BS" %}
        {% if people.col == 2 %}
          <div class="row">
                {% if people.website %}
                  <p><a href="{{ people.website }}">{{ people.name }}</a></p>
                {% else %}
                  <p>{{ people.name }}</p>
                {% endif %}
            <p><i> Class of {{ people.year }}{% if people.now %}, {{ people.now }} {% endif %}</i></p>
            <br>
          </div>
        {% endif %}
      {% endif %}
    {% endfor %}
  </div>
</div>

<div class="row">
  <h4>International Summer Interns</h4>
  <div class="column">
    {% for people in site.data.alumni %}
      {% if people.role == "Intern" %}
        {% if people.col == 1 %}
          <div class="row">
                {% if people.website %}
                  <p><a href="{{ people.website }}">{{ people.name }}</a></p>
                {% else %}
                  <p>{{ people.name }}</p>
                {% endif %}
            <p><i> Class of {{ people.year }}{% if people.now %}, {{ people.now }} {% endif %}</i></p>
            <br>
          </div>
        {% endif %}
      {% endif %}
    {% endfor %}
  </div>
  <div class="column">
    {% for people in site.data.alumni %}
      {% if people.role == "Intern" %}
        {% if people.col == 2 %}
          <div class="row">
                {% if people.website %}
                  <p><a href="{{ people.website }}">{{ people.name }}</a></p>
                {% else %}
                  <p>{{ people.name }}</p>
                {% endif %}
            <p><i> Class of {{ people.year }}{% if people.now %}, {{ people.now }} {% endif %}</i></p>
            <br>
          </div>
        {% endif %}
      {% endif %}
    {% endfor %}
  </div>
</div>

</div><!-- /.team-page -->
