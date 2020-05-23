import React from 'react'
import './Cardlist.styles.css'
import { Card } from '../card/Card'
export const Cardlist = props => {
    return (
        <div className="card-list">
            {props.monsters.map(monster => (
                
                <Card key={monster.id} monster={monster}/>
                
            ))}
        </div>
    )
}
