window.onload  = function() {
    RenameDrive.render();
    $( "#rename-data" ).accordion({
      collapsible: true,
      active: false,
      heightStyle: "content"
    });
};

var RenameDrive = {
    types: {
        "street":     "вулиця",
        "lane":       "провулок",
        "avenue":     "проспект",
        "impasse":    "тупик",
        "square":     "площа",
        "embankment": "набережна",
        "park":       "парк",
        "slope":      "узвіз",
        "area":       "житловий масив"
    },
    data: {
        "r01": {
            oldAreaName: "Амур-Нижньодніпровський",
            newAreaName: "Амур-Нижньодніпровський",
            objects: [
                {
                    "type": "street", 
                    "oldName": "Баглія",
                    "newName": "Брацлавська"
                },
                {
                    "type": "street", 
                    "oldName": "Варейкіса",
                    "newName": "Джузеппе Гарібальді"
                },
                {
                    "type": "street", 
                    "oldName": "Воровського",
                    "newName": "Дмитра Багалія"
                },
                {
                    "type": "avenue", 
                    "oldName": "Воронцова",
                    "newName": "Мануйлівський"
                },
                {
                    "type": "avenue", 
                    "oldName": "ім. газети 'Правда'",
                    "newName": "Слобожанський"
                },
                {
                    "type": "street", 
                    "oldName": "Галана",
                    "newName": "Празької весни"
                },
                {
                    "type": "street", 
                    "oldName": "Галковського",
                    "newName": "Сарматська"
                },
                {
                    "type": "street", 
                    "oldName": "Гайдара",
                    "newName": "Дмитра Марковича"
                },
                {
                    "type": "street", 
                    "oldName": "Героїв Громадянської війни",
                    "newName": "Марії Лисиченко"
                },
                {
                    "type": "street", 
                    "oldName": "Годовикова",
                    "newName": "Братиславська"
                },
                {
                    "type": "street", 
                    "oldName": "Гудкова",
                    "newName": "Яна Гуса"
                },
                {
                    "type": "street", 
                    "oldName": "Енгельса",
                    "newName": "Афанасьєва-Чужбинського"
                },
                {
                    "type": "street", 
                    "oldName": "Желваківського",
                    "newName": "Полонської-Василенко"
                },
                {
                    "type": "street", 
                    "oldName": "Замполіта Бєляєва",
                    "newName": "Бєляєва"
                },
                {
                    "type": "street", 
                    "oldName": "Захаренка",
                    "newName": "Глухівська"
                },
                {
                    "type": "street", 
                    "oldName": "Іскри",
                    "newName": "Піскова"
                },
                {
                    "type": "street", 
                    "oldName": "Кіровоградська",
                    "newName": "Інгульска"
                },
                {
                    "type": "lane", 
                    "oldName": "Кіровоградський",
                    "newName": "Інгульский"
                },
                {
                    "type": "street", 
                    "oldName": "Клочка",
                    "newName": "Данила Заболотного"
                },
                {
                    "type": "street", 
                    "oldName": "Комінтерну",
                    "newName": "Яхнеківська"
                },
                {
                    "type": "street", 
                    "oldName": "Котовського",
                    "newName": "Івана Труби"
                },
                {
                    "type": "street", 
                    "oldName": "Кочкіна",
                    "newName": "Євгена Вирового"
                },
                {
                    "type": "street", 
                    "oldName": "Краснопресненська",
                    "newName": "Степана Величка"
                },
                {
                    "type": "impasse", 
                    "oldName": "Краснопресненський",
                    "newName": "Самійлівський"
                },
                {
                    "type": "street", 
                    "oldName": "Кузнецова",
                    "newName": "Опанаса Ковпака"
                },
                {
                    "type": "street", 
                    "oldName": "Лебедя",
                    "newName": "Опанаса Сторубля"
                },
                {
                    "type": "street", 
                    "oldName": "Леоніда Брежнєва",
                    "newName": "Братства тарасівців"
                },
                {
                    "type": "street", 
                    "oldName": "Лепсе",
                    "newName": "Миколи Кузьменка"
                },
                {
                    "type": "street", 
                    "oldName": "Логаша",
                    "newName": "Івана Пулюя"
                },
                {
                    "type": "lane", 
                    "oldName": "Логаша",
                    "newName": "Івана Пулюя"
                },
                {
                    "type": "street", 
                    "oldName": "Людміли Мокієвської",
                    "newName": "Крушельницької"
                },
                {
                    "type": "street", 
                    "oldName": "Малишева",
                    "newName": "Василя Тютюнника"
                },
                {
                    "type": "lane", 
                    "oldName": "Малишева",
                    "newName": "Тютюнника"
                },
                {
                    "type": "impasse", 
                    "oldName": "Малишева",
                    "newName": "Тютюнника"
                },
                {
                    "type": "street", 
                    "oldName": "Манкевича",
                    "newName": "Галі Мазуренко"
                },
                {
                    "type": "street", 
                    "oldName": "Менжинського",
                    "newName": "Миколи Сумцова"
                },
                {
                    "type": "street", 
                    "oldName": "Набережна Чудновського",
                    "newName": "Набережна Старосамарська"
                },
                {
                    "type": "street", 
                    "oldName": "Орджонікідзе",
                    "newName": "Петра Бикова"
                },
                {
                    "type": "street", 
                    "oldName": "Пархоменка",
                    "newName": "Григорія Граб’янки"
                },
                {
                    "type": "street", 
                    "oldName": "Піонерська",
                    "newName": "Олени Пчілки"
                },
                {
                    "type": "lane", 
                    "oldName": "Пролетарської перемоги",
                    "newName": "Каразінський"
                },
                {
                    "type": "street", 
                    "oldName": "Пролетарської перемоги",
                    "newName": "Василя Каразіна"
                },
                {
                    "type": "street", 
                    "oldName": "Радгоспна",
                    "newName": "Нестора Махна"
                },
                {
                    "type": "street", 
                    "oldName": "Сафонова",
                    "newName": "Новгород-Сіверська"
                },
                {
                    "type": "lane", 
                    "oldName": "Сиворонова",
                    "newName": "Веселковий"
                },
                {
                    "type": "street", 
                    "oldName": "Пролетарської перемоги",
                    "newName": "Каразінський"
                },
                {
                    "type": "street", 
                    "oldName": "Стаханівців",
                    "newName": "Івана Сокульского"
                },
                {
                    "type": "lane", 
                    "oldName": "Цюрюпинський",
                    "newName": "Весняних коновалій"
                },
                {
                    "type": "street", 
                    "oldName": "Чапаєва",
                    "newName": "Олександра Потебні"
                },
                {
                    "type": "street", 
                    "oldName": "Червоноармійська",
                    "newName": "Просвітянська"
                },
                {
                    "type": "street", 
                    "oldName": "Червоного казацтва",
                    "newName": "Терещінківська"
                },
                {
                    "type": "street", 
                    "oldName": "Червонопартизанська",
                    "newName": "Василя Макуха"
                }
                
            ]
        },
        "r02": {
            oldAreaName: "Бабушкінський",
            newAreaName: "Шевченківський",
            objects: [
                {
                    "type": "street", 
                    "oldName": "40 років комсомолу",
                    "newName": "Антіна Синявського"
                },
                {
                    "type": "lane", 
                    "oldName": "40 років комсомолу",
                    "newName": "Синявського"
                },
                {
                    "type": "street", 
                    "oldName": "Артема",
                    "newName": "Січових стрільців"
                },
                {
                    "type": "street", 
                    "oldName": "Благоєва",
                    "newName": "Сергія Подолинського"
                },
                {
                    "type": "street", 
                    "oldName": "Володарського",
                    "newName": "Олександра Кониського"
                },
                {
                    "type": "street", 
                    "oldName": "Гопнер",
                    "newName": "Магдебурзького права"
                },
                {
                    "type": "lane", 
                    "oldName": "Дибенка",
                    "newName": "Привабливий"
                },
                {
                    "type": "street", 
                    "oldName": "Дибенка",
                    "newName": "Василя Кука"
                },
                {
                    "type": "street", 
                    "oldName": "Димитрова",
                    "newName": "Михайла Драгоманова"
                },
                {
                    "type": "avenue", 
                    "oldName": "Ілліча",
                    "newName": "Пилипа Орлика"
                },
                {
                    "type": "street", 
                    "oldName": "Карла Лібкнехта",
                    "newName": "Михайла Грушевського"
                },
                {
                    "type": "street", 
                    "oldName": "Комсомольська",
                    "newName": "Старокозацька"
                },
                {
                    "type": "street", 
                    "oldName": "Копилова",
                    "newName": "Бориса Познанського"
                },
                {
                    "type": "lane", 
                    "oldName": "Копилова",
                    "newName": "Бориса Познанського"
                },
                {
                    "type": "street", 
                    "oldName": "Корнійчука",
                    "newName": "Бориса Мозолевського"
                },
                {
                    "type": "lane", 
                    "oldName": "Лалаянца",
                    "newName": "Скляренка"
                },
                {
                    "type": "street", 
                    "oldName": "Лалаянца",
                    "newName": "Семена Скляренка"
                },
                {
                    "type": "street", 
                    "oldName": "Мануїдьского",
                    "newName": "Михайла Максимовича"
                },
                {
                    "type": "street", 
                    "oldName": "Миронова",
                    "newName": "Євроейська"
                },
                {
                    "type": "street", 
                    "oldName": "Московська",
                    "newName": "Володимира Мономаха"
                },
                {
                    "type": "embankment", 
                    "oldName": "ім. В.І. Леніна",
                    "newName": "Січеславська набережна"
                },
                {
                    "type": "street", 
                    "oldName": "Пеліна",
                    "newName": "Катерини Мессарош"
                },
                {
                    "type": "street", 
                    "oldName": "Перекопської Перемоги",
                    "newName": "Олександри Риндовської"
                },
                {
                    "type": "street", 
                    "oldName": "Петра Моїсеєнка",
                    "newName": "Василя Курбаса"
                },
                {
                    "type": "street", 
                    "oldName": "Плеханова",
                    "newName": "Князя Володимира Великого"
                },
                {
                    "type": "street", 
                    "oldName": "Подвойського",
                    "newName": "Осипа Бодянського"
                },
                {
                    "type": "street", 
                    "oldName": "Сєрова",
                    "newName": "Андрія Фабра"
                },
                {
                    "type": "street", 
                    "oldName": "Тельмана",
                    "newName": "Ігоря Сікорського"
                },
                {
                    "type": "street", 
                    "oldName": "Ткаченка",
                    "newName": "Вадима Сідура"
                },
                {
                    "type": "lane", 
                    "oldName": "Цкахая",
                    "newName": "Улюблений"
                },
                {
                    "type": "street", 
                    "oldName": "Цхакая",
                    "newName": "Василя Біднова"
                },
                {
                    "type": "square", 
                    "oldName": "Червона",
                    "newName": "Троїцька"
                },
                {
                    "type": "street", 
                    "oldName": "Червона",
                    "newName": "Троїцька"
                },
                {
                    "type": "street", 
                    "oldName": "Чередниченка",
                    "newName": "Михайла Вербицького"
                },
                {
                    "type": "lane", 
                    "oldName": "Чередниченка",
                    "newName": "Вербицького"
                },
                {
                    "type": "street", 
                    "oldName": "Чкалова",
                    "newName": "Святослава Хороброго"
                },
                {
                    "type": "street", 
                    "oldName": "Шпіндяка",
                    "newName": "Симона Петлюри"
                },
                {
                    "type": "street", 
                    "oldName": "Юних ленінцев",
                    "newName": "Козака Мамая"
                },
                {
                    "type": "street", 
                    "oldName": "Якіра",
                    "newName": "Івана Сулими"
                },
                {
                    "type": "lane", 
                    "oldName": "Якіра",
                    "newName": "Сулимівський"
                }
            ]
        },
        "r03": {
            oldAreaName: "Жовтневий",
            newAreaName: "Соборний",
            objects: [
                {
                    "type": "street", 
                    "oldName": "Арсеничева",
                    "newName": "Олександра Рейнгарда"
                },
                {
                    "type": "street", 
                    "oldName": "Боженка",
                    "newName": "Хортицька"
                },
                {
                    "type": "street", 
                    "oldName": "Бонч-Бруєвича",
                    "newName": "Дмитра Байди-Вишневецького"
                },
                {
                    "type": "street", 
                    "oldName": "Боженка",
                    "newName": "Хортицька"
                },
                {
                    "type": "street", 
                    "oldName": "Ворошилова",
                    "newName": "Сергія Єфремова"
                },
                {
                    "type": "street", 
                    "oldName": "Генерала Грушевого",
                    "newName": "Гетьмана Петра Дорошенка"
                },
                {
                    "type": "street", 
                    "oldName": "Дзержинського",
                    "newName": "Володимира Вернадського"
                },
                {
                    "type": "street", 
                    "oldName": "Дмитра Донського",
                    "newName": "Дмитра Донцова"
                },
                {
                    "type": "park", 
                    "oldName": "Жовтневий",
                    "newName": "Івана Старова"
                },
                {
                    "type": "street", 
                    "oldName": "Жуковського",
                    "newName": "Василя Жуковського"
                },
                {
                    "type": "street", 
                    "oldName": "Клари Цеткін",
                    "newName": "Володимира Моссаковського"
                },
                {
                    "type": "lane", 
                    "oldName": "Колгоспний",
                    "newName": "Лоцманів Казанців"
                },
                {
                    "type": "street", 
                    "oldName": "Куйбишева",
                    "newName": "Володимира Винниченка"
                },
                {
                    "type": "park", 
                    "oldName": "М.О.Щолокова",
                    "newName": "Юрія Переможця"
                },
                {
                    "type": "street", 
                    "oldName": "Мироненка",
                    "newName": "Олени Ган"
                },
                {
                    "type": "street", 
                    "oldName": "МОПРа",
                    "newName": "Григорія Омельченка"
                },
                {
                    "type": "street", 
                    "oldName": "ім. В.І. Леніна",
                    "newName": "Січеславська Набережна"
                },
                {
                    "type": "street", 
                    "oldName": "Радянський",
                    "newName": "Феодосія Макаревського"
                },
                {
                    "type": "street", 
                    "oldName": "Рози Люксембург",
                    "newName": "Марії Заньковецької"
                },
                {
                    "type": "lane", 
                    "oldName": "Урицького",
                    "newName": "Євгена Коновальця"
                },
                {
                    "type": "slope", 
                    "oldName": "Урицького",
                    "newName": "Струківський"
                },
                {
                    "type": "street", 
                    "oldName": "Фурманова",
                    "newName": "Героїв Крут"
                },
                {
                    "type": "lane", 
                    "oldName": "Фурманова",
                    "newName": "Героїв Крут"
                },
                {
                    "type": "street", 
                    "oldName": "Фучіка",
                    "newName": "Івана Акінфієва"
                },
                {
                    "type": "street", 
                    "oldName": "Червоноповстанська балка",
                    "newName": "Довга балка"
                }
            ]
        },
        "r04": {
            oldAreaName: "Індустріальній",
            newAreaName: "Індустріальній",
            objects: [
                {
                    "type": "street", 
                    "oldName": "Бєлінського",
                    "newName": "Ізмаїла Срезневського"
                },
                {
                    "type": "avenue", 
                    "oldName": "ім. Газети Правда",
                    "newName": "Слобожанський"
                },
                {
                    "type": "area", 
                    "oldName": "Клочко",
                    "newName": "Калиновський"
                },
                {
                    "type": "street", 
                    "oldName": "Комісара Крилова",
                    "newName": "Олександра Оцупа"
                },
                {
                    "type": "street", 
                    "oldName": "Косіора",
                    "newName": "Петра Калнишевського"
                },
                {
                    "type": "street", 
                    "oldName": "Радгоспна",
                    "newName": "Василя Сухомлинського"
                },
                {
                    "type": "street", 
                    "oldName": "Радянської Армії",
                    "newName": "Волонтерська"
                },
                {
                    "type": "street", 
                    "oldName": "Червонопартизанська",
                    "newName": "Василя Макуха"
                }
            ]
        },
        "r05": {
            oldAreaName: "Кіровський",
            newAreaName: "Центральний",
            objects: [
                {
                    "type": "street", 
                    "oldName": "55 років ВЛКСМ",
                    "newName": "Пластівська"
                },
                {
                    "type": "square", 
                    "oldName": "80-річчя Дніпропетровській області",
                    "newName": "Козаціка"
                },
                {
                    "type": "street", 
                    "oldName": "Благоєва",
                    "newName": "Сергія Подолинського"
                },
                {
                    "type": "street", 
                    "oldName": "Войцеховіча",
                    "newName": "Миколи Руденка"
                },
                {
                    "type": "street", 
                    "oldName": "Горького",
                    "newName": "Княгині Ольги"
                },
                {
                    "type": "street", 
                    "oldName": "Димитрова",
                    "newName": "Михайла Драгоманова"
                },
                {
                    "type": "street", 
                    "oldName": "Ілліча",
                    "newName": "Пилипа Орлика"
                },
                {
                    "type": "street", 
                    "oldName": "Комсомольська",
                    "newName": "Старокозаціка"
                },
                {
                    "type": "street", 
                    "oldName": "Краснозаводська",
                    "newName": "Академіка Белелюбського"
                },
                {
                    "type": "street", 
                    "oldName": "Ленінградська",
                    "newName": "Князя Ярослава Мудрого"
                },
                {
                    "type": "square", 
                    "oldName": "Миколи Островського",
                    "newName": "Старомостова"
                },
                {
                    "type": "street", 
                    "oldName": "Мініна",
                    "newName": "Менахем-Мендл Шнеєрсона"
                },
                {
                    "type": "street", 
                    "oldName": "набережна ім. В.І. Леніна",
                    "newName": "Січеславська Набережна"
                },
                {
                    "type": "square", 
                    "oldName": "Петровського",
                    "newName": "Вокзальна"
                },
                {
                    "type": "street", 
                    "oldName": "Плеханова",
                    "newName": "Князя Володимира Великого"
                },
                {
                    "type": "street", 
                    "oldName": "Свердлова",
                    "newName": "Володимира Антоновича"
                },
                {
                    "type": "street", 
                    "oldName": "Сергія Лазо",
                    "newName": "Кулишівська"
                },
                {
                    "type": "street", 
                    "oldName": "Сєрова",
                    "newName": "Андрія Фабра"
                },
                {
                    "type": "street", 
                    "oldName": "Тельмана",
                    "newName": "Ігоря Сікорського"
                },
                {
                    "type": "street", 
                    "oldName": "Фрунзе",
                    "newName": "Василя Чапленка"
                },
                {
                    "type": "street", 
                    "oldName": "Червонофлотська",
                    "newName": "Петра Григоренка"
                },
                {
                    "type": "street", 
                    "oldName": "Чичеріна",
                    "newName": "Надії Алексєєнко"
                },
                {
                    "type": "street", 
                    "oldName": "Чкалова",
                    "newName": "Святослава Хороброго"
                },
                {
                    "type": "street", 
                    "oldName": "Шпіндяка",
                    "newName": "Симона Петлюри"
                },
                {
                    "type": "street", 
                    "oldName": "Щербицького",
                    "newName": "Олени Блавацької"
                },
                {
                    "type": "street", 
                    "oldName": "Щорса",
                    "newName": "Костомарівська"
                }
            ]
        },
        "r06": {
            oldAreaName: "Красногвардійський",
            newAreaName: "Чечелівський",
            objects: [
                {
                    "type": "street", 
                    "oldName": "Бабушкіна",
                    "newName": "Романа Шухевича"
                },
                {
                    "type": "street", 
                    "oldName": "Балка колгоспна",
                    "newName": "Балка мальовнича"
                },
                {
                    "type": "street", 
                    "oldName": "Більшовицький",
                    "newName": "Хортицька"
                },
                {
                    "type": "street", 
                    "oldName": "Братів Міллер",
                    "newName": "Леоніда Жебуньова"
                },
                {
                    "type": "street", 
                    "oldName": "Булигіна",
                    "newName": "Івана Езау"
                },
                {
                    "type": "lane", 
                    "oldName": "Ілліча",
                    "newName": "Орлика"
                },
                {
                    "type": "lane", 
                    "oldName": "Калініна",
                    "newName": "Січовий"
                },
                {
                    "type": "slope", 
                    "oldName": "Калініна",
                    "newName": "Ярмарковий"
                },
                {
                    "type": "street", 
                    "oldName": "Калінінградська",
                    "newName": "Трофима Романченка"
                },
                {
                    "type": "street", 
                    "oldName": "Краснозаводська",
                    "newName": "Академіка Белелюбського"
                },
                {
                    "type": "street", 
                    "oldName": "Красночечелівська",
                    "newName": "Олександра Чернікова"
                },
                {
                    "type": "street", 
                    "oldName": "Крошки",
                    "newName": "Михайла Комарова"
                },
                {
                    "type": "street", 
                    "oldName": "Меренкова",
                    "newName": "Павла Полуботка"
                },
                {
                    "type": "lane", 
                    "oldName": "Піонерський",
                    "newName": "Скаутський"
                },
                {
                    "type": "street", 
                    "oldName": "Профінтерну",
                    "newName": "Володимира Хреннікова"
                },
                {
                    "type": "street", 
                    "oldName": "П’ятирічки",
                    "newName": "Шляхівська"
                },
                {
                    "type": "street", 
                    "oldName": "Свердлова",
                    "newName": "Володимира Антоновича"
                },
                {
                    "type": "street", 
                    "oldName": "Соціалістична",
                    "newName": "Павла Чубинського"
                },
                {
                    "type": "street", 
                    "oldName": "Чичеріна",
                    "newName": "Надії Алексєєнко"
                }
            ]
        },
        "r07": {
            oldAreaName: "Ленінський",
            newAreaName: "Новокодацький",
            objects: [
                {
                    "type": "street", 
                    "oldName": "80-річчя Дніпропетровщини",
                    "newName": "Олександра Красносельского"
                },
                {
                    "type": "street", 
                    "oldName": "ХІХ партз'їзду",
                    "newName": "Івана Гонти"
                },
                {
                    "type": "street", 
                    "oldName": "Аверіна",
                    "newName": "Курінна"
                },
                {
                    "type": "street", 
                    "oldName": "Аврори",
                    "newName": "Трифона Гладченка"
                },
                {
                    "type": "street", 
                    "oldName": "Бібікова",
                    "newName": "Павла Бута"
                },
                {
                    "type": "street", 
                    "oldName": "Блюхера",
                    "newName": "Романа Мстиславовича"
                },
                {
                    "type": "street", 
                    "oldName": "Большунова",
                    "newName": "Данила Сахненка"
                },
                {
                    "type": "lane", 
                    "oldName": "Братів Трофімових",
                    "newName": "Діївський"
                },
                {
                    "type": "street", 
                    "oldName": "Братів Трофімових",
                    "newName": "Велика Діївська"
                },
                {
                    "type": "street", 
                    "oldName": "Будьонного",
                    "newName": "Данила Галицького"
                },
                {
                    "type": "street", 
                    "oldName": "Валявки",
                    "newName": "Данила Апостола"
                },
                {
                    "type": "street", 
                    "oldName": "Власенка",
                    "newName": "Гулака-Артемовського"
                },
                {
                    "type": "street", 
                    "oldName": "Боженка",
                    "newName": "Хортицька"
                },
                {
                    "type": "lane", 
                    "oldName": "Войцеховський",
                    "newName": "Швидкісний"
                },
                {
                    "type": "street", 
                    "oldName": "Боженка",
                    "newName": "Хортицька"
                },
                {
                    "type": "street", 
                    "oldName": "Губанова",
                    "newName": "Лубеньска"
                },
                {
                    "type": "square", 
                    "oldName": "Дзержинського",
                    "newName": "Новокодацька"
                },
                {
                    "type": "lane", 
                    "oldName": "Дзержинського (Таромське)",
                    "newName": "Зоряний"
                },
                {
                    "type": "street", 
                    "oldName": "Дибенка",
                    "newName": "Хотинська"
                },
                {
                    "type": "lane", 
                    "oldName": "Єрмака",
                    "newName": "Кленовий"
                },
                {
                    "type": "street", 
                    "oldName": "Жовтенят",
                    "newName": "Фортечна"
                },
                {
                    "type": "street", 
                    "oldName": "Замарайкіна",
                    "newName": "Корсунська"
                },
                {
                    "type": "street", 
                    "oldName": "Івана Сусаніна",
                    "newName": "Майстрів"
                },
                {
                    "type": "lane", 
                    "oldName": "Івана Сусаніна",
                    "newName": "Майстрів"
                },
                {
                    "type": "street", 
                    "oldName": "Карпуші",
                    "newName": "Єлагінська"
                },
                {
                    "type": "street", 
                    "oldName": "Кірінаківська",
                    "newName": "Деревлянська"
                },
                {
                    "type": "street", 
                    "oldName": "Івана Сусаніна",
                    "newName": "Майстрів"
                },
                {
                    "type": "lane", 
                    "oldName": "Кірова (Таромське)",
                    "newName": "Мальвова"
                },
                {
                    "type": "street", 
                    "oldName": "Кірова",
                    "newName": "Старий шлях"
                },
                {
                    "type": "street", 
                    "oldName": "Коллонтай",
                    "newName": "Ганни Барвінок"
                },
                {
                    "type": "street", 
                    "oldName": "Комісарівська",
                    "newName": "Гайдамацька"
                },
                {
                    "type": "lane", 
                    "oldName": "Комісарівський",
                    "newName": "Гайдамацький"
                },
                {
                    "type": "street", 
                    "oldName": "Комітетська",
                    "newName": "Василя Капніста"
                },
                {
                    "type": "street", 
                    "oldName": "Карпуші",
                    "newName": "Єлагінська"
                },
                {
                    "type": "street", 
                    "oldName": "Комсомольська (Таромське)",
                    "newName": "Айдарівська"
                },
                {
                    "type": "area", 
                    "oldName": "Комунар",
                    "newName": "Покровський"
                },
                {
                    "type": "street", 
                    "oldName": "Комунарівська",
                    "newName": "Юрія Кондратюка"
                },
                {
                    "type": "street", 
                    "oldName": "Карпуші",
                    "newName": "Єлагінська"
                },
                {
                    "type": "street", 
                    "oldName": "Косарева",
                    "newName": "Сіверянська"
                },
                {
                    "type": "street", 
                    "oldName": "Котовського (Таромське)",
                    "newName": "Тернівська"
                },
                {
                    "type": "lane", 
                    "oldName": "Красіна",
                    "newName": "Косівський"
                },
                {
                    "type": "street", 
                    "oldName": "Красіна",
                    "newName": "Криштофа Косинського"
                },
                {
                    "type": "street", 
                    "oldName": "Карпуші",
                    "newName": "Єлагінська"
                },
                {
                    "type": "street", 
                    "oldName": "Круаської",
                    "newName": "Баллінська"
                },
                {
                    "type": "street", 
                    "oldName": "Карпуші",
                    "newName": "Єлагінська"
                },
                {
                    "type": "street", 
                    "oldName": "Курочкіна",
                    "newName": "Семена Бардадима"
                },
                {
                    "type": "street", 
                    "oldName": "Леніногорська",
                    "newName": "Миколи Хвильового"
                },
                {
                    "type": "street", 
                    "oldName": "Лукашенка",
                    "newName": "Андрія Штогаренка"
                },
                {
                    "type": "street", 
                    "oldName": "Луначарського",
                    "newName": "Василя Стуса"
                },
                {
                    "type": "lane", 
                    "oldName": "Людмили Сталь",
                    "newName": "Шодуарівська"
                },
                {
                    "type": "street", 
                    "oldName": "Матлахова",
                    "newName": "Кості Гордієнка"
                },
                {
                    "type": "street", 
                    "oldName": "Митрофана Андреєва",
                    "newName": "Петра Сокальского"
                },
                {
                    "type": "street", 
                    "oldName": "Модестова",
                    "newName": "Миколи Садовського"
                },
                {
                    "type": "street", 
                    "oldName": "Новодзержинська (Таромське)",
                    "newName": "Козирева"
                },
                {
                    "type": "street", 
                    "oldName": "Ногинська",
                    "newName": "Володимира Івасюка"
                },
                {
                    "type": "lane", 
                    "oldName": "Ногінський",
                    "newName": "Яворовий"
                },
                {
                    "type": "street", 
                    "oldName": "Островського (Таромське)",
                    "newName": "Миколи Зерова"
                },
                {
                    "type": "lane", 
                    "oldName": "Островського (Таромське)",
                    "newName": "Миколи Зерова"
                },
                {
                    "type": "street", 
                    "oldName": "Павла Корчагіна",
                    "newName": "Миколи Куліша"
                },
                {
                    "type": "avenue", 
                    "oldName": "Петровського",
                    "newName": "Івана Мазепи"
                },
                {
                    "type": "street", 
                    "oldName": "Піонерська (Таромське)",
                    "newName": "Бортницька"
                },
                {
                    "type": "lane", 
                    "oldName": "Піонерський (Таромська)",
                    "newName": "Марти Головіної"
                },
                {
                    "type": "street", 
                    "oldName": "Повстання",
                    "newName": "Мужності"
                },
                {
                    "type": "street", 
                    "oldName": "Покровського",
                    "newName": "Покровська"
                },
                {
                    "type": "lane", 
                    "oldName": "Покровського",
                    "newName": "Покровський"
                },
                {
                    "type": "street", 
                    "oldName": "Радянська (Таромське)",
                    "newName": "Славна"
                },
                {
                    "type": "street", 
                    "oldName": "Революційна",
                    "newName": "Полковника Горленка"
                },
                {
                    "type": "street", 
                    "oldName": "Руднєва",
                    "newName": "Івана Вишенського"
                },
                {
                    "type": "street", 
                    "oldName": "Свердлова (Таромське)",
                    "newName": "Казкова"
                },
                {
                    "type": "street", 
                    "oldName": "Сериківська",
                    "newName": "Тиверська"
                },
                {
                    "type": "lane", 
                    "oldName": "Сериківський",
                    "newName": "Тиверський"
                },
                {
                    "type": "street", 
                    "oldName": "Сировця",
                    "newName": "Якова Острянина"
                },
                {
                    "type": "street", 
                    "oldName": "Сільрадська",
                    "newName": "Лірницька"
                },
                {
                    "type": "street", 
                    "oldName": "Суханова",
                    "newName": "Станіслава Оріховського"
                },
                {
                    "type": "street", 
                    "oldName": "Тельмана (Таромське)",
                    "newName": "Ріжкова"
                },
                {
                    "type": "lane", 
                    "oldName": "Фрунзе (Таромське)",
                    "newName": "Заборинська"
                },
                {
                    "type": "street", 
                    "oldName": "Фурманова",
                    "newName": "Олени Теліги"
                },
                {
                    "type": "street", 
                    "oldName": "Чапаєва (Таромське)",
                    "newName": "Болбочана"
                },
                {
                    "type": "street", 
                    "oldName": "Червоноармійська (Таромське)",
                    "newName": "Футбольна"
                },
                {
                    "type": "lane", 
                    "oldName": "Червоноармійський",
                    "newName": "Червонокалиновий"
                },
                {
                    "type": "street", 
                    "oldName": "Шелгунова",
                    "newName": "Максима Дія"
                },
                {
                    "type": "street", 
                    "oldName": "Щаденка",
                    "newName": "Марії Грінченко"
                },
                {
                    "type": "street", 
                    "oldName": "Яшина",
                    "newName": "Володимира Самодриги"
                }
            ]
        },
        "r08": {
            oldAreaName: "Самарський",
            newAreaName: "Самарський",
            objects: [
                {
                    "type": "street", 
                    "oldName": "60-річчя Жовтня",
                    "newName": "Енергетиків"
                },
                {
                    "type": "street", 
                    "oldName": "ХХV партз’їзду",
                    "newName": "Князя Констатина Острозького"
                },
                {
                    "type": "lane", 
                    "oldName": "Бабушкіна",
                    "newName": "В’язовий"
                },
                {
                    "type": "street", 
                    "oldName": "Булата",
                    "newName": "Люблянська"
                },
                {
                    "type": "street", 
                    "oldName": "Галана",
                    "newName": "Івана Поддубного"
                },
                {
                    "type": "street", 
                    "oldName": "Дундича",
                    "newName": "Хорватська"
                },
                {
                    "type": "street", 
                    "oldName": "Жовтнева",
                    "newName": "Марії Приймаченко"
                },
                {
                    "type": "street", 
                    "oldName": "Кантемирівська",
                    "newName": "Євгена Маланюка"
                },
                {
                    "type": "street", 
                    "oldName": "Комісара Крилова",
                    "newName": "Олександра Оцупа"
                },
                {
                    "type": "street", 
                    "oldName": "Крейсера Аврора",
                    "newName": "Олександра Галича"
                },
                {
                    "type": "street", 
                    "oldName": "Кузнецова",
                    "newName": "Тетяти Пати"
                },
                {
                    "type": "street", 
                    "oldName": "Лафарга",
                    "newName": "Генерала Радієвського"
                },
                {
                    "type": "street", 
                    "oldName": "Маршала Жукова",
                    "newName": "Героїв Дніпра"
                },
                {
                    "type": "lane", 
                    "oldName": "Маршала Жукова",
                    "newName": "Героїчний"
                },
                {
                    "type": "street", 
                    "oldName": "Петровського",
                    "newName": "Андрія Сахарова"
                },
                {
                    "type": "street", 
                    "oldName": "Піонерська",
                    "newName": "Омеляновича-Павленка"
                },
                {
                    "type": "lane", 
                    "oldName": "Піонерський",
                    "newName": "Михайла Дідевича"
                },
                {
                    "type": "street", 
                    "oldName": "Таманська",
                    "newName": "Василя Симоненка"
                },
                {
                    "type": "street", 
                    "oldName": "Тевосяна",
                    "newName": "Роксолани"
                },
                {
                    "type": "lane", 
                    "oldName": "Фабріціуса",
                    "newName": "Івана Купала"
                },
                {
                    "type": "street", 
                    "oldName": "Фабріціуса",
                    "newName": "Ярославни"
                },
                {
                    "type": "lane", 
                    "oldName": "Червонопролетарський",
                    "newName": "Порічковий"
                }
            ]
        }
    },
      
    render: function () {
        var arr = this.data, core = $("#rename-data"), head, data, strings = "", item;
        for(var key in arr) {
            head = $("<h3>"+ arr[key].newAreaName + " (" +arr[key].oldAreaName+ ")" +"</h3>");
            strings = "";
            if(arr[key].objects.length > 0) {
                for (var i=0, l = arr[key].objects.length; i<l ; i++) {
                    item = arr[key].objects[i];
                    strings += '<div class="data-line"><div class="object-type">' + 
                            this.types[item.type] + 
                            '</div><div class="object-old">'+ item.oldName + 
                            '</div><div class="object-new">'+ item.newName + 
                            "</div></div>";
                }
            }
            data = $("<div>" + strings + "</div>");
            core.append(head).append(data);
        }
    }
};