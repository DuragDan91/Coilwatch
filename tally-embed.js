// Loads the Tally embed widget script (only needed on pages with a Tally form)
(function loadTally(){
  var d = document, s = 'script', id = 'tally-js';
  if (d.getElementById(id)) { if (window.Tally) window.Tally.loadEmbeds(); return; }
  var js = d.createElement(s); js.id = id; js.src = 'https://tally.so/widgets/embed.js';
  js.onload = function(){ if (window.Tally) window.Tally.loadEmbeds(); };
  d.body.appendChild(js);
})();
