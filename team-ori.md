---
layout: articles
title: Team
---
<style>
  i {
    color: #555555;
    font-size: 14px;
  }

  p {
    line-height: 120%;
    margin: 0;
  }
</style>

<div class="article-list grid grid--sm grid--p-3">
  <div class="cell cell--12 cell--md-4 cell--lg-3">
    <div class="card card--flat">
      <div class="card__image">
        <img class="image" src="/assets/images/teampic/dinesh.jpg" />
            <div class="overlay overlay--bottom">
              <header>
                <p>Dinesh Bharadia</p>
                <p><i style="color: #dddddd">Principal Investigator, Associate Professor ECE</i></p>
              </header>
            </div>
      </div>
    </div>
  </div>
  <div class="cell cell--12 cell--md-4 cell--lg-3">
    <div class="card card--flat">
      <div class="card__image">
        <img class="image" src="/assets/images/teampic/fred.jpg" />
            <div class="overlay overlay--bottom">
              <header>
                <p>Fred Harris</p>
                <p><i style="color: #dddddd">Honorable Member, Adjunct Professor ECE</i></p>
              </header>
            </div>
      </div>
    </div>
  </div>
</div>

<h3>PhD Students</h3>
<div class="article-list grid grid--sm grid--p-3">
{% for people in site.data.people %}
  {% if people.role == "PhD" %}
   <div class="cell cell--12 cell--md-4 cell--lg-3">
      <div class="card card--flat">
        <div class="card__image">
          <img class="image" src="{{ people.picture }}" />
            <div class="overlay overlay--bottom">
              <header>
                <p>{{ people.name }}</p>
                <p><i style="color: #dddddd">{{ people.role }}</i></p>
              </header>
            </div>
        </div>
      </div>
    </div>
  {% endif %}
{% endfor %}
</div>

<h3>Collaborations and Postdoctoral Researchers</h3>
<div class="article-list grid grid--sm grid--p-3">
{% for people in site.data.people %}
  {% if people.role != "PhD" %}
   <div class="cell cell--12 cell--md-4 cell--lg-3">
      <div class="card card--flat">
        <div class="card__image">
          <img class="image" src="{{ people.picture }}" />
            <div class="overlay overlay--bottom">
              <header>
                <p>{{ people.name }}</p>
                <p><i style="color: #dddddd">{{ people.role }}</i></p>
              </header>
            </div>
        </div>
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
  <h3>Alumni and Interns</h3>
  <div class="row">
    <h4>PhD and Postdocs</h4>
    <div class="column">
      {% for people in site.data.alumni %}
        {% if people.role == "PhD" or people.role == "Postdoc" %}
          {% if people.col == 1 %}
            <div class="row">
              <p>{{ people.name }}</p> 
              <p><i> Class of {{ people.year }}{% if people.now %}, {{ people.now }} {% endif %}</i></p>
              <br>
            </div>
          {% endif %}
        {% endif %}
      {% endfor %}
    </div>
    <div class="column">
      {% for people in site.data.alumni %}
        {% if people.role == "PhD" or people.role == "Postdoc" %}
          {% if people.col == 2 %}
            <div class="row">
              <p>{{ people.name }}</p> 
              <p><i> Class of {{ people.year }}{% if people.now %}, {{ people.now }} {% endif %}</i></p>
              <br>
            </div>
          {% endif %}
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
              <p>{{ people.name }}</p> 
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
              <p>{{ people.name }}</p> 
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
              <p>{{ people.name }}</p> 
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
              <p>{{ people.name }}</p> 
              <p><i> Class of {{ people.year }}{% if people.now %}, {{ people.now }} {% endif %}</i></p>
              <br>
            </div>
          {% endif %}
        {% endif %}
      {% endfor %}
    </div>
  </div>
</div>