/* J'investis — contenu des sujets 13 à 18 */
window.JI = window.JI || { topics: [] };

JI.topics.push({
  id: 'fiscalite',
  title: 'Comptes et fiscalité',
  short: 'CELI, REER, PEA, assurance-vie…',
  tagline: "Le même placement peut rapporter beaucoup plus selon le compte dans lequel il est placé. L'impôt est souvent ta plus grosse dépense.",
  time: 26,
  levels: {
    1: [
      { h: "Pourquoi le type de compte est si important", html: `
<p>Les gouvernements offrent des comptes avec des <strong>avantages fiscaux</strong> pour encourager l'épargne. Dans ces comptes, tes gains ne sont pas imposés (ou le sont plus tard, ou moins). Sur 30 ans, ça peut représenter des dizaines de milliers de dollars.</p>
<div class="c key"><b>À retenir</b>Avant de te demander <em>quoi</em> acheter, demande-toi <em>dans quel compte</em> l'acheter.</div>
<p class="small">Les plafonds et taux ci-dessous changent régulièrement. Vérifie toujours les montants de l'année en cours sur les sites officiels (Agence du revenu du Canada, Revenu Québec, impots.gouv.fr, service-public.fr).</p>` },
      { h: '🇨🇦 Canada : le CELI', html: `
<p>Le <strong>compte d'épargne libre d'impôt</strong> (CELI) : tu cotises avec de l'argent déjà imposé, mais <strong>tous les gains et les retraits sont libres d'impôt</strong>, pour toujours.</p>
<ul>
<li>Ouvert à toute personne résidente de 18 ans et plus avec un NAS.</li>
<li>Droits de cotisation annuels (7 000 $ en 2024, 2025 et 2026), cumulés depuis 2009 ou depuis tes 18 ans si tu es plus jeune.</li>
<li>Ce que tu retires est ajouté à tes droits <strong>l'année suivante</strong>.</li>
<li>Un CELI peut contenir de l'épargne, des CPG, des actions, des FNB… Ce n'est pas qu'un compte épargne !</li>
</ul>
<div class="c warn"><b>Attention</b>Cotiser au-delà de tes droits entraîne une pénalité de 1 % par mois sur l'excédent. Consulte tes droits dans <strong>Mon dossier</strong> de l'ARC.</div>` },
      { h: '🇨🇦 Canada : le REER et le CELIAPP', html: `
<p><strong>REER</strong> (régime enregistré d'épargne-retraite) : tes cotisations sont <strong>déduites de ton revenu imposable</strong> (remboursement d'impôt), les gains croissent à l'abri, mais les retraits sont imposés comme un revenu.</p>
<ul>
<li>Droits : 18 % du revenu gagné de l'année précédente, jusqu'à un plafond annuel, moins les facteurs d'équivalence de ton régime de retraite d'employeur.</li>
<li>Régime d'accession à la propriété (RAP) : retrait jusqu'à 60 000 $ pour une première maison, à rembourser sur 15 ans.</li>
<li>Doit être converti (FERR ou rente) au plus tard à la fin de l'année de tes 71 ans.</li>
</ul>
<p><strong>CELIAPP</strong> (compte d'épargne libre d'impôt pour l'achat d'une première propriété) : le meilleur des deux mondes. Cotisation <strong>déductible</strong> ET retrait <strong>non imposable</strong> pour acheter ta première maison. 8 000 $ par an, 40 000 $ à vie.</p>
<p><strong>REEE</strong> (pour les études d'un enfant) : le gouvernement fédéral ajoute 20 % (SCEE) sur les premiers 2 500 $ cotisés par an, soit 500 $ par an ; le Québec ajoute 10 % (IQEE).</p>` },
      { h: '🇫🇷 France : PEA, assurance-vie, PER', html: `
<ul>
<li><strong>PEA</strong> (plan d'épargne en actions) : actions européennes et ETF éligibles. Versements plafonnés à 150 000 €. Après <strong>5 ans</strong>, les gains sont exonérés d'impôt sur le revenu (les prélèvements sociaux restent dus).</li>
<li><strong>Assurance-vie</strong> : fonds en euros (capital garanti par l'assureur) et unités de compte (ETF, fonds, risque de perte). Après <strong>8 ans</strong>, abattement annuel sur les gains retirés de 4 600 € (9 200 € pour un couple). Avantages pour la transmission.</li>
<li><strong>PER</strong> (plan d'épargne retraite) : versements déductibles du revenu imposable (dans des limites), argent bloqué jusqu'à la retraite sauf cas prévus (dont l'achat de la résidence principale).</li>
<li><strong>Compte-titres ordinaire</strong> (CTO) : aucune limite, aucun avantage ; gains soumis au prélèvement forfaitaire unique (« flat tax », d'environ 30 %, taux à vérifier) ou au barème sur option.</li>
</ul>` }
    ],
    2: [
      { h: 'CELI ou REER ? (Canada)', html: `
<p>La règle simple : compare ton taux d'imposition <strong>aujourd'hui</strong> et celui que tu auras <strong>au retrait</strong>.</p>
<div class="tbl-wrap"><table class="tbl">
<thead><tr><th>Ta situation</th><th>Priorité générale</th></tr></thead>
<tbody>
<tr><td>Revenu faible ou études (taux marginal bas)</td><td>CELI</td></tr>
<tr><td>Revenu élevé maintenant, plus bas à la retraite</td><td>REER</td></tr>
<tr><td>Premier achat de maison prévu</td><td>CELIAPP d'abord</td></tr>
<tr><td>Employeur qui verse une contribution équivalente</td><td>Régime collectif jusqu'au maximum de la contribution de l'employeur</td></tr>
<tr><td>Besoin de flexibilité (projets avant la retraite)</td><td>CELI</td></tr>
</tbody></table></div>
<p>À taux d'imposition égal, CELI et REER donnent exactement le même résultat, <strong>à condition de réinvestir le remboursement d'impôt du REER</strong>. Les retraits de REER peuvent aussi réduire certaines prestations à la retraite (Supplément de revenu garanti), ce qui avantage le CELI pour les revenus modestes.</p>` },
      { h: 'Comment sont imposés les revenus de placement (hors comptes enregistrés)', html: `
<div class="tbl-wrap"><table class="tbl">
<thead><tr><th>Revenu</th><th>Canada</th><th>France (CTO)</th></tr></thead>
<tbody>
<tr><td>Intérêts</td><td>Imposés à 100 % au taux marginal</td><td>PFU ou barème</td></tr>
<tr><td>Dividendes</td><td>Crédit d'impôt pour dividendes (sociétés canadiennes)</td><td>PFU, ou barème avec abattement de 40 %</td></tr>
<tr><td>Gains en capital</td><td>50 % du gain est imposable</td><td>PFU ou barème</td></tr>
</tbody></table></div>
<p>Au Canada, une hausse du taux d'inclusion des gains en capital avait été annoncée en 2024 puis annulée en 2025 : le taux d'inclusion reste de 50 %. Ces règles évoluent ; vérifie auprès de l'ARC et de Revenu Québec.</p>` },
      { h: "L'ordre de priorité classique", html: `
<ol>
<li>Fonds d'urgence</li>
<li>Contribution de l'employeur (régime collectif) : argent gratuit</li>
<li>Rembourser les dettes chères</li>
<li>CELIAPP (si projet de première maison) / PEA</li>
<li>CELI et/ou REER selon le taux d'imposition / assurance-vie, PER</li>
<li>Compte non enregistré / compte-titres</li>
</ol>` }
    ],
    3: [
      { h: "Localisation d'actifs", html: `
<p>Les pros ne se demandent pas seulement <em>combien</em> mettre en actions et en obligations, mais <em>où</em> placer chacune pour minimiser l'impôt total (<strong>asset location</strong>).</p>
<ul>
<li>Placements générant beaucoup de revenus imposés à plein taux (obligations, intérêts) → plutôt dans le REER / l'assurance-vie.</li>
<li>Placements au plus fort potentiel de croissance → plutôt dans le CELI ou le PEA (croissance totalement libre d'impôt).</li>
<li>Actions américaines : au Canada, le traité fiscal Canada–États-Unis exonère de la retenue de 15 % les dividendes américains dans un REER, mais pas dans un CELI.</li>
<li>Actions canadiennes à dividendes → compte non enregistré (crédit d'impôt pour dividendes).</li>
</ul>` },
      { h: 'Vente à perte fiscale et règles anti-évitement', html: `
<p>Dans un compte non enregistré, vendre un placement à perte permet de réduire l'impôt sur d'autres gains (<strong>tax-loss harvesting</strong>). Au Canada, attention à la règle de la <strong>perte apparente</strong> : si toi (ou ton conjoint, ou une société que tu contrôles) rachètes un bien identique dans les 30 jours avant ou après la vente, la perte est refusée. Les investisseurs passent souvent à un FNB similaire mais suivant un indice différent.</p>
<p>En France, les moins-values sur valeurs mobilières sont imputables sur les plus-values de même nature de l'année et des 10 années suivantes.</p>` },
      { h: 'Décaissement et planification successorale', html: `
<p>À la retraite, l'<strong>ordre de retrait</strong> entre comptes (non enregistré, REER/FERR, CELI) peut faire varier l'impôt à vie de façon importante. Stratégies courantes : « fondre » le REER progressivement dans les années à faible revenu entre la retraite et 71 ans, reporter le RPC/RRQ et la PSV pour obtenir des rentes plus élevées, fractionnement du revenu de pension entre conjoints.</p>
<p>En France : clauses bénéficiaires de l'assurance-vie, abattements de donation renouvelables tous les 15 ans, démembrement de propriété. Ces sujets justifient un planificateur financier (Pl. Fin. au Québec) ou un conseiller en gestion de patrimoine indépendant.</p>` }
    ]
  },
  sources: [
    { label: 'Agence du revenu du Canada — CELI', url: 'https://www.canada.ca/fr/agence-revenu/services/impot/particuliers/sujets/compte-epargne-libre-impot.html' },
    { label: 'Agence du revenu du Canada — REER', url: 'https://www.canada.ca/fr/agence-revenu/services/impot/particuliers/sujets/reer-regimes-connexes.html' },
    { label: 'Agence du revenu du Canada — CELIAPP', url: 'https://www.canada.ca/fr/agence-revenu/services/impot/particuliers/sujets/compte-epargne-libre-impot-achat-premiere-propriete.html' },
    { label: 'Emploi et Développement social Canada — REEE et SCEE', url: 'https://www.canada.ca/fr/services/prestations/education/epargne-etudes.html' },
    { label: 'Revenu Québec — Particuliers', url: 'https://www.revenuquebec.ca/fr/citoyens/' },
    { label: 'Service-public.fr — PEA', url: 'https://www.service-public.fr/particuliers/vosdroits/F2385' },
    { label: 'Service-public.fr — Assurance-vie', url: 'https://www.service-public.fr/particuliers/vosdroits/F22414' },
    { label: 'Service-public.fr — Plan d’épargne retraite (PER)', url: 'https://www.service-public.fr/particuliers/vosdroits/F36526' },
    { label: 'impots.gouv.fr — Revenus de capitaux mobiliers', url: 'https://www.impots.gouv.fr/particulier' }
  ],
  exercises: [
    { lvl: 1, t: 'qcm', q: "Au Canada, dans un CELI, les gains et les retraits sont…", o: ["Imposés à 50 %", "Libres d'impôt", "Imposés au retrait", "Imposés chaque année"], a: 1, e: "C'est le principe du CELI : aucune imposition sur les gains ni les retraits." },
    { lvl: 1, t: 'qcm', q: "Au Canada, une cotisation au REER…", o: ["N'a aucun effet fiscal", "Réduit ton revenu imposable de l'année", "Est imposée deux fois", "Est réservée aux plus de 65 ans"], a: 1, e: "La cotisation est déductible ; les retraits seront imposés plus tard." },
    { lvl: 1, t: 'qcm', q: "En France, après combien d'années les gains d'un PEA sont-ils exonérés d'impôt sur le revenu ?", o: ["1 an", "5 ans", "8 ans", "Jamais"], a: 1, e: "5 ans pour le PEA (8 ans pour les avantages de l'assurance-vie)." },
    { lvl: 1, t: 'num', q: "REEE : tu cotises 2 500 $ dans l'année. Combien la SCEE fédérale (20 %) ajoute-t-elle ?", a: 500, tol: 1, u: '$', e: "20 % × 2 500 = 500 $." },
    { lvl: 2, t: 'num', q: "Ton taux marginal d'imposition est de 37 %. Tu cotises 5 000 $ au REER. Quelle économie d'impôt approximative ?", a: 1850, tol: 1, u: '$', e: "5 000 × 37 % = 1 850 $." },
    { lvl: 2, t: 'num', q: "Canada, compte non enregistré : gain en capital de 10 000 $, taux d'inclusion 50 %, taux marginal 40 %. Impôt à payer ?", a: 2000, tol: 1, u: '$', e: "Montant imposable = 5 000 $. Impôt = 5 000 × 40 % = 2 000 $." },
    { lvl: 2, t: 'qcm', q: "Étudiante avec un petit revenu qui veut épargner : quel compte prioriser généralement ?", o: ["REER", "CELI", "Compte non enregistré", "Aucun"], a: 1, e: "Avec un taux marginal bas, la déduction REER vaut peu ; on peut la garder pour plus tard. Le CELI est flexible et libre d'impôt." },
    { lvl: 3, t: 'qcm', q: "Au Canada, où placer de préférence un FNB d'actions américaines détenant directement des titres US, pour éviter la retenue de 15 % sur dividendes ?", o: ["CELI", "REER", "REEE", "CELIAPP"], a: 1, e: "Le traité fiscal reconnaît le REER comme un régime de retraite ; la retenue ne s'applique pas sur un FNB américain coté aux États-Unis qui y est détenu." },
    { lvl: 3, t: 'qcm', q: "Tu vends un FNB à perte le 10 décembre et tu rachètes exactement le même le 20 décembre. Au Canada, que se passe-t-il ?", o: ["La perte est déductible", "La perte est refusée (perte apparente)", "Tu paies une pénalité de 1 %", "Rien"], a: 1, e: "Rachat d'un bien identique dans les 30 jours = perte apparente, refusée (ajoutée au prix de base du nouveau bien)." }
  ]
});

JI.topics.push({
  id: 'retraite',
  title: 'Retraite et liberté financière',
  short: 'Règle des 4 %, FIRE',
  tagline: "Devenir riche, au fond, c'est avoir assez de placements pour que le travail devienne un choix.",
  time: 22,
  levels: {
    1: [
      { h: "L'objectif : l'indépendance financière", html: `
<p>Tu es <strong>financièrement indépendant</strong> quand tes placements peuvent payer tes dépenses pour le reste de ta vie. Ce n'est pas un salaire précis : c'est un rapport entre ce que tu dépenses et ce que tu possèdes.</p>
<div class="formula">Ton chiffre « liberté » ≈ Dépenses annuelles × 25</div>
<div class="c ex"><b>Exemple</b>Tu dépenses 40 000 $ par an → ton objectif est d'environ 1 000 000 $ investis.</div>
<p>Plus tes dépenses sont basses, plus l'objectif est proche. C'est pourquoi le budget et le taux d'épargne sont si importants.</p>` },
      { h: 'Les régimes publics de retraite', html: `
<ul>
<li><strong>Canada</strong> : Régime de pensions du Canada (RPC) ou Régime de rentes du Québec (RRQ), selon tes cotisations ; Pension de la Sécurité de la vieillesse (PSV) dès 65 ans selon tes années de résidence ; Supplément de revenu garanti (SRG) pour les revenus faibles.</li>
<li><strong>France</strong> : retraite de base (Assurance retraite) + complémentaire (Agirc-Arrco pour les salariés du privé), calculées selon tes trimestres et tes salaires.</li>
</ul>
<p>Ces régimes ne remplacent généralement qu'une partie de ton revenu de travail. L'épargne personnelle comble l'écart. Consulte ton relevé : <strong>Mon dossier Service Canada</strong>, <strong>Mon dossier Retraite Québec</strong>, ou <strong>info-retraite.fr</strong>.</p>` }
    ],
    2: [
      { h: 'La règle des 4 %', html: `
<p>En 1994, le planificateur William Bengen a étudié les données américaines depuis 1926 : un retraité qui retire <strong>4 % de son portefeuille la première année</strong>, puis ajuste ce montant à l'inflation chaque année, n'a jamais épuisé un portefeuille équilibré actions/obligations en 30 ans dans l'historique étudié. L'<strong>étude Trinity</strong> (Cooley, Hubbard et Walz, 1998) est arrivée à des conclusions similaires.</p>
<div class="formula">Retrait annuel la 1re année = Portefeuille × 4 %</div>
<p>D'où le « × 25 » (1 ÷ 0,04 = 25).</p>
<div class="c warn"><b>Attention</b>La règle a été conçue pour 30 ans, avec des données américaines, sans tenir compte des frais. Pour une retraite de 40 à 50 ans, plusieurs chercheurs recommandent 3 à 3,5 %. Être flexible (dépenser un peu moins les mauvaises années) améliore beaucoup les chances de succès.</div>` },
      { h: 'Le mouvement FIRE', html: `
<p><strong>FIRE</strong> = <em>Financial Independence, Retire Early</em>. L'idée : épargner 40 à 70 % de son revenu pour atteindre l'indépendance en 10 à 20 ans.</p>
<div class="tbl-wrap"><table class="tbl">
<thead><tr><th>Taux d'épargne</th><th>Années approximatives jusqu'à l'indépendance*</th></tr></thead>
<tbody>
<tr><td class="num">10 %</td><td class="num">≈ 51 ans</td></tr>
<tr><td class="num">25 %</td><td class="num">≈ 32 ans</td></tr>
<tr><td class="num">50 %</td><td class="num">≈ 17 ans</td></tr>
<tr><td class="num">75 %</td><td class="num">≈ 7 ans</td></tr>
</tbody></table></div>
<p class="small">*En partant de zéro, rendement réel de 5 % par an, règle des 4 %. Calcul popularisé par le blogueur Mr. Money Mustache (« The Shockingly Simple Math Behind Early Retirement », 2012).</p>
<ul>
<li><strong>Lean FIRE</strong> : mode de vie très frugal.</li>
<li><strong>Fat FIRE</strong> : mode de vie confortable, objectif plus élevé.</li>
<li><strong>Coast FIRE</strong> : avoir assez investi pour que, sans rien ajouter, ça atteigne l'objectif à 65 ans.</li>
<li><strong>Barista FIRE</strong> : un petit emploi à temps partiel couvre une partie des dépenses.</li>
</ul>` }
    ],
    3: [
      { h: 'Reporter les rentes publiques', html: `
<p>Au Canada, chaque mois de report du RPC après 65 ans augmente la rente de 0,7 % (jusqu'à +42 % à 70 ans) ; un début avant 65 ans la réduit de 0,6 % par mois (−36 % à 60 ans). Au Québec, le RRQ peut être reporté jusqu'à 72 ans. La PSV augmente de 0,6 % par mois de report jusqu'à 70 ans (+36 %).</p>
<p>Reporter, c'est acheter une <strong>rente indexée à l'inflation et à vie</strong> à un prix avantageux : une protection contre le risque de vivre très vieux (risque de longévité). Les chercheurs (par exemple Bonnie-Jeanne MacDonald, Institut national sur le vieillissement) estiment que la majorité des Canadiens gagneraient à reporter.</p>` },
      { h: 'Stratégies de retrait dynamiques', html: `
<ul>
<li><strong>Garde-fous de Guyton-Klinger</strong> : réduire les retraits de 10 % si le taux de retrait dépasse de 20 % le taux initial, les augmenter dans le cas inverse.</li>
<li><strong>Stratégie des seaux</strong> : seau 1 = 1–2 ans de liquidités, seau 2 = obligations (3–7 ans), seau 3 = actions (long terme).</li>
<li><strong>Taux de retrait variable par pourcentage</strong> : retirer chaque année un % fixe de la valeur courante (le portefeuille ne s'épuise jamais, mais le revenu fluctue).</li>
<li><strong>Rentes viagères</strong> : convertir une partie du capital en revenu garanti à vie pour couvrir les dépenses essentielles.</li>
</ul>` },
      { h: 'Calculer son « Coast FIRE »', html: `
<div class="formula">Montant Coast = Objectif ÷ (1 + rendement réel)<sup>années jusqu'à 65 ans</sup></div>
<div class="c ex"><b>Exemple</b>Objectif 1 000 000 $ (en dollars d'aujourd'hui), 30 ans avant 65 ans, rendement réel de 5 % : 1 000 000 ÷ 1,05<sup>30</sup> ≈ <strong>231 000 $</strong>. Avec ce montant investi aujourd'hui, tu n'as théoriquement plus besoin d'épargner pour la retraite.</div>` }
    ]
  },
  sources: [
    { label: 'Bengen, W. (1994), « Determining Withdrawal Rates Using Historical Data », Journal of Financial Planning', url: 'https://www.financialplanningassociation.org/' },
    { label: 'Cooley, Hubbard & Walz (1998) — Étude Trinity, AAII Journal', url: 'https://www.aaii.com/journal/article/retirement-savings-choosing-a-withdrawal-rate-that-is-sustainable' },
    { label: 'Gouvernement du Canada — RPC et PSV', url: 'https://www.canada.ca/fr/services/prestations/pensionspubliques.html' },
    { label: 'Retraite Québec — Régime de rentes du Québec', url: 'https://www.retraitequebec.gouv.qc.ca/fr/' },
    { label: 'info-retraite.fr — Portail officiel des retraites (France)', url: 'https://www.info-retraite.fr/' },
    { label: 'Institut national sur le vieillissement — Recherche sur le report des rentes', url: 'https://www.niageing.ca/' }
  ],
  exercises: [
    { lvl: 1, t: 'num', q: "Tu dépenses 36 000 $ par an. Quel est ton chiffre « liberté » (× 25) ?", a: 900000, tol: 1, u: '$', e: "36 000 × 25 = 900 000 $." },
    { lvl: 1, t: 'qcm', q: "Être financièrement indépendant signifie…", o: ["Avoir un gros salaire", "Pouvoir couvrir ses dépenses avec ses placements", "Ne plus jamais dépenser", "Être propriétaire"], a: 1, e: "C'est le rapport entre patrimoine investi et dépenses qui compte." },
    { lvl: 2, t: 'num', q: "Portefeuille de 750 000 $. Retrait de la 1re année avec la règle des 4 % ?", a: 30000, tol: 1, u: '$', e: "750 000 × 4 % = 30 000 $." },
    { lvl: 2, t: 'num', q: "Tu veux 50 000 $ par an avec un taux de retrait prudent de 3,5 %. Combien te faut-il (arrondi au millier) ?", a: 1428571, tol: 1500, u: '$', e: "50 000 ÷ 0,035 ≈ 1 428 571 $." },
    { lvl: 2, t: 'qcm', q: "Le « Coast FIRE » signifie…", o: ["Prendre sa retraite à la plage", "Avoir assez investi pour atteindre l'objectif sans nouvelle épargne", "Ne jamais investir", "Travailler sur un bateau"], a: 1, e: "Les intérêts composés font le reste du chemin." },
    { lvl: 3, t: 'num', q: "RPC : rente prévue de 1 000 $/mois à 65 ans. Combien à 70 ans (+0,7 %/mois de report) ?", a: 1420, tol: 1, u: '$', e: "60 mois × 0,7 % = 42 % → 1 420 $/mois (en dollars indexés)." },
    { lvl: 3, t: 'num', q: "Objectif 800 000 $, 20 ans avant la retraite, rendement réel 5 %. Montant Coast (arrondi au dollar) ?", a: 301512, tol: 300, u: '$', e: "800 000 ÷ 1,05²⁰ = 800 000 ÷ 2,6533 ≈ 301 512 $." }
  ]
});

JI.topics.push({
  id: 'crypto',
  title: 'Crypto et actifs alternatifs',
  short: 'Bitcoin, or, matières premières',
  tagline: "Des actifs fascinants, très volatils, qui méritent d'être compris avant d'y mettre un seul dollar.",
  time: 18,
  levels: {
    1: [
      { h: "C'est quoi une cryptomonnaie ?", html: `
<p>Une <strong>cryptomonnaie</strong> est une monnaie numérique qui fonctionne sans banque centrale, grâce à une <strong>chaîne de blocs</strong> (blockchain) : un registre public, copié sur des milliers d'ordinateurs, qui enregistre toutes les transactions.</p>
<ul>
<li><strong>Bitcoin</strong> (2009) : la première ; offre limitée à 21 millions d'unités. Ses partisans la voient comme de l'« or numérique ».</li>
<li><strong>Ether</strong> (Ethereum) : plateforme permettant des programmes (contrats intelligents).</li>
<li><strong>Cryptomonnaies stables</strong> (stablecoins) : censées valoir 1 $ US ; leur solidité dépend des réserves de l'émetteur.</li>
</ul>
<p>Une crypto ne produit ni profits ni dividendes : son prix dépend uniquement de ce que d'autres acceptent de payer.</p>` },
      { h: 'Les risques à connaître', html: `
<ul>
<li><strong>Volatilité extrême</strong> : le bitcoin a perdu plus de 70 % de sa valeur plusieurs fois (2014, 2018, 2022).</li>
<li><strong>Faillites de plateformes</strong> : QuadrigaCX (Canada, 2019), FTX (2022) : les clients ont perdu l'accès à leurs fonds.</li>
<li><strong>Arnaques</strong> : la crypto est le moyen de paiement favori de nombreux fraudeurs (voir <a href="#sujet-arnaques">Arnaques</a>).</li>
<li>Des milliers de « jetons » ont disparu complètement.</li>
</ul>
<div class="c warn"><b>Attention</b>Les autorités financières (AMF Québec, AMF France, ACVM, SEC) avertissent régulièrement : n'investis en crypto que l'argent que tu peux te permettre de perdre en totalité.</div>` }
    ],
    2: [
      { h: 'Comment y investir plus prudemment', html: `
<ul>
<li>Utiliser une <strong>plateforme inscrite</strong> : au Canada, auprès des ACVM (liste publique) ; dans l'Union européenne, agréée PSAN/CASP selon le règlement européen MiCA.</li>
<li>Envisager les <strong>FNB/ETP de bitcoin ou d'ether</strong> cotés en Bourse (le Canada a lancé les premiers FNB bitcoin au comptant en 2021) : achetables dans un compte de courtage, sans gérer de clés.</li>
<li>Limiter la taille : beaucoup de gestionnaires qui l'intègrent la limitent à <strong>1 à 5 %</strong> d'un portefeuille.</li>
<li>Si tu gardes toi-même tes cryptos, protège la <strong>phrase de récupération</strong> : la perdre, c'est tout perdre ; la partager, c'est se faire voler.</li>
</ul>` },
      { h: 'L’or et les matières premières', html: `
<p>L'<strong>or</strong> est utilisé depuis des millénaires comme réserve de valeur. Il ne verse aucun revenu, mais tend à bien se comporter lors de crises ou de forte inflation. Sur de longues périodes, son rendement réel a été bien inférieur à celui des actions, avec de très longues périodes de baisse (par exemple de 1980 à 2001).</p>
<p>Les <strong>matières premières</strong> (pétrole, blé, cuivre) s'achètent surtout via des contrats à terme ou des FNB. Elles sont très cycliques et les FNB qui roulent des contrats à terme peuvent subir des coûts importants (<em>contango</em>).</p>` }
    ],
    3: [
      { h: 'Fiscalité de la crypto', html: `
<ul>
<li><strong>Canada</strong> : selon l'ARC, la crypto est un bien. Une vente ou un échange crypto contre crypto est une disposition imposable : gain en capital (50 % imposable) ou revenu d'entreprise si tu fais du trading de façon commerciale.</li>
<li><strong>France</strong> : les plus-values sur cessions d'actifs numériques contre de la monnaie (ou un bien) par un particulier sont imposées au prélèvement forfaitaire ; les échanges crypto contre crypto sont neutres fiscalement. Les comptes à l'étranger doivent être déclarés.</li>
</ul>
<p>Tiens un registre de toutes tes transactions (date, montant, prix en monnaie locale) : c'est obligatoire et indispensable pour calculer ton prix de base.</p>` },
      { h: 'Évaluer un actif sans flux de trésorerie', html: `
<p>Une action se valorise par ses profits futurs ; une obligation par ses coupons. Un actif sans flux (or, bitcoin, œuvre d'art) n'a pas de valeur intrinsèque calculable par DCF : son prix reflète l'adoption, la rareté et le sentiment. Les pros l'analysent donc surtout par son rôle dans un portefeuille (corrélation, comportement en crise), et appliquent une gestion du risque stricte (taille de position, rééquilibrage).</p>
<p>Autres actifs alternatifs : capital-investissement (private equity), dette privée, fonds de couverture. Ils sont souvent peu liquides, chers et réservés aux investisseurs qualifiés.</p>` }
    ]
  },
  sources: [
    { label: 'Autorité des marchés financiers (Québec) — Cryptoactifs', url: 'https://lautorite.qc.ca/grand-public/investissements/cryptoactifs' },
    { label: 'AMF France — Actifs numériques et liste des PSAN', url: 'https://www.amf-france.org/fr/espace-epargnants/proteger-son-epargne/crypto-actifs-bitcoin-etc' },
    { label: 'Autorités canadiennes en valeurs mobilières (ACVM) — Plateformes de crypto inscrites', url: 'https://www.autorites-valeurs-mobilieres.ca/' },
    { label: 'Agence du revenu du Canada — Imposition des cryptoactifs', url: 'https://www.canada.ca/fr/agence-revenu/programmes/a-propos-agence-revenu-canada-arc/conformite/monnaie-numerique.html' },
    { label: 'Investor.gov — Crypto Assets', url: 'https://www.investor.gov/additional-resources/spotlight/crypto-assets' },
    { label: 'Satoshi Nakamoto (2008), « Bitcoin: A Peer-to-Peer Electronic Cash System »', url: 'https://bitcoin.org/bitcoin.pdf' }
  ],
  exercises: [
    { lvl: 1, t: 'qcm', q: "Combien de bitcoins existeront au maximum ?", o: ["1 million", "21 millions", "Illimité", "100 millions"], a: 1, e: "L'offre maximale est fixée à 21 millions par le protocole." },
    { lvl: 1, t: 'qcm', q: "Que recommandent les autorités financières pour la crypto ?", o: ["Y mettre toutes ses économies", "N'investir que ce qu'on peut perdre en totalité", "Emprunter pour en acheter", "Éviter toute vérification"], a: 1, e: "La volatilité et les risques de fraude sont extrêmes." },
    { lvl: 2, t: 'num', q: "Portefeuille de 40 000 $. Tu limites la crypto à 3 %. Montant maximum ?", a: 1200, tol: 1, u: '$', e: "3 % × 40 000 = 1 200 $." },
    { lvl: 2, t: 'num', q: "Ta crypto baisse de 75 %. De combien (en %) doit-elle monter pour revenir à ton prix d'achat ?", a: 300, tol: 0.5, u: '%', e: "100 → 25. Pour revenir à 100 : 25 × 4 = 100, soit +300 %." },
    { lvl: 3, t: 'qcm', q: "Au Canada, échanger du bitcoin contre de l'ether est…", o: ["Non imposable", "Une disposition imposable", "Interdit", "Imposable seulement au-delà de 10 000 $"], a: 1, e: "Selon l'ARC, un échange crypto contre crypto est une disposition." },
    { lvl: 3, t: 'qcm', q: "Pourquoi ne peut-on pas évaluer le bitcoin par DCF ?", o: ["Il est trop cher", "Il ne génère pas de flux de trésorerie", "Il est interdit", "Il n'a pas de prix"], a: 1, e: "Le DCF actualise des flux futurs ; un actif sans flux n'a pas de valeur intrinsèque calculable ainsi." }
  ]
});

JI.topics.push({
  id: 'psychologie',
  title: "Psychologie de l'investisseur",
  short: 'Ton pire ennemi, c’est toi',
  tagline: "Investir est simple, mais pas facile. Les émotions coûtent plus cher que les frais.",
  time: 18,
  levels: {
    1: [
      { h: 'Pourquoi le cerveau est mal fait pour investir', html: `
<p>Notre cerveau a évolué pour survivre dans la savane, pas pour gérer un portefeuille. Face à une baisse, il crie « danger, fuis ! ». Face à une hausse rapide, il crie « tout le monde en profite, vite ! ». Résultat : beaucoup de gens achètent cher (euphorie) et vendent bas (panique).</p>
<p>Les études Morningstar « Mind the Gap » estiment que les investisseurs obtiennent en moyenne environ <strong>1 point de pourcentage de moins par an</strong> que les fonds dans lesquels ils investissent, simplement à cause du mauvais timing de leurs achats et ventes.</p>` },
      { h: 'Le FOMO et la peur', html: `
<ul>
<li><strong>FOMO</strong> (<em>fear of missing out</em>, peur de manquer quelque chose) : acheter une action ou une crypto parce que « tout le monde en parle » et qu'elle a déjà monté de 300 %.</li>
<li><strong>Peur</strong> : vendre tout pendant une baisse et « attendre que ça se calme »… et rater la remontée.</li>
</ul>
<div class="c tip"><b>Astuce</b>Écris ton plan d'investissement (allocation, montant mensuel, règles de rééquilibrage) <strong>quand tu es calme</strong>. Pendant une crise, relis-le au lieu de regarder les nouvelles.</div>` }
    ],
    2: [
      { h: 'Les biais cognitifs les plus coûteux', html: `
<div class="tbl-wrap"><table class="tbl">
<thead><tr><th>Biais</th><th>Ce que c'est</th><th>Antidote</th></tr></thead>
<tbody>
<tr><td><strong>Aversion à la perte</strong></td><td>Une perte fait environ 2 fois plus mal qu'un gain équivalent fait plaisir (Kahneman &amp; Tversky)</td><td>Regarder son portefeuille moins souvent</td></tr>
<tr><td><strong>Excès de confiance</strong></td><td>Se croire meilleur que la moyenne</td><td>Comparer honnêtement ses résultats à un indice</td></tr>
<tr><td><strong>Biais de confirmation</strong></td><td>Chercher seulement les infos qui confirment ce qu'on pense</td><td>Chercher activement l'argument contraire</td></tr>
<tr><td><strong>Ancrage</strong></td><td>Rester fixé sur un prix (« je vendrai quand ça reviendra à mon prix d'achat »)</td><td>Se demander : l'achèterais-je aujourd'hui à ce prix ?</td></tr>
<tr><td><strong>Biais de récence</strong></td><td>Croire que ce qui vient de se passer va continuer</td><td>Regarder l'historique long</td></tr>
<tr><td><strong>Effet de disposition</strong></td><td>Vendre trop tôt les gagnants, garder trop longtemps les perdants</td><td>Règles écrites à l'avance</td></tr>
<tr><td><strong>Instinct grégaire</strong></td><td>Suivre la foule</td><td>Stratégie automatisée</td></tr>
<tr><td><strong>Biais domestique</strong></td><td>Surinvestir dans son propre pays</td><td>Diversification mondiale</td></tr>
</tbody></table></div>` },
      { h: 'Le trading fréquent nuit à la richesse', html: `
<p>Dans une étude célèbre (« Trading Is Hazardous to Your Wealth », <em>Journal of Finance</em>, 2000), Brad Barber et Terrance Odean ont analysé les comptes de 66 000 ménages américains. Les 20 % qui échangeaient le plus ont obtenu un rendement net annuel de 11,4 %, contre 17,9 % pour le marché sur la même période. Les hommes échangeaient environ 45 % plus que les femmes et obtenaient de moins bons résultats nets (étude « Boys Will Be Boys », 2001).</p>` }
    ],
    3: [
      { h: 'Théorie des perspectives et cadrage', html: `
<p>La <strong>théorie des perspectives</strong> (Kahneman &amp; Tversky, 1979 ; Nobel 2002 pour Kahneman) explique que nous évaluons les résultats par rapport à un point de référence, pas en richesse absolue, et que nous devenons <em>preneurs de risque</em> pour éviter une perte certaine. C'est ce qui pousse à « doubler la mise » sur une position perdante.</p>
<p>La <strong>comptabilité mentale</strong> (Richard Thaler, Nobel 2017) : traiter l'argent différemment selon son origine (« argent de la maison » au casino, remboursement d'impôt dépensé sans réfléchir). Un dollar reste un dollar.</p>` },
      { h: 'Construire des garde-fous professionnels', html: `
<ul>
<li><strong>Énoncé de politique de placement</strong> (IPS) : document écrit avec objectifs, allocation cible, bornes de rééquilibrage, règles d'achat et de vente. Les fonds de pension en ont tous un.</li>
<li><strong>Pré-mortem</strong> : avant un investissement, imagine qu'il a échoué dans 3 ans et liste pourquoi.</li>
<li><strong>Journal de décisions</strong> : note la raison de chaque achat ; relis-le pour séparer la chance de la compétence.</li>
<li><strong>Automatisation</strong> : cotisations et rééquilibrage automatiques retirent l'émotion de l'équation.</li>
<li><strong>Taille de position</strong> : limiter chaque titre individuel (par exemple 5 % maximum) pour qu'aucune erreur ne soit fatale.</li>
</ul>` }
    ]
  },
  sources: [
    { label: 'Kahneman & Tversky (1979), « Prospect Theory », Econometrica', url: 'https://www.nobelprize.org/prizes/economic-sciences/2002/kahneman/facts/' },
    { label: 'Barber & Odean (2000), « Trading Is Hazardous to Your Wealth », Journal of Finance', url: 'https://faculty.haas.berkeley.edu/odean/papers%20current%20versions/individual_investor_performance_final.pdf' },
    { label: 'Morningstar — Mind the Gap (écart de rendement des investisseurs)', url: 'https://www.morningstar.com/lp/mind-the-gap' },
    { label: 'Richard Thaler — Prix Nobel 2017', url: 'https://www.nobelprize.org/prizes/economic-sciences/2017/thaler/facts/' },
    { label: 'Autorité des marchés financiers (Québec) — Les biais comportementaux', url: 'https://lautorite.qc.ca/grand-public/investissements' },
    { label: 'Daniel Kahneman, Système 1 / Système 2 : Les deux vitesses de la pensée (2011)', url: 'https://en.wikipedia.org/wiki/Thinking,_Fast_and_Slow' }
  ],
  exercises: [
    { lvl: 1, t: 'qcm', q: "Le FOMO pousse généralement à…", o: ["Acheter après une forte hausse", "Vendre au plus haut", "Ne rien faire", "Rééquilibrer"], a: 0, e: "La peur de rater une occasion pousse à acheter quand le prix a déjà beaucoup monté." },
    { lvl: 1, t: 'qcm', q: "Le marché baisse de 25 %. Selon un plan d'investissement à long terme, que fais-tu ?", o: ["Tout vendre", "Suivre mon plan (continuer mes achats réguliers, rééquilibrer)", "Emprunter pour tout miser", "Arrêter définitivement d'investir"], a: 1, e: "Le plan écrit à froid te protège des décisions émotionnelles." },
    { lvl: 2, t: 'qcm', q: "« Je vendrai quand l'action reviendra à mon prix d'achat. » C'est quel biais ?", o: ["Ancrage", "Biais domestique", "Excès de confiance", "Biais de récence"], a: 0, e: "Ton prix d'achat n'a aucune importance pour le marché : c'est un ancrage." },
    { lvl: 2, t: 'qcm', q: "Investir 80 % de son argent dans des entreprises de son propre pays alors qu'il représente 3 % du marché mondial, c'est…", o: ["Le biais domestique", "L'effet de disposition", "L'aversion à la perte", "La diversification"], a: 0, e: "C'est le biais domestique (home bias)." },
    { lvl: 2, t: 'num', q: "Selon l'aversion à la perte, une perte de 500 $ fait aussi mal qu'un gain d'environ combien de $ fait plaisir ?", a: 1000, tol: 1, u: '$', e: "Une perte pèse environ 2 fois plus : 500 × 2 = 1 000 $." },
    { lvl: 3, t: 'qcm', q: "À quoi sert un énoncé de politique de placement (IPS) ?", o: ["À prédire le marché", "À fixer par écrit objectifs et règles pour éviter les décisions émotionnelles", "À payer moins d'impôt", "À choisir des cryptos"], a: 1, e: "C'est le garde-fou utilisé par les investisseurs institutionnels." }
  ]
});

JI.topics.push({
  id: 'arnaques',
  title: 'Arnaques et protection',
  short: 'Reconnaître et éviter les fraudes',
  tagline: "Si c'est trop beau pour être vrai, c'est que ce n'est pas vrai.",
  time: 15,
  levels: {
    1: [
      { h: 'Les signaux d’alarme', html: `
<p>Les autorités financières recommandent de te méfier de toute offre qui :</p>
<ul>
<li>promet un <strong>rendement élevé et garanti</strong>, ou « sans risque » ;</li>
<li>te met de la <strong>pression</strong> (« offre limitée », « décide aujourd'hui ») ;</li>
<li>arrive sans que tu l'aies demandée (appel, réseau social, application de rencontre, groupe WhatsApp ou Telegram) ;</li>
<li>demande un paiement en <strong>cryptomonnaie</strong>, cartes-cadeaux ou virement à l'étranger ;</li>
<li>est faite par quelqu'un <strong>non inscrit</strong> auprès des autorités ;</li>
<li>utilise des célébrités (souvent de fausses publicités générées par IA) ;</li>
<li>te demande d'installer un logiciel d'accès à distance.</li>
</ul>` },
      { h: 'Vérifie toujours avant d’investir', html: `
<ul>
<li><strong>Québec</strong> : Autorité des marchés financiers, registre des entreprises et individus autorisés ; Info-AMF au 1 877 525-0337.</li>
<li><strong>Canada</strong> : outil « Vérifiez l'inscription » des ACVM (aretenir.ca / sontilsinscrits.ca) ; Centre antifraude du Canada au 1 888 495-8501.</li>
<li><strong>France</strong> : listes noires et registre REGAFI / ORIAS de l'AMF ; AMF Épargne Info Service au 01 53 45 62 00 ; Info Escroqueries au 0 805 805 817.</li>
</ul>
<div class="c warn"><b>Attention</b>Les « sociétés de récupération » qui promettent de récupérer l'argent perdu dans une arnaque contre des frais sont presque toujours une deuxième arnaque.</div>` }
    ],
    2: [
      { h: 'Les grandes familles de fraudes', html: `
<ul>
<li><strong>Système de Ponzi</strong> : les « rendements » des anciens investisseurs sont payés avec l'argent des nouveaux. L'affaire Bernard Madoff (révélée en 2008) a causé des pertes déclarées d'environ 65 milliards $ US sur papier ; au Québec, l'affaire Vincent Lacroix (Norbourg, 2005) a touché plus de 9 000 investisseurs.</li>
<li><strong>Vente pyramidale</strong> : on gagne surtout en recrutant d'autres personnes.</li>
<li><strong>« Pump and dump »</strong> : des fraudeurs font grimper une petite action par de fausses nouvelles, puis vendent tout.</li>
<li><strong>Arnaque amoureuse / « pig butchering »</strong> : une relation se crée en ligne, puis la personne propose une « plateforme de crypto » qui affiche de faux gains avant de bloquer les retraits.</li>
<li><strong>Faux sites de courtage et usurpation</strong> : copies de vrais sites, faux conseillers utilisant le nom d'une vraie institution.</li>
</ul>` },
      { h: 'Protéger ses comptes', html: `
<ul>
<li>Authentification à deux facteurs partout (de préférence une application, pas le SMS).</li>
<li>Mots de passe uniques avec un gestionnaire de mots de passe.</li>
<li>Ta banque ne te demandera jamais ton mot de passe ou de transférer ton argent « pour le protéger ».</li>
<li>Désigne une <strong>personne de confiance</strong> auprès de ton courtier (obligation au Canada de demander depuis 2021) : utile pour protéger les personnes âgées.</li>
</ul>` }
    ],
    3: [
      { h: 'Les protections des investisseurs', html: `
<ul>
<li><strong>Fonds canadien de protection des investisseurs (FCPI)</strong> : protège les biens des clients jusqu'à 1 million $ par catégorie de compte en cas d'<em>insolvabilité</em> d'un courtier membre de l'OCRI (pas les pertes de marché).</li>
<li><strong>Fonds d'indemnisation des services financiers (Québec)</strong> : peut indemniser les victimes de fraude d'un représentant inscrit.</li>
<li><strong>France</strong> : Fonds de garantie des dépôts et de résolution (FGDR) : garantie des titres jusqu'à 70 000 € par client et des dépôts jusqu'à 100 000 €.</li>
<li><strong>Médiation</strong> : OSBI (Ombudsman des services bancaires et d'investissement) au Canada, Médiateur de l'AMF en France.</li>
</ul>` },
      { h: 'Due diligence sur un gestionnaire ou un produit', html: `
<ul>
<li>Le dépositaire des actifs est-il une institution indépendante et reconnue ?</li>
<li>Les états financiers sont-ils audités par un cabinet reconnu ?</li>
<li>Les rendements sont-ils anormalement réguliers ? (Madoff affichait des rendements mensuels presque toujours positifs : statistiquement suspect, comme l'avait signalé Harry Markopolos à la SEC dès 2000.)</li>
<li>La stratégie est-elle compréhensible et cohérente avec les rendements annoncés ?</li>
<li>Y a-t-il des mesures disciplinaires dans les registres publics ?</li>
</ul>` }
    ]
  },
  sources: [
    { label: 'Autorité des marchés financiers (Québec) — Fraude et arnaques', url: 'https://lautorite.qc.ca/grand-public/fraudes-et-arnaques' },
    { label: 'ACVM — Vérifiez l’inscription', url: 'https://www.autorites-valeurs-mobilieres.ca/' },
    { label: 'Centre antifraude du Canada', url: 'https://antifraudcentre-centreantifraude.ca/index-fra.htm' },
    { label: 'AMF France — Listes noires et mises en garde', url: 'https://www.amf-france.org/fr/espace-epargnants/proteger-son-epargne/listes-noires-et-mises-en-garde' },
    { label: 'Fonds canadien de protection des investisseurs (FCPI)', url: 'https://www.cipf.ca/fr' },
    { label: 'FGDR — Fonds de garantie des dépôts et de résolution', url: 'https://www.garantiedesdepots.fr/' },
    { label: 'Investor.gov — Ponzi Schemes', url: 'https://www.investor.gov/protect-your-investments/fraud/types-fraud/ponzi-scheme' }
  ],
  exercises: [
    { lvl: 1, t: 'qcm', q: "Un inconnu sur Instagram te promet 3 % par semaine garanti. C'est…", o: ["Une belle occasion", "Presque certainement une arnaque", "Un placement normal", "Une obligation"], a: 1, e: "Rendement élevé + garanti + sollicitation non demandée = signaux d'alarme multiples." },
    { lvl: 1, t: 'qcm', q: "Quel est le premier réflexe avant d'investir avec quelqu'un ?", o: ["Lui faire confiance s'il est sympathique", "Vérifier son inscription auprès de l'autorité financière", "Envoyer un petit montant pour tester", "Demander à ses amis Facebook"], a: 1, e: "Les registres publics sont gratuits et rapides à consulter." },
    { lvl: 2, t: 'num', q: "Une « plateforme » promet 3 % par semaine. Ça fait combien de % par an, composé sur 52 semaines (arrondi à l'unité) ?", a: 365, tol: 3, u: '%', e: "1,03⁵² ≈ 4,65 → +365 % par an. Aucun placement légitime n'offre ça de façon garantie." },
    { lvl: 2, t: 'qcm', q: "Dans un système de Ponzi, les rendements sont payés avec…", o: ["Les profits de l'entreprise", "L'argent des nouveaux investisseurs", "Les dividendes", "Les intérêts bancaires"], a: 1, e: "D'où l'effondrement inévitable quand les nouveaux dépôts ralentissent." },
    { lvl: 3, t: 'qcm', q: "Le FCPI (Canada) protège contre…", o: ["Les pertes de marché", "L'insolvabilité d'un courtier membre", "Les mauvais conseils", "L'inflation"], a: 1, e: "Il protège les biens des clients en cas de faillite du courtier, pas les baisses de marché." }
  ]
});

JI.topics.push({
  id: 'revenus',
  title: 'Augmenter ses revenus',
  short: 'Carrière, projets, entreprise',
  tagline: "On ne peut couper ses dépenses que jusqu'à zéro. Ses revenus, eux, n'ont pas de plafond.",
  time: 18,
  levels: {
    1: [
      { h: 'Les deux leviers de la richesse', html: `
<div class="formula">Richesse future ≈ (Revenus − Dépenses) × Rendement × Temps</div>
<p>Tu peux agir sur chaque terme. Au début, le levier le plus puissant est souvent le <strong>revenu</strong> : passer de 40 000 $ à 60 000 $ par an change tout ton potentiel d'épargne, bien plus qu'un rendement de 8 % au lieu de 7 % sur un petit portefeuille.</p>
<div class="c ex"><b>Exemple</b>Avec 5 000 $ investis, gagner 1 % de rendement de plus rapporte 50 $ par an. Une augmentation de salaire de 3 000 $ en rapporte 60 fois plus.</div>` },
      { h: 'Investir en soi-même', html: `
<ul>
<li><strong>Compétences recherchées</strong> : métiers spécialisés, technologies, santé, vente, langues. Statistique Canada et l'INSEE montrent régulièrement que le niveau de qualification est fortement lié au revenu.</li>
<li><strong>Négocier son salaire</strong> à l'embauche : chaque augmentation sert de base aux suivantes pendant toute la carrière.</li>
<li><strong>Changer d'employeur</strong> : souvent la façon la plus rapide d'obtenir une hausse importante.</li>
<li><strong>Programmes publics</strong> : crédits d'impôt pour frais de scolarité, Compte personnel de formation (CPF) en France, subventions à la formation.</li>
</ul>` }
    ],
    2: [
      { h: 'Les revenus complémentaires', html: `
<ul>
<li><strong>Services</strong> : travail autonome dans ton domaine, tutorat, rénovation, photographie.</li>
<li><strong>Produits numériques</strong> : formations, gabarits, applications.</li>
<li><strong>Location</strong> : chambre, stationnement, équipement.</li>
</ul>
<p>N'oublie pas : ces revenus sont <strong>imposables</strong>. Au Canada, tu dois t'inscrire aux taxes (TPS/TVQ) au-delà de 30 000 $ de revenus sur 4 trimestres consécutifs ; en France, le statut de micro-entrepreneur simplifie les démarches.</p>` },
      { h: "Les leçons de « The Millionaire Next Door »", html: `
<p>Thomas Stanley et William Danko (1996) ont étudié des milliers de millionnaires américains. La majorité :</p>
<ul>
<li>ont bâti leur richesse eux-mêmes (pas d'héritage) ;</li>
<li>vivent sous leurs moyens (maison et voiture modestes par rapport à leur patrimoine) ;</li>
<li>sont souvent propriétaires d'une petite entreprise ou exercent une profession libérale ;</li>
<li>investissent une part importante de leur revenu, régulièrement.</li>
</ul>
<p>Formule de patrimoine attendu proposée par les auteurs : <strong>Âge × Revenu brut annuel ÷ 10</strong>. Si ta valeur nette dépasse le double, tu es un « grand accumulateur de richesse ».</p>` }
    ],
    3: [
      { h: "L'entrepreneuriat et la propriété d'actifs", html: `
<p>La plupart des grandes fortunes viennent de la <strong>propriété d'une entreprise</strong>. Une entreprise rentable se vend un multiple de ses profits : bâtir une entreprise qui génère 200 000 $ de profit par an peut créer un actif valant 600 000 $ à plus de 1 million $, selon le secteur.</p>
<ul>
<li>Commencer petit, valider la demande avant d'investir beaucoup.</li>
<li>Séparer les finances personnelles et d'entreprise ; envisager l'incorporation selon le niveau de profit (conseil comptable).</li>
<li>Ressources : Futurpreneur, BDC et Services Québec au Canada ; Bpifrance et France Travail (ACRE) en France.</li>
</ul>
<div class="c warn"><b>Attention</b>Une part importante des nouvelles entreprises ferment dans leurs premières années (les statistiques officielles le montrent dans tous les pays). Garde un fonds d'urgence personnel solide avant de te lancer.</div>` },
      { h: 'Capital humain et diversification', html: `
<p>Pour un jeune, le plus gros actif est son <strong>capital humain</strong> : la valeur actualisée de tous ses revenus futurs de travail. Les pros en tirent deux conséquences :</p>
<ul>
<li>Un emploi stable (fonctionnaire) ressemble à une obligation : on peut se permettre plus d'actions dans son portefeuille.</li>
<li>Un emploi volatil ou lié à un secteur (pétrole, technologie, finance) ressemble à une action de ce secteur : évite d'investir en plus dans ce même secteur ou dans les actions de ton employeur (rappel : les employés de Nortel ou d'Enron ont perdu leur emploi <em>et</em> leurs économies).</li>
</ul>
<p>Protéger ce capital humain fait aussi partie de la planification : assurance invalidité, assurance vie temporaire si des personnes dépendent de ton revenu.</p>` }
    ]
  },
  sources: [
    { label: 'Stanley & Danko (1996), The Millionaire Next Door', url: 'https://en.wikipedia.org/wiki/The_Millionaire_Next_Door' },
    { label: 'Statistique Canada — Revenus selon le niveau de scolarité', url: 'https://www150.statcan.gc.ca/' },
    { label: 'Agence du revenu du Canada — Petits fournisseurs et TPS/TVH', url: 'https://www.canada.ca/fr/agence-revenu/services/impot/entreprises/sujets/tps-tvh-entreprises/inscription-tps-tvh/inscrire.html' },
    { label: 'Service-public.fr — Micro-entrepreneur', url: 'https://entreprendre.service-public.fr/vosdroits/F23961' },
    { label: 'Banque de développement du Canada (BDC)', url: 'https://www.bdc.ca/fr' },
    { label: 'Bpifrance — Création d’entreprise', url: 'https://bpifrance-creation.fr/' },
    { label: 'ACFC — Assurance', url: 'https://www.canada.ca/fr/agence-consommation-matiere-financiere/services/assurance.html' }
  ],
  exercises: [
    { lvl: 1, t: 'num', q: "Portefeuille de 10 000 $. Combien rapporte 1 % de rendement supplémentaire par an ?", a: 100, tol: 0.5, u: '$', e: "1 % × 10 000 = 100 $ : bien moins qu'une augmentation de salaire typique." },
    { lvl: 1, t: 'qcm', q: "Au début de sa vie financière, quel levier est souvent le plus puissant ?", o: ["Trouver l'action miracle", "Augmenter ses revenus", "Couper le café", "Acheter des billets de loterie"], a: 1, e: "Le revenu fixe le potentiel d'épargne ; il n'a pas de plafond." },
    { lvl: 2, t: 'num', q: "Formule de Stanley & Danko : 40 ans, revenu brut 90 000 $. Patrimoine attendu ?", a: 360000, tol: 1, u: '$', e: "40 × 90 000 ÷ 10 = 360 000 $." },
    { lvl: 2, t: 'qcm', q: "Un revenu de travail autonome est-il imposable ?", o: ["Non", "Oui", "Seulement au-delà de 1 million", "Seulement en espèces"], a: 1, e: "Tous les revenus d'entreprise sont imposables et doivent être déclarés." },
    { lvl: 3, t: 'num', q: "Une entreprise génère 150 000 $ de profit annuel et se vend 4 fois ses profits. Quelle est sa valeur ?", a: 600000, tol: 1, u: '$', e: "150 000 × 4 = 600 000 $." },
    { lvl: 3, t: 'qcm', q: "Tu travailles dans le secteur pétrolier. Que faut-il éviter dans ton portefeuille ?", o: ["Un FNB monde", "Surpondérer les actions pétrolières et celles de ton employeur", "Les obligations", "Le CELI"], a: 1, e: "Ton capital humain est déjà exposé à ce secteur ; diversifie ailleurs." }
  ]
});
