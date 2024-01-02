(function (a) {
  const e = (a['hr'] = a['hr'] || {});
  e.dictionary = Object.assign(e.dictionary || {}, {
    '%0 of %1': '%0 od %1',
    Accept: 'Prihvati',
    Aquamarine: 'Akvamarin',
    Black: 'Crna',
    Blue: 'Plava',
    Cancel: 'Poništi',
    Clear: 'Obriši',
    'Click to edit block': '',
    'Dim grey': 'Tamnosiva',
    'Drag to move': '',
    'Dropdown toolbar': 'Traka padajućeg izbornika',
    'Edit block': 'Uredi blok',
    'Editor block content toolbar': 'Alatna traka sadržaja uređivača blokova',
    'Editor contextual toolbar': 'Kontekstualna alatna traka uređivača',
    'Editor editing area: %0': 'Područje Editora: %0',
    'Editor toolbar': 'Traka uređivača',
    Green: 'Zelena',
    Grey: 'Siva',
    HEX: '',
    'Insert paragraph after block': 'Umetni odlomak poslije bloka',
    'Insert paragraph before block': 'Umetni odlomak prije bloka',
    'Light blue': 'Svijetloplava',
    'Light green': 'Svijetlozelena',
    'Light grey': 'Svijetlosiva',
    Next: 'Sljedeći',
    'No results found': '',
    'No searchable items': '',
    Orange: 'Narančasta',
    'Press Enter to type after or press Shift + Enter to type before the widget':
      'Pritisnite Enter za upisivanje nakon ili pritisnite Shift + Enter za upisivanje prije widgeta',
    Previous: 'Prethodni',
    Purple: 'Ljubičasta',
    Red: 'Crvena',
    Redo: 'Ponovi',
    'Rich Text Editor': 'Rich Text Editor',
    'Select all': 'Odaberi sve',
    'Show more items': 'Prikaži više stavaka',
    Turquoise: 'Tirkizna',
    Undo: 'Poništi',
    White: 'Bijela',
    'Widget toolbar': 'Traka sa spravicama',
    Yellow: 'Žuta',
  });
  e.getPluralForm = function (a) {
    return a % 10 == 1 && a % 100 != 11
      ? 0
      : a % 10 >= 2 && a % 10 <= 4 && (a % 100 < 10 || a % 100 >= 20)
      ? 1
      : 2;
  };
})(window.CKEDITOR_TRANSLATIONS || (window.CKEDITOR_TRANSLATIONS = {}));
