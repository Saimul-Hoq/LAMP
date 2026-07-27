let URL = "https://cdn.jsdelivr.net/gh/fawazahmed0/quran-api@1/editions/ben-muhiuddinkhan.json";

let quranPromise = (async function(){
    let response = await fetch(URL);
    let data = await response.json();
    return data;
})();

async function getVerse(chapter, verseNo){
    let data = await quranPromise;
    let allVerses = data.quran;
    let verse = allVerses.find(v => v.chapter===chapter && v.verse===verseNo);
    return verse?verse.text:"Verse not found";
}

(async function main(){
    let verse = await getVerse(2, 255);
    console.log(verse);
})();