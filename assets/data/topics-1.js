/* J'investis — contenu des sujets 01 à 06
   Niveaux : 1 = Débutant, 2 = Intermédiaire, 3 = Pro */
window.JI = window.JI || { topics: [] };

JI.topics.push({
  id: 'budget',
  title: 'Le budget',
  short: 'Savoir où va ton argent',
  tagline: "Avant d'investir un seul dollar, il faut savoir combien il en entre, combien il en sort, et où il part.",
  time: 18,
  levels: {
    1: [
      { h: "C'est quoi, un budget ?", html: `
<p>Un budget, c'est simplement un <strong>plan pour ton argent</strong>. Tu écris ce qui rentre (ton salaire, tes allocations, tes petits boulots) et ce qui sort (loyer, épicerie, abonnements, sorties). La différence entre les deux, c'est ce qui te reste pour épargner et investir.</p>
<p>Ce n'est pas une punition. Un budget ne sert pas à t'interdire des choses : il sert à décider <em>toi-même</em> où va ton argent, au lieu de découvrir à la fin du mois qu'il a disparu.</p>
<div class="formula">Revenus − Dépenses = Ce qui reste (ta capacité d'épargne)</div>
<div class="c key"><b>À retenir</b>Tout le reste du site (épargner, investir, devenir riche) dépend de cette ligne. Si le résultat est négatif, la priorité n'est pas la Bourse : c'est de rééquilibrer ce calcul.</div>` },
      { h: 'Étape 1 : savoir où part ton argent', html: `
<p>La plupart des gens sous-estiment leurs dépenses. Pendant 1 mois (idéalement 3), note <strong>toutes</strong> tes dépenses. Le plus simple : télécharger le relevé de ton compte bancaire et de ta carte de crédit, puis classer chaque ligne dans une catégorie.</p>
<ul>
<li><strong>Dépenses fixes</strong> : loyer, assurance, forfait cellulaire, transport en commun, abonnements. Elles reviennent chaque mois au même montant.</li>
<li><strong>Dépenses variables essentielles</strong> : épicerie, essence, pharmacie.</li>
<li><strong>Dépenses plaisir</strong> : restaurants, livraison, vêtements, sorties, jeux vidéo.</li>
</ul>
<div class="c ex"><b>Exemple</b>Un café à 5 $ par jour ouvrable, c'est environ 5 $ × 21 jours × 12 mois = <strong>1 260 $ par année</strong>. Ce n'est pas « mal » d'acheter un café ; c'est juste important de savoir ce que ça représente.</div>` },
      { h: 'La règle 50 / 30 / 20', html: `
<p>Une méthode très simple pour commencer, popularisée par la sénatrice américaine Elizabeth Warren dans son livre <em>All Your Worth</em> (2005) :</p>
<div class="tbl-wrap"><table class="tbl">
<thead><tr><th>Part</th><th>Pour quoi</th><th>Sur 3 000 $ nets/mois</th></tr></thead>
<tbody>
<tr><td><strong>50 %</strong></td><td>Besoins : logement, nourriture, transport, assurances, paiements minimums</td><td class="num">1 500 $</td></tr>
<tr><td><strong>30 %</strong></td><td>Envies : loisirs, restos, voyages, shopping</td><td class="num">900 $</td></tr>
<tr><td><strong>20 %</strong></td><td>Épargne, investissement et remboursement accéléré des dettes</td><td class="num">600 $</td></tr>
</tbody></table></div>
<p>On calcule sur le revenu <strong>net</strong> (après impôts), c'est-à-dire l'argent qui arrive réellement sur ton compte.</p>
<div class="c tip"><b>Astuce</b>Si ton loyer mange déjà 50 % de ton revenu, ce n'est pas grave : adapte en 60/20/20 ou 70/10/20. Le plus important, c'est de garder une part fixe pour l'épargne, même petite.</div>` },
      { h: 'Se payer en premier', html: `
<p>Le conseil le plus puissant en finances personnelles : <strong>dès que ta paie arrive, un virement automatique envoie une partie vers ton épargne</strong>. Tu vis ensuite avec ce qui reste.</p>
<p>Pourquoi ça marche ? Parce que si tu attends la fin du mois pour épargner « ce qui reste », il ne reste presque jamais rien. L'automatisation retire la tentation et la volonté de l'équation.</p>
<div class="c ex"><b>Exemple</b>Paie le 1<sup>er</sup> et le 15 → virement automatique de 150 $ le 2 et le 16 vers un compte épargne séparé. Résultat : 3 600 $ épargnés par an sans y penser.</div>` }
    ],
    2: [
      { h: 'Le budget à base zéro', html: `
<p>Dans un budget à base zéro, <strong>chaque dollar reçoit un rôle</strong> avant le début du mois, jusqu'à ce que Revenus − Rôles attribués = 0. L'épargne et l'investissement sont des « rôles » comme les autres.</p>
<p>C'est plus exigeant que le 50/30/20, mais très efficace quand les revenus sont irréguliers (travailleurs autonomes, pourboires) ou quand on veut atteindre un objectif précis rapidement.</p>
<h4>La méthode des enveloppes</h4>
<p>Version concrète : une « enveloppe » par catégorie (physique ou sous-compte bancaire). Quand l'enveloppe « restos » est vide, c'est fini jusqu'au mois prochain. Plusieurs banques en ligne permettent de créer des sous-comptes gratuitement pour faire exactement ça.</p>` },
      { h: 'Les dépenses annuelles cachées', html: `
<p>Les budgets échouent souvent à cause des dépenses qui ne reviennent pas chaque mois : immatriculation, entretien de voiture, cadeaux de Noël, assurance annuelle, rentrée scolaire, frais de vétérinaire.</p>
<p>Solution : fais la liste de ces dépenses, additionne-les, divise par 12, et mets ce montant de côté <strong>chaque mois</strong> dans un compte « dépenses prévisibles ».</p>
<div class="formula">Provision mensuelle = Total des dépenses annuelles irrégulières ÷ 12</div>
<div class="c ex"><b>Exemple</b>Pneus 800 $ + cadeaux 600 $ + assurance 1 000 $ + entretien 400 $ = 2 800 $ → 233 $ par mois à provisionner.</div>` },
      { h: "Le taux d'épargne", html: `
<p>Ton taux d'épargne est l'indicateur le plus important de ta santé financière, bien plus que ton salaire.</p>
<div class="formula">Taux d'épargne = Montant épargné ÷ Revenu net × 100</div>
<p>À titre de repère, Statistique Canada et l'INSEE publient le taux d'épargne moyen des ménages : il varie selon les années et les pays, généralement entre 5 % et 18 % du revenu disponible. Viser <strong>15 à 20 %</strong> est un objectif solide ; les personnes qui visent l'indépendance financière montent parfois à 40–60 %.</p>
<div class="c key"><b>À retenir</b>Quelqu'un qui gagne 50 000 $ et épargne 20 % s'enrichit plus vite que quelqu'un qui gagne 120 000 $ et dépense tout.</div>` }
    ],
    3: [
      { h: 'Valeur nette et bilan personnel', html: `
<p>Les pros ne regardent pas seulement le budget (un flux), mais aussi le <strong>bilan</strong> (un stock), exactement comme une entreprise.</p>
<div class="formula">Valeur nette = Actifs (ce que tu possèdes) − Passifs (ce que tu dois)</div>
<div class="tbl-wrap"><table class="tbl">
<thead><tr><th>Actifs</th><th>Passifs</th></tr></thead>
<tbody>
<tr><td>Comptes bancaires, placements, CELI/REER/PEA</td><td>Solde de carte de crédit</td></tr>
<tr><td>Valeur marchande de la maison</td><td>Hypothèque restante</td></tr>
<tr><td>Valeur de revente de la voiture</td><td>Prêt auto, prêt étudiant</td></tr>
</tbody></table></div>
<p>Calcule ta valeur nette tous les 3 ou 6 mois. C'est <em>la</em> mesure de ta richesse. Un gros salaire avec une valeur nette qui stagne signifie que l'argent ne fait que passer.</p>` },
      { h: 'Inflation du mode de vie et budget « en pourcentage »', html: `
<p>L'<strong>inflation du mode de vie</strong> (<em>lifestyle creep</em>) : chaque augmentation de salaire est absorbée par une plus grosse voiture, un plus grand logement, des abonnements de plus. Le revenu monte, la valeur nette ne bouge pas.</p>
<p>Technique de pro : décide à l'avance qu'au moins <strong>50 % de chaque augmentation</strong> va directement à l'épargne. Tu profites quand même de ta hausse de salaire, mais ton taux d'épargne grimpe à chaque promotion.</p>
<div class="c ex"><b>Exemple</b>Salaire net de 3 000 $ → 3 400 $/mois. Tu augmentes ton virement automatique de 200 $. Ton niveau de vie monte de 200 $, ton épargne de 200 $. En 10 ans de promotions, ça fait une différence énorme.</div>` },
      { h: 'Optimiser les gros postes, pas les petits', html: `
<p>Les trois plus grosses dépenses de la plupart des ménages sont le <strong>logement, le transport et l'alimentation</strong>. Économiser 10 % sur le loyer vaut beaucoup plus que couper tous les cafés.</p>
<ul>
<li><strong>Logement</strong> : colocation, plus petit logement, renégocier le renouvellement, comparer le coût total (loyer + transport).</li>
<li><strong>Transport</strong> : une voiture neuve perd souvent 15 à 25 % de sa valeur la première année. Une voiture d'occasion fiable payée comptant est l'un des meilleurs « placements » qui soient.</li>
<li><strong>Assurances et télécoms</strong> : comparer chaque année. Un simple appel peut économiser des centaines de dollars.</li>
</ul>` }
    ]
  },
  sources: [
    { label: "Agence de la consommation en matière financière du Canada (ACFC) — Faire un budget", url: 'https://www.canada.ca/fr/agence-consommation-matiere-financiere/services/faire-budget.html' },
    { label: 'Banque de France — Mes questions d’argent (budget)', url: 'https://www.mesquestionsdargent.fr/budget' },
    { label: 'Investor.gov (SEC) — Save and Invest', url: 'https://www.investor.gov/introduction-investing/investing-basics/save-and-invest' },
    { label: 'Elizabeth Warren & Amelia Warren Tyagi, All Your Worth (2005) — règle 50/30/20', url: 'https://en.wikipedia.org/wiki/All_Your_Worth' },
    { label: 'Statistique Canada — Taux d’épargne des ménages', url: 'https://www150.statcan.gc.ca/' },
    { label: 'INSEE — Taux d’épargne des ménages', url: 'https://www.insee.fr/fr/statistiques' }
  ],
  exercises: [
    { lvl: 1, t: 'num', q: "Tu gagnes 2 800 $ nets par mois. Selon la règle 50/30/20, combien dois-tu mettre en épargne chaque mois ?", a: 560, tol: 1, u: '$', e: "20 % de 2 800 $ = 0,20 × 2 800 = 560 $." },
    { lvl: 1, t: 'qcm', q: "Que veut dire « se payer en premier » ?", o: ["Acheter quelque chose pour soi avant de payer les factures", "Épargner automatiquement dès que la paie arrive, puis vivre avec le reste", "Demander une avance sur salaire", "Payer d'abord la carte de crédit"], a: 1, e: "On épargne en premier (idéalement par virement automatique), avant d'avoir l'occasion de dépenser." },
    { lvl: 1, t: 'qcm', q: "Laquelle de ces dépenses est une dépense FIXE ?", o: ["Épicerie", "Restaurant", "Loyer", "Vêtements"], a: 2, e: "Le loyer revient chaque mois au même montant. L'épicerie varie d'un mois à l'autre." },
    { lvl: 2, t: 'num', q: "Tes dépenses irrégulières annuelles totalisent 3 600 $. Combien dois-tu provisionner chaque mois ?", a: 300, tol: 1, u: '$', e: "3 600 $ ÷ 12 = 300 $ par mois." },
    { lvl: 2, t: 'num', q: "Tu gagnes 4 000 $ nets par mois et tu épargnes 600 $. Quel est ton taux d'épargne (en %) ?", a: 15, tol: 0.1, u: '%', e: "600 ÷ 4 000 = 0,15 → 15 %." },
    { lvl: 3, t: 'num', q: "Actifs : compte 5 000 $, placements 22 000 $, auto 12 000 $. Passifs : carte de crédit 3 000 $, prêt auto 9 000 $, prêt étudiant 15 000 $. Quelle est la valeur nette ?", a: 12000, tol: 1, u: '$', e: "Actifs = 39 000 $. Passifs = 27 000 $. Valeur nette = 39 000 − 27 000 = 12 000 $." },
    { lvl: 3, t: 'qcm', q: "Quelle stratégie a généralement le plus d'impact sur le budget ?", o: ["Couper les cafés", "Réduire le coût du logement ou du transport", "Annuler un abonnement de musique", "Éviter les pourboires"], a: 1, e: "Le logement et le transport sont les plus gros postes. 10 % d'économie sur ceux-ci dépasse de loin les petites coupures." }
  ]
});

JI.topics.push({
  id: 'epargne',
  title: 'Épargner intelligemment',
  short: "Fonds d'urgence et où mettre son argent",
  tagline: "L'épargne, c'est ton filet de sécurité et le carburant de tes futurs investissements.",
  time: 16,
  levels: {
    1: [
      { h: "Épargner vs investir : la différence", html: `
<ul>
<li><strong>Épargner</strong>, c'est mettre de l'argent de côté dans un endroit <em>sûr et disponible</em> (compte épargne, livret). Ça rapporte peu, mais ça ne baisse pas.</li>
<li><strong>Investir</strong>, c'est acheter quelque chose (actions, obligations, immobilier) qui peut prendre de la valeur ou verser des revenus, en acceptant que la valeur <em>puisse baisser</em> temporairement.</li>
</ul>
<p>On épargne pour le court terme et les imprévus. On investit pour le long terme (5 ans et plus).</p>
<div class="c key"><b>À retenir</b>L'argent dont tu as besoin dans moins de 3 à 5 ans ne devrait généralement pas être en Bourse.</div>` },
      { h: "Le fonds d'urgence : la toute première étape", html: `
<p>Le fonds d'urgence, c'est un coussin pour les coups durs : perte d'emploi, réparation d'auto, bris de laveuse, frais dentaires. Sans lui, le moindre imprévu finit sur la carte de crédit à 20 % d'intérêt.</p>
<p>La recommandation classique des organismes de protection des consommateurs : <strong>3 à 6 mois de dépenses essentielles</strong>.</p>
<div class="formula">Fonds d'urgence = Dépenses essentielles mensuelles × 3 à 6</div>
<div class="c ex"><b>Exemple</b>Loyer 1 200 $ + épicerie 400 $ + transport 150 $ + assurances et téléphone 150 $ = 1 900 $/mois. Fonds d'urgence visé : 5 700 $ (3 mois) à 11 400 $ (6 mois).</div>
<p>Commence petit : un premier objectif de <strong>1 000 $</strong> évite déjà la majorité des petites catastrophes.</p>` },
      { h: 'Où mettre son épargne ?', html: `
<p>L'épargne doit être <strong>sûre</strong>, <strong>disponible rapidement</strong> et rapporter un peu d'intérêt.</p>
<ul>
<li><strong>Au Canada</strong> : compte d'épargne à intérêt élevé (CELI épargne ou non), dans une institution membre de la SADC (fédéral) ou garantie par l'AMF au Québec (Desjardins). Les dépôts admissibles sont garantis jusqu'à 100 000 $ par catégorie.</li>
<li><strong>En France</strong> : Livret A et LDDS (plafonds 22 950 € et 12 000 €), intérêts exonérés d'impôt, taux fixé par l'État. Le LEP rapporte davantage mais est réservé aux revenus modestes.</li>
</ul>
<div class="c warn"><b>Attention</b>Les taux des comptes d'épargne et des livrets changent régulièrement. Vérifie le taux en vigueur sur le site officiel (Banque de France / service-public.fr ou ton institution) avant de choisir.</div>` }
    ],
    2: [
      { h: "Épargne par objectifs", html: `
<p>Au lieu d'un seul gros compte, crée un sous-compte par objectif : fonds d'urgence, voyage, mise de fonds maison, voiture. Chaque objectif a un <strong>montant</strong> et une <strong>date</strong>.</p>
<div class="formula">Épargne mensuelle nécessaire = (Objectif − Déjà épargné) ÷ Nombre de mois restants</div>
<div class="c ex"><b>Exemple</b>Voyage de 3 000 $ dans 15 mois, 600 $ déjà de côté → (3 000 − 600) ÷ 15 = 160 $ par mois.</div>` },
      { h: 'CPG, dépôts à terme et comptes à terme', html: `
<p>Un <strong>CPG</strong> (certificat de placement garanti, Canada) ou un <strong>compte à terme</strong> (France) : tu prêtes ton argent à la banque pour une durée fixe (6 mois à 5 ans) à un taux garanti. Le capital est protégé (dans les limites de l'assurance-dépôts).</p>
<ul>
<li>Avantage : taux souvent plus élevé qu'un compte épargne, aucun risque de perte.</li>
<li>Inconvénient : argent bloqué (ou pénalité si retrait avant l'échéance pour certains produits).</li>
</ul>
<h4>La technique de l'échelle</h4>
<p>Divise ton montant en 5 CPG : 1, 2, 3, 4 et 5 ans. Chaque année, un CPG arrive à échéance ; tu le réinvestis sur 5 ans. Tu obtiens des taux longs tout en ayant de l'argent disponible chaque année.</p>` },
      { h: "Le rendement réel de l'épargne", html: `
<p>Si ton compte rapporte 2 % mais que l'inflation est de 3 %, ton pouvoir d'achat <strong>baisse</strong> de 1 % par an environ. C'est pourquoi l'épargne seule ne rend pas riche : elle protège, mais elle ne fait pas croître.</p>
<div class="formula">Rendement réel ≈ Rendement nominal − Inflation</div>
<p>(La formule exacte est (1 + nominal) ÷ (1 + inflation) − 1, mais l'approximation suffit au quotidien.)</p>` }
    ],
    3: [
      { h: "Calibrer son fonds d'urgence selon son profil", html: `
<p>Le « 3 à 6 mois » est une moyenne. Un pro ajuste selon le risque réel :</p>
<div class="tbl-wrap"><table class="tbl">
<thead><tr><th>Situation</th><th>Fonds conseillé</th></tr></thead>
<tbody>
<tr><td>Fonctionnaire, double revenu stable, sans enfant</td><td class="num">3 mois</td></tr>
<tr><td>Salarié du privé, un seul revenu</td><td class="num">6 mois</td></tr>
<tr><td>Travailleur autonome, commissions, secteur cyclique</td><td class="num">9 à 12 mois</td></tr>
<tr><td>Propriétaire d'une maison ancienne</td><td class="num">+ réserve travaux</td></tr>
</tbody></table></div>
<p>Trop d'épargne a aussi un coût : l'argent qui dort au-delà du besoin réel perd face à l'inflation (coût d'opportunité).</p>` },
      { h: 'Fonds du marché monétaire et FNB d’épargne', html: `
<p>Pour des montants importants, les pros utilisent des <strong>fonds du marché monétaire</strong> ou des <strong>FNB d'épargne à intérêt élevé</strong> qui suivent de près les taux directeurs (Banque du Canada, BCE). Ils sont très peu volatils, mais <strong>ne sont pas</strong> couverts par l'assurance-dépôts : ce sont des placements, pas des dépôts.</p>
<p>Les bons du Trésor (dette gouvernementale à très court terme, moins d'un an) sont une autre option quasi sans risque de crédit pour la portion « liquidités » d'un portefeuille.</p>` }
    ]
  },
  sources: [
    { label: "ACFC — Fonds d'urgence", url: 'https://www.canada.ca/fr/agence-consommation-matiere-financiere/services/epargne/fonds-urgence.html' },
    { label: 'Société d’assurance-dépôts du Canada (SADC)', url: 'https://www.sadc.ca/' },
    { label: 'Autorité des marchés financiers (Québec) — Assurance-dépôts', url: 'https://lautorite.qc.ca/grand-public/assurance-et-planification/assurance-depots' },
    { label: 'Service-public.fr — Livret A', url: 'https://www.service-public.fr/particuliers/vosdroits/F2365' },
    { label: 'Banque de France — Taux des livrets réglementés', url: 'https://www.banque-france.fr/' },
    { label: 'Investor.gov — Emergency savings', url: 'https://www.investor.gov/' }
  ],
  exercises: [
    { lvl: 1, t: 'num', q: "Tes dépenses essentielles sont de 2 100 $ par mois. Quel fonds d'urgence vises-tu pour 3 mois ?", a: 6300, tol: 1, u: '$', e: "2 100 × 3 = 6 300 $." },
    { lvl: 1, t: 'qcm', q: "Où placer ton fonds d'urgence ?", o: ["Dans des actions technologiques", "Dans un compte épargne sûr et accessible", "En cryptomonnaies", "Dans un appartement locatif"], a: 1, e: "Le fonds d'urgence doit être sûr et disponible immédiatement. Les actions et cryptos peuvent chuter au moment où tu en as besoin." },
    { lvl: 1, t: 'qcm', q: "Pour de l'argent dont tu as besoin dans 1 an, le meilleur choix est généralement…", o: ["La Bourse", "L'épargne (compte épargne, CPG, livret)", "Les options", "Un prêt à un ami"], a: 1, e: "À court terme, la Bourse peut baisser de 20 % ou plus. L'épargne garantie est adaptée." },
    { lvl: 2, t: 'num', q: "Objectif : 4 800 $ dans 12 mois. Tu as déjà 1 200 $. Combien épargner par mois ?", a: 300, tol: 1, u: '$', e: "(4 800 − 1 200) ÷ 12 = 300 $." },
    { lvl: 2, t: 'num', q: "Ton compte rapporte 4 % et l'inflation est de 2,5 %. Rendement réel approximatif (en %) ?", a: 1.5, tol: 0.05, u: '%', e: "4 − 2,5 = 1,5 % de rendement réel environ." },
    { lvl: 3, t: 'qcm', q: "Un fonds du marché monétaire est-il couvert par l'assurance-dépôts ?", o: ["Oui, toujours", "Non, c'est un placement et non un dépôt", "Seulement en France", "Seulement s'il est dans un CELI"], a: 1, e: "Les fonds et FNB sont des placements. L'assurance-dépôts couvre les dépôts admissibles (comptes, CPG)." }
  ]
});

JI.topics.push({
  id: 'interets',
  title: 'Intérêts composés et inflation',
  short: 'La 8e merveille du monde',
  tagline: "Les deux forces invisibles qui décident si ton argent grossit ou fond avec le temps.",
  time: 20,
  levels: {
    1: [
      { h: 'Intérêts simples vs intérêts composés', html: `
<p><strong>Intérêts simples</strong> : tu gagnes des intérêts seulement sur ton argent de départ.<br>
<strong>Intérêts composés</strong> : tu gagnes des intérêts sur ton argent <em>et</em> sur les intérêts déjà gagnés. Les intérêts produisent eux-mêmes des intérêts : c'est l'effet boule de neige.</p>
<div class="tbl-wrap"><table class="tbl">
<thead><tr><th>1 000 $ à 10 %</th><th>Simples</th><th>Composés</th></tr></thead>
<tbody>
<tr><td>Après 1 an</td><td class="num">1 100 $</td><td class="num">1 100 $</td></tr>
<tr><td>Après 10 ans</td><td class="num">2 000 $</td><td class="num">2 594 $</td></tr>
<tr><td>Après 30 ans</td><td class="num">4 000 $</td><td class="num">17 449 $</td></tr>
</tbody></table></div>
<div class="c key"><b>À retenir</b>Avec les intérêts composés, le temps est ton meilleur allié. La plus grande partie de la croissance arrive à la fin.</div>` },
      { h: 'Commencer tôt change tout', html: `
<p>Prenons deux personnes avec un rendement de 7 % par an :</p>
<ul>
<li><strong>Léa</strong> investit 200 $ par mois de 20 à 30 ans (10 ans), puis arrête complètement.</li>
<li><strong>Marc</strong> investit 200 $ par mois de 30 à 65 ans (35 ans).</li>
</ul>
<p>À 65 ans, Léa a mis 24 000 $ et Marc 84 000 $. Pourtant, Léa finit avec près de <strong>400 000 $</strong> et Marc avec environ <strong>360 000 $</strong>. Les 10 années d'avance de Léa ont travaillé pour elle pendant 35 ans.</p>
<p class="small">Calcul approximatif, intérêts composés mensuellement, à titre d'illustration. Teste toi-même dans la section <a href="#outils">Outils</a>.</p>` },
      { h: "L'inflation : l'ennemi silencieux", html: `
<p>L'inflation, c'est la hausse générale des prix. Si l'inflation est de 3 %, ce qui coûte 100 $ aujourd'hui coûtera 103 $ dans un an. Ton billet de 100 $ achète donc <strong>moins</strong> de choses.</p>
<p>La Banque du Canada et la Banque centrale européenne visent toutes les deux une inflation d'environ <strong>2 %</strong> par an. À 2 %, les prix doublent environ tous les 36 ans ; à 3 %, environ tous les 24 ans.</p>
<div class="c warn"><b>Attention</b>De l'argent qui dort dans un compte à 0 % perd de la valeur chaque année. Ne pas investir est aussi un risque.</div>` }
    ],
    2: [
      { h: 'La formule des intérêts composés', html: `
<div class="formula">Valeur finale = Capital × (1 + taux)<sup>années</sup></div>
<p>Avec des versements réguliers (chaque période) :</p>
<div class="formula">VF = V × [ (1 + r)<sup>n</sup> − 1 ] ÷ r</div>
<p>où V = versement par période, r = taux par période, n = nombre de périodes.</p>
<div class="c ex"><b>Exemple</b>5 000 $ à 6 % pendant 20 ans : 5 000 × 1,06<sup>20</sup> = 5 000 × 3,207 = <strong>16 036 $</strong>.</div>` },
      { h: 'La règle de 72', html: `
<p>Un raccourci mental pour savoir en combien d'années ton argent double :</p>
<div class="formula">Années pour doubler ≈ 72 ÷ taux annuel (%)</div>
<ul>
<li>À 4 % → 18 ans</li>
<li>À 8 % → 9 ans</li>
<li>À 12 % → 6 ans</li>
</ul>
<p>Ça marche aussi à l'envers : avec une carte de crédit à 20 %, ta dette double en environ <strong>3,6 ans</strong> si tu ne paies rien.</p>` },
      { h: 'Fréquence de capitalisation et TAE', html: `
<p>Un taux de 12 % « composé mensuellement » rapporte plus que 12 % composé annuellement, car les intérêts sont ajoutés plus souvent. C'est pourquoi on compare les produits avec le <strong>taux annuel effectif</strong> (TAE).</p>
<div class="formula">TAE = (1 + taux nominal ÷ m)<sup>m</sup> − 1</div>
<p>où m = nombre de capitalisations par an. 12 % composé mensuellement → (1 + 0,01)<sup>12</sup> − 1 = <strong>12,68 %</strong>.</p>` }
    ],
    3: [
      { h: "Rendement réel, IPC et les limites de l'inflation officielle", html: `
<p>L'inflation officielle est mesurée par l'<strong>Indice des prix à la consommation (IPC)</strong>, publié par Statistique Canada et l'INSEE. C'est un panier moyen : ton inflation personnelle peut être différente (par exemple si ton loyer augmente beaucoup plus vite).</p>
<div class="formula">Rendement réel exact = (1 + nominal) ÷ (1 + inflation) − 1</div>
<p>Sur longue période, les données compilées par Elroy Dimson, Paul Marsh et Mike Staunton (<em>UBS Global Investment Returns Yearbook</em>) montrent que les actions mondiales ont battu l'inflation d'environ 5 % par an en moyenne depuis 1900, contre environ 1 à 2 % pour les obligations et moins de 1 % pour les bons du Trésor. Ces moyennes cachent toutefois des décennies très difficiles.</p>` },
      { h: 'Valeur actuelle et actualisation', html: `
<p>Les pros raisonnent à l'envers : combien vaut <em>aujourd'hui</em> une somme reçue dans le futur ? C'est l'<strong>actualisation</strong>, base de toute la finance (évaluation d'entreprises, d'obligations, d'immeubles).</p>
<div class="formula">Valeur actuelle = Valeur future ÷ (1 + r)<sup>n</sup></div>
<div class="c ex"><b>Exemple</b>Recevoir 10 000 $ dans 10 ans, avec un taux d'actualisation de 5 %, vaut 10 000 ÷ 1,05<sup>10</sup> ≈ <strong>6 139 $</strong> aujourd'hui.</div>
<p>C'est pourquoi les actions de croissance chutent quand les taux montent : leurs profits futurs, actualisés à un taux plus élevé, valent moins aujourd'hui.</p>` },
      { h: 'Rendement géométrique vs arithmétique', html: `
<p>Si un placement fait +50 % puis −50 %, la moyenne arithmétique est 0 %… mais tu as perdu 25 % (100 → 150 → 75). Le rendement qui compte vraiment est le <strong>rendement géométrique</strong> (ou TCAC, taux de croissance annuel composé).</p>
<div class="formula">TCAC = (Valeur finale ÷ Valeur initiale)<sup>1/n</sup> − 1</div>
<p>Plus un placement est volatil, plus l'écart entre les deux est grand (« volatility drag »). Approximation : géométrique ≈ arithmétique − variance ÷ 2.</p>` }
    ]
  },
  sources: [
    { label: 'Investor.gov — Calculateur d’intérêts composés (SEC)', url: 'https://www.investor.gov/financial-tools-calculators/calculators/compound-interest-calculator' },
    { label: 'Banque du Canada — Cible de maîtrise de l’inflation', url: 'https://www.banqueducanada.ca/grandes-fonctions/politique-monetaire/maitrise-inflation/' },
    { label: 'Banque centrale européenne — Stratégie de politique monétaire', url: 'https://www.ecb.europa.eu/mopo/strategy/html/index.fr.html' },
    { label: 'Statistique Canada — Indice des prix à la consommation', url: 'https://www150.statcan.gc.ca/' },
    { label: 'INSEE — Indice des prix à la consommation', url: 'https://www.insee.fr/fr/statistiques' },
    { label: 'Dimson, Marsh & Staunton — UBS Global Investment Returns Yearbook', url: 'https://www.ubs.com/global/en/investment-bank/insights-and-data/2024/global-investment-returns-yearbook.html' }
  ],
  exercises: [
    { lvl: 1, t: 'qcm', q: "Avec les intérêts composés, tu gagnes des intérêts…", o: ["Seulement sur ton dépôt initial", "Sur ton dépôt ET sur les intérêts déjà gagnés", "Seulement la première année", "Seulement si tu retires ton argent"], a: 1, e: "Les intérêts s'ajoutent au capital et rapportent à leur tour : c'est l'effet boule de neige." },
    { lvl: 1, t: 'num', q: "1 000 $ placés à 10 % composés annuellement. Combien as-tu après 2 ans ?", a: 1210, tol: 1, u: '$', e: "1 000 × 1,10 = 1 100 ; 1 100 × 1,10 = 1 210 $." },
    { lvl: 1, t: 'qcm', q: "L'inflation est de 3 %. Ton argent dort à 0 %. Que se passe-t-il ?", o: ["Tu t'enrichis", "Ton pouvoir d'achat baisse", "Rien ne change", "Ton argent double"], a: 1, e: "Les prix montent de 3 % mais ton argent ne bouge pas : tu peux acheter moins de choses." },
    { lvl: 2, t: 'num', q: "Règle de 72 : à un rendement de 6 %, en combien d'années ton argent double-t-il ?", a: 12, tol: 0.1, u: 'ans', e: "72 ÷ 6 = 12 ans." },
    { lvl: 2, t: 'num', q: "10 000 $ à 5 % composés annuellement pendant 3 ans. Valeur finale (arrondie au dollar) ?", a: 11576, tol: 2, u: '$', e: "10 000 × 1,05³ = 10 000 × 1,157625 ≈ 11 576 $." },
    { lvl: 2, t: 'num', q: "Taux nominal de 6 % composé mensuellement. Quel est le TAE (en %, 2 décimales) ?", a: 6.17, tol: 0.02, u: '%', e: "(1 + 0,06/12)¹² − 1 = 1,005¹² − 1 ≈ 0,0617 → 6,17 %." },
    { lvl: 3, t: 'num', q: "Quelle est la valeur actuelle de 20 000 $ reçus dans 5 ans, avec un taux d'actualisation de 4 % (arrondi au dollar) ?", a: 16439, tol: 3, u: '$', e: "20 000 ÷ 1,04⁵ = 20 000 ÷ 1,21665 ≈ 16 439 $." },
    { lvl: 3, t: 'num', q: "Un placement passe de 10 000 $ à 20 000 $ en 8 ans. Quel est son TCAC (en %, 1 décimale) ?", a: 9.1, tol: 0.1, u: '%', e: "(20 000/10 000)^(1/8) − 1 = 2^0,125 − 1 ≈ 0,0905 → 9,1 %." },
    { lvl: 3, t: 'qcm', q: "Un placement fait +20 % puis −20 %. Résultat total ?", o: ["0 %", "−4 %", "+4 %", "−2 %"], a: 1, e: "1,20 × 0,80 = 0,96 → perte de 4 %. Les rendements se multiplient, ils ne s'additionnent pas." }
  ]
});

JI.topics.push({
  id: 'dettes',
  title: 'Dettes et crédit',
  short: 'La bonne, la mauvaise et la cote',
  tagline: "Rembourser une dette à 20 % est un « placement » garanti à 20 %. Aucune Bourse ne t'offre ça.",
  time: 18,
  levels: {
    1: [
      { h: 'Bonne dette, mauvaise dette', html: `
<p>Toutes les dettes ne se valent pas.</p>
<ul>
<li><strong>Dette plutôt « bonne »</strong> : elle finance quelque chose qui prend de la valeur ou augmente tes revenus, à un taux raisonnable. Exemples : hypothèque sur une résidence abordable, prêt étudiant pour une formation rentable.</li>
<li><strong>Mauvaise dette</strong> : elle finance de la consommation qui perd sa valeur, souvent à un taux élevé. Exemples : solde de carte de crédit, financement d'électronique, prêt sur salaire, « achetez maintenant, payez plus tard » mal utilisé.</li>
</ul>
<div class="c warn"><b>Attention</b>Les cartes de crédit au Canada et en France ont souvent des taux d'environ 20 % par an. Les prêts sur salaire peuvent dépasser l'équivalent de plusieurs centaines de pour cent annualisés.</div>` },
      { h: 'Comment bien utiliser une carte de crédit', html: `
<p>La carte de crédit n'est pas un ennemi si tu respectes une règle d'or : <strong>payer le solde complet chaque mois</strong>. Dans ce cas, tu ne paies aucun intérêt (période de grâce) et tu construis ton historique de crédit.</p>
<p>Le <strong>paiement minimum</strong> est un piège : il est calculé pour que tu restes endetté longtemps. Ton relevé de carte indique d'ailleurs combien de temps il te faudrait pour rembourser en ne payant que le minimum (c'est une obligation légale au Canada).</p>
<div class="c ex"><b>Exemple</b>Un solde de 3 000 $ à 20 %, en payant seulement environ 2 % du solde par mois, peut prendre <strong>plus de 15 ans</strong> à rembourser et coûter des milliers de dollars d'intérêts.</div>` },
      { h: 'La cote de crédit', html: `
<p>Au Canada, ta cote (Equifax, TransUnion) va de 300 à 900. Elle influence ton taux hypothécaire, ton prêt auto, parfois même ton logement. Les grands facteurs :</p>
<ul>
<li><strong>Payer à temps</strong> (le facteur le plus important)</li>
<li><strong>Utiliser peu de ton crédit disponible</strong> (rester sous 30 % de ta limite)</li>
<li><strong>Ancienneté</strong> de tes comptes</li>
<li>Nombre de demandes de crédit récentes</li>
<li>Variété des types de crédit</li>
</ul>
<p>En France, il n'existe pas de « score » public ; la Banque de France tient des fichiers d'incidents (FICP pour les incidents de remboursement, FCC pour les incidents de chèques et cartes).</p>` }
    ],
    2: [
      { h: 'Avalanche ou boule de neige ?', html: `
<p>Deux méthodes pour rembourser plusieurs dettes. Dans les deux cas, tu paies le minimum partout et tu mets tout ton surplus sur <strong>une seule</strong> dette :</p>
<div class="tbl-wrap"><table class="tbl">
<thead><tr><th>Méthode</th><th>Ordre</th><th>Avantage</th></tr></thead>
<tbody>
<tr><td><strong>Avalanche</strong></td><td>Taux d'intérêt le plus élevé d'abord</td><td>Mathématiquement optimale : le moins d'intérêts payés</td></tr>
<tr><td><strong>Boule de neige</strong></td><td>Plus petit solde d'abord</td><td>Victoires rapides, motivation psychologique</td></tr>
</tbody></table></div>
<p>Des chercheurs de la Kellogg School of Management (Northwestern) ont observé que rembourser des comptes au complet, un par un, augmente la probabilité de persévérer. La meilleure méthode est celle que tu vas réellement suivre.</p>` },
      { h: 'Consolidation et taux', html: `
<p>Consolider, c'est remplacer plusieurs dettes chères par un seul prêt à taux plus bas (marge de crédit, prêt personnel). Ça peut faire économiser beaucoup, <strong>à condition de ne pas recommencer à remplir les cartes</strong> libérées.</p>
<p>Compare toujours le <strong>coût total</strong> du crédit et le TAEG (taux annuel effectif global, France) ou le taux annuel du coût d'emprunt (Canada), qui incluent les frais.</p>` },
      { h: 'Rembourser ou investir ?', html: `
<p>Règle simple utilisée par beaucoup de planificateurs :</p>
<ul>
<li>Dette à <strong>plus de 7–8 %</strong> → rembourser en priorité (aucun placement ne garantit ce rendement).</li>
<li>Dette à <strong>moins de 3–4 %</strong> → investir peut être plus rentable à long terme, surtout dans un compte à l'abri de l'impôt.</li>
<li>Entre les deux → un partage des deux.</li>
</ul>
<p>Exception importante : si ton employeur offre une <strong>contribution équivalente</strong> à ton régime de retraite, prends-la quand même. C'est un rendement immédiat de 50 % ou 100 %.</p>` }
    ],
    3: [
      { h: "L'effet de levier : la dette comme outil", html: `
<p>Les investisseurs avertis utilisent parfois la dette pour investir (<strong>effet de levier</strong>) : hypothèque sur un immeuble locatif, marge de crédit pour acheter des titres. Le levier amplifie <em>les gains et les pertes</em>.</p>
<div class="c ex"><b>Exemple</b>Tu investis 10 000 $ + 10 000 $ empruntés à 6 %. Le marché monte de 10 % : gain de 2 000 $ − 600 $ d'intérêts = 1 400 $, soit 14 % sur ton argent. Le marché baisse de 20 % : perte de 4 000 $ + 600 $ = 4 600 $, soit −46 % sur ton argent.</div>
<div class="c warn"><b>Attention</b>Les autorités (AMF, CVMO) mettent en garde contre l'emprunt pour investir : il ne convient qu'aux personnes ayant un revenu stable, un horizon long et une tolérance élevée au risque.</div>` },
      { h: "Tableau d'amortissement", html: `
<p>Un prêt à versements constants se calcule avec la formule de l'annuité :</p>
<div class="formula">Paiement = P × r ÷ [ 1 − (1 + r)<sup>−n</sup> ]</div>
<p>P = capital emprunté, r = taux par période, n = nombre de paiements. Au début, la majeure partie de chaque paiement sert aux intérêts ; à la fin, presque tout rembourse le capital. C'est pourquoi un paiement supplémentaire tôt dans la vie d'un prêt est si puissant.</p>
<div class="c ex"><b>Exemple</b>20 000 $ sur 5 ans à 6 % (r = 0,5 % par mois, n = 60) → environ <strong>386,66 $</strong> par mois, soit environ 3 200 $ d'intérêts au total.</div>` }
    ]
  },
  sources: [
    { label: 'ACFC — Cartes de crédit et paiement minimum', url: 'https://www.canada.ca/fr/agence-consommation-matiere-financiere/services/cartes-credit.html' },
    { label: 'ACFC — Dossier de crédit et pointage de crédit', url: 'https://www.canada.ca/fr/agence-consommation-matiere-financiere/services/dossier-pointage-credit.html' },
    { label: 'Banque de France — Fichiers FICP et FCC', url: 'https://particuliers.banque-france.fr/' },
    { label: 'Gal & McShane, « Can Small Victories Help Win the War? » (Journal of Marketing Research, 2012)', url: 'https://www.kellogg.northwestern.edu/' },
    { label: 'Autorité des marchés financiers — Emprunter pour investir', url: 'https://lautorite.qc.ca/grand-public/investissements' },
    { label: 'Service-public.fr — Crédit à la consommation et TAEG', url: 'https://www.service-public.fr/particuliers/vosdroits/F2441' }
  ],
  exercises: [
    { lvl: 1, t: 'qcm', q: "Quelle est la meilleure façon d'utiliser une carte de crédit ?", o: ["Payer le minimum chaque mois", "Payer le solde complet chaque mois", "Ne jamais la regarder", "Utiliser 100 % de la limite"], a: 1, e: "Payer le solde complet évite tous les intérêts et améliore la cote de crédit." },
    { lvl: 1, t: 'num', q: "Ta limite de carte est de 5 000 $. Quel solde maximum garder pour rester sous 30 % d'utilisation ?", a: 1500, tol: 1, u: '$', e: "30 % × 5 000 = 1 500 $." },
    { lvl: 1, t: 'qcm', q: "Lequel est généralement le facteur le plus important de la cote de crédit ?", o: ["Ton salaire", "Payer tes factures à temps", "Ton âge", "Ta banque"], a: 1, e: "L'historique de paiement est le facteur numéro un. Le salaire n'apparaît pas dans le dossier de crédit." },
    { lvl: 2, t: 'qcm', q: "Dettes : carte A 19 % (2 000 $), prêt auto 6 % (8 000 $), carte B 22 % (4 500 $). Avec la méthode avalanche, laquelle attaquer en premier ?", o: ["Carte A", "Prêt auto", "Carte B", "La plus ancienne"], a: 2, e: "Avalanche = taux le plus élevé d'abord : carte B à 22 %." },
    { lvl: 2, t: 'qcm', q: "Même situation, mais avec la méthode boule de neige ?", o: ["Carte A", "Prêt auto", "Carte B"], a: 0, e: "Boule de neige = plus petit solde d'abord : carte A (2 000 $)." },
    { lvl: 2, t: 'num', q: "Règle de 72 : une dette à 18 % non remboursée double en combien d'années ?", a: 4, tol: 0.05, u: 'ans', e: "72 ÷ 18 = 4 ans." },
    { lvl: 3, t: 'num', q: "Tu investis 20 000 $ dont 10 000 $ empruntés à 5 %. Le placement baisse de 10 % en un an. Quelle est ta perte totale en dollars (intérêts inclus) ?", a: 2500, tol: 1, u: '$', e: "Perte de marché : 10 % × 20 000 = 2 000 $. Intérêts : 5 % × 10 000 = 500 $. Total = 2 500 $, soit −25 % sur tes 10 000 $." },
    { lvl: 3, t: 'qcm', q: "Dans un prêt à versements constants, au début du prêt, chaque paiement sert surtout…", o: ["À rembourser le capital", "À payer les intérêts", "À payer l'assurance", "Moitié-moitié exactement"], a: 1, e: "Les intérêts sont calculés sur le solde, qui est maximal au début." }
  ]
});

JI.topics.push({
  id: 'bourse',
  title: 'Comprendre la Bourse',
  short: 'Actions, indices, courtiers, ordres',
  tagline: "La Bourse n'est pas un casino : c'est un marché où l'on achète de petites parts de vraies entreprises.",
  time: 25,
  levels: {
    1: [
      { h: "C'est quoi, une action ?", html: `
<p>Une <strong>action</strong>, c'est une petite part de propriété d'une entreprise. Si tu achètes une action d'Apple, de Shopify ou de L'Oréal, tu deviens copropriétaire (minuscule) de cette entreprise.</p>
<p>Tu peux gagner de l'argent de deux façons :</p>
<ul>
<li><strong>Plus-value</strong> : le prix de l'action monte et tu la revends plus cher.</li>
<li><strong>Dividendes</strong> : l'entreprise te verse une partie de ses profits, souvent chaque trimestre.</li>
</ul>
<p>Le prix bouge chaque seconde selon l'offre et la demande : si plus de gens veulent acheter que vendre, le prix monte.</p>` },
      { h: "La Bourse, c'est quoi exactement ?", html: `
<p>Une <strong>Bourse</strong> est un marché organisé où acheteurs et vendeurs s'échangent des actions : la Bourse de Toronto (TSX), Euronext Paris, le New York Stock Exchange (NYSE), le Nasdaq…</p>
<p>Un <strong>indice</strong> est un panier qui mesure la santé d'un groupe d'actions :</p>
<ul>
<li><strong>S&amp;P 500</strong> : 500 grandes entreprises américaines.</li>
<li><strong>S&amp;P/TSX composé</strong> : les principales entreprises canadiennes.</li>
<li><strong>CAC 40</strong> : 40 grandes entreprises françaises.</li>
<li><strong>MSCI World</strong> : environ 1 500 entreprises de pays développés.</li>
</ul>
<p>Quand on entend « la Bourse a monté de 1 % », on parle généralement d'un indice.</p>` },
      { h: 'Combien ça rapporte, historiquement ?', html: `
<p>Sur très long terme, le marché boursier américain (S&amp;P 500, dividendes réinvestis) a rapporté en moyenne environ <strong>10 % par an</strong> depuis 1926, soit environ 6 à 7 % après inflation. Mais ce n'est jamais une ligne droite :</p>
<ul>
<li>2008 : environ −37 %</li>
<li>2020 : chute de plus de 30 % en quelques semaines, puis remontée la même année</li>
<li>2022 : environ −18 %</li>
</ul>
<div class="c key"><b>À retenir</b>Les rendements passés ne garantissent pas les rendements futurs. La Bourse récompense la patience, pas la panique.</div>` },
      { h: 'Comment acheter ta première action ou ton premier fonds', html: `
<ol>
<li>Ouvre un compte chez un <strong>courtier</strong> (courtier en ligne de ta banque, ou courtier indépendant inscrit auprès des autorités).</li>
<li>Choisis le <strong>type de compte</strong> (CELI, REER, PEA, compte-titres… voir le sujet <a href="#sujet-fiscalite">Comptes et fiscalité</a>).</li>
<li>Vire de l'argent dans ce compte.</li>
<li>Cherche le <strong>symbole</strong> (ticker) du titre, par exemple XEQT ou VFV au Canada, ou le code ISIN en Europe.</li>
<li>Passe un <strong>ordre d'achat</strong>.</li>
</ol>
<div class="c warn"><b>Attention</b>Vérifie toujours que ton courtier est inscrit : au Canada via le Registre national de l'AMF/ACVM ou l'OCRI ; en France via la liste REGAFI / l'AMF.</div>` }
    ],
    2: [
      { h: "Les types d'ordres", html: `
<div class="tbl-wrap"><table class="tbl">
<thead><tr><th>Ordre</th><th>Ce que ça fait</th><th>Quand l'utiliser</th></tr></thead>
<tbody>
<tr><td><strong>Au marché</strong></td><td>Achète/vend immédiatement au meilleur prix disponible</td><td>Titres très liquides, petite quantité</td></tr>
<tr><td><strong>À cours limité</strong></td><td>Achète seulement à ton prix ou moins (vend à ton prix ou plus)</td><td>Presque toujours : tu contrôles le prix</td></tr>
<tr><td><strong>Stop (stop-loss)</strong></td><td>Devient un ordre au marché si le prix tombe sous un seuil</td><td>Limiter une perte</td></tr>
<tr><td><strong>Stop limite</strong></td><td>Devient un ordre à cours limité au seuil</td><td>Éviter de vendre à un prix catastrophique</td></tr>
</tbody></table></div>
<p>L'<strong>écart acheteur-vendeur</strong> (<em>bid-ask spread</em>) est la différence entre le meilleur prix d'achat et de vente. Sur un titre peu échangé, il peut être important : c'est un coût caché.</p>` },
      { h: 'Types d’actions et secteurs', html: `
<ul>
<li><strong>Actions de croissance</strong> : entreprises qui réinvestissent leurs profits pour grandir vite (souvent peu ou pas de dividende).</li>
<li><strong>Actions de valeur</strong> : entreprises matures, jugées peu chères par rapport à leurs profits.</li>
<li><strong>Actions à dividendes</strong> : banques, services publics, télécoms.</li>
<li><strong>Grandes, moyennes, petites capitalisations</strong> : la capitalisation boursière = prix × nombre d'actions.</li>
</ul>
<p>L'économie est divisée en 11 secteurs (classification GICS) : technologie, santé, finance, énergie, consommation discrétionnaire, consommation de base, industrie, matériaux, services publics, immobilier, services de communication.</p>` },
      { h: 'Marché haussier, baissier et correction', html: `
<ul>
<li><strong>Correction</strong> : baisse de 10 % ou plus depuis un sommet.</li>
<li><strong>Marché baissier</strong> (<em>bear market</em>) : baisse de 20 % ou plus.</li>
<li><strong>Marché haussier</strong> (<em>bull market</em>) : hausse de 20 % ou plus depuis un creux.</li>
</ul>
<p>Les corrections arrivent en moyenne environ une fois par an ou deux ; les marchés baissiers quelques fois par décennie. Historiquement, les marchés haussiers ont duré beaucoup plus longtemps que les marchés baissiers.</p>` }
    ],
    3: [
      { h: 'Ventes à découvert, marge et options', html: `
<p><strong>Achat sur marge</strong> : le courtier te prête de l'argent en prenant tes titres en garantie. Si la valeur baisse trop, il exige plus d'argent (<em>appel de marge</em>) ou vend tes titres au pire moment.</p>
<p><strong>Vente à découvert</strong> : tu empruntes une action pour la vendre, en espérant la racheter moins cher. Ta perte potentielle est <strong>illimitée</strong>, car le prix peut monter sans fin.</p>
<p><strong>Options</strong> : contrats qui donnent le <em>droit</em> d'acheter (call) ou de vendre (put) une action à un prix fixé (prix d'exercice) avant une date. L'acheteur paie une prime. Usages professionnels : couverture (assurance d'un portefeuille avec des puts), revenu (vente de calls couverts). Selon de nombreuses études, la majorité des particuliers qui spéculent sur les options perdent de l'argent.</p>
<div class="c warn"><b>Attention</b>Ces produits ne sont pas nécessaires pour devenir riche. Ils sont surtout utiles aux professionnels qui comprennent parfaitement leurs risques.</div>` },
      { h: "L'efficience des marchés", html: `
<p>L'<strong>hypothèse des marchés efficients</strong> (Eugene Fama, prix Nobel 2013) dit que les prix reflètent rapidement l'information disponible. Conséquence : il est très difficile de battre le marché de façon régulière après frais.</p>
<p>Les rapports <strong>SPIVA</strong> de S&amp;P Dow Jones Indices le confirment année après année : sur 15 ans, la grande majorité (souvent environ 9 sur 10) des fonds actions gérés activement font moins bien que leur indice de référence, au Canada comme aux États-Unis et en Europe.</p>
<p>Les marchés ne sont pas parfaitement efficients (bulles, anomalies, facteurs comme la valeur ou la petite capitalisation), mais exploiter ces imperfections après frais et impôts est difficile.</p>` },
      { h: 'Microstructure : qui sont les autres joueurs ?', html: `
<p>En face de toi : teneurs de marché, fonds de pension, fonds de couverture, algorithmes à haute fréquence. Ils ont plus d'information, de vitesse et de capital. C'est une autre raison pour laquelle le particulier gagne surtout en étant <strong>patient, diversifié et économe en frais</strong>, là où les pros n'ont pas d'avantage.</p>
<p>Le <strong>flottant</strong>, le <strong>volume</strong> moyen et la <strong>liquidité</strong> d'un titre déterminent la facilité à acheter ou vendre sans faire bouger le prix.</p>` }
    ]
  },
  sources: [
    { label: 'Autorité des marchés financiers (Québec) — Les actions', url: 'https://lautorite.qc.ca/grand-public/investissements/actions' },
    { label: 'AMF France — Investir en Bourse : les bases', url: 'https://www.amf-france.org/fr/espace-epargnants' },
    { label: 'Investor.gov — Stocks', url: 'https://www.investor.gov/introduction-investing/investing-basics/investment-products/stocks' },
    { label: 'Investor.gov — Types of orders', url: 'https://www.investor.gov/introduction-investing/investing-basics/how-stock-markets-work/types-orders' },
    { label: 'S&P Dow Jones Indices — Rapports SPIVA', url: 'https://www.spglobal.com/spdji/en/research-insights/spiva/' },
    { label: 'Prix Nobel d’économie 2013 — Fama, Hansen, Shiller', url: 'https://www.nobelprize.org/prizes/economic-sciences/2013/summary/' },
    { label: 'Organisme canadien de réglementation des investissements (OCRI)', url: 'https://www.ciro.ca/fr' },
    { label: 'Registre REGAFI (France)', url: 'https://www.regafi.fr/' }
  ],
  exercises: [
    { lvl: 1, t: 'qcm', q: "Acheter une action, c'est…", o: ["Prêter de l'argent à une entreprise", "Devenir copropriétaire d'une petite part de l'entreprise", "Acheter un produit de l'entreprise", "Ouvrir un compte bancaire"], a: 1, e: "Une action = une part de propriété. Prêter à une entreprise, c'est une obligation." },
    { lvl: 1, t: 'qcm', q: "Qu'est-ce que le S&P 500 ?", o: ["Une entreprise", "Un indice de 500 grandes entreprises américaines", "Une cryptomonnaie", "Une banque"], a: 1, e: "C'est un indice boursier qui mesure la performance de 500 grandes entreprises américaines." },
    { lvl: 1, t: 'num', q: "Tu achètes 20 actions à 45 $ et tu les revends à 52 $. Quel est ton gain (avant frais) ?", a: 140, tol: 1, u: '$', e: "(52 − 45) × 20 = 7 × 20 = 140 $." },
    { lvl: 2, t: 'qcm', q: "Tu veux acheter une action, mais pas plus cher que 30 $. Quel ordre utiliser ?", o: ["Ordre au marché", "Ordre à cours limité à 30 $", "Ordre stop à 30 $", "Vente à découvert"], a: 1, e: "L'ordre à cours limité garantit le prix maximum (mais pas l'exécution)." },
    { lvl: 2, t: 'num', q: "Un indice passe de 5 000 à 3 900 points. De combien de % a-t-il baissé ?", a: 22, tol: 0.1, u: '%', e: "(5 000 − 3 900) ÷ 5 000 = 22 %. C'est un marché baissier (plus de 20 %)." },
    { lvl: 2, t: 'num', q: "Une entreprise a 50 millions d'actions à 80 $. Quelle est sa capitalisation boursière (en millions $) ?", a: 4000, tol: 1, u: 'M$', e: "50 M × 80 $ = 4 000 M$ = 4 milliards $." },
    { lvl: 3, t: 'qcm', q: "Quelle est la perte maximale théorique d'une vente à découvert ?", o: ["Le montant investi", "0", "Illimitée", "50 %"], a: 2, e: "Le prix d'une action peut monter sans limite, donc la perte du vendeur à découvert est théoriquement illimitée." },
    { lvl: 3, t: 'qcm', q: "Selon les rapports SPIVA, sur 15 ans, la majorité des fonds gérés activement…", o: ["Battent leur indice", "Font moins bien que leur indice", "Font exactement comme leur indice", "Ne sont jamais mesurés"], a: 1, e: "Sur 15 ans, environ 9 fonds actifs sur 10 font moins bien que leur indice, principalement à cause des frais." }
  ]
});

JI.topics.push({
  id: 'obligations',
  title: 'Obligations et taux',
  short: 'Prêter son argent intelligemment',
  tagline: "Les obligations sont l'amortisseur du portefeuille : moins spectaculaires, mais essentielles.",
  time: 17,
  levels: {
    1: [
      { h: "C'est quoi, une obligation ?", html: `
<p>Une <strong>obligation</strong>, c'est un prêt que tu fais à un gouvernement ou à une entreprise. En échange, ils te versent des intérêts réguliers (le <strong>coupon</strong>) et te remboursent le montant prêté (la <strong>valeur nominale</strong>) à une date précise (l'<strong>échéance</strong>).</p>
<div class="c ex"><b>Exemple</b>Tu achètes une obligation du gouvernement de 1 000 $ à 4 % sur 5 ans. Tu reçois 40 $ par année pendant 5 ans, puis on te rend 1 000 $.</div>
<p>Les obligations sont généralement <strong>moins risquées</strong> que les actions, mais rapportent moins à long terme.</p>` },
      { h: 'Pourquoi en avoir ?', html: `
<ul>
<li><strong>Stabilité</strong> : elles bougent beaucoup moins que les actions.</li>
<li><strong>Revenu</strong> prévisible.</li>
<li><strong>Diversification</strong> : en récession, les obligations gouvernementales montent souvent quand les actions baissent (pas toujours : en 2022, les deux ont baissé ensemble à cause de la forte hausse des taux).</li>
</ul>
<p>Plus tu approches du moment où tu auras besoin de ton argent (la retraite, par exemple), plus la part d'obligations augmente généralement.</p>` }
    ],
    2: [
      { h: 'La règle d’or : prix et taux vont en sens inverse', html: `
<p>Quand les taux d'intérêt <strong>montent</strong>, le prix des obligations existantes <strong>baisse</strong>. Pourquoi ? Si de nouvelles obligations rapportent 5 %, personne ne veut payer plein prix pour ton ancienne obligation à 3 %. Son prix doit baisser pour devenir attrayant.</p>
<p>Inversement, quand les taux <strong>baissent</strong>, les obligations existantes <strong>prennent de la valeur</strong>.</p>
<div class="c key"><b>À retenir</b>Taux ↑ = prix des obligations ↓. Taux ↓ = prix des obligations ↑.</div>` },
      { h: 'Le risque de crédit et les cotes', html: `
<p>Les agences de notation (S&amp;P, Moody's, Fitch, DBRS Morningstar) évaluent la probabilité que l'émetteur rembourse.</p>
<div class="tbl-wrap"><table class="tbl">
<thead><tr><th>Cote (S&amp;P)</th><th>Catégorie</th><th>Rendement</th></tr></thead>
<tbody>
<tr><td>AAA à BBB−</td><td>Qualité investissement</td><td>Plus faible</td></tr>
<tr><td>BB+ et moins</td><td>Haut rendement (« pourries », <em>junk</em>)</td><td>Plus élevé, risque de défaut</td></tr>
</tbody></table></div>
<p>L'<strong>écart de crédit</strong> (<em>spread</em>) est le rendement supplémentaire exigé par rapport à une obligation gouvernementale de même échéance.</p>` },
      { h: "Rendement à l'échéance", html: `
<p>Le coupon n'est pas ton vrai rendement si tu achètes l'obligation à un autre prix que sa valeur nominale. Le <strong>rendement à l'échéance</strong> tient compte du prix payé, des coupons et du remboursement final.</p>
<div class="formula">Rendement courant = Coupon annuel ÷ Prix actuel</div>
<div class="c ex"><b>Exemple</b>Obligation de 1 000 $, coupon 3 % (30 $), achetée à 900 $ : rendement courant = 30 ÷ 900 = 3,33 %, et tu gagnes en plus 100 $ à l'échéance.</div>` }
    ],
    3: [
      { h: 'Duration : mesurer la sensibilité aux taux', html: `
<p>La <strong>duration modifiée</strong> estime de combien le prix d'une obligation varie quand les taux bougent de 1 point de pourcentage.</p>
<div class="formula">Variation de prix ≈ − Duration × Variation des taux</div>
<div class="c ex"><b>Exemple</b>Un fonds obligataire a une duration de 7. Les taux montent de 1 % → le fonds baisse d'environ 7 %. Si les taux baissent de 1 %, il monte d'environ 7 %.</div>
<p>Règle pratique de pro : si ta duration est inférieure à ton horizon de placement, une hausse des taux finit par t'avantager (tu réinvestis à des taux plus élevés).</p>` },
      { h: 'La courbe des taux', html: `
<p>La courbe des taux montre les rendements des obligations gouvernementales de 3 mois à 30 ans. Normalement, elle monte (prêter longtemps rapporte plus). Quand les taux courts dépassent les taux longs, on parle de <strong>courbe inversée</strong>.</p>
<p>Aux États-Unis, une inversion de l'écart 10 ans − 3 mois a précédé la plupart des récessions depuis les années 1960 (travaux de la Réserve fédérale de New York). Le délai varie toutefois beaucoup (6 à 24 mois) et le signal n'est pas infaillible : l'inversion de 2022-2024 n'a pas été suivie d'une récession immédiate.</p>` },
      { h: 'Obligations à rendement réel et convexité', html: `
<p>Les <strong>obligations indexées sur l'inflation</strong> (obligations à rendement réel au Canada, OATi en France, TIPS aux États-Unis) protègent contre l'inflation : le capital est ajusté selon l'IPC.</p>
<p>La <strong>convexité</strong> décrit le fait que la relation prix-taux n'est pas une ligne droite : pour une obligation classique, le prix monte plus quand les taux baissent qu'il ne baisse quand les taux montent du même montant. Les pros l'utilisent pour affiner la gestion du risque de taux.</p>` }
    ]
  },
  sources: [
    { label: 'Autorité des marchés financiers (Québec) — Les obligations', url: 'https://lautorite.qc.ca/grand-public/investissements/obligations' },
    { label: 'Investor.gov — Bonds', url: 'https://www.investor.gov/introduction-investing/investing-basics/investment-products/bonds-or-fixed-income-products/bonds' },
    { label: 'FINRA — Bonds and interest rates', url: 'https://www.finra.org/investors/insights/bonds-interest-rates' },
    { label: 'Federal Reserve Bank of New York — The Yield Curve as a Leading Indicator', url: 'https://www.newyorkfed.org/research/capital_markets/ycfaq' },
    { label: 'Banque du Canada — Taux des obligations', url: 'https://www.banqueducanada.ca/taux/taux-dinteret/' },
    { label: 'Agence France Trésor — OAT et OATi', url: 'https://www.aft.gouv.fr/' }
  ],
  exercises: [
    { lvl: 1, t: 'qcm', q: "Acheter une obligation, c'est…", o: ["Devenir propriétaire d'une entreprise", "Prêter de l'argent contre des intérêts", "Acheter une cryptomonnaie", "Ouvrir un compte épargne"], a: 1, e: "Une obligation est un prêt à un gouvernement ou une entreprise." },
    { lvl: 1, t: 'num', q: "Obligation de 1 000 $ avec un coupon de 5 %. Combien d'intérêts reçois-tu par an ?", a: 50, tol: 0.5, u: '$', e: "5 % × 1 000 = 50 $." },
    { lvl: 2, t: 'qcm', q: "Les taux d'intérêt montent fortement. Que fait le prix des obligations existantes ?", o: ["Il monte", "Il baisse", "Il ne bouge pas", "Il double"], a: 1, e: "Taux ↑ = prix ↓, car les nouvelles obligations rapportent plus." },
    { lvl: 2, t: 'num', q: "Coupon annuel 40 $, prix actuel 800 $. Rendement courant (en %) ?", a: 5, tol: 0.05, u: '%', e: "40 ÷ 800 = 0,05 → 5 %." },
    { lvl: 2, t: 'qcm', q: "Une obligation cotée BB est…", o: ["Qualité investissement", "Haut rendement (spéculative)", "Garantie par l'État", "Sans risque"], a: 1, e: "Sous BBB−, on est dans la catégorie haut rendement (spéculative)." },
    { lvl: 3, t: 'num', q: "Un fonds obligataire a une duration de 6. Les taux montent de 1,5 point. Variation approximative du prix (en %, négatif si baisse) ?", a: -9, tol: 0.1, u: '%', e: "−6 × 1,5 = −9 %." },
    { lvl: 3, t: 'qcm', q: "Une courbe des taux inversée signifie que…", o: ["Les taux longs sont plus hauts que les taux courts", "Les taux courts sont plus hauts que les taux longs", "Tous les taux sont à zéro", "L'inflation est négative"], a: 1, e: "Inversion = taux courts > taux longs. Historiquement, souvent un signal avant-coureur de récession aux États-Unis." }
  ]
});
