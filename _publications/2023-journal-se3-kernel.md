---
priority: 2023-06-20 # date-timestamp: closer date has higher order in list
title: "Rigid Motion Gaussian Processes with SE(3) Kernel and Application to Visual Pursuit Control" # Page title (short paper title)
article: # meta data of article
  type: Journal # journal, conference, ...
  title: "Rigid Motion Gaussian Processes with SE(3) Kernel and Application to Visual Pursuit Control"
  authors: "Marco Omainska, Junya Yamauchi, Tesshu Fujinami and Masayuki Fujita"
  where: "The IEEE Control Systems Letters"
  year: 2023
  doi: 10.1109/LCSYS.2023.3287507
  abstract: "We address in this letter the learning of unknown rigid body motions in the Special Euclidian Group SE(3) based on Gaussian Processes. A new covariance kernel for SE(3) is presented and proven to be a valid kernel for Gaussian Process Regression. The learning error of the proposed Gaussian Process model is extended to a highprobability statement on SE(3). We employ it in a visual pursuit scenario of a moving target with unknown velocity in 3D space. Our approach is validated in a simulated 3D environment in Unity, and shows significant better prediction accuracy than the most commonly used Gaussian kernel. When compared to other covariance kernels proposed on SE(3), its advantages are a natural extension of covering numbers to SE(3), that it is computationally more efficient, and that stability of target pursuit can be guaranteed without limiting the target rotational space to SO(2)."
  citeas: # how article shall be cited
  status: published # published (default), submitted, resubmitted, accepted
header: # header image or video
  image: assets/images/target-trajectory-observation.jpg # header image
  teaser: assets/images/target-trajectory-observation.jpg # teaser image
  overlay_image:
  overlay_color:
  image_description: "A drone following a fox"
actions: # links to various websites
  code: https://github.com/marciska/vpc-rmgp-se3hom # github url if code published
  pdf: https://doi.org/10.1109/LCSYS.2023.3287507 # url where to read article
  other: # if not covered by actions above, provide more below
    # - button: https://img.shields.io/badge/Code-blue?style=for-the-badge&logo=visual-studio-code&logoColor=white
    #   url: https://github.com/marciska/
comments: true # true / false
gallery:
  - url: /assets/images/vpc-intro.jpg
    image_path: /assets/images/vpc-intro.jpg
    alt: "Visual Pursuit Control Example"
    title: "The drone is in pursuit of a bird"
  - url: /assets/images/covering-number.jpg
    image_path: /assets/images/covering-number.jpg
    alt: "Covering number on SE(3)"
    title: "Calculation of the Covering Number on SE(3)"
  - url: /assets/images/fp-displacement.jpg
    image_path: /assets/images/fp-displacement.jpg
    alt: "Feauture Points"
    title: "Infer target motion in video stream by feature point displacement"
---

{% include gallery caption="Figures of this publication" %}

{% include video id="yf2JhwhPAoA" provider="youtube" %}
