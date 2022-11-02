---
priority: 2022-07-07 # date-timestamp: closer date has higher order in list
title: "Gaussian Process-based Visual Pursuit Control with Automatic Gain Tuning" # Page title (short paper title)
article: # meta data of article
  type: Conference # journal, conference, ...
  title: "Gaussian Process-based Visual Pursuit Control with Automatic Gain Tuning"
  authors: "Tesshu Fujinami, Junya Yamauchi, Marco Omainska and Masayuki Fujita"
  where: "6th IEEE Conference on Control Technology and Applications (CCTA)"
  year: 2022
  doi:
  abstract: "In this paper, we propose a vision-based pursuit control law with uncertainty estimates of the target motion by Gaussian process (GP) regression. We consider a situation where a robot equipped with a visual sensor pursues a target whose velocity is unknown. First, we introduce a GP-based target motion estimation. In addition, we propose an observer- based controller that automatically tunes the feedback gains by quantifying the upper bound on the uncertainty of the target motion with a GP estimate. Second, we provide the theoretical guarantee that the control error and the estimation error are uniformly ultimately bounded with high probability. Finally, we verify the effectiveness of the proposed controller via simulations and experiments."
  citeas: 'T. Fujinami, J. Yamauchi, M. Omainska and M. Fujita, "Gaussian Process Based Visual Pursuit Control with Automatic Gain Tuning", Proc. of the  6th IEEE Conference on Control Technology and Applications (CCTA), pp. 1293-1299, Aug., 2022' # how article shall be cited
  status: published # published (default), submitted, resubmitted, accepted
header: # header image or video
  image: assets/images/vpc-automatic-gain-tuning_header.jpeg # header image
  teaser: assets/images/vpc-automatic-gain-tuning_teaser.jpeg # teaser image
  overlay_image:
  overlay_color:
  caption: "© Tesshu Fujinami"
  image_description: "Drone following a land-robot"
actions: # links to various websites
  code: # github url if code published
  arxiv: # arxiv url
  pdf: # url where to read article
  slides: # url to conference slides or presentation video
  conference: https://ccta2022.ieeecss.org # url to conference webpage
comments: false # true / false
---

{% include video id="RQiFLLpMQHw" provider="youtube" %}
