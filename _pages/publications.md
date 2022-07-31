---
layout: archive
title: Publications
permalink: /publications/
classes: wide
---

{% assign pubsByType = site.publications | where_exp: "pub", "pub.hidden != true" | group_by_exp: 'pub', 'pub.type' %}
{% for pubtype in pubsByType reversed %}
  <section id="{{ pubtype.name }}" class="">
    <h2 class="">{{ pubtype.name }}</h2>
    <div class="">
      {% for pub in pubtype.items reversed %}
        {% include publication-card.html pub=pub %}
      {% endfor %}
    </div>
    <a href="#page-title" class="back-to-top">{{ site.data.ui-text[site.locale].back_to_top | default: 'Back to Top' }} &uarr;</a>
  </section>
{% endfor %}
