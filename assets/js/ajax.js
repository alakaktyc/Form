//после загрузки DOM-дерева страницы
document.addEventListener("DOMContentLoaded",function() {
    //получить кнопку
    const mybutton = document.querySelector('.btn--request');
    //подписаться на событие click по кнопке и назначить обработчик, который будет выполнять действия, указанные в безымянной функции
    mybutton.addEventListener("click", function(){
        //1. Сбор данных из формы, необходимых для выполнения запроса на сервере
        let formData = new FormData (document.forms.contact);
        //Подготовка данных для отправки на сервер
        //т.е. кодирование с помощью метода encodeURIComponent
        let nameClient = document.forms.contact.name.value;
        nameClient = encodeURIComponent(nameClient);
        let phoneClient = document.forms.contact.phone.value;
        phoneClient = encodeURIComponent(phoneClient);
        let commentClient = document.forms.contact.comment.value;
        commentClient = encodeURIComponent(commentClient);
        // 2. Создание переменной request
        let request = new XMLHttpRequest();
        // 3. Настройка запроса
        request.open('POST','assets/php/processing.php',true);
        // 4. Подписка на событие onreadystatechange и обработка его с помощью анонимной функции
        request.addEventListener('readystatechange', function() {
            //если запрос пришёл и статус запроса 200 (OK)
            if ((request.readyState === 4) && (request.status === 200)) {
                // например, выведем объект XHR в консоль браузера
                console.log(request);
                // и ответ (текст), пришедший с сервера в окне alert
                console.log(request.responseText);
            }
        });
        // 5. Отправка запроса на сервер. В качестве параметра указываем данные, которые необходимо передать (необходимо для POST)
        request.send(formData);
    });
});