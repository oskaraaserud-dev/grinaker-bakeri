/* ============================================================================
   GRINAKER BAKERI – konfigurasjon

   Dette er den ENESTE fila med Grinaker-data. Alt annet (CSS, JS, generiske
   bilder) kommer fra malen i mal/ – en submodule mot bakeri-mal. Rør den ikke.

   Endrer du noe her som også står i <head> (navn, URL, adresse, åpningstider):
   åpne mal/verktoy/publiser.html i nettleseren og lim inn head-blokkene på
   nytt. Head-en må være statisk fordi Facebook ikke kjører JavaScript.

   Oppgradere til nyeste mal:  git submodule update --remote mal
   ============================================================================ */

window.BAKERI = {

  side: {
    url: 'https://oskaraaserud-dev.github.io/grinaker-bakeri/',
    sprak: 'nb',
    tittel: 'Grinaker bakeri – Bakeri og kafé i Brandbu, Hadeland',
    beskrivelse: 'Grinaker bakeri – bakeri og kafé i Brandbu på Hadeland. Nybakt bakverk, kaker og kaffe. Spis inne, eller forhåndsbestill kake og catering på nett.',

    // TRUE mens menyen inneholder PLASSHOLDERPRISER.
    // Holder menysiden utenfor Google, så ingen googler seg fram til priser
    // som ikke stemmer – på en side med bakeriets ekte navn og telefonnummer.
    // Sett til false når bakeriet har gitt oss de ekte tallene, og kjør
    // publiser.html på nytt (da kommer Meny.html tilbake i sitemap.xml).
    menyNoindex: true
  },

  bedrift: {
    navn: 'Grinaker bakeri',
    heroTittel: 'Velkommen til Grinaker bakeri',
    heroIngress: 'Bakeri og kafé midt i Brandbu på Hadeland. Nybakt bakverk, kaker og kaffe – kom innom og spis inne, eller bestill kake og catering på nett.',
    omOss: [
      'Grinaker bakeri er et lokalt bakeri og kafé i hjertet av Brandbu. Hos oss kan du sette deg ned med en kopp kaffe og noe nybakt, eller ta med deg godsaker hjem. Vi er glade i lokalsamfunnet på Hadeland – og det er tydeligvis gjensidig: gjestene våre har gitt oss **4,6 av 5 stjerner** på Google.',
      'Skal du feire noe? Vi lager kaker og catering på bestilling. Bruk skjemaet lenger ned, så tar vi kontakt.'
    ],
    aarstall: 2026,
    priceRange: '$$',
    serverer: ['Bakverk', 'Kaker', 'Kaffe'],
    omraade: 'Hadeland'
  },

  // Grinaker bruker malens standardpalett.
  farger: {
    brunMork: '#3b1f0e',
    brun: '#8B4513',
    krem: '#f5f0eb',
    gul: '#f5c842',
    gulLys: '#ffd966',
    tekstDempet: '#5a4636',
    kantlinje: '#e7dccd'
  },

  bilder: {
    // Logoen er malens generiske hvetekorn – ingen grunn til å duplisere den.
    logo: 'mal/Bilder/logo.svg',
    // Egne foto ligger i Grinakers egen Bilder/-mappe.
    hero: 'Bilder/hero.jpg',
    delingsbilde: 'Bilder/delingsbilde.png',
    delingsbildeAlt: 'Grinaker bakeri – bakeri og kafé i Brandbu'
  },

  kontakt: {
    telefon: '+47 61 33 03 29',
    telefonTel: '+4761330329',
    epost: 'grinakerbaker@gmail.com',
    adresse: {
      gate: 'Storlinna 48',
      postnr: '2760',
      sted: 'Brandbu',
      region: 'Innlandet',
      land: 'NO'
    },
    geo: { lat: 60.4202780, lng: 10.5093771 }
  },

  apningstider: {
    dager: {
      mandag:  ['09:00', '15:00'],
      tirsdag: ['09:00', '15:00'],
      onsdag:  ['09:00', '15:00'],
      torsdag: ['09:00', '16:00'],
      fredag:  ['09:00', '16:00'],
      lordag:  ['09:00', '15:00'],
      sondag:  null
    },
    note: 'Tider kan variere på helligdager – ring gjerne på forhånd.'
  },

  // Ekte produktfoto fra bakeriets Facebook-side.
  produkter: [
    {
      bilde: 'Bilder/bakverk.jpg',
      alt: 'Ferskt bakverk i disken hos Grinaker bakeri',
      bredde: 960, hoyde: 960,
      tittel: 'Bakverk',
      tekst: 'Nybakt brød, boller, snurrer og wienerbrød – ferskt fra disken hver dag.'
    },
    {
      bilde: 'Bilder/kake.jpg',
      alt: 'Hvit sjokoladekake pyntet med roser fra Grinaker bakeri',
      bredde: 1999, hoyde: 1111,
      tittel: 'Kaker til fest',
      tekst: 'Bursdags- og festkaker etter ønske. Bestilles på forhånd.'
    },
    {
      bilde: 'Bilder/smultringer.jpg',
      alt: 'Nystekte smultringer på fat hos Grinaker bakeri',
      bredde: 1139, hoyde: 1600,
      tittel: 'Smultringer',
      tekst: 'Nystekte smultringer, en ekte klassiker rett fra disken.'
    }
  ],

  /* --- MENY ---------------------------------------------------------------
     ┌───────────────────────────────────────────────────────────────────────┐
     │  OBS: MIDLERTIDIGE PLASSHOLDERVARER OG -PRISER – IKKE EKTE.           │
     │  Både varelinjene og prisene under er funnet på til utkastet, kun     │
     │  satt til realistiske nivåer for å vise hvordan menyen ser ut.        │
     │                                                                       │
     │  MÅ erstattes med Grinaker bakeris faktiske utvalg og priser før      │
     │  siden tas i bruk som bakeriets offisielle nettside. Ellers møter     │
     │  kunder noe helt annet i disken enn det som står her.                 │
     │                                                                       │
     │  Så lenge dette står, skal side.menyNoindex være true (se øverst).    │
     └───────────────────────────────────────────────────────────────────────┘ */
  meny: {
    ingress: 'Alt bakes fra bunnen hver dag. Utvalget varierer med sesong og dag – her er det vi vanligvis har inne.',
    grupper: [
      {
        tittel: 'Brød og rundstykker',
        varer: [
          { navn: 'Rundstykker', beskrivelse: 'Grove eller fine, rett fra ovnen.', pris: '25 kr' },
          { navn: 'Grovbrød',    beskrivelse: 'Helt brød, bakt samme morgen.',     pris: '55 kr' },
          { navn: 'Loff',        beskrivelse: 'Lys og luftig.',                    pris: '49 kr' }
        ]
      },
      {
        tittel: 'Søtt bakverk',
        varer: [
          { navn: 'Kanelsnurr', beskrivelse: 'Nybakt snurr med smør og kanel.', pris: '42 kr' },
          { navn: 'Skolebrød',  beskrivelse: 'Vaniljekrem og kokos.',           pris: '42 kr' },
          { navn: 'Wienerbrød', beskrivelse: 'Sprøtt og smørbakt.',             pris: '45 kr' },
          { navn: 'Smultring',  beskrivelse: 'Nystekt, en ekte klassiker.',     pris: '30 kr' }
        ]
      },
      {
        tittel: 'Kaker',
        varer: [
          { navn: 'Bløtkake',              beskrivelse: 'Klassisk bløtkake med krem og bær – per stykke.', pris: '69 kr' },
          { navn: 'Sjokoladekake',         beskrivelse: 'Saftig, med sjokoladeglasur – per stykke.',       pris: '65 kr' },
          { navn: 'Hel bløtkake til fest', beskrivelse: 'Bestilles på forhånd. Pris etter størrelse og pynt.', pris: 'fra 595 kr' }
        ]
      },
      {
        tittel: 'Kafé og drikke',
        varer: [
          { navn: 'Kaffe',       beskrivelse: 'Traktet kaffe. Påfyll er gratis når du sitter inne.', pris: '39 kr' },
          { navn: 'Kaffe latte', beskrivelse: 'Espresso med dampet melk.',                           pris: '52 kr' },
          { navn: 'Cappuccino',  beskrivelse: 'Espresso med melkeskum.',                             pris: '49 kr' },
          { navn: 'Te',          beskrivelse: 'Utvalg av sorter.',                                   pris: '35 kr' }
        ]
      }
    ],
    paaBestilling: [
      { tittel: 'Kaker til fest', tekst: 'Bursdags- og festkaker etter ønske – si fra hva du vil ha, så lager vi den.' },
      { tittel: 'Catering',       tekst: 'Skal du feire noe? Vi lager catering på bestilling, og tar kontakt for å avtale detaljene.' }
    ],
    note: 'Prisene gjelder over disk og kan endre seg. Fullt utvalg får du i butikken – ring gjerne på {telefon} hvis du lurer på om vi har noe bestemt inne.'
  },

  bestilling: {
    formspreeId: 'mqerzeoj',
    emneFelt: 'Ny bestilling fra nettsiden – Grinaker bakeri',
    takkSide: 'takk.html',
    typer: ['Kake', 'Catering', 'Annet']
  },

  sosialt: [
    { navn: 'Facebook', url: 'https://www.facebook.com/p/Grinaker-Bakeri-As-100084157203045/' }
  ]

};
