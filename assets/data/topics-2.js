/* J'investis — contenu des sujets 07 à 12 */
window.JI = window.JI || { topics: [] };

JI.topics.push({
  id: 'fonds',
  title: 'Fonds, FNB et indiciel',
  short: 'Acheter tout le marché en un clic',
  tagline: "La façon la plus simple, la moins chère et la plus prouvée d'investir en Bourse.",
  time: 20,
  levels: {
    1: [
      { h: "Un fonds, c'est un panier", html: `
<p>Au lieu d'acheter une seule action, un <strong>fonds</strong> regroupe l'argent de milliers d'investisseurs pour acheter des dizaines, centaines ou milliers de titres. Avec un seul achat, tu possèdes un petit morceau de tout le panier.</p>
<ul>
<li><strong>Fonds commun de placement</strong> (Canada) / <strong>OPCVM</strong> (France) : acheté auprès d'une institution, prix calculé une fois par jour.</li>
<li><strong>FNB</strong> (fonds négocié en Bourse, Canada) / <strong>ETF</strong> ou <strong>tracker</strong> : s'achète en Bourse comme une action, en temps réel.</li>
</ul>` },
      { h: 'Gestion active vs gestion indicielle', html: `
<ul>
<li><strong>Gestion active</strong> : un gestionnaire choisit les titres en essayant de battre le marché. Frais plus élevés.</li>
<li><strong>Gestion indicielle (passive)</strong> : le fonds copie simplement un indice (S&amp;P 500, MSCI World, TSX). Frais très bas.</li>
</ul>
<p>Comme on l'a vu dans <a href="#sujet-bourse">Comprendre la Bourse</a>, la majorité des fonds actifs font moins bien que leur indice sur le long terme. C'est pourquoi des investisseurs comme Warren Buffett recommandent un simple fonds indiciel à bas frais à la plupart des gens (lettre aux actionnaires de Berkshire Hathaway, 2013).</p>
<div class="c key"><b>À retenir</b>Tu ne peux pas contrôler le marché, mais tu peux contrôler tes frais.</div>` },
      { h: 'Les frais : le RFG (ou frais courants)', html: `
<p>Chaque fonds prélève des frais annuels, exprimés en pourcentage : le <strong>RFG</strong> (ratio des frais de gestion, Canada) ou les <strong>frais courants</strong> (TER, Europe). Ils sont prélevés automatiquement, tu ne les vois pas passer.</p>
<div class="tbl-wrap"><table class="tbl">
<thead><tr><th>100 000 $ sur 30 ans à 7 % brut</th><th>Frais 0,20 %</th><th>Frais 2,00 %</th></tr></thead>
<tbody>
<tr><td>Valeur finale approximative</td><td class="num">≈ 720 000 $</td><td class="num">≈ 432 000 $</td></tr>
</tbody></table></div>
<p>Une différence de 1,8 % par an fait perdre près de <strong>300 000 $</strong>. Les frais, eux aussi, sont composés.</p>` }
    ],
    2: [
      { h: 'Les FNB « tout-en-un »', html: `
<p>Au Canada, des FNB de répartition d'actifs détiennent, en un seul titre, des milliers d'actions et d'obligations du monde entier, et se rééquilibrent automatiquement. Les grandes familles (Vanguard, iShares, BMO…) proposent des versions 100 % actions, 80/20, 60/40, etc., avec des frais d'environ 0,20 à 0,25 %.</p>
<p>En Europe, l'équivalent courant est un ETF « MSCI World » ou « MSCI ACWI » (monde entier), éligible au PEA dans certaines versions synthétiques.</p>
<p class="small">Ceci n'est pas une recommandation d'achat : vérifie le document d'information (Aperçu du FNB / DIC) de chaque produit.</p>` },
      { h: 'Comment lire une fiche de fonds', html: `
<ul>
<li><strong>Indice suivi</strong> : quoi exactement (pays, taille d'entreprise) ?</li>
<li><strong>Frais</strong> (RFG/TER) : idéalement sous 0,30 % pour un indiciel large.</li>
<li><strong>Nombre de titres</strong> : plus il y en a, plus c'est diversifié.</li>
<li><strong>Écart de suivi</strong> : à quel point le fonds réplique fidèlement son indice.</li>
<li><strong>Distribution ou capitalisation</strong> : verse les dividendes, ou les réinvestit automatiquement.</li>
<li><strong>Actifs sous gestion et volume</strong> : un fonds trop petit risque de fermer.</li>
</ul>` },
      { h: 'Les robots-conseillers', html: `
<p>Les <strong>robots-conseillers</strong> (gestion pilotée en ligne) construisent et rééquilibrent un portefeuille de FNB pour toi après un questionnaire. Frais totaux typiques : environ 0,4 à 0,8 % par an. C'est plus cher que de gérer soi-même des FNB, mais beaucoup moins cher que la plupart des fonds communs traditionnels, et ça évite les erreurs émotionnelles.</p>` }
    ],
    3: [
      { h: 'Réplication physique vs synthétique', html: `
<p>Un FNB <strong>physique</strong> achète réellement les titres de l'indice (en totalité ou par échantillonnage). Un FNB <strong>synthétique</strong> utilise un contrat d'échange (<em>swap</em>) avec une banque qui lui verse la performance de l'indice. Le synthétique peut réduire certains coûts ou retenues fiscales, mais ajoute un risque de contrepartie (encadré en Europe par la réglementation UCITS).</p>` },
      { h: 'Pondération et investissement factoriel', html: `
<p>La plupart des indices sont <strong>pondérés par la capitalisation</strong> : les plus grandes entreprises pèsent le plus. En 2024-2025, une dizaine de géants technologiques représentaient plus du tiers du S&amp;P 500 : un risque de concentration à connaître.</p>
<p>Alternatives :</p>
<ul>
<li><strong>Équipondéré</strong> : chaque titre a le même poids.</li>
<li><strong>Factoriel / smart beta</strong> : surpondère des caractéristiques documentées par la recherche académique (Fama &amp; French, Carhart) : valeur, petite taille, momentum, qualité, faible volatilité. Ces primes existent sur très long terme mais peuvent disparaître pendant une décennie.</li>
</ul>` },
      { h: "Retenues d'impôt étrangères et structure", html: `
<p>Pour un pro, la structure d'un fonds compte : un FNB canadien qui détient un FNB américain qui détient des actions internationales subit plusieurs couches de retenues fiscales sur les dividendes étrangers. Selon le compte (REER, CELI, non enregistré), la structure optimale diffère. Les études de Justin Bender et Dan Bortolotti (PWL Capital) détaillent ce sujet pour les Canadiens.</p>` }
    ]
  },
  sources: [
    { label: 'Autorité des marchés financiers (Québec) — Fonds négociés en bourse', url: 'https://lautorite.qc.ca/grand-public/investissements/fonds-negocies-en-bourse-fnb' },
    { label: 'AMF France — Les ETF ou trackers', url: 'https://www.amf-france.org/fr/espace-epargnants/comprendre-les-produits-financiers/placements-collectifs/etf-ou-trackers' },
    { label: 'Investor.gov — Mutual Funds and ETFs', url: 'https://www.investor.gov/introduction-investing/investing-basics/investment-products/mutual-funds-and-exchange-traded-funds-etfs' },
    { label: 'Berkshire Hathaway — Lettre aux actionnaires 2013', url: 'https://www.berkshirehathaway.com/letters/2013ltr.pdf' },
    { label: 'S&P Dow Jones Indices — SPIVA Canada Scorecard', url: 'https://www.spglobal.com/spdji/en/research-insights/spiva/' },
    { label: 'Fama & French — Data Library (facteurs)', url: 'https://mba.tuck.dartmouth.edu/pages/faculty/ken.french/data_library.html' }
  ],
  exercises: [
    { lvl: 1, t: 'qcm', q: "Un fonds indiciel cherche à…", o: ["Battre le marché", "Copier la performance d'un indice", "Garantir le capital", "Choisir les meilleures actions"], a: 1, e: "Il réplique un indice, avec des frais très bas." },
    { lvl: 1, t: 'num', q: "Tu as 50 000 $ dans un fonds avec 2 % de frais annuels. Combien paies-tu de frais cette année ?", a: 1000, tol: 1, u: '$', e: "2 % × 50 000 = 1 000 $." },
    { lvl: 1, t: 'qcm', q: "Quelle est la principale différence entre un FNB/ETF et un fonds commun classique ?", o: ["Le FNB s'échange en Bourse en temps réel", "Le FNB est garanti", "Le fonds commun n'a pas de frais", "Aucune"], a: 0, e: "Le FNB se négocie en Bourse comme une action, pendant toute la journée." },
    { lvl: 2, t: 'num', q: "Même portefeuille de 50 000 $ dans un FNB à 0,20 %. Combien de frais annuels ?", a: 100, tol: 1, u: '$', e: "0,20 % × 50 000 = 100 $, soit 900 $ de moins par an que le fonds à 2 %." },
    { lvl: 2, t: 'qcm', q: "Un fonds « capitalisant »…", o: ["Verse ses dividendes en argent", "Réinvestit automatiquement ses dividendes", "N'a pas de dividendes", "Est réservé aux entreprises"], a: 1, e: "Capitalisant = les revenus sont réinvestis dans le fonds." },
    { lvl: 3, t: 'qcm', q: "Le principal risque supplémentaire d'un FNB synthétique est…", o: ["Le risque de change", "Le risque de contrepartie du swap", "Le risque de taux", "Aucun"], a: 1, e: "Le FNB dépend de la banque qui lui verse la performance via le swap." },
    { lvl: 3, t: 'qcm', q: "Lequel n'est PAS un facteur classique de la recherche académique ?", o: ["Valeur", "Momentum", "Petite capitalisation", "Couleur du logo"], a: 3, e: "Valeur, taille, momentum, qualité et faible volatilité sont les facteurs documentés." }
  ]
});

JI.topics.push({
  id: 'risque',
  title: 'Risque et diversification',
  short: 'Ne pas mettre tous ses œufs…',
  tagline: "La diversification est le seul « repas gratuit » de la finance, selon le Nobel Harry Markowitz.",
  time: 20,
  levels: {
    1: [
      { h: "Le risque, c'est quoi ?", html: `
<p>En investissement, le risque, c'est l'<strong>incertitude</strong> : la possibilité que ton placement baisse, ou ne rapporte pas ce que tu espérais. Règle de base : <strong>plus le rendement espéré est élevé, plus le risque est élevé</strong>. Quiconque promet un rendement élevé sans risque ment (voir <a href="#sujet-arnaques">Arnaques</a>).</p>
<div class="tbl-wrap"><table class="tbl">
<thead><tr><th>Placement</th><th>Risque</th><th>Rendement espéré long terme</th></tr></thead>
<tbody>
<tr><td>Compte épargne, CPG, livret</td><td>Très faible</td><td>Faible</td></tr>
<tr><td>Obligations gouvernementales</td><td>Faible</td><td>Faible à moyen</td></tr>
<tr><td>Portefeuille équilibré</td><td>Moyen</td><td>Moyen</td></tr>
<tr><td>Actions diversifiées</td><td>Élevé à court terme</td><td>Élevé</td></tr>
<tr><td>Action individuelle, crypto</td><td>Très élevé</td><td>Très incertain</td></tr>
</tbody></table></div>` },
      { h: 'Diversifier : ne pas mettre tous ses œufs dans le même panier', html: `
<p>Si tu mets tout dans une seule entreprise et qu'elle fait faillite, tu perds tout. Si tu détiens 3 000 entreprises de 40 pays, la faillite d'une seule ne se remarque presque pas.</p>
<p>On diversifie sur plusieurs axes :</p>
<ul>
<li><strong>Entreprises</strong> (des centaines au lieu de quelques-unes)</li>
<li><strong>Secteurs</strong> (pas seulement la techno ou l'énergie)</li>
<li><strong>Pays</strong> (le Canada représente environ 3 % de la Bourse mondiale, la France environ 3 % aussi)</li>
<li><strong>Classes d'actifs</strong> (actions, obligations, immobilier, liquidités)</li>
<li><strong>Le temps</strong> (investir régulièrement plutôt qu'en une fois)</li>
</ul>` },
      { h: 'Ton profil d’investisseur', html: `
<p>Avant de choisir tes placements, réponds à trois questions :</p>
<ol>
<li><strong>Horizon</strong> : dans combien d'années auras-tu besoin de cet argent ?</li>
<li><strong>Capacité</strong> : si ton portefeuille baisse de 30 %, est-ce que ta vie change (loyer, épicerie) ?</li>
<li><strong>Tolérance</strong> : est-ce que tu dormiras la nuit ? Est-ce que tu vendras en panique ?</li>
</ol>
<div class="c key"><b>À retenir</b>Le meilleur portefeuille est celui que tu peux garder même pendant une crise.</div>` }
    ],
    2: [
      { h: "L'allocation d'actifs", html: `
<p>L'<strong>allocation d'actifs</strong>, c'est la répartition entre actions, obligations et liquidités. Selon l'étude classique de Brinson, Hood et Beebower (1986), c'est elle qui explique la grande majorité des variations de rendement d'un portefeuille dans le temps, bien plus que le choix des titres.</p>
<div class="tbl-wrap"><table class="tbl">
<thead><tr><th>Profil</th><th>Actions / Obligations</th><th>Pire année historique approximative*</th></tr></thead>
<tbody>
<tr><td>Prudent</td><td class="num">40 / 60</td><td class="num">≈ −15 %</td></tr>
<tr><td>Équilibré</td><td class="num">60 / 40</td><td class="num">≈ −20 à −25 %</td></tr>
<tr><td>Croissance</td><td class="num">80 / 20</td><td class="num">≈ −30 %</td></tr>
<tr><td>Agressif</td><td class="num">100 / 0</td><td class="num">≈ −40 % et plus</td></tr>
</tbody></table></div>
<p class="small">*Ordres de grandeur inspirés des données historiques publiées par Vanguard pour les portefeuilles américains depuis 1926 ; le passé ne garantit pas l'avenir.</p>
<p>Ancienne règle simple : « 100 − ton âge = % en actions ». Beaucoup de spécialistes la jugent aujourd'hui trop prudente avec l'allongement de la vie et utilisent plutôt 110 ou 120 − âge.</p>` },
      { h: 'Le rééquilibrage', html: `
<p>Avec le temps, ton allocation dérive : si les actions montent beaucoup, ton 60/40 devient 70/30, donc plus risqué que prévu. <strong>Rééquilibrer</strong>, c'est revenir à ta cible en vendant un peu de ce qui a monté et en achetant ce qui a baissé.</p>
<ul>
<li><strong>Par calendrier</strong> : une fois par an.</li>
<li><strong>Par seuil</strong> : quand une classe s'éloigne de plus de 5 points de sa cible.</li>
<li>Astuce : rééquilibre avec tes <strong>nouvelles cotisations</strong> plutôt qu'en vendant, pour éviter frais et impôts.</li>
</ul>` },
      { h: 'Le risque de change', html: `
<p>Quand tu achètes des actions américaines en dollars canadiens ou en euros, tu es aussi exposé au <strong>taux de change</strong>. Si le dollar américain baisse, ton placement perd un peu de valeur en monnaie locale, et inversement. Sur le long terme, pour les actions, cet effet tend à s'équilibrer ; pour les obligations, beaucoup de fonds sont <strong>couverts</strong> contre le change.</p>` }
    ],
    3: [
      { h: 'Volatilité, écart-type et corrélation', html: `
<p>La <strong>volatilité</strong> (écart-type annuel des rendements) mesure l'amplitude des variations. Les actions mondiales ont historiquement une volatilité d'environ 15 à 20 % par an.</p>
<p>La <strong>corrélation</strong> (entre −1 et +1) mesure si deux actifs bougent ensemble. La diversification fonctionne parce que des actifs <em>imparfaitement corrélés</em> réduisent la volatilité totale sans réduire proportionnellement le rendement espéré. C'est le cœur de la <strong>théorie moderne du portefeuille</strong> de Harry Markowitz (1952, prix Nobel 1990).</p>
<div class="formula">σ<sub>p</sub>² = w₁²σ₁² + w₂²σ₂² + 2·w₁·w₂·ρ·σ₁·σ₂</div>` },
      { h: 'Ratio de Sharpe, bêta et perte maximale', html: `
<ul>
<li><strong>Ratio de Sharpe</strong> = (Rendement − Taux sans risque) ÷ Volatilité. Mesure le rendement obtenu par unité de risque (William Sharpe, Nobel 1990).</li>
<li><strong>Bêta</strong> : sensibilité au marché. Bêta de 1,5 → monte ou baisse en moyenne 1,5 fois plus que le marché.</li>
<li><strong>Perte maximale</strong> (<em>maximum drawdown</em>) : la pire chute d'un sommet à un creux. Le Nasdaq a perdu environ 78 % entre 2000 et 2002 et a mis environ 15 ans à revenir à son sommet.</li>
</ul>` },
      { h: 'Le risque de séquence', html: `
<p>Pour un retraité qui retire de l'argent, l'<strong>ordre</strong> des rendements compte énormément. Un krach dans les premières années de retraite, combiné aux retraits, peut épuiser un portefeuille qui aurait survécu au même krach 15 ans plus tard. Solutions de pro : coussin de 1 à 3 ans de liquidités, allocation plus prudente autour de la date de retraite, retraits flexibles.</p>` }
    ]
  },
  sources: [
    { label: 'Autorité des marchés financiers (Québec) — Diversification', url: 'https://lautorite.qc.ca/grand-public/investissements' },
    { label: 'Investor.gov — Asset Allocation, Diversification, and Rebalancing', url: 'https://www.investor.gov/additional-resources/general-resources/publications-research/info-sheets/beginners-guide-asset' },
    { label: 'Vanguard — Portfolio allocation models (historical returns)', url: 'https://investor.vanguard.com/investor-resources-education/education/model-portfolio-allocation' },
    { label: 'Markowitz, H. (1952) « Portfolio Selection », Journal of Finance', url: 'https://www.nobelprize.org/prizes/economic-sciences/1990/markowitz/facts/' },
    { label: 'Brinson, Hood & Beebower (1986) « Determinants of Portfolio Performance »', url: 'https://www.cfainstitute.org/' },
    { label: 'MSCI — Pondérations par pays du MSCI ACWI', url: 'https://www.msci.com/indexes/index/892400' }
  ],
  exercises: [
    { lvl: 1, t: 'qcm', q: "Plus le rendement espéré est élevé…", o: ["Plus le risque est faible", "Plus le risque est élevé", "Le risque n'a aucun lien", "Plus c'est garanti"], a: 1, e: "Risque et rendement vont ensemble." },
    { lvl: 1, t: 'qcm', q: "Quel portefeuille est le plus diversifié ?", o: ["3 actions technologiques", "1 FNB monde de 9 000 titres", "Toutes ses économies dans l'entreprise de son employeur", "Une seule cryptomonnaie"], a: 1, e: "Un fonds monde couvre des milliers d'entreprises, secteurs et pays." },
    { lvl: 1, t: 'qcm', q: "Tu as besoin de ton argent dans 2 ans pour acheter une maison. Quel profil choisir pour cet argent ?", o: ["Agressif 100 % actions", "Très prudent (épargne, CPG)", "Crypto", "Options"], a: 1, e: "Horizon court = on protège le capital." },
    { lvl: 2, t: 'num', q: "Portefeuille de 100 000 $, cible 60/40. Les actions montent à 72 000 $, obligations 38 000 $. Combien d'actions vendre (en $) pour revenir à 60/40 ?", a: 6000, tol: 1, u: '$', e: "Total = 110 000 $. Cible actions = 66 000 $. 72 000 − 66 000 = 6 000 $ à vendre (et acheter des obligations)." },
    { lvl: 2, t: 'num', q: "Règle « 110 − âge » : quel % en actions pour quelqu'un de 35 ans ?", a: 75, tol: 0.1, u: '%', e: "110 − 35 = 75 % en actions." },
    { lvl: 3, t: 'num', q: "Rendement 9 %, taux sans risque 3 %, volatilité 15 %. Ratio de Sharpe ?", a: 0.4, tol: 0.01, u: '', e: "(9 − 3) ÷ 15 = 0,4." },
    { lvl: 3, t: 'num', q: "Une action a un bêta de 1,3. Le marché baisse de 10 %. Baisse attendue de l'action (en %, négatif) ?", a: -13, tol: 0.1, u: '%', e: "1,3 × −10 % = −13 % (en moyenne)." },
    { lvl: 3, t: 'qcm', q: "Deux actifs ont une corrélation de −1. Que peut-on faire ?", o: ["Rien, ils sont identiques", "Les combiner pour réduire fortement (voire annuler) la volatilité", "Doubler le risque", "Ils sont forcément sans risque"], a: 1, e: "Une corrélation parfaitement négative permet théoriquement d'éliminer la volatilité en les combinant." }
  ]
});

JI.topics.push({
  id: 'timing',
  title: 'Quand investir ?',
  short: 'Le bon moment existe-t-il ?',
  tagline: "La question que tout le monde se pose. La réponse honnête surprend : le meilleur moment, c'est souvent maintenant, régulièrement.",
  time: 24,
  levels: {
    1: [
      { h: 'Avant de penser au « moment » : es-tu prêt ?', html: `
<p>Le vrai bon moment pour investir dépend d'abord de <strong>toi</strong>, pas du marché. Tu es prêt quand :</p>
<ol>
<li>Tu as un <strong>budget</strong> qui dégage un surplus chaque mois.</li>
<li>Tu as un <strong>fonds d'urgence</strong> (au moins 1 000 $, idéalement 3 à 6 mois).</li>
<li>Tu n'as <strong>plus de dettes chères</strong> (cartes de crédit, prêts à plus de 7–8 %).</li>
<li>L'argent investi n'est <strong>pas nécessaire avant 5 ans</strong> ou plus.</li>
<li>Tu comprends ce que tu achètes et tu acceptes qu'il puisse baisser de 30 % temporairement.</li>
</ol>
<div class="c key"><b>À retenir</b>Si ces 5 conditions sont remplies, le bon moment, c'est maintenant.</div>` },
      { h: '« Le temps dans le marché bat le timing du marché »', html: `
<p>Personne, ni les économistes, ni les gestionnaires de fonds, ni les influenceurs, ne peut prédire de façon fiable quand la Bourse va monter ou baisser à court terme. Ceux qui ont prédit un krach une fois l'ont souvent prédit dix autres fois sans succès.</p>
<p>Le problème du timing : les meilleures journées de Bourse arrivent souvent juste après les pires, en pleine panique. Selon les analyses de J.P. Morgan Asset Management, manquer seulement les <strong>10 meilleures journées</strong> sur 20 ans réduit le rendement total d'environ <strong>la moitié</strong>.</p>
<div class="c ex"><b>Exemple</b>En mars 2020, la Bourse s'est effondrée de plus de 30 %. Ceux qui ont vendu en panique ont souvent raté la remontée spectaculaire des semaines suivantes. Fin 2020, le S&amp;P 500 avait dépassé son sommet d'avant la crise.</div>` },
      { h: "L'investissement régulier (achats périodiques)", html: `
<p>La solution la plus simple pour ne plus te poser la question : investir un <strong>montant fixe à intervalle régulier</strong> (chaque paie, chaque mois), peu importe ce que fait le marché. En anglais, <em>dollar-cost averaging</em> (DCA).</p>
<div class="tbl-wrap"><table class="tbl">
<thead><tr><th>Mois</th><th>Montant investi</th><th>Prix de la part</th><th>Parts achetées</th></tr></thead>
<tbody>
<tr><td>Janvier</td><td class="num">300 $</td><td class="num">30 $</td><td class="num">10</td></tr>
<tr><td>Février</td><td class="num">300 $</td><td class="num">20 $</td><td class="num">15</td></tr>
<tr><td>Mars</td><td class="num">300 $</td><td class="num">25 $</td><td class="num">12</td></tr>
<tr><td><strong>Total</strong></td><td class="num">900 $</td><td class="num">moy. 25 $</td><td class="num">37 parts</td></tr>
</tbody></table></div>
<p>Ton coût moyen par part est 900 ÷ 37 = <strong>24,32 $</strong>, moins que le prix moyen de 25 $. Quand le marché baisse, tu achètes automatiquement plus de parts « en solde ».</p>` }
    ],
    2: [
      { h: 'Somme forfaitaire ou achats progressifs ?', html: `
<p>Tu reçois un héritage de 50 000 $. Investir tout d'un coup ou étaler sur 12 mois ?</p>
<p>Une étude de Vanguard (<em>Cost averaging: Invest now or temporarily hold your cash?</em>, 2023 et versions antérieures) montre que, historiquement, l'investissement en <strong>une seule fois</strong> a fait mieux environ <strong>2 fois sur 3</strong>, parce que les marchés montent plus souvent qu'ils ne baissent.</p>
<p>Mais étaler réduit le <strong>regret</strong> si un krach arrive juste après. Si l'idée de tout investir d'un coup t'empêche de dormir, étaler sur 6 à 12 mois est un compromis raisonnable.</p>` },
      { h: 'Les signaux qui donnent des indices (sans prédire)', html: `
<p>Certains indicateurs aident à savoir si le marché est <strong>cher ou bon marché</strong> par rapport à l'histoire. Ils ne disent pas <em>quand</em> il va bouger, mais influencent les rendements attendus sur 10 ans :</p>
<ul>
<li><strong>Ratio cours/bénéfice (C/B, P/E)</strong> : prix ÷ bénéfices. Moyenne historique du S&amp;P 500 autour de 15–17.</li>
<li><strong>CAPE de Shiller</strong> : prix ÷ moyenne des bénéfices réels sur 10 ans. Moyenne historique autour de 17 ; il a dépassé 40 en 2000 et a été au-dessus de 30 pendant une bonne partie des années 2020.</li>
<li><strong>Rendement en dividende</strong> du marché : un rendement très bas indique souvent un marché cher.</li>
<li><strong>Prime de risque</strong> : rendement des bénéfices (1 ÷ C/B) moins le rendement des obligations gouvernementales.</li>
</ul>
<div class="c warn"><b>Attention</b>Un marché « cher » peut le rester des années. Le CAPE était déjà au-dessus de sa moyenne en 1995, et le marché a encore doublé avant 2000.</div>` },
      { h: 'Lire le sentiment : la peur et l’avidité', html: `
<p>La célèbre phrase de Warren Buffett : « Soyez craintif quand les autres sont avides, et avide quand les autres sont craintifs. » Quelques thermomètres du sentiment :</p>
<ul>
<li><strong>VIX</strong> (« indice de la peur ») : volatilité attendue du S&amp;P 500. Au-dessus de 30–40, panique ; historiquement, ces moments ont souvent été de bonnes occasions d'achat à long terme pour ceux qui ont tenu.</li>
<li><strong>Couvertures de magazines</strong>, discussions entre amis, chauffeurs de taxi qui donnent des conseils boursiers : signes d'euphorie.</li>
<li>Afflux massifs dans des produits spéculatifs (cryptos obscures, actions « mèmes », options à très court terme).</li>
</ul>
<p>Approche raisonnable : continuer les achats réguliers <strong>dans tous les cas</strong>, et éventuellement investir un peu plus lors des fortes baisses si tu as des liquidités disponibles.</p>` }
    ],
    3: [
      { h: 'Valorisation et rendements futurs', html: `
<p>Les travaux de Robert Shiller (Nobel 2013) et de nombreux gestionnaires (Vanguard, GMO, Research Affiliates) montrent qu'un CAPE élevé est associé à des <strong>rendements plus faibles sur les 10 années suivantes</strong>, avec une corrélation significative mais imparfaite. Sur 1 an, le pouvoir de prédiction est presque nul.</p>
<p>Application pro : utiliser la valorisation pour <strong>ajuster les attentes</strong> (taux de retrait à la retraite, épargne nécessaire) et, au maximum, faire varier modestement l'allocation (± 5 à 10 points), plutôt que de tout vendre.</p>
<div class="formula">Rendement espéré actions ≈ Rendement en dividende + Croissance des bénéfices ± Variation de valorisation</div>
<p>(Approche de John Bogle, fondateur de Vanguard.)</p>` },
      { h: 'Le cycle économique et les secteurs', html: `
<div class="tbl-wrap"><table class="tbl">
<thead><tr><th>Phase</th><th>Caractéristiques</th><th>Secteurs historiquement favorisés</th></tr></thead>
<tbody>
<tr><td>Reprise</td><td>Taux bas, croissance repart</td><td>Consommation discrétionnaire, finance, industrie</td></tr>
<tr><td>Expansion</td><td>Emploi fort, profits en hausse</td><td>Technologie, industrie</td></tr>
<tr><td>Ralentissement</td><td>Inflation, banques centrales montent les taux</td><td>Énergie, matériaux, santé</td></tr>
<tr><td>Récession</td><td>Chômage monte, profits baissent</td><td>Consommation de base, services publics, obligations gouvernementales</td></tr>
</tbody></table></div>
<p>Indicateurs suivis : courbe des taux, indices PMI (au-dessus de 50 = expansion), demandes d'assurance-emploi/chômage, indicateurs avancés de l'OCDE. Attention : la Bourse anticipe l'économie de 6 à 12 mois ; elle remonte souvent <em>avant</em> la fin d'une récession.</p>` },
      { h: 'Les banques centrales et les taux', html: `
<p>Les décisions de la Banque du Canada, de la BCE et de la Réserve fédérale américaine influencent fortement les marchés :</p>
<ul>
<li><strong>Baisse des taux</strong> : rend l'emprunt moins cher, soutient l'économie et la valorisation des actions (surtout de croissance) et l'immobilier.</li>
<li><strong>Hausse des taux</strong> : freine l'inflation, mais pèse sur les obligations existantes, les actions de croissance et l'immobilier (comme en 2022).</li>
</ul>
<p>Le marché réagit surtout à l'écart entre ce qui était <em>attendu</em> et ce qui est annoncé. « Acheter la rumeur, vendre la nouvelle. »</p>
<div class="c key"><b>À retenir (niveau pro)</b>Même les professionnels qui analysent tout ça à temps plein échouent majoritairement à battre un simple indice. Pour 99 % des gens, la stratégie gagnante reste : allocation adaptée + achats réguliers + rééquilibrage + patience.</div>` }
    ]
  },
  sources: [
    { label: 'Vanguard — Cost averaging: Invest now or temporarily hold your cash?', url: 'https://corporate.vanguard.com/content/dam/corp/research/pdf/cost_averaging_invest_now_or_temporarily_hold_your_cash.pdf' },
    { label: 'J.P. Morgan Asset Management — Guide to Retirement (impact des meilleures journées)', url: 'https://am.jpmorgan.com/us/en/asset-management/adv/insights/retirement-insights/guide-to-retirement/' },
    { label: 'Robert Shiller — Données CAPE (Yale)', url: 'http://www.econ.yale.edu/~shiller/data.htm' },
    { label: 'Cboe — VIX Index', url: 'https://www.cboe.com/tradable_products/vix/' },
    { label: 'OCDE — Indicateurs composites avancés', url: 'https://www.oecd.org/fr/' },
    { label: 'Autorité des marchés financiers (Québec) — Investir régulièrement', url: 'https://lautorite.qc.ca/grand-public/investissements' },
    { label: 'Berkshire Hathaway — Lettres aux actionnaires', url: 'https://www.berkshirehathaway.com/letters/letters.html' }
  ],
  exercises: [
    { lvl: 1, t: 'qcm', q: "Laquelle de ces conditions doit être remplie AVANT d'investir en Bourse ?", o: ["Avoir un fonds d'urgence", "Attendre que le marché baisse", "Avoir au moins 100 000 $", "Avoir lu les nouvelles du jour"], a: 0, e: "Le fonds d'urgence évite de devoir vendre tes placements au mauvais moment." },
    { lvl: 1, t: 'qcm', q: "Que signifie « le temps dans le marché bat le timing du marché » ?", o: ["Il faut acheter et vendre souvent", "Rester investi longtemps rapporte généralement plus que d'essayer de deviner les hauts et les bas", "Il faut investir seulement le matin", "Il faut attendre un krach"], a: 1, e: "Personne ne prédit fiablement le court terme ; rester investi capte les meilleures journées." },
    { lvl: 1, t: 'num', q: "Achats périodiques : 200 $ à 20 $/part, puis 200 $ à 10 $/part. Combien de parts au total ?", a: 30, tol: 0.01, u: 'parts', e: "200/20 = 10 parts ; 200/10 = 20 parts ; total 30 parts." },
    { lvl: 1, t: 'num', q: "Même exemple : quel est ton coût moyen par part ?", a: 13.33, tol: 0.02, u: '$', e: "400 $ ÷ 30 parts = 13,33 $, alors que la moyenne des prix est 15 $." },
    { lvl: 2, t: 'qcm', q: "Selon les études de Vanguard, investir une somme d'un coup a historiquement battu l'étalement…", o: ["Jamais", "Environ 2 fois sur 3", "Toujours", "1 fois sur 10"], a: 1, e: "Comme les marchés montent plus souvent qu'ils ne baissent, investir tôt gagne environ 2 fois sur 3." },
    { lvl: 2, t: 'num', q: "Une action vaut 60 $ et l'entreprise gagne 4 $ par action. Quel est son ratio C/B (P/E) ?", a: 15, tol: 0.01, u: '', e: "60 ÷ 4 = 15." },
    { lvl: 2, t: 'qcm', q: "Le VIX grimpe à 45. Qu'est-ce que ça indique ?", o: ["Euphorie", "Forte peur et volatilité", "Marché calme", "Hausse des dividendes"], a: 1, e: "Un VIX élevé = forte peur. Historiquement, souvent un moment difficile mais propice pour l'investisseur long terme." },
    { lvl: 3, t: 'num', q: "Approche de Bogle : rendement en dividende 1,5 %, croissance des bénéfices 5 %, valorisation qui se contracte de 1 % par an. Rendement espéré (en %) ?", a: 5.5, tol: 0.05, u: '%', e: "1,5 + 5 − 1 = 5,5 % par an." },
    { lvl: 3, t: 'num', q: "Le C/B du marché est de 25 et les obligations à 10 ans rapportent 4 %. Quelle est la prime de risque (rendement des bénéfices − taux obligataire, en %) ?", a: 0, tol: 0.05, u: '%', e: "Rendement des bénéfices = 1/25 = 4 %. 4 − 4 = 0 %. Les actions n'offrent alors aucune prime par rapport aux obligations : signe de marché cher." },
    { lvl: 3, t: 'qcm', q: "En récession, quels secteurs ont historiquement le mieux résisté ?", o: ["Consommation discrétionnaire et technologie", "Consommation de base et services publics", "Luxe et voyage", "Petites capitalisations"], a: 1, e: "Les gens continuent d'acheter de la nourriture, des médicaments et de payer l'électricité." }
  ]
});

JI.topics.push({
  id: 'fondamentale',
  title: 'Analyser une entreprise',
  short: 'Analyse fondamentale',
  tagline: "Choisir une action, c'est évaluer une entreprise : ce qu'elle gagne, ce qu'elle doit et ce qu'elle vaut.",
  time: 26,
  levels: {
    1: [
      { h: "L'idée de base", html: `
<p>L'<strong>analyse fondamentale</strong> cherche à répondre à une question : <em>cette entreprise vaut-elle plus ou moins que son prix en Bourse ?</em></p>
<p>Benjamin Graham, le mentor de Warren Buffett, disait qu'à court terme le marché est une machine à voter (popularité), mais qu'à long terme c'est une machine à peser (profits réels).</p>
<p>Questions de base avant d'acheter une action :</p>
<ul>
<li>Est-ce que je comprends comment l'entreprise gagne de l'argent ?</li>
<li>Est-ce qu'elle est rentable, et ses profits augmentent-ils ?</li>
<li>A-t-elle un avantage que les concurrents n'ont pas ?</li>
<li>Est-elle trop endettée ?</li>
<li>Le prix est-il raisonnable ?</li>
</ul>` },
      { h: "L'avantage concurrentiel (le « fossé »)", html: `
<p>Buffett parle de <strong>douve</strong> (<em>moat</em>) : ce qui protège une entreprise contre la concurrence, comme les douves d'un château.</p>
<ul>
<li><strong>Marque forte</strong> : on paie plus cher pour Coca-Cola ou Hermès.</li>
<li><strong>Effet de réseau</strong> : plus il y a d'utilisateurs, plus le service est utile (Visa, réseaux sociaux).</li>
<li><strong>Coûts de changement</strong> : changer de logiciel d'entreprise coûte cher.</li>
<li><strong>Avantage de coût</strong> : produire moins cher que tout le monde.</li>
<li><strong>Brevets, licences, réglementation</strong>.</li>
</ul>` }
    ],
    2: [
      { h: 'Les trois états financiers', html: `
<div class="tbl-wrap"><table class="tbl">
<thead><tr><th>État</th><th>Il répond à…</th><th>Lignes clés</th></tr></thead>
<tbody>
<tr><td><strong>État des résultats</strong></td><td>L'entreprise fait-elle des profits ?</td><td>Chiffre d'affaires, marge brute, résultat d'exploitation, bénéfice net, BPA</td></tr>
<tr><td><strong>Bilan</strong></td><td>Que possède-t-elle et que doit-elle ?</td><td>Actifs, dettes, capitaux propres, liquidités</td></tr>
<tr><td><strong>Flux de trésorerie</strong></td><td>Génère-t-elle du vrai cash ?</td><td>Flux d'exploitation, dépenses d'investissement, flux de trésorerie disponible</td></tr>
</tbody></table></div>
<p>Où les trouver ? Gratuitement sur <strong>SEDAR+</strong> (Canada), le site de l'<strong>AMF</strong> et des émetteurs (France), <strong>EDGAR</strong> de la SEC (États-Unis), et dans la section « Investisseurs » du site de chaque entreprise.</p>` },
      { h: 'Les ratios essentiels', html: `
<div class="tbl-wrap"><table class="tbl">
<thead><tr><th>Ratio</th><th>Formule</th><th>Lecture</th></tr></thead>
<tbody>
<tr><td>C/B (P/E)</td><td>Prix ÷ Bénéfice par action</td><td>Combien tu paies pour 1 $ de profit</td></tr>
<tr><td>Cours / Valeur comptable (P/B)</td><td>Prix ÷ Capitaux propres par action</td><td>Utile pour banques et assureurs</td></tr>
<tr><td>Rendement en dividende</td><td>Dividende annuel ÷ Prix</td><td>Revenu reçu</td></tr>
<tr><td>Ratio de distribution</td><td>Dividendes ÷ Bénéfice net</td><td>Au-dessus de 80–100 %, dividende fragile (sauf FPI/services publics)</td></tr>
<tr><td>Marge nette</td><td>Bénéfice net ÷ Chiffre d'affaires</td><td>Rentabilité</td></tr>
<tr><td>ROE (rendement des capitaux propres)</td><td>Bénéfice net ÷ Capitaux propres</td><td>Au-dessus de 15 % : souvent excellent</td></tr>
<tr><td>Dette / Capitaux propres</td><td>Dette totale ÷ Capitaux propres</td><td>Niveau d'endettement</td></tr>
<tr><td>Ratio de liquidité générale</td><td>Actifs courants ÷ Passifs courants</td><td>Au-dessus de 1 : peut payer ses factures à court terme</td></tr>
</tbody></table></div>
<p>Un ratio seul ne dit rien : compare toujours avec les <strong>concurrents</strong> du même secteur et avec l'<strong>historique</strong> de l'entreprise.</p>` },
      { h: 'Le ratio PEG et la croissance', html: `
<p>Un C/B de 30 peut être cher… ou pas, si les bénéfices croissent de 30 % par an. Le <strong>PEG</strong>, popularisé par Peter Lynch, ajuste le C/B à la croissance :</p>
<div class="formula">PEG = C/B ÷ Croissance annuelle attendue des bénéfices (%)</div>
<p>Autour de 1 : prix raisonnable pour la croissance. Nettement au-dessus de 2 : on paie cher. Attention, la croissance « attendue » est une prévision, souvent trop optimiste.</p>` }
    ],
    3: [
      { h: 'Flux de trésorerie actualisés (DCF)', html: `
<p>La méthode reine des analystes : la valeur d'une entreprise = la somme de tous ses flux de trésorerie disponibles futurs, ramenés en dollars d'aujourd'hui.</p>
<div class="formula">Valeur = Σ FTD<sub>t</sub> ÷ (1 + CMPC)<sup>t</sup> + Valeur terminale ÷ (1 + CMPC)<sup>n</sup></div>
<div class="formula">Valeur terminale (Gordon) = FTD<sub>n+1</sub> ÷ (CMPC − g)</div>
<p>CMPC = coût moyen pondéré du capital ; g = croissance perpétuelle (souvent 2 à 3 %, proche de l'inflation et de la croissance du PIB).</p>
<div class="c warn"><b>Attention</b>Le DCF est très sensible aux hypothèses : changer le taux d'actualisation de 1 point peut modifier la valeur de 20 à 30 %. Les pros testent plusieurs scénarios et exigent une <strong>marge de sécurité</strong> (concept de Graham) : acheter nettement sous la valeur estimée.</div>` },
      { h: 'Qualité des bénéfices et signaux d’alerte', html: `
<ul>
<li>Bénéfice net en hausse mais <strong>flux de trésorerie d'exploitation</strong> en baisse : les profits sont peut-être comptables, pas réels.</li>
<li>Comptes clients qui augmentent beaucoup plus vite que les ventes.</li>
<li>Beaucoup d'éléments « non récurrents » chaque année, ou des mesures « ajustées » très éloignées des normes IFRS/GAAP.</li>
<li>Dilution : nombre d'actions qui augmente fortement (rémunération en actions massive).</li>
<li>Changement fréquent d'auditeur ou de directeur financier.</li>
</ul>
<p>Les affaires Enron (2001), Nortel (2004) et Wirecard (2020) montrent que des états financiers peuvent mentir. Lire les notes et le rapport de gestion est indispensable.</p>` },
      { h: 'Valeur d’entreprise et VE/BAIIA', html: `
<p>Le C/B ignore la dette. Les pros utilisent la <strong>valeur d'entreprise</strong> (VE) :</p>
<div class="formula">VE = Capitalisation boursière + Dette nette (dette − liquidités)</div>
<p>Le ratio <strong>VE/BAIIA</strong> (EV/EBITDA) compare des entreprises avec des niveaux d'endettement différents. Le <strong>ROIC</strong> (rendement du capital investi) comparé au CMPC indique si l'entreprise crée vraiment de la valeur : ROIC &gt; CMPC = création de valeur.</p>` }
    ]
  },
  sources: [
    { label: 'Benjamin Graham, L’investisseur intelligent (1949, éd. révisées)', url: 'https://en.wikipedia.org/wiki/The_Intelligent_Investor' },
    { label: 'SEDAR+ — Documents des émetteurs canadiens', url: 'https://www.sedarplus.ca/' },
    { label: 'SEC EDGAR — Documents des sociétés américaines', url: 'https://www.sec.gov/edgar/search/' },
    { label: 'Investor.gov — Beginners’ Guide to Financial Statements', url: 'https://www.sec.gov/about/reports-publications/beginners-guide-financial-statements' },
    { label: 'Aswath Damodaran (NYU Stern) — Données et cours d’évaluation', url: 'https://pages.stern.nyu.edu/~adamodar/' },
    { label: 'CFA Institute — Equity valuation', url: 'https://www.cfainstitute.org/' }
  ],
  exercises: [
    { lvl: 1, t: 'qcm', q: "Que désigne le « fossé » (moat) d'une entreprise ?", o: ["Sa dette", "Son avantage concurrentiel durable", "Son siège social", "Son nombre d'employés"], a: 1, e: "Le fossé protège l'entreprise de la concurrence : marque, réseau, coûts de changement…" },
    { lvl: 1, t: 'qcm', q: "Selon Graham, à long terme le marché est une machine à…", o: ["Voter", "Peser", "Imprimer", "Deviner"], a: 1, e: "À long terme, ce sont les profits réels qui comptent." },
    { lvl: 2, t: 'num', q: "Bénéfice net 50 M$, chiffre d'affaires 400 M$. Marge nette (en %) ?", a: 12.5, tol: 0.05, u: '%', e: "50 ÷ 400 = 12,5 %." },
    { lvl: 2, t: 'num', q: "Action à 40 $, dividende annuel de 1,60 $. Rendement en dividende (en %) ?", a: 4, tol: 0.05, u: '%', e: "1,60 ÷ 40 = 4 %." },
    { lvl: 2, t: 'num', q: "Bénéfice net 30 M$, capitaux propres 150 M$. ROE (en %) ?", a: 20, tol: 0.05, u: '%', e: "30 ÷ 150 = 20 %." },
    { lvl: 2, t: 'num', q: "C/B de 24 et croissance attendue des bénéfices de 12 %. PEG ?", a: 2, tol: 0.01, u: '', e: "24 ÷ 12 = 2 : prix assez élevé pour la croissance." },
    { lvl: 3, t: 'num', q: "Capitalisation 800 M$, dette 300 M$, liquidités 100 M$. Valeur d'entreprise (en M$) ?", a: 1000, tol: 1, u: 'M$', e: "800 + 300 − 100 = 1 000 M$." },
    { lvl: 3, t: 'num', q: "Flux de trésorerie disponible l'an prochain : 10 M$. CMPC 8 %, croissance perpétuelle 3 %. Valeur selon Gordon (en M$) ?", a: 200, tol: 0.5, u: 'M$', e: "10 ÷ (0,08 − 0,03) = 10 ÷ 0,05 = 200 M$." },
    { lvl: 3, t: 'qcm', q: "Signal d'alerte le plus préoccupant ?", o: ["Bénéfice en hausse ET flux de trésorerie en hausse", "Bénéfice en hausse MAIS flux de trésorerie d'exploitation en baisse plusieurs années", "Dividende stable", "Faible dette"], a: 1, e: "Des profits qui ne se transforment pas en cash peuvent signaler une comptabilité agressive." }
  ]
});

JI.topics.push({
  id: 'technique',
  title: 'Analyse technique',
  short: 'Lire un graphique boursier',
  tagline: "Comprendre les graphiques que tout le monde partage, et savoir pourquoi il faut s'en méfier.",
  time: 16,
  levels: {
    1: [
      { h: "C'est quoi l'analyse technique ?", html: `
<p>L'<strong>analyse technique</strong> étudie les graphiques de prix et de volume pour tenter de repérer des tendances. Elle ne regarde pas l'entreprise elle-même, seulement le comportement du prix.</p>
<p>Elle est surtout utilisée par les <em>traders</em> (horizon de quelques minutes à quelques semaines). Les études académiques sur son efficacité pour les particuliers après frais sont globalement <strong>peu concluantes</strong>.</p>
<div class="c warn"><b>Attention</b>L'Autorité des marchés financiers (France) a publié plusieurs études montrant que la grande majorité des particuliers qui font du trading à haute fréquence de CFD ou sur le Forex perdent de l'argent (environ 9 sur 10 selon ses études de 2014 et des années suivantes). L'analyse technique ne change pas ces statistiques.</div>` },
      { h: 'Lire un graphique en chandeliers', html: `
<p>Chaque « chandelier » représente une période (un jour, par exemple) :</p>
<ul>
<li>Le <strong>corps</strong> va du prix d'ouverture au prix de clôture. Vert (ou blanc) si la clôture est plus haute, rouge (ou noir) si elle est plus basse.</li>
<li>Les <strong>mèches</strong> montrent le plus haut et le plus bas de la période.</li>
</ul>
<p>Le <strong>volume</strong>, sous le graphique, indique combien d'actions ont été échangées. Un mouvement accompagné d'un gros volume est considéré comme plus significatif.</p>` }
    ],
    2: [
      { h: 'Tendances, supports et résistances', html: `
<ul>
<li><strong>Tendance haussière</strong> : une suite de sommets et de creux de plus en plus hauts.</li>
<li><strong>Support</strong> : niveau où le prix a tendance à arrêter de baisser (beaucoup d'acheteurs).</li>
<li><strong>Résistance</strong> : niveau où le prix a tendance à arrêter de monter (beaucoup de vendeurs).</li>
</ul>
<p>Ces niveaux fonctionnent en partie parce que beaucoup de gens les regardent (prophétie autoréalisatrice).</p>` },
      { h: 'Les moyennes mobiles', html: `
<p>La <strong>moyenne mobile sur 200 jours</strong> est l'indicateur le plus suivi : la moyenne des 200 derniers prix de clôture. Un prix au-dessus est considéré comme en tendance haussière de long terme.</p>
<ul>
<li><strong>Croisement doré</strong> : la moyenne 50 jours passe au-dessus de la 200 jours (signal haussier).</li>
<li><strong>Croisement de la mort</strong> : la 50 jours passe sous la 200 jours (signal baissier).</li>
</ul>
<p>Certaines recherches (par exemple Meb Faber, « A Quantitative Approach to Tactical Asset Allocation », 2007) suggèrent que des règles simples de suivi de tendance ont réduit les pertes maximales historiques, mais souvent au prix d'un rendement similaire ou inférieur et de nombreux faux signaux.</p>` }
    ],
    3: [
      { h: 'RSI, MACD et momentum', html: `
<ul>
<li><strong>RSI</strong> (indice de force relative, 0 à 100) : au-dessus de 70, « suracheté » ; sous 30, « survendu ». Dans une forte tendance, il peut rester extrême longtemps.</li>
<li><strong>MACD</strong> : différence entre deux moyennes mobiles exponentielles (12 et 26 jours) comparée à sa propre moyenne sur 9 jours.</li>
<li><strong>Momentum</strong> : la recherche académique (Jegadeesh &amp; Titman, 1993) a documenté que les actions qui ont le mieux performé sur 3 à 12 mois tendent à continuer à court terme. C'est l'un des rares effets « techniques » validés académiquement, aujourd'hui exploité par des FNB factoriels.</li>
</ul>` },
      { h: 'Biais et tests rigoureux', html: `
<p>Le piège principal : le <strong>surajustement</strong> (<em>overfitting</em>). En testant des centaines de règles sur des données passées, certaines semblent miraculeuses par pur hasard. Un pro :</p>
<ul>
<li>teste hors échantillon (sur des données non utilisées pour créer la règle) ;</li>
<li>inclut tous les frais, écarts acheteur-vendeur et impôts ;</li>
<li>se méfie du biais du survivant (actions disparues absentes des données) ;</li>
<li>vérifie que la règle a une explication économique plausible.</li>
</ul>` }
    ]
  },
  sources: [
    { label: 'AMF France — Études sur les pertes des particuliers (CFD, Forex)', url: 'https://www.amf-france.org/fr/actualites-publications/publications/rapports-etudes-et-analyses' },
    { label: 'Investor.gov — Day Trading: Your Dollars at Risk', url: 'https://www.investor.gov/introduction-investing/general-resources/news-alerts/alerts-bulletins/investor-bulletins/day-trading-your' },
    { label: 'Jegadeesh & Titman (1993), « Returns to Buying Winners and Selling Losers », Journal of Finance', url: 'https://doi.org/10.1111/j.1540-6261.1993.tb04702.x' },
    { label: 'Faber, M. (2007), « A Quantitative Approach to Tactical Asset Allocation »', url: 'https://papers.ssrn.com/sol3/papers.cfm?abstract_id=962461' },
    { label: 'Barber & Odean — études sur le trading des particuliers', url: 'https://faculty.haas.berkeley.edu/odean/' }
  ],
  exercises: [
    { lvl: 1, t: 'qcm', q: "Dans un chandelier vert, le prix de clôture est…", o: ["Plus bas que l'ouverture", "Plus haut que l'ouverture", "Égal au plus bas", "Inconnu"], a: 1, e: "Vert = la période a fini plus haut qu'elle n'a commencé." },
    { lvl: 1, t: 'qcm', q: "Selon les études de l'AMF, la majorité des particuliers qui spéculent sur les CFD…", o: ["Gagnent de l'argent", "Perdent de l'argent", "Font exactement 0", "Deviennent riches"], a: 1, e: "Environ 9 particuliers sur 10 perdent de l'argent sur ces produits selon l'AMF." },
    { lvl: 2, t: 'num', q: "Prix de clôture sur 5 jours : 10, 12, 11, 13, 14. Moyenne mobile sur 5 jours ?", a: 12, tol: 0.01, u: '$', e: "(10 + 12 + 11 + 13 + 14) ÷ 5 = 60 ÷ 5 = 12." },
    { lvl: 2, t: 'qcm', q: "Un « croisement doré », c'est…", o: ["La moyenne 50 jours passe sous la 200 jours", "La moyenne 50 jours passe au-dessus de la 200 jours", "Le prix touche un sommet", "Le RSI dépasse 70"], a: 1, e: "C'est un signal technique considéré comme haussier." },
    { lvl: 3, t: 'qcm', q: "Un RSI de 82 indique, selon l'interprétation classique…", o: ["Survendu", "Suracheté", "Neutre", "Faillite"], a: 1, e: "Au-dessus de 70 = zone de surachat (ce qui ne garantit pas une baisse)." },
    { lvl: 3, t: 'qcm', q: "Qu'est-ce que le surajustement (overfitting) ?", o: ["Acheter trop d'actions", "Une règle trop calquée sur les données passées qui échoue sur de nouvelles données", "Un indicateur de volume", "Une taxe"], a: 1, e: "Une stratégie optimisée sur le passé capture souvent du bruit plutôt qu'un vrai effet." }
  ]
});

JI.topics.push({
  id: 'immobilier',
  title: 'Immobilier',
  short: 'Acheter, louer, investir',
  tagline: "La pierre a enrichi des générations, mais ce n'est pas automatique : c'est une entreprise avec des chiffres.",
  time: 24,
  levels: {
    1: [
      { h: 'Louer ou acheter ?', html: `
<p>Acheter n'est pas toujours mieux que louer. Le loyer paie un logement ; la propriété coûte aussi beaucoup plus que l'hypothèque :</p>
<ul>
<li>Intérêts hypothécaires</li>
<li>Taxes foncières et scolaires (Canada), taxe foncière (France)</li>
<li>Assurance habitation</li>
<li>Entretien et réparations (règle courante : <strong>1 à 2 % de la valeur de la maison par an</strong>)</li>
<li>Frais de condo / charges de copropriété</li>
<li>Frais d'achat : taxe de bienvenue (droits de mutation) au Québec, frais de notaire en France (environ 7 à 8 % dans l'ancien)</li>
</ul>
<p>Un locataire qui investit régulièrement la différence peut s'enrichir autant qu'un propriétaire. L'important est de comparer le <strong>coût total</strong> et d'investir ce qui est économisé.</p>` },
      { h: 'La mise de fonds et l’hypothèque', html: `
<p>La <strong>mise de fonds</strong> (apport) est la partie du prix que tu paies avec ton propre argent. Le reste est financé par un prêt hypothécaire (prêt immobilier).</p>
<ul>
<li><strong>Canada</strong> : minimum 5 % sur la première tranche de 500 000 $, et 10 % sur la portion suivante (jusqu'au plafond prévu par les règles fédérales). Sous 20 %, l'assurance prêt hypothécaire (SCHL ou autre) est obligatoire.</li>
<li><strong>France</strong> : les banques demandent généralement un apport d'au moins 10 % (pour couvrir notamment les frais de notaire) ; le taux d'endettement est plafonné à 35 % des revenus par les recommandations du Haut Conseil de stabilité financière.</li>
</ul>
<div class="c tip"><b>Astuce</b>Au Canada, le CELIAPP permet d'épargner pour une première maison avec déduction fiscale à la cotisation et retrait non imposable (voir <a href="#sujet-fiscalite">Comptes et fiscalité</a>).</div>` },
      { h: "Combien puis-je me permettre ?", html: `
<p>Au Canada, les prêteurs utilisent deux ratios (selon l'ACFC) :</p>
<ul>
<li><strong>ABD</strong> (amortissement brut de la dette) : frais de logement ≤ environ <strong>39 %</strong> du revenu brut.</li>
<li><strong>ATD</strong> (amortissement total de la dette) : logement + autres dettes ≤ environ <strong>44 %</strong>.</li>
</ul>
<p>Tu dois aussi réussir le <strong>test de résistance</strong> : être capable de payer à un taux plus élevé que ton taux réel. Ce n'est pas parce que la banque te prête un montant que tu dois l'emprunter au complet.</p>` }
    ],
    2: [
      { h: "L'immobilier locatif : les chiffres", html: `
<div class="formula">Rendement brut = Loyers annuels ÷ Prix d'achat</div>
<div class="formula">Revenu net d'exploitation (RNE) = Loyers − Vacance − Dépenses (taxes, assurances, entretien, gestion)</div>
<div class="formula">Taux de capitalisation (cap rate) = RNE ÷ Prix d'achat</div>
<div class="formula">Cash-flow = RNE − Paiements hypothécaires</div>
<div class="c ex"><b>Exemple</b>Duplex à 500 000 $, loyers de 36 000 $/an. Vacance 3 % (1 080 $), dépenses 10 000 $. RNE = 24 920 $. Taux de cap = 4,98 %. Si l'hypothèque coûte 26 000 $/an, le cash-flow est <strong>négatif</strong> (−1 080 $) : tu paies chaque mois pour garder l'immeuble.</div>` },
      { h: 'Les FPI / SCPI : l’immobilier sans être propriétaire', html: `
<p>Les <strong>FPI</strong> (fiducies de placement immobilier, Canada) ou <strong>REIT</strong> (États-Unis), et les <strong>SIIC</strong> ou <strong>SCPI</strong> (France) permettent d'investir dans des centaines d'immeubles (bureaux, entrepôts, centres commerciaux, résidences) avec un petit montant.</p>
<ul>
<li>Avantages : diversification, aucune gestion de locataires, liquidité (pour les FPI cotées).</li>
<li>Inconvénients : sensibles aux taux d'intérêt ; les SCPI ont des frais d'entrée élevés (souvent 8 à 12 %) et peuvent être difficiles à revendre (plusieurs ont baissé leur prix de part en 2023-2024).</li>
</ul>` },
      { h: 'Fixe ou variable ?', html: `
<p><strong>Taux fixe</strong> : paiements stables, protection contre les hausses. <strong>Taux variable</strong> : suit le taux préférentiel/directeur, souvent plus bas au départ, mais risqué si les taux montent (comme en 2022-2023).</p>
<p>Au Canada, le terme (souvent 5 ans) est différent de l'amortissement (25 ou 30 ans) : à chaque renouvellement, le taux est renégocié. En France, les prêts sont majoritairement à taux fixe sur toute la durée.</p>` }
    ],
    3: [
      { h: 'Le levier immobilier et le rendement sur mise de fonds', html: `
<p>Le vrai moteur de l'immobilier, c'est le <strong>levier</strong> : tu contrôles un actif de 500 000 $ avec 100 000 $.</p>
<div class="formula">Rendement sur mise de fonds = (Cash-flow + Remboursement de capital + Plus-value) ÷ Mise de fonds</div>
<div class="c ex"><b>Exemple</b>Mise de fonds 100 000 $. Cash-flow 2 000 $, capital remboursé 9 000 $, plus-value de 3 % (15 000 $). Total = 26 000 $ → <strong>26 %</strong> sur ta mise. Si l'immeuble baisse de 10 % (−50 000 $) : −39 % sur ta mise.</div>` },
      { h: 'Stratégies avancées', html: `
<ul>
<li><strong>BRRRR</strong> (acheter, rénover, louer, refinancer, répéter) : on récupère sa mise de fonds en refinançant après avoir augmenté la valeur. Puissant mais risqué si les taux ou les évaluations changent.</li>
<li><strong>Effet de la fiscalité</strong> : au Canada, l'amortissement (DPA) réduit l'impôt sur les loyers mais est récupéré à la vente ; en France, régimes micro-foncier, réel, LMNP. À valider avec un fiscaliste.</li>
<li><strong>Ratio de couverture de la dette (DSCR)</strong> = RNE ÷ Service de la dette. Les prêteurs commerciaux exigent souvent au moins 1,2.</li>
</ul>` }
    ]
  },
  sources: [
    { label: 'ACFC — Acheter une maison (mise de fonds, ABD/ATD)', url: 'https://www.canada.ca/fr/agence-consommation-matiere-financiere/services/hypotheques.html' },
    { label: 'Société canadienne d’hypothèques et de logement (SCHL)', url: 'https://www.cmhc-schl.gc.ca/fr' },
    { label: 'Haut Conseil de stabilité financière — Norme d’octroi de crédit immobilier', url: 'https://www.economie.gouv.fr/hcsf' },
    { label: 'AMF France — SCPI', url: 'https://www.amf-france.org/fr/espace-epargnants/comprendre-les-produits-financiers/placements-collectifs/scpi' },
    { label: 'Service-public.fr — Frais de notaire', url: 'https://www.service-public.fr/particuliers/vosdroits/F17701' },
    { label: 'Autorité des marchés financiers (Québec) — Immobilier', url: 'https://lautorite.qc.ca/grand-public' }
  ],
  exercises: [
    { lvl: 1, t: 'num', q: "Maison de 400 000 $. Avec la règle de 1 % d'entretien par an, combien prévoir ?", a: 4000, tol: 1, u: '$', e: "1 % × 400 000 = 4 000 $ par an." },
    { lvl: 1, t: 'num', q: "Maison de 400 000 $ au Canada. Mise de fonds minimale (5 % jusqu'à 500 000 $) ?", a: 20000, tol: 1, u: '$', e: "5 % × 400 000 = 20 000 $ (avec assurance prêt obligatoire)." },
    { lvl: 1, t: 'qcm', q: "Être propriétaire coûte…", o: ["Seulement l'hypothèque", "Hypothèque + taxes + assurances + entretien + frais d'achat", "Rien de plus qu'un loyer", "Uniquement les taxes"], a: 1, e: "Il faut toujours comparer le coût total." },
    { lvl: 2, t: 'num', q: "Immeuble à 300 000 $, loyers 24 000 $/an. Rendement brut (en %) ?", a: 8, tol: 0.05, u: '%', e: "24 000 ÷ 300 000 = 8 %." },
    { lvl: 2, t: 'num', q: "RNE de 18 000 $, prix 360 000 $. Taux de capitalisation (en %) ?", a: 5, tol: 0.05, u: '%', e: "18 000 ÷ 360 000 = 5 %." },
    { lvl: 2, t: 'num', q: "RNE 18 000 $, paiements hypothécaires 20 400 $/an. Cash-flow annuel ?", a: -2400, tol: 1, u: '$', e: "18 000 − 20 400 = −2 400 $ : cash-flow négatif." },
    { lvl: 3, t: 'num', q: "Mise de fonds 80 000 $. Cash-flow 1 000 $, capital remboursé 7 000 $, plus-value 12 000 $. Rendement sur mise de fonds (en %) ?", a: 25, tol: 0.05, u: '%', e: "(1 000 + 7 000 + 12 000) ÷ 80 000 = 25 %." },
    { lvl: 3, t: 'num', q: "RNE 30 000 $, service de la dette 24 000 $. DSCR ?", a: 1.25, tol: 0.01, u: '', e: "30 000 ÷ 24 000 = 1,25." }
  ]
});
