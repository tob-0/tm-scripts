// ==UserScript==
// @name            Atlantis Bot Muter
// @namespace
// @version         1.0.1
// @description     Mute that damn bot
// @author          toto
// @run-at          document-end
// @match           https://gitlab.polyconseil.fr/fdj/si-paiement/-/merge_requests/*
// @updateURL https://raw.githubusercontent.com/tob-0/tm-scripts/master/src/atlantis-bot-muter.js
// @downloadURL https://raw.githubusercontent.com/tob-0/tm-scripts/master/src/atlantis-bot-muter.js
// ==/UserScript==
"use strict";
console.log("Atlantis Bot Muter loaded");
const GITLAB_API_URL = "https://gitlab.polyconseil.fr/api/v4";
const GITLAB_PROJECT_ID = 675;
const diffsMetadataUrl = new URL(
  window.location.pathname + "/diffs_metadata.json",
  window.location.origin
);
const mergeRequestId = window.location.pathname
  .match(/(?<=merge_requests\/)\d{4}/)
  .pop();
