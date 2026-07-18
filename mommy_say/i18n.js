/* Mommy Says: Toddler Sound Box — shared i18n layer.
   One dictionary drives index / privacy / support. Markup opts in with
   data-i18n="key"; <body data-page="home|privacy|support"> selects the
   per-page <title> (title_<page>) and meta description (meta_<page>).
   Language resolution: ?lang= -> localStorage -> navigator.languages -> en. */
(function () {
  "use strict";

  var SUPPORTED = ["en", "tr", "de", "fr", "es"];
  var STORAGE_KEY = "mds_lang";
  var EMAIL = "kubzer@gmail.com";

  var I18N = {
    en: {
      brand: "Mommy Says: Toddler Sound Box",
      nav_home: "Home", nav_privacy: "Privacy", nav_support: "Support",
      footer_tagline: "Made with love for little ones 🧸",
      footer_rights: "© 2026 Mommy Says. All rights reserved.",

      title_home: "Mommy Says — Toddler Sound Box in your own voice",
      meta_home: "Turn your own voice into a soundboard your toddler can play alone. Big friendly buttons, a safe parent zone, and everything stays on your device.",
      title_privacy: "Privacy Policy — Mommy Says",
      meta_privacy: "How Mommy Says protects your privacy: no accounts, no ads, no tracking, and fully offline.",
      title_support: "Support — Mommy Says",
      meta_support: "Help and FAQ for Mommy Says: Toddler Sound Box.",

      hero_badge: "For toddlers · Loved by parents",
      hero_h1: "Your voice, their soundboard",
      hero_lead: "Record Mommy, Daddy, and the sounds of their world. Then hand over the phone and let your little one tap the big, friendly buttons to hear you again and again.",
      cta_privacy: "Privacy Policy", cta_support: "Support & FAQ",

      how_h: "How it works",
      how_b: "Record your own voice for each button, then let your little one tap away. Tap the lock in the corner and answer a quick question to reach Parent Mode, where you can record, add, or remove buttons.",

      feat_h: "Why parents love it",
      feat_voice_t: "Your own voice",
      feat_voice_b: "Record every button yourself — names, animals, songs, bedtime words.",
      feat_safe_t: "Safe parent zone",
      feat_safe_b: "A simple math gate keeps every control away from little fingers.",
      feat_offline_t: "Fully offline",
      feat_offline_b: "No internet needed. No ads, no pop-ups, no third-party tracking.",
      feat_private_t: "Private by design",
      feat_private_b: "No accounts, no sign-ups. Your recordings and photos never leave the phone.",
      feat_lang_t: "Five languages",
      feat_lang_b: "English, Turkish, German, French, and Spanish — the whole app follows you.",
      feat_free_t: "Free to start",
      feat_free_b: "Four default buttons plus one custom sound are free. Unlock unlimited once.",

      home_privacy_h: "Your privacy",
      home_privacy_b: "Everything stays on this device. There are no accounts, no ads, and no tracking — your recordings and photos never leave the phone, and we do not collect any personal data.",

      pr_h: "Privacy Policy",
      pr_updated: "Last updated: July 18, 2026",
      pr_intro: "Everything stays on this device. There are no accounts, no ads, and no tracking — your recordings and photos never leave the phone, and we do not collect any personal data.",
      pr_data_t: "Information we collect",
      pr_data_b: "None. Mommy Says has no accounts, no analytics, and no advertising. We do not collect, transmit, or sell any personal data. Your voice recordings and any photos you choose stay in the app's private storage on your device.",
      pr_perm_t: "Permissions",
      pr_perm_b: "Microphone — only while a parent is recording a button.\nPhotos — only when you choose a picture as a button's icon.",
      pr_purch_t: "Purchases",
      pr_purch_b: "The optional one-time full version purchase is handled entirely by the App Store or Google Play. We never see or store your payment details, and all purchase options live behind the parental gate — never shown to children.",
      pr_children_t: "Children's privacy",
      pr_children_b: "Mommy Says is designed for families with young children. Because the app collects no personal information and shows children no ads, links, or purchase prompts, it is built to align with children's privacy rules such as COPPA and GDPR-K. Parents stay in control through the math gate.",
      pr_contact_t: "Contact us",
      pr_contact_b: "Questions about privacy? Email us at",

      sp_h: "Support",
      sp_intro: "Happy to help. Most answers are below — if you are still stuck, email us and we will get back to you.",
      sp_faq_h: "Frequently asked questions",
      q1: "How do I record a sound?",
      a1: "Enter Parent Mode (tap the Parents padlock and answer the math question). Tap a button to start recording, then tap the same button again to stop and save.",
      q2: "How do I reach Parent Mode?",
      a2: "Tap the Parents padlock pill at the top of the screen and answer the simple math question. This keeps toddlers out while staying quick for grown-ups.",
      q3: "How do I add my own button?",
      a3: "In Parent Mode tap Add sound, type a label, and pick an icon or a photo from your gallery. Then tap the new button to record its sound.",
      q4: "What does the full version include?",
      a4: "The free version includes the four default buttons plus one custom button. The one-time full version unlocks unlimited custom buttons. Defaults are always free.",
      q5: "How do I restore my purchase?",
      a5: "In Parent Mode open About & Privacy and tap Restore purchase. Your one-time unlock will be re-delivered on any device signed in to the same store account.",
      q6: "Which languages are supported?",
      a6: "English, Turkish, German, French, and Spanish. The app follows your device language, or you can pick one from the Language menu in Parent Mode.",
      sp_terms_t: "Terms of use",
      sp_terms_b: "Mommy Says is provided as-is for personal, family use. You are responsible for the recordings and images you add.",
      sp_contact_t: "Still need help?",
      sp_contact_b: "Email us and we usually reply within a couple of days:"
    },

    tr: {
      brand: "Mommy Says: Toddler Sound Box",
      nav_home: "Ana sayfa", nav_privacy: "Gizlilik", nav_support: "Destek",
      footer_tagline: "Küçükler için sevgiyle yapıldı 🧸",
      footer_rights: "© 2026 Mommy Says. Tüm hakları saklıdır.",

      title_home: "Mommy Says — Kendi sesinle çocuk ses tahtası",
      meta_home: "Kendi sesinizi çocuğunuzun tek başına çalabileceği bir ses tahtasına dönüştürün. Kocaman düğmeler, güvenli ebeveyn alanı; her şey cihazınızda kalır.",
      title_privacy: "Gizlilik Politikası — Mommy Says",
      meta_privacy: "Mommy Says gizliliğinizi nasıl korur: hesap yok, reklam yok, takip yok ve tamamen çevrimdışı.",
      title_support: "Destek — Mommy Says",
      meta_support: "Mommy Says: Toddler Sound Box için yardım ve SSS.",

      hero_badge: "Çocuklar için · Ebeveynlerin gözdesi",
      hero_h1: "Senin sesin, onun ses tahtası",
      hero_lead: "Anneyi, babayı ve dünyasının seslerini kaydedin. Sonra telefonu uzatın; küçüğünüz kocaman, sevimli düğmelere dokunarak sizi tekrar tekrar dinlesin.",
      cta_privacy: "Gizlilik Politikası", cta_support: "Destek ve SSS",

      how_h: "Nasıl çalışır",
      how_b: "Her düğme için kendi sesinizi kaydedin, sonra küçüğünüz dokunarak oynasın. Ebeveyn Moduna ulaşmak için köşedeki kilide dokunun ve kısa bir soruyu yanıtlayın; orada ses kaydedebilir, düğme ekleyebilir veya kaldırabilirsiniz.",

      feat_h: "Ebeveynler neden seviyor",
      feat_voice_t: "Kendi sesin",
      feat_voice_b: "Her düğmeyi kendin kaydet — isimler, hayvanlar, şarkılar, uyku sözcükleri.",
      feat_safe_t: "Güvenli ebeveyn alanı",
      feat_safe_b: "Basit bir matematik kilidi tüm kontrolleri küçük parmaklardan uzak tutar.",
      feat_offline_t: "Tamamen çevrimdışı",
      feat_offline_b: "İnternet gerekmez. Reklam yok, açılır pencere yok, üçüncü taraf takibi yok.",
      feat_private_t: "Tasarımı gereği gizli",
      feat_private_b: "Hesap yok, kayıt yok. Kayıtlarınız ve fotoğraflarınız telefondan asla çıkmaz.",
      feat_lang_t: "Beş dil",
      feat_lang_b: "İngilizce, Türkçe, Almanca, Fransızca ve İspanyolca — tüm uygulama sizi izler.",
      feat_free_t: "Ücretsiz başlayın",
      feat_free_b: "Dört varsayılan düğme ve bir özel ses ücretsiz. Sınırsızın kilidini bir kez açın.",

      home_privacy_h: "Gizliliğiniz",
      home_privacy_b: "Her şey bu cihazda kalır. Hesap, reklam ve takip yoktur — kayıtlarınız ve fotoğraflarınız telefondan asla çıkmaz ve hiçbir kişisel veri toplamayız.",

      pr_h: "Gizlilik Politikası",
      pr_updated: "Son güncelleme: 18 Temmuz 2026",
      pr_intro: "Her şey bu cihazda kalır. Hesap, reklam ve takip yoktur — kayıtlarınız ve fotoğraflarınız telefondan asla çıkmaz ve hiçbir kişisel veri toplamayız.",
      pr_data_t: "Topladığımız bilgiler",
      pr_data_b: "Hiçbiri. Mommy Says'te hesap, analiz veya reklam yoktur. Hiçbir kişisel veriyi toplamaz, aktarmaz veya satmayız. Ses kayıtlarınız ve seçtiğiniz fotoğraflar, cihazınızdaki uygulamanın özel deposunda kalır.",
      pr_perm_t: "İzinler",
      pr_perm_b: "Mikrofon — yalnızca bir ebeveyn düğme kaydederken.\nFotoğraflar — yalnızca bir düğme simgesi olarak resim seçtiğinizde.",
      pr_purch_t: "Satın almalar",
      pr_purch_b: "İsteğe bağlı tek seferlik tam sürüm satın alması tamamen App Store veya Google Play tarafından yürütülür. Ödeme bilgilerinizi asla görmez veya saklamayız ve tüm satın alma seçenekleri ebeveyn kilidinin arkasındadır — çocuklara asla gösterilmez.",
      pr_children_t: "Çocukların gizliliği",
      pr_children_b: "Mommy Says, küçük çocukları olan aileler için tasarlanmıştır. Uygulama hiçbir kişisel bilgi toplamadığı ve çocuklara reklam, bağlantı veya satın alma istemi göstermediği için, COPPA ve GDPR-K gibi çocuk gizliliği kurallarıyla uyumlu olacak şekilde geliştirilmiştir. Ebeveynler matematik kilidiyle kontrolü elinde tutar.",
      pr_contact_t: "Bize ulaşın",
      pr_contact_b: "Gizlilikle ilgili sorularınız mı var? Bize e-posta gönderin:",

      sp_h: "Destek",
      sp_intro: "Yardımcı olmaktan mutluluk duyarız. Çoğu yanıt aşağıda — hâlâ takıldıysanız bize e-posta gönderin, size dönüş yapalım.",
      sp_faq_h: "Sık sorulan sorular",
      q1: "Nasıl ses kaydederim?",
      a1: "Ebeveyn Moduna girin (Ebeveynler kilidine dokunup matematik sorusunu yanıtlayın). Kayda başlamak için bir düğmeye dokunun, durdurup kaydetmek için aynı düğmeye tekrar dokunun.",
      q2: "Ebeveyn Moduna nasıl ulaşırım?",
      a2: "Ekranın üstündeki Ebeveynler kilit hapına dokunun ve basit matematik sorusunu yanıtlayın. Bu, büyükler için hızlı kalırken küçükleri dışarıda tutar.",
      q3: "Kendi düğmemi nasıl eklerim?",
      a3: "Ebeveyn Modunda Ses ekle'ye dokunun, bir etiket yazın ve bir simge ya da galerinizden bir fotoğraf seçin. Sonra sesini kaydetmek için yeni düğmeye dokunun.",
      q4: "Tam sürüm neleri içerir?",
      a4: "Ücretsiz sürüm dört varsayılan düğme ve bir özel düğme içerir. Tek seferlik tam sürüm sınırsız özel düğmenin kilidini açar. Varsayılanlar her zaman ücretsizdir.",
      q5: "Satın almamı nasıl geri yüklerim?",
      a5: "Ebeveyn Modunda Hakkında ve Gizlilik'i açın ve Satın almayı geri yükle'ye dokunun. Tek seferlik kilidiniz, aynı mağaza hesabına giriş yapılmış her cihazda yeniden teslim edilir.",
      q6: "Hangi diller destekleniyor?",
      a6: "İngilizce, Türkçe, Almanca, Fransızca ve İspanyolca. Uygulama cihazınızın dilini izler ya da Ebeveyn Modundaki Dil menüsünden birini seçebilirsiniz.",
      sp_terms_t: "Kullanım koşulları",
      sp_terms_b: "Mommy Says kişisel, ailevi kullanım için olduğu gibi sunulur. Eklediğiniz kayıt ve görsellerden siz sorumlusunuz.",
      sp_contact_t: "Hâlâ yardım mı gerekiyor?",
      sp_contact_b: "Bize e-posta gönderin, genellikle birkaç gün içinde yanıtlarız:"
    },

    de: {
      brand: "Mommy Says: Toddler Sound Box",
      nav_home: "Start", nav_privacy: "Datenschutz", nav_support: "Support",
      footer_tagline: "Mit Liebe für die Kleinen gemacht 🧸",
      footer_rights: "© 2026 Mommy Says. Alle Rechte vorbehalten.",

      title_home: "Mommy Says — Kinder-Klangbrett mit deiner Stimme",
      meta_home: "Verwandle deine Stimme in ein Klangbrett, das dein Kind allein abspielt. Große Knöpfe, ein sicherer Eltern-Bereich — und alles bleibt auf dem Gerät.",
      title_privacy: "Datenschutz — Mommy Says",
      meta_privacy: "Wie Mommy Says deine Privatsphäre schützt: keine Konten, keine Werbung, kein Tracking, komplett offline.",
      title_support: "Support — Mommy Says",
      meta_support: "Hilfe und FAQ für Mommy Says: Toddler Sound Box.",

      hero_badge: "Für Kleinkinder · Von Eltern geliebt",
      hero_h1: "Deine Stimme, ihr Klangbrett",
      hero_lead: "Nimm Mama, Papa und die Geräusche ihrer Welt auf. Dann reich das Handy weiter und lass dein Kleines die großen, freundlichen Knöpfe tippen, um dich wieder und wieder zu hören.",
      cta_privacy: "Datenschutz", cta_support: "Support & FAQ",

      how_h: "So funktioniert es",
      how_b: "Nimm für jede Taste deine eigene Stimme auf und lass dein Kleines nach Herzenslust tippen. Tippe auf das Schloss in der Ecke und beantworte eine kurze Frage, um in den Eltern-Modus zu gelangen, wo du Töne aufnehmen, Tasten hinzufügen oder entfernen kannst.",

      feat_h: "Warum Eltern es lieben",
      feat_voice_t: "Deine eigene Stimme",
      feat_voice_b: "Nimm jeden Knopf selbst auf — Namen, Tiere, Lieder, Gute-Nacht-Worte.",
      feat_safe_t: "Sicherer Eltern-Bereich",
      feat_safe_b: "Eine einfache Rechensperre hält alle Bedienelemente von kleinen Fingern fern.",
      feat_offline_t: "Komplett offline",
      feat_offline_b: "Kein Internet nötig. Keine Werbung, keine Pop-ups, kein Tracking durch Dritte.",
      feat_private_t: "Privat by Design",
      feat_private_b: "Keine Konten, keine Anmeldung. Deine Aufnahmen und Fotos verlassen das Handy nie.",
      feat_lang_t: "Fünf Sprachen",
      feat_lang_b: "Englisch, Türkisch, Deutsch, Französisch und Spanisch — die ganze App folgt dir.",
      feat_free_t: "Kostenlos starten",
      feat_free_b: "Vier Standardtasten plus ein eigener Ton sind kostenlos. Einmal unbegrenzt freischalten.",

      home_privacy_h: "Dein Datenschutz",
      home_privacy_b: "Alles bleibt auf diesem Gerät. Es gibt keine Konten, keine Werbung und kein Tracking — deine Aufnahmen und Fotos verlassen das Telefon nie, und wir erheben keine personenbezogenen Daten.",

      pr_h: "Datenschutzerklärung",
      pr_updated: "Zuletzt aktualisiert: 18. Juli 2026",
      pr_intro: "Alles bleibt auf diesem Gerät. Es gibt keine Konten, keine Werbung und kein Tracking — deine Aufnahmen und Fotos verlassen das Telefon nie, und wir erheben keine personenbezogenen Daten.",
      pr_data_t: "Erhobene Daten",
      pr_data_b: "Keine. Mommy Says hat keine Konten, keine Analyse und keine Werbung. Wir erheben, übertragen oder verkaufen keine personenbezogenen Daten. Deine Sprachaufnahmen und ausgewählten Fotos bleiben im privaten Speicher der App auf deinem Gerät.",
      pr_perm_t: "Berechtigungen",
      pr_perm_b: "Mikrofon — nur während ein Elternteil eine Taste aufnimmt.\nFotos — nur wenn du ein Bild als Tastensymbol auswählst.",
      pr_purch_t: "Käufe",
      pr_purch_b: "Der optionale einmalige Kauf der Vollversion wird vollständig vom App Store oder von Google Play abgewickelt. Wir sehen oder speichern deine Zahlungsdaten nie, und alle Kaufoptionen liegen hinter der Elternsperre — Kindern nie angezeigt.",
      pr_children_t: "Datenschutz für Kinder",
      pr_children_b: "Mommy Says ist für Familien mit kleinen Kindern gemacht. Da die App keine personenbezogenen Daten erhebt und Kindern keine Werbung, Links oder Kaufaufforderungen zeigt, ist sie auf Kinderschutzregeln wie COPPA und DSGVO-K ausgerichtet. Eltern behalten über die Rechensperre die Kontrolle.",
      pr_contact_t: "Kontakt",
      pr_contact_b: "Fragen zum Datenschutz? Schreib uns an",

      sp_h: "Support",
      sp_intro: "Wir helfen gern. Die meisten Antworten findest du unten — wenn du nicht weiterkommst, schreib uns und wir melden uns.",
      sp_faq_h: "Häufige Fragen",
      q1: "Wie nehme ich einen Ton auf?",
      a1: "Wechsle in den Eltern-Modus (tippe auf das Schloss Eltern und beantworte die Rechenaufgabe). Tippe einen Knopf, um die Aufnahme zu starten, und denselben Knopf erneut, um zu stoppen und zu speichern.",
      q2: "Wie erreiche ich den Eltern-Modus?",
      a2: "Tippe oben auf die Schloss-Pille Eltern und beantworte die einfache Rechenaufgabe. So bleiben Kleinkinder draußen, während es für Erwachsene schnell geht.",
      q3: "Wie füge ich einen eigenen Knopf hinzu?",
      a3: "Tippe im Eltern-Modus auf Ton hinzufügen, gib eine Beschriftung ein und wähle ein Symbol oder ein Foto aus deiner Galerie. Tippe dann den neuen Knopf, um seinen Ton aufzunehmen.",
      q4: "Was ist in der Vollversion enthalten?",
      a4: "Die kostenlose Version enthält die vier Standardtasten plus eine eigene Taste. Die einmalige Vollversion schaltet unbegrenzt eigene Tasten frei. Standardtasten sind immer kostenlos.",
      q5: "Wie stelle ich meinen Kauf wieder her?",
      a5: "Öffne im Eltern-Modus Über die App & Datenschutz und tippe auf Kauf wiederherstellen. Deine einmalige Freischaltung wird auf jedem Gerät mit demselben Store-Konto erneut geliefert.",
      q6: "Welche Sprachen werden unterstützt?",
      a6: "Englisch, Türkisch, Deutsch, Französisch und Spanisch. Die App folgt deiner Gerätesprache, oder du wählst eine im Sprachmenü im Eltern-Modus.",
      sp_terms_t: "Nutzungsbedingungen",
      sp_terms_b: "Mommy Says wird wie besehen für den persönlichen, familiären Gebrauch bereitgestellt. Du bist für die hinzugefügten Aufnahmen und Bilder verantwortlich.",
      sp_contact_t: "Brauchst du noch Hilfe?",
      sp_contact_b: "Schreib uns — wir antworten meist innerhalb weniger Tage:"
    },

    fr: {
      brand: "Mommy Says: Toddler Sound Box",
      nav_home: "Accueil", nav_privacy: "Confidentialité", nav_support: "Assistance",
      footer_tagline: "Fait avec amour pour les tout-petits 🧸",
      footer_rights: "© 2026 Mommy Says. Tous droits réservés.",

      title_home: "Mommy Says — Tableau sonore enfant à ta voix",
      meta_home: "Transforme ta voix en tableau sonore que ton tout-petit utilise seul. De grands boutons, un espace parents sûr, et tout reste sur l'appareil.",
      title_privacy: "Confidentialité — Mommy Says",
      meta_privacy: "Comment Mommy Says protège ta vie privée : pas de comptes, pas de publicités, pas de suivi, entièrement hors ligne.",
      title_support: "Assistance — Mommy Says",
      meta_support: "Aide et FAQ pour Mommy Says: Toddler Sound Box.",

      hero_badge: "Pour les tout-petits · Aimé des parents",
      hero_h1: "Ta voix, son tableau sonore",
      hero_lead: "Enregistre maman, papa et les sons de son monde. Puis tends-lui le téléphone et laisse ton tout-petit toucher les grands boutons tout doux pour t'entendre encore et encore.",
      cta_privacy: "Confidentialité", cta_support: "Aide & FAQ",

      how_h: "Comment ça marche",
      how_b: "Enregistrez votre propre voix pour chaque bouton, puis laissez votre tout-petit toucher à volonté. Touchez le cadenas dans le coin et répondez à une petite question pour accéder au Mode Parents, où vous pouvez enregistrer, ajouter ou retirer des boutons.",

      feat_h: "Pourquoi les parents adorent",
      feat_voice_t: "Ta propre voix",
      feat_voice_b: "Enregistre chaque bouton toi-même — prénoms, animaux, chansons, mots du soir.",
      feat_safe_t: "Espace parents sûr",
      feat_safe_b: "Un simple verrou mathématique éloigne toutes les commandes des petits doigts.",
      feat_offline_t: "Entièrement hors ligne",
      feat_offline_b: "Pas besoin d'internet. Pas de publicités, pas de fenêtres, aucun suivi tiers.",
      feat_private_t: "Privé par conception",
      feat_private_b: "Pas de comptes, pas d'inscription. Tes enregistrements et photos ne quittent jamais le téléphone.",
      feat_lang_t: "Cinq langues",
      feat_lang_b: "Anglais, turc, allemand, français et espagnol — toute l'app te suit.",
      feat_free_t: "Gratuit au départ",
      feat_free_b: "Quatre boutons par défaut et un son personnalisé sont gratuits. Débloque l'illimité une fois.",

      home_privacy_h: "Votre confidentialité",
      home_privacy_b: "Tout reste sur cet appareil. Il n'y a ni comptes, ni publicités, ni suivi — vos enregistrements et vos photos ne quittent jamais le téléphone, et nous ne collectons aucune donnée personnelle.",

      pr_h: "Politique de confidentialité",
      pr_updated: "Dernière mise à jour : 18 juillet 2026",
      pr_intro: "Tout reste sur cet appareil. Il n'y a ni comptes, ni publicités, ni suivi — vos enregistrements et vos photos ne quittent jamais le téléphone, et nous ne collectons aucune donnée personnelle.",
      pr_data_t: "Données que nous collectons",
      pr_data_b: "Aucune. Mommy Says n'a ni comptes, ni analyses, ni publicité. Nous ne collectons, ne transmettons ni ne vendons aucune donnée personnelle. Tes enregistrements vocaux et les photos choisies restent dans le stockage privé de l'app sur ton appareil.",
      pr_perm_t: "Autorisations",
      pr_perm_b: "Microphone — uniquement pendant qu'un parent enregistre un bouton.\nPhotos — uniquement lorsque vous choisissez une image comme icône d'un bouton.",
      pr_purch_t: "Achats",
      pr_purch_b: "L'achat unique facultatif de la version complète est entièrement géré par l'App Store ou Google Play. Nous ne voyons ni ne conservons jamais tes informations de paiement, et toutes les options d'achat se trouvent derrière le verrou parental — jamais montrées aux enfants.",
      pr_children_t: "Confidentialité des enfants",
      pr_children_b: "Mommy Says est conçu pour les familles avec de jeunes enfants. Comme l'app ne collecte aucune information personnelle et ne montre aux enfants ni publicités, ni liens, ni invitations à l'achat, elle est pensée pour respecter les règles de confidentialité des enfants comme la COPPA et le RGPD-K. Les parents gardent le contrôle grâce au verrou mathématique.",
      pr_contact_t: "Nous contacter",
      pr_contact_b: "Des questions sur la confidentialité ? Écris-nous à",

      sp_h: "Assistance",
      sp_intro: "Ravis de t'aider. La plupart des réponses sont ci-dessous — si tu es bloqué, écris-nous et nous te répondrons.",
      sp_faq_h: "Questions fréquentes",
      q1: "Comment enregistrer un son ?",
      a1: "Passe en Mode Parents (touche le cadenas Parents et réponds à la question de calcul). Touche un bouton pour lancer l'enregistrement, puis touche le même bouton pour arrêter et sauvegarder.",
      q2: "Comment accéder au Mode Parents ?",
      a2: "Touche la pastille cadenas Parents en haut de l'écran et réponds à la petite question de calcul. Cela tient les tout-petits à l'écart tout en restant rapide pour les adultes.",
      q3: "Comment ajouter mon propre bouton ?",
      a3: "En Mode Parents, touche Ajouter un son, saisis un libellé et choisis une icône ou une photo de ta galerie. Touche ensuite le nouveau bouton pour enregistrer son son.",
      q4: "Que comprend la version complète ?",
      a4: "La version gratuite comprend les quatre boutons par défaut et un bouton personnalisé. La version complète, en achat unique, débloque des boutons illimités. Les boutons par défaut restent toujours gratuits.",
      q5: "Comment restaurer mon achat ?",
      a5: "En Mode Parents, ouvre À propos et confidentialité et touche Restaurer l'achat. Ton déblocage unique sera redistribué sur tout appareil connecté au même compte de la boutique.",
      q6: "Quelles langues sont prises en charge ?",
      a6: "Anglais, turc, allemand, français et espagnol. L'app suit la langue de ton appareil, ou tu peux en choisir une dans le menu Langue en Mode Parents.",
      sp_terms_t: "Conditions d'utilisation",
      sp_terms_b: "Mommy Says est fourni tel quel pour un usage personnel et familial. Vous êtes responsable des enregistrements et des images que vous ajoutez.",
      sp_contact_t: "Besoin d'aide ?",
      sp_contact_b: "Écris-nous — nous répondons généralement sous quelques jours :"
    },

    es: {
      brand: "Mommy Says: Toddler Sound Box",
      nav_home: "Inicio", nav_privacy: "Privacidad", nav_support: "Soporte",
      footer_tagline: "Hecho con amor para los más pequeños 🧸",
      footer_rights: "© 2026 Mommy Says. Todos los derechos reservados.",

      title_home: "Mommy Says — Tablero de sonidos infantil con tu voz",
      meta_home: "Convierte tu voz en un tablero de sonidos que tu peque usa solo. Botones grandes, una zona de padres segura y todo se queda en el dispositivo.",
      title_privacy: "Privacidad — Mommy Says",
      meta_privacy: "Cómo Mommy Says protege tu privacidad: sin cuentas, sin anuncios, sin seguimiento y totalmente sin conexión.",
      title_support: "Soporte — Mommy Says",
      meta_support: "Ayuda y preguntas frecuentes de Mommy Says: Toddler Sound Box.",

      hero_badge: "Para peques · Querido por padres",
      hero_h1: "Tu voz, su tablero de sonidos",
      hero_lead: "Graba a mamá, papá y los sonidos de su mundo. Luego pásale el teléfono y deja que tu peque toque los botones grandes y amables para oírte una y otra vez.",
      cta_privacy: "Política de privacidad", cta_support: "Soporte y FAQ",

      how_h: "Cómo funciona",
      how_b: "Graba tu propia voz para cada botón y deja que tu pequeño toque a su gusto. Toca el candado de la esquina y responde una pregunta rápida para entrar al Modo Padres, donde puedes grabar, añadir o quitar botones.",

      feat_h: "Por qué gusta a los padres",
      feat_voice_t: "Tu propia voz",
      feat_voice_b: "Graba cada botón tú mismo — nombres, animales, canciones, palabras de dormir.",
      feat_safe_t: "Zona de padres segura",
      feat_safe_b: "Un sencillo control con sumas mantiene los ajustes lejos de los dedos pequeños.",
      feat_offline_t: "Totalmente sin conexión",
      feat_offline_b: "Sin internet. Sin anuncios, sin ventanas emergentes, sin seguimiento de terceros.",
      feat_private_t: "Privado por diseño",
      feat_private_b: "Sin cuentas ni registros. Tus grabaciones y fotos nunca salen del teléfono.",
      feat_lang_t: "Cinco idiomas",
      feat_lang_b: "Inglés, turco, alemán, francés y español — toda la app te sigue.",
      feat_free_t: "Empieza gratis",
      feat_free_b: "Cuatro botones predeterminados y un sonido personalizado son gratis. Desbloquea ilimitados una vez.",

      home_privacy_h: "Tu privacidad",
      home_privacy_b: "Todo se queda en este dispositivo. No hay cuentas, ni anuncios, ni seguimiento — tus grabaciones y fotos nunca salen del teléfono y no recopilamos ningún dato personal.",

      pr_h: "Política de privacidad",
      pr_updated: "Última actualización: 18 de julio de 2026",
      pr_intro: "Todo se queda en este dispositivo. No hay cuentas, ni anuncios, ni seguimiento — tus grabaciones y fotos nunca salen del teléfono y no recopilamos ningún dato personal.",
      pr_data_t: "Información que recopilamos",
      pr_data_b: "Ninguna. Mommy Says no tiene cuentas, ni análisis, ni publicidad. No recopilamos, transmitimos ni vendemos ningún dato personal. Tus grabaciones de voz y las fotos que elijas permanecen en el almacenamiento privado de la app en tu dispositivo.",
      pr_perm_t: "Permisos",
      pr_perm_b: "Micrófono — solo mientras un adulto graba un botón.\nFotos — solo cuando eliges una imagen como icono de un botón.",
      pr_purch_t: "Compras",
      pr_purch_b: "La compra única opcional de la versión completa la gestiona por completo App Store o Google Play. Nunca vemos ni almacenamos tus datos de pago, y todas las opciones de compra están detrás del control parental — nunca se muestran a los niños.",
      pr_children_t: "Privacidad de los niños",
      pr_children_b: "Mommy Says está diseñado para familias con niños pequeños. Como la app no recopila información personal y no muestra a los niños anuncios, enlaces ni avisos de compra, está pensada para cumplir con las normas de privacidad infantil como COPPA y RGPD-K. Los padres mantienen el control mediante el control con sumas.",
      pr_contact_t: "Contáctanos",
      pr_contact_b: "¿Preguntas sobre privacidad? Escríbenos a",

      sp_h: "Soporte",
      sp_intro: "Encantados de ayudar. La mayoría de respuestas están abajo — si sigues atascado, escríbenos y te responderemos.",
      sp_faq_h: "Preguntas frecuentes",
      q1: "¿Cómo grabo un sonido?",
      a1: "Entra en el Modo Padres (toca el candado Padres y responde la pregunta de matemáticas). Toca un botón para empezar a grabar y toca el mismo botón otra vez para parar y guardar.",
      q2: "¿Cómo entro al Modo Padres?",
      a2: "Toca la pastilla con candado Padres en la parte superior y responde la sencilla pregunta de matemáticas. Así los peques no entran y para los adultos sigue siendo rápido.",
      q3: "¿Cómo añado mi propio botón?",
      a3: "En el Modo Padres toca Añadir sonido, escribe una etiqueta y elige un icono o una foto de tu galería. Luego toca el nuevo botón para grabar su sonido.",
      q4: "¿Qué incluye la versión completa?",
      a4: "La versión gratuita incluye los cuatro botones predeterminados y un botón personalizado. La versión completa, de pago único, desbloquea botones ilimitados. Los predeterminados siempre son gratis.",
      q5: "¿Cómo restauro mi compra?",
      a5: "En el Modo Padres abre Acerca de y Privacidad y toca Restaurar compra. Tu desbloqueo único se volverá a entregar en cualquier dispositivo con la misma cuenta de la tienda.",
      q6: "¿Qué idiomas son compatibles?",
      a6: "Inglés, turco, alemán, francés y español. La app sigue el idioma de tu dispositivo, o puedes elegir uno en el menú Idioma del Modo Padres.",
      sp_terms_t: "Términos de uso",
      sp_terms_b: "Mommy Says se ofrece tal cual para uso personal y familiar. Eres responsable de las grabaciones e imágenes que añadas.",
      sp_contact_t: "¿Aún necesitas ayuda?",
      sp_contact_b: "Escríbenos — solemos responder en un par de días:"
    }
  };

  // ---- Resolution + application -------------------------------------------

  function normalize(code) {
    if (!code) return null;
    var base = String(code).toLowerCase().split("-")[0];
    return SUPPORTED.indexOf(base) !== -1 ? base : null;
  }

  function fromQuery() {
    try {
      var m = /[?&]lang=([^&]+)/.exec(window.location.search);
      return m ? normalize(decodeURIComponent(m[1])) : null;
    } catch (e) { return null; }
  }

  function fromStorage() {
    try { return normalize(window.localStorage.getItem(STORAGE_KEY)); }
    catch (e) { return null; }
  }

  function fromNavigator() {
    try {
      var langs = navigator.languages || [navigator.language];
      for (var i = 0; i < langs.length; i++) {
        var n = normalize(langs[i]);
        if (n) return n;
      }
    } catch (e) {}
    return null;
  }

  function resolveLang() {
    return fromQuery() || fromStorage() || fromNavigator() || "en";
  }

  function persist(lang) {
    try { window.localStorage.setItem(STORAGE_KEY, lang); } catch (e) {}
  }

  function apply(lang) {
    var dict = I18N[lang] || I18N.en;
    var root = document.documentElement;
    if (root) root.setAttribute("lang", lang);

    var nodes = document.querySelectorAll("[data-i18n]");
    for (var i = 0; i < nodes.length; i++) {
      var key = nodes[i].getAttribute("data-i18n");
      if (dict[key] != null) nodes[i].textContent = dict[key];
    }

    var page = (document.body && document.body.getAttribute("data-page")) || "home";
    if (dict["title_" + page]) document.title = dict["title_" + page];
    var meta = document.querySelector('meta[name="description"]');
    if (meta && dict["meta_" + page]) meta.setAttribute("content", dict["meta_" + page]);

    var sel = document.getElementById("langSelect");
    if (sel) sel.value = lang;
  }

  function setLang(lang) {
    var n = normalize(lang) || "en";
    persist(n);
    apply(n);
  }

  function init() {
    var lang = resolveLang();
    persist(lang);
    apply(lang);
    var sel = document.getElementById("langSelect");
    if (sel) {
      sel.addEventListener("change", function () { setLang(sel.value); });
    }
  }

  // Public hooks (also used by the Node key-coverage check).
  window.MDS_I18N = { dict: I18N, supported: SUPPORTED, setLang: setLang, resolve: resolveLang, email: EMAIL };

  if (typeof document !== "undefined" && document.addEventListener) {
    if (document.readyState === "loading") {
      document.addEventListener("DOMContentLoaded", init);
    } else {
      init();
    }
  }

  if (typeof module !== "undefined" && module.exports) {
    module.exports = { I18N: I18N, SUPPORTED: SUPPORTED };
  }
})();
