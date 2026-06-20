const scrollButtons = document.querySelectorAll("[data-scroll-target]");
const languageButtons = document.querySelectorAll("[data-language]");
const defaultLanguage = "en";
const storageKey = "mediapromo-language";

const translations = {
  en: {
    meta: {
      title: "MEDIA PROMO",
      description: "MEDIA PROMO marketing and advertising home page.",
    },
    header: {
      aria: "Main navigation",
    },
    brand: {
      aria: "MEDIA PROMO home",
    },
    nav: {
      aria: "Primary",
      home: "Home",
      contact: "Contact",
    },
    language: {
      aria: "Website language",
    },
    hero: {
      aria: "MEDIA PROMO introduction",
      titleLead: "Grow Your Brand With",
      titleAccent: "MEDIA PROMO",
      copy:
        "Innovative marketing, advertising, media planning, and digital promotion solutions designed to help businesses achieve measurable growth.",
      cta: "Get Started",
    },
    about: {
      eyebrow: "About MEDIA PROMO",
      title: "About MEDIA PROMO",
      copyOne:
        "MEDIA PROMO is a modern marketing and advertising company providing comprehensive brand development, digital marketing, media planning, and promotional solutions.",
      copyTwo:
        "Our mission is to help businesses strengthen their market presence, attract new customers, and achieve sustainable growth through innovative marketing strategies.",
      imageAlt:
        "Marketing team discussing a campaign around a conference table",
    },
    services: {
      title: "Our Services",
      digital: {
        title: "Digital Marketing",
        copy:
          "SEO, PPC advertising, social media management, and digital campaign optimization.",
      },
      brand: {
        title: "Brand Promotion",
        copy:
          "Strategic branding solutions to strengthen visibility, awareness, and customer loyalty.",
      },
      media: {
        title: "Media Planning",
        copy:
          "Effective media placement strategies maximizing reach and return on investment.",
      },
    },
    stats: {
      aria: "Company highlights",
      projects: "Projects",
      clients: "Clients",
      experience: "Years Experience",
      satisfaction: "Client Satisfaction",
    },
    portfolio: {
      title: "Portfolio",
      outdoor: {
        alt: "Outdoor digital billboards in a city",
        title: "Outdoor Advertising",
        copy: "City-scale campaigns built for attention.",
      },
      social: {
        alt: "Social media engagement icons above a laptop",
        title: "Social Campaigns",
        copy: "Content systems that move audiences.",
      },
      brand: {
        alt: "Premium product branding concept",
        title: "Brand Excellence",
        copy: "Visual identities with market presence.",
      },
    },
    contact: {
      eyebrow: "Contact MEDIA PROMO",
      title: "Let's grow your brand",
      copy:
        "Reach the team for campaign planning, advertising, and digital promotion inquiries.",
    },
  },
  az: {
    meta: {
      title: "MEDIA PROMO",
      description: "MEDIA PROMO marketinq və reklam ana səhifəsi.",
    },
    header: {
      aria: "Əsas naviqasiya",
    },
    brand: {
      aria: "MEDIA PROMO ana səhifə",
    },
    nav: {
      aria: "Əsas",
      home: "Ana səhifə",
      contact: "Əlaqə",
    },
    language: {
      aria: "Vebsayt dili",
    },
    hero: {
      aria: "MEDIA PROMO təqdimatı",
      titleLead: "MEDIA PROMO ilə",
      titleAccent: "Brendinizi Böyüdün",
      copy:
        "Bizneslərin ölçülə bilən inkişaf əldə etməsinə kömək edən innovativ marketinq, reklam, media planlama və rəqəmsal təşviqat həlləri.",
      cta: "Başlayın",
    },
    about: {
      eyebrow: "MEDIA PROMO haqqında",
      title: "MEDIA PROMO haqqında",
      copyOne:
        "MEDIA PROMO brend inkişafı, rəqəmsal marketinq, media planlama və təşviqat həlləri üzrə kompleks xidmətlər göstərən müasir marketinq və reklam şirkətidir.",
      copyTwo:
        "Missiyamız innovativ marketinq strategiyaları ilə bizneslərin bazardakı mövqeyini gücləndirmək, yeni müştərilər cəlb etmək və davamlı inkişafa nail olmaqdır.",
      imageAlt:
        "Marketinq komandası konfrans masası ətrafında kampaniyanı müzakirə edir",
    },
    services: {
      title: "Xidmətlərimiz",
      digital: {
        title: "Rəqəmsal Marketinq",
        copy:
          "SEO, PPC reklamları, sosial media idarəçiliyi və rəqəmsal kampaniyaların optimallaşdırılması.",
      },
      brand: {
        title: "Brend Təşviqatı",
        copy:
          "Görünürlüyü, tanınmanı və müştəri loyallığını artıran strateji brend həlləri.",
      },
      media: {
        title: "Media Planlama",
        copy:
          "Əhatə dairəsini və investisiya gəlirini artıran effektiv media yerləşdirmə strategiyaları.",
      },
    },
    stats: {
      aria: "Şirkət göstəriciləri",
      projects: "Layihə",
      clients: "Müştəri",
      experience: "İllik təcrübə",
      satisfaction: "Müştəri məmnuniyyəti",
    },
    portfolio: {
      title: "Portfolio",
      outdoor: {
        alt: "Şəhərdə açıq hava rəqəmsal reklam lövhələri",
        title: "Açıq Hava Reklamı",
        copy: "Diqqət çəkmək üçün qurulan şəhər miqyaslı kampaniyalar.",
      },
      social: {
        alt: "Noutbuk üzərində sosial media nişanları",
        title: "Sosial Kampaniyalar",
        copy: "Auditoriyanı hərəkətə gətirən kontent sistemləri.",
      },
      brand: {
        alt: "Premium məhsul brendləşdirmə konsepti",
        title: "Brend Mükəmməlliyi",
        copy: "Bazarda güclü mövqeyi olan vizual kimliklər.",
      },
    },
    contact: {
      eyebrow: "MEDIA PROMO ilə əlaqə",
      title: "Brendinizi birlikdə böyüdək",
      copy:
        "Kampaniya planlama, reklam və rəqəmsal təşviqat sorğuları üçün komandamızla əlaqə saxlayın.",
    },
  },
};

const getTranslation = (language, key) =>
  key.split(".").reduce((value, part) => value?.[part], translations[language]);

const getInitialLanguage = () => {
  try {
    const storedLanguage = localStorage.getItem(storageKey);
    return translations[storedLanguage] ? storedLanguage : defaultLanguage;
  } catch {
    return defaultLanguage;
  }
};

const setLanguage = (language) => {
  const activeLanguage = translations[language] ? language : defaultLanguage;

  document.documentElement.lang = activeLanguage;

  document.querySelectorAll("[data-i18n]").forEach((element) => {
    const text = getTranslation(activeLanguage, element.dataset.i18n);

    if (text) {
      element.textContent = text;
    }
  });

  document.querySelectorAll("[data-i18n-alt]").forEach((element) => {
    const text = getTranslation(activeLanguage, element.dataset.i18nAlt);

    if (text) {
      element.setAttribute("alt", text);
    }
  });

  document.querySelectorAll("[data-i18n-aria-label]").forEach((element) => {
    const text = getTranslation(activeLanguage, element.dataset.i18nAriaLabel);

    if (text) {
      element.setAttribute("aria-label", text);
    }
  });

  document.querySelectorAll("[data-i18n-content]").forEach((element) => {
    const text = getTranslation(activeLanguage, element.dataset.i18nContent);

    if (text) {
      element.setAttribute("content", text);
    }
  });

  languageButtons.forEach((button) => {
    const isActive = button.dataset.language === activeLanguage;
    button.classList.toggle("is-active", isActive);
    button.setAttribute("aria-pressed", String(isActive));
  });

  try {
    localStorage.setItem(storageKey, activeLanguage);
  } catch {
    // The switch still works if storage is unavailable.
  }
};

scrollButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const target = document.getElementById(button.dataset.scrollTarget);

    if (target) {
      target.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  });
});

languageButtons.forEach((button) => {
  button.addEventListener("click", () => {
    setLanguage(button.dataset.language);
  });
});

setLanguage(getInitialLanguage());
