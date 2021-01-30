function modifyArray() {
    let d = new Date();
    let time = d.toLocaleTimeString();
    console.log(time);
}

function bob(){
setInterval(modifyArray, 1000);
};

// 1. Code RUN automatically: type your name
bob()
