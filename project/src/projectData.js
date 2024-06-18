// 멍줍, 빵이오, 자바 개인 프로젝트, 스마트팜, 탭검사기, 수로, 졸업논문
const projects = [
  {
    title: "멍줍 App",
    image: "./images/멍줍.png",
    description: [
      {
        titleDescription: "수행목표",
        description:
          "반려인을 위해 분산되어 있는 여러 기능을 하나로 통합한 어플로 사용자의 편의성을 높이고 일관된 사용자 경험을 제공하기 위한 어플",
      },
      {
        titleDescription: "담당역할",
        description:
          "카드 최대 혜택,  카드 페이지, CSS 통합, 실종 반려견 찾기 딥러닝 모델 생성, 피부 질환 딥러닝 모델 생성",
      },
    ],
    tools: ["React", "Javascript", "Spring Boot", "MySQL", "Python"],
    github: "https://github.com/shinhan3/mungzoup",
    linkCheck: false,
    link: "",
    day: "2024-01-08 ~ 2024-02-29 참여 인원 [6]",
  },
  {
    title: "빵이오 플랫폼",
    image: "./images/빵이오.png",
    description: [
      {
        titleDescription: "수행목표",
        description:
          "동네 빵집의 신선한 빵을 소비자에게 제공하고 가게 매출증대에 도움이 되는 선순환 구조를 가진 서비스.",
      },
      {
        titleDescription: "담당역할",
        description: "로그인, 회원가입, 장바구니, 결제",
      },
    ],
    tools: ["JSP", "Javascript", "Spring framework", "mariaDB"],
    github: "https://github.com/limdongsun0814/4shinhan",
    linkCheck: false,
    link: "",
    day: "2023-11-03 ~ 2024-01-05 참여 인원 [6]",
  }, //이미지
  {
    title: "탭 검사기",
    image: "./images/탭검사기.png",
    description: [
      {
        titleDescription: "수행목표",
        description:
          "나사선의 불량 여부를 자동으로 판별하고 이를 어플리케이션과 연동하는 검사기 개발",
      },
      {
        titleDescription: "담당역할",
        description:
          "아두이노와 PLC, DC 모터 제어 (SPI, Serial, PWM), 회로 설계",
      },
    ],
    tools: ["Arduino", "OpenCV", "Python", "Android"],
    github: "https://github.com/limdongsun0814/Tap-Inspection",
    linkCheck: true,
    link: "https://ieeexplore.ieee.org/document/9268255",
    day: "2019-01-02 ~ 2019-12-29 참여 인원 [4]",
  },
  {
    title: "스마트팜",
    image: "./images/스마트팜.png",
    description: [
      {
        titleDescription: "수행목표",
        description:
          "농자 옆에 설치된 반사판을 회전시켜 최적의 광량을 농장에 공급하고, 스마트팜 상태를 어플로 모니터링",
      },
      {
        titleDescription: "담당역할",
        description: "아두이노 NANO 와 센서 센싱, 모터 제어 (I2C, Serial, PWM)",
      },
    ],
    tools: ["Arduino", "Android", "PHP", "MySQL"],
    github: "https://github.com/limdongsun0814/SmartFarm",
    linkCheck: true,
    link: "https://ieeexplore.ieee.org/document/9268238",
    day: "2019-01-02 ~ 2019-12-29 참여 인원 [4]",
  },
  {
    title: "수로",
    image: "./images/수로.png",
    description: [
      {
        titleDescription: "수행목표",
        description:
          "수로와 게이트웨이 간의 LoRa를 이용한 무선 통신, 수로의 상태를 홈페이지에서 모니터링하고 수로를 원격 제어 및 고장 판별",
      },
      {
        titleDescription: "담당역할",
        description:
          "모터 제어와 센서링(유량, 압력, 온도) 정보 유선 통신(RS485), 회로 설계",
      },
    ],
    tools: ["Arduino", "PHP", "Python", "Tensorflow", "MySQL"],
    github: "https://github.com/limdongsun0814/SmartValve",
    linkCheck: true,
    link: "https://www.mdpi.com/2075-1702/10/8/659",
    day: "2020-06-28 ~ 2022-12-28 참여 인원 [4]",
  },
  {
    title: "나사대회",
    image: "./images/나사대회.png",
    description: [
      {
        titleDescription: "수행목표",
        description:
          "다른 행성에서 현장자원활용이 가능한 자동화 제어 로봇 개발",
      },
      {
        titleDescription: "담당역할",
        description:
          "RTAB SLAM을 이용한 Mapping, YOLO를 이용한 장애물 및 현장 자원 판별, Docker를 통한 배포",
      },
    ],
    tools: ["Python", "ROS", "OpenCV", "YOLO", "Gazebo", "Docker"],
    github: "https://github.com/limdongsun0814/Space-Robotics-Challenge",
    linkCheck: true,
    link: "https://www.riss.kr/search/detail/DetailView.do?p_mat_type=be54d9b8bc7cdb09&control_no=7b741b8df56ce8f9ffe0bdc3ef48d419",
    day: "2019-08-12 ~ 2021-08-31 참여 인원 [4]",
  },
  // {
  //   title: "졸업 논문",
  //   image: "./images/멍줍.png",
  //   description: [
  //     {
  //       titleDescription: "수행목표",
  //       description:
  //         "반려인을 위해 분산되어 있는 여러 기능을 하나로 통합한 어플로 사용자의 편의성을 높이고 일관된 사용자 경험을 제공하기 위한 어플",
  //     },
  //     {
  //       titleDescription: "담당역할",
  //       description:
  //         "카드 최대 혜택,  카드 페이지, CSS 통합, 실종 반려견 찾기 딥러닝 모델 생성, 피부 질환 딥러닝 모델 생성",
  //     },
  //   ],
  //   tools: ["Python", "ROS", "OpenCV", "YOLO"],
  //   github: "https://github.com/shinhan3/mungzoup",
  //   linkCheck: true,
  //   link: "https://www.sciencedirect.com/science/article/pii/S2405959523000887?utm_campaign=STMJ_AUTH_SERV_PUBLISHED&utm_medium=email&utm_acid=276945937&SIS_ID=&dgcid=STMJ_AUTH_SERV_PUBLISHED&CMX_ID=&utm_in=DM396771&utm_source=AC_",
  //   day: "2021-12-01 ~ 2022-08-31 참여 인원 [1]",
  // },
];

export default projects;
