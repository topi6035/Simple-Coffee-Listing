import ListCaffe from "./listCoffe";
import React, { useState, useEffect } from 'react'
import star from '../../public/Star.svg'
import star_fill from '../../public/Star_fill.svg'
import './cardCoffe.css'
export default function Coffee(coffees) {
    // const [Lop, setLop] = useState(coffee)
    // console.log(Lop);
    let coffee = coffees.data
    console.log(coffee.id);
    // Lop.coffee.map((data) => console.log(data))
    return (
        <div key={coffee.id} className="card-coffee">
            {
                coffee.popular && (
                    <div className="tag-popular">Popular</div>
                )
            }
            <img className="img-card-coffee" src={coffee.image}></img>
            <div className="labels-card-coffee">
                <span className="name-card-coffee">{coffee.name}</span>
                <span className="tag-price-card-coffee">{coffee.price}</span>
            </div>
            <div className="more-labels-coffee">
                <img src={coffee.rating ? star_fill : star}></img>
                <span className="rating-card-coffee">{coffee.rating}</span>
                <span className="votes-card-coffee">({coffee.votes} votes)</span>
            </div>
        </div>

        
        
    )
}
// export default CardCoffe