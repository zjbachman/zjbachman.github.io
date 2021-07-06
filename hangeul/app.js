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
        { 'English': 'shirt', 'Korean': '셔츠' },
        { 'English': 't-shirt', 'Korean': '티셔츠' },
        { 'English': 'jeans', 'Korean': '청바지' },
        { 'English': 'pants', 'Korean': '바지' },
        { 'English': 'dress', 'Korean': '드레스' },
        { 'English': 'sneakers', 'Korean': '운동화' },
        { 'English': 'shoes', 'Korean': '신발' },
        { 'English': 'earrings', 'Korean': '귀걸이' },
        { 'English': 'necklace', 'Korean': '목걸이' },
        { 'English': 'hat', 'Korean': '모자' },
        { 'English': 'glasses', 'Korean': '안경' },
        { 'English': 'sunglasses', 'Korean': '색안경' },
        { 'English': 'socks', 'Korean': '양말' },
        { 'English': 'watch', 'Korean': '손목 시계' },
        { 'English': 'headband', 'Korean': '머리띠' },
        { 'English': 'suit', 'Korean': '소송' },
        { 'English': 'tuxedo', 'Korean': '턱시도' }
    ],
    'electronics': [ 
        { 'English': 'computer', 'Korean': '컴퓨터' },
        { 'English': 'cell phone', 'Korean': '휴대폰' },
        { 'English': 'wifi', 'Korean': '와이파이' },
        { 'English': 'tablet', 'Korean': '태블릿 컴퓨터' },
        { 'English': 'printer', 'Korean': '인쇄기' },
        { 'English': 'laptop', 'Korean': '노트북' },
        { 'English': 'video game', 'Korean': '비디오 게임' },
        { 'English': 'stereo', 'Korean': '스테레오' },
        { 'English': 'radio', 'Korean': '라디오' }
        //{ 'English': '', 'Korean': '' },
    ],
    'food': [
        {'English': 'hamburger', 'Korean': '햄버거'},
        {'English': 'tea', 'Korean': '차'},
        {'English': 'pizza', 'Korean': '피자'},
        {'English': 'cooked rice', 'Korean': '밥'},
        { 'English': 'rice', 'Korean': '쌀' },
        {'English': 'apple', 'Korean': '사과'},
        {'English': 'chicken', 'Korean': '치킨'},
        {'English': 'beer', 'Korean': '맥주'},
        {'English': 'soda', 'Korean': '소다 팝'},
        {'English': 'pork', 'Korean': '돼지 고기'},
        {'English': 'beef', 'Korean': '소고기'},
        {'English': 'water', 'Korean': '물'},
        {'English': 'milk', 'Korean': '우유'},
        {'English': 'orange', 'Korean': '주황색'},
        {'English': 'orange juice', 'Korean': '오렌지 주스'},
        {'English': 'beans', 'Korean': '콩'},
        {'English': 'pineapple', 'Korean': '파인애플'},
        {'English': 'carrot', 'Korean': '당근'},
        {'English': 'onion', 'Korean': '양파'},
        {'English': 'celery', 'Korean': '셀러리'},
        {'English': 'taco', 'Korean': '타코'},
        {'English': 'tomato', 'Korean': '토마토'},
        {'English': 'lettuce', 'Korean': '상추'},
        {'English': 'barbeque', 'Korean': '야외 파티' },
        {'English': 'steak', 'Korean': '스테이크' },
        {'English': 'ketchup', 'Korean': '케첩' },
        {'English': 'soy sauce', 'Korean': '간장' },
        {'English': 'soy', 'Korean': '간장' },
        {'English': 'sauce', 'Korean': '소스' },
        {'English': 'radish', 'Korean': '무' },
        {'English': 'potato chips', 'Korean': '감자 칩' },
        {'English': 'potato', 'Korean': '감자' },
        {'English': 'french fries', 'Korean': '감자 튀김' },
        {'English': 'sushi', 'Korean': '회' },
        {'English': 'bacon', 'Korean': '베이컨' },
        {'English': 'banana', 'Korean': '바나나' },
        {'English': 'cherry', 'Korean': '체리' },
        {'English': 'peach', 'Korean': '복숭아' },
        {'English': 'zucchini', 'Korean': '서양 호박' },
        {'English': 'cucumber', 'Korean': '오이' },
        {'English': 'coconut', 'Korean': '코코넛' },
        {'English': 'cracker', 'Korean': '크래커' },
        {'English': 'cake', 'Korean': '케이크' },
        {'English': 'cookie', 'Korean': '쿠키' },
        {'English': 'bread', 'Korean': '빵' },
        {'English': 'egg', 'Korean': '계란' },
        {'English': 'pasta', 'Korean': '파스타' },
        {'English': 'chewing gum', 'Korean': '껌' },
        {'English': 'ham', 'Korean': '햄' },
        {'English': 'spam', 'Korean': '스팸' },
        {'English': 'ice cream', 'Korean': '아이스크림' },
        {'English': 'candy', 'Korean': '사탕' },
        {'English': 'pie', 'Korean': '파이' },
        {'English': 'asparagus', 'Korean': '아스파라거스' },
        {'English': 'avocado', 'Korean': '아보카도' },
        {'English': 'hot dog', 'Korean': '핫도그' },
        {'English': 'chocolate', 'Korean': '초콜릿' },
        {'English': 'vanilla', 'Korean': '바닐라' },
        { 'English': 'custard', 'Korean': '커스터드' }
    ],
    'house': [
        { 'English': 'kitchen', 'Korean': '부엌' },
        { 'English': 'living room', 'Korean': '거실' },
        { 'English': 'bedroom', 'Korean': '침실' },
        { 'English': 'bathroom', 'Korean': '화장실' },
        { 'English': 'laundry room', 'Korean': '세탁실' },
        { 'English': 'toilet', 'Korean': '화장실' },
        { 'English': 'sink', 'Korean': '싱크대' },
        { 'English': 'shower', 'Korean': '샤워' },
        { 'English': 'lamp', 'Korean': '램프' },
        { 'English': 'floor', 'Korean': '바닥' },
        { 'English': 'carpet', 'Korean': '양탄자' },
        { 'English': 'couch', 'Korean': '침상' },
        { 'English': 'television', 'Korean': '텔레비전' },
        { 'English': 'knife', 'Korean': '칼' },
        { 'English': 'microwave', 'Korean': '마이크로파' },
        { 'English': 'stove', 'Korean': 'nanlo' },
        { 'English': 'vacuum', 'Korean': '진공' },
        { 'English': 'fan', 'Korean': '부채' },
        { 'English': 'air conditioner', 'Korean': '에어컨' },
        { 'English': 'chair', 'Korean': '의자' },
        { 'English': 'table', 'Korean': '표' },
        { 'English': 'stove', 'Korean': '난로' },
        { 'English': 'oven', 'Korean': '오븐' },
        { 'English': 'blender', 'Korean': '믹서기' },
        { 'English': 'laundry basket', 'Korean': '세탁 바구니' },
        { 'English': 'washing machine', 'Korean': '세탁기' },
        { 'English': 'dryer', 'Korean': '건조기' },
        { 'English': 'hair brush', 'Korean': '헤어 브러시' },
        { 'English': 'radiator', 'Korean': '라디에이터' },
        { 'English': 'desk', 'Korean': '책상' },
        { 'English': 'light bulb', 'Korean': '전구' },
        { 'English': 'telephone', 'Korean': '전화' },
        { 'English': 'towel', 'Korean': '수건' },
        { 'English': 'toilet paper', 'Korean': '휴지' },
        { 'English': 'garbage can', 'Korean': '쓰레기통' },
        { 'English': 'window', 'Korean': '창문' },
        { 'English': 'door', 'Korean': '문' },
        { 'English': 'roof', 'Korean': '지붕' },
        { 'English': 'box', 'Korean': '상자' },
        { 'English': 'shelf', 'Korean': '선반' }
    ],
    'family': [
        { 'English': 'mom', 'Korean': '엄마' },
        { 'English': 'dad', 'Korean': '아빠' },
        { 'English': 'sister', 'Korean': '여자 형제' },
        { 'English': 'brother', 'Korean': '동료' },
        { 'English': 'aunt', 'Korean': '이모' },
        { 'English': 'uncle', 'Korean': '삼촌' },
        { 'English': 'cousin', 'Korean': '사촌' },
        { 'English': 'niece', 'Korean': '조카딸' },
        { 'English': 'newphew', 'Korean': '조카' },
        { 'English': 'grandmom', 'Korean': '할머니' },
        { 'English': 'granddad', 'Korean': '할아버지' },
        { 'English': 'brother-in-law', 'Korean': '처남' },
        { 'English': 'sister-in-law', 'Korean': '시누이' },
        { 'English': 'wife', 'Korean': '아내' },
        { 'English': 'husband', 'Korean': '남편' },
        { 'English': 'son', 'Korean': '아들' },
        { 'English': 'daughter', 'Korean': '딸' },
        { 'English': 'step-son', 'Korean': '의붓 아들' },
        { 'English': 'step-daughter', 'Korean': '의붓 딸' },
        { 'English': 'baby', 'Korean': '아가' },
        { 'English': 'newborn', 'Korean': '신생아' }
    ],
    'people': [
        { 'English': 'student', 'Korean': '학생' },
        { 'English': 'teacher', 'Korean': '선생님' },
        { 'English': 'chef', 'Korean': '요리사' },
        { 'English': 'doctor', 'Korean': '박사님' },
        { 'English': 'police officer', 'Korean': '경찰관' },
        { 'English': 'president', 'Korean': '대통령' },
        { 'English': 'boss', 'Korean': '사장님' },
        { 'English': 'business person', 'Korean': '비즈니스 사람' },
        { 'English': 'nurse', 'Korean': '간호사' },
        { 'English': 'janitor', 'Korean': '관리인' },
        { 'English': 'waiter', 'Korean': '웨이터' },
        { 'English': 'mechanic', 'Korean': '정비공' },
        { 'English': 'babysitter', 'Korean': '안저지' }
    ],
    'sports': [ 
        { 'English': 'Basketball', 'Korean': '농구' }, 
        { 'English': 'Ice Hockey', 'Korean': '아이스 하키' }, 
        { 'English': 'Soccer', 'Korean': '축구' }, 
        { 'English': 'Baseball', 'Korean': '야구' }, 
        { 'English': 'Figure Skating', 'Korean': '피겨 스케이팅' }, 
        { 'English': 'Field Hockey', 'Korean': '필드 하키' }, 
        { 'English': 'Golf', 'Korean': '골프' }, 
        { 'English': 'Skiing', 'Korean': '스키 타기' }, 
        { 'English': 'Snowboarding', 'Korean': '스노 보드' }, 
        { 'English': 'Gymnastics', 'Korean': '체조' }, 
        { 'English': 'Curling', 'Korean': '컬링' }, 
        { 'English': 'Biathlon', 'Korean': '바이애슬론' }
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