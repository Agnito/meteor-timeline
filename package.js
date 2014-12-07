Package.describe({
  summary: "Timeline.js by NUKnightLab packaged for Meteor",
  version: "0.1.0",
  git: "https://github.com/Agnito/meteor-timeline.git",
  name: "agnito:timeline"
});

Package.onUse(function (api, where) {
  api.versionsFrom("1.0");
  api.use('jquery', 'client');
  
  var path = Npm.require('path');

  api.addFiles('js/storyjs-embed.js', 'client');
  api.addFiles('js/timeline-min.js', 'client', {isAsset: true});
  api.addFiles('css/blank.gif', 'client', {isAsset: true});
  api.addFiles('css/fancybox_sprite.png', 'client', {isAsset: true});
  api.addFiles('css/fancybox_sprite@2x.png', 'client', {isAsset: true});
  api.addFiles('css/loading.gif', 'client', {isAsset: true});
  api.addFiles('css/loading@2x.gif', 'client', {isAsset: true});
  api.addFiles('css/timeline.css', 'client', {isAsset: true});
  api.addFiles('css/timeline.png', 'client', {isAsset: true});
  api.addFiles('css/timeline@2x.png', 'client', {isAsset: true});
  api.addFiles('css/themes/dark.css', 'client');
  api.addFiles('css/themes/timeline-dark.png', 'client', {isAsset: true});
  api.addFiles('css/themes/timeline-dark@2x.png', 'client', {isAsset: true});
  api.addFiles('css/themes/timeline-texture.png', 'client', {isAsset: true});
  api.addFiles('css/themes/font/AbrilFatface-Average.css', 'client', {isAsset: true});
  api.addFiles('css/themes/font/Arvo-PTSans.css', 'client', {isAsset: true});
  api.addFiles('css/themes/font/Bevan-PotanoSans.css', 'client', {isAsset: true});
  api.addFiles('css/themes/font/BreeSerif-OpenSans.css', 'client', {isAsset: true});
  api.addFiles('css/themes/font/DroidSerif-DroidSans.css', 'client', {isAsset: true});
  api.addFiles('css/themes/font/Georgia-Helvetica.css', 'client', {isAsset: true});
  api.addFiles('css/themes/font/Lekton-Molengo.css', 'client', {isAsset: true});
  api.addFiles('css/themes/font/Lora-Istok.css', 'client', {isAsset: true});
  api.addFiles('css/themes/font/Merriweather-NewsCycle.css', 'client', {isAsset: true});
  api.addFiles('css/themes/font/NewsCycle-Merriweather.css', 'client', {isAsset: true});
  api.addFiles('css/themes/font/NixieOne-Ledger.css', 'client', {isAsset: true});
  api.addFiles('css/themes/font/PT.css', 'client', {isAsset: true});
  api.addFiles('css/themes/font/PTSerif-PTSans.css', 'client', {isAsset: true});
  api.addFiles('css/themes/font/Pacifico-Arimo.css', 'client', {isAsset: true});
  api.addFiles('css/themes/font/PlayfairDisplay-Muli.css', 'client', {isAsset: true});
  api.addFiles('css/themes/font/PoiretOne-Molengo.css', 'client', {isAsset: true});
  api.addFiles('css/themes/font/Rancho-Gudea.css', 'client', {isAsset: true});
  api.addFiles('css/themes/font/SansitaOne-Kameron.css', 'client', {isAsset: true});
  api.addFiles('js/locale/af.js', 'client');
  api.addFiles('js/locale/ar.js', 'client');
  api.addFiles('js/locale/bg.js', 'client');
  api.addFiles('js/locale/ca.js', 'client');
  api.addFiles('js/locale/cz.js', 'client');
  api.addFiles('js/locale/da.js', 'client');
  api.addFiles('js/locale/de.js', 'client');
  api.addFiles('js/locale/el.js', 'client');
  api.addFiles('js/locale/en-24hr.js', 'client');
  api.addFiles('js/locale/en-week.js', 'client');
  api.addFiles('js/locale/en.js', 'client');
  api.addFiles('js/locale/eo.js', 'client');
  api.addFiles('js/locale/es.js', 'client');
  api.addFiles('js/locale/et.js', 'client');
  api.addFiles('js/locale/eu.js', 'client');
  api.addFiles('js/locale/fa.js', 'client');
  api.addFiles('js/locale/fi.js', 'client');
  api.addFiles('js/locale/fo.js', 'client');
  api.addFiles('js/locale/fr.js', 'client');
  api.addFiles('js/locale/gl.js', 'client');
  api.addFiles('js/locale/he.js', 'client');
  api.addFiles('js/locale/hr.js', 'client');
  api.addFiles('js/locale/hu.js', 'client');
  api.addFiles('js/locale/hy.js', 'client');
  api.addFiles('js/locale/id.js', 'client');
  api.addFiles('js/locale/is.js', 'client');
  api.addFiles('js/locale/it.js', 'client');
  api.addFiles('js/locale/ja.js', 'client');
  api.addFiles('js/locale/ka.js', 'client');
  api.addFiles('js/locale/ko.js', 'client');
  api.addFiles('js/locale/lb.js', 'client');
  api.addFiles('js/locale/lt.js', 'client');
  api.addFiles('js/locale/lv.js', 'client');
  api.addFiles('js/locale/ms.js', 'client');
  api.addFiles('js/locale/ne.js', 'client');
  api.addFiles('js/locale/nl.js', 'client');
  api.addFiles('js/locale/no.js', 'client');
  api.addFiles('js/locale/pl.js', 'client');
  api.addFiles('js/locale/pt-br.js', 'client');
  api.addFiles('js/locale/pt.js', 'client');
  api.addFiles('js/locale/rm.js', 'client');
  api.addFiles('js/locale/ro.js', 'client');
  api.addFiles('js/locale/ru.js', 'client');
  api.addFiles('js/locale/si.js', 'client');
  api.addFiles('js/locale/sk.js', 'client');
  api.addFiles('js/locale/sl.js', 'client');
  api.addFiles('js/locale/sr-cy.js', 'client');
  api.addFiles('js/locale/sr.js', 'client');
  api.addFiles('js/locale/sv.js', 'client');
  api.addFiles('js/locale/ta.js', 'client');
  api.addFiles('js/locale/te.js', 'client');
  api.addFiles('js/locale/th.js', 'client');
  api.addFiles('js/locale/tl.js', 'client');
  api.addFiles('js/locale/tr.js', 'client');
  api.addFiles('js/locale/uk.js', 'client');
  api.addFiles('js/locale/zh-cn.js', 'client');
  api.addFiles('js/locale/zh-tw.js', 'client');
});

