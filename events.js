/*
  События/мероприятия бренда.
  Добавляйте новые карточки в массив EVENTS.
*/
const EVENTS = [
  {
    id: "astana-food-fest-2025",
    title: {
      ru: "Astana Food Fest 2025",
      en: "Astana Food Fest 2025",
      kz: "Astana Food Fest 2025",
      zh: "阿斯塔納食品節 2025"
    },
    date: "2025-09-14",
    location: {
      ru: "Астана, Казахстан",
      en: "Astana, Kazakhstan",
      kz: "Астана, Қазақстан",
      zh: "哈薩克・阿斯塔納"
    },
    description: {
      ru: "Презентовали линейку талкана и гранолы, провели дегустации и получили новые B2B-контакты.",
      en: "Presented the talkan and granola line, held tastings, and gained new B2B contacts.",
      kz: "Талқан мен гранола желісін таныстырып, дәм татулар өткізіп, жаңа B2B серіктестер таптық.",
      zh: "展示了塔爾坎與格蘭諾拉系列，舉辦試吃並拓展新的 B2B 合作。"
    },
    fullDescription: {
      ru: "На Astana Food Fest 2025 команда DALA DAMI представила обновленную линейку талкана и гранолы. В рамках мероприятия прошли дегустации, живое общение с посетителями и переговоры с представителями ритейла. По итогам события бренд получил новые B2B-контакты и интерес к расширению ассортимента в торговых сетях.",
      en: "At Astana Food Fest 2025, the DALA DAMI team presented the updated talkan and granola product line. The event included tastings, direct interaction with visitors, and meetings with retail representatives. As a result, the brand gained new B2B contacts and strong interest in expanding assortment in retail chains.",
      kz: "Astana Food Fest 2025 көрмесінде DALA DAMI командасы жаңартылған талқан және гранола желісін таныстырды. Іс-шара барысында дәм татулар, келушілермен тікелей байланыс және ритейл өкілдерімен келіссөздер өтті. Нәтижесінде бренд жаңа B2B серіктестерге ие болып, сауда желілерінде ассортиментті кеңейтуге қызығушылық артты.",
      zh: "在 Astana Food Fest 2025 上，DALA DAMI 團隊展示了更新後的塔爾坎與格蘭諾拉產品線。現場舉辦了試吃活動，並與參觀者及零售端代表進行了深入交流。活動後品牌獲得新的 B2B 合作機會，並引發通路擴品的高度興趣。"
    },
    image: "assets/event-1.jpg",
    fallbackImage: "assets/product-1.svg"
  },
  {
    id: "almaty-eco-market-2025",
    title: {
      ru: "Almaty ECO Market",
      en: "Almaty ECO Market",
      kz: "Almaty ECO Market",
      zh: "阿拉木圖 ECO 市集"
    },
    date: "2025-11-02",
    location: {
      ru: "Алматы, Казахстан",
      en: "Almaty, Kazakhstan",
      kz: "Алматы, Қазақстан",
      zh: "哈薩克・阿拉木圖"
    },
    description: {
      ru: "Представили бренд DALA DAMI для аудитории ЗОЖ и получили высокий спрос на гранолу с орехами.",
      en: "Showcased DALA DAMI to a healthy-lifestyle audience and saw strong demand for nut granola.",
      kz: "DALA DAMI брендін салауатты өмір салты аудиториясына таныстырып, жаңғақты гранолаға жоғары сұраныс алдық.",
      zh: "向健康生活族群展示 DALA DAMI，堅果格蘭諾拉獲得高度關注。"
    },
    fullDescription: {
      ru: "На Almaty ECO Market бренд DALA DAMI представил ассортимент для аудитории, ориентированной на здоровое питание. Наибольший интерес вызвали продукты линейки гранолы, особенно вариант с орехами. Участие в мероприятии усилило узнаваемость бренда и дало обратную связь для дальнейших продуктовых улучшений.",
      en: "At Almaty ECO Market, DALA DAMI showcased products for a health-focused audience. The granola line drew the highest interest, especially the nut granola variant. Participation in the event increased brand awareness and provided valuable feedback for further product improvements.",
      kz: "Almaty ECO Market алаңында DALA DAMI салауатты тамақтануға бағытталған аудиторияға өз өнімдерін ұсынды. Ең жоғары қызығушылық гранола желісіне, әсіресе жаңғақты түріне болды. Іс-шара бренд танымалдылығын арттырып, өнімді одан әрі жетілдіруге қажетті кері байланыс берді.",
      zh: "在 Almaty ECO Market 活動中，DALA DAMI 向重視健康飲食的受眾展示了品牌產品。格蘭諾拉系列，尤其是堅果款，獲得最高關注。此次參展提升了品牌知名度，也收集到後續優化產品的重要回饋。"
    },
    image: "assets/event-2.jpg",
    fallbackImage: "assets/product-2.svg"
  },
  {
    id: "gulfood-dubai-2026",
    title: {
      ru: "Gulfood Dubai 2026",
      en: "Gulfood Dubai 2026",
      kz: "Gulfood Dubai 2026",
      zh: "杜拜 Gulfood 2026"
    },
    date: "2026-02-18",
    location: {
      ru: "Дубай, ОАЭ",
      en: "Dubai, UAE",
      kz: "Дубай, БАӘ",
      zh: "阿聯酋・杜拜"
    },
    description: {
      ru: "Провели переговоры с международными дистрибьюторами и презентовали экспортный потенциал бренда.",
      en: "Held meetings with international distributors and presented the brand's export potential.",
      kz: "Халықаралық дистрибьюторлармен келіссөз жүргізіп, брендтің экспорттық әлеуетін таныстырдық.",
      zh: "與國際經銷商洽談，展示品牌的出口潛力。"
    },
    fullDescription: {
      ru: "В рамках Gulfood Dubai 2026 команда DALA DAMI провела серию встреч с международными дистрибьюторами и закупщиками. На стенде были презентованы ключевые продукты, концепция натурального питания и экспортные возможности бренда. Участие укрепило международный имидж компании и открыло новые направления сотрудничества.",
      en: "During Gulfood Dubai 2026, the DALA DAMI team held a series of meetings with international distributors and buyers. The booth presented key products, the brand's natural nutrition concept, and export capabilities. Participation strengthened the company's international profile and opened new partnership opportunities.",
      kz: "Gulfood Dubai 2026 аясында DALA DAMI командасы халықаралық дистрибьюторлар және сатып алушылармен бірқатар кездесулер өткізді. Стендте негізгі өнімдер, табиғи тамақтану тұжырымдамасы және брендтің экспорттық мүмкіндіктері таныстырылды. Қатысу компанияның халықаралық беделін күшейтіп, жаңа серіктестік бағыттарын ашты.",
      zh: "在 Gulfood Dubai 2026 期間，DALA DAMI 團隊與多家國際經銷商與採購方進行了會談。展位展示了品牌核心產品、天然飲食理念與出口能力。此次參展強化了公司國際形象，並開啟新的合作方向。"
    },
    image: "assets/event-3.jpg",
    fallbackImage: "assets/product-3.svg"
  }
];
