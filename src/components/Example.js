import React, {Component} from 'react';

class Example  extends Component {
    getUrl(img){

        return "./img/" + img;
    }

    render() {
        const {cars} = this.props;

        return (
            <div className="itemCar">
                <img src={this.getUrl(cars.image)} alt="Логотип"/>
                <div className="description">
                    <div className="h2">
                        {cars.name}
                    </div>
                    <p>{cars.options}</p>
                    <div className="price">{cars.price} ₽</div>
                    <div>
                        <span className={"oldPrice"}>{cars.oldPriceDay}</span>
                        <span className={"priceDay"}> {cars.priceDay} ₽ в день</span>
                    </div>
                </div>
            </div>
        );
    }
}
export default Example;