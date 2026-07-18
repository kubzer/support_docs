/* AlphaBug Trace — marketing/support site i18n.
 * One shared dictionary for all pages. Markup opts in with data-i18n="key";
 * <body data-page="home|privacy|support"> selects the per-page <title> and
 * meta description ("<page>_title" / "<page>_desc"). The brand name
 * "AlphaBug Trace" is never translated. None of the six locales are RTL.
 *
 * Language resolution order: ?lang= query param -> localStorage ->
 * navigator.languages -> English fallback. The choice is persisted and a
 * visible switcher lets visitors change it.
 */
(function () {
  "use strict";

  var SUPPORTED = ["en", "tr", "de", "fr", "es"];
  var LANG_NAMES = { en: "English", tr: "Türkçe", de: "Deutsch", fr: "Français", es: "Español" };
  var EMAIL = "kubzer@gmail.com";
  var UPDATED = "2026-07-18";

  var I18N = {
    en: {
      appName: "AlphaBug Trace: Learn & Speak",
      nav_home: "Home",
      nav_privacy: "Privacy",
      nav_support: "Support",
      lang_label: "Language",
      footer_made: "Made with love for little hands 🐞",
      footer_rights: "AlphaBug Trace. All rights reserved.",

      home_title: "AlphaBug Trace: Learn & Speak — trace letters, hear words",
      home_desc: "A calm, ad-free letter-tracing game for toddlers. Trace A to Z to wake a sleepy bug, then hear each letter and a fun word spoken aloud.",
      hero_tagline: "Trace letters to wake a sleepy bug, then hear each letter and a fun word spoken aloud — calm, ad-free ABC fun for little hands.",
      hero_cta: "Get support",
      hero_cta2: "Privacy policy",
      features_title: "Why families love it",
      features_sub: "Playful letter practice that rewards calm, careful tracing.",
      f1_title: "Trace, don't tap",
      f1_body: "Put a finger on the glowing dot and slowly trace the dotted path. The bug wakes up and crawls along with your finger — rushing or lifting off lets it doze back to sleep.",
      f2_title: "Letters that speak",
      f2_body: "Every path is a real letter drawn in proper strokes. On completion the letter is shown and spoken with a friendly word — “A is for Apple” — in your chosen language.",
      f3_title: "Capitals and lowercase",
      f3_body: "Practise capital letters A to Z and lowercase a to z with a simple ABC/abc toggle, or pick any single letter from the Letters picker.",
      f4_title: "Safe by design",
      f4_body: "No ads, no accounts, no tracking, and no data collection. Fully offline, with a parents' area kept behind a simple math gate.",
      langs_title: "Speaks five languages",
      langs_body: "The interface and the spoken letters are available in English, Turkish, German, French, and Spanish. The letter glyph always stays English.",

      privacy_title: "Privacy Policy — AlphaBug Trace",
      privacy_desc: "AlphaBug Trace collects no personal data. Everything stays on the device — no accounts, no ads, no tracking.",
      privacy_heading: "Privacy Policy",
      privacy_updated: "Last updated: 18 July 2026",
      privacy_intro: "AlphaBug Trace: Learn & Speak is designed for young children, so privacy is simple and strict: the app collects nothing.",
      privacy_data_title: "Data we collect",
      privacy_data_body: "Everything stays on this device. There are no accounts, no ads, and no tracking — AlphaBug Trace does not collect any personal data. Your progress and settings are saved only in local storage on your device.",
      privacy_perms_title: "Permissions",
      privacy_perms_body: "None. AlphaBug Trace works fully offline and needs no special device permissions.",
      privacy_children_title: "Children's privacy",
      privacy_children_body: "The app is made for toddlers and preschoolers. It contains no advertising, no social features, and no external links reachable by a child. Any purchase action is placed behind a parental math gate.",
      privacy_purchases_title: "Purchases",
      privacy_purchases_body: "The optional one-time “Full version” unlock is processed entirely by Apple's App Store or Google Play. We never see or store your payment details; the stores handle the transaction under their own privacy policies.",
      privacy_contact_title: "Contact",
      privacy_contact_body: "Questions about privacy? Email us at",

      support_title: "Support — AlphaBug Trace",
      support_desc: "Help and answers for AlphaBug Trace: how to play, unlocking the full version, restoring purchases, and changing the language.",
      support_heading: "Support",
      support_intro: "Answers to common questions. Still stuck? We're happy to help.",
      q1: "How do I play?",
      a1: "Put a finger on the glowing dot at the start of the path and slowly trace the dotted line. The bug wakes up and follows your finger to the leaf or flower. Some letters (like E, F, H, T) have several strokes — finish one and the bug hops to the start of the next.",
      q2: "How do I unlock all the letters?",
      a2: "The free version includes letters A to E. To unlock the whole alphabet A to Z, open the Parents area (the padlock pill), pass the math gate, and tap “Unlock all letters” on the upgrade card. It is a one-time purchase.",
      q3: "I bought the full version on another device. How do I restore it?",
      a3: "Open the Parents area, then tap “Restore purchase” on the upgrade card. Make sure you are signed in with the same Apple ID or Google account used for the original purchase.",
      q4: "How do I change the language?",
      a4: "Open the Parents area (padlock pill), pass the math gate, and choose your language in Settings. The interface and the spoken letters follow your choice; the letter shapes stay English.",
      q5: "What is the math question when I open the parents area?",
      a5: "It's a simple parental gate so little ones don't change settings or make purchases by accident. Solve the small multiplication (for example, 3 × 4 = 12) to continue.",
      support_contact_title: "Still need help?",
      support_contact_body: "Email us and we'll get back to you:"
    },

    tr: {
      appName: "AlphaBug Trace: Learn & Speak",
      nav_home: "Ana Sayfa",
      nav_privacy: "Gizlilik",
      nav_support: "Destek",
      lang_label: "Dil",
      footer_made: "Küçük eller için sevgiyle yapıldı 🐞",
      footer_rights: "AlphaBug Trace. Tüm hakları saklıdır.",

      home_title: "AlphaBug Trace: Learn & Speak — harfleri çiz, kelimeleri duy",
      home_desc: "Küçükler için sakin ve reklamsız bir harf çizme oyunu. A'dan Z'ye çizerek uykucu bir böceği uyandır, sonra her harfi ve eğlenceli bir kelimeyi dinle.",
      hero_tagline: "Harfleri çizerek uykucu bir böceği uyandır, sonra her harfi ve eğlenceli bir kelimeyi sesli dinle — küçük eller için sakin, reklamsız ABC keyfi.",
      hero_cta: "Destek al",
      hero_cta2: "Gizlilik politikası",
      features_title: "Aileler neden seviyor",
      features_sub: "Sakin ve dikkatli çizmeyi ödüllendiren eğlenceli harf çalışması.",
      f1_title: "Dokunma, çiz",
      f1_body: "Parmağını parlayan noktaya koy ve noktalı yolu yavaşça çiz. Böcek uyanır ve parmağınla birlikte ilerler — acele edersen ya da parmağını kaldırırsan yeniden uykuya dalar.",
      f2_title: "Konuşan harfler",
      f2_body: "Her yol, doğru çizgilerle çizilmiş gerçek bir harftir. Tamamlandığında harf gösterilir ve dostça bir kelimeyle seslendirilir — “A, Armut'un A'sı” — seçtiğin dilde.",
      f3_title: "Büyük ve küçük harf",
      f3_body: "Basit bir ABC/abc anahtarıyla A'dan Z'ye büyük ve a'dan z'ye küçük harfleri çalış ya da Harfler seçiciden tek bir harf seç.",
      f4_title: "Tasarım gereği güvenli",
      f4_body: "Reklam yok, hesap yok, takip yok ve veri toplama yok. Tamamen çevrimdışı; ebeveyn alanı basit bir matematik kilidinin ardında.",
      langs_title: "Beş dil konuşur",
      langs_body: "Arayüz ve seslendirilen harfler İngilizce, Türkçe, Almanca, Fransızca ve İspanyolca sunulur. Harfin biçimi her zaman İngilizce kalır.",

      privacy_title: "Gizlilik Politikası — AlphaBug Trace",
      privacy_desc: "AlphaBug Trace hiçbir kişisel veri toplamaz. Her şey cihazda kalır — hesap yok, reklam yok, takip yok.",
      privacy_heading: "Gizlilik Politikası",
      privacy_updated: "Son güncelleme: 18 Temmuz 2026",
      privacy_intro: "AlphaBug Trace: Learn & Speak küçük çocuklar için tasarlandı; bu yüzden gizlilik basit ve nettir: uygulama hiçbir şey toplamaz.",
      privacy_data_title: "Topladığımız veriler",
      privacy_data_body: "Her şey bu cihazda kalır. Hesap yok, reklam yok, takip yok — AlphaBug Trace hiçbir kişisel veri toplamaz. İlerlemen ve ayarların yalnızca cihazındaki yerel depolamada saklanır.",
      privacy_perms_title: "İzinler",
      privacy_perms_body: "Hiçbiri. AlphaBug Trace tamamen çevrimdışı çalışır ve özel bir cihaz izni gerektirmez.",
      privacy_children_title: "Çocukların gizliliği",
      privacy_children_body: "Uygulama okul öncesi çocuklar için yapıldı. Reklam, sosyal özellik ya da bir çocuğun erişebileceği dış bağlantı içermez. Her satın alma işlemi ebeveyn matematik kilidinin ardındadır.",
      privacy_purchases_title: "Satın alımlar",
      privacy_purchases_body: "İsteğe bağlı tek seferlik “Tam sürüm” kilidi tamamen Apple App Store veya Google Play tarafından işlenir. Ödeme bilgilerini asla görmez veya saklamayız; işlemi mağazalar kendi gizlilik politikaları kapsamında yürütür.",
      privacy_contact_title: "İletişim",
      privacy_contact_body: "Gizlilikle ilgili sorular mı var? Bize e-posta gönder:",

      support_title: "Destek — AlphaBug Trace",
      support_desc: "AlphaBug Trace için yardım: nasıl oynanır, tam sürümün kilidini açma, satın alımları geri yükleme ve dili değiştirme.",
      support_heading: "Destek",
      support_intro: "Sık sorulan soruların yanıtları. Yine de takıldın mı? Yardıma hazırız.",
      q1: "Nasıl oynanır?",
      a1: "Parmağını yolun başındaki parlayan noktaya koy ve noktalı çizgiyi yavaşça izle. Böcek uyanır ve parmağınla yaprağa ya da çiçeğe kadar gider. Bazı harfler (E, F, H, T gibi) birden çok çizgiden oluşur — birini bitir, böcek bir sonrakinin başına atlar.",
      q2: "Tüm harflerin kilidini nasıl açarım?",
      a2: "Ücretsiz sürüm A'dan E'ye harfleri içerir. A'dan Z'ye tüm alfabenin kilidini açmak için Ebeveyn alanını (asma kilit) aç, matematik kilidini geç ve yükseltme kartındaki “Tüm harflerin kilidini aç”a dokun. Tek seferlik bir satın alımdır.",
      q3: "Tam sürümü başka bir cihazda aldım. Nasıl geri yüklerim?",
      a3: "Ebeveyn alanını aç ve yükseltme kartındaki “Satın alımı geri yükle”ye dokun. Orijinal satın alımda kullandığın aynı Apple ID veya Google hesabıyla oturum açtığından emin ol.",
      q4: "Dili nasıl değiştiririm?",
      a4: "Ebeveyn alanını (asma kilit) aç, matematik kilidini geç ve Ayarlar'da dilini seç. Arayüz ve seslendirilen harfler seçimini izler; harflerin biçimi İngilizce kalır.",
      q5: "Ebeveyn alanını açınca çıkan matematik sorusu nedir?",
      a5: "Küçüklerin ayarları değiştirmesini ya da yanlışlıkla satın alma yapmasını önleyen basit bir ebeveyn kilididir. Devam etmek için küçük çarpmayı çöz (örneğin 3 × 4 = 12).",
      support_contact_title: "Hâlâ yardım mı lazım?",
      support_contact_body: "Bize e-posta gönder, sana geri dönelim:"
    },

    de: {
      appName: "AlphaBug Trace: Learn & Speak",
      nav_home: "Start",
      nav_privacy: "Datenschutz",
      nav_support: "Support",
      lang_label: "Sprache",
      footer_made: "Mit Liebe für kleine Hände gemacht 🐞",
      footer_rights: "AlphaBug Trace. Alle Rechte vorbehalten.",

      home_title: "AlphaBug Trace: Learn & Speak — Buchstaben nachspuren, Wörter hören",
      home_desc: "Ein ruhiges, werbefreies Buchstaben-Nachspurspiel für Kleinkinder. Zeichne A bis Z, um einen schläfrigen Käfer zu wecken, und höre jeden Buchstaben und ein Wort.",
      hero_tagline: "Zeichne Buchstaben nach, um einen schläfrigen Käfer zu wecken, und höre jeden Buchstaben und ein Wort — ruhiger, werbefreier ABC-Spaß für kleine Hände.",
      hero_cta: "Support erhalten",
      hero_cta2: "Datenschutz",
      features_title: "Warum Familien es lieben",
      features_sub: "Spielerisches Buchstabenüben, das ruhiges, sorgfältiges Nachzeichnen belohnt.",
      f1_title: "Nachzeichnen statt tippen",
      f1_body: "Lege einen Finger auf den leuchtenden Punkt und zeichne den gepunkteten Weg langsam nach. Der Käfer wacht auf und krabbelt mit — eilst du oder hebst den Finger, schläft er wieder ein.",
      f2_title: "Buchstaben, die sprechen",
      f2_body: "Jeder Weg ist ein echter Buchstabe in korrekten Strichen. Am Ende wird der Buchstabe gezeigt und mit einem freundlichen Wort vorgelesen — „A wie Apfel“ — in deiner Sprache.",
      f3_title: "Groß- und Kleinbuchstaben",
      f3_body: "Übe Großbuchstaben A bis Z und Kleinbuchstaben a bis z über einen einfachen ABC/abc-Schalter oder wähle einen einzelnen Buchstaben in der Auswahl.",
      f4_title: "Sicher konzipiert",
      f4_body: "Keine Werbung, keine Konten, kein Tracking und keine Datenerfassung. Vollständig offline, mit einem Elternbereich hinter einer einfachen Rechenaufgabe.",
      langs_title: "Spricht fünf Sprachen",
      langs_body: "Oberfläche und gesprochene Buchstaben gibt es in Englisch, Türkisch, Deutsch, Französisch und Spanisch. Die Buchstabenform bleibt immer englisch.",

      privacy_title: "Datenschutz — AlphaBug Trace",
      privacy_desc: "AlphaBug Trace erhebt keine personenbezogenen Daten. Alles bleibt auf dem Gerät — keine Konten, keine Werbung, kein Tracking.",
      privacy_heading: "Datenschutzerklärung",
      privacy_updated: "Zuletzt aktualisiert: 18. Juli 2026",
      privacy_intro: "AlphaBug Trace: Learn & Speak ist für kleine Kinder gemacht, daher ist der Datenschutz einfach und streng: Die App erfasst nichts.",
      privacy_data_title: "Erfasste Daten",
      privacy_data_body: "Alles bleibt auf diesem Gerät. Es gibt keine Konten, keine Werbung und kein Tracking — AlphaBug Trace sammelt keine personenbezogenen Daten. Fortschritt und Einstellungen werden nur lokal auf deinem Gerät gespeichert.",
      privacy_perms_title: "Berechtigungen",
      privacy_perms_body: "Keine. AlphaBug Trace funktioniert vollständig offline und benötigt keine besonderen Geräteberechtigungen.",
      privacy_children_title: "Datenschutz für Kinder",
      privacy_children_body: "Die App ist für Klein- und Vorschulkinder gemacht. Sie enthält keine Werbung, keine sozialen Funktionen und keine für ein Kind erreichbaren externen Links. Jede Kaufaktion liegt hinter einer elterlichen Rechenaufgabe.",
      privacy_purchases_title: "Käufe",
      privacy_purchases_body: "Der optionale einmalige „Vollversion“-Kauf wird vollständig über Apples App Store oder Google Play abgewickelt. Wir sehen oder speichern deine Zahlungsdaten nie; die Stores wickeln die Transaktion nach ihren eigenen Datenschutzrichtlinien ab.",
      privacy_contact_title: "Kontakt",
      privacy_contact_body: "Fragen zum Datenschutz? Schreib uns:",

      support_title: "Support — AlphaBug Trace",
      support_desc: "Hilfe zu AlphaBug Trace: Spielen, Vollversion freischalten, Käufe wiederherstellen und Sprache ändern.",
      support_heading: "Support",
      support_intro: "Antworten auf häufige Fragen. Immer noch unklar? Wir helfen gern.",
      q1: "Wie spielt man?",
      a1: "Lege einen Finger auf den leuchtenden Punkt am Anfang des Weges und zeichne die gepunktete Linie langsam nach. Der Käfer wacht auf und folgt dem Finger zum Blatt oder zur Blume. Manche Buchstaben (wie E, F, H, T) haben mehrere Striche — ist einer fertig, hüpft der Käfer zum Anfang des nächsten.",
      q2: "Wie schalte ich alle Buchstaben frei?",
      a2: "Die kostenlose Version enthält die Buchstaben A bis E. Um das ganze Alphabet A bis Z freizuschalten, öffne den Elternbereich (das Schloss-Symbol), löse die Rechenaufgabe und tippe auf der Upgrade-Karte auf „Alle Buchstaben freischalten“. Es ist ein einmaliger Kauf.",
      q3: "Ich habe die Vollversion auf einem anderen Gerät gekauft. Wie stelle ich sie wieder her?",
      a3: "Öffne den Elternbereich und tippe auf der Upgrade-Karte auf „Kauf wiederherstellen“. Achte darauf, mit derselben Apple-ID bzw. demselben Google-Konto angemeldet zu sein wie beim ursprünglichen Kauf.",
      q4: "Wie ändere ich die Sprache?",
      a4: "Öffne den Elternbereich (Schloss-Symbol), löse die Rechenaufgabe und wähle deine Sprache in den Einstellungen. Oberfläche und gesprochene Buchstaben folgen deiner Wahl; die Buchstabenformen bleiben englisch.",
      q5: "Was ist die Rechenaufgabe beim Öffnen des Elternbereichs?",
      a5: "Eine einfache Elternsperre, damit Kleine nicht versehentlich Einstellungen ändern oder Käufe tätigen. Löse die kleine Multiplikation (zum Beispiel 3 × 4 = 12), um fortzufahren.",
      support_contact_title: "Brauchst du noch Hilfe?",
      support_contact_body: "Schreib uns eine E-Mail, wir melden uns:"
    },

    fr: {
      appName: "AlphaBug Trace: Learn & Speak",
      nav_home: "Accueil",
      nav_privacy: "Confidentialité",
      nav_support: "Assistance",
      lang_label: "Langue",
      footer_made: "Fait avec amour pour les petites mains 🐞",
      footer_rights: "AlphaBug Trace. Tous droits réservés.",

      home_title: "AlphaBug Trace: Learn & Speak — trace des lettres, écoute des mots",
      home_desc: "Un jeu de tracé de lettres calme et sans publicité pour les tout-petits. Trace de A à Z pour réveiller une bestiole endormie, puis écoute chaque lettre et un mot.",
      hero_tagline: "Trace des lettres pour réveiller une bestiole endormie, puis écoute chaque lettre et un mot rigolo — un ABC calme et sans pub pour les petites mains.",
      hero_cta: "Obtenir de l'aide",
      hero_cta2: "Confidentialité",
      features_title: "Pourquoi les familles adorent",
      features_sub: "Un entraînement aux lettres qui récompense un tracé calme et soigné.",
      f1_title: "Tracer, pas tapoter",
      f1_body: "Pose un doigt sur le point lumineux et trace lentement le chemin pointillé. La bestiole se réveille et avance avec ton doigt — si tu vas trop vite ou lèves le doigt, elle se rendort.",
      f2_title: "Des lettres qui parlent",
      f2_body: "Chaque chemin est une vraie lettre tracée avec les bons gestes. À la fin, la lettre s'affiche et est prononcée avec un mot sympa — « A comme Avion » — dans ta langue.",
      f3_title: "Majuscules et minuscules",
      f3_body: "Entraîne-toi aux majuscules de A à Z et aux minuscules de a à z avec un simple sélecteur ABC/abc, ou choisis une seule lettre dans le sélecteur.",
      f4_title: "Sûr par conception",
      f4_body: "Pas de publicité, pas de comptes, pas de suivi et aucune collecte de données. Entièrement hors ligne, avec un espace parents derrière un simple calcul.",
      langs_title: "Parle cinq langues",
      langs_body: "L'interface et les lettres prononcées sont disponibles en anglais, turc, allemand, français et espagnol. La forme de la lettre reste toujours anglaise.",

      privacy_title: "Confidentialité — AlphaBug Trace",
      privacy_desc: "AlphaBug Trace ne collecte aucune donnée personnelle. Tout reste sur l'appareil — pas de comptes, pas de publicités, pas de suivi.",
      privacy_heading: "Politique de confidentialité",
      privacy_updated: "Dernière mise à jour : 18 juillet 2026",
      privacy_intro: "AlphaBug Trace: Learn & Speak est conçu pour les jeunes enfants, la confidentialité est donc simple et stricte : l'application ne collecte rien.",
      privacy_data_title: "Données collectées",
      privacy_data_body: "Tout reste sur cet appareil. Pas de comptes, pas de publicités, pas de suivi — AlphaBug Trace ne collecte aucune donnée personnelle. Ta progression et tes réglages sont enregistrés uniquement en local sur ton appareil.",
      privacy_perms_title: "Autorisations",
      privacy_perms_body: "Aucune. AlphaBug Trace fonctionne entièrement hors ligne et ne demande aucune autorisation particulière.",
      privacy_children_title: "Confidentialité des enfants",
      privacy_children_body: "L'application est faite pour les tout-petits et les enfants d'âge préscolaire. Elle ne contient ni publicité, ni fonctions sociales, ni liens externes accessibles à un enfant. Toute action d'achat est placée derrière un calcul réservé aux parents.",
      privacy_purchases_title: "Achats",
      privacy_purchases_body: "L'achat unique facultatif « Version complète » est entièrement traité par l'App Store d'Apple ou Google Play. Nous ne voyons ni ne stockons jamais tes informations de paiement ; les magasins gèrent la transaction selon leurs propres politiques.",
      privacy_contact_title: "Contact",
      privacy_contact_body: "Des questions sur la confidentialité ? Écris-nous :",

      support_title: "Assistance — AlphaBug Trace",
      support_desc: "Aide pour AlphaBug Trace : comment jouer, débloquer la version complète, restaurer les achats et changer de langue.",
      support_heading: "Assistance",
      support_intro: "Réponses aux questions fréquentes. Toujours bloqué ? Nous sommes là pour aider.",
      q1: "Comment jouer ?",
      a1: "Pose un doigt sur le point lumineux au début du chemin et trace lentement la ligne pointillée. La bestiole se réveille et suit ton doigt jusqu'à la feuille ou la fleur. Certaines lettres (comme E, F, H, T) ont plusieurs traits — termine-en un et la bestiole saute au début du suivant.",
      q2: "Comment débloquer toutes les lettres ?",
      a2: "La version gratuite inclut les lettres de A à E. Pour débloquer tout l'alphabet de A à Z, ouvre l'espace parents (le cadenas), passe le calcul, puis touche « Débloquer toutes les lettres » sur la carte. C'est un achat unique.",
      q3: "J'ai acheté la version complète sur un autre appareil. Comment la restaurer ?",
      a3: "Ouvre l'espace parents, puis touche « Restaurer l'achat » sur la carte. Assure-toi d'être connecté avec le même identifiant Apple ou compte Google que lors de l'achat d'origine.",
      q4: "Comment changer de langue ?",
      a4: "Ouvre l'espace parents (cadenas), passe le calcul et choisis ta langue dans les Réglages. L'interface et les lettres prononcées suivent ton choix ; la forme des lettres reste anglaise.",
      q5: "Quelle est la question de calcul à l'ouverture de l'espace parents ?",
      a5: "C'est un simple verrou parental pour éviter que les petits changent les réglages ou fassent des achats par accident. Résous la petite multiplication (par exemple 3 × 4 = 12) pour continuer.",
      support_contact_title: "Besoin d'aide ?",
      support_contact_body: "Écris-nous par e-mail et nous te répondrons :"
    },

    es: {
      appName: "AlphaBug Trace: Learn & Speak",
      nav_home: "Inicio",
      nav_privacy: "Privacidad",
      nav_support: "Soporte",
      lang_label: "Idioma",
      footer_made: "Hecho con cariño para manitas pequeñas 🐞",
      footer_rights: "AlphaBug Trace. Todos los derechos reservados.",

      home_title: "AlphaBug Trace: Learn & Speak — traza letras, escucha palabras",
      home_desc: "Un juego de trazar letras tranquilo y sin anuncios para peques. Traza de la A a la Z para despertar a un bichito dormido y escucha cada letra y una palabra.",
      hero_tagline: "Traza letras para despertar a un bichito dormido y escucha cada letra y una palabra divertida — diversión ABC tranquila y sin anuncios para manitas pequeñas.",
      hero_cta: "Obtener soporte",
      hero_cta2: "Privacidad",
      features_title: "Por qué encanta a las familias",
      features_sub: "Práctica de letras divertida que premia un trazado tranquilo y cuidadoso.",
      f1_title: "Trazar, no tocar",
      f1_body: "Pon un dedo en el punto brillante y traza despacio el camino punteado. El bichito se despierta y avanza con tu dedo — si te apresuras o levantas el dedo, se vuelve a dormir.",
      f2_title: "Letras que hablan",
      f2_body: "Cada camino es una letra de verdad trazada con los trazos correctos. Al terminar, la letra se muestra y se pronuncia con una palabra amigable — « A de Avión » — en tu idioma.",
      f3_title: "Mayúsculas y minúsculas",
      f3_body: "Practica mayúsculas de la A a la Z y minúsculas de la a a la z con un sencillo interruptor ABC/abc, o elige una sola letra en el selector.",
      f4_title: "Seguro por diseño",
      f4_body: "Sin anuncios, sin cuentas, sin seguimiento y sin recopilación de datos. Totalmente sin conexión, con una zona de padres tras un sencillo cálculo.",
      langs_title: "Habla cinco idiomas",
      langs_body: "La interfaz y las letras habladas están disponibles en inglés, turco, alemán, francés y español. La forma de la letra siempre se mantiene en inglés.",

      privacy_title: "Privacidad — AlphaBug Trace",
      privacy_desc: "AlphaBug Trace no recopila datos personales. Todo se queda en el dispositivo: sin cuentas, sin anuncios, sin seguimiento.",
      privacy_heading: "Política de privacidad",
      privacy_updated: "Última actualización: 18 de julio de 2026",
      privacy_intro: "AlphaBug Trace: Learn & Speak está pensado para niños pequeños, así que la privacidad es sencilla y estricta: la app no recopila nada.",
      privacy_data_title: "Datos que recopilamos",
      privacy_data_body: "Todo se queda en este dispositivo. No hay cuentas, ni anuncios, ni seguimiento: AlphaBug Trace no recopila ningún dato personal. Tu progreso y ajustes se guardan solo en el almacenamiento local de tu dispositivo.",
      privacy_perms_title: "Permisos",
      privacy_perms_body: "Ninguno. AlphaBug Trace funciona totalmente sin conexión y no necesita permisos especiales del dispositivo.",
      privacy_children_title: "Privacidad de los niños",
      privacy_children_body: "La app está hecha para peques y niños de preescolar. No contiene publicidad, ni funciones sociales, ni enlaces externos accesibles por un niño. Cualquier acción de compra está tras un cálculo para padres.",
      privacy_purchases_title: "Compras",
      privacy_purchases_body: "La compra única opcional « Versión completa » la procesa por completo el App Store de Apple o Google Play. Nunca vemos ni guardamos tus datos de pago; las tiendas gestionan la transacción bajo sus propias políticas.",
      privacy_contact_title: "Contacto",
      privacy_contact_body: "¿Preguntas sobre privacidad? Escríbenos:",

      support_title: "Soporte — AlphaBug Trace",
      support_desc: "Ayuda de AlphaBug Trace: cómo jugar, desbloquear la versión completa, restaurar compras y cambiar el idioma.",
      support_heading: "Soporte",
      support_intro: "Respuestas a preguntas frecuentes. ¿Sigues atascado? Encantados de ayudar.",
      q1: "¿Cómo se juega?",
      a1: "Pon un dedo en el punto brillante al inicio del camino y traza despacio la línea punteada. El bichito se despierta y sigue tu dedo hasta la hoja o la flor. Algunas letras (como E, F, H, T) tienen varios trazos: termina uno y el bichito salta al inicio del siguiente.",
      q2: "¿Cómo desbloqueo todas las letras?",
      a2: "La versión gratuita incluye las letras de la A a la E. Para desbloquear todo el alfabeto de la A a la Z, abre la zona de padres (el candado), pasa el cálculo y toca « Desbloquear todas las letras » en la tarjeta. Es una compra única.",
      q3: "Compré la versión completa en otro dispositivo. ¿Cómo la restauro?",
      a3: "Abre la zona de padres y toca « Restaurar compra » en la tarjeta. Asegúrate de haber iniciado sesión con el mismo ID de Apple o cuenta de Google que usaste en la compra original.",
      q4: "¿Cómo cambio el idioma?",
      a4: "Abre la zona de padres (candado), pasa el cálculo y elige tu idioma en Ajustes. La interfaz y las letras habladas siguen tu elección; la forma de las letras se mantiene en inglés.",
      q5: "¿Qué es la pregunta de cálculo al abrir la zona de padres?",
      a5: "Es un sencillo control parental para que los peques no cambien ajustes ni hagan compras por accidente. Resuelve la pequeña multiplicación (por ejemplo, 3 × 4 = 12) para continuar.",
      support_contact_title: "¿Aún necesitas ayuda?",
      support_contact_body: "Escríbenos un correo y te responderemos:"
    }
  };

  function pick(list) {
    for (var i = 0; i < list.length; i++) {
      var raw = (list[i] || "").toLowerCase();
      var base = raw.split("-")[0];
      if (SUPPORTED.indexOf(base) !== -1) return base;
    }
    return null;
  }

  function resolveLang() {
    var params = new URLSearchParams(window.location.search);
    var q = params.get("lang");
    if (q && SUPPORTED.indexOf(q.toLowerCase()) !== -1) return q.toLowerCase();
    var stored;
    try { stored = localStorage.getItem("abt_lang"); } catch (e) { stored = null; }
    if (stored && SUPPORTED.indexOf(stored) !== -1) return stored;
    var nav = pick(navigator.languages || [navigator.language || "en"]);
    return nav || "en";
  }

  function t(lang, key) {
    return (I18N[lang] && I18N[lang][key]) || I18N.en[key] || key;
  }

  function apply(lang) {
    var page = document.body.getAttribute("data-page") || "home";
    document.documentElement.lang = lang;

    // Per-page <title> and meta description.
    document.title = t(lang, page + "_title");
    var meta = document.querySelector('meta[name="description"]');
    if (meta) meta.setAttribute("content", t(lang, page + "_desc"));

    // Text nodes.
    var nodes = document.querySelectorAll("[data-i18n]");
    for (var i = 0; i < nodes.length; i++) {
      var key = nodes[i].getAttribute("data-i18n");
      nodes[i].textContent = t(lang, key);
    }

    // Email links + display.
    var mails = document.querySelectorAll("[data-email]");
    for (var m = 0; m < mails.length; m++) {
      mails[m].textContent = EMAIL;
      mails[m].setAttribute("href", "mailto:" + EMAIL);
    }

    // Updated date placeholders already localized via *_updated keys.
    // Keep the switcher in sync.
    var sel = document.getElementById("lang-select");
    if (sel && sel.value !== lang) sel.value = lang;
  }

  function persist(lang) {
    try { localStorage.setItem("abt_lang", lang); } catch (e) { /* ignore */ }
  }

  function buildSwitcher(current) {
    var sel = document.getElementById("lang-select");
    if (!sel) return;
    sel.innerHTML = "";
    for (var i = 0; i < SUPPORTED.length; i++) {
      var code = SUPPORTED[i];
      var opt = document.createElement("option");
      opt.value = code;
      opt.textContent = LANG_NAMES[code];
      if (code === current) opt.selected = true;
      sel.appendChild(opt);
    }
    sel.addEventListener("change", function () {
      var lang = sel.value;
      persist(lang);
      var url = new URL(window.location.href);
      url.searchParams.set("lang", lang);
      window.history.replaceState({}, "", url.toString());
      apply(lang);
    });
  }

  function init() {
    var lang = resolveLang();
    persist(lang);
    buildSwitcher(lang);
    apply(lang);
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }

  // Exposed for a headless coverage check (see README).
  window.__ABT_I18N__ = { I18N: I18N, SUPPORTED: SUPPORTED, apply: apply };
})();
