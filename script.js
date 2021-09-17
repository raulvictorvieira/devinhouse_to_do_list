const form = document.querySelector('form');
const addList = document.querySelector('#addlist')
const addButton = document.querySelector('#addbutton')
const result = document.querySelector('#result')
const listArr = JSON.parse(localStorage.getItem("items")) || [];


//função para salvar item da lista no localStorage
const saveItemsToLocaleStorage = () => {
    localStorage.setItem('items', JSON.stringify(listArr));
}




form.addEventListener('submit', function(event) {
    event.preventDefault();
    
    const item = document.querySelector('#addlist').value;
    const alertMessege = document.querySelector('.alert')

    if(item === ""){
        alertMessege.style = 'display: block;'
        alertMessege.innerHTML = '<i class="fas fa-pencil-alt"></i> Por favor, insira uma tarefa!.' 
    } else {
        alertMessege.style = 'display: none;'
        listArr.push(item);
        form.reset();
        saveItemsToLocaleStorage(listArr)
        //renderItems(listArr, true);
        console.log(listArr);
    }
    
})