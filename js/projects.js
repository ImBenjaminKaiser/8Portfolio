var canUseLenis = true

function compare(pageName) {
console.log('Comparing page:', pageName);
compareSeventh = document.querySelector(".compareSeventhImg")
compareEighth = document.querySelector(".compareEighthImg")
// https://stackoverflow.com/questions/7312553/change-image-source-with-javascript
compareSeventh.src=`img/${ pageName }_seventh.jpg`
compareEighth.src=`img/${ pageName }_eighth.jpg`
}