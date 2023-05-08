import React, { Component } from 'react'

export default class Card extends Component {
    render() {
        return (
            <div style={{display:'flex', justifyContent: 'center'}}>

                <div className="card" style={{width: "18rem"}}>
                    <img src="https://media.discordapp.net/attachments/1004495634113511607/1090281555374653561/traviistea_matrix_prometheus_reclined_style_spaceship_control_d_85701b4c-48b6-4860-a980-721fe2c01ff7.png?width=2106&height=1404" className="card-img-top" alt="..."/>
                        <div className="card-body">
                            <h5 className="card-title">Hacking the System</h5>
                            <p className="card-text">Please enjoy this A.I. generated placeholder image</p>
                            <a href="#" className="btn btn-primary">Click endlessly with no result</a>
                        </div>
                </div>

            </div>
        )
    }
}
