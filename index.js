let display = document.getElementsByTagName("textarea")[0]
let btn = Array.from(document.getElementsByTagName("button"))

let str = ""

btn.map(button => {

    button.addEventListener(`click`, (e) => {

        switch (e.target.innerText) {
            case "C":
                str = ""
                display.innerText = str
                break;
            case "=":

                let lista = str.split("")
                let n = 0
                lista.forEach(element => {
                    if (element == "(") {
                        n = n + 1
                    } else if (element == ")") {
                        n = n - 1
                    }
                });

                while (n != 0) {
                    str = str + ")"
                    n = n - 1

                }



                str = eval(str)
                display.innerText = str
                break;
            case "x":
                str = str + "*"
                display.innerText = str
                break;
            case "^":
                str = str + "**("
                display.innerText = str
                break;
            case "÷":
                str = str + "/"
                display.innerText = str
                break;
            case "(":
                if (str.endsWith("1") || str.endsWith("2") || str.endsWith("3") || str.endsWith("4") || str.endsWith("5") || str.endsWith("6") || str.endsWith("7") || str.endsWith("8") || str.endsWith("9") || str.endsWith("0")) {
                    str = str + "*("
                } else {
                    str = str + "("
                }
                display.innerText = str
                break;
            default:
                str = str + e.target.innerText
                display.innerText = str
        }
    })
})