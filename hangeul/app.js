const vocab = {
    'animals': [
        { 'English': 'cat', 'Korean': '고양이'},
        { 'English': 'dog', 'Korean': '개'},
        { 'English': 'fox', 'Korean': '여우'},
        { 'English': 'bird', 'Korean': '새'},
        { 'English': 'tiger', 'Korean': '호랑이'},
        { 'English': 'owl', 'Korean': '올빼미'},
        { 'English': 'fish', 'Korean': '물고기'},
        { 'English': 'mouse', 'Korean': '쥐'},
        { 'English': 'bear', 'Korean': '곰'},
        { 'English': 'elephant', 'Korean': '코끼리'},
        { 'English': 'giraffe', 'Korean': '기린'},
        { 'English': 'gopher', 'Korean': '부지런한 사람'},
        { 'English': 'skunk', 'Korean': '스컹크'},
        { 'English': 'deer', 'Korean': '사슴'},
        { 'English': 'cow', 'Korean': '소'},
        { 'English': 'horse', 'Korean': '말'},
        { 'English': 'shark', 'Korean': '상어'},
        { 'English': 'otter', 'Korean': '수달'},
        { 'English': 'seal', 'Korean': '봉인'},
        { 'English': 'whale', 'Korean': '고래'},
        { 'English': 'snake', 'Korean': '뱀'}
    ],
    'clothing': [
        { 'English': 'shirt', 'Korean': '' },
        { 'English': 't-shirt', 'Korean': '' },
        { 'English': 'jeans', 'Korean': '' },
        { 'English': 'pants', 'Korean': '' },
        { 'English': 'dress', 'Korean': '' },
        { 'English': 'sneakers', 'Korean': '' },
        { 'English': 'shoes', 'Korean': '' },
        { 'English': 'earrings', 'Korean': '' },
        { 'English': 'necklace', 'Korean': '' },
        { 'English': 'hat', 'Korean': '' },
        { 'English': 'glasses', 'Korean': ''},
        { 'English': 'sunglasses', 'Korean': ''},
        { 'English': 'socks', 'Korean': ''},
        { 'English': 'watch', 'Korean': ''},
        { 'English': 'headband', 'Korean': ''},
        { 'English': 'suit', 'Korean': ''},
        { 'English': 'tuxedo', 'Korean': ''}
    ],
    'electronics': [ 
        { 'English': '', 'Korean': '' },
        { 'English': '', 'Korean': '' },
        { 'English': '', 'Korean': '' },
        { 'English': '', 'Korean': '' },
        { 'English': '', 'Korean': '' },
        { 'English': '', 'Korean': '' },
        { 'English': '', 'Korean': '' },
        { 'English': '', 'Korean': '' },
        { 'English': '', 'Korean': '' },
        { 'English': '', 'Korean': '' },
        { 'English': '', 'Korean': '' },
        { 'English': '', 'Korean': '' }
        //{ 'English': '', 'Korean': '' },
    ],
    'food': [
        {'English': 'hamburger', 'Korean': '햄버거'},
        {'English': 'tea', 'Korean': '차'},
        {'English': 'pizza', 'Korean': ''},
        {'English': 'rice', 'Korean': ''},
        {'English': 'apple', 'Korean': ''},
        {'English': 'chicken', 'Korean': ''},
        {'English': 'beer', 'Korean': ''},
        {'English': 'soda', 'Korean': ''},
        {'English': 'pork', 'Korean': ''},
        {'English': 'beef', 'Korean': ''},
        {'English': 'water', 'Korean': ''},
        {'English': 'milk', 'Korean': ''},
        {'English': 'orange', 'Korean': ''},
        {'English': 'orange juice', 'Korean': ''},
        {'English': 'beans', 'Korean': ''},
        {'English': 'pineapple', 'Korean': ''},
        {'English': 'carrot', 'Korean': ''},
        {'English': 'onion', 'Korean': ''},
        {'English': 'celery', 'Korean': ''},
        {'English': 'taco', 'Korean': ''},
        {'English': 'tomato', 'Korean': ''},
        {'English': 'lettuce', 'Korean': ''},
        {'English': 'barbeque', 'Korean': ''},
        {'English': 'steak', 'Korean': ''},
        {'English': 'ketchup', 'Korean': ''},
        {'English': 'soy sauce', 'Korean': ''},
        {'English': 'soy', 'Korean': ''},
        {'English': 'sauce', 'Korean': ''},
        {'English': 'radish', 'Korean': ''},
        {'English': 'chips', 'Korean': ''},
        {'English': 'potato', 'Korean': ''},
        {'English': 'french fries', 'Korean': ''},
        {'English': 'sushi', 'Korean': ''},
        {'English': 'bacon', 'Korean': ''},
        {'English': 'banana', 'Korean': ''},
        {'English': 'cherry', 'Korean': ''},
        {'English': 'peach', 'Korean': ''},
        {'English': 'zucchini', 'Korean': ''},
        {'English': 'cucumber', 'Korean': ''},
        {'English': 'coconut', 'Korean': ''},
        {'English': 'cracker', 'Korean': ''},
        {'English': 'cake', 'Korean': ''},
        {'English': 'cookie', 'Korean': ''},
        {'English': 'bread', 'Korean': ''},
        {'English': 'egg', 'Korean': ''},
        {'English': 'pasta', 'Korean': ''},
        {'English': 'chewing gum', 'Korean': ''},
        {'English': 'ham', 'Korean': ''},
        {'English': 'spam', 'Korean': ''},
        {'English': 'ice cream', 'Korean': ''},
        {'English': 'candy', 'Korean': ''},
        {'English': 'pie', 'Korean': ''},
        {'English': 'asparagus', 'Korean': ''},
        {'English': 'avocado', 'Korean': ''},
        {'English': 'hot dog', 'Korean': ''},
        {'English': 'chocolate', 'Korean': ''},
        {'English': 'vanilla', 'Korean': ''},
        { 'English': 'custard', 'Korean': ''}
    ],
    'house': [
        { 'English': 'kitchen', 'Korean': ''},
        { 'English': 'living room', 'Korean': ''},
        { 'English': 'bedroom', 'Korean': ''},
        { 'English': 'bathroom', 'Korean': ''},
        { 'English': 'laundry room', 'Korean': ''},
        { 'English': 'toilet', 'Korean': ''},
        { 'English': 'sink', 'Korean': ''},
        { 'English': 'shower', 'Korean': ''},
        { 'English': 'lamp', 'Korean': ''},
        { 'English': 'floor', 'Korean': ''},
        { 'English': 'carpet', 'Korean': ''},
        { 'English': 'couch', 'Korean': ''},
        { 'English': 'television', 'Korean': ''},
        { 'English': 'knife', 'Korean': ''},
        { 'English': 'microwave', 'Korean': ''},
        { 'English': 'stove', 'Korean': ''},
        { 'English': 'vacuum', 'Korean': ''},
        { 'English': 'fan', 'Korean': ''},
        { 'English': 'air conditioner', 'Korean': ''},
        { 'English': 'chair', 'Korean': ''},
        { 'English': 'table', 'Korean': ''},
        { 'English': 'stove', 'Korean': ''},
        { 'English': 'oven', 'Korean': ''},
        { 'English': 'blender', 'Korean': ''},
        { 'English': 'laundry basket', 'Korean': ''},
        { 'English': 'washing machine', 'Korean': ''},
        { 'English': 'dryer', 'Korean': ''},
        { 'English': 'hair brush', 'Korean': ''},
        { 'English': 'radiator', 'Korean': ''},
        { 'English': 'desk', 'Korean': ''},
        { 'English': 'light bulb', 'Korean': ''},
        { 'English': 'telephone', 'Korean': ''},
        { 'English': 'towel', 'Korean': ''},
        { 'English': 'toilet paper', 'Korean': ''},
        { 'English': 'garbage can', 'Korean': ''},
        { 'English': 'window', 'Korean': ''},
        { 'English': 'door', 'Korean': ''},
        { 'English': 'roof', 'Korean': ''},
        { 'English': 'box', 'Korean': ''},
        { 'English': 'shelf', 'Korean': ''}
    ],
    'family': [
        { 'English': 'mom', 'Korean': ''},
        { 'English': 'dad', 'Korean': ''},
        { 'English': 'sister', 'Korean': ''},
        { 'English': 'brother', 'Korean': ''},
        { 'English': 'aunt', 'Korean': ''},
        { 'English': 'uncle', 'Korean': ''},
        { 'English': 'cousin', 'Korean': ''},
        { 'English': 'niece', 'Korean': ''},
        { 'English': 'newphew', 'Korean': ''},
        { 'English': 'grandmom', 'Korean': ''},
        { 'English': 'granddad', 'Korean': ''},
        { 'English': 'brother-in-law', 'Korean': ''},
        { 'English': 'sister-in-law', 'Korean': ''},
        { 'English': 'wife', 'Korean': ''},
        { 'English': 'husband', 'Korean': ''},
        { 'English': 'son', 'Korean': ''},
        { 'English': 'daughter', 'Korean': ''},
        { 'English': 'step-son', 'Korean': ''},
        { 'English': 'step-daughter', 'Korean': ''},
        { 'English': 'baby', 'Korean': ''},
        { 'English': 'newborn', 'Korean': ''}
    ],
    'people': [
        { 'English': 'student', 'Korean': ''},
        { 'English': 'teacher', 'Korean': ''},
        { 'English': 'chef', 'Korean': ''},
        { 'English': 'doctor', 'Korean': ''},
        { 'English': 'police officer', 'Korean': ''},
        { 'English': 'president', 'Korean': ''},
        { 'English': 'boss', 'Korean': ''},
        { 'English': 'business person', 'Korean': ''},
        { 'English': 'nurse', 'Korean': ''},
        { 'English': 'janitor', 'Korean': ''},
        { 'English': 'waitor', 'Korean': ''},
        { 'English': 'mechanic', 'Korean': ''},
        { 'English': 'babysitter', 'Korean': ''}
    ],
    'sports': [ 
        { 'English': 'Basketball', 'Korean': '' }, 
        { 'English': 'Ice Hockey', 'Korean': '' }, 
        { 'English': 'Soccer', 'Korean': '' }, 
        { 'English': 'Baseball', 'Korean': '' }, 
        { 'English': 'Figure Skating', 'Korean': '' }, 
        { 'English': 'Field Hockey', 'Korean': '' }, 
        { 'English': 'Golf', 'Korean': '' }, 
        { 'English': 'Skiing', 'Korean': '' }, 
        { 'English': 'Snowboarding', 'Korean': '' }, 
        { 'English': 'Gymnastics', 'Korean': '' }, 
        { 'English': 'Curling', 'Korean': '' }, 
        { 'English': 'Biathalon', 'Korean': '' }
    ],
    getLength: function(name) {
        return this[name].length -1;
    },
    getVocab: function(section, index) {
        return [this[section][index].English, this[section][index].Korean];
    }

}

const modal = document.getElementById("vocab-modal");
const wordCont = document.querySelector('.word-box');
const wordBox = document.querySelector(".word");
const eng = document.querySelector(".english");
const han = document.querySelector(".hangul");
const closeBtn = document.querySelector(".close-btn");
let section;

// window.onload = () => { alert(vocab.food[1].tea)} // Number corresponds to place in 'food'
window.onload = () => {
    //alert(Object.keys(vocab).length);
    //alert(vocab.getLength('animals'));
    
}

let openModal = (val) => {
    modal.style.display = "block";
    showVocab(val);
}

let getWord = (val) => {
    section = val;
    let sectionLen = vocab.getLength(val);
    let rand = Math.floor((Math.random() * sectionLen)+1);
    let arr = vocab.getVocab(val, rand);
    return arr;
}

let showVocab = (val) => {
    section = val;
    let arr = getWord(val);
    console.log(`${arr[0]} ${arr[1]}`);
    eng.textContent = arr[0];
    han.textContent = arr[1];
}

closeBtn.addEventListener("click", () => {
    modal.style.display = "none";
})

wordCont.addEventListener("click", function() {
    showVocab(section);
});