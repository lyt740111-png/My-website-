/**
 * ─────────────────────────────────────────────
 *  games.js  —  قاعدة بيانات الألعاب
 *  أضف ألعابك هنا أو استخدم لوحة الإدارة /admin.html
 * ─────────────────────────────────────────────
 */

const SITE = {
  name:        "اسم موقعك",
  tagline:     "ألعابي وتطبيقاتي",
  description: "موقعي الشخصي لمشاركة ألعابي وتطبيقاتي مع الجميع",
  logo:        "🎮",
  tiktok:      "https://www.tiktok.com/@USERNAME",
  youtube:     "https://youtube.com/@USERNAME",
  discord:     "https://discord.gg/XXXXXX",
  twitter:     "https://twitter.com/USERNAME",
  // ─── AdSense / إعلانات ───
  adsense_client: "ca-pub-XXXXXXXXXXXXXXXX",   // ← أضف ID حسابك في AdSense هنا
  ad_slot_banner1: "XXXXXXXXXX",               // ← رقم وحدة الإعلان 1
  ad_slot_banner2: "XXXXXXXXXX",               // ← رقم وحدة الإعلان 2
};

const GAMES = [

  /* ════════════════════════════════════════════
   *  انسخ هذا الكائن وعدّله لكل لعبة جديدة
   * ════════════════════════════════════════════ */
  {
    id:          "game-001",           // ← رقم فريد، لا تعدّله بعد النشر
    title:       "اسم اللعبة الأولى",
    short_desc:  "وصف قصير يظهر في الكارد — جملة أو جملتين",
    description: `
      <p>اكتب هنا الشرح الكامل للعبة.</p>
      <p>يمكنك استخدام HTML: <strong>نص عريض</strong>، <em>مائل</em>، قوائم...</p>
      <ul>
        <li>ميزة رقم ١</li>
        <li>ميزة رقم ٢</li>
        <li>ميزة رقم ٣</li>
      </ul>
      <p>أي تفاصيل إضافية عن طريقة اللعب، المتطلبات، إلخ.</p>
    `,
    image:        "https://picsum.photos/seed/game1/600/400",   // ← رابط صورة الغلاف
    screenshots: [                                               // ← صور إضافية (اختياري)
      "https://picsum.photos/seed/ss1/800/450",
      "https://picsum.photos/seed/ss2/800/450",
    ],
    category:     "action",            // action | adventure | puzzle | rpg | sport | other
    platform:    ["PC", "Android"],    // PC | Android | iOS | Web
    size:         "450 MB",
    version:      "1.2.0",
    date:         "2025-01-15",        // تاريخ الإضافة
    featured:     true,                // true = يظهر في أعلى الصفحة كـ featured
    download_link: "https://www.mediafire.com/file/XXXXXXX",   // ← رابط MediaFire أو Drive
    ad_link:      "https://linkvertise.com/XXXXX",             // ← رابط الإعلان (قبل التحميل)
    // ad_link: ""  // اتركه فارغاً إذا لم تريد إعلان قبل التحميل
  },

  {
    id:          "game-002",
    title:       "اسم اللعبة الثانية",
    short_desc:  "وصف قصير يظهر في الكارد",
    description: `<p>اكتب شرحك هنا...</p>`,
    image:        "https://picsum.photos/seed/game2/600/400",
    screenshots: [],
    category:     "puzzle",
    platform:    ["Android", "iOS"],
    size:         "120 MB",
    version:      "2.0.1",
    date:         "2025-02-10",
    featured:     false,
    download_link: "https://drive.google.com/file/d/XXXXXXX",
    ad_link:      "https://linkvertise.com/XXXXX",
  },

  {
    id:          "game-003",
    title:       "اسم اللعبة الثالثة",
    short_desc:  "وصف قصير يظهر في الكارد",
    description: `<p>اكتب شرحك هنا...</p>`,
    image:        "https://picsum.photos/seed/game3/600/400",
    screenshots: [],
    category:     "rpg",
    platform:    ["PC"],
    size:         "2.1 GB",
    version:      "1.0.0",
    date:         "2025-03-01",
    featured:     false,
    download_link: "https://www.mediafire.com/file/XXXXXXX",
    ad_link:      "",
  },

]; // ← نهاية مصفوفة الألعاب

/* ─── دوال مساعدة ─── */
function getGame(id)          { return GAMES.find(g => g.id === id); }
function getFeatured()        { return GAMES.filter(g => g.featured); }
function getByCategory(cat)   { return cat === 'all' ? GAMES : GAMES.filter(g => g.category === cat); }
function sortByDate()         { return [...GAMES].sort((a,b) => new Date(b.date)-new Date(a.date)); }
function sortByTitle()        { return [...GAMES].sort((a,b) => a.title.localeCompare(b.title,'ar')); }
