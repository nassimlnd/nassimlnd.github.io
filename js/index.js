function closeWindow() {
    let app = document.getElementById("app");
    app.classList = "fade-out-down";
    setTimeout(() => {
        app.classList = "";
        app.style.display = "none";
    }, 500);
}

function openWindow(appName) {
    let app = document.getElementById(appName);
    let appButton = appName + "-button";
    let dockButton = document.getElementById(appName + "-button");

    console.log(appButton);

    dockButton.classList = "app-icon bounce";
    setTimeout(() => {  dockButton.classList = "app-icon";
        app.style.display = "flex";}, 1000);
}