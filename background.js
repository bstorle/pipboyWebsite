
alert("hi!")

function MyGenericClick(info,tab){
    console.log("Clicked on page:",info ,tab)
}
function MyImageClick(info,tab){
    console.log("Clicked on image:",info ,tab)
}

chrome.contextMenus.create({
    "title":"Share Image",
    "contexts":["image"],
    "onclick":MyImageClick
})

chrome.contextMenus.create({
    "title":"Share",
    "contexts":["page"],
    "onclick": MyGenericClick
})