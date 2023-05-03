import React, { Component } from 'react'

export default class Card extends Component {
    render() {
        return (
            <div style={{display:'flex', justifyContent: 'center'}}>

                <div class="card" style={{width: "18rem"}}>
                    <img src="https://media.discordapp.net/attachments/1004495634113511607/1090281555374653561/traviistea_matrix_prometheus_reclined_style_spaceship_control_d_85701b4c-48b6-4860-a980-721fe2c01ff7.png?width=2106&height=1404" class="card-img-top" alt="..."/>
                        <div class="card-body">
                            <h5 class="card-title">Hacking the System</h5>
                            <p class="card-text">Please enjoy this A.I. generated placeholder image</p>
                            <a href="#" class="btn btn-primary">Click endlessly with no result</a>
                        </div>
                </div>

            </div>
        )
    }
}
