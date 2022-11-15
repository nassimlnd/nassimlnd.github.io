/*window.onload = (event) => {
    console.log("ok");
    const loadingBar = document.querySelector(".loadingbar");
    const loadingScreen = document.querySelector(".loading-screen");
    setTimeout(() => {
        loadingBar.animate({left: 0}, 3000);
        console.log('test1');
    }, 1500);
    setTimeout(() => {
        loadingScreen.animate({opacity: 0}, 600);
    },4500);
    setTimeout(() => {
        loadingScreen.style.display = "none";
    }, 5000);
}*/

function closeWindow(appName) {
    let nameApp = appName + "-app";
    let app = document.getElementById(nameApp);
    app.classList = "fade-out-down";
    setTimeout(() => {
        app.classList = "";
        app.style.display = "none";
    }, 500);
}

function openWindow(appName) {
    let app = document.getElementById(appName + "-app");
    let appButton = appName + "-button";
    let dockButton = document.getElementById(appName + "-button");

    dockButton.classList = "app-icon bounce";
    setTimeout(() => {
        dockButton.classList = "app-icon";
        app.style.display = "flex";
        app.style.opacity = 0;
        app.classList = "swashin";
    }, 1000);
    setTimeout(() => {
        app.classList = "";
        app.style.opacity = 1;
    }, 1500);
}