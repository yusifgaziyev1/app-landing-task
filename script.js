function brYoxEle() {
    let articleEndTitle = document.getElementById("article-end-title");
    if (window.matchMedia("(min-width: 501px) and (max-width: 767px)").matches || window.matchMedia("(max-width: 500px)").matches) {
        articleEndTitle.innerHTML = articleEndTitle.innerHTML.replace("<br>", " ")
        articleEndTitle.style.fontSize = "26px"
        articleEndTitle.style.paddingLeft = "30px"
    }
    // Eger deyilse yazı olduğu kimi qalsın
    else {
        if (!articleEndTitle.innerHTML.includes("<br>")) {
            articleEndTitle.innerHTML = "Say Hello To The <br> Collaboration Hub."
        }
    }
}
window.addEventListener("resize", brYoxEle)
document.addEventListener("DOMContentLoaded", brYoxEle)

// If = Eger min genişlik 501 px den 767px qederdise ve ya max genişlik 500px qederdirse br tagini silirem bunun üçün inner HTML metodu istifade edirem çünkü eger sadece yazı olsaydı innerText istifade olunardı amma meqsedim br tagini silmek olduğu üçün innerHTML istiade edirem ve replace metodu ile br tagini deyişdirirem bunun üçün de mecburen boşluq qoyuram
// Else = Eger min width 0 ve max width 767px arasında deyilse includes metodu ile yazıda br tagini axtarıram ve eger varsa olduğu kimi saxlayıram

let placeholderYoxEle = document.getElementById("footer-form-input");
placeholderYoxEle.addEventListener("focus", function() {
    placeholderYoxEle.setAttribute("data-placeholder", placeholderYoxEle.getAttribute("placeholder"));
    placeholderYoxEle.setAttribute("placeholder", "")
})
placeholderYoxEle.addEventListener("blur", function() {
    if (placeholderYoxEle.value == "") {
        placeholderYoxEle.setAttribute("placeholder", placeholderYoxEle.getAttribute("data-placeholder"));
    }
})