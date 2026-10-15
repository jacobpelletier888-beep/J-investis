/* J'investis — application (routage par ancre, rendu des pages, exercices, outils) */
(function () {
  'use strict';
  var T = JI.topics;
  var app = document.getElementById('app');
  var LEVELS = {
    1: { name: 'Débutant', short: 'Niv. 1', desc: "Expliqué simplement, comme à un ami. Aucune connaissance requise." },
    2: { name: 'Intermédiaire', short: 'Niv. 2', desc: "Les formules, les chiffres et les stratégies concrètes pour aller plus loin." },
    3: { name: 'Pro', short: 'Niv. 3', desc: "Les concepts utilisés par les gestionnaires, analystes et planificateurs." }
  };
  var fmt = new Intl.NumberFormat('fr-CA', { maximumFractionDigits: 0 });
  var fmt2 = new Intl.NumberFormat('fr-CA', { maximumFractionDigits: 2 });
  function money(n) { return isFinite(n) ? fmt.format(Math.round(n)) + ' $' : '—'; }
  function pad(n) { return (n < 10 ? '0' : '') + n; }
  function esc(s) { return String(s).replace(/[&<>"]/g, function (c) { return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]; }); }
  function byId(id) { for (var i = 0; i < T.length; i++) if (T[i].id === id) return T[i]; return null; }
  function idx(t) { return T.indexOf(t); }

  /* ---------- Stockage local (facultatif) ---------- */
  function load(key, def) { try { var v = localStorage.getItem(key); return v ? JSON.parse(v) : def; } catch (e) { return def; } }
  function save(key, v) { try { localStorage.setItem(key, JSON.stringify(v)); } catch (e) { /* stockage indisponible */ } }
  var scores = load('ji-scores', {});

  /* ---------- Thème ---------- */
  var root = document.documentElement;
  var savedTheme = load('ji-theme', null);
  if (savedTheme) root.setAttribute('data-theme', savedTheme);
  document.getElementById('themeBtn').addEventListener('click', function () {
    var dark = root.getAttribute('data-theme') ? root.getAttribute('data-theme') === 'dark' : matchMedia('(prefers-color-scheme: dark)').matches;
    var next = dark ? 'light' : 'dark';
    root.setAttribute('data-theme', next); save('ji-theme', next);
    drawGuilloche();
  });
  var nav = document.getElementById('nav');
  document.getElementById('menuBtn').addEventListener('click', function () {
    var open = nav.classList.toggle('open');
    this.setAttribute('aria-expanded', open ? 'true' : 'false');
  });

  /* ---------- Pages ---------- */
  function lvlPill(l) { return '<span class="pill l' + l + '"><span class="dots">' + '●●●'.slice(0, l) + '○○○'.slice(0, 3 - l) + '</span>' + LEVELS[l].name + '</span>'; }
  function topicCount(t) { var n = 0; [1, 2, 3].forEach(function (l) { n += t.levels[l].length; }); return n; }
  function doneCount(t) { var n = 0; t.exercises.forEach(function (q, i) { if (scores[t.id + '-' + i]) n++; }); return n; }

  function home() {
    var totalQ = 0, totalS = 0, totalSrc = 0;
    T.forEach(function (t) { totalQ += t.exercises.length; totalS += topicCount(t); totalSrc += t.sources.length; });
    var h = '';
    h += '<section class="hero"><canvas id="guilloche" aria-hidden="true"></canvas><div class="wrap">';
    h += '<div><div class="eyebrow">Le guide complet de l’argent, en français</div>';
    h += '<h1>Épargner, investir, <em>devenir riche</em>. Tout, expliqué simplement.</h1>';
    h += '<p class="lead">Budget, Bourse, immobilier, impôts, retraite : ' + T.length + ' sujets, chacun expliqué du niveau débutant jusqu’au niveau pro, avec des exercices et des sources officielles.</p>';
    h += '<div class="cta"><a class="btn gold" href="#sujet-budget">Commencer au début</a><a class="btn ghost" href="#exercices">Faire les exercices</a></div></div>';
    h += '<div class="note-card"><div class="serial">J’INVESTIS · SÉRIE 2026</div><div class="big num">' + T.length + ' sujets</div>';
    h += '<p>' + totalS + ' leçons · ' + totalQ + ' exercices corrigés · ' + totalSrc + ' références (autorités financières, gouvernements, recherche).</p></div>';
    h += '</div></section>';

    h += '<section class="section"><div class="wrap"><div class="section-head"><div><div class="eyebrow">Trois niveaux par sujet</div><h2>Tu choisis jusqu’où tu vas</h2>';
    h += '<p>Chaque page commence au niveau Débutant. En défilant, un bandeau t’indique quand tu passes au niveau Intermédiaire, puis Pro.</p></div></div>';
    h += '<div class="levels-legend">';
    [1, 2, 3].forEach(function (l) { h += '<div class="lvl-card">' + lvlPill(l) + '<h3>' + LEVELS[l].name + '</h3><p>' + LEVELS[l].desc + '</p></div>'; });
    h += '</div></div></section>';

    h += '<section class="section" style="padding-top:0"><div class="wrap"><div class="section-head"><div><div class="eyebrow">Le parcours recommandé</div><h2>Par où commencer ?</h2>';
    h += '<p>L’ordre que recommandent la plupart des organismes de protection des consommateurs et des planificateurs financiers.</p></div></div>';
    h += '<ol class="path">';
    [['Faire un budget', 'Savoir ce qui entre et sort', 'budget'], ['Fonds d’urgence', '3 à 6 mois de dépenses', 'epargne'], ['Éliminer les dettes chères', 'Cartes de crédit d’abord', 'dettes'], ['Ouvrir le bon compte', 'CELI, REER, PEA…', 'fiscalite'], ['Investir régulièrement', 'Fonds indiciels diversifiés', 'fonds'], ['Augmenter ses revenus', 'Le levier sans plafond', 'revenus']].forEach(function (s) {
      h += '<li><a href="#sujet-' + s[2] + '" style="text-decoration:none;color:inherit"><b>' + s[0] + '</b><span>' + s[1] + '</span></a></li>';
    });
    h += '</ol></div></section>';

    h += '<section class="section" style="padding-top:0" id="tous"><div class="wrap"><div class="section-head"><div><div class="eyebrow">Les ' + T.length + ' sujets</div><h2>Tout ce qu’il faut savoir sur l’argent</h2>';
    h += '<p>Numérotés dans l’ordre conseillé de lecture. Chaque sujet se lit de haut en bas, du plus simple au plus avancé.</p></div></div>';
    h += '<div class="toolbar" style="margin-bottom:16px"><input class="search" id="topicSearch" type="search" placeholder="Rechercher un sujet : Bourse, CELI, crypto, retraite…" aria-label="Rechercher un sujet"></div>';
    h += '<div class="topic-grid" id="topicGrid">' + topicCards('') + '</div>';
    h += '</div></section>';

    h += '<section class="section" style="padding-top:0"><div class="wrap"><div class="disclaimer"><b>À lire avant de commencer</b>';
    h += 'J’investis est un site d’éducation financière. Les informations proviennent de sources publiques reconnues (autorités des marchés financiers, gouvernements, banques centrales, recherche universitaire) citées au bas de chaque sujet. Elles ne constituent pas un conseil personnalisé. Les montants sont en dollars ; les principes sont identiques en euros. Les plafonds et taux changent souvent : vérifie toujours les chiffres de l’année en cours sur les sites officiels, et consulte un professionnel inscrit pour ta situation.</div></div></section>';
    app.innerHTML = h;
    document.getElementById('topicSearch').addEventListener('input', function () {
      document.getElementById('topicGrid').innerHTML = topicCards(this.value);
    });
    drawGuilloche();
  }

  function norm(s) { return s.toLowerCase().normalize('NFD').replace(/[̀-ͯ]/g, ''); }
  function topicCards(q) {
    q = norm(q.trim());
    var h = '', shown = 0;
    T.forEach(function (t, i) {
      var hay = norm(t.title + ' ' + t.short + ' ' + t.tagline + ' ' + [1, 2, 3].map(function (l) { return t.levels[l].map(function (s) { return s.h + ' ' + s.html; }).join(' '); }).join(' '));
      if (q && hay.indexOf(q) < 0) return;
      shown++;
      var d = doneCount(t);
      h += '<a class="topic-card" href="#sujet-' + t.id + '"><span class="n">' + pad(i + 1) + '</span>';
      if (d) h += '<span class="done">' + d + '/' + t.exercises.length + ' ✓</span>';
      h += '<h3>' + t.title + '</h3><p>' + t.short + '</p>';
      h += '<div class="meta"><span>' + t.time + ' min</span><span>' + topicCount(t) + ' leçons</span><span>' + t.exercises.length + ' exercices</span></div></a>';
    });
    if (!shown) h = '<div class="topic-card"><h3>Aucun sujet trouvé</h3><p>Essaie un autre mot, par exemple « impôt », « maison » ou « bourse ».</p></div>';
    return h;
  }

  function topicPage(t) {
    var i = idx(t), prev = T[i - 1], next = T[i + 1];
    var h = '<section class="t-hero"><div class="wrap"><div class="crumbs"><a href="#accueil">Accueil</a> / <a href="#tous">Sujets</a></div>';
    h += '<div class="n">Sujet ' + pad(i + 1) + ' / ' + T.length + '</div><h1>' + t.title + '</h1><p>' + t.tagline + '</p>';
    h += '<div class="meta">' + lvlPill(1) + lvlPill(2) + lvlPill(3) + '<span class="pill" style="color:inherit">' + t.time + ' min de lecture</span></div></div></section>';

    var toc = '<nav class="toc" aria-label="Sommaire"><h4>Dans ce sujet</h4>';
    var body = '<article class="prose">';
    var k = 0;
    [1, 2, 3].forEach(function (l) {
      toc += '<div class="grp l' + l + '">' + LEVELS[l].short + ' · ' + LEVELS[l].name + '</div><ol>';
      body += '<div class="lvl-band l' + l + '" id="niv-' + l + '"><div class="tier">' + l + '</div><strong>Niveau ' + LEVELS[l].name + '</strong><span>' + LEVELS[l].desc + '</span></div>';
      t.levels[l].forEach(function (s) {
        k++;
        toc += '<li><a href="#sujet-' + t.id + '" data-target="p' + k + '">' + s.h + '</a></li>';
        body += '<section class="part" id="p' + k + '"><h3>' + s.h + '</h3>' + s.html + '</section>';
      });
      toc += '</ol>';
    });
    toc += '<div class="grp" style="color:var(--muted)">Pour finir</div><ol><li><a href="#sujet-' + t.id + '" data-target="sources">Sources</a></li><li><a href="#exercices-' + t.id + '">Exercices (' + t.exercises.length + ')</a></li></ol></nav>';

    body += '<div class="ex-cta"><div><h3>Teste ce que tu as appris</h3><p>' + t.exercises.length + ' exercices corrigés sur « ' + t.title + ' », du débutant au pro.</p></div><a class="btn gold" href="#exercices-' + t.id + '">Faire les exercices</a></div>';
    body += '<div class="sources" id="sources"><h3>Sources</h3><p class="small">Informations tirées des organismes et publications suivants. Les règles fiscales et les taux évoluent : consulte la source pour les chiffres à jour.</p><ol>';
    t.sources.forEach(function (s) { body += '<li><a href="' + s.url + '" target="_blank" rel="noopener">' + s.label + '</a></li>'; });
    body += '</ol></div>';
    body += '<div class="next-row">';
    if (prev) body += '<a class="next-card" href="#sujet-' + prev.id + '"><small>← Sujet précédent</small><span>' + prev.title + '</span></a>';
    if (next) body += '<a class="next-card" href="#sujet-' + next.id + '" style="text-align:right"><small>Sujet suivant →</small><span>' + next.title + '</span></a>';
    body += '</div></article>';

    h += '<div class="wrap t-layout">' + toc + body + '</div>';
    app.innerHTML = h;

    app.querySelectorAll('.toc a[data-target]').forEach(function (a) {
      a.addEventListener('click', function (e) {
        e.preventDefault();
        var el = document.getElementById(a.getAttribute('data-target'));
        if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
      });
    });
    spy();
  }

  /* Sommaire actif + barre de progression */
  var spyHandler = null;
  function spy() {
    var links = app.querySelectorAll('.toc a[data-target]');
    var parts = [].map.call(links, function (a) { return document.getElementById(a.getAttribute('data-target')); });
    spyHandler = function () {
      var y = window.scrollY + 120, cur = 0;
      parts.forEach(function (p, i) { if (p && p.offsetTop <= y) cur = i; });
      links.forEach(function (a, i) { a.classList.toggle('on', i === cur); });
    };
    spyHandler();
  }
  var bar = document.getElementById('progress');
  window.addEventListener('scroll', function () {
    var max = document.documentElement.scrollHeight - innerHeight;
    bar.style.width = (max > 0 ? Math.min(100, window.scrollY / max * 100) : 0) + '%';
    if (spyHandler) spyHandler();
  }, { passive: true });

  /* ---------- Exercices ---------- */
  var exFilter = { topic: 'tous', lvl: 0 };
  function exercisesPage(topicId) {
    if (topicId) exFilter.topic = topicId;
    var h = '<section class="t-hero"><div class="wrap"><div class="crumbs"><a href="#accueil">Accueil</a> / Exercices</div>';
    h += '<div class="n">Section exercices</div><h1>Exercices</h1><p>Questions à choix multiples et calculs sur chaque concept, avec la correction expliquée. Ta progression est gardée dans ce navigateur.</p></div></section>';
    h += '<div class="wrap" style="padding-block:32px 72px">';
    h += '<div class="eyebrow" style="margin-bottom:8px">Sujet</div><div class="chips" id="fTopic"><button class="chip" data-v="tous">Tous les sujets</button>';
    T.forEach(function (t, i) { h += '<button class="chip" data-v="' + t.id + '">' + pad(i + 1) + ' · ' + t.title + '</button>'; });
    h += '</div><div class="eyebrow" style="margin:16px 0 8px">Niveau</div><div class="chips" id="fLvl"><button class="chip" data-v="0">Tous</button>';
    [1, 2, 3].forEach(function (l) { h += '<button class="chip" data-v="' + l + '">' + LEVELS[l].name + '</button>'; });
    h += '</div>';
    h += '<div class="score-bar"><div><div class="small">Réussis</div><div class="big num" id="scoreBig">0</div></div><div class="meter"><i id="scoreMeter"></i></div><button class="btn line" id="resetScores" type="button">Recommencer</button></div>';
    h += '<div id="exList"></div></div>';
    app.innerHTML = h;
    app.querySelectorAll('#fTopic .chip').forEach(function (b) { b.addEventListener('click', function () { exFilter.topic = b.dataset.v; renderEx(); }); });
    app.querySelectorAll('#fLvl .chip').forEach(function (b) { b.addEventListener('click', function () { exFilter.lvl = +b.dataset.v; renderEx(); }); });
    var resetBtn = document.getElementById('resetScores');
    resetBtn.addEventListener('click', function () {
      if (resetBtn.dataset.confirm) { scores = {}; save('ji-scores', scores); resetBtn.textContent = 'Recommencer'; delete resetBtn.dataset.confirm; renderEx(); return; }
      resetBtn.dataset.confirm = '1'; resetBtn.textContent = 'Confirmer : tout effacer ?';
      setTimeout(function () { if (resetBtn.isConnected) { resetBtn.textContent = 'Recommencer'; delete resetBtn.dataset.confirm; } }, 4000);
    });
    renderEx();
  }
  function renderEx() {
    app.querySelectorAll('#fTopic .chip').forEach(function (b) { b.classList.toggle('on', b.dataset.v === exFilter.topic); });
    app.querySelectorAll('#fLvl .chip').forEach(function (b) { b.classList.toggle('on', +b.dataset.v === exFilter.lvl); });
    var h = '', total = 0, ok = 0;
    T.forEach(function (t, ti) {
      if (exFilter.topic !== 'tous' && exFilter.topic !== t.id) return;
      var qs = '';
      t.exercises.forEach(function (q, i) {
        if (exFilter.lvl && q.lvl !== exFilter.lvl) return;
        total++; var id = t.id + '-' + i; if (scores[id]) ok++;
        qs += '<div class="q" data-id="' + id + '"><div class="qh">' + lvlPill(q.lvl) + '<span class="qn">' + (q.t === 'num' ? 'Calcul' : 'Choix multiple') + (scores[id] ? ' · déjà réussi ✓' : '') + '</span></div><p class="qt">' + esc(q.q) + '</p>';
        if (q.t === 'qcm') {
          qs += '<div class="opts">';
          q.o.forEach(function (o, j) { qs += '<button class="opt" type="button" data-j="' + j + '">' + esc(o) + '</button>'; });
          qs += '</div>';
        } else {
          qs += '<form class="numrow"><input type="text" inputmode="decimal" id="in-' + id + '" aria-label="Ta réponse" placeholder="Ta réponse"><span class="unit">' + esc(q.u || '') + '</span><button class="btn primary" type="submit">Vérifier</button><button class="btn line" type="button" data-show>Voir la réponse</button></form>';
        }
        qs += '<div class="fb" hidden></div></div>';
      });
      if (qs) h += '<div class="ex-group"><h3>' + pad(ti + 1) + ' · ' + t.title + '</h3><p><a href="#sujet-' + t.id + '">Relire le sujet</a></p>' + qs + '</div>';
    });
    var list = document.getElementById('exList');
    list.innerHTML = h || '<p>Aucun exercice pour ce filtre.</p>';
    document.getElementById('scoreBig').textContent = ok + ' / ' + total;
    document.getElementById('scoreMeter').style.width = (total ? ok / total * 100 : 0) + '%';
    list.querySelectorAll('.q').forEach(wireQ);
  }
  function findQ(id) { var p = id.lastIndexOf('-'); var t = byId(id.slice(0, p)); return t.exercises[+id.slice(p + 1)]; }
  function feedback(box, good, q, extra) {
    var fb = box.querySelector('.fb'); fb.hidden = false;
    fb.className = 'fb ' + (good ? 'right' : 'wrong');
    fb.innerHTML = '<b>' + (good ? 'Bonne réponse' : 'Pas tout à fait') + '</b>' + (extra || '') + esc(q.e);
    if (good) { scores[box.dataset.id] = true; save('ji-scores', scores); updateScore(); }
  }
  function updateScore() {
    var qs = document.querySelectorAll('#exList .q'), ok = 0;
    qs.forEach(function (b) { if (scores[b.dataset.id]) ok++; });
    document.getElementById('scoreBig').textContent = ok + ' / ' + qs.length;
    document.getElementById('scoreMeter').style.width = (qs.length ? ok / qs.length * 100 : 0) + '%';
  }
  function wireQ(box) {
    var q = findQ(box.dataset.id);
    if (q.t === 'qcm') {
      box.querySelectorAll('.opt').forEach(function (b) {
        b.addEventListener('click', function () {
          var j = +b.dataset.j;
          box.querySelectorAll('.opt').forEach(function (o) { o.disabled = true; if (+o.dataset.j === q.a) o.classList.add('right'); });
          if (j !== q.a) b.classList.add('wrong');
          feedback(box, j === q.a, q);
        });
      });
    } else {
      var form = box.querySelector('form');
      form.addEventListener('submit', function (e) {
        e.preventDefault();
        var raw = form.querySelector('input').value.replace(/\s| |\$|%|€/g, '').replace(',', '.');
        if (raw === '' || isNaN(+raw)) { var fb = box.querySelector('.fb'); fb.hidden = false; fb.className = 'fb wrong'; fb.innerHTML = '<b>Entre un nombre</b>Par exemple 1250 ou 4,5 (sans unité).'; return; }
        var good = Math.abs(+raw - q.a) <= (q.tol || 0.01);
        feedback(box, good, q, good ? '' : 'Réponse attendue : <span class="num">' + fmt2.format(q.a) + ' ' + esc(q.u || '') + '</span>. ');
      });
      box.querySelector('[data-show]').addEventListener('click', function () {
        var fb = box.querySelector('.fb'); fb.hidden = false; fb.className = 'fb right';
        fb.innerHTML = '<b>Réponse : ' + fmt2.format(q.a) + ' ' + esc(q.u || '') + '</b>' + esc(q.e);
      });
    }
  }

  /* ---------- Outils ---------- */
  function field(id, label, val) { return '<div class="field"><label for="' + id + '">' + label + '</label><input id="' + id + '" type="number" step="any" value="' + val + '"></div>'; }
  function res(label, id, hl) { return '<div class="res' + (hl ? ' hl' : '') + '"><small>' + label + '</small><strong id="' + id + '">—</strong></div>'; }
  function toolsPage() {
    var h = '<section class="t-hero"><div class="wrap"><div class="crumbs"><a href="#accueil">Accueil</a> / Outils</div><div class="n">Calculatrices</div><h1>Outils</h1><p>Fais tes propres calculs. Les valeurs de départ sont des exemples : remplace-les par tes chiffres.</p></div></section>';
    h += '<div class="wrap" style="padding-block:32px 72px"><div class="tools">';
    h += '<div class="tool wide"><h3>Intérêts composés</h3><p>Combien vaudra ton argent si tu investis régulièrement ?</p><div class="fields">' + field('ci-p', 'Montant de départ ($)', 1000) + field('ci-m', 'Versement mensuel ($)', 200) + field('ci-r', 'Rendement annuel (%)', 6) + field('ci-y', 'Durée (années)', 30) + '</div>';
    h += '<div class="results">' + res('Valeur finale', 'ci-out', 1) + res('Total versé', 'ci-in') + res('Intérêts gagnés', 'ci-int') + res('Doublement (règle de 72)', 'ci-72') + '</div>';
    h += '<div class="chart" id="ci-chart"></div><div class="legend"><span><i style="background:var(--bill-2)"></i>Argent versé</span><span><i style="background:var(--gold)"></i>Intérêts composés</span></div></div>';
    h += '<div class="tool"><h3>Budget 50 / 30 / 20</h3><p>Répartition conseillée de ton revenu net mensuel.</p><div class="fields">' + field('b-inc', 'Revenu net mensuel ($)', 3200) + '</div><div class="results">' + res('Besoins (50 %)', 'b-50') + res('Envies (30 %)', 'b-30') + res('Épargne (20 %)', 'b-20', 1) + '</div></div>';
    h += '<div class="tool"><h3>Remboursement de dette</h3><p>Combien de temps et combien d’intérêts pour rembourser ?</p><div class="fields">' + field('d-bal', 'Solde ($)', 5000) + field('d-r', 'Taux annuel (%)', 20) + field('d-pay', 'Paiement mensuel ($)', 200) + '</div><div class="results">' + res('Durée', 'd-n', 1) + res('Intérêts payés', 'd-int') + '</div></div>';
    h += '<div class="tool"><h3>Liberté financière</h3><p>Ton chiffre « liberté » et le temps pour l’atteindre (en dollars d’aujourd’hui).</p><div class="fields">' + field('f-exp', 'Dépenses annuelles ($)', 40000) + field('f-wr', 'Taux de retrait (%)', 4) + field('f-cur', 'Déjà investi ($)', 20000) + field('f-sav', 'Épargne annuelle ($)', 15000) + field('f-r', 'Rendement réel (%)', 5) + '</div><div class="results">' + res('Objectif', 'f-goal', 1) + res('Années restantes', 'f-yrs') + '</div></div>';
    h += '<div class="tool"><h3>Impact des frais</h3><p>Compare deux fonds avec des frais différents.</p><div class="fields">' + field('x-amt', 'Montant ($)', 100000) + field('x-r', 'Rendement brut (%)', 7) + field('x-y', 'Années', 30) + field('x-a', 'Frais fonds A (%)', 0.2) + field('x-b', 'Frais fonds B (%)', 2) + '</div><div class="results">' + res('Fonds A', 'x-oa', 1) + res('Fonds B', 'x-ob') + res('Différence', 'x-diff') + '</div></div>';
    h += '</div><p class="small" style="margin-top:20px">Calculs théoriques à rendement constant. Les marchés réels fluctuent ; ces résultats ne sont pas une prévision.</p></div>';
    app.innerHTML = h;
    app.querySelectorAll('.tool input').forEach(function (inp) { inp.addEventListener('input', calcAll); });
    calcAll();
  }
  function v(id) { var n = parseFloat(document.getElementById(id).value); return isFinite(n) ? n : 0; }
  function set(id, s) { document.getElementById(id).textContent = s; }
  function calcAll() {
    // Intérêts composés (capitalisation mensuelle)
    var p = v('ci-p'), m = v('ci-m'), r = v('ci-r') / 100 / 12, y = Math.max(0, Math.min(80, Math.round(v('ci-y'))));
    var bal = p, paid = p, pts = [{ y: 0, paid: p, bal: p }];
    for (var i = 1; i <= y * 12; i++) { bal = bal * (1 + r) + m; paid += m; if (i % 12 === 0) pts.push({ y: i / 12, paid: paid, bal: bal }); }
    set('ci-out', money(bal)); set('ci-in', money(paid)); set('ci-int', money(bal - paid));
    set('ci-72', v('ci-r') > 0 ? '≈ ' + fmt2.format(72 / v('ci-r')) + ' ans' : '—');
    drawChart(pts);
    // Budget
    var inc = v('b-inc'); set('b-50', money(inc * .5)); set('b-30', money(inc * .3)); set('b-20', money(inc * .2));
    // Dette
    var b = v('d-bal'), dr = v('d-r') / 100 / 12, pay = v('d-pay'), n = 0, ints = 0;
    if (pay <= b * dr) { set('d-n', 'Jamais'); set('d-int', 'Paiement trop bas'); }
    else { while (b > 0.005 && n < 1200) { var it = b * dr; ints += it; b = b + it - pay; n++; } set('d-n', Math.floor(n / 12) + ' an(s) ' + (n % 12) + ' mois'); set('d-int', money(ints)); }
    // Liberté
    var goal = v('f-wr') > 0 ? v('f-exp') / (v('f-wr') / 100) : Infinity, cur = v('f-cur'), sav = v('f-sav'), fr = v('f-r') / 100, yrs = 0;
    set('f-goal', money(goal));
    while (cur < goal && yrs < 100) { cur = cur * (1 + fr) + sav; yrs++; }
    set('f-yrs', yrs >= 100 ? 'Plus de 100' : yrs + ' ans');
    // Frais
    var a = v('x-amt'), xr = v('x-r'), xy = v('x-y');
    var oa = a * Math.pow(1 + (xr - v('x-a')) / 100, xy), ob = a * Math.pow(1 + (xr - v('x-b')) / 100, xy);
    set('x-oa', money(oa)); set('x-ob', money(ob)); set('x-diff', money(oa - ob));
  }
  function niceStep(raw) { var e = Math.pow(10, Math.floor(Math.log10(raw || 1))); var f = raw / e; return (f <= 1 ? 1 : f <= 2 ? 2 : f <= 2.5 ? 2.5 : f <= 5 ? 5 : 10) * e; }
  function drawChart(pts) {
    var W = 720, H = 260, L = 64, R = 12, Tp = 12, B = 30;
    var top = Math.max(1, Math.max.apply(null, pts.map(function (d) { return d.bal; })));
    var tick = niceStep(top / 4), nT = Math.ceil(top / tick), maxV = tick * nT;
    var maxY = pts[pts.length - 1].y || 1;
    function x(yv) { return L + (W - L - R) * (yv / maxY); }
    function yy(val) { return Tp + (H - Tp - B) * (1 - val / maxV); }
    var s = '<svg viewBox="0 0 ' + W + ' ' + H + '" role="img" aria-label="Croissance du capital par année">';
    for (var g = 0; g <= nT; g++) {
      var gv = tick * g; s += '<line class="grid" x1="' + L + '" x2="' + (W - R) + '" y1="' + yy(gv) + '" y2="' + yy(gv) + '"/>';
      s += '<text class="ax" x="' + (L - 8) + '" y="' + (yy(gv) + 4) + '" text-anchor="end">' + (gv >= 1e6 ? fmt2.format(gv / 1e6) + ' M' : fmt2.format(gv / 1000) + ' k') + '</text>';
    }
    var step = maxY > 40 ? 10 : maxY > 20 ? 5 : maxY > 8 ? 2 : 1;
    for (var t = 0; t <= maxY; t += step) s += '<text class="ax" x="' + x(t) + '" y="' + (H - 10) + '" text-anchor="middle">' + t + ' a</text>';
    function area(key) {
      var d = 'M' + x(0) + ' ' + yy(0);
      pts.forEach(function (p) { d += ' L' + x(p.y) + ' ' + yy(p[key]); });
      return d + ' L' + x(maxY) + ' ' + yy(0) + ' Z';
    }
    s += '<path d="' + area('bal') + '" fill="var(--gold)" fill-opacity=".85"/>';
    s += '<path d="' + area('paid') + '" fill="var(--bill-2)"/>';
    var last = pts[pts.length - 1];
    s += '<circle cx="' + x(last.y) + '" cy="' + yy(last.bal) + '" r="4" fill="var(--mint)" stroke="var(--surface)" stroke-width="2"/>';
    s += '</svg>';
    document.getElementById('ci-chart').innerHTML = s;
  }

  /* ---------- Lexique et sources ---------- */
  function glossaryPage() {
    var h = '<section class="t-hero"><div class="wrap"><div class="crumbs"><a href="#accueil">Accueil</a> / Lexique</div><div class="n">' + JI.glossary.length + ' définitions</div><h1>Lexique</h1><p>Les mots de la finance, traduits en langage normal.</p></div></section>';
    h += '<div class="wrap" style="padding-block:32px 72px"><div class="toolbar" style="margin-bottom:12px"><input class="search" id="glossSearch" type="search" placeholder="Chercher un mot…" aria-label="Chercher un mot"></div><dl class="gloss" id="glossList"></dl></div>';
    app.innerHTML = h;
    function render(q) {
      q = norm(q);
      document.getElementById('glossList').innerHTML = JI.glossary.slice().sort(function (a, b) { return a[0].localeCompare(b[0], 'fr'); })
        .filter(function (g) { return !q || norm(g[0] + ' ' + g[1]).indexOf(q) >= 0; })
        .map(function (g) { return '<div><dt>' + g[0] + '</dt><dd>' + g[1] + '</dd></div>'; }).join('') || '<div><dt>Aucun résultat</dt><dd>Essaie un autre mot.</dd></div>';
    }
    document.getElementById('glossSearch').addEventListener('input', function () { render(this.value); });
    render('');
  }
  function sourcesPage() {
    var seen = {}, list = [];
    T.forEach(function (t) { t.sources.forEach(function (s) { if (!seen[s.url + s.label]) { seen[s.url + s.label] = 1; list.push(s); } }); });
    list.sort(function (a, b) { return a.label.localeCompare(b.label, 'fr'); });
    var h = '<section class="t-hero"><div class="wrap"><div class="crumbs"><a href="#accueil">Accueil</a> / Sources</div><div class="n">' + list.length + ' références</div><h1>Sources</h1><p>Le contenu de J’investis s’appuie sur des organismes officiels (autorités des marchés financiers, agences gouvernementales, banques centrales) et sur la recherche publiée. Voici toutes les références utilisées.</p></div></section>';
    h += '<div class="wrap" style="padding-block:32px 72px"><ol class="src-list">';
    list.forEach(function (s) { h += '<li><a href="' + s.url + '" target="_blank" rel="noopener">' + s.label + '</a></li>'; });
    h += '</ol></div>';
    app.innerHTML = h;
  }

  /* ---------- Guilloché (motif de billet de banque) ---------- */
  function drawGuilloche() {
    var c = document.getElementById('guilloche'); if (!c) return;
    var r = c.getBoundingClientRect(), dpr = Math.min(2, window.devicePixelRatio || 1);
    c.width = r.width * dpr; c.height = r.height * dpr;
    var ctx = c.getContext('2d'); ctx.scale(dpr, dpr);
    var cs = getComputedStyle(root), gold = cs.getPropertyValue('--gold').trim(), mint = cs.getPropertyValue('--mint').trim();
    var cx = r.width * 0.82, cy = r.height * 0.5, base = Math.max(r.height, 320) * 0.62;
    function rosette(R, rr, d, color, w) {
      ctx.beginPath(); ctx.strokeStyle = color; ctx.lineWidth = w; ctx.globalAlpha = .55;
      for (var t = 0; t <= Math.PI * 2 * rr / gcd(R, rr) + 0.01; t += 0.01) {
        var x = (R - rr) * Math.cos(t) + d * Math.cos((R - rr) / rr * t);
        var y = (R - rr) * Math.sin(t) - d * Math.sin((R - rr) / rr * t);
        var k = base / (R - rr + d);
        if (t === 0) ctx.moveTo(cx + x * k, cy + y * k); else ctx.lineTo(cx + x * k, cy + y * k);
      }
      ctx.stroke();
    }
    function gcd(a, b) { return b ? gcd(b, a % b) : a; }
    rosette(96, 36, 48, gold, .6);
    rosette(80, 30, 40, mint, .5);
    ctx.globalAlpha = .35; ctx.strokeStyle = gold; ctx.lineWidth = .5;
    for (var i = 0; i < 6; i++) { ctx.beginPath(); for (var x = 0; x <= r.width; x += 4) { var yv = r.height * (0.15 + i * 0.13) + Math.sin(x / 38 + i) * 8 + Math.sin(x / 11 + i * 2) * 2; if (x === 0) ctx.moveTo(x, yv); else ctx.lineTo(x, yv); } ctx.stroke(); }
    ctx.globalAlpha = 1;
  }
  window.addEventListener('resize', function () { clearTimeout(drawGuilloche.t); drawGuilloche.t = setTimeout(drawGuilloche, 150); });

  /* ---------- Routeur ---------- */
  function route() {
    var hsh = location.hash.replace(/^#/, '') || 'accueil';
    spyHandler = null;
    nav.classList.remove('open');
    var key = 'accueil';
    if (hsh === 'accueil' || hsh === '' || hsh === 'tous') { home(); if (hsh === 'tous') { var el = document.getElementById('tous'); if (el) el.scrollIntoView(); } else scrollTo(0, 0); key = hsh === 'tous' ? 'tous' : 'accueil'; }
    else if (hsh.indexOf('sujet-') === 0 && byId(hsh.slice(6))) { topicPage(byId(hsh.slice(6))); scrollTo(0, 0); key = 'tous'; }
    else if (hsh === 'exercices' || hsh.indexOf('exercices-') === 0) { exercisesPage(byId(hsh.slice(10)) ? hsh.slice(10) : (hsh === 'exercices' ? 'tous' : null)); scrollTo(0, 0); key = 'exercices'; }
    else if (hsh === 'outils') { toolsPage(); scrollTo(0, 0); key = 'outils'; }
    else if (hsh === 'lexique') { glossaryPage(); scrollTo(0, 0); key = 'lexique'; }
    else if (hsh === 'sources') { sourcesPage(); scrollTo(0, 0); key = 'sources'; }
    else { home(); scrollTo(0, 0); }
    nav.querySelectorAll('a').forEach(function (a) { a.classList.toggle('on', a.getAttribute('href') === '#' + key); });
    var t = hsh.indexOf('sujet-') === 0 && byId(hsh.slice(6));
    document.title = t ? t.title + ' · J’investis' : 'J’investis';
    bar.style.width = '0';
  }
  window.addEventListener('hashchange', route);
  route();
})();
