const mainAbout = document.getElementById('about');
const mainDS = document.getElementById('ds');
const mainSD = document.getElementById('sd');
const mainPB = document.getElementById('pb');

const btnDS = document.getElementById('btnDS');
const btnPB = document.getElementById('btnPB');
const btnSD = document.getElementById('btnSD');
const btnPic = document.getElementById('profilePic');

let activeMain = mainAbout;

btnPic.addEventListener("click", function(){
    toggleElement(mainAbout)
    activeMain = mainAbout;
    disusedBtns()
})

btnDS.addEventListener("click", function(){
    toggleElement(mainDS)
    activeMain = mainDS;
    disusedBtns();
    btnMod(btnDS);
})

btnSD.addEventListener("click", function(){
    toggleElement(mainSD)
    activeMain = mainSD;
    disusedBtns()
    btnMod(btnSD);
})

btnPB.addEventListener("click", function(){
    toggleElement(mainPB)
    activeMain = mainPB;
    disusedBtns();
    btnMod(btnPB)
})

function toggleElement(elementToShow){
    activeMain.style.display = "none";
    elementToShow.style.display = "block";
}

function disusedBtns(){
    btnDS.style = "initial";
    btnSD.style = "initial";
    btnPB.style = "initial";
}

function btnMod(btn){
    btn.style.backgroundColor = "#012030";
    btn.style.borderRight = "none";
}
