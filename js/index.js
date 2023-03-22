let $btnPlay = document.querySelector(".icon-play")

$btnPlay.onclick = function () {
    if ($btnPlay.classList.contains("icon-play")) {
        $btnPlay.classList.replace("icon-play", "icon-pause")
    } else {
        $btnPlay.classList.replace("icon-pause", "icon-play")
    }
    return
}