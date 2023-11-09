let downAnI = document.querySelector("#downAnI")
    let upAnI = document.querySelector("#upAnI")
    downAnI.setAttribute("style", "display: none")
    document.querySelector("#footerContentNonIt").setAttribute("style", "display: none");

    upAnI.addEventListener("click", () => {
        console.log("click")
        downAnI.setAttribute("style", "display: block")
        upAnI.setAttribute("style", "display: none")
        document.querySelector("#footerContentNonIt").setAttribute("style", "display: block")
    });
    downAnI.addEventListener("click", () => {
        console.log("click")
        downAnI.setAttribute("style", "display: none")
        upAnI.setAttribute("style", "display: block")
        document.querySelector("#footerContentNonIt").setAttribute("style", "display: none")
    });

    let downAI = document.querySelector("#downAI")
    let upAI = document.querySelector("#upAI")
    downAI.setAttribute("style", "display: none")
    document.querySelector("#footerContentIt").setAttribute("style", "display: none");

    upAI.addEventListener("click", () => {
        console.log("click")
        downAI.setAttribute("style", "display: block")
        upAI.setAttribute("style", "display: none")
        document.querySelector("#footerContentIt").setAttribute("style", "display: block")
    });
    downAI.addEventListener("click", () => {
        console.log("click")
        downAI.setAttribute("style", "display: none")
        upAI.setAttribute("style", "display: block")
        document.querySelector("#footerContentIt").setAttribute("style", "display: none")
    });

    let downAJs = document.querySelector("#downAJs")
    let upAJs = document.querySelector("#upAJs")
    downAJs.setAttribute("style", "display: none")
    document.querySelector("#footerContentJs").setAttribute("style", "display: none");

    upAJs.addEventListener("click", () => {
        console.log("click")
        downAJs.setAttribute("style", "display: block")
        upAJs.setAttribute("style", "display: none")
        document.querySelector("#footerContentJs").setAttribute("style", "display: block")
    });
    downAJs.addEventListener("click", () => {
        console.log("click")
        downAJs.setAttribute("style", "display: none")
        upAJs.setAttribute("style", "display: block")
        document.querySelector("#footerContentJs").setAttribute("style", "display: none")
    });

    let downAEmp = document.querySelector("#downAEmp")
    let upAEmp = document.querySelector("#upAEmp")
    downAEmp.setAttribute("style", "display: none")
    document.querySelector("#footerContentEmp").setAttribute("style", "display: none");

    upAEmp.addEventListener("click", () => {
        console.log("click")
        downAEmp.setAttribute("style", "display: block")
        upAEmp.setAttribute("style", "display: none")
        document.querySelector("#footerContentEmp").setAttribute("style", "display: block")
    });
    downAEmp.addEventListener("click", () => {
        console.log("click")
        downAEmp.setAttribute("style", "display: none")
        upAEmp.setAttribute("style", "display: block")
        document.querySelector("#footerContentEmp").setAttribute("style", "display: none")
    });

    let downAF = document.querySelector("#downAF")
    let upAF = document.querySelector("#upAF")
    downAF.setAttribute("style", "display: none")
    document.querySelector("#footerContentF").setAttribute("style", "display: none");

    upAF.addEventListener("click", () => {
        console.log("click")
        downAF.setAttribute("style", "display: block")
        upAF.setAttribute("style", "display: none")
        document.querySelector("#footerContentF").setAttribute("style", "display: block")
    });
    downAF.addEventListener("click", () => {
        console.log("click")
        downAF.setAttribute("style", "display: none")
        upAF.setAttribute("style", "display: block")
        document.querySelector("#footerContentF").setAttribute("style", "display: none")
    });