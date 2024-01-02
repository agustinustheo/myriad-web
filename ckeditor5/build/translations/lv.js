(function (t) {
  const a = (t['lv'] = t['lv'] || {});
  a.dictionary = Object.assign(a.dictionary || {}, {
    '%0 of %1': '%0 no %1',
    Accept: 'Apstiprināt',
    Aquamarine: 'Akvamarīns',
    Black: 'Melns',
    Blue: 'Zils',
    Cancel: 'Atcelt',
    Clear: 'Notīrīt',
    'Click to edit block': 'Noklikšķiniet, lai rediģētu sadaļu',
    'Dim grey': 'Blāvi pelēks',
    'Drag to move': 'Velciet, lai pārvietotu',
    'Dropdown toolbar': 'Papildus izvēlnes rīkjosla',
    'Edit block': 'Labot bloku',
    'Editor block content toolbar': 'Rediģēšanas bloka satura rīkjosla',
    'Editor contextual toolbar': 'Redaktora konteksta rīkjosla',
    'Editor editing area: %0': 'Redaktora rediģēšanas zona: %0',
    'Editor toolbar': 'Redaktora rīkjosla',
    Green: 'Zaļš',
    Grey: 'Pelēks',
    HEX: 'HEX Krāsu kods',
    'Insert paragraph after block': 'Ievietot paragrāfu aiz bloka',
    'Insert paragraph before block': 'Ievietot paragrāfu pirms bloka',
    'Light blue': 'Gaiši zils',
    'Light green': 'Gaiši zaļš',
    'Light grey': 'Gaiši pelēks',
    Next: 'Nākamā',
    'No results found': 'Nekas nav atrasts',
    'No searchable items': 'Nav meklējamu vienumu',
    Orange: 'Oranžs',
    'Press Enter to type after or press Shift + Enter to type before the widget':
      'Nospiediet taustiņu Enter, lai rakstītu aiz logrīka, vai nospiediet taustiņu Shift + Enter, lai rakstītu pirms logrīka',
    Previous: 'Iepriekšējā',
    Purple: 'Violets',
    Red: 'Sarkans',
    Redo: 'Uz priekšu',
    'Rich Text Editor': 'Bagātinātais Teksta Redaktors',
    'Select all': 'Izvēlēties visu',
    'Show more items': 'Parādīt vairāk vienumus',
    Turquoise: 'Tirkīza',
    Undo: 'Atsaukt',
    White: 'Balts',
    'Widget toolbar': 'Sīkrīku rīkjosla',
    Yellow: 'Dzeltens',
  });
  a.getPluralForm = function (t) {
    return t % 10 == 1 && t % 100 != 11 ? 0 : t != 0 ? 1 : 2;
  };
})(window.CKEDITOR_TRANSLATIONS || (window.CKEDITOR_TRANSLATIONS = {}));
