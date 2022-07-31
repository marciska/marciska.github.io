---
layout: archive
permalink: /blog/
title: "Blog Posts"
classes: wide
---

{% assign postsByYear = site.posts | where_exp: "post", "post.hidden != true" | group_by_exp: 'post', 'post.date | date: "%Y"' %}
{% for year in postsByYear %}
  <section id="{{ year.name }}" class="taxonomy__section">
    <h2 class="archive__subtitle">{{ year.name }}</h2>
    <div>
      {% for post in year.items %}
        {% include archive-single.html %}
      {% endfor %}
    </div>
    <a href="#page-title" class="back-to-top">{{ site.data.ui-text[site.locale].back_to_top | default: 'Back to Top' }} &uarr;</a>
  </section>
{% else %}
There are no posts yet. Please come back at a later time 😉
{% endfor %}
