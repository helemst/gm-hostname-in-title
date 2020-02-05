// ==UserScript==
// @name        Hostname in Title
// @namespace   https://github.com/helemst
// @description Adds the current hostname to the document's title
// @author      Terry Helems
// @version     1.2020.2.4
// @grant       none
// @run-at      document-idle
// ==/UserScript==

(() => {
  function updateTitle() {
    var suffix = ' (' + location.hostname + ')';
    var title = document.title;

    if (!title.endsWith(suffix)) {
      console.log('Greasemonkey: Updating title to include host');
      document.title += suffix;
    }
  }

  new MutationObserver(() => updateTitle())
    .observe(
      document.querySelector('title'),
      {
        characterData: true,
        childList: true,
        subtree: true
      }
    );

  updateTitle();

})();