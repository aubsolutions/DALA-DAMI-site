/*
  Укажите номер WhatsApp в международном формате без "+" и пробелов.
  Пример для Казахстана: 77001234567
*/
const WHATSAPP_NUMBER = "77770664866";

const CURRENCY = "₸";
const CART_STORAGE_KEY = "dalaDamiCart";
const LANG_STORAGE_KEY = "dalaDamiLang";
const SUPPORTED_LANGS = ["ru", "en", "kz", "zh"];

const LANG_ATTR_MAP = {
  ru: "ru",
  en: "en",
  kz: "kk",
  zh: "zh-CN"
};

const LOCALE_MAP = {
  ru: "ru-RU",
  en: "en-US",
  kz: "kk-KZ",
  zh: "zh-CN"
};

const TRANSLATIONS = {
  ru: {
    meta: {
      title: "DALA DAMI — Натуральные продукты",
      description: "DALA DAMI — натуральные продукты питания в стиле ЭКО и ЗОЖ. Каталог, корзина, заказ через email и WhatsApp."
    },
    lang: { aria: "Выбор языка" },
    nav: {
      about: "О компании",
      catalog: "Каталог",
      benefits: "Преимущества",
      events: "Мероприятия",
      howOrder: "Как заказать",
      contacts: "Контакты"
    },
    header: {
      cart: "Корзина",
      openCartAria: "Открыть корзину",
      openMenuAria: "Открыть меню"
    },
    hero: {
      label: "ЭКО ПРОДУКТЫ DALA DAMI",
      title: "Натуральные продукты премиального качества",
      description: "Чистые составы, отборное сырье и аккуратное производство для осознанного питания и ежедневного доверия к вашему выбору.",
      catalogBtn: "Перейти в каталог",
      orderBtn: "Оформить заказ",
      stat1: "Натуральные ингредиенты и чистый состав",
      stat2: "Прием заказов через сайт и WhatsApp",
      stat3Value: "ЭКО",
      stat3: "Современный премиальный стиль и качество"
    },
    about: {
      title: "О компании",
      text: "DALA DAMI — компания, специализирующаяся на производстве натуральных продуктов питания из пшена. Мы делаем ставку на экологически чистое производство, высокое качество сырья и бережный подход к сохранению природной пользы каждого продукта.\n\nНаше главное направление — создание полезных продуктов для людей, которые выбирают здоровый образ жизни, натуральный состав и осознанное питание. В нашей продукции нет лишнего — только отборные ингредиенты, естественный вкус и польза для всей семьи. Мы уделяем особое внимание продуктам без сахара, ориентируясь на современные требования к здоровому и сбалансированному рациону.\n\nПри этом DALA DAMI сохраняет связь с традициями, развивая направление национальных продуктов питания. Мы объединяем натуральность, современные стандарты качества и уважение к культуре, чтобы предлагать покупателям полезную, вкусную и достойную продукцию на каждый день."
    },
    catalog: {
      title: "Каталог товаров",
      openCart: "Открыть корзину",
      detailsBtn: "Подробнее о товаре",
      addBtn: "В корзину",
      addModalBtn: "Добавить в корзину",
      decreaseAria: "Уменьшить количество",
      increaseAria: "Увеличить количество",
      compositionLabel: "Состав",
      volumeLabel: "Вес/объем",
      priceLabel: "Цена",
      priceOnRequest: "По запросу"
    },
    benefits: {
      title: "Преимущества DALA DAMI",
      item1Title: "Натуральный состав",
      item1Text: "Минимум лишних ингредиентов и максимум природной пользы.",
      item2Title: "Контроль качества",
      item2Text: "Каждая партия проходит проверку на стабильность вкуса и безопасности.",
      item3Title: "Современный подход",
      item3Text: "Удобный формат заказа, понятный сервис и быстрая обратная связь.",
      item4Title: "Премиальный стиль",
      item4Text: "Эстетика бренда, которой приятно доверять и делиться.",
      item5Title: "Для семьи и бизнеса",
      item5Text: "Подходит для личных покупок, офисов и партнерских поставок.",
      item6Title: "Поддержка в WhatsApp",
      item6Text: "Быстро согласуем состав заказа, доставку и удобный способ оплаты."
    },
    events: {
      title: "Мероприятия",
      lead: "Участие DALA DAMI в локальных и международных выставках, ярмарках и профильных событиях.",
      dateLabel: "Дата",
      locationLabel: "Локация",
      moreBtn: "Подробнее",
      prevAria: "Предыдущее мероприятие",
      nextAria: "Следующее мероприятие"
    },
    partners: {
      title: "Нам доверяют",
      lead: "Партнеры и компании, с которыми DALA DAMI уже работает по поставкам и совместным проектам.",
      prevAria: "Предыдущие логотипы",
      nextAria: "Следующие логотипы"
    },
    howOrder: {
      title: "Как заказать",
      step1: "Выберите товары в каталоге и добавьте их в корзину.",
      step2: "Откройте корзину и проверьте количество позиций.",
      step3: "Нажмите «Оформить заказ» и заполните короткую форму.",
      step4: "Мы получим заявку на email и свяжемся для подтверждения."
    },
    form: {
      sectionTitle: "Форма заказа",
      openModalBtn: "Открыть в модальном окне",
      modalTitle: "Оформление заказа",
      nameLabel: "Ваше имя",
      namePlaceholder: "Например, Айдана",
      phoneLabel: "Номер телефона",
      companyLabel: "Компания",
      companyPlaceholder: "Название компании (если есть)",
      deliveryLabel: "Нужна доставка",
      deliveryYes: "Да",
      deliveryNo: "Нет",
      commentLabel: "Комментарий",
      commentPlaceholder: "Уточнения по заказу и доставке",
      cartLabel: "Состав корзины",
      sendBtn: "Отправить заказ на email",
      whatsappBtn: "Заказать через WhatsApp",
      messages: {
        emptyCart: "Добавьте товары в корзину перед отправкой заказа.",
        invalidPhone: "Введите корректный номер телефона в формате +7 (___) ___-__-__.",
        sent: "Заказ отправлен. Мы свяжемся с вами в ближайшее время.",
        sendError: "Не удалось отправить заказ."
      }
    },
    contacts: {
      title: "Контакты",
      phoneLabel: "Телефон",
      whatsappLabel: "WhatsApp: написать в чат",
      emailLabel: "Email",
      addressLabel: "Адрес",
      addressValue: "г. Астана, Е 429, д 14, нп 4",
      qrTitle: "QR для быстрых контактов",
      qrWhatsapp: "WhatsApp QR",
      qrWechat: "WeChat QR"
    },
    footer: {
      copyMark: "©",
      copyText: "DALA DAMI. Натуральные продукты питания.",
      toTop: "Наверх"
    },
    cart: {
      title: "Ваша корзина",
      total: "Итого",
      checkout: "Оформить заказ",
      empty: "Корзина пока пустая. Добавьте товары из каталога.",
      remove: "Удалить",
      perItem: "шт",
      clarified: "Уточняется",
      plusOnRequest: "+ товары по запросу",
      emptySummary: "Корзина пустая"
    },
    whatsapp: {
      intro: "Здравствуйте! Хочу оформить заказ DALA DAMI."
    }
  },
  en: {
    meta: {
      title: "DALA DAMI — Natural Food Products",
      description: "DALA DAMI natural eco and healthy food products. Browse catalog, add to cart, and order by email or WhatsApp."
    },
    lang: { aria: "Language selection" },
    nav: {
      about: "About",
      catalog: "Catalog",
      benefits: "Benefits",
      events: "Events",
      howOrder: "How to order",
      contacts: "Contacts"
    },
    header: {
      cart: "Cart",
      openCartAria: "Open cart",
      openMenuAria: "Open menu"
    },
    hero: {
      label: "DALA DAMI ECO PRODUCTS",
      title: "Premium Natural Food Products",
      description: "Clean ingredients, carefully selected raw materials, and thoughtful production for conscious nutrition and everyday trust.",
      catalogBtn: "Go to catalog",
      orderBtn: "Place order",
      stat1: "Natural ingredients and clean formula",
      stat2: "Orders accepted via website and WhatsApp",
      stat3Value: "ECO",
      stat3: "Modern premium style and quality"
    },
    about: {
      title: "About the Company",
      text: "DALA DAMI is a company specializing in the production of natural millet-based food products. We focus on environmentally responsible production, high-quality raw materials, and a careful approach to preserving the natural benefits of every product.\n\nOur main direction is creating wholesome products for people who choose a healthy lifestyle, natural ingredients, and conscious nutrition. There is nothing unnecessary in our products, only selected ingredients, natural taste, and benefits for the whole family. We pay special attention to sugar-free products, responding to modern expectations for a healthy and balanced diet.\n\nAt the same time, DALA DAMI stays connected to tradition by developing national food products. We combine natural purity, modern quality standards, and respect for culture to offer customers healthy, tasty, and worthy products for everyday life."
    },
    catalog: {
      title: "Product Catalog",
      openCart: "Open cart",
      detailsBtn: "Product details",
      addBtn: "Add to cart",
      addModalBtn: "Add to cart",
      decreaseAria: "Decrease quantity",
      increaseAria: "Increase quantity",
      compositionLabel: "Ingredients",
      volumeLabel: "Weight/Volume",
      priceLabel: "Price",
      priceOnRequest: "On request"
    },
    benefits: {
      title: "DALA DAMI Benefits",
      item1Title: "Natural Formula",
      item1Text: "Minimal extra additives and maximum natural value.",
      item2Title: "Quality Control",
      item2Text: "Each batch is checked for stable taste and safety.",
      item3Title: "Modern Approach",
      item3Text: "Convenient ordering format and quick feedback.",
      item4Title: "Premium Style",
      item4Text: "Brand aesthetics that inspire trust.",
      item5Title: "For Family and Business",
      item5Text: "Suitable for personal purchases and partner supply.",
      item6Title: "WhatsApp Support",
      item6Text: "We quickly confirm order details and delivery."
    },
    events: {
      title: "Events",
      lead: "DALA DAMI participation in local and international fairs, expos, and industry events.",
      dateLabel: "Date",
      locationLabel: "Location",
      moreBtn: "More details",
      prevAria: "Previous event",
      nextAria: "Next event"
    },
    partners: {
      title: "Trusted By",
      lead: "Partners and companies already working with DALA DAMI in supply and joint projects.",
      prevAria: "Previous logos",
      nextAria: "Next logos"
    },
    howOrder: {
      title: "How to Order",
      step1: "Choose products in the catalog and add them to your cart.",
      step2: "Open the cart and check your selected items.",
      step3: "Click “Place order” and fill in the short form.",
      step4: "We receive your request by email and contact you to confirm."
    },
    form: {
      sectionTitle: "Order Form",
      openModalBtn: "Open in modal",
      modalTitle: "Checkout",
      nameLabel: "Your Name",
      namePlaceholder: "For example, Aidan",
      phoneLabel: "Phone Number",
      companyLabel: "Company",
      companyPlaceholder: "Company name (optional)",
      deliveryLabel: "Need delivery",
      deliveryYes: "Yes",
      deliveryNo: "No",
      commentLabel: "Comment",
      commentPlaceholder: "Delivery and order notes",
      cartLabel: "Cart Contents",
      sendBtn: "Send order via email",
      whatsappBtn: "Order via WhatsApp",
      messages: {
        emptyCart: "Add products to the cart before sending the order.",
        invalidPhone: "Enter a valid phone number in format +7 (___) ___-__-__.",
        sent: "Your order has been sent. We will contact you soon.",
        sendError: "Could not send the order."
      }
    },
    contacts: {
      title: "Contacts",
      phoneLabel: "Phone",
      whatsappLabel: "WhatsApp: open chat",
      emailLabel: "Email",
      addressLabel: "Address",
      addressValue: "Astana, E 429, building 14, office 4",
      qrTitle: "QR Codes for Quick Contact",
      qrWhatsapp: "WhatsApp QR",
      qrWechat: "WeChat QR"
    },
    footer: {
      copyMark: "©",
      copyText: "DALA DAMI. Natural food products.",
      toTop: "Back to top"
    },
    cart: {
      title: "Your Cart",
      total: "Total",
      checkout: "Place order",
      empty: "Your cart is empty. Add products from the catalog.",
      remove: "Remove",
      perItem: "pcs",
      clarified: "To be clarified",
      plusOnRequest: "+ products on request",
      emptySummary: "Cart is empty"
    },
    whatsapp: {
      intro: "Hello! I would like to place a DALA DAMI order."
    }
  },
  kz: {
    meta: {
      title: "DALA DAMI — Табиғи азық-түлік",
      description: "DALA DAMI эко және дұрыс тамақтануға арналған табиғи өнімдері. Каталог, себет, email және WhatsApp арқылы тапсырыс."
    },
    lang: { aria: "Тілді таңдау" },
    nav: {
      about: "Компания туралы",
      catalog: "Каталог",
      benefits: "Артықшылықтар",
      events: "Іс-шаралар",
      howOrder: "Қалай тапсырыс беру",
      contacts: "Байланыс"
    },
    header: {
      cart: "Себет",
      openCartAria: "Себетті ашу",
      openMenuAria: "Мәзірді ашу"
    },
    hero: {
      label: "DALA DAMI ЭКО ӨНІМДЕРІ",
      title: "Премиум сапалы табиғи өнімдер",
      description: "Таза құрам, мұқият таңдалған шикізат және саналы тамақтануға арналған ұқыпты өндіріс.",
      catalogBtn: "Каталогқа өту",
      orderBtn: "Тапсырыс беру",
      stat1: "Табиғи ингредиенттер және таза құрам",
      stat2: "Тапсырыстар сайт пен WhatsApp арқылы қабылданады",
      stat3Value: "ЭКО",
      stat3: "Заманауи премиум стиль мен сапа"
    },
    about: {
      title: "Компания туралы",
      text: "DALA DAMI — тарыдан жасалатын табиғи азық-түлік өнімдерін өндіруге маманданған компания. Біз экологиялық таза өндіріске, жоғары сапалы шикізатқа және әр өнімнің табиғи пайдасын сақтауға ұқыпты көзқарасқа басымдық береміз.\n\nБіздің негізгі бағытымыз — салауатты өмір салтын, табиғи құрамды және саналы тамақтануды таңдайтын адамдарға арналған пайдалы өнімдер жасау. Біздің өнімдерде артық ештеңе жоқ: тек мұқият іріктелген ингредиенттер, табиғи дәм және бүкіл отбасыға арналған пайда. Біз қантсыз өнімдерге ерекше көңіл бөліп, дұрыс әрі теңгерімді тамақтанудың заманауи талаптарына сүйенеміз.\n\nСонымен қатар, DALA DAMI ұлттық тағам өнімдері бағытын дамыта отырып, дәстүрмен байланысын сақтайды. Біз табиғилықты, заманауи сапа стандарттарын және мәдениетке деген құрметті біріктіріп, тұтынушыларға күн сайын пайдалы, дәмді және лайықты өнім ұсынуға тырысамыз."
    },
    catalog: {
      title: "Өнімдер каталогы",
      openCart: "Себетті ашу",
      detailsBtn: "Өнім туралы",
      addBtn: "Себетке",
      addModalBtn: "Себетке қосу",
      decreaseAria: "Санын азайту",
      increaseAria: "Санын көбейту",
      compositionLabel: "Құрамы",
      volumeLabel: "Салмақ/көлем",
      priceLabel: "Бағасы",
      priceOnRequest: "Сұраныс бойынша"
    },
    benefits: {
      title: "DALA DAMI артықшылықтары",
      item1Title: "Табиғи құрам",
      item1Text: "Артық қоспалар аз, табиғи пайда көп.",
      item2Title: "Сапа бақылауы",
      item2Text: "Әр партия дәмі мен қауіпсіздігі бойынша тексеріледі.",
      item3Title: "Заманауи тәсіл",
      item3Text: "Тапсырыс беру ыңғайлы және кері байланыс жылдам.",
      item4Title: "Премиум стиль",
      item4Text: "Сенім тудыратын ұқыпты бренд эстетикасы.",
      item5Title: "Отбасы және бизнес үшін",
      item5Text: "Жеке сатып алуға да, серіктестік жеткізілімге де қолайлы.",
      item6Title: "WhatsApp қолдауы",
      item6Text: "Тапсырыс құрамы мен жеткізуді тез келісеміз."
    },
    events: {
      title: "Іс-шаралар",
      lead: "DALA DAMI бренді жергілікті және халықаралық көрмелерге, жәрмеңкелерге және салалық іс-шараларға қатысады.",
      dateLabel: "Күні",
      locationLabel: "Өтетін жері",
      moreBtn: "Толығырақ",
      prevAria: "Алдыңғы іс-шара",
      nextAria: "Келесі іс-шара"
    },
    partners: {
      title: "Бізге сенім артады",
      lead: "DALA DAMI брендімен жеткізу және бірлескен жобалар бойынша жұмыс істейтін серіктестер.",
      prevAria: "Алдыңғы логотиптер",
      nextAria: "Келесі логотиптер"
    },
    howOrder: {
      title: "Қалай тапсырыс беру",
      step1: "Каталогтан өнім таңдап, себетке қосыңыз.",
      step2: "Себетті ашып, таңдалған позицияларды тексеріңіз.",
      step3: "«Тапсырыс беру» батырмасын басып, қысқа форманы толтырыңыз.",
      step4: "Сұраныс email-ге түседі, біз растау үшін хабарласамыз."
    },
    form: {
      sectionTitle: "Тапсырыс формасы",
      openModalBtn: "Модалды терезеде ашу",
      modalTitle: "Тапсырысты рәсімдеу",
      nameLabel: "Атыңыз",
      namePlaceholder: "Мысалы, Айдана",
      phoneLabel: "Телефон нөмірі",
      companyLabel: "Компания",
      companyPlaceholder: "Компания атауы (болса)",
      deliveryLabel: "Жеткізу керек пе",
      deliveryYes: "Иә",
      deliveryNo: "Жоқ",
      commentLabel: "Пікір",
      commentPlaceholder: "Тапсырыс пен жеткізуге қатысты ескертпе",
      cartLabel: "Себет құрамы",
      sendBtn: "Тапсырысты email-ге жіберу",
      whatsappBtn: "WhatsApp арқылы тапсырыс",
      messages: {
        emptyCart: "Тапсырыс жібермес бұрын себетке тауар қосыңыз.",
        invalidPhone: "Телефон нөмірін +7 (___) ___-__-__ форматында енгізіңіз.",
        sent: "Тапсырыс жіберілді. Жақын арада хабарласамыз.",
        sendError: "Тапсырысты жіберу мүмкін болмады."
      }
    },
    contacts: {
      title: "Байланыс",
      phoneLabel: "Телефон",
      whatsappLabel: "WhatsApp: чатқа жазу",
      emailLabel: "Email",
      addressLabel: "Мекенжай",
      addressValue: "Астана қ., Е 429, 14-үй, 4 кеңсе",
      qrTitle: "Жылдам байланысқа арналған QR",
      qrWhatsapp: "WhatsApp QR",
      qrWechat: "WeChat QR"
    },
    footer: {
      copyMark: "©",
      copyText: "DALA DAMI. Табиғи азық-түлік өнімдері.",
      toTop: "Жоғарыға"
    },
    cart: {
      title: "Сіздің себетіңіз",
      total: "Жиыны",
      checkout: "Тапсырыс беру",
      empty: "Себет бос. Каталогтан тауар қосыңыз.",
      remove: "Өшіру",
      perItem: "дана",
      clarified: "Нақтылау қажет",
      plusOnRequest: "+ сұраныс бойынша тауарлар",
      emptySummary: "Себет бос"
    },
    whatsapp: {
      intro: "Сәлеметсіз бе! DALA DAMI өнімдеріне тапсырыс бергім келеді."
    }
  },
  zh: {
    meta: {
      title: "DALA DAMI — 天然健康食品",
      description: "DALA DAMI 提供天然、生态与健康取向食品。可浏览商品、加入购物车，并通过 Email 或 WhatsApp 下单。"
    },
    lang: { aria: "语言选择" },
    nav: {
      about: "关于品牌",
      catalog: "商品目录",
      benefits: "品牌优势",
      events: "活动",
      howOrder: "订购方式",
      contacts: "联系方式"
    },
    header: {
      cart: "购物车",
      openCartAria: "打开购物车",
      openMenuAria: "打开菜单"
    },
    hero: {
      label: "DALA DAMI 生态食品",
      title: "高品质天然食品",
      description: "严选原料、干净配方与细致工艺，为重视健康与品质的日常饮食而设计。",
      catalogBtn: "查看商品",
      orderBtn: "立即下单",
      stat1: "天然食材与干净配方",
      stat2: "可通过网站与 WhatsApp 下单",
      stat3Value: "生态",
      stat3: "现代高端风格与稳定品质"
    },
    about: {
      title: "关于品牌",
      text: "DALA DAMI 是一家专注于生产天然小米食品的公司。我们坚持环保洁净的生产方式、优质原料，并以细致严谨的态度保留每一款产品的天然营养价值。\n\n我们的核心方向，是为选择健康生活方式、天然配方与理性饮食的人们打造有益健康的食品。我们的产品没有多余成分，只有甄选原料、自然风味，以及适合全家人的营养价值。我们也特别重视无糖产品，以回应当代消费者对健康均衡饮食的需求。\n\n与此同时，DALA DAMI 也持续传承传统，发展民族特色食品方向。我们将天然、本真的理念，现代质量标准，以及对文化的尊重结合起来，为消费者提供适合每日享用的健康、美味且值得信赖的产品。"
    },
    catalog: {
      title: "商品目录",
      openCart: "打开购物车",
      detailsBtn: "查看详情",
      addBtn: "加入购物车",
      addModalBtn: "加入购物车",
      decreaseAria: "减少数量",
      increaseAria: "增加数量",
      compositionLabel: "成分",
      volumeLabel: "重量/容量",
      priceLabel: "价格",
      priceOnRequest: "价格咨询"
    },
    benefits: {
      title: "DALA DAMI 优势",
      item1Title: "天然配方",
      item1Text: "减少多余添加，保留自然营养。",
      item2Title: "品质管控",
      item2Text: "每一批次均进行风味与安全检测。",
      item3Title: "现代服务",
      item3Text: "下单流程清楚，回复快速。",
      item4Title: "高端美学",
      item4Text: "干净利落的品牌形象，值得信赖。",
      item5Title: "家庭与商务适用",
      item5Text: "适合个人购买与合作供应。",
      item6Title: "WhatsApp 支持",
      item6Text: "可快速确认品项、配送与订单细节。"
    },
    events: {
      title: "活动",
      lead: "DALA DAMI 参与本地与国际展会、市集及食品产業活動。",
      dateLabel: "日期",
      locationLabel: "地点",
      moreBtn: "查看详情",
      prevAria: "上一个活动",
      nextAria: "下一个活动"
    },
    partners: {
      title: "合作伙伴",
      lead: "以下为已与 DALA DAMI 在供应与合作项目中建立合作的伙伴。",
      prevAria: "上一个标志",
      nextAria: "下一个标志"
    },
    howOrder: {
      title: "订购方式",
      step1: "在商品目录中选择商品并加入购物车。",
      step2: "打开购物车，确认商品与数量。",
      step3: "点击“立即下单”并填写简短表单。",
      step4: "我们将收到 Email 订单并与您联系确认。"
    },
    form: {
      sectionTitle: "订单表单",
      openModalBtn: "在弹窗中打开",
      modalTitle: "订单结账",
      nameLabel: "您的姓名",
      namePlaceholder: "例如：Aida",
      phoneLabel: "电话号码",
      companyLabel: "公司",
      companyPlaceholder: "公司名称（选填）",
      deliveryLabel: "是否需要配送",
      deliveryYes: "是",
      deliveryNo: "否",
      commentLabel: "备注",
      commentPlaceholder: "配送或订单补充说明",
      cartLabel: "购物车内容",
      sendBtn: "通过 Email 发送订单",
      whatsappBtn: "通过 WhatsApp 下单",
      messages: {
        emptyCart: "请先加入商品后再送出订单。",
        invalidPhone: "请输入正确电话号码格式：+7 (___) ___-__-__。",
        sent: "订单已发送，我们将尽快与您联系。",
        sendError: "订单发送失败。"
      }
    },
    contacts: {
      title: "联系方式",
      phoneLabel: "电话",
      whatsappLabel: "WhatsApp：打开对话",
      emailLabel: "Email",
      addressLabel: "地址",
      addressValue: "阿斯塔纳市 E 429，14 号，4 室",
      qrTitle: "快速联系二维码",
      qrWhatsapp: "WhatsApp 二维码",
      qrWechat: "WeChat 二维码"
    },
    footer: {
      copyMark: "©",
      copyText: "DALA DAMI。天然健康食品。",
      toTop: "回到顶部"
    },
    cart: {
      title: "您的购物车",
      total: "总计",
      checkout: "立即下单",
      empty: "购物车目前为空，请先从目录加入商品。",
      remove: "删除",
      perItem: "件",
      clarified: "待确认",
      plusOnRequest: "+ 价格咨询商品",
      emptySummary: "购物车为空"
    },
    whatsapp: {
      intro: "您好！我想订购 DALA DAMI 产品。"
    }
  }
};

const catalogGrid = document.getElementById("catalogGrid");
const eventsTrack = document.getElementById("eventsGrid");
const partnersGrid = document.getElementById("partnersGrid");
const eventModal = document.getElementById("eventModal");
const eventModalBody = document.getElementById("eventModalBody");
const productModal = document.getElementById("productModal");
const productModalBody = document.getElementById("productModalBody");
const orderModal = document.getElementById("orderModal");
const cartDrawer = document.getElementById("cartDrawer");
const cartList = document.getElementById("cartList");
const cartTotal = document.getElementById("cartTotal");
const cartBadge = document.getElementById("cartBadge");
const mobileCartBadge = document.getElementById("mobileCartBadge");
const orderForms = document.querySelectorAll("[data-order-form]");
const navHeader = document.querySelector(".header");
const menuToggle = document.getElementById("menuToggle");
const pageTitle = document.getElementById("pageTitle");
const metaDescription = document.getElementById("metaDescription");
const langButtons = document.querySelectorAll("[data-lang-btn]");

const whatsappLinks = [
  document.getElementById("headerWhatsapp"),
  document.getElementById("contactWhatsapp"),
  document.getElementById("orderWhatsapp"),
  document.getElementById("modalWhatsapp")
].filter(Boolean);

const productMap = new Map(PRODUCTS.map((product) => [product.id, product]));
const cardQuantities = {};
let currentLang = loadLang();
let activeProductId = null;
let activeEventId = null;
let cart = loadCart();

init();

function init() {
  bindGlobalEvents();
  bindForms();
  bindPhoneMasks();
  bindLanguageSwitcher();
  setLanguage(currentLang);
  document.getElementById("currentYear").textContent = new Date().getFullYear();
}

function bindGlobalEvents() {
  document.querySelectorAll(".cart-toggle").forEach((button) => {
    button.addEventListener("click", toggleCartDrawer);
  });

  document.querySelectorAll("[data-open-order]").forEach((button) => {
    button.addEventListener("click", () => {
      openOrderModal();
      closeCartDrawer();
    });
  });

  document.querySelectorAll("[data-close-modal]").forEach((button) => {
    button.addEventListener("click", closeModals);
  });

  document.querySelectorAll("[data-event-nav]").forEach((button) => {
    button.addEventListener("click", () => {
      if (!eventsTrack) return;
      const direction = button.dataset.eventNav === "next" ? 1 : -1;
      const step = Math.max(280, Math.floor(eventsTrack.clientWidth * 0.86));
      eventsTrack.scrollBy({ left: step * direction, behavior: "smooth" });
    });
  });

  document.querySelectorAll("[data-partner-nav]").forEach((button) => {
    button.addEventListener("click", () => {
      if (!partnersGrid) return;
      const direction = button.dataset.partnerNav === "next" ? 1 : -1;
      const step = Math.max(260, Math.floor(partnersGrid.clientWidth * 0.9));
      partnersGrid.scrollBy({ left: step * direction, behavior: "smooth" });
    });
  });

  if (menuToggle) {
    menuToggle.addEventListener("click", () => {
      navHeader.classList.toggle("is-open");
    });
  }

  document.querySelectorAll(".nav a").forEach((link) => {
    link.addEventListener("click", () => navHeader.classList.remove("is-open"));
  });

  window.addEventListener("keydown", (event) => {
    if (event.key === "Escape") {
      closeModals();
      closeCartDrawer();
    }
  });
}

function bindLanguageSwitcher() {
  langButtons.forEach((button) => {
    button.addEventListener("click", () => {
      setLanguage(button.dataset.langBtn);
    });
  });
}

function setLanguage(lang) {
  if (!SUPPORTED_LANGS.includes(lang)) return;

  currentLang = lang;
  localStorage.setItem(LANG_STORAGE_KEY, currentLang);

  applyTranslations();
  renderEvents();
  renderPartners();
  renderCatalog();
  updateAll();

  if (productModal.classList.contains("is-open") && activeProductId && productMap.has(activeProductId)) {
    openProductModal(productMap.get(activeProductId));
  }

  if (eventModal && eventModal.classList.contains("is-open") && activeEventId && Array.isArray(EVENTS)) {
    const eventItem = EVENTS.find((item) => item.id === activeEventId);
    if (eventItem) openEventModal(eventItem);
  }
}

function applyTranslations() {
  const t = getT();

  if (pageTitle) {
    pageTitle.textContent = t.meta.title;
  }
  if (metaDescription) {
    metaDescription.setAttribute("content", t.meta.description);
  }
  document.title = t.meta.title;
  document.documentElement.lang = LANG_ATTR_MAP[currentLang] || "ru";

  document.querySelectorAll("[data-i18n]").forEach((node) => {
    const key = node.dataset.i18n;
    const value = getByPath(t, key);
    if (typeof value === "string") {
      node.textContent = value;
    }
  });

  document.querySelectorAll("[data-i18n-placeholder]").forEach((node) => {
    const key = node.dataset.i18nPlaceholder;
    const value = getByPath(t, key);
    if (typeof value === "string") {
      node.setAttribute("placeholder", value);
    }
  });

  document.querySelectorAll("[data-i18n-option]").forEach((node) => {
    const key = node.dataset.i18nOption;
    const value = getByPath(t, key);
    if (typeof value === "string") {
      node.textContent = value;
    }
  });

  document.querySelectorAll("[data-i18n-aria]").forEach((node) => {
    const key = node.dataset.i18nAria;
    const value = getByPath(t, key);
    if (typeof value === "string") {
      node.setAttribute("aria-label", value);
    }
  });

  langButtons.forEach((button) => {
    button.classList.toggle("is-active", button.dataset.langBtn === currentLang);
  });
}

function bindForms() {
  orderForms.forEach((form) => {
    form.addEventListener("submit", async (event) => {
      event.preventDefault();
      const t = getT();
      const message = form.querySelector("[data-form-message]");
      message.textContent = "";
      message.className = "form-message";

      if (!isCartNotEmpty()) {
        showFormMessage(message, t.form.messages.emptyCart, "error");
        return;
      }

      const phoneInput = form.querySelector("[data-phone]");
      if (!isPhoneValid(phoneInput.value)) {
        showFormMessage(message, t.form.messages.invalidPhone, "error");
        phoneInput.focus();
        return;
      }

      const formData = new FormData(form);
      formData.set("order_items", getOrderSummaryText());
      formData.set("order_total", getCartTotalText());
      formData.set("language", currentLang);

      try {
        const response = await fetch("order.php", {
          method: "POST",
          body: formData
        });

        const payload = await response.json();
        if (!response.ok || !payload.success) {
          throw new Error(payload.message || t.form.messages.sendError);
        }

        form.reset();
        form.querySelectorAll("[data-phone]").forEach((input) => (input.value = ""));
        showFormMessage(message, t.form.messages.sent, "success");
      } catch (error) {
        showFormMessage(message, error.message || t.form.messages.sendError, "error");
      }
    });
  });
}

function bindPhoneMasks() {
  document.querySelectorAll("[data-phone]").forEach((input) => {
    input.addEventListener("input", () => {
      input.value = formatPhone(input.value);
    });

    input.addEventListener("focus", () => {
      if (!input.value) {
        input.value = "+7 (";
      }
    });
  });
}

function renderCatalog() {
  const t = getT();

  catalogGrid.innerHTML = PRODUCTS.map((product) => {
    if (!cardQuantities[product.id]) {
      cardQuantities[product.id] = 1;
    }

    const name = getLocalized(product.name);
    const shortDescription = getLocalized(product.shortDescription);
    const volume = getLocalized(product.volume);
    const price = product.price ? formatPrice(product.price) : t.catalog.priceOnRequest;
    const fallbackImage = product.fallbackImage || "assets/product-1.svg";

    return `
      <article class="product-card">
        <img src="${product.image}" alt="${escapeHTML(name)}" loading="lazy" onerror="this.onerror=null;this.src='${fallbackImage}';">
        <div class="product-card__body">
          <h3>${escapeHTML(name)}</h3>
          <p class="product-card__desc">${escapeHTML(shortDescription)}</p>
          <p class="product-card__meta">${escapeHTML(volume)}</p>
          <p class="product-card__price">${price}</p>
          <div class="product-card__actions">
            <button class="btn btn--accent product-card__main-btn" type="button" data-details="${product.id}">${t.catalog.detailsBtn}</button>
            <div class="card-cart-row">
              <div class="card-qty">
                <button type="button" aria-label="${t.catalog.decreaseAria}" data-card-change="${product.id}" data-delta="-1">−</button>
                <span data-card-qty="${product.id}">${cardQuantities[product.id]}</span>
                <button type="button" aria-label="${t.catalog.increaseAria}" data-card-change="${product.id}" data-delta="1">+</button>
              </div>
              <button class="btn btn--ghost card-add-btn" type="button" data-add="${product.id}">${t.catalog.addBtn}</button>
            </div>
          </div>
        </div>
      </article>
    `;
  }).join("");

  catalogGrid.querySelectorAll("[data-details]").forEach((button) => {
    button.addEventListener("click", () => {
      const product = productMap.get(button.dataset.details);
      if (!product) return;
      openProductModal(product);
    });
  });

  catalogGrid.querySelectorAll("[data-card-change]").forEach((button) => {
    button.addEventListener("click", () => {
      const productId = button.dataset.cardChange;
      const delta = Number(button.dataset.delta);
      const next = Math.max(1, (cardQuantities[productId] || 1) + delta);
      cardQuantities[productId] = next;
      const qtyNode = catalogGrid.querySelector(`[data-card-qty="${productId}"]`);
      if (qtyNode) {
        qtyNode.textContent = next;
      }
    });
  });

  catalogGrid.querySelectorAll("[data-add]").forEach((button) => {
    button.addEventListener("click", () => {
      const productId = button.dataset.add;
      const quantity = cardQuantities[productId] || 1;
      addToCart(productId, quantity);
    });
  });
}

function renderEvents() {
  if (!eventsTrack || typeof EVENTS === "undefined" || !Array.isArray(EVENTS)) return;
  const t = getT();

  eventsTrack.innerHTML = EVENTS.map((eventItem) => {
    const title = getLocalized(eventItem.title);
    const location = getLocalized(eventItem.location);
    const description = getLocalized(eventItem.description);
    const fallbackImage = eventItem.fallbackImage || "assets/product-1.svg";

    return `
      <article class="event-card">
        <img src="${eventItem.image}" alt="${escapeHTML(title)}" loading="lazy" onerror="this.onerror=null;this.src='${fallbackImage}';">
        <div class="event-card__body">
          <h3>${escapeHTML(title)}</h3>
          <p class="event-card__meta">${t.events.dateLabel}: ${formatEventDate(eventItem.date)} • ${escapeHTML(location)}</p>
          <p>${escapeHTML(description)}</p>
          <div class="event-card__actions">
            <button class="btn btn--accent" type="button" data-event-details="${eventItem.id}">${t.events.moreBtn}</button>
          </div>
        </div>
      </article>
    `;
  }).join("");

  eventsTrack.querySelectorAll("[data-event-details]").forEach((button) => {
    button.addEventListener("click", () => {
      const eventItem = EVENTS.find((item) => item.id === button.dataset.eventDetails);
      if (!eventItem) return;
      openEventModal(eventItem);
    });
  });
}

function renderPartners() {
  if (!partnersGrid || typeof PARTNERS === "undefined" || !Array.isArray(PARTNERS)) return;

  partnersGrid.innerHTML = PARTNERS.map((partner) => {
    const partnerName = getLocalized(partner.name);
    const logo = partner.logo || "assets/partner-1.svg";

    const card = `
      <article class="partner-card">
        <img src="${logo}" alt="${escapeHTML(partnerName)}" loading="lazy" onerror="this.onerror=null;this.src='assets/partner-1.svg';">
      </article>
    `;

    if (partner.website && String(partner.website).trim() !== "") {
      return `<a class="partner-link" href="${escapeHTML(partner.website)}" target="_blank" rel="noopener">${card}</a>`;
    }

    return card;
  }).join("");
}

function openEventModal(eventItem) {
  if (!eventModal || !eventModalBody) return;
  const t = getT();
  activeEventId = eventItem.id;

  const title = getLocalized(eventItem.title);
  const location = getLocalized(eventItem.location);
  const fullDescription = getLocalized(eventItem.fullDescription || eventItem.description);
  const descriptionParagraphs = fullDescription
    .split(/\n{2,}/)
    .map((paragraph) => paragraph.trim())
    .filter(Boolean)
    .map((paragraph) => `<p>${escapeHTML(paragraph)}</p>`)
    .join("");
  const fallbackImage = eventItem.fallbackImage || "assets/product-1.svg";

  eventModalBody.innerHTML = `
    <article class="event-modal">
      <h3>${escapeHTML(title)}</h3>
      <p class="event-card__meta">${t.events.dateLabel}: ${formatEventDate(eventItem.date)}</p>
      <p class="event-card__meta">${t.events.locationLabel}: ${escapeHTML(location)}</p>
      <img src="${eventItem.image}" alt="${escapeHTML(title)}" onerror="this.onerror=null;this.src='${fallbackImage}';">
      <div class="event-modal__text">${descriptionParagraphs}</div>
    </article>
  `;

  eventModal.classList.add("is-open");
  eventModal.setAttribute("aria-hidden", "false");
}

function openProductModal(product) {
  const t = getT();
  activeProductId = product.id;

  const name = getLocalized(product.name);
  const description = getLocalized(product.fullDescription);
  const composition = getLocalized(product.composition);
  const volume = getLocalized(product.volume);
  const fallbackImage = product.fallbackImage || "assets/product-1.svg";

  productModalBody.innerHTML = `
    <article class="product-modal">
      <img src="${product.image}" alt="${escapeHTML(name)}" onerror="this.onerror=null;this.src='${fallbackImage}';">
      <h3>${escapeHTML(name)}</h3>
      <p>${escapeHTML(description)}</p>
      <p><strong>${t.catalog.compositionLabel}:</strong> ${escapeHTML(composition)}</p>
      <p><strong>${t.catalog.volumeLabel}:</strong> ${escapeHTML(volume)}</p>
      <p><strong>${t.catalog.priceLabel}:</strong> ${product.price ? formatPrice(product.price) : t.catalog.priceOnRequest}</p>
      <button class="btn btn--accent" type="button" data-add-modal="${product.id}">${t.catalog.addModalBtn}</button>
    </article>
  `;

  productModal.classList.add("is-open");
  productModal.setAttribute("aria-hidden", "false");

  const addButton = productModalBody.querySelector("[data-add-modal]");
  if (addButton) {
    addButton.addEventListener("click", () => {
      addToCart(addButton.dataset.addModal);
      closeModals();
      openCartDrawer();
    });
  }
}

function closeModals() {
  [productModal, orderModal, eventModal].forEach((modal) => {
    if (!modal) return;
    modal.classList.remove("is-open");
    modal.setAttribute("aria-hidden", "true");
  });
  activeProductId = null;
  activeEventId = null;
}

function toggleCartDrawer() {
  if (cartDrawer.classList.contains("is-open")) {
    closeCartDrawer();
  } else {
    openCartDrawer();
  }
}

function openCartDrawer() {
  renderCart();
  cartDrawer.classList.add("is-open");
  cartDrawer.setAttribute("aria-hidden", "false");
}

function closeCartDrawer() {
  cartDrawer.classList.remove("is-open");
  cartDrawer.setAttribute("aria-hidden", "true");
}

function openOrderModal() {
  updateOrderFields();
  orderModal.classList.add("is-open");
  orderModal.setAttribute("aria-hidden", "false");
}

function addToCart(productId, quantity = 1) {
  if (!productMap.has(productId)) return;

  cart[productId] = (cart[productId] || 0) + Math.max(1, quantity);
  persistCart();
  updateAll();
}

function changeQuantity(productId, delta) {
  const nextValue = (cart[productId] || 0) + delta;

  if (nextValue <= 0) {
    delete cart[productId];
  } else {
    cart[productId] = nextValue;
  }

  persistCart();
  updateAll();
}

function removeFromCart(productId) {
  delete cart[productId];
  persistCart();
  updateAll();
}

function renderCart() {
  const t = getT();
  const entries = getCartEntries();

  if (!entries.length) {
    cartList.innerHTML = `<p>${t.cart.empty}</p>`;
    cartTotal.textContent = `0 ${CURRENCY}`;
    return;
  }

  cartList.innerHTML = entries.map(({ product, quantity }) => {
    const lineTotal = product.price ? product.price * quantity : null;
    const productName = getLocalized(product.name);
    return `
      <article class="cart-item">
        <div class="cart-item__line">
          <strong>${escapeHTML(productName)}</strong>
          <button class="btn btn--ghost" type="button" data-remove="${product.id}">${t.cart.remove}</button>
        </div>
        <div class="cart-item__line">
          <span>${product.price ? `${formatPrice(product.price)} / ${t.cart.perItem}` : t.catalog.priceOnRequest}</span>
          <span>${lineTotal ? formatPrice(lineTotal) : t.cart.clarified}</span>
        </div>
        <div class="cart-item__controls">
          <button type="button" data-change="${product.id}" data-delta="-1">−</button>
          <span>${quantity}</span>
          <button type="button" data-change="${product.id}" data-delta="1">+</button>
        </div>
      </article>
    `;
  }).join("");

  cartList.querySelectorAll("[data-change]").forEach((button) => {
    button.addEventListener("click", () => {
      changeQuantity(button.dataset.change, Number(button.dataset.delta));
    });
  });

  cartList.querySelectorAll("[data-remove]").forEach((button) => {
    button.addEventListener("click", () => {
      removeFromCart(button.dataset.remove);
    });
  });

  cartTotal.textContent = getCartTotalText();
}

function updateAll() {
  updateBadges();
  updateOrderFields();
  updateWhatsappLinks();
  renderCart();
}

function updateBadges() {
  const count = getCartCount();
  cartBadge.textContent = count;
  mobileCartBadge.textContent = count;
}

function updateOrderFields() {
  const summary = getOrderSummaryText();

  orderForms.forEach((form) => {
    const itemsInput = form.querySelector("[data-order-items]");
    const preview = form.querySelector("[data-cart-preview]");

    if (itemsInput) {
      itemsInput.value = summary;
    }

    if (preview) {
      preview.value = summary;
    }
  });
}

function updateWhatsappLinks() {
  const t = getT();
  const text = `${t.whatsapp.intro}\n\n${getOrderSummaryText()}\n${t.cart.total}: ${getCartTotalText()}`;
  const href = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(text)}`;

  whatsappLinks.forEach((link) => {
    link.href = href;
  });
}

function getCartEntries() {
  return Object.entries(cart)
    .map(([id, quantity]) => ({
      product: productMap.get(id),
      quantity
    }))
    .filter((entry) => entry.product && entry.quantity > 0);
}

function getCartCount() {
  return getCartEntries().reduce((sum, item) => sum + item.quantity, 0);
}

function getCartTotalNumber() {
  return getCartEntries().reduce((sum, item) => {
    const price = item.product.price || 0;
    return sum + price * item.quantity;
  }, 0);
}

function getCartTotalText() {
  const t = getT();
  const entries = getCartEntries();
  if (!entries.length) return `0 ${CURRENCY}`;

  const unknownPriceCount = entries.filter((entry) => entry.product.price === null).length;
  const totalText = formatPrice(getCartTotalNumber());

  if (unknownPriceCount > 0) {
    return `${totalText} ${t.cart.plusOnRequest}`;
  }

  return totalText;
}

function getOrderSummaryText() {
  const t = getT();
  const entries = getCartEntries();

  if (!entries.length) {
    return t.cart.emptySummary;
  }

  return entries
    .map(({ product, quantity }) => {
      const name = getLocalized(product.name);
      const priceText = product.price ? formatPrice(product.price) : t.catalog.priceOnRequest;
      return `${name} — ${quantity} ${t.cart.perItem} x ${priceText}`;
    })
    .join("\n");
}

function isCartNotEmpty() {
  return getCartEntries().length > 0;
}

function loadCart() {
  try {
    const raw = localStorage.getItem(CART_STORAGE_KEY);
    if (!raw) return {};
    return JSON.parse(raw) || {};
  } catch {
    return {};
  }
}

function persistCart() {
  localStorage.setItem(CART_STORAGE_KEY, JSON.stringify(cart));
}

function loadLang() {
  try {
    const stored = localStorage.getItem(LANG_STORAGE_KEY);
    if (SUPPORTED_LANGS.includes(stored)) {
      return stored;
    }
  } catch {
    return "ru";
  }
  return "ru";
}

function formatPrice(value) {
  return `${new Intl.NumberFormat(LOCALE_MAP[currentLang] || "ru-RU").format(value)} ${CURRENCY}`;
}

function formatEventDate(isoDate) {
  if (!isoDate) return "";
  const parsed = new Date(isoDate);
  if (Number.isNaN(parsed.getTime())) return isoDate;
  return new Intl.DateTimeFormat(LOCALE_MAP[currentLang] || "ru-RU", {
    day: "2-digit",
    month: "long",
    year: "numeric"
  }).format(parsed);
}

function showFormMessage(node, text, type) {
  node.textContent = text;
  node.classList.add(type);
}

function isPhoneValid(value) {
  const digits = value.replace(/\D/g, "");
  return digits.length === 11 && digits.startsWith("7");
}

function formatPhone(value) {
  let digits = value.replace(/\D/g, "");

  if (!digits) return "";

  if (digits[0] === "8") {
    digits = `7${digits.slice(1)}`;
  }

  if (digits[0] !== "7") {
    digits = `7${digits}`;
  }

  digits = digits.slice(0, 11);

  const part1 = digits.slice(1, 4);
  const part2 = digits.slice(4, 7);
  const part3 = digits.slice(7, 9);
  const part4 = digits.slice(9, 11);

  let result = "+7";
  if (part1) result += ` (${part1}`;
  if (part1.length === 3) result += ")";
  if (part2) result += ` ${part2}`;
  if (part3) result += `-${part3}`;
  if (part4) result += `-${part4}`;

  return result;
}

function getLocalized(value) {
  if (typeof value === "string") return value;
  if (!value || typeof value !== "object") return "";
  return value[currentLang] || value.ru || Object.values(value)[0] || "";
}

function getByPath(obj, key) {
  return key.split(".").reduce((acc, part) => (acc && acc[part] !== undefined ? acc[part] : undefined), obj);
}

function getT() {
  return TRANSLATIONS[currentLang] || TRANSLATIONS.ru;
}

function escapeHTML(value) {
  return String(value)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/\"/g, "&quot;")
    .replace(/'/g, "&#39;");
}
