// Elementleri seçme

const githubForm=document.getElementById("github-form");
const nameInput=document.getElementById("githubname");
const clearLastUsers=document.getElementById("clear-last-users");

const lastUsers=document.getElementById("last-users");

eventListener();
function eventListener(){
    githubForm.addEventListener("submit",getData);
    clearLastUsers.addEventListener("click",clearAllSearched);
    document.addEVENTlİSTENER("DOMContentLoaded",getAllSearched);
}

function getData(e){

e.preventDefault();

};

function getAllSearched(){
// Tüm arananları temizle

}

function getAllSearched(){
// arananları storagedan al ve Uiye ekle

}








