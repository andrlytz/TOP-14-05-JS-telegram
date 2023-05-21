function saveToPC(str){
    let blob = new Blob([str], {type: "text/plain"});
    let link = document.createElement("a");
    link.setAttribute("href", URL.createObjectURL(blob));
    link.setAttribute("download", "123.txt");
    link.click();

}

let form = document.getElementById('form1')
form.onsubmit = f1

function f1() {
    let str = 'Данные формы'+'\n'
    let elems = form.elements
    console.log(elems)
    for (x in form.elements) {
        if (elems[x].type == 'radio' && elems[x].checked) {
            str += elems[x].name+' '
            str += elems[x].value+'\n'
        }
        if (elems[x].type == 'checkbox' && elems[x].checked) {
            str += elems[x].name+' '
            str += 'выбран'+'\n'
        }
        if (x == elems.length-1) {
            break
        }
        if (elems[x].type != 'checkbox' && elems[x].type != 'radio') {
            if (elems[x].name == '') {continue}
            if (elems[x].value == undefined) {continue}
            str += elems[x].name+' '
            str += elems[x].value+'\n'
        }

    }
    saveToPC(str)
    telegram(str, token, chatId)
    console.log(str, token, chatId)
    return false
}

let userBot = '@andrlytz_bot'
let token = '6129467935:AAHpKz-tIuLP9vF8QjBXooxz8BHKJxMsV4Q'
let chatId = '668339270'

function telegram (str, token, chatId) {
    let z = $.ajax ({
        type: "POST",
        url: "https://api.telegram.org/bot"+token+"/sendMessage?chat_id="+chatId,
        data: "/parse_mоde=HTML&text="+encodeURIComponent(str)
    }).then(alert('отправили в телеграм'))
}