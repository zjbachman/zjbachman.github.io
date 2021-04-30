let currImg = document.getElementById("full-size");
let fullImg = document.getElementById("full-img");
let currIndex = 0;
let section = "children";
let fullSizeModal = document.getElementById("full-size-modal");
let playBtn = document.getElementById("play-btn");
let slideStatus = false;

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

playBtn.addEventListener("click", function() {
    if(slideStatus === false) {
        slideStatus=true;
        playBtn.src = "./icons/pause-button.png";
        clearInterval();
        setInterval(function() {
            nextImg();
        }, 3000);
    } else {
        playBtn.src = "./icons/play-button.png";
        slideStatus === false;
        clearInterval();
    }
});
