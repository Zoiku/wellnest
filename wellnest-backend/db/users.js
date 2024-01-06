const therapists = [
  {
    id: 48291,
    name: "Alice Johnson",
    email: "alice.johnson@example.com",
    password: "123",
    expertise: ["Depression"],
    sessions: [{}, {}, {}, {}, {}],
    appointments: [
      {
        status: 0,
        patient: "",
        requested: new Date().toDateString(),
        format: "Video",
      },
    ],
    charge: 100,
    certification: null,
    imageUrl:
      "https://s3-alpha-sig.figma.com/img/a5c7/edbd/76120bcd1416f7b5f4d92ec5525aa098?Expires=1705276800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=AWspc5C2xoGefl8xlpi~n91UkTE2XzHEkK1FgEiNqc4ZhkJWSlx-dWlN7WedASwob3PLcSC6A2NO72AcctE9rgAVp13Alc-H4bvwQsisxbK8QtW-uDuSkIiJ57GDfGMUQFO-t3ZWKDgTJ~Zl63rNyxwdlzOqVpkeolhs~zO8tPg8Ru9aiwIBOWljrjOHWpT6eXwAzeMYr4xqKIW04LccxNIWi-kYq5abzlJuGuMAqdKjPH4kK1NBJE5notq2YFnkU9KxvH1iOKRF-6wF1FrZgjJyGH6Nqt4k6N1rtLEpd4cC7RZXu7liz8T7rAIczXrnOfSMuTFJ0webC8zOw6S8gw__",
    introduction:
      "Empathetic therapist dedicated to fostering a safe, non-judgmental space for your growth. With a focus on holistic well-being, I blend evidence-based practices with personalized care. Guiding individuals through life's challenges, I specialize in addressing anxiety, depression, and relationship dynamics. Together, we'll explore your strengths, empowering you to navigate life's complexities. Let's embark on a journey toward self-discovery and resilience, promoting positive change and inner harmony.",
  },
  {
    id: 75934,
    name: "John Smith",
    email: "john.smith@example.com",
    password: "123",
    expertise: ["Anxiety"],
    sessions: [],
    appointments: [
      {
        status: 0,
        patient: "",
        requested: new Date().toDateString(),
        format: "Video",
      },
    ],
    charge: 30,
    certification: null,
    imageUrl:
      "https://s3-alpha-sig.figma.com/img/84f6/8576/491d5a83edf784bd29b0c1964dab3b53?Expires=1705276800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=I51Ue3spl2QlfGkjTJddh65tyX2FOQ2KVOrZdDv-xymFzZpq9vlOZO-d4KPx0in2HisRohS9OUeGmJqpAOPEOwcso2I5NLKuO0rturXWIAbGWzRmiOrvA5hDZCzqOFPjzX~yMbd18b5MXyQhkDQXBhZVY33pPrEU84Zzbjn52Kwp7SpU57H~MXbyLjlRh0poMDL1iGzSiSfMahKMhE6TJ54FCF4WWEoc5tM7LzLvsTcXXeX7yAdBGuhbTZpxipQtRLNWXKo8Fg6eGWXJ57bW0kP8ZBj~n~TTl28juW3Z4KgujdEwO8k2i7EyVxL9nuErl6SJFpTnWOI9W7H5ujMqHw__",
    introduction:
      "Empathetic therapist dedicated to fostering a safe, non-judgmental space for your growth. With a focus on holistic well-being, I blend evidence-based practices with personalized care. Guiding individuals through life's challenges, I specialize in addressing anxiety, depression, and relationship dynamics. Together, we'll explore your strengths, empowering you to navigate life's complexities. Let's embark on a journey toward self-discovery and resilience, promoting positive change and inner harmony.",
  },
  {
    id: 12345,
    name: "Emily Brown",
    email: "emily.brown@example.com",
    password: "123",
    expertise: ["Depression"],
    sessions: [{}],
    appointments: [
      {
        status: 0,
        patient: "",
        requested: new Date().toDateString(),
        format: "Video",
      },
    ],
    charge: 50,
    certification: null,
    imageUrl:
      "https://s3-alpha-sig.figma.com/img/4848/9925/291afe7b37885d66fec4df2117de75f4?Expires=1705276800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=E1a-wk0X-ea5AUxT1gl3Asdf36F-N2N-~YoD5MX~OYN2uoYiQh1DDlQ73RsEVmh5rBcIdYozNckklcAs18kahKBMWQy-EySr-Uo-3rqHVo2fxc3pLsSYQUEJ9SlKEjxcZwtMY~HOBvBCHD2VCDH36UgXBy3HUw1DlQ9AxMRUaymNB3Q18fuSVkx3iyQtA2TErdg43u7hf~LAVJQCGg-CQr1Tj4tqLuYvUM0y4QSAOy1qx-y~q3H2PQycwGFtmmXrCDBZdJUs9cNDsT13M~~bRmiNM55F~sNRBHUgQ7tgyI1vBl8qrJd2TRO-qy-~~Sy4NnIpIizy9zyJiaYqKrZpng__",
    introduction:
      "Empathetic therapist dedicated to fostering a safe, non-judgmental space for your growth. With a focus on holistic well-being, I blend evidence-based practices with personalized care. Guiding individuals through life's challenges, I specialize in addressing anxiety, depression, and relationship dynamics. Together, we'll explore your strengths, empowering you to navigate life's complexities. Let's embark on a journey toward self-discovery and resilience, promoting positive change and inner harmony.",
  },
  {
    id: 89123,
    name: "David Wilson",
    email: "david.wilson@example.com",
    password: "123",
    expertise: ["Anxiety"],
    sessions: [{}, {}],
    appointments: [
      {
        status: 0,
        patient: "",
        requested: new Date().toDateString(),
        format: "Video",
      },
    ],
    charge: 60,
    certification: null,
    imageUrl:
      "https://s3-alpha-sig.figma.com/img/fb04/7a88/58c9a832e6c60b42652cf5bb2e6030c5?Expires=1705276800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=fyO~gjZTaJtMGjZd~QyuDTV4sBQxdl4v6cXKxNUl7I3wnX-4mWGEtdvLCX8vll2suFneVvtFQFKgWHdmLFEb0Jbfu81IWOoPlVR0ZP7ay2WACT6niIdBMb10--otrPMB1szEhOx3RUd~xmEoOqAe6uAdzxCVhi9eYq-wEq-YqV9M8vo80hO-kpVnjiHZ1LDfQ~vzNN-L3F3G0HN~-3JC3IpLEJxNEjsXgVOL9aEd3UlRjqMcT1HOyJYTdMHgTstb13H4K3HJ-BbuRGXwVYu5nKxOubTOu-pPLqTURurN~6Xgu8CTyO~a~c7Fj0UbNYVzHx6sRZ9oAou9Tuures23WQ__",
    introduction:
      "Empathetic therapist dedicated to fostering a safe, non-judgmental space for your growth. With a focus on holistic well-being, I blend evidence-based practices with personalized care. Guiding individuals through life's challenges, I specialize in addressing anxiety, depression, and relationship dynamics. Together, we'll explore your strengths, empowering you to navigate life's complexities. Let's embark on a journey toward self-discovery and resilience, promoting positive change and inner harmony.",
  },
  {
    id: 56789,
    name: "Sophia Miller",
    email: "sophia.miller@example.com",
    password: "123",
    expertise: ["Depression", "Relationships"],
    sessions: [{}, {}, {}],
    appointments: [
      {
        status: 0,
        patient: "",
        requested: new Date().toDateString(),
        format: "Video",
      },
    ],
    charge: 70,
    certification: null,
    imageUrl:
      "https://s3-alpha-sig.figma.com/img/93a9/5f5f/c890b237e9bab81a7b2e488c3522e2db?Expires=1705276800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=acMxBwTZZiGKss2uVLg1iYc7qINJug~MYqsVpvNrDuupKhYzXmfvhWkEgr7aDgHLA-c~~hLQB9eX3UYWlsk4NQCzDp2V-YOnhTjWmlgLWvXveQ4bjzLbvi5dPpJ5um0KEzxYIyAjd4FOeI5pHXuo3-FiqCOh7oh12IUGyARwVPJnYl8~DgUEW9MovFNwcrrNiZyz61-vkAj7tyJ94T94aZqsp1-Zvlz6xi2BLLWCYys8iDPkbb2F42A9dJZiHwEbaPmpXMoSjyr4v4ZwIi5RE~ykhL0Rpr9rlZGxdS1QhAWeqBZJ1-Uv1UiePPyzq5qprRGbrg-haXnGDPqmrzukNw__",
    introduction:
      "Empathetic therapist dedicated to fostering a safe, non-judgmental space for your growth. With a focus on holistic well-being, I blend evidence-based practices with personalized care. Guiding individuals through life's challenges, I specialize in addressing anxiety, depression, and relationship dynamics. Together, we'll explore your strengths, empowering you to navigate life's complexities. Let's embark on a journey toward self-discovery and resilience, promoting positive change and inner harmony.",
  },
  {
    id: 23456,
    name: "Noah Davis",
    email: "noah.davis@example.com",
    password: "123",
    expertise: ["Anxiety", "Trauma"],
    sessions: [{}],
    appointments: [
      {
        status: 0,
        patient: "",
        requested: new Date().toDateString(),
        format: "Video",
      },
    ],
    charge: 90,
    certification: null,
    imageUrl:
      "https://s3-alpha-sig.figma.com/img/607c/3b56/14333d2a414c80806637e4c44d71f3d2?Expires=1705276800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=ePtZtpzRZeJRllwhT3eRsoOB4u7txVgxQggmsuGUGT662XUzPGRlpCw7KJpAQxPVeXHmxlqdt~Jx0E5Ww8mb92katy53mkhGzUhEZhS5xc1sV5kJDb6-knerT8VNRJc92ntdo9gDzUgkSMqLQNhibKFfZQOft6y9H6Vw0NdcVPURBPlzdRCzKx3sdqCAivGJrlzIPQWAI11oy5Is0U-32SbDATPfGk0SiLa0cHy~cHEqubIBaWyjmz5CcHVPcsxlP~DuRbCZTmpm8Tq9plS6yLD-Qes~so1LoHJPv1SalQuMfmu79CUbNAMWrHbUkqwXxV8PH1ZrIc3NSh413ltfoA__",
    introduction:
      "Empathetic therapist dedicated to fostering a safe, non-judgmental space for your growth. With a focus on holistic well-being, I blend evidence-based practices with personalized care. Guiding individuals through life's challenges, I specialize in addressing anxiety, depression, and relationship dynamics. Together, we'll explore your strengths, empowering you to navigate life's complexities. Let's embark on a journey toward self-discovery and resilience, promoting positive change and inner harmony.",
  },
  {
    id: 34567,
    name: "Olivia Martinez",
    email: "olivia.martinez@example.com",
    password: "123",
    expertise: ["Depression", "Anxiety", "Relationships"],
    sessions: [{}],
    appointments: [
      {
        status: 0,
        patient: "",
        requested: new Date().toDateString(),
        format: "Video",
      },
    ],
    charge: 50,
    certification: null,
    imageUrl:
      "https://s3-alpha-sig.figma.com/img/324a/6152/3779663b8c8946c2cebb12ea80bf2a0a?Expires=1705276800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=IvgS~qPjoNFmYOkXfre-eUY7n4qgQPp0awaXKQwMetO~NZDKNHPiFgBnU3pmk2CApewM202i6v~FC1Sb46byfiJgFprbR0T7OfNK103jLRx0XsR~KJWPAbUKE0FMCEb3lGf7Jq9IT-s6m2vL3K-D5XNkgslk21hH4QIIZrJDDwwjc-RR89SWHX~upGEoYiOmsRvVeV4CkWvgZ54akxnqF9erOdW5Cr~yN2~QoJO7NQUjAXQ1YcCBpm-VpBi1Uzf3X0lwNIDJkQ1fViksdZ9XPQ0N3piNiIRnjW6sg80aAQxYW3v3FruCrM8tof~9pZO5nsQ~3LDPCjo2HoiFrJY5mA__",
    introduction:
      "Empathetic therapist dedicated to fostering a safe, non-judgmental space for your growth. With a focus on holistic well-being, I blend evidence-based practices with personalized care. Guiding individuals through life's challenges, I specialize in addressing anxiety, depression, and relationship dynamics. Together, we'll explore your strengths, empowering you to navigate life's complexities. Let's embark on a journey toward self-discovery and resilience, promoting positive change and inner harmony.",
  },
  {
    id: 67891,
    name: "Liam Garcia",
    email: "liam.garcia@example.com",
    password: "123",
    expertise: ["Depression", "Anxiety"],
    sessions: [{}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}],
    appointments: [
      {
        status: 0,
        patient: "",
        requested: new Date().toDateString(),
        format: "Video",
      },
    ],
    charge: 600,
    certification: null,
    imageUrl:
      "https://s3-alpha-sig.figma.com/img/ffb5/26f3/40f427557edf56e89f3c209978dd5f48?Expires=1705276800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Iis4rq7EfX6NPLnA-7s4RFa~KJG4Gojcr-UIagbaKiWVt6T9gMt1lu9jcvFp1oXdJXHa66V7AGDdezbRFuRq9E2rNJeotq3~vgeYDqDyb1XawqhoTUcNPXT8VLEi0cxGJl4YDosQFYB4XxEIfI2OHdFEuRv0q8jeogAqJmYFzPElf3UcHQiejQ-LT-i4NTiks50DffzGs62RHFE0hwssCrPXV3BYIE~vxa~UZa2L5YNQegRFoBEJ8f43DcdB6MCsP9iwAnr0gGdpGFSKty5pkxfWLPUt~7m5zEPiuJtqNVrl5BfsbEK8635lOuRTA6pqxHUyUYsmM2jfKuVhk2LUdg__",
    introduction:
      "Empathetic therapist dedicated to fostering a safe, non-judgmental space for your growth. With a focus on holistic well-being, I blend evidence-based practices with personalized care. Guiding individuals through life's challenges, I specialize in addressing anxiety, depression, and relationship dynamics. Together, we'll explore your strengths, empowering you to navigate life's complexities. Let's embark on a journey toward self-discovery and resilience, promoting positive change and inner harmony.",
  },
  {
    id: 45678,
    name: "Ava Rodriguez",
    email: "ava.rodriguez@example.com",
    password: "123",
    expertise: ["Depression", "Anxiety"],
    sessions: [{}],
    appointments: [
      {
        status: 0,
        patient: "",
        requested: new Date().toDateString(),
        format: "Video",
      },
    ],
    charge: 400,
    certification: null,
    imageUrl:
      "https://s3-alpha-sig.figma.com/img/4a29/08b0/a2c6a2af6f9acc7fdc7cf072929e723b?Expires=1705276800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=RTMokUBSwGgqRG0xvCdCEfpCvfdecH0gSfHIK2LND7qmUDQFjLwQeHuWRxgTfsvr6RPSJqK-60OWfc1n8ySD~pXzwCovsQHiFW9gYHue1d~hiXXwER-QX4467uO99VLVO~K4dZj34iKrQ9yZQPw7sdqGeF25D6C1ojYo4J3SaZcbfaJZPQTnhdYiyZ7lyJ6FZCWlKGUXb9GPqnkmUO-GyI-32kbkO8XZeiDWYjRrQWVz-yeBQ19nBPFvRWpkgpgb4H8GLFgDQhFIRHbdcIi1RzfPZMgcxRTNAKL3nE44LjV5M8WsUJgcPdYdwJk7M09iw~LUfbsDqDcZs0q1z0lTzg__",
    introduction:
      "Empathetic therapist dedicated to fostering a safe, non-judgmental space for your growth. With a focus on holistic well-being, I blend evidence-based practices with personalized care. Guiding individuals through life's challenges, I specialize in addressing anxiety, depression, and relationship dynamics. Together, we'll explore your strengths, empowering you to navigate life's complexities. Let's embark on a journey toward self-discovery and resilience, promoting positive change and inner harmony.",
  },
];

const patients = [
  {
    id: 23131,
    name: "John Doe",
    email: "email@email.com",
    password: "123",
    preferences: null,
    imageUrl:
      "https://s3-alpha-sig.figma.com/img/96ca/4f3c/99225394e50df5e7a78773cc97a178c7?Expires=1705276800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=b0o3l3dJVECP5-Aue3x3Y~4JUEqbmV7Jhp7Lf7ZgAKaG6xSjTVm8mWoO3lrmo~vfHSxHPkjB4Gqy4gU3oBYdJCPxISkIAumWG~IEogfbMgp0mufSBo6b0haVoVeyIKYir~UvoDk5yvoGbI~bIfC1MBlgH96mY1RNMgz8fXngDG7G~PabGveBEpcs-L-EVfvuIBfjFHrxp3dX82xfToyO3oJK1bp3be7Vru6u1MnVLL5Pd7pq586Q5N~05WJn~szIUmGJnU56clJZsn4E1SxvkWDLBO-xyfbvVSb-bYk2ScrCIy8glfYx~VnFEVu-WlrZUZEyAYtM~G4WPWXjmCNgAA__",
  },
];

export const users = {
  patient: patients,
  therapist: therapists,
};
