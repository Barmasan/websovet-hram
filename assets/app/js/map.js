    let coords = [59.855780, 30.141325];
    var $mapElement = $('#map');
    ymaps.ready(init);
    function init(){
        // Создание карты.
        var myMap = new ymaps.Map("map", {
            // Координаты центра карты.
            // Порядок по умолчанию: «широта, долгота».
            // Чтобы не определять координаты центра карты вручную,
            // воспользуйтесь инструментом Определение координат.
            center: coords,
            // Уровень масштабирования. Допустимые значения:
            // от 0 (весь мир) до 19.
            zoom: 15,
            controls: []
        }),
        myPlacemark = new ymaps.Placemark(coords, {
            // Чтобы балун и хинт открывались на метке, необходимо задать ей определенные свойства.
        }, {
            iconLayout: 'default#image',
            iconImageSize: [44, 59],
            iconImageHref: 'assets/app/img/icons/point.png'
        });
        myMap.geoObjects.add(myPlacemark);
    }