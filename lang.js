(function(){
'use strict';
var T={
// ── SHARED ──
'brand.sub':      ['Mapping your work','Mapping your work'],
'foot.tag':       ['Mapping your work','Mapping your work'],
'foot.copy':      ['\u00a9 2026 Atlas. Gebouwd voor ondernemers en teams.','\u00a9 2026 Atlas. Built for entrepreneurs and teams.'],
'foot.login':     ['Inloggen','Log in'],
'foot.register':  ['Registreren','Sign up'],
'foot.features':  ['Features','Features'],
'foot.privacy':   ['Privacybeleid','Privacy policy'],
'foot.terms':     ['Voorwaarden','Terms'],
// ── INDEX NAV ──
'nav.features':   ['Features','Features'],
'nav.how':        ['Hoe het werkt','How it works'],
'nav.pricing':    ['Prijzen','Pricing'],
'nav.login':      ['Inloggen','Log in'],
'nav.start':      ['Gratis starten','Get started free'],
// ── HERO ──
'hero.slogan':    ['Mapping your work','Mapping your work'],
'hero.line1':     ['Minder chaos.','Less chaos.'],
'hero.line2':     ['Meer overzicht.','More clarity.'],
'hero.line3':     ['Altijd.','Always.'],
'hero.sub':       ['Het planning dashboard voor ondernemers en teams die overzicht willen houden zonder gedoe. Opdrachten, klanten, kalender en AI \u2014 op \u00e9\u00e9n plek.','The planning dashboard for entrepreneurs and teams who want to stay organised without the hassle. Projects, clients, calendar and AI \u2014 in one place.'],
'hero.cta.main':  ['Gratis beginnen','Get started free'],
'hero.cta.sec':   ['Hoe het werkt','How it works'],
'hero.fine':      ['Gratis \u00b7 Geen creditcard \u00b7 Real-time samenwerken','Free \u00b7 No credit card \u00b7 Real-time collaboration'],
// ── PREVIEW ──
'prev.date':      ['Maandag 8 juni','Monday, June 8'],
'prev.title':     ['Alle opdrachten','All projects'],
'prev.btn':       ['+ Nieuw','+ New'],
'prev.s1':        ['Alles op schema','All on track'],
'prev.s2':        ['2 deadlines deze week','2 deadlines this week'],
'stat.o.l':       ['Open','Open'],   'stat.o.h':['niet gestart','not started'],
'stat.b.l':       ['Bezig','In progress'], 'stat.b.h':['in uitvoering','in progress'],
'stat.r.l':       ['Review','Review'], 'stat.r.h':['wacht op goedkeuring','awaiting approval'],
'stat.k.l':       ['Klaar','Done'],  'stat.k.h':['gepubliceerd','published'],
'c1.s':['Bezig','In progress'],'c1.p':['Hoog','High'],
'c2.s':['Review','Review'],    'c2.p':['Hoog','High'],
'c3.s':['Open','Open'],        'c3.p':['Middel','Medium'],
// ── STRIP ──
'strip.rt':       ['Real-time samenwerken','Real-time collaboration'],
'strip.cl':       ['Klantendossiers','Client files'],
'strip.ai':       ['AI-assistent','AI assistant'],
'strip.ca':       ['Deadline kalender','Deadline calendar'],
'strip.ti':       ['Tijdregistratie','Time tracking'],
// ── FEATURES ──
'feat.pre':       ['Wat Atlas biedt','What Atlas offers'],
'feat.h':         ['Gebouwd voor teams die \u00e9\u00e9kt werken','Built for teams that actually work'],
'feat.s':         ['Geen overbodige functies. Alleen wat je dagelijks nodig hebt om overzicht te houden.','No unnecessary features. Only what you need every day to stay in control.'],
'f1.t':['Opdrachten & kanban','Projects & kanban'],
'f1.d':['Houd alles bij per klant. Schakel tussen kaartweergave en kanban. Prioriteiten, deadlines en voortgang in \u00e9\u00e9n oogopslag.','Track everything per client. Switch between card view and kanban. Priorities, deadlines and progress at a glance.'],
'f2.t':['Real-time samenwerken','Real-time collaboration'],
'f2.d':['Teamleden zien wijzigingen direct. Wie er online is, wat er veranderd is \u2014 geen verwarring meer over wie wat doet.','Team members see changes instantly. Who\'s online, what changed \u2014 no more confusion about who does what.'],
'f3.t':['Klantendossiers','Client files'],
'f3.d':['Contactinfo, afspraken, do\'s en don\'ts per klant. Nieuwe medewerkers lezen zich in een minuut in zonder jou lastig te vallen.','Contact info, agreements and notes per client. New team members get up to speed in a minute without bothering you.'],
'f4.t':['AI-assistent','AI assistant'],
'f4.d':['Vraag wat er urgent is, laat taken samenvatten of vraag om advies. De AI kent je opdrachten en klanten al.','Ask what\'s urgent, summarise tasks or ask for advice. The AI already knows your projects and clients.'],
'f5.t':['Deadline kalender','Deadline calendar'],
'f5.d':['Alle deadlines in \u00e9\u00e9n maandoverzicht. Klik op een dag om direct naar de opdracht te gaan. Nooit meer verrast worden.','All deadlines in one monthly overview. Click a day to jump straight to the project. Never get caught off guard again.'],
'f6.t':['Tijdregistratie','Time tracking'],
'f6.d':['Houdt bij hoeveel tijd je per opdracht besteedt. Ideaal om te zien wat klanten werkelijk kosten.','Track how much time you spend per project. Perfect for understanding what clients truly cost.'],
// ── HOW ──
'how.pre':  ['In drie stappen','In three steps'],
'how.h':    ['Vandaag beginnen,<br>morgen overzicht','Start today,<br>overview tomorrow'],
's1.t':['Maak een werkruimte','Create a workspace'],
's1.d':['Registreer gratis en geef je werkruimte de naam van je team. In twee minuten klaar om te beginnen.','Register for free and give your workspace your team\'s name. Ready to go in two minutes.'],
's2.t':['Nodig je team uit','Invite your team'],
's2.d':['Deel de link. Teamleden registreren een eigen account en zien dezelfde werkruimte direct in real-time.','Share the link. Team members sign up and see the same workspace in real-time immediately.'],
's3.t':['Werk samen','Work together'],
's3.d':['Voeg opdrachten toe, wijs ze toe, houd voortgang bij. Atlas houdt bij wat er speelt zodat jij je hoofd leeg kunt houden.','Add projects, assign them, track progress. Atlas keeps track of everything so you can keep your head clear.'],
// ── PRICING ──
'pr.pre':   ['Prijzen','Pricing'],
'pr.h':     ['Simpel en eerlijk','Simple and fair'],
'pr.per':   ['Volledig gratis tijdens early access','Completely free during early access'],
'pr.l1':    ['Onbeperkte opdrachten & werkruimtes','Unlimited projects & workspaces'],
'pr.l2':    ['Onbeperkte teamleden','Unlimited team members'],
'pr.l3':    ['Klantendossiers','Client files'],
'pr.l4':    ['Kalender & tijdregistratie','Calendar & time tracking'],
'pr.l5':    ['Real-time samenwerken','Real-time collaboration'],
'pr.l6':    ['AI-assistent (eigen sleutel)','AI assistant (own key)'],
'pr.btn':   ['Gratis beginnen','Get started free'],
'pr.note':  ['Geen creditcard. Geen verborgen kosten.','No credit card. No hidden fees.'],
// ── CTA ──
'cta.h':    ['Klaar om de chaos<br>achter je te laten?','Ready to leave the<br>chaos behind?'],
'cta.s':    ['Maak een gratis werkruimte aan en heb binnen vijf minuten overzicht over al je opdrachten.','Create a free workspace and have an overview of all your projects within five minutes.'],
'cta.btn':  ['Gratis account aanmaken','Create free account'],
'cta.note': ['Gratis \u00b7 Geen creditcard \u00b7 Direct beginnen','Free \u00b7 No credit card \u00b7 Start immediately'],
// ── APP AUTH ──
'a.bs':     ['Mapping your work','Mapping your work'],
'a.hl':     ['Welkom terug','Welcome back'],
'a.sl':     ['Log in op je account','Log in to your account'],
'a.hr':     ['Account aanmaken','Create account'],
'a.sr':     ['Maak een gratis account aan','Create a free account'],
'a.tl':     ['Inloggen','Log in'],
'a.tr':     ['Registreren','Sign up'],
'a.ln':     ['Naam','Name'],
'a.le':     ['E-mailadres','Email address'],
'a.lp':     ['Wachtwoord','Password'],
'a.pn':     ['Jouw naam','Your name'],
'a.pe':     ['jouw@email.nl','your@email.com'],
'a.fg':     ['Wachtwoord vergeten?','Forgot password?'],
'a.bl':     ['Inloggen','Log in'],
'a.br':     ['Account aanmaken','Create account'],
'a.ld':     ['Even geduld\u2026','One moment\u2026'],
// workspace
'ws.h':     ['Kies een werkruimte','Choose a workspace'],
'ws.s':     ['Of maak een nieuwe aan','Or create a new one'],
'ws.n':     ['Nieuwe werkruimte','New workspace'],
'ws.ch':    ['Nieuwe werkruimte','New workspace'],
'ws.cs':    ['Geef je team of bedrijf een naam','Give your team or company a name'],
'ws.cp':    ['Naam van je team of bedrijf','Name of your team or company'],
'ws.cb':    ['Aanmaken','Create'],
'ws.bk':    ['Terug','Back'],
// forgot
'fp.h':     ['Wachtwoord vergeten','Forgot password'],
'fp.s':     ['Vul je e-mailadres in. We sturen je een resetlink.','Enter your email. We\'ll send you a reset link.'],
'fp.b':     ['Resetlink versturen','Send reset link'],
'fp.ld':    ['Even geduld\u2026','One moment\u2026'],
'fp.bk':    ['<i class="ti ti-arrow-left" style="font-size:13px"></i> Terug naar inloggen','<i class="ti ti-arrow-left" style="font-size:13px"></i> Back to login'],
'fp.ok':    ['<i class="ti ti-circle-check" style="font-size:13px;vertical-align:-2px;margin-right:4px"></i>Resetlink verstuurd! Controleer je inbox (en spamfolder).','<i class="ti ti-circle-check" style="font-size:13px;vertical-align:-2px;margin-right:4px"></i>Reset link sent! Check your inbox (and spam folder).'],
// app nav
'n.pr':     ['Opdrachten','Projects'],
'n.cl':     ['Klanten','Clients'],
'n.ca':     ['Kalender','Calendar'],
'n.tm':     ['Team','Team'],
'n.tu':     ['Tutorial','Tutorial'],
'n.ai':     ['AI-assistent','AI assistant'],
// filter + sort
'pi.al':    ['Alle','All'],
'pi.id':    ['Idee','Idea'],
'pi.wi':    ['In uitvoering','In progress'],
'pi.rv':    ['Review','Review'],
'pi.dn':    ['Gepubliceerd','Published'],
'pi.pa':    ['Gepauzeerd','Paused'],
'so.nw':    ['Nieuwste eerst','Newest first'],
'so.od':    ['Oudste eerst','Oldest first'],
'so.dl':    ['Deadline','Deadline'],
'so.pr':    ['Prioriteit','Priority'],
'so.vo':    ['Voortgang','Progress'],
'so.ph':    ['Zoek\u2026','Search\u2026'],
'vw.ca':    ['Kaarten','Cards'],
'vw.kb':    ['Kanban','Kanban'],
// ── ERRORS ──
'e.fill':   ['Vul je e-mail en wachtwoord in.','Please fill in your email and password.'],
'e.name':   ['Vul je naam in.','Please fill in your name.'],
'e.email':  ['Vul je e-mailadres in.','Please fill in your email address.'],
'e.inuse':  ['Dit e-mailadres is al in gebruik.','This email address is already in use.'],
'e.inv':    ['Ongeldig e-mailadres.','Invalid email address.'],
'e.weak':   ['Wachtwoord moet minimaal 6 tekens zijn.','Password must be at least 6 characters.'],
'e.nf':     ['Geen account gevonden met dit e-mailadres.','No account found with this email address.'],
'e.wp':     ['Onjuist wachtwoord.','Incorrect password.'],
'e.cred':   ['E-mail of wachtwoord klopt niet.','Email or password is incorrect.'],
'e.many':   ['Te veel pogingen. Probeer het later opnieuw.','Too many attempts. Please try again later.'],
'e.gen':    ['Er ging iets mis. Probeer het opnieuw.','Something went wrong. Please try again.'],
// ── 404 ──
'p4.t':     ['Pagina niet gevonden','Page not found'],
'p4.s':     ['Deze pagina bestaat niet of is verplaatst. Misschien zat er een typfout in het adres, of is de link verlopen.','This page doesn\'t exist or has been moved. There may be a typo in the address, or the link has expired.'],
'p4.h':     ['Naar de homepage','To the homepage'],
'p4.d':     ['Naar het dashboard','To the dashboard'],
// ── PRIVACY ──
'pv.ey':    ['Juridisch','Legal'],
'pv.ti':    ['Privacybeleid & Voorwaarden','Privacy Policy & Terms'],
'pv.su':    ['Hoe Atlas omgaat met je gegevens en wat de spelregels zijn voor het gebruik van het platform.','How Atlas handles your data and what the rules are for using the platform.'],
'pv.up':    ['Laatst bijgewerkt: juni 2026','Last updated: June 2026'],
'pv.bk':    ['Terug naar home','Back to home'],
'tc.1':['1. Privacybeleid','1. Privacy policy'],
'tc.2':['2. Welke gegevens we verzamelen','2. What data we collect'],
'tc.3':['3. Hoe we gegevens gebruiken','3. How we use data'],
'tc.4':['4. Opslag en beveiliging','4. Storage and security'],
'tc.5':['5. Jouw rechten','5. Your rights'],
'tc.6':['6. Algemene voorwaarden','6. Terms of use'],
'tc.7':['7. Gebruik van het platform','7. Using the platform'],
'tc.8':['8. Aansprakelijkheid','8. Liability'],
'tc.9':['9. Contact','9. Contact'],
'pv.h1':['1. Privacybeleid','1. Privacy Policy'],
'pv.h2':['2. Welke gegevens we verzamelen','2. What Data We Collect'],
'pv.h3':['3. Hoe we gegevens gebruiken','3. How We Use Data'],
'pv.h4':['4. Opslag en beveiliging','4. Storage and Security'],
'pv.h5':['5. Jouw rechten','5. Your Rights'],
'pv.h6':['6. Algemene voorwaarden','6. Terms of Use'],
'pv.h7':['7. Gebruik van het platform','7. Using the Platform'],
'pv.h8':['8. Aansprakelijkheid','8. Liability'],
'pv.h9':['9. Contact','9. Contact'],
'pv.1a':['Atlas respecteert de privacy van alle gebruikers. Dit privacybeleid beschrijft welke gegevens we verzamelen, hoe we die gebruiken en welke rechten je hebt als gebruiker. Door Atlas te gebruiken ga je akkoord met dit beleid.','Atlas respects the privacy of all users. This privacy policy describes what data we collect, how we use it and what rights you have as a user. By using Atlas you agree to this policy.'],
'pv.1b':['<strong>Samenvatting:</strong> We verzamelen alleen wat noodzakelijk is om het platform te laten werken. We verkopen je gegevens nooit aan derden en we gebruiken ze niet voor advertentiedoeleinden.','<strong>Summary:</strong> We only collect what is necessary to run the platform. We never sell your data to third parties and do not use it for advertising purposes.'],
'pv.2a':['Bij het aanmaken van een account en gebruik van Atlas verzamelen we de volgende gegevens:','When creating an account and using Atlas, we collect the following data:'],
'pv.2l1':['<strong>Accountgegevens:</strong> naam en e-mailadres die je invult bij registratie.','<strong>Account data:</strong> name and email address entered at registration.'],
'pv.2l2':['<strong>Werkruimtegegevens:</strong> de naam van je werkruimte en de leden die je uitnodigt.','<strong>Workspace data:</strong> the name of your workspace and the members you invite.'],
'pv.2l3':['<strong>Projectgegevens:</strong> opdrachten, taken, klantendossiers, deadlines en overige inhoud die je aanmaakt binnen Atlas.','<strong>Project data:</strong> projects, tasks, client files, deadlines and other content you create within Atlas.'],
'pv.2l4':['<strong>Technische gegevens:</strong> tijdstempels van acties voor synchronisatie en sortering.','<strong>Technical data:</strong> timestamps of actions for synchronisation and sorting.'],
'pv.2b':['We verzamelen <strong>geen</strong> betaalgegevens (Atlas is gratis), tracking cookies van derden, of persoonsgegevens van jouw klanten tenzij jij deze zelf invoert.','We do <strong>not</strong> collect payment data (Atlas is free), third-party tracking cookies, or personal data of your clients unless you enter this yourself.'],
'pv.3a':['De verzamelde gegevens worden uitsluitend gebruikt voor:','The collected data is used exclusively for:'],
'pv.3l1':['Het leveren en synchroniseren van de Atlas-dienst aan jou en je teamleden.','Delivering and synchronising the Atlas service to you and your team members.'],
'pv.3l2':['Het tonen van de juiste werkruimte na inloggen.','Showing the correct workspace after login.'],
'pv.3l3':['Technische communicatie, zoals een e-mail bij het resetten van je wachtwoord.','Technical communications, such as a password reset email.'],
'pv.3l4':['Het verbeteren van de dienst op basis van geanonimiseerd gebruik (geen persoonsgegevens).','Improving the service based on anonymised usage (no personal data).'],
'pv.3b':['Jouw projectinhoud wordt nooit gebruikt voor trainingen van AI-modellen of gedeeld met andere organisaties.','Your project content is never used for AI model training or shared with other organisations.'],
'pv.4a':['Atlas maakt gebruik van <strong>Google Firebase</strong> voor authenticatie en gegevensopslag. Firebase is ISO 27001-gecertificeerd en voldoet aan de AVG (GDPR). Gegevens worden opgeslagen in beveiligde datacenters.','Atlas uses <strong>Google Firebase</strong> for authentication and data storage. Firebase is ISO 27001-certified and GDPR-compliant. Data is stored in secure data centres.'],
'pv.4b':['<strong>Toegangsbeveiliging:</strong> Alle gegevens in Atlas zijn beveiligd via Firebase-authenticatieregels. Alleen ingelogde gebruikers met toegang tot een werkruimte kunnen die data lezen of wijzigen.','<strong>Access security:</strong> All data in Atlas is secured via Firebase authentication rules. Only logged-in users with workspace access can read or modify that data.'],
'pv.4c':['Wachtwoorden worden nooit in leesbare vorm opgeslagen. Firebase Auth verwerkt authenticatie via versleutelde hashing.','Passwords are never stored in readable form. Firebase Auth handles authentication via encrypted hashing.'],
'pv.4d':['We bewaren gegevens zolang je account actief is. Bij verwijdering worden je gegevens op verzoek permanent gewist (zie sectie 5).','We retain data for as long as your account is active. Upon account deletion, your data will be permanently erased on request (see section 5).'],
'pv.5a':['Als gebruiker heb je op grond van de AVG de volgende rechten:','As a user you have the following rights under the GDPR:'],
'pv.5l1':['<strong>Inzage:</strong> je kunt op elk moment opvragen welke gegevens we van je hebben.','<strong>Access:</strong> you can request at any time what data we hold about you.'],
'pv.5l2':['<strong>Correctie:</strong> je naam en e-mailadres kun je aanpassen via de instellingen in Atlas.','<strong>Correction:</strong> you can update your name and email address via Atlas settings.'],
'pv.5l3':['<strong>Verwijdering:</strong> je kunt verzoeken al je gegevens permanent te laten verwijderen.','<strong>Erasure:</strong> you can request permanent deletion of all your data.'],
'pv.5l4':['<strong>Bezwaar:</strong> je kunt bezwaar maken tegen bepaalde verwerkingen van je gegevens.','<strong>Objection:</strong> you can object to certain processing of your data.'],
'pv.5l5':['<strong>Overdraagbaarheid:</strong> je kunt een kopie van je gegevens opvragen in een leesbaar formaat.','<strong>Portability:</strong> you can request a copy of your data in a readable format.'],
'pv.5b':['Voor het uitoefenen van deze rechten neem je contact op via het e-mailadres in sectie 9. We reageren binnen 30 dagen.','To exercise these rights, contact us at the email address in section 9. We respond within 30 days.'],
'pv.6a':['Deze algemene voorwaarden zijn van toepassing op het gebruik van Atlas. Door een account aan te maken en Atlas te gebruiken ga je akkoord met deze voorwaarden.','These terms of use apply to the use of Atlas. By creating an account and using Atlas, you agree to these terms.'],
'pv.6b':['Atlas is een planning dashboard voor ondernemers en teams. Het platform wordt aangeboden als SaaS en is tijdens de early-access fase gratis beschikbaar.','Atlas is a planning dashboard for entrepreneurs and teams. The platform is offered as SaaS and is free during the early-access phase.'],
'pv.7ha':['Toegestaan gebruik','Permitted use'],
'pv.7l1':['Atlas gebruiken voor zakelijke planning, projectbeheer en samenwerking.','Using Atlas for business planning, project management and collaboration.'],
'pv.7l2':['Werkruimtes aanmaken en teamleden uitnodigen.','Creating workspaces and inviting team members.'],
'pv.7l3':['Klantgegevens en projectinformatie opslaan voor intern gebruik.','Storing client data and project information for internal use.'],
'pv.7hb':['Niet-toegestaan gebruik','Prohibited use'],
'pv.7l4':['Het platform gebruiken voor illegale activiteiten of het opslaan van illegale inhoud.','Using the platform for illegal activities or storing illegal content.'],
'pv.7l5':['Proberen in te breken of de beveiliging van Atlas of Firebase te omzeilen.','Attempting to breach or circumvent the security of Atlas or Firebase.'],
'pv.7l6':['Atlas doorverkopen, herlicentiëren of als wit-label aanbieden aan derden.','Reselling, relicensing or offering Atlas as a white-label service to third parties.'],
'pv.7l7':['Geautomatiseerde scripts of bots inzetten die de infrastructuur overbelasten.','Deploying automated scripts or bots that overload the infrastructure.'],
'pv.7a':['Bij misbruik behoudt Atlas het recht een account tijdelijk te blokkeren of definitief te verwijderen.','In case of misuse, Atlas reserves the right to temporarily block or permanently delete an account.'],
'pv.7hc':['Beschikbaarheid','Availability'],
'pv.7b':['Atlas streeft naar een hoge beschikbaarheid maar geeft geen garanties over uptime, met name tijdens de early-access fase.','Atlas aims for high availability but makes no guarantees regarding uptime, particularly during the early-access phase.'],
'pv.7hd':['Wijzigingen','Changes'],
'pv.7c':['We kunnen het platform, de functies en de prijs op elk moment wijzigen. Bij ingrijpende wijzigingen communiceren we dit minstens 30 dagen van tevoren.','We may change the platform, features and pricing at any time. For significant changes, we will communicate this at least 30 days in advance.'],
'pv.8a':['Atlas is een side project in early access en wordt geleverd \u201czoals het is\u201d (as-is), zonder garanties over geschiktheid voor een specifiek doel.','Atlas is a side project in early access and is provided \u201cas is\u201d, without guarantees of suitability for a specific purpose.'],
'pv.8l1':['Atlas is niet aansprakelijk voor verlies van gegevens door technische storingen of gebruikersfouten.','Atlas is not liable for loss of data due to technical failures or user errors.'],
'pv.8l2':['Atlas is niet verantwoordelijk voor de inhoud die gebruikers invoeren in het platform.','Atlas is not responsible for content that users enter into the platform.'],
'pv.8l3':['Atlas is niet aansprakelijk voor indirecte of gevolgschade, gederfde winst of bedrijfsverlies.','Atlas is not liable for indirect or consequential damage, loss of profit or business loss.'],
'pv.8b':['Onze aansprakelijkheid is beperkt tot de waarde van de dienst die je in de twaalf maanden voorafgaand aan de schade hebt betaald (tijdens early access: \u20ac0).','Our liability is limited to the value of the service paid in the twelve months prior to the damage (during early access: \u20ac0).'],
'pv.9a':['Heb je vragen over dit privacybeleid, de voorwaarden, of wil je een van je rechten uitoefenen? Neem dan contact op:','Do you have questions about this privacy policy or terms, or do you wish to exercise one of your rights? Please contact us:'],
'pv.ct':['<strong>Atlas</strong><br>Early access project \u2014 Nederland<br>E-mail: <a href="mailto:info@atlas-app.nl">info@atlas-app.nl</a>','<strong>Atlas</strong><br>Early access project \u2014 Netherlands<br>Email: <a href="mailto:info@atlas-app.nl">info@atlas-app.nl</a>'],
'pv.9b':['Op deze voorwaarden is Nederlands recht van toepassing. Eventuele geschillen worden voorgelegd aan de bevoegde rechter in Nederland.','These terms are governed by Dutch law. Any disputes will be submitted to the competent court in the Netherlands.'],
};

var _lang='nl';
function n(){return _lang==='en'?1:0;}

function apply(lang){
  _lang=lang;
  var idx=n();
  document.querySelectorAll('[data-i18n]').forEach(function(el){
    var k=el.getAttribute('data-i18n');
    if(T[k]!==undefined)el.innerHTML=T[k][idx];
  });
  document.querySelectorAll('[data-i18n-ph]').forEach(function(el){
    var k=el.getAttribute('data-i18n-ph');
    if(T[k]!==undefined)el.placeholder=T[k][idx];
  });
  document.documentElement.lang=lang;
  document.querySelectorAll('.lang-btn').forEach(function(b){
    b.classList.toggle('active',b.getAttribute('data-lang')===lang);
  });
  window.dispatchEvent(new CustomEvent('atlas:lang',{detail:{lang:lang}}));
}

window.atlasSetLang=function(lang){
  try{localStorage.setItem('atlas-lang',lang);}catch(e){}
  apply(lang);
};

window.atlasT=function(k){return T[k]?T[k][n()]:k;};

// Inject toggle button CSS
(function(){
  var s=document.createElement('style');
  s.textContent='.lang-toggle{display:flex;align-items:center;border:1px solid var(--line2);border-radius:20px;padding:2px;gap:1px;}'
    +'.lang-toggle .lang-btn{padding:3px 9px;font-size:10px;font-weight:700;letter-spacing:.07em;border:none;background:none;border-radius:14px;cursor:pointer;color:var(--text3);transition:all .15s;font-family:inherit;line-height:1;}'
    +'.lang-toggle .lang-btn.active{background:#0c6e82;color:#fff;}';
  document.head.appendChild(s);
})();

document.addEventListener('DOMContentLoaded',function(){
  var s='nl';
  try{s=localStorage.getItem('atlas-lang')||'nl';}catch(e){}
  apply(s);
});
})();
