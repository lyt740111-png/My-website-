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
    id:          "game-1774388060569",
    title:       "Granny",
    short_desc:  "هي لعبة الغاز و رعب حيث تستيقظ في بيت الجدة و تحاول الخروج من بيتها",
    description: `
      📝 نبذة عن اللعبة
تعتبر لعبة Granny واحدة من أقوى ألعاب الرعب والبقاء (Survival Horror) التي حبست أنفاس الملايين حول العالم. تبدأ قصتك عندما تجد نفسك محتجزاً في منزل غامض ومظلم تسكنه عجوز مجنونة لا ترحم. هدفك الوحيد هو الخروج حياً، ولكن احذر.. فالجدران لها آذان!
🎮 أسلوب اللعب والتحدي
تعتمد اللعبة على الذكاء والهدوء التام. أنت لا تملك أسلحة فتاكة، سلاحك الوحيد هو التخفي.
حاسة السمع الخارقة: الجدة تسمع كل شيء؛ إذا أسقطت شيئاً أو مشيت على خشب يصدر صريراً، ستأتي إليك ركضاً.
الأيام الخمسة: لديك 5 محاولات فقط للهروب. كل يوم يمر تصبح المهمة أصعب وتزداد جراحك وتصبح حركتك أثقل.
حل الألغاز: المنزل مليء بالخزائن والأقفال السرية. عليك البحث عن المفاتيح، المطرقة، وقاطعة الأسلاك لفتح مخرج الطوارئ.
🏚️ بيئة اللعبة والمخاطر
المنزل الملعون: يتكون من طوابق متعددة، قبو (مرآب)، وسطح مليء بالأسرار.
الفخاخ: الجدة تضع فخاخ الدببة في كل مكان لإمساكك.
طرق الهروب المتعددة: يمكنك الهروب عبر الباب الرئيسي بعد فك تعقيداته، أو إصلاح السيارة في القبو والانطلاق بها، أو البحث عن ممرات سرية أخرى.
🛠️ مميزات اللعبة
تجربة رعب حقيقية: مؤثرات صوتية مخيفة وبيئة توتر عالية.
مستويات صعوبة متنوعة: من وضع "الممارسة" الهادئ إلى وضع "المتطرف" المرعب.
ذكاء اصطناعي تفاعلي: العدو يتعقب حركاتك وأصواتك بشكل واقعي.
    `,
    image:        "https://an1.com/4713-grannyy-mod.html",
    screenshots: [

    ],
    category:     "puzzle",
    platform:    ["Android"],
    size:         "192.4",
    version:      "1.0.0",
    date:         "2026-03-24",
    featured:     false,
    download_link: "https://files.an1.net/granny-mod-menu_1.8.8-an1.com.apk",
    ad_link:      "",
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
