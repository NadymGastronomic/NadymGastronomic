import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    objects:[
      {
        id: 1,
        title: '1. Котлопункт Нового Надыма',
        mapUrl: '<iframe src="https://yandex.ru/map-widget/v1/-/CCUVq6uj9B" width="100%" height="400" frameborder="1" allowfullscreen="true" style="position:relative;"></iframe>',
        description: '',
        images:[
          {
            url: require('../assets/images/1/1.jpg'),
            source: 'https://pastvu.com/p/1327371'
          },
          {
            url: require('../assets/images/1/2.jpg'),
            source: 'https://www.etoretro.ru/pic256794.htm'
          },
        ],
        comments:[]
      },
      {
        id: 2,
        title: '2. Пекарня и хоз.магазин Нового Надыма',
        mapUrl: '<iframe src="https://yandex.ru/map-widget/v1/-/CCUVq6Xx8D" width="100%" height="400" frameborder="1" allowfullscreen="true" style="position:relative;"></iframe>',
        description: '',
        images:[
          {
            url: require('../assets/images/2/1.jpg'),
            source: 'https://pastvu.com/p/1136853'
          },
          {
            url: require('../assets/images/2/2.jpg'),
            source: 'https://pastvu.com/p/1415534'
          },
        ],
        comments:[]
      },
      {
        id: 3,
        title: '3. Отдел рабочего снабжения',
        mapUrl: '<iframe src="https://yandex.ru/map-widget/v1/-/CCUVqCQapA" width="100%" height="400" frameborder="1" allowfullscreen="true" style="position:relative;"></iframe>',
        description: '',
        images:[
          {
            url: require('../assets/images/3/0.jpg'),
            source: 'https://pastvu.com/p/1622084'
          },
          {
            url: require('../assets/images/3/1.jpg'),
            source: 'https://www.etoretro.ru/pic256794.htm'
          },
        ],
        comments:[]
      },
      {
        id: 4,
        title: '4. Картофелехранилище',
        mapUrl: '<iframe src="https://yandex.ru/map-widget/v1/-/CCUVqCCdhB" width="100%" height="400" frameborder="1" allowfullscreen="true" style="position:relative;"></iframe>',
        description: '<p>В 1967 году посёлок Новый Надым был выбран в качестве опорного пункта для проживания строителей и газодобытчиков Медвежьего месторождения. Первый строительный комсомольско-молодёжный трест «Севергазстрой» (образован 6 июня 1969 г.) взялся за обустройство месторождения и посёлка. Перед ним стояло множество задач, одной из которых была проблема продовольствия – обеспечения прибывших в Надым строителей продуктами питания. 31 декабря 1970 г. в посёлке Надымтрестом «Севергазстрой» сдаётся в эксплуатацию картофелехранилище базы отдела рабочего снабжения-9 УРСа «Главтюменнефтегазстрой» ёмкостью 1500 т.</p>',
        images:[],
        comments:[]
      },
      {
        id: 5,
        title: '5. Столовая "Ири" (в народе "Фанза")',
        mapUrl: '<iframe src="https://yandex.ru/map-widget/v1/-/CCUVyYRNSD" width="100%" height="400" frameborder="1" allowfullscreen="true" style="position:relative;"></iframe>',
        description: '<p>Кафе (столовая) «Ири» (за Домом торговли). В советскую эпоху по всей стране работали столовые, входящие в систему общественного питания СССР (общепит). Первое кафе в Надыме на 60 мест открылась 11 января 1971 года. Рядом в бараке находилась пекарня. Кафе совмещало функции клуба, в нём отмечались дни рождения, крестины, здесь принимали почётных гостей из правительства, проходили комсомольские свадьбы и выступления знаменитых в нашей стране артистов театра и эстрады. Официальное название заведения – кафе «Ири», что в переводе с ненецкого означает «луна», но люди называли его по-разному. Своей формой крыша этого здания напоминала китайскую. Концерты и спектакли проходили прямо в обеденном зале. Приезжал Игорь Владимиров со своей труппой, выступал Иосиф Кобзон. До того, как был построен кинотеатр «Победа», кафе «Ири» по сути заменяло Дом культуры.</p> <p>В кафе «Ири» работал кондитерский отдел, в котором были в продаже следующие хлебобулочные изделия: булочки, ватрушки с творогом и с повидлом, пирожки, пирожные: песочное, бисквитное, коржики. Дрожжевая продукция выпекалась ночью, днём выпекали торты на заказ. Повара были разных национальностей, приехали из разных уголков страны. Блюда в кафе-столовой готовились по сборнику рецептур 1953 года.</p>',
        images:[
          {
            url: require('../assets/images/5/1.jpg'),
            source: 'https://pastvu.com/p/1622084'
          },
          {
            url: require('../assets/images/5/2.jpg'),
            source: 'https://pastvu.com/p/1416787'
          },
          {
            url: require('../assets/images/5/2-2.jpg'),
            source: ''
          },
          {
            url: require('../assets/images/5/2-3.jpg'),
            source: ''
          },
          {
            url: require('../assets/images/5/3.jpg'),
            source: 'https://pastvu.com/p/1220927'
          },
          {
            url: require('../assets/images/5/3-1.jpg'),
            source: 'https://pastvu.com/p/1631123'
          },
          {
            url: require('../assets/images/5/4.jpg'),
            source: 'https://pastvu.com/p/1136853'
          },
          {
            url: require('../assets/images/5/5.jpg'),
            source: 'https://pastvu.com/p/1086393'
          },
          {
            url: require('../assets/images/5/6.jpg'),
            source: 'https://pastvu.com/p/1434726'
          },
          {
            url: require('../assets/images/5/7.jpg'),
            source: 'https://pastvu.com/p/1390639'
          },
        ],
        comments:[
          {
            text:'Кормили в столовой вполне прилично: салатик, первое, второе, компот, сметана, молоко, блинчики с мясом. Всё было сделано хорошо, вкусно, мы ходили туда с удовольствием. Главное ещё то, что недорого: 1–1руб. 50 коп. На эти деньги можно было сытно поесть. Столовая была хорошая. Девчата там работали молодые, энергичные. Обслуживали быстро. Нарезанный хлеб уже лежал на столах – бери сколько хочешь, там же была соль и горчица. Столовая использовалась также на все торжественные мероприятия. Если какое-то предприятие арендовало столовую, то в зале выступали вокально-инструментальные ансамбли этих организаций.',
            author: '<a href="https://vk.com/id102836710" target="_blank">Евгений Мамин</a>'
          },
          {
            text:'Столовая в восточном стиле временная. Называли её «фанза». Это творение Паши Дизера из проектно-сметного бюро СГС.',
            author: 'Анатолий Витковский'
          },
          {
            text:'Фанза открылась 11 января. Я устроилась работать в столовую 9 января посудомойкой. Воду таскали большими кастрюлями с водовозки. В здании было холодно. Но с продуктами было хорошо. Оленина была классная и в избытке. Грибы соленые бочками, кета. Горбуша бочками соленая. Говядина и свинина завозилась. Единственное, был сухой закон. Батареи грели, но столовая была громадная. Пока берешь еду в морозы, конечно, быстро остывало. Много завозили апельсинов, покупали ящиками. Цена 1,40 кг. Ближе к весне завозили овощи. Когда был мороз больше 50, за хлебом в барак ходили пешком. Это пекарня была рядом. Вообще все было не просто, но была молодость и надежды на лучшее. Все верили в лучшее.',
            author: '<a href="https://vk.com/id599240102" target="_blank">Татьяна Кондратенко</a>'
          },
          {
            text:'Здание убрали когда открыли "Дом торговли". Не сразу, ещё немного работала столовая. Но в столовой "Дома торговли" всем хватало места. И готовили отлично. Кондитерский цех сразу в "Дом торговли" перешёл. Там и цех большой, и оборудования больше, условия лучше для изготовления кондитерских изделий и хранения, да и для работников общепита раздевалка большая, душ, санузлы, все удобства. Фанза ушла в прошлое с открытием новой столовой.',
            author: '<a href="https://vk.com/id562641092" target="_blank">Татьяна Ражева</a>'
          },
        ]
      },
      {
        id: 6,
        title: '6. Магазин "Новинка"',
        mapUrl: '<iframe src="https://yandex.ru/map-widget/v1/-/CCUVy4qPpA" width="100%" height="400" frameborder="1" allowfullscreen="true" style="position:relative;"></iframe>',
        description: '<p>Продуктовый магазин «Новинка» открылся в 1973-74 годах. В 1970-80-х годах самым распространённым блюдом любого стола были картофель и квашеная капуста.</p>',
        images:[
          {
            url: require('../assets/images/6/1.jpg'),
            source: 'https://pastvu.com/p/1344579'
          },
          {
            url: require('../assets/images/6/2.jpg'),
            source: ''
          },
        ],
        comments:[
          {
            text:'Как много в те первые годы зависело от руководителя. Это В. Стрижов приказал строить этот магазин. Все остальные магазины располагались в балках и вагончиках. Три человека зайдут, четвёртый на крыльце топчется. Что касается продажи картошки. Теперешнему люду не понять, как аврально работали на разгрузке последних барж, а они обязательно приходили перед ледоставом загруженные капустой и картошкой, как развозили по организациям, как ковырялись в гнилье, набирая себе мешок. Капуста стоила 30 копеек. После Нового года в продаже мало чего свежего было.',
            author: '<a href="https://vk.com/id150551000" target="_blank">Валерий Мартынов</a>'
          },
          {
            text:'А мне больше всего запомнилось, какой же он был красивый, магагазин "Новинка"! Все стены внутри были выложены мозаикой. Но это в самом начале, потом все испортили, закрасили краской.',
            author: '<a href="https://vk.com/nina300659" target="_blank">Нина Кушнаренко</a>'
          },
        ]
      },
      {
        id: 7,
        title: '7. КБО (БПО)',
        mapUrl: '<iframe src="https://yandex.ru/map-widget/v1/-/CCUVy4EbOC" width="100%" height="400" frameborder="1" allowfullscreen="true" style="position:relative;"></iframe>',
        description: '<p>Здание КБО (комбината бытового обслуживания или блока первичного обслуживания в микрорайоне VА, позднее магазин №6 "Дом торговли") было построено в 1974 году, а то здание, где располагалось кафе «Ири», через некоторое время снесли. Из «Ири» сюда, на новое место работы приходят специалисты общепита. В КБО располагались столовая, магазин «Кулинария», гастрономический отдел, «Хлеб», «Одежда».</p>',
        images:[
          {
            url: require('../assets/images/7/1.jpg'),
            source: 'https://pastvu.com/p/1162401'
          },
          {
            url: require('../assets/images/7/2.jpg'),
            source: 'https://pastvu.com/p/1472022'
          },
          {
            url: require('../assets/images/7/3.jpg'),
            source: 'https://pastvu.com/p/1473914'
          },
          {
            url: require('../assets/images/7/4.jpg'),
            source: 'https://pastvu.com/p/1434764'
          },
          {
            url: require('../assets/images/7/5.jpg'),
            source: 'https://pastvu.com/p/1086393'
          },
          {
            url: require('../assets/images/7/6.jpg'),
            source: 'https://pastvu.com/p/1531271'
          },
          {
            url: require('../assets/images/7/7.jpg'),
            source: 'https://pastvu.com/p/1390639'
          },
        ],
        comments:[]
      },
      {
        id: 8,
        title: '8. Магазин №22',
        mapUrl: '<iframe src="https://yandex.ru/map-widget/v1/-/CCUVyBuQ8D" width="100%" height="400" frameborder="1" allowfullscreen="true" style="position:relative;"></iframe>',
        description: '<p>Детское кафе «Сказка» находилось в одном здании с магазином № 22 ОРСа № 1, ул. Комсомольская, д. 6а. Магазин был построен в 1975 году. Кафе открылось в 1976 году. В левой части здания был продуктовый магазин, в центре – «Кулинария», а в правой части – кафе «Сказка». Интерьер кафе соответствовал его названию, на стенах были изображения различных сказочных сюжетов. В ассортименте кроме горячих блюд был большой выбор мороженого, десертов и холодных напитков.</p>',
        images:[
          {
            url: require('../assets/images/8/1.jpg'),
            source: 'https://pastvu.com/p/1630164'
          },
          {
            url: require('../assets/images/8/2.jpg'),
            source: 'https://pastvu.com/p/1473911'
          },
          {
            url: require('../assets/images/8/3.jpg'),
            source: 'https://pastvu.com/p/1472780'
          },
        ],
        comments:[]
      },
      {
        id: 9,
        title: '9. Ресторан "65 параллель"',
        mapUrl: '<iframe src="https://yandex.ru/map-widget/v1/-/CCUVyBu6cD" width="100%" height="400" frameborder="1" allowfullscreen="true" style="position:relative;"></iframe>',
        description: '<p>В 1976 году в Надыме появился первый в городе ресторан «65-я Параллель» – место, призванное повысить культуру питания и обслуживания населения. В том же здании открылись столовая и магазин «Кулинария». Это здание типового проекта также являлось блоком первичного обслуживания.</p><p>В ресторане «65-я Параллель», расположенном на втором этаже, было 3 зала: основной зал на 120 чел. со своей танцплощадкой – танцполом, «Белый» зал (зал переговоров на 20 человек, VIPзона) – на 12 мест, «Розовый» (в 2011 г. был переделан в зал «Караоке») – на 25 мест. Работали в 2 смены в общей сложности более 20 сотрудников. У посетителей ресторана пользовался популярностью фирменный салат «65-я Параллель» из красной рыбы (сёмги или форели) и креветок.</p><p>В мае 2008 года после капитального ремонта вновь открылось предприятие розничной торговли – магазин № 5 «Кулинария». Магазин оборудовали современным торговым оборудованием и автоматизированной системой компьютерного учёта движения и учёта товара, в нём был представлен расширенный ассортимент кулинарной продукции. В 2000-х годах здание представляло собой комплекс общественного питания, в который входили: кафе «Русь» (на 1 этаже, на месте бывшей столовой появилось кафе с 2008 года), магазин «Кулинария», ресторан «65 параллель». В 2014 году ресторан «65-я параллель» был закрыт.</p>',
        images:[
          {
            url: require('../assets/images/9/1.jpg'),
            source: 'https://pastvu.com/p/1136788'
          },
          {
            url: require('../assets/images/9/2.jpg'),
            source: 'https://pastvu.com/p/1175637'
          },
          {
            url: require('../assets/images/9/3.jpg'),
            source: 'https://pastvu.com/p/1180571'
          },
          {
            url: require('../assets/images/9/4.jpg'),
            source: 'https://pastvu.com/p/1473473'
          },
          {
            url: require('../assets/images/9/4-1.jpg'),
            source: 'https://pastvu.com/p/1631137'
          },
          {
            url: require('../assets/images/9/5.jpg'),
            source: 'https://pastvu.com/p/1402942'
          },
          {
            url: require('../assets/images/9/6.jpg'),
            source: 'https://pastvu.com/p/1197507'
          },
          {
            url: require('../assets/images/9/7.jpg'),
            source: 'https://pastvu.com/p/1248742'
          },
          {
            url: require('../assets/images/9/8.jpg'),
            source: 'https://pastvu.com/p/1490730'
          },
          {
            url: require('../assets/images/9/9.jpg'),
            source: 'https://pastvu.com/p/1081344'
          },
          {
            url: require('../assets/images/9/10.jpg'),
            source: ''
          },
          {
            url: require('../assets/images/9/11.jpg'),
            source: 'https://pastvu.com/p/1264007'
          },
          {
            url: require('../assets/images/9/12.jpg'),
            source: 'https://pastvu.com/p/1263998'
          },
        ],
        comments:[]
      },
      {
        id: 10,
        title: '10. Кафе "Встреча"',
        mapUrl: '<iframe src="https://yandex.ru/map-widget/v1/-/CCUVyBwz0A" width="100%" height="400" frameborder="1" allowfullscreen="true" style="position:relative;"></iframe>',
        description: '<p>Кафе «Встреча» было открыто в 1979 г.</p>',
        images:[
          {
            url: require('../assets/images/10/1.jpg'),
            source: 'https://pastvu.com/p/1630163'
          },
          {
            url: require('../assets/images/10/2.jpg'),
            source: 'https://pastvu.com/p/1358908'
          },
          {
            url: require('../assets/images/10/3.jpg'),
            source: 'https://pastvu.com/p/1146421'
          },
        ],
        comments:[]
      },
      {
        id: 11,
        title: '11. Магазин № 25 «Надым»',
        mapUrl: '<iframe src="https://yandex.ru/map-widget/v1/-/CCUVyBT2SB" width="100%" height="400" frameborder="1" allowfullscreen="true" style="position:relative;"></iframe>',
        description: '<p>14 декабря 1984 года в городе открыт магазин № 25 «Надым» ОРСа-1 по продаже промышленных и продовольственных товаров торговой площадью 900 м²</p>',
        images:[
          {
            url: require('../assets/images/11/1.jpg'),
            source: 'https://pastvu.com/p/1499298'
          },
          {
            url: require('../assets/images/11/2.jpg'),
            source: 'https://pastvu.com/p/1102987'
          },
          {
            url: require('../assets/images/11/3.jpg'),
            source: 'https://pastvu.com/p/1482357'
          },
          {
            url: require('../assets/images/11/4.jpg'),
            source: 'https://pastvu.com/p/15002507'
          },
          {
            url: require('../assets/images/11/5.jpg'),
            source: 'https://pastvu.com/p/1234957'
          },
          {
            url: require('../assets/images/11/6.jpg'),
            source: 'https://pastvu.com/p/1086389'
          },
          {
            url: require('../assets/images/11/7.jpg'),
            source: 'https://pastvu.com/p/1081338'
          },
        ],
        comments:[]
      },
      {
        id: 12,
        title: 'Пивоваренный завод',
        mapUrl: '<iframe src="https://yandex.ru/map-widget/v1/-/CCUVyNTkpB" width="100%" height="400" frameborder="1" allowfullscreen="true" style="position:relative;"></iframe>',
        description: '',
        images:[
          {
            url: require('../assets/images/12/1.jpg'),
            source: ''
          },
          {
            url: require('../assets/images/12/2.jpg'),
            source: ''
          },
        ],
        comments:[]
      },
      {
        id: 13,
        title: 'Пельменная',
        mapUrl: '<iframe src="https://yandex.ru/map-widget/v1/-/CCUffYhJLB" width="100%" height="400" frameborder="1" allowfullscreen="true" style="position:relative;"></iframe>',
        description: '',
        images:[
          {
            url: require('../assets/images/13/1.jpg'),
            source: ''
          },
          {
            url: require('../assets/images/13/2.jpg'),
            source: ''
          },
          {
            url: require('../assets/images/13/3.jpg'),
            source: ''
          },
        ],
        comments:[]
      },
      {
        id: 14,
        title: 'Продуктовый магазин №67',
        mapUrl: '<iframe src="https://yandex.ru/map-widget/v1/-/CCUffFeAgB" width="100%" height="400" frameborder="1" allowfullscreen="true" style="position:relative;"></iframe>',
        description: '',
        images:[
          {
            url: require('../assets/images/14/1.jpg'),
            source: ''
          },
          {
            url: require('../assets/images/14/2.jpg'),
            source: ''
          },
        ],
        comments:[]
      },
      {
        id: 15,
        title: 'Кафе "Надым"',
        mapUrl: '<iframe src="https://yandex.ru/map-widget/v1/-/CCUffJRdCA" width="100%" height="400" frameborder="1" allowfullscreen="true" style="position:relative;"></iframe>',
        description: '',
        images:[
          {
            url: require('../assets/images/15/1.jpg'),
            source: 'https://pastvu.com/p/1166387'
          },
          {
            url: require('../assets/images/15/2.jpg'),
            source: 'https://pastvu.com/p/16262257'
          },
          {
            url: require('../assets/images/15/3.jpg'),
            source: 'https://pastvu.com/p/1247493'
          },
          {
            url: require('../assets/images/15/4.jpg'),
            source: 'https://pastvu.com/p/1248767'
          },
          {
            url: require('../assets/images/15/5.jpg'),
            source: 'https://pastvu.com/p/1086581'
          },
          {
            url: require('../assets/images/15/6.jpg'),
            source: 'https://pastvu.com/p/1091977'
          },
        ],
        comments:[]
      },
      {
        id: 16,
        title: 'Магазин №15',
        mapUrl: '<iframe src="https://yandex.ru/map-widget/v1/-/CCUfjEGPoC" width="100%" height="400" frameborder="1" allowfullscreen="true" style="position:relative;"></iframe>',
        description: 'После перестройки был открыт магазин "Меркурий".',
        images:[
          {
            url: require('../assets/images/16/1.jpg'),
            source: ''
          },
          {
            url: require('../assets/images/16/2.jpg'),
            source: ''
          },
          {
            url: require('../assets/images/16/3.jpg'),
            source: ''
          },
          {
            url: require('../assets/images/16/4.jpg'),
            source: ''
          },
        ],
        comments:[]
      },
      {
        id: 17,
        title: 'Магазин "Посуда"',
        mapUrl: '<iframe src="https://yandex.ru/map-widget/v1/-/CCUffZAHGB" width="100%" height="400" frameborder="1" allowfullscreen="true" style="position:relative;"></iframe>',
        description: '',
        images:[
          {
            url: require('../assets/images/17/1.jpg'),
            source: 'https://pastvu.com/p/1091965'
          },
          {
            url: require('../assets/images/17/2.jpg'),
            source: 'https://pastvu.com/p/1084701'
          },
          {
            url: require('../assets/images/17/3.jpg'),
            source: 'https://pastvu.com/p/1213328'
          },
          {
            url: require('../assets/images/17/4.jpg'),
            source: 'https://pastvu.com/p/1645002'
          },
        ],
        comments:[]
      },
      {
        id: 18,
        title: 'Магазин "Промышленные товары"',
        mapUrl: '<iframe src="https://yandex.ru/map-widget/v1/-/CCUff6fkPD" width="100%" height="400" frameborder="1" allowfullscreen="true" style="position:relative;"></iframe>',
        description: '',
        images:[
          {
            url: require('../assets/images/18/1.jpg'),
            source: ''
          },
        ],
        comments:[]
      },
      {
        id: 19,
        title: 'Магазин "Светлана"',
        mapUrl: '<iframe src="https://yandex.ru/map-widget/v1/-/CCUffCekpC" width="100%" height="400" frameborder="1" allowfullscreen="true" style="position:relative;"></iframe>',
        description: 'Затем магазин "Электрон"',
        images:[
          {
            url: require('../assets/images/19/1.jpg'),
            source: 'https://pastvu.com/p/1091970'
          },
          {
            url: require('../assets/images/19/2.jpg'),
            source: 'https://pastvu.com/p/1416419'
          },
          {
            url: require('../assets/images/19/3.jpg'),
            source: 'https://pastvu.com/p/1375881'
          },
          {
            url: require('../assets/images/19/4.jpg'),
            source: 'https://pastvu.com/p/1084702'
          },
          {
            url: require('../assets/images/19/5.jpg'),
            source: 'https://pastvu.com/p/1102978'
          },
          {
            url: require('../assets/images/19/6.jpg'),
            source: 'https://pastvu.com/p/1087267'
          },
          {
            url: require('../assets/images/19/7.jpg'),
            source: 'https://pastvu.com/p/1471291'
          },
          {
            url: require('../assets/images/19/8.jpg'),
            source: 'https://pastvu.com/p/1503484'
          },
          {
            url: require('../assets/images/19/9.jpg'),
            source: 'https://pastvu.com/p/1357792'
          },
        ],
        comments:[]
      },
      {
        id: 20,
        title: 'Магазин "Таёжный"',
        mapUrl: '<iframe src="https://yandex.ru/map-widget/v1/-/CCUfjYVYCA" width="100%" height="400" frameborder="1" allowfullscreen="true" style="position:relative;"></iframe>',
        description: '',
        images:[
          {
            url: require('../assets/images/20/1.jpg'),
            source: 'https://pastvu.com/p/1146417'
          },
        ],
        comments:[]
      },
    ],
    timeline:[
      {
        id: 1,
        date: '31.12.1970',
        text: 'Трест «Севергазстрой» сдаёт в эксплуатацию <a href="/#/p4">картофелехранилище</a> базы ОРС-9 УРСа «Главтюменнефтегазстрой» ёмкостью 1500 т.',
      },
      {
        id: 2,
        date: '11 января 1971',
        text: 'Открытие столовой <a href="/#/p5">«Ири»</a>.',
      },
      {
        id: 3,
        date: '1973',
        text: 'Открытие <a href="/#/p6">магазина «Новинка»</a>.',
      },
      {
        id: 4,
        date: '1974',
        text: 'Построен <a href="/#/p7">«Дом торговли»</a>.',
      },
      {
        id: 5,
        date: '06.01.1974',
        text: 'Приказом № 1 СибгазУРСа был создан ОРС № 1 ПО «Надымгазпром». Цель создания предприятия – наиболее полное удовлетворение потребностей работников газовой отрасли в товарах народного потребления (продовольственных и промышленных), предоставление услуг в области торговли и общественного питания. На момент образования первым руководителем ОРСа № 1 стал Кондратьев Александр Николаевич (раньше он был заместителем начальника ОРСа-9). Как талантливый организатор и крепкий хозяйственник, Кондратьев создал мощный коллектив специалистов по торговле и общественному питанию, нацелив их на решение поставленных задач в экстремальных условиях Крайнего Севера. В период становления и развития г. Надыма, бурной разработки и обустройства газовых месторождений работа единственного в городе торгового предприятия имела политическое значение для системы в целом.',
      },
      {
        id: 6,
        date: '1975',
        text: 'Построен <a href="/#/p8">магазин №22</a>.',
      },
      {
        id: 6-1,
        date: '1975',
        text: 'Открытие молокозавода.',
      },
      {
        id: 7,
        date: '1976',
        text: 'Открытие <a href="/#/p8">кафе «Сказка»</a>.',
      },
      {
        id: 8,
        date: '1976',
        text: 'Открытие <a href="/#/p9">ресторана «65 параллель»</a>.',
      },
      {
        id: 9,
        date: '1979',
        text: 'Открытие <a href="/#/p10">кафе «Встреча»</a>.',
      },
      {
        id: 10,
        date: '1981',
        text: 'Создано профессионально-техническое училище, где обучали рабочим профессиям, в том числе обучали на поваров и кондитеров. Многие выпускники этого училища работали потом в надымских учреждениях общественного питания.',
      },
      {
        id: 11,
        date: '14.12.1984',
        text: 'Открытие <a href="/#/p11">магазина № 25 «Надым»</a>.',
      },
      {
        id: 12,
        date: '14.12.1984',
        text: 'Открытие кафе «Янтарное».',
      },
      {
        id: 13,
        date: '1984',
        text: 'Появился торт «Надымчанка».',
      },
      {
        id: 14,
        date: '29.07.1988',
        text: 'В целях повышения заинтересованности коллективов предприятий общественного питания в результатах труда, повышения качества обслуживания населения горисполком разрешил ОРСу № 1 и ОРСу № 2 (в п. Пангоды, образован 14.01.1974) в порядке хозяйственного эксперимента переводить предприятия общественного питания по согласованию с трудовыми коллективами на договорную форму организации и материального стимулирования труда (арендный подряд).',
      },
      {
        id: 15,
        date: '31.10.1988',
        text: 'В целях защиты интересов трудящихся, утверждения принципа социальной справедливости решением Надымского горисполкома и райкома профсоюза рабочих нефтяной и газовой промышленности были созданы группы рабочего контроля за работой по торговому, бытовому обслуживанию и общественному питанию. Рабочие контролёры были обязаны принимать и рассматривать жалобы и заявления потребителей, выявлять случаи обсчета, обвешивания, припрятывания дефицитных товаров. К нарушителям принимались меры административного взыскания вплоть до исключения из членов профсоюза.',
      },
      {
        id: 16,
        date: '1999',
        text: 'На базе ОРСа № 1 ПО «Надымгазпром» образован филиал «Надымгазторг» ООО «Запсибгазторг».',
      },
      {
        id: 17,
        date: '2005',
        text: 'В состав филиала «Надымгазторг» вошёл филиал «Пангодыгазторг» в качестве торгового отделения, что позволило наилучшим образом скоординировать работу торговой сети с целью улучшения обслуживания и товарообеспечения газодобытчиков.',
      },
      {
        id: 18,
        date: '2008',
        text: 'Открытие <a href="/#/p9">кафе «Русь»</a>.',
      },
      {
        id: 19,
        date: '2014',
        text: 'Закрытие <a href="/#/p9">ресторана «65 параллель»</a>.',
      },
      {
        id: 20,
        date: '2016',
        text: 'Сеть столовых Надымгазторга перешла в подчинение Филиалу «Надымское управление по организации общественного питания» ООО «Газпром питание».',
      },
    ]
  },
  mutations: {
  },
  actions: {
  },
  modules: {
  }
})
