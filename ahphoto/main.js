let currImg = document.getElementById("full-size");
let fullImg = document.getElementById("full-img");
let currIndex = 0;
let section = "children"; // set as children by default
let fullSizeModal = document.getElementById("full-size-modal");
let playBtn = document.getElementById("play-btn");
let pauseBtn = document.getElementById("pause-btn");
let slideStatus = "stopped"; // stopped by default

window.onload = getImage();

function getImage () {
    // currImg.src = imgData[section][currIndex].src; 
    let cont = document.getElementById("container");

    cont.textContent = '';
    for(let i = 0; i < imgData[section].length; i++) {
        let newCell = document.createElement("DIV");
        newCell.className = "img-cell";

        let imgBasic = document.createElement("DIV");
        imgBasic.className = "image_basic";

        newCell.appendChild(imgBasic);

        let newImg = document.createElement("IMG");
        newImg.className = `basic-img ${imgData[section][i].adjustment}`;
        newImg.src = imgData[section][i].src;
        newImg.setAttribute("value", i);
        newImg.onclick = function() {
            openFullSize(this.src);
            setIndex(this.getAttribute("value"));
        }

        imgBasic.appendChild(newImg);
        cont.appendChild(newCell);
    }           
}

function nextImg() {
    if(currIndex === imgData[section].length) {
        currIndex = 0;
    } else {
        currIndex++;
    }

    currImg.src = imgData[section][currIndex].src;
}

function prevImg() {
    if(currIndex < 0) {
        currIndex = imgData[section].length - 1;
    } else {
        currIndex--;
    }
    clearInterval();
    currImg.src = imgData[section][currIndex].src;
}

function setIndex(val) {
    currIndex = val;
}

function setSection(selCat) {
    section = selCat;
    resetIndex();
    getImage();
}

function openFullSize(val) {
    document.getElementById("full-size").src = val;
    fullSizeModal.style.visibility = "visible";
}

/*
fullSizeModal.addEventListener("click", function() {
    fullSizeModal.style.visibility = "hidden";
});
*/
document.getElementById("close-btn").addEventListener('click', () => {
    fullSizeModal.style.visibility = "hidden";
    slideStatus = false;
});

function resetIndex() {
    currIndex = 0;
}

/* slideshow function */

let timerId;

playBtn.addEventListener("click", function() {
    timerId = setInterval(nextImg, 3000);

    playBtn.style.visibility = "hidden";
    playBtn.style.height = "0px";
    playBtn.style.width = "0px";
    pauseBtn.style.height = "50px";
    pauseBtn.style.width = "50px";
    pauseBtn.style.visibility = "visible";

});

pauseBtn.addEventListener("click", function() {
    clearInterval(timerId);
    pauseBtn.style.visibility = "hidden";
    pauseBtn.style.height = "0px";
    pauseBtn.style.width = "0px";
    playBtn.style.visibility = "visible";
    playBtn.style.height = "50px";
    playBtn.style.height = "50px";
});