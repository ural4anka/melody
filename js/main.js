$(document).ready(function () {
    var currentFloor = 2; // переменная, где хранится текущий этаж
    var floorPath = $(".home-img path"); // каждый отдельный этыж в SVG
    var counterUp = $(".counter-up"); /*кнопка увличение этажа*/
    var counterDown = $(".counter-down"); /*кнопка уменьшение этажа*/

    /*функция при наведении мышью на этаж*/
    floorPath.on("mouseover", function () {
        floorPath.removeClass("current-floor"); // удаляем активный класс у этажа
        currentFloor = $(this).attr("data-floor"); // получаем значение текущего этажа
        $(".counter").text(currentFloor); // записываем значение этажа в счетчик справа
    });

    counterUp.on("click", function() { // отслеживаем клик по кнопке вверх
        if(currentFloor < 18) { // проверяем значение этажа, оно не должно быть больше 18
            currentFloor++; // пибавляем один этаж
            usCurrentFloor = currentFloor.toLocaleString('en-US', {minimumIntegerDigits: 2, useGroupping: false}); // форматируем переменную с этажем, чтобы было 01, а не 1
            $(".counter").text(usCurrentFloor); // записываем значение этажа в счетчик справа
            floorPath.removeClass("current-floor"); // удаляем активный класс у этажа
            $(`[data-floor=${usCurrentFloor}]`).toggleClass("current-floor");// подсвечиваем текущий этаж
        };
    });

    counterDown.on("click", function () { // отслеживаем клик по кнопке вниз
        if(currentFloor > 2){ // проверяем значение этажа, оно не должно быть меньше 2
            currentFloor--; // убавляем один этаж
            usCurrentFloor = currentFloor.toLocaleString('en-US', {minimumIntegerDigits: 2, useGroupping: false});// форматируем переменную с этажем, чтобы было 01, а не 1
            $(".counter").text(usCurrentFloor); // записываем значение этажа в счетчик справа
            floorPath.removeClass("current-floor"); // удаляем активный класс у этажа
            $(`[data-floor=${usCurrentFloor}]`).toggleClass("current-floor"); // подсвечиваем текущий этаж
        };
    });
});