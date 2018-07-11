import React, {Component} from 'react';

class Example  extends Component {
    getUrl(img){

        return "./img/" + img;
    }

    render() {
        let name = this.props.cars.name,
            img = this.props.cars.image,
            options = this.props.cars.options,
            price = this.props.cars.price,
            oldPriceDay = this.props.cars.oldPriceDay,
            priceDay = this.props.cars.priceDay;

        return (
            <div className="itemCar">
                <img src={this.getUrl(img)} alt="Логотип"/>
                <div className="description">
                    <div className="h2">
                        {name}
                    </div>
                    <p>{options}</p>
                    <div className="price">{price} ₽</div>
                    <div>
                        <span className={"oldPrice"}>{oldPriceDay}</span>
                        <span className={"priceDay"}> {priceDay} ₽ в день</span>
                    </div>
                </div>
            </div>
        );
    }
}
export default Example;