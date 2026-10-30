// yay i love softcoding (cuz it took longer yay)
let path = window.location.pathname;
let fileName = path.substring(path.lastIndexOf('/') + 1);

fileName = fileName.replace(".html", "")

if (fileName == "index") {
    fileName = "home"
} else if (!fileName) {
    fileName = "home"
}
fileName = fileName.charAt(0).toUpperCase() + fileName.slice(1)

document.title = fileName

// above is thing to rename title lol

// Source - https://stackoverflow.com/a/33222339
// Posted by Jesus Angulo
// Retrieved 2026-10-28, License - CC BY-SA 3.0

var children = [].slice.call(document.getElementById('nav').getElementsByTagName('*'),0);

var elemnts = new Array(children.length);
var arrayLength = children.length;
for (var i = 0; i < arrayLength; i++) {
    let name = children[i].getAttribute("id")||children[i].getAttribute("class");    
    elemnts[i]=name;
    if (name != "switch-mode") {
        children[i].addEventListener("click", function () {
            window.location.href = (name == "home" ? "index" : name) + ".html";
    })};

}

function switchlightmode() {
    if (!window.location.href.includes('?light')) {
        window.location.href = `${window.location.href}?light`
    }
}

const currUrl = window.location.href;

if (currUrl.endsWith("?light")) {
    document.body.style.setProperty("background-color", "white");
    document.getElementById("some-text").style.setProperty("color", "black");
    document.getElementsByTagName("html").item(0).style.setProperty("cursor", "url(src/assets/cursor/cursor_black_outline.cur), default")
    console.log(document.getElementsByTagName("html").item(0))
}

let song = document.getElementsByTagName("audio").item(0)
song.volume = 0.2
song.loop = true

//console.log(song.loop)

// Source - https://stackoverflow.com/a/57580268
// Posted by user670839, modified by community. See post 'Timeline' for change history
// Retrieved 2026-10-29, License - CC BY-SA 4.0

// event = keyup or keydown

document.addEventListener('keydown', event => {
  if (event.code === 'Space') {
    song.pause();
    console.log("Click anywhere to resume")
    document.getElementById('pause_hidden').style.setProperty("display", "block");
  }
});


/* while (true) {
        setTimeout(() => {
            document.getElementById("blinking").style.setProperty("color", "black");
        }, 500)
        setTimeout(() => {
            document.getElementById("blinking").style.setProperty("color", "white");
        }, 500)
} */