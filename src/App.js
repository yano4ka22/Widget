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
];
let my_cities = [
    {
        city: 'Абакан'
    },
    {
        city: 'Абди'
    },
    {
        city: 'Абзаково'
    },
    {
        city: 'Абрау-Дюрсо'
    },
    {
        city: 'Автуры'
    },
    {
        city: 'Адлер'
    },
    {
        city: 'Альметьевск'
    },
    {
        city: 'Анапа'
    },
    {
        city: 'Дагомыс'
    },
    {
        city: 'Елабуга'
    },
    {
        city: 'Ессентуки'
    },
    {
        city: 'Железновод'
    },
    {
        city: 'Иркутск'
    },
    {
        city: 'Калининград'
    },
    {
        city: 'Калуга'
    },
    {
        city: 'Кемерово'
    },
    {
        city: 'Киров'
    },
    {
        city: 'Кисловодск'
    },
    {
        city: 'Копейск'
    }
];

class App extends Component {
    constructor(props){
        super(props);
        this.state = {
            cities: my_cities,
            cars: my_cars
        }
    }
    render() {
        return (
            <View data={this.state.cities} cars={this.state.cars}/>
        );
    }

}

export default App;