import React from "react";
import cloneDeep from "lodash.clonedeep";

import Header from "./components/header/header"
import Promo from "./components/promo/promo";
import Footer from "./components/footer/footer";
import Items from "./components/items/items";
import ModalScreen from "./components/modalScreen/modalScreen";


class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      isopen: false,
      counts: 0,
      check: 0,
      item: {},
      orders: [],
      pizzas: [
        {
          id: 1,
          title: 'Ветчина и сыр',
          img: 'pizza/vetchina-sir.avif',
          desc: 'Ветчина, моцарелла, фирменный соус альфредо',
          category: 'pizza',
          price: 459,
          price30: 679,
          price35: 809,
          count: 0,
        },
        {
          id: 2,
          title: 'Двойной цыпленок',
          img: 'pizza/double-chicken.avif',
          desc: 'Цыпленок, моцарелла, фирменный соус альфредо',
          category: 'pizza',
          price: 479,
          price30: 709,
          price35: 829,
          count: 0,
        },
        {
          id: 3,
          title: 'Сырная',
          img: 'pizza/sirnaya.avif',
          desc: 'Моцарелла, сыры чеддер и пармезан, фирменный соус альфредо',
          category: 'pizza',
          price: 299,
          price30: 589,
          price35: 719,
          count: 0,
        },
        {
          id: 4,
          title: 'Мясная',
          img: 'pizza/myasnaya.avif',
          desc: 'Цыпленок, ветчина, пикантная пепперони, острые колбаски чоризо, моцарелла, фирменный томатный соус',
          category: 'pizza',
          price: 599,
          price30: 889,
          price35: 1049,
          count: 0,
        },
        {
          id: 5,
          title: 'Карбонара',
          img: 'pizza/carbonara.avif',
          desc: 'Бекон, сыры чеддер и пармезан, моцарелла, томаты, красный лук, чеснок, фирменный соус альфредо, итальянские травы',
          category: 'pizza',
          price: 639,
          price30: 969,
          price35: 1079,
          count: 0,
        },
        {
          id: 6,
          title: 'Бургер-пицца',
          img: 'pizza/burger-pizza.avif',
          desc: 'Ветчина, маринованные огурчики, томаты, красный лук, чеснок, соус бургер, моцарелла, фирменный томатный соус',
          category: 'pizza',
          price: 539,
          price30: 789,
          price35: 989,
          count: 0,
        },
        {
          id: 7,
          title: 'Гавайская',
          img: 'pizza/havaii.avif',
          desc: 'Двойная порция цыпленка, ананасы, моцарелла, фирменный соус альфредо',
          category: 'pizza',
          price: 519,
          price30: 789,
          price35: 929,
          count: 0,
        },
        {
          id: 8,
          title: 'Цыпленок ранч',
          img: 'pizza/chicken-ranch.avif',
          desc: 'Цыпленок, ветчина, соус ранч, чеснок, томаты, моцарелла',
          category: 'pizza',
          price: 699,
          price30: 1009,
          price35: 1179,
          count: 0,
        },
        {
          id: 9,
          title: 'Додо',
          img: 'pizza/dodo.avif',
          desc: 'Бекон, митболы, пикантная пепперони, моцарелла, томаты, шампиньоны, сладкий перец, красный лук, чеснок, фирменный томатный соус',
          category: 'pizza',
          price: 769,
          price30: 1119,
          price35: 1269,
          count: 0,
        },
        {
          id: 10,
          title: 'Четыре сезона',
          img: 'pizza/four-seasons.avif',
          desc: 'Увеличенная порция моцареллы, ветчина, пикантная пепперони, кубики брынзы, томаты, шампиньоны, итальянские травы, фирменный томатный соус',
          category: 'pizza',
          price: 509,
          price30: 789,
          price35: 969,
          count: 0,
        },
        {
          id: 11,
          title: 'Цыпленок барбекю',
          img: 'pizza/chicken-barbeque.avif',
          desc: 'Цыпленок, бекон, соус барбекю, красный лук, моцарелла, фирменный томатный соус',
          category: 'pizza',
          price: 659,
          price30: 989,
          price35: 1109,
          count: 0,
        },
        {
          id: 12,
          title: 'Маргарита',
          img: 'pizza/margarita.avif',
          desc: 'Увеличенная порция моцареллы, томаты, итальянские травы, фирменный томатный соус',
          category: 'pizza',
          price: 509,
          price30: 759,
          price35: 929,
          count: 0,
        },
        {
          id: 13,
          title: 'Овощи и грибы',
          img: 'pizza/vegetables-mashrooms.avif',
          desc: 'Шампиньоны, томаты, сладкий перец, красный лук, кубики брынзы, моцарелла, фирменный томатный соус',
          category: 'pizza',
          price: 579,
          price30: 889,
          price35: 1029,
          count: 0,
        },
        {
          id: 14,
          title: 'Мясной микс с баварскими колбасками',
          img: 'pizza/meat-mix.avif',
          desc: 'Баварские колбаски, острые колбаски, чоризо, пикантная пепперони, бекон, моцарелла и фирменный томатный соус',
          category: 'pizza',
          price: 579,
          price30: 889,
          price35: 1029,
          count: 0,
        },
        {
          id: 15,
          title: 'Песто',
          img: 'pizza/pesto.avif',
          desc: 'Цыпленок, соус песто, кубики брынзы, томаты, моцарелла, фирменный соус альфредо',
          category: 'pizza',
          price: 579,
          price30: 889,
          price35: 1029,
          count: 0,
        },
      ],
      snacks: [
        {
          id: '1sn',
          title: 'Дэнвич ветчина и сыр',
          img: 'snacks/danwich-vs.avif',
          desc: 'Поджаристая чиабатта и знакомое сочетание ветчины, цыпленка, моцареллы со свежими томатамы, соусом ранч и чесноком',
          category: 'snacks',
          price: 279,
          count: 0,
        },
        {
          id: '2sn',
          title: 'Супермясной додстер',
          img: 'snacks/supermeat-dodster.avif',
          desc: 'Горячая закуска с цыпленком, моцареллой, митболами, острыми колбасками чоризо и соусом бургем в тонкой пшеничной лепешке',
          category: 'snacks',
          price: 269,
          count: 0,
        },
        {
          id: '3sn',
          title: 'Додстер с ветчиной',
          img: 'snacks/dodster-vetchina.avif',
          desc: 'Горячий завтрак с ветчиной, томатами, моцареллой, соусом ранч в тонкой пшеничной лепешке',
          category: 'snacks',
          price: 219,
          count: 0,
        },
        {
          id: '4sn',
          title: 'Додстер',
          img: 'snacks/dodster.avif',
          desc: 'Легендарная горячая закуска с цыпленком томатами, моцареллой, соусом ранч в тонкой лепешке',
          category: 'snacks',
          price: 219,
          count: 0,
        },
        {
          id: '5sn',
          title: 'Грибной стартер',
          img: 'snacks/mushroom-starter.avif',
          desc: 'Горячая закуска с шампиньонами, моцареллой и соусом ранч в тонкой пшеничной лепешке',
          category: 'snacks',
          price: 219,
          count: 0,
        },
        {
          id: '6sn',
          title: 'Сырный стартер',
          img: 'snacks/cheese-starter.avif',
          desc: 'Горячая закуска с очень сырной. начинкой, моцарелла, пармезан, чеддер и соус ранч в тонкой пшеничной лепешке',
          category: 'snacks',
          price: 229,
          count: 0,
        },
      ],
      breakfast: [
        {
          id: '1bf',
          title: 'Омлет с беконом',
          img: 'breakfast/bacon-omelet.avif',
          desc: 'Классическое сочетание горячего омлета с поджаристой корочкой и бекона с добавлением моцареллы и томатов на завтрак',
          category: 'breakfast',
          price: 199,
          count: 0,
        },
        {
          id: '2bf',
          title: 'Омлет с ветчиной и грибами',
          img: 'breakfast/omelet-mushcheese.avif',
          desc: 'Горячий сытный омлет с поджаристой корочкой, ветчина, шампиньоны и моцарелла',
          category: 'breakfast',
          price: 199,
          count: 0,
        },
        {
          id: '3bf',
          title: 'Омлет с пепперони',
          img: 'breakfast/omelet-peppe.avif',
          desc: 'Сытный и сбалансированный завтрак. Омлет с поджаристой корочкой, пикантная пепперони, томаты и моцарелла',
          category: 'breakfast',
          price: 199,
          count: 0,
        },
        {
          id: '4bf',
          title: 'Омлет сырный',
          img: 'breakfast/omelet-cheese.avif',
          desc: 'Горячий завтрак из омлета с поджаристой корочкой, моцарелла, кубики брынзы, сыры чеддер и пармезан',
          category: 'breakfast',
          price: 209,
          count: 0,
        },
        {
          id: '5bf',
          title: 'Сырники со сгущенным молоком',
          img: 'breakfast/cheesecakes-milk.avif',
          desc: 'Нежные сырники, приготовленные в печи, с порционным сгущенным молоком',
          category: 'breakfast',
          price: 179,
          count: 0,
        },
        {
          id: '6bf',
          title: 'Сырники с малиновым вареньем',
          img: 'breakfast/cheesecakes-jam.avif',
          desc: 'Любимый десерт многих наших гостей — румяные сырники из печи. Такие нежные, в меру сладкие и напоминающие детство',
          category: 'breakfast',
          price: 179,
          count: 0,
        },
        {
          id: '7bf',
          title: 'Сырники',
          img: 'breakfast/cheesecakes.avif',
          desc: 'Любимый десерт многих наших гостей — румяные сырники из печи. Такие нежные, в меру сладкие и напоминающие детство',
          category: 'breakfast',
          price: 159,
          count: 0,
        },
      ],
      cocktails: [
        {
          id: '1ct',
          title: 'Молочный коктейль Ежевика-малина',
          img: 'cocktails/milk-ejevica.avif',
          desc: 'Сливочная прохлада классического молочного коктейля с добавлением лесных ягод',
          category: 'cocktails',
          price: 220,
          count: 0,
        },
        {
          id: '2ct',
          title: 'Молочный коктейль Пина-Колада',
          img: 'cocktails/pina-colada.avif',
          desc: 'Тропическое сочетание кокоса и ананаса в нежном милкшейке',
          category: 'cocktails',
          price: 220,
          count: 0,
        },
        {
          id: '3ct',
          title: 'Молочный коктейль с печеньем Орео',
          img: 'cocktails/with-oreo.avif',
          desc: 'Как вкуснее есть печенье? Его лучше пить! Попробуйте молочный коктейль с мороженым и дробленым печеньем «Орео»',
          category: 'cocktails',
          price: 230,
          count: 0,
        },
        {
          id: '4ct',
          title: 'Классический молочный коктейль',
          img: 'cocktails/classic.avif',
          desc: 'В мире так много коктейлей, но классика — вечна. Попробуйте наш молочный напиток с мороженым',
          category: 'cocktails',
          price: 205,
          count: 0,
        },
        {
          id: '5ct',
          title: 'Клубничный молочный коктейль',
          img: 'cocktails/clubnica.avif',
          desc: 'Не важно, какое время года на улице, этот коктейль с клубничным концентратом вернет вас в лето с одного глотка',
          category: 'cocktails',
          price: 230,
          count: 0,
        },
        {
          id: '6ct',
          title: 'Шоколадный молочный коктейль',
          img: 'cocktails/chocolate.avif',
          desc: 'Очаровательная шоколадная нежность. Попробуйте молочный коктейль с какао и мороженым',
          category: 'cocktails',
          price: 230,
          count: 0,
        },
      ],
      drinks: [
        {
          id: '1dr',
          title: 'Какао',
          img: 'drinks/kakao.avif',
          desc: 'Отправляемся в сладкое плавание в хорошей компании — горячее какао с молоком',
          category: 'drinks',
          price: 139,
          count: 0,
        },
        {
          id: '2dr',
          title: 'Добрый Кола Малина',
          img: 'drinks/cola-malina.avif',
          desc: '',
          category: 'drinks',
          price: 135,
          count: 0,
        },
        {
          id: '3dr',
          title: 'Добрый Кола',
          img: 'drinks/cola.avif',
          desc: '',
          category: 'drinks',
          price: 135,
          count: 0,
        },
        {
          id: '4dr',
          title: 'Добрый Кола без сахара',
          img: 'drinks/cola-zero.avif',
          desc: '',
          category: 'drinks',
          price: 135,
          count: 0,
        },
        {
          id: '5dr',
          title: 'Добрый Апельсин',
          img: 'drinks/fanta.avif',
          desc: '',
          category: 'drinks',
          price: 135,
          count: 0,
        },
        {
          id: '6dr',
          title: 'Добрый Лимон-Лайм',
          img: 'drinks/sprite.avif',
          desc: '',
          category: 'drinks',
          price: 135,
          count: 0,
        },
        {
          id: '7dr',
          title: 'Добрый Кола Ваниль',
          img: 'drinks/cola-vanile.avif',
          desc: '',
          category: 'drinks',
          price: 135,
          count: 0,
        },
        {
          id: '8dr',
          title: 'Rich Tea Черный с лимоном',
          img: 'drinks/rich-tea.avif',
          desc: '',
          category: 'drinks',
          price: 149,
          count: 0,
        },
      ],
      deserts: [
        {
          id: '1ds',
          title: 'Сорбет Лимонный фреш',
          img: 'deserts/sorbet.avif',
          desc: 'Цитрусовая свежесть в стаканчике. Сладкий вкус с приятной кислинкой',
          category: 'deserts',
          price: 189,
          count: 0,
        },
        {
          id: '2ds',
          title: 'Чизкейк Нью-Йорк с кокосом',
          img: 'deserts/cheesecake-cocos.avif',
          desc: 'Это не классический творожный чизкейк, а похож! Это его нежный брат близнец с новым кокосовым вкусом',
          category: 'deserts',
          price: 169,
          count: 0,
        },
        {
          id: '3ds',
          title: 'Додобоны',
          img: 'deserts/dodoboni.avif',
          desc: 'Когда сливочное встречается с пряным, получаются горячие булочки с корицей в фирменном пломбирном соусе',
          category: 'deserts',
          price: 115,
          count: 0,
        },
        {
          id: '4ds',
          title: 'Слоеные палочки с ананасами и брусникой',
          img: 'deserts/ananas-brusnika.avif',
          desc: 'Здесь все сразу — брусника и ананас со сгущенкой на слоеном тесте',
          category: 'deserts',
          price: 139,
          count: 0,
        },
        {
          id: '6ds',
          title: 'Макарон манго-маракуйя',
          img: 'deserts/macaron.avif',
          desc: 'Bon appétit! Знаменитый французский десерт со вкусом тропических фруктов',
          category: 'deserts',
          price: 129,
          count: 0,
        },
        {
          id: '7ds',
          title: 'Чизкейк Нью-Йорк',
          img: 'deserts/cheesecake-newyork.avif',
          desc: 'Мы перепробовали тысячу десертов и наконец нашли любимца гостей — нежнейший творожный чизкейк',
          category: 'deserts',
          price: 189,
          count: 0,
        },
        {
          id: '8ds',
          title: 'Чизкейк Банановый с шоколадным печеньем',
          img: 'deserts/cheesecake-banana.avif',
          desc: 'Солнечный снаружи и яркий по вкусу внутри. Летняя новинка — нежный чизкейк с бананом и шоколадным печеньем',
          category: 'deserts',
          price: 169,
          count: 0,
        },
        {
          id: '9ds',
          title: 'Эклеры-мини с заварным кремом',
          img: 'deserts/eclers.avif',
          desc: 'Три эклера — это много или мало? Мы считаем, в самый раз. Десерт с нежной начинкой для кофе и компаний',
          category: 'deserts',
          price: 169,
          count: 0,
        },
        {
          id: '10ds',
          title: 'Шоколадный кукис',
          img: 'deserts/cookies.avif',
          desc: 'На вид печенье как планета, а на вкус — шоколадная комета с глазурью',
          category: 'deserts',
          price: 95,
          count: 0,
        },
        {
          id: '11ds',
          title: 'Фондан',
          img: 'deserts/fondan.avif',
          desc: 'Четверо из пяти гостей говорят «Oh la la!», когда едят этот французский десерт с хрустящей корочкой и топленой шоколадной начинкой',
          category: 'deserts',
          price: 389,
          count: 0,
        },
      ],
      sauces: [
        {
          id: '1sc',
          title: 'Медово-горчичный',
          img: 'sauces/honey.avif',
          desc: 'Фирменный медово-горчичный соус со жгучей сладостью для бортиков пиццы и горячих закусок, 25 г',
          category: 'sauces',
          price: 45,
          count: 0,
        },
        {
          id: '2sc',
          title: 'Сладкий чили',
          img: 'sauces/chili.avif',
          desc: 'Фирменный соус сладкий чили с легкой пряностью для бортиков пиццы и горячих закусок, 25 г',
          category: 'sauces',
          price: 45,
          count: 0,
        },
        {
          id: '3sc',
          title: 'Сырный',
          img: 'sauces/cheese.avif',
          desc: 'Фирменный соус со вкусом расплавленного сыра для бортиков пиццы и горячих закусок, 25 г',
          category: 'sauces',
          price: 45,
          count: 0,
        },
        {
          id: '4sc',
          title: 'Чесночный',
          img: 'sauces/garlic.avif',
          desc: 'Фирменный соус с чесночным вкусом для бортиков пиццы и горячих закусок, 25 г',
          category: 'sauces',
          price: 45,
          count: 0,
        },
        {
          id: '5sc',
          title: 'Барбекю',
          img: 'sauces/barbeque.avif',
          desc: 'Фирменный соус с дымным ароматом для бортиков пиццы и горячих закусок, 25 г',
          category: 'sauces',
          price: 45,
          count: 0,
        },
        {
          id: '6sc',
          title: 'Малиновое варенье',
          img: 'sauces/barbeque.avif',
          desc: 'Идеально к сырникам, 25 г',
          category: 'sauces',
          price: 45,
          count: 0,
        },
      ]

    }
    this.addToOrder = this.addToOrder.bind(this)
    this.removeFromOrder = this.removeFromOrder.bind(this)
    this.incItem = this.incItem.bind(this)
    this.decItem = this.decItem.bind(this)
    this.handleCallback = this.handleCallback.bind(this)
    this.openModal = this.openModal.bind(this)
  }
  render() {
    return (
      <div className={`wrapper`}>
        < ModalScreen isOpen={this.state.isopen} openModal={this.openModal} pizza={this.state.item} onAdd={this.addToOrder} callback={this.handleCallback} />
        < Header orders={this.state.orders} check={this.state.check} counts={this.state.counts} onRemove={this.removeFromOrder} incItem={this.incItem} decItem={this.decItem} handleCallback={this.handleCallback} />
        < Promo />
        < Items items={this.state.pizzas} openModal={this.openModal} title={'Пицца'} />
        < Items items={this.state.snacks} openModal={this.openModal} title={'Закуски'} />
        < Items items={this.state.breakfast} openModal={this.openModal} title={'Завтраки'} />
        < Items items={this.state.cocktails} openModal={this.openModal} title={'Коктейли'} />
        < Items items={this.state.drinks} openModal={this.openModal} title={'Напитки'} />
        < Items items={this.state.deserts} openModal={this.openModal} title={'Десерты'} />
        < Items items={this.state.sauces} openModal={this.openModal} title={'Соусы'} />
        < Footer />
      </div>
    );
  }


  openModal(item) {
    this.setState({ isopen: !this.state.isopen })
    if (item) {
      this.setState({ item: item })
    }
  }
  incItem(item) {
    const x = item.count + 1
    item.count = x
    this.setState({ counts: this.state.counts + 1 })
  }
  decItem(item) {
    let x = item.count - 1
    item.count = x
    this.setState({ counts: this.state.counts - 1 })
  }

  addToOrder(item, size, dough) {
    const obj = cloneDeep(this.state.item)
    if (item.category === 'pizza') {
      if (size === 2) {
        obj.id = obj.id * 100
        obj.price = item.price30
      }
      if (size === 3) {
        obj.id = obj.id * 1000
        obj.price = item.price35
      }
    }
    obj.size = size
    obj.dough = dough

    let i = 0
    this.state.orders.forEach(el => {
      if ((el.id === item.id || el.id === item.id * 100 || el.id === item.id * 1000) && el.size === size && el.dough === dough) {
        this.incItem(el)
        i = 1
      }
    })
    if (i === 0) {
      this.incItem(obj)
      this.setState({ orders: [...this.state.orders, obj] })

    }
  }

  removeFromOrder(item) {
    this.state.orders.forEach(el => {
      if (el.id === item.id && this.state.orders.length !== 0) {
        this.state.orders.splice(this.state.orders.indexOf(item), 1);
        this.setState({ orders: this.state.orders })
        this.setState({ counts: this.state.counts - item.count })
        item.count = 0
      }
    })

  }
  handleCallback(item, size, dough) {
    var price = 0
    let i = 0
    if (item && size && dough) {
      this.state.orders.forEach(el => {
        if ((el.id === item.id || el.id === item.id * 100 || el.id === item.id * 1000) && el.size === size && el.dough === dough) {
          i = 1
        }
        price = price + (el.count * el.price)
      })
      if (i === 0) {
        if (size === 1) {
          price = price + item.price
        } else if (size === 2) {
          price = price + item.price30
        } else if (size === 3) {
          price = price + item.price35
        }
      }
    } else {
      this.state.orders.forEach(el => {
        price = price + (el.count * el.price)
      })
    }
    this.setState({ check: price })
    console.log(item, size, dough)
  };

}

export default App;
