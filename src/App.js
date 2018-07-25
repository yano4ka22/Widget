import React, {Component} from 'react';
import View from './components/View'
import './index.css';

let my_cars = [
    {
        image: 'car1.jpg',
        name: 'Mitsubishi Outlander, 2017',
        options: '2.0 АТ, дизель',
        price: '20 000',
        oldPriceDay: '3 000',
        priceDay: '2 800'
    },
    {
        image: 'car1.jpg',
        name: 'Mitsubishi Outlander, 2017',
        options: '2.0 АТ, дизель',
        price: '20 000',
        oldPriceDay: '3 000',
        priceDay: '2 800'
    },
    {
        image: 'car1.jpg',
        name: 'Mitsubishi Outlander, 2017',
        options: '2.0 АТ, дизель',
        price: '20 000',
        oldPriceDay: '3 000',
        priceDay: '2 800'
    },
    {
        image: 'car1.jpg',
        name: 'Mitsubishi Outlander, 2017',
        options: '2.0 АТ, дизель',
        price: '20 000',
        oldPriceDay: '3 000',
        priceDay: '2 800'
    },
    {
        image: 'car1.jpg',
        name: 'Mitsubishi Outlander, 2017',
        options: '2.0 АТ, дизель',
        price: '20 000',
        oldPriceDay: '3 000',
        priceDay: '2 800'
    },
],
    my_cities = [
    {
        id: '1',
        city: 'Абакан'
    },
    {
        id: '2',
        city: 'Абди'
    },
    {
        id: '3',
        city: 'Абзаково'
    },
    {
        id: '4',
        city: 'Абрау-Дюрсо'
    },
    {
        id: '5',
        city: 'Автуры'
    },
    {
        id: '6',
        city: 'Адлер'
    },
    {
        id: '7',
        city: 'Альметьевск'
    },
    {
        id: '8',
        city: 'Анапа'
    },
    {
        id: '9',
        city: 'Дагомыс'
    },
    {
        id: '10',
        city: 'Елабуга'
    },
    {
        id: '11',
        city: 'Ессентуки'
    },
    {
        id: '12',
        city: 'Железновод'
    },
    {
        id: '13',
        city: 'Иркутск'
    },
    {
        id: '14',
        city: 'Калининград'
    },
    {
        id: '15',
        city: 'Калуга'
    },
    {
        id: '16',
        city: 'Кемерово'
    },
    {
        id: '17',
        city: 'Киров'
    },
    {
        id: '18',
        city: 'Кисловодск'
    },
    {
        id: '19',
        city: 'Копейск'
    },
    {
        id: '20',
        city: 'Королев'
    },
    {
        id: '21',
        city: 'Сочи'
    }
],
    translit_cities = [
        {
            id: '1',
            city: 'abakan'
        },
        {
            id: '2',
            city: 'abdi'
        },
        {
            id: '3',
            city: 'abzakovo'
        },
        {
            id: '4',
            city: 'abrau-dyurso'
        },
        {
            id: '5',
            city: 'avtury'
        },
        {
            id: '6',
            city: 'adler'
        },
        {
            id: '7',
            city: 'almetyevsk'
        },
        {
            id: '8',
            city: 'anapa'
        },
        {
            id: '9',
            city: 'dagomys'
        },
        {
            id: '10',
            city: 'yelabuga'
        },
        {
            id: '11',
            city: 'yessentuki'
        },
        {
            id: '12',
            city: 'zheleznovodsk'
        },
        {
            id: '13',
            city: 'irkutsk'
        },
        {
            id: '14',
            city: 'kaliningrad'
        },
        {
            id: '15',
            city: 'kaluga'
        },
        {
            id: '16',
            city: 'kemerovo'
        },
        {
            id: '17',
            city: 'kirov'
        },
        {
            id: '18',
            city: 'kislovodsk'
        },
        {
            id: '19',
            city: 'kopeysk'
        },
        {
            id: '20',
            city: 'korolev'
        },
        {
            id: '21',
            city: 'sochi'
        }
    ],
    title_widget = [
        {
            title: 'Прокат автомобилей'
        },
        {
            title: 'Аренда автомобилей в Черногории'
        },
        {
            title: 'Аренда автомобилей'
        }
    ];

class App extends Component {
    constructor(props){
        super(props);
        this.state = {
            cities: my_cities,
            translit: translit_cities,
            cars: my_cars,
            title: title_widget
        }
    }
    render() {
        return (
            <View
                cities={this.state.cities}
                translit={this.state.translit}
                cars={this.state.cars}
                title={this.state.title}/>
        );
    }

}

export default App;