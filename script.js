const form = document.querySelector('form');
const addList = document.querySelector('#addlist')
const addButton = document.querySelector('#addbutton')
const result = document.querySelector('#result')
const listArr = JSON.parse(localStorage.getItem("items")) || [];


//função para salvar item da lista no localStorage
const saveItemsToLocaleStorage = () => {
    localStorage.setItem('items', JSON.stringify(listArr));
}

//função de popular as listas
function showLists(clearList = false) {

    //Limpar o conteúdo da div sempre que uma nova lista for inserida
    if(clearList){
        result.innerHTML = '';
    }

    //checar se o array existe e é maior que zero
    if(listArr.length > 0) {
        //11. utilizar o loop forEach para imprimir os nossos filmes
        listArr.forEach((items) => {
            result.innerHTML += `<div>
            <input type="checkbox" value:"${listArr.indexOf(items)}">
            <h3>
                ${items}
            </h3>
            <button class="erasebutton" onclick="erase()"><i class="far fa-trash-alt"></i></button>
        </div>`
        });
    }else {
        result.innerHTML = 'Sem afazeres no momento...'
    }

}

function erase() {
    const erasebutton = document.querySelector('.erasebutton')
}




form.addEventListener('submit', function(event) {
    event.preventDefault();
    
    const items = document.querySelector('#addlist').value;
    const alertMessege = document.querySelector('.alert')

    if(items === ""){
        alertMessege.style = 'display: block;';
        alertMessege.innerHTML = '<i class="fas fa-pencil-alt"></i> Por favor, insira uma tarefa!';
        setTimeout(function(){
            alertMessege.style = 'display: none;';
        }, 3000);
    } else {
        alertMessege.style = 'display: none;'
        listArr.push(items);
        form.reset();
        saveItemsToLocaleStorage(listArr)
        showLists(true)
        //renderItems(listArr, true);
    }
    
})

window.onload = function() {
    showLists();
}