let currImg = document.getElementById("full-size");
let fullImg = document.getElementById("full-img");
let currIndex = 0;
let section = "children"; // set as children by default
let fullSizeModal = document.getElementById("full-size-modal");
let playBtn = document.getElementById("play-btn");
let pauseBtn = document.getElementById("pause-btn");
let prevBtn = document.getElementById("prev-btn");
let nextBtn = document.getElementById("next-btn");
let slideStatus = "stopped"; // stopped by default
let fadeInterval;

window.onload = getImage();

function getImage () {
    console.log(`Max length: ${imgData[section].length}`);
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
    console.log(currIndex);
    if(currIndex == imgData[section].length - 1) {
        currIndex = 0;
    } else {
        currIndex++;
    }

    console.log(currIndex);
    currImg.src = imgData[section][currIndex].src;

}

function prevImg() {
    console.log(`Before Conditional: ${currIndex}`);
    if(currIndex == 0) {
        currIndex = imgData[section].length - 1;
    } else {
        currIndex--;
    }

    console.log(`After Conditional: ${currIndex}`);
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
    playBtn.classList.remove('hidden-btn');
    playBtn.classList.add('show-btn');
}

/*
fullSizeModal.addEventListener("click", function() {
    fullSizeModal.style.visibility = "hidden";
});
*/
document.getElementById("close-btn").addEventListener('click', () => {
    fullSizeModal.style.visibility = "hidden";
    
    playBtn.className = '';
    pauseBtn.className = '';
    currImg.className = '';
    playBtn.classList.add('hidden-btn');
    pauseBtn.classList.add('hidden-btn');
    currImg.className = 'full-size-img';

    if(timerId) {
        clearInterval(timerId);
    }


});

function resetIndex() {
    currIndex = 0;
}

/* slideshow function */

let timerId;

playBtn.addEventListener("click", function() {
    timerId = setInterval(nextImg, 3000);
    playBtn.classList.remove('show-btn');
    playBtn.classList.add('hidden-btn');
    pauseBtn.classList.remove('hidden-btn');
    pauseBtn.classList.add('show-btn');

});

pauseBtn.addEventListener("click", function() {
    clearInterval(timerId);
    pauseBtn.classList.remove('show-btn');
    pauseBtn.classList.add('hidden-btn');
    playBtn.classList.add('show-btn');

});

nextBtn.addEventListener("click", function() {
    if(timerId) {
        clearInterval(timerId);
    }
    clearBtn();
    nextImg();    
});

prevBtn.addEventListener("click", function() {
    if(timerId) {
        clearInterval(timerId);
    }
    clearBtn();
    prevImg();
});

let clearBtn = () => {
    pauseBtn.className = '';
    playBtn.className = '';
    playBtn.classList.add('show-btn');
}