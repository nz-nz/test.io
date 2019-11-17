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

// function addCard(url){
//     let card = $('<div>');
//     let imgElem = $('<img>');
//     let closeElem = $('<div>');
//     let closeX = $('<span>');
//     closeElem.addClass('close');
//     closeX.text('X');
//     imgElem.attr({
//         'src': `${url}`,
//         'alt': 'img',
//     });
//     imgElem.css('width', '200px');
//
//     closeElem.append(closeX);
//     card.addClass('card');
//     card.append(imgElem);
//     card.append(closeElem);
//     rootElem.append(card);
// }

/*
elem.parents('<selector>');
elem.parent();
elem.remove()
 */


// let rootElem = $('#root');
// let card = $('<img>');
// card.attr({
//     'src': '21.jpg',
//     'alt': 'бла-бла-бла'
// });

// imageArr.forEach((elem)=>{console.log(elem)});
// // эквивантные записи
// // imageArr.forEach(elem=>console.log(elem));
// for(let i = 0; i<imageArr.length; i++){
//     console.log(imageArr[i]);
// }

// card.addClass('card');
// card.addClass('card1');
// card.addClass('card2');
//
// card.addClass('card3');
// card.removeClass('card3');
//
// rootElem.append(card);
