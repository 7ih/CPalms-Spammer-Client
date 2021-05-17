function $(id) {return document.getElementById(id);}
function fb(msg) {$("feedback").innerText = msg;}
var spam = undefined;
function stop() {
  if (!spam) return;
  clearInterval(spam);
  spam = undefined;
  fb(`Stopped sending ${$("type").value} requests`);
}
$("stop").addEventListener("click", stop);
$("go").addEventListener("click", function() {
  if (!$("link").value.includes("cpalms.org/PreviewResource")) {
    fb("That isn't a valid cpalms link (i think)");
    return;
  }
  stop();
  var requests = 0;
  var linkDirs = $("link").value.split("/");
  var id = linkDirs[linkDirs.length-1];
  var link = `https://cors-anywhere.7ih.repl.co/cpalms.org/PreviewResource/LikeResourceVideo?id=${id}&LikeUnlike=${$("type").value}`;
  var interval = parseInt($("interval").value);
  if (!interval || interval < 200) interval = 200;
  function sendRequest() {
    fetch(link)
    .then(res => res.json())
    .then(data => $("likes").innerText = data.LikesCount);
    requests++;
    $("requests").innerText = requests;
  }

  fb("Spamming dislike requests to the following cpalms id: " + id);
  sendRequest();
  spam = setInterval(sendRequest, interval);
});