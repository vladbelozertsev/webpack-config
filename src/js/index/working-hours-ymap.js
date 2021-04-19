import ymaps from 'ymaps';

const workingHoursYmap = async () => {
  const yandexMaps = await ymaps.load('https://api-maps.yandex.ru/2.1/?lang=ru_RU');
  const standartZoom = 15;
  const standartCenter = [44.948697, 34.095332];
  const myMap = new yandexMaps.Map(document.getElementById('working-hours__map'), {
    center: standartCenter,
    zoom: standartZoom,
  });

  myMap.geoObjects.add(
    new yandexMaps.Placemark(
      [44.948697, 34.095332],
      { balloonContent: 'улица Гоголя, 14', hintContent: 'Центральный музей Тавриды' },
      { preset: 'islands#redLeisureCircleIcon' }
    )
  );
};

export default workingHoursYmap;
