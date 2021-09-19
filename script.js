const form = document.querySelector('form');
const addList = document.querySelector('#addlist')
const addButton = document.querySelector('#addbutton')
const result = document.querySelector('#result')
const listArr = JSON.parse(localStorage.getItem("items")) || [];


//salvar item da lista no localStorage
const saveItemsToLocaleStorage = () => {
    localStorage.setItem('items', JSON.stringify(listArr));
}

//popular a lista
function showLists(clearList = false) {

    //Limpar o conteúdo da div sempre que uma novo item for inserido
    if (clearList) {
        result.innerHTML = '';
    }

    //checar se o array existe e é maior que zero
    if (listArr.length > 0) {
        //utilizar o loop forEach para imprimir as listas
        listArr.forEach((items) => {
            result.innerHTML += `<div>
            <input type="checkbox" onclick:"done()">
            <h3>
                ${items}
            </h3>
            <button class="erasebutton" onclick="erase() value="${listArr.indexOf(items)}"><i class="far fa-trash-alt"></i></button>
        </div>`
        });
    } else {
        result.innerHTML = '<h3>Sem afazeres no momento...</h3>'
    }

}

//function done(event) {
//    const index = event.target.id;
//    console.log(index);
//}

function erase() {
   const index = document.event.target.value;
    listArr.splice(index, 1);
    saveItemsToLocaleStorage(listArr);
    showLists(true);
}

form.addEventListener('submit', function (event) {
    event.preventDefault();

    const items = document.querySelector('#addlist').value;
    const alertMessege = document.querySelector('.alert');

    if (items === "") {
        alertMessege.style = 'display: block;';
        alertMessege.innerHTML = '<i class="fas fa-pencil-alt"></i> Por favor, insira uma tarefa!';
        setTimeout(function () {
            alertMessege.style = 'display: none;';
        }, 3000);
    } else {
        alertMessege.style = 'display: none;'
        listArr.push(items);
        form.reset();
        saveItemsToLocaleStorage(listArr);
        showLists(true);
    }

});

window.onload = function () {
    showLists();
}