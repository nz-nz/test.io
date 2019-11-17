let imageArr = [
    'https://mirpozitiva.ru/uploads/posts/2016-08/medium/1472042485_04.jpg',
    'https://mirpozitiva.ru/uploads/posts/2016-08/1472043884_02.jpg',
    'https://mirpozitiva.ru/uploads/posts/2016-08/medium/1472042585_06.jpg',
    'https://mirpozitiva.ru/uploads/posts/2016-08/medium/1472042805_21.jpg',
];

let rootElem = $('#root');

// см ниже
imageArr.forEach(elem=>addCard(elem));

function addCard(url){
    let card = $('<div>');
    let closeElem = $('<div>');
    let closeX = $('<span>');
    closeElem.addClass('close');
    closeX.text('X');
    card.css({
        'background-image': `url(${url})`,
        'width': '200px',
        'background-position': 'center',
        'background-size': 'cover',
    })

    closeElem.append(closeX);
    card.addClass('card');
    card.append(closeElem);
    rootElem.append(card);
}


function closeImg(obj) {
    $(obj).parents('.card').remove();
    // $ для вызова методов JQ к obj
    // $(obj).index();
    console.log(obj);
    // без let var такая запись объяв глобально, в данном случае для проверки
    tst = obj;
}

let closeList = $('.close');
closeList.click(function(){closeImg(this)});


function input(){
    let input = $('#form input').val();
    addCard(input);
    imageArr.push(input);
    let closeList = $('.close');
    closeList.click(function(){closeImg(this)});
}

let button = $('#addButton');

button.click(input);
