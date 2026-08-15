---
layout: publication
title : "Demo - C-Shenron: Radar Simulation Framework for CARLA"
short_title: "C-Shenron-Demo"
tags: Vehicle
cover: /assets/images/c-shenron-demo/c-shenron.png
disp_cover: "False"
conference: "Demo at SenSys 2025"
conference_site: https://sensys.acm.org/2025/
authors: "Pushkal Mishra, Satyam Srivastava, Jerry Li, Kshitiz Bansal, Dinesh Bharadia"
author_list:
    - name: Pushkal Mishra
      url: https://pushkalm11.github.io/
      email:  pumishra@ucsd.edu
    - name: Satyam Srivastava
      url: https://satyam-53.github.io/
      email: f20190188@pilani.bits-pilani.ac.in
    - name: Jerry Li
      email: jli793@ucr.edu
    - name: Kshitiz Bansal
      url: https://kshitizbansal.com/
      email:  ksbansal@ucsd.edu
    - name: Dinesh Bharadia
      url: https://dineshb-ucsd.github.io/
      email: dineshb@ucsd.edu
paper: /files/c-shenron_demo.pdf
miscs: 
    - content_type: Driving Videos
      content_url: https://www.youtube.com/playlist?list=PLMklUDp_gXNE2W83f0UNoK7Vrs9QZROIv
    - content_type: Project Webpage
      content_url: https://wcsng.ucsd.edu/c-shenron

video_matrix:
  title: Sample Videos Collected Across Different Routes in CARLA
  examples:
    - case: "Example 1"
      videos:
        - description: "Camera Only"
          link: "/assets/gif/c-shenron/case1/Camera.gif"
        - description: "Camera + LiDAR"
          link: "/assets/gif/c-shenron/case1/Camera+LiDAR.gif"
        - description: "Camera + Radar"
          link: "/assets/gif/c-shenron/case1/Camera+Radar.gif"
      text: "In this situation, the driving agent is attempting to make a left turn at an intersection. The Camera only model becomes stagnant at the intersection once the vehicle from the opposing lane passes by. Whereas the other two models, due to enhanced spatial awareness, do not stop at the intersection as it can see farther and confirm that no vehicle is coming from the opposite lane."
    - case: "Example 2"
      videos:
        - description: "Camera Only"
          link: "/assets/gif/c-shenron/case2/Camera.gif"
        - description: "Camera + LiDAR"
          link: "/assets/gif/c-shenron/case2/Camera+LiDAR.gif"
        - description: "Camera + Radar"
          link: "/assets/gif/c-shenron/case2/Camera+Radar.gif"
      text: "In this scene, the driving agent attempts to switch to the left lane. The Camera only model struggles to make the turn and ends up crashing with a vehicle coming from behind. Whereas in the other two models, both LiDAR and Radar detect a car behind and accordingly increase the speed of vehicle before switching the lane."
    - case: "Example 3"
      videos:
        - description: "Camera Only"
          link: "/assets/gif/c-shenron/case3/Camera.gif"
        - description: "Camera + LiDAR"
          link: "/assets/gif/c-shenron/case3/Camera+LiDAR.gif"
        - description: "Camera + Radar"
          link: "/assets/gif/c-shenron/case3/Camera+Radar.gif"
      text: "This is a special test scenario in CARLA where the traffic lights in opposing lanes are turned on to test the situational awareness of the driving agent. Here the vehicle is attempting to make a right turn at the intersection when the lights from crossing lane are on. The Camera only model fails to stop in time and crashes into the incoming car from the crossing lane. However the other two models using LiDAR and Radar manage to avoid the crash by stopping abruptly and proceeding only when it's safe."
  overview:
    text: "The advancement of self-driving technology is driven by the need for robust and efficient perception systems along with frameworks for End-to-End testing, enabled by the CARLA simulator. We introduce C-Shenron, a novel integration of a realistic radar sensor model within CARLA, enabling researchers to develop and test navigation algorithms using radar data. It is the first realistic radar simulator which utilizes LiDAR and camera sensors to generate high-fidelity radar ADC measurements from physics based modeling of the environment. Utilizing this radar sensor and showcasing its capabilities in simulation, we demonstrate improved performance in end-to-end driving scenarios. Our setup aims to rekindle the interest in radar-based self-driving research and promote the development of algorithms that leverages its strengths."

---
