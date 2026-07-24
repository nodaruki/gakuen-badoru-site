"use strict";

/* =========================================================
   SITE CONFIG
   ---------------------------------------------------------
   URLが確定したら、ここだけ書き換えればOK。
   空文字の項目はサイト上で「準備中」扱いになります。
   ========================================================= */
const SITE_CONFIG = {
  steamUrl: "https://store.steampowered.com/app/4988110/",
  trailerUrlJa: "https://youtu.be/3sfgQPUJGhI", // YouTube: https://www.youtube.com/watch?v=... / https://youtu.be/...
  trailerUrlEn: "https://youtu.be/klIk_1jrPnc", // YouTube: https://www.youtube.com/watch?v=... / https://youtu.be/...
  pressKitUrl:
    "https://github.com/nodaruki/gakuen-badoru-site/releases/latest/download/gakuen-badoru_presskit.zip", // GitHub Releases の ZIP 直リンクを推奨
  contactEmail: "nodarukigames@gmail.com",
  xUrl: "https://x.com/nodarukigames",
  youtubeUrl: "https://www.youtube.com/@nodarukigames",
};

const TRANSLATIONS = {
  ja: {
    "a11y.skip": "本文へ移動",
    "a11y.menu": "メニュー",
    "brand.prefix": "のだるき",
    "brand.name": "のだるきGames",
    "nav.about": "ゲーム紹介",
    "nav.features": "特徴",
    "nav.trailer": "トレーラー",
    "nav.characters": "キャラクター",
    "nav.screenshots": "スクリーンショット",
    "nav.info": "ゲーム情報",
    "cta.wishlistShort": "ウィッシュリスト",
    "cta.wishlist": "Steamでウィッシュリスト",
    "cta.trailer": "Trailerを見る",
    "cta.steamPending": "Steamストアページは準備中です",
    "hero.line1": "必殺技が飛び交う、",
    "hero.line2": "ハチャメチャ学園バドミントン！",
    "hero.lead":
      "バドミントン部じゃない少女たちが、部活らしい能力と必殺技を引っ提げてコートに参戦！",
    "quick.release": "発売予定",
    "quick.releaseValue": "2026年第4四半期",
    "quick.players": "プレイ人数",
    "about.title": "バドミントン部じゃない！？<br>部活少女たちの本気バトル！",
    "about.p1":
      "『学園バドる！』は、帰宅部、陸上部、空手部、美術部、調理部、オカ研部など、個性豊かな少女たちが戦う2Dアーケードライク・バドミントンゲーム。",
    "about.p2":
      "ロブ、クリア、ドロップ、ドライブ、スマッシュを使い分けてラリーを制し、ゲージが溜まったらキャラクター固有の「SPショット」と「SPスキル」を発動！",
    "about.p3":
      "90年代アーケードゲームを意識した、テンポの良いスピーディーなゲームプレイを楽しめます。",
    "about.caption": "一瞬の判断でラリーを制せ！",
    "features.title": "学園バドる！のここがハチャメチャ",
    "features.lead":
      "シンプルに遊べて、キャラクターごとに戦い方がガラッと変わる。",
    "features.characters.title": "個性豊かな部活少女たち",
    "features.characters.text":
      "帰宅部、陸上部、美術部、空手部……。部活をモチーフにした固有能力で、普通じゃないバドミントン勝負！",
    "features.special.title": "必殺技で流れをひっくり返せ！",
    "features.special.text":
      "ゲージを溜めて「SPショット」と「SPスキル」を発動。キャラクターごとの派手な能力がコートをかき回します。",
    "features.action.title": "多彩なショット × スピード勝負",
    "features.action.text":
      "ロブ、クリア、ドロップ、ドライブ、スマッシュを使い分ける爽快ラリー。CPU戦も、1台のPCでの2人対戦も楽しめます。",
    "trailer.title": "まずは60秒、コートをのぞいてみよう。",
    "trailer.pendingTitle": "TRAILER COMING SOON",
    "trailer.pendingText": "YouTube公開後、ここに動画が表示されます。",
    "characters.title": "バドミントン部、ひとりもいません。",
    "characters.lead": "それでも全員、本気で勝ちに来る。",
    "characters.homeclub": "帰宅部",
    "characters.athletics": "陸上部",
    "characters.karate": "空手部",
    "characters.rhythmic": "新体操部",
    "characters.art": "美術部",
    "characters.kyudo": "弓道部",
    "characters.cooking": "調理部",
    "characters.sewing": "手芸部",
    "characters.occult": "オカルト研究部",
    "characters.president": "生徒会長",
    "screenshots.title": "コートは今日も大騒ぎ。",
    "screenshots.hint": "画像をクリックすると拡大できます。",
    "info.title": "ゲーム情報",
    "info.lead": "PC (Windows) / Steam向けに、2026年第4四半期発売予定。",
    "info.titleLabel": "タイトル",
    "info.gameTitle": "学園バドる！",
    "info.developerLabel": "開発・販売",
    "info.developer": "のだるきGames",
    "info.genreLabel": "ジャンル",
    "info.genre": "2Dアーケードライク・バドミントンゲーム",
    "info.platformLabel": "プラットフォーム",
    "info.releaseLabel": "発売予定",
    "info.release": "2026年第4四半期",
    "info.playersLabel": "プレイ人数",
    "info.players": "1～2人",
    "info.modesLabel": "ゲームモード",
    "info.modes": "ストーリー / CPU対戦 / 2人ローカル対戦",
    "info.languagesLabel": "対応言語",
    "info.languages": "日本語 / English",
    "ai.title": "生成AIの使用について",
    "ai.p1":
      "本作では、一部のグラフィック、テキスト、および英語ローカリゼーションの制作に生成AIを使用しています。生成されたコンテンツは開発者による確認・編集を行った上で使用しています。",
    "ai.p2": "ゲームプレイ中に生成AIによるコンテンツ生成は行われません。",
    "press.title": "プレス・配信者向け素材",
    "press.text":
      "日英ロゴ、スクリーンショット、キーアート、10キャラクターの立ち絵、ゲーム情報をまとめています。",
    "press.button": "Download Press Kit",
    "press.pending": "Press Kitの公開URLは準備中です",
    "contact.title": "お問い合わせ・公式リンク",
    "contact.text": "プレス・配信・ビジネスに関するお問い合わせはこちら。",
    "contact.pending": "連絡先・SNSは公開準備中です。",
    "contact.mail": "メール",
    "contact.x": "X / Twitter",
    "contact.youtube": "YouTube",
    "final.copy": "次のラリーは、あなたの番。",
    "footer.top": "ページ上部へ ↑",
  },
  en: {
    "a11y.skip": "Skip to content",
    "a11y.menu": "Menu",
    "brand.prefix": "Nodaruki",
    "brand.name": "NodarukiGames",
    "nav.about": "About",
    "nav.features": "Features",
    "nav.trailer": "Trailer",
    "nav.characters": "Characters",
    "nav.screenshots": "Screenshots",
    "nav.info": "Game Info",
    "cta.wishlistShort": "Wishlist",
    "cta.wishlist": "Wishlist on Steam",
    "cta.trailer": "Watch Trailer",
    "cta.steamPending": "The Steam store page is coming soon.",
    "hero.line1": "Special moves fly across the court",
    "hero.line2": "in this wild school badminton showdown!",
    "hero.lead":
      "Girls from every club but the badminton club step onto the court with unique abilities and spectacular special moves!",
    "quick.release": "RELEASE",
    "quick.releaseValue": "Q4 2026",
    "quick.players": "PLAYERS",
    "about.title": "No badminton club members.<br>Plenty of badminton chaos.",
    "about.p1":
      "Shuttle Hearts - Academy Smash is a 2D arcade-style badminton game featuring a colorful cast of girls from all kinds of school clubs.",
    "about.p2":
      "Control the rally with lobs, clears, drops, drives, and smashes, then unleash character-specific SP Shots and SP Skills when your gauge is ready.",
    "about.p3":
      "Inspired by the fast-paced feel of '90s arcade games, it combines simple controls with quick rallies, unique abilities, and just the right amount of chaos.",
    "about.caption": "Read the rally. Own the court.",
    "features.title": "Badminton gets a little out of hand.",
    "features.lead":
      "Easy to pick up, with a playstyle that changes dramatically from character to character.",
    "features.characters.title":
      "A colorful cast from all kinds of school clubs",
    "features.characters.text":
      "From the Go-Home Club to Athletics, Art, Karate, and more, every character brings a club-inspired ability to the court.",
    "features.special.title": "Turn the rally around with special moves",
    "features.special.text":
      "Build your gauge and unleash SP Shots and SP Skills. Each character has flashy powers that can turn the whole court upside down.",
    "features.action.title": "A full range of shots at arcade speed",
    "features.action.text":
      "Mix lobs, clears, drops, drives, and smashes in fast rallies. Play against the CPU or challenge a friend in local two-player matches on one PC.",
    "trailer.title": "Take a 60-second look at the chaos.",
    "trailer.pendingTitle": "TRAILER COMING SOON",
    "trailer.pendingText":
      "The YouTube trailer will appear here once published.",
    "characters.title": "Not one of them is in the badminton club.",
    "characters.lead": "That does not stop any of them from playing to win.",
    "characters.homeclub": "Go-Home Club",
    "characters.athletics": "Athletics Club",
    "characters.karate": "Karate Club",
    "characters.rhythmic": "Rhythmic Club",
    "characters.art": "Art Club",
    "characters.kyudo": "Kyudo Club",
    "characters.cooking": "Cooking Club",
    "characters.sewing": "Sewing Club",
    "characters.occult": "Occult Club",
    "characters.president": "Student Council",
    "screenshots.title": "The court is never quiet for long.",
    "screenshots.hint": "Click an image to view it full size.",
    "info.title": "Game Info",
    "info.lead": "Coming to PC (Windows) on Steam in Q4 2026.",
    "info.titleLabel": "Title",
    "info.gameTitle": "Shuttle Hearts - Academy Smash",
    "info.developerLabel": "Developer / Publisher",
    "info.developer": "NodarukiGames",
    "info.genreLabel": "Genre",
    "info.genre": "2D Arcade-Style Badminton",
    "info.platformLabel": "Platform",
    "info.releaseLabel": "Release Window",
    "info.release": "Q4 2026",
    "info.playersLabel": "Players",
    "info.players": "1–2 Players",
    "info.modesLabel": "Game Modes",
    "info.modes": "Story Mode / Vs. CPU / 2-Player Local Multiplayer",
    "info.languagesLabel": "Languages",
    "info.languages": "Japanese / English",
    "ai.title": "Generative AI Disclosure",
    "ai.p1":
      "This game uses generative AI in the creation of some graphics, text, and English localization. All AI-generated content has been reviewed and edited by the developer before being used.",
    "ai.p2": "No generative AI content is created during gameplay.",
    "press.title": "Press & Creator Assets",
    "press.text":
      "Includes Japanese and English logos, screenshots, key art, artwork for 10 characters, and bilingual game information.",
    "press.button": "Download Press Kit",
    "press.pending": "The Press Kit download URL is coming soon.",
    "contact.title": "Contact & Official Links",
    "contact.text": "For press, creator, and business inquiries.",
    "contact.pending": "Contact and social links are coming soon.",
    "contact.mail": "Email",
    "contact.x": "X / Twitter",
    "contact.youtube": "YouTube",
    "final.copy": "The next rally is yours.",
    "footer.top": "Back to top ↑",
  },
};

const SCREENSHOTS = [
  { id: "01_match1", ja: "試合画面", en: "Match gameplay" },
  { id: "02_spshot1_1", ja: "SPショット", en: "SP Shot" },
  { id: "03_spshot1_2", ja: "SPショット", en: "SP Shot" },
  { id: "04_spskill1_1", ja: "SPスキル", en: "SP Skill" },
  { id: "05_spskill1_2", ja: "SPスキル", en: "SP Skill" },
  { id: "06_spskill2", ja: "SPスキル", en: "SP Skill" },
  { id: "07_spshot2", ja: "SPショット", en: "SP Shot" },
  { id: "08_select1", ja: "キャラクター選択", en: "Character select" },
  { id: "09_story", ja: "ストーリーモード", en: "Story Mode" },
  { id: "10_match2", ja: "試合画面", en: "Match gameplay" },
];

let currentLang = "ja";
let currentScreenshot = 0;

function getQueryLanguage() {
  const lang = new URLSearchParams(location.search).get("lang");
  return lang === "ja" || lang === "en" ? lang : null;
}

function getInitialLanguage() {
  const query = getQueryLanguage();
  if (query) return query;
  const saved = localStorage.getItem("gakuen-badoru-language");
  if (saved === "ja" || saved === "en") return saved;
  return navigator.language?.toLowerCase().startsWith("ja") ? "ja" : "en";
}

function translate(lang) {
  currentLang = lang;
  document.documentElement.lang = lang;
  localStorage.setItem("gakuen-badoru-language", lang);

  document.querySelectorAll("[data-i18n]").forEach((node) => {
    const value = TRANSLATIONS[lang][node.dataset.i18n];
    if (value !== undefined) node.innerHTML = value;
  });

  document.querySelectorAll("[data-src-ja][data-src-en]").forEach((node) => {
    const src = node.dataset[`src${lang === "ja" ? "Ja" : "En"}`];
    if (node.tagName === "SOURCE") node.srcset = src;
    else node.src = src;
  });

  document.querySelectorAll("[data-alt-ja][data-alt-en]").forEach((node) => {
    node.alt = lang === "ja" ? node.dataset.altJa : node.dataset.altEn;
  });

  document.querySelectorAll("[data-lang]").forEach((button) => {
    const active = button.dataset.lang === lang;
    button.classList.toggle("active", active);
    button.setAttribute("aria-pressed", String(active));
  });

  const title =
    lang === "ja"
      ? "学園バドる！ | Shuttle Hearts - Academy Smash"
      : "Shuttle Hearts - Academy Smash | NodarukiGames";
  const description =
    lang === "ja"
      ? "『学園バドる！』は、個性豊かな部活少女たちが固有能力と必殺技で戦う2Dアーケードライク・バドミントンゲーム。PC (Windows) / Steam、2026年第4四半期発売予定。"
      : "Shuttle Hearts - Academy Smash is a fast-paced 2D arcade-style badminton game starring girls from all kinds of school clubs. Coming to PC (Windows) on Steam in Q4 2026.";
  document.title = title;
  document
    .querySelector('meta[name="description"]')
    .setAttribute("content", description);
  document
    .querySelector('meta[property="og:title"]')
    .setAttribute("content", title);
  document
    .querySelector('meta[property="og:description"]')
    .setAttribute("content", description);
  document
    .querySelector('meta[property="og:image"]')
    .setAttribute(
      "content",
      `assets/keyart/main_${lang === "ja" ? "jp" : "en"}.webp`,
    );

  renderScreenshots();
  renderContactLinks();
  refreshTrailerPlaceholderLanguage();
}

function screenshotSrc(index, lang = currentLang) {
  const suffix = lang === "ja" ? "jp" : "en";
  return `assets/screenshots/${SCREENSHOTS[index].id}_${suffix}.webp`;
}

function renderScreenshots() {
  const grid = document.getElementById("screenshot-grid");
  if (!grid) return;
  // 6枚を一覧表示。ライトボックスでは10枚すべて閲覧できる。
  const featuredIndices = [0, 1, 4, 7, 8, 9];
  grid.innerHTML = featuredIndices
    .map((index) => {
      const caption = SCREENSHOTS[index][currentLang];
      return `<button class="gallery-button reveal is-visible" type="button" data-screenshot-index="${index}" aria-label="${escapeHtml(caption)}">
      <img src="${screenshotSrc(index)}" alt="${escapeHtml(caption)}" loading="lazy">
    </button>`;
    })
    .join("");
}

function openLightbox(index) {
  currentScreenshot = index;
  updateLightbox();
  const dialog = document.getElementById("lightbox");
  if (typeof dialog.showModal === "function") dialog.showModal();
  else dialog.setAttribute("open", "");
}

function updateLightbox() {
  const image = document.getElementById("lightbox-image");
  const caption = document.getElementById("lightbox-caption");
  const count = document.getElementById("lightbox-count");
  const item = SCREENSHOTS[currentScreenshot];
  image.src = screenshotSrc(currentScreenshot);
  image.alt = item[currentLang];
  caption.textContent = item[currentLang];
  count.textContent = `${currentScreenshot + 1} / ${SCREENSHOTS.length}`;
}

function moveLightbox(delta) {
  currentScreenshot =
    (currentScreenshot + delta + SCREENSHOTS.length) % SCREENSHOTS.length;
  updateLightbox();
}

function closeLightbox() {
  const dialog = document.getElementById("lightbox");
  if (typeof dialog.close === "function") dialog.close();
  else dialog.removeAttribute("open");
}

function applyConfigLinks() {
  document.querySelectorAll("[data-config-link]").forEach((link) => {
    const key = link.dataset.configLink;
    const url = SITE_CONFIG[key];
    if (url) {
      link.href = url;
      link.classList.remove("is-unavailable");
      link.removeAttribute("aria-disabled");
    } else {
      link.href = "#";
      link.classList.add("is-unavailable");
      link.setAttribute("aria-disabled", "true");
      link.addEventListener("click", (event) => event.preventDefault());
    }
  });

  document
    .querySelectorAll(".steam-note")
    .forEach((note) =>
      note.classList.toggle("is-hidden", Boolean(SITE_CONFIG.steamUrl)),
    );
  document
    .querySelectorAll(".press-note")
    .forEach((note) =>
      note.classList.toggle("is-hidden", Boolean(SITE_CONFIG.pressKitUrl)),
    );
}

function youtubeEmbedUrl(url) {
  if (!url) return null;
  try {
    const parsed = new URL(url);
    let id = "";
    if (parsed.hostname.includes("youtu.be"))
      id = parsed.pathname.slice(1).split("/")[0];
    else if (parsed.pathname.startsWith("/watch"))
      id = parsed.searchParams.get("v") || "";
    else if (parsed.pathname.startsWith("/shorts/"))
      id = parsed.pathname.split("/")[2] || "";
    else if (parsed.pathname.startsWith("/embed/"))
      id = parsed.pathname.split("/")[2] || "";
    return id
      ? `https://www.youtube-nocookie.com/embed/${encodeURIComponent(id)}?rel=0`
      : null;
  } catch {
    return null;
  }
}

function setupTrailer() {
  const trailerUrl =
    currentLang === "ja" ? SITE_CONFIG.trailerUrlJa : SITE_CONFIG.trailerUrlEn;

  const embed = youtubeEmbedUrl(trailerUrl);
  const shell = document.getElementById("trailer-shell");

  if (!shell || !embed) return;

  const title =
    currentLang === "ja"
      ? "『学園バドる！』ゲーム紹介トレーラー"
      : "Shuttle Hearts - Academy Smash Trailer";

  shell.innerHTML = `
    <iframe
      src="${embed}"
      title="${title}"
      loading="lazy"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      allowfullscreen
    ></iframe>
  `;
}

function refreshTrailerPlaceholderLanguage() {
  // Placeholder itself is translated by the normal i18n loop.
}

function renderContactLinks() {
  const target = document.getElementById("contact-links");
  if (!target) return;
  const links = [];
  if (SITE_CONFIG.contactEmail)
    links.push({
      label: TRANSLATIONS[currentLang]["contact.mail"],
      href: `mailto:${SITE_CONFIG.contactEmail}`,
    });
  if (SITE_CONFIG.xUrl)
    links.push({
      label: TRANSLATIONS[currentLang]["contact.x"],
      href: SITE_CONFIG.xUrl,
    });
  if (SITE_CONFIG.youtubeUrl)
    links.push({
      label: TRANSLATIONS[currentLang]["contact.youtube"],
      href: SITE_CONFIG.youtubeUrl,
    });
  target.innerHTML = links
    .map(
      ({ label, href }) =>
        `<a class="contact-link" href="${escapeHtml(href)}" target="${href.startsWith("mailto:") ? "_self" : "_blank"}" rel="noopener">${escapeHtml(label)} ↗</a>`,
    )
    .join("");
  document
    .querySelectorAll(".contact-note")
    .forEach((note) => note.classList.toggle("is-hidden", links.length > 0));
}

function setupMenu() {
  const button = document.querySelector(".menu-button");
  const nav = document.getElementById("site-nav");
  const close = () => {
    button.setAttribute("aria-expanded", "false");
    nav.classList.remove("open");
    document.body.classList.remove("menu-open");
  };
  button.addEventListener("click", () => {
    const next = button.getAttribute("aria-expanded") !== "true";
    button.setAttribute("aria-expanded", String(next));
    nav.classList.toggle("open", next);
    document.body.classList.toggle("menu-open", next);
  });
  nav
    .querySelectorAll("a")
    .forEach((link) => link.addEventListener("click", close));
  addEventListener("resize", () => {
    if (innerWidth > 840) close();
  });
}

function setupRevealAnimations() {
  const items = document.querySelectorAll(".reveal:not(.is-visible)");
  if (
    matchMedia("(prefers-reduced-motion: reduce)").matches ||
    !("IntersectionObserver" in window)
  ) {
    items.forEach((item) => item.classList.add("is-visible"));
    return;
  }
  const observer = new IntersectionObserver(
    (entries, obs) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          obs.unobserve(entry.target);
        }
      });
    },
    { rootMargin: "0px 0px -8%", threshold: 0.08 },
  );
  items.forEach((item) => observer.observe(item));
}

function setupGallery() {
  document
    .getElementById("screenshot-grid")
    .addEventListener("click", (event) => {
      const button = event.target.closest("[data-screenshot-index]");
      if (button) openLightbox(Number(button.dataset.screenshotIndex));
    });
  document
    .querySelector(".lightbox-close")
    .addEventListener("click", closeLightbox);
  document
    .querySelector(".lightbox-prev")
    .addEventListener("click", () => moveLightbox(-1));
  document
    .querySelector(".lightbox-next")
    .addEventListener("click", () => moveLightbox(1));
  const dialog = document.getElementById("lightbox");
  dialog.addEventListener("click", (event) => {
    if (event.target === dialog) closeLightbox();
  });
  dialog.addEventListener("cancel", (event) => {
    event.preventDefault();
    closeLightbox();
  });
  document.addEventListener("keydown", (event) => {
    if (!dialog.hasAttribute("open")) return;
    if (event.key === "ArrowLeft") moveLightbox(-1);
    if (event.key === "ArrowRight") moveLightbox(1);
  });
}

function escapeHtml(value) {
  return String(value).replace(
    /[&<>'"]/g,
    (char) =>
      ({
        "&": "&amp;",
        "<": "&lt;",
        ">": "&gt;",
        "'": "&#39;",
        '"': "&quot;",
      })[char],
  );
}

function init() {
  applyConfigLinks();
  setupTrailer();
  translate(getInitialLanguage());
  document.querySelectorAll("[data-lang]").forEach((button) => {
    button.addEventListener("click", () => translate(button.dataset.lang));
  });
  setupMenu();
  setupGallery();
  setupRevealAnimations();
}

document.addEventListener("DOMContentLoaded", init);
