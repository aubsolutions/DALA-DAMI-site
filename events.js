/*
  События/мероприятия бренда.
  Добавляйте новые карточки в массив EVENTS.
*/
const EVENTS = [
  {
    id: "astana-food-fest-2025",
    title: {
      ru: "Китайская международная импортная выставка, Шанхай 2023",
      en: "China International Import Expo, Shanghai 2023",
      kz: "Қытай халықаралық импорт көрмесі, Шанхай 2023",
      zh: "中国国际进口博览会，上海 2023"
    },
    date: "2023-11-05",
    location: {
      ru: "Шанхай, Китай",
      en: "Shanghai, China",
      kz: "Шанхай, Қытай",
      zh: "中国・上海"
    },
    description: {
      ru: "DALA DAMI представила продукцию на CIIE в Шанхае и получила международное признание в категории «НОУХАУ».",
      en: "DALA DAMI showcased its products at CIIE in Shanghai and received international recognition in the “Know-How” category.",
      kz: "DALA DAMI Шанхайдағы CIIE көрмесінде өнімдерін таныстырып, «НОУХАУ» санатында халықаралық мойындауға ие болды.",
      zh: "DALA DAMI 在上海 CIIE 展示了产品，并在“Know-How”类别获得国际认可。"
    },
    fullDescription: {
      ru: "В 2023 году компания DALA DAMI приняла участие в Китайской международной импортной выставке (China International Import Expo — CIIE), которая ежегодно проводится в городе Шанхай и является одной из крупнейших международных торговых площадок в мире.\n\nВыставка CIIE организована при поддержке Правительства Китайской Народной Республики и собирает тысячи компаний, производителей и инвесторов из десятков стран мира. Основная цель мероприятия — развитие международной торговли, продвижение инновационной продукции и расширение сотрудничества между компаниями различных государств.\n\nВ рамках выставки компания DALA DAMI представила собственную продукцию международной аудитории, включая представителей бизнеса, дистрибьюторов, торговых сетей и инвестиционных организаций.\n\nПо итогам внутреннего конкурсного отбора среди участников выставки представленная продукция DALA DAMI была отмечена как продукт категории «НОУХАУ», что подчеркивает ее инновационный характер, уникальные технологические решения и высокий потенциал на международном рынке.\n\nУчастие в China International Import Expo позволило компании представить продукцию на глобальной торговой площадке, установить новые деловые контакты с международными партнерами, расширить экспортные возможности и продемонстрировать конкурентоспособность продукции на мировом рынке.\n\nСегодня участие в CIIE является важным шагом для компаний, стремящихся выйти на международный уровень и укрепить свои позиции в глобальной торговле.",
      en: "In 2023, DALA DAMI took part in the China International Import Expo (CIIE), held annually in Shanghai and recognized as one of the world’s largest international trade platforms. CIIE is organized with the support of the Government of the People’s Republic of China and brings together thousands of companies, manufacturers, and investors from dozens of countries. The event’s core mission is to promote international trade, showcase innovative products, and expand cross-border business cooperation. During the exhibition, DALA DAMI presented its products to an international audience, including business representatives, distributors, retail chains, and investment organizations. Following the internal competitive selection among participants, DALA DAMI products were recognized in the “Know-How” category, highlighting their innovative nature, unique technological solutions, and strong potential in global markets. Participation in CIIE enabled the company to present its products on a global trade platform, establish new international business contacts, expand export opportunities, and demonstrate product competitiveness worldwide. Today, participation in CIIE is an important milestone for companies aiming to enter international markets and strengthen their positions in global trade.",
      kz: "2023 жылы DALA DAMI компаниясы Шанхай қаласында жыл сайын өтетін және әлемдегі ең ірі халықаралық сауда алаңдарының бірі саналатын Қытай халықаралық импорт көрмесіне (China International Import Expo — CIIE) қатысты. CIIE көрмесі Қытай Халық Республикасы Үкіметінің қолдауымен ұйымдастырылады және ондаған елден мыңдаған компаниялар, өндірушілер мен инвесторларды біріктіреді. Іс-шараның негізгі мақсаты — халықаралық сауданы дамыту, инновациялық өнімдерді ілгерілету және әртүрлі мемлекеттер компаниялары арасындағы ынтымақтастықты кеңейту. Көрме аясында DALA DAMI компаниясы өз өнімдерін халықаралық аудиторияға, оның ішінде бизнес өкілдеріне, дистрибьюторларға, сауда желілеріне және инвестициялық ұйымдарға таныстырды. Көрме қатысушылары арасындағы ішкі конкурстық іріктеу қорытындысы бойынша DALA DAMI өнімі «НОУХАУ» санатындағы өнім ретінде аталып өтті. Бұл оның инновациялық сипатын, бірегей технологиялық шешімдерін және халықаралық нарықтағы жоғары әлеуетін көрсетеді. China International Import Expo көрмесіне қатысу компанияға өнімін жаһандық сауда алаңында таныстыруға, халықаралық серіктестермен жаңа іскерлік байланыстар орнатуға, экспорт мүмкіндіктерін кеңейтуге және әлемдік нарықта өнім бәсекеге қабілеттілігін көрсетуге мүмкіндік берді. Бүгінде CIIE-ге қатысу халықаралық деңгейге шығуды және жаһандық саудадағы позициясын нығайтуды көздейтін компаниялар үшін маңызды қадам болып табылады.",
      zh: "2023 年，DALA DAMI 参加了在上海每年举办的中国国际进口博览会（China International Import Expo，CIIE）。该展会是全球最具规模的国际贸易平台之一。CIIE 在中华人民共和国政府支持下举办，汇聚来自数十个国家的数千家企业、制造商与投资者。活动核心目标是推动国际贸易、促进创新产品展示，并加强各国企业间的合作。展会期间，DALA DAMI 向国际受众展示了自有产品，涵盖商业代表、经销商、零售连锁与投资机构。经由参展企业内部评选，DALA DAMI 的参展产品被评为“Know-How（专有技术）”类别，凸显其创新特性、独特技术方案与在国际市场上的高成长潜力。参与 CIIE 使公司得以在全球贸易舞台展示产品，建立新的国际商务联系，拓展出口机会，并展现产品在全球市场的竞争力。如今，参与 CIIE 已成为有志于走向国际并巩固全球贸易地位企业的重要一步。"
    },
    image: "assets/shanhay1.png",
    fallbackImage: "assets/shanhay2.png"
  },
  {
    id: "almaty-eco-market-2025",
    title: {
      ru: "Almaty ECO Market",
      en: "Almaty ECO Market",
      kz: "Almaty ECO Market",
      zh: "阿拉木图 ECO 市集"
    },
    date: "2025-11-02",
    location: {
      ru: "Алматы, Казахстан",
      en: "Almaty, Kazakhstan",
      kz: "Алматы, Қазақстан",
      zh: "哈萨克斯坦・阿拉木图"
    },
    description: {
      ru: "Представили бренд DALA DAMI для аудитории ЗОЖ и получили высокий спрос на гранолу с орехами.",
      en: "Showcased DALA DAMI to a healthy-lifestyle audience and saw strong demand for nut granola.",
      kz: "DALA DAMI брендін салауатты өмір салты аудиториясына таныстырып, жаңғақты гранолаға жоғары сұраныс алдық.",
      zh: "向健康生活人群展示 DALA DAMI，坚果格兰诺拉获得高度关注。"
    },
    fullDescription: {
      ru: "На Almaty ECO Market бренд DALA DAMI представил ассортимент для аудитории, ориентированной на здоровое питание. Наибольший интерес вызвали продукты линейки гранолы, особенно вариант с орехами. Участие в мероприятии усилило узнаваемость бренда и дало обратную связь для дальнейших продуктовых улучшений.",
      en: "At Almaty ECO Market, DALA DAMI showcased products for a health-focused audience. The granola line drew the highest interest, especially the nut granola variant. Participation in the event increased brand awareness and provided valuable feedback for further product improvements.",
      kz: "Almaty ECO Market алаңында DALA DAMI салауатты тамақтануға бағытталған аудиторияға өз өнімдерін ұсынды. Ең жоғары қызығушылық гранола желісіне, әсіресе жаңғақты түріне болды. Іс-шара бренд танымалдылығын арттырып, өнімді одан әрі жетілдіруге қажетті кері байланыс берді.",
      zh: "在 Almaty ECO Market 活动中，DALA DAMI 向重视健康饮食的受众展示了品牌产品。格兰诺拉系列，尤其是坚果款，获得最高关注。此次参展提升了品牌知名度，也收集到后续优化产品的重要反馈。"
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
      zh: "迪拜 Gulfood 2026"
    },
    date: "2026-02-18",
    location: {
      ru: "Дубай, ОАЭ",
      en: "Dubai, UAE",
      kz: "Дубай, БАӘ",
      zh: "阿联酋・迪拜"
    },
    description: {
      ru: "Провели переговоры с международными дистрибьюторами и презентовали экспортный потенциал бренда.",
      en: "Held meetings with international distributors and presented the brand's export potential.",
      kz: "Халықаралық дистрибьюторлармен келіссөз жүргізіп, брендтің экспорттық әлеуетін таныстырдық.",
      zh: "与国际经销商洽谈，展示品牌的出口潜力。"
    },
    fullDescription: {
      ru: "В рамках Gulfood Dubai 2026 команда DALA DAMI провела серию встреч с международными дистрибьюторами и закупщиками. На стенде были презентованы ключевые продукты, концепция натурального питания и экспортные возможности бренда. Участие укрепило международный имидж компании и открыло новые направления сотрудничества.",
      en: "During Gulfood Dubai 2026, the DALA DAMI team held a series of meetings with international distributors and buyers. The booth presented key products, the brand's natural nutrition concept, and export capabilities. Participation strengthened the company's international profile and opened new partnership opportunities.",
      kz: "Gulfood Dubai 2026 аясында DALA DAMI командасы халықаралық дистрибьюторлар және сатып алушылармен бірқатар кездесулер өткізді. Стендте негізгі өнімдер, табиғи тамақтану тұжырымдамасы және брендтің экспорттық мүмкіндіктері таныстырылды. Қатысу компанияның халықаралық беделін күшейтіп, жаңа серіктестік бағыттарын ашты.",
      zh: "在 Gulfood Dubai 2026 期间，DALA DAMI 团队与多家国际经销商和采购方进行了会谈。展位展示了品牌核心产品、天然饮食理念与出口能力。此次参展强化了公司国际形象，并开启新的合作方向。"
    },
    image: "assets/event-3.jpg",
    fallbackImage: "assets/product-3.svg"
  }
];
