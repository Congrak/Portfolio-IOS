export const Fullscreen = () => {
    const app = document.body
    const browser = app.requestFullscreen || app.webkitRequestFullScreen || app.mozRequestFullScreen || app.msRequestFullScreen

    document.fullscreenElement ? document.exitFullscreen() : browser.call(app)
}