import React, { Component } from "react";

class Banner extends Component {
  render() {
    return (<>

            <nav>
                <div className="logo">Museo de arte moderno</div>
                <ul>
                    <li className="bold subrayado"><u>Museo</u></li>
                    <li>Artistas</li>
                    <li>Movimientos</li>
                </ul>
            </nav>
    
    </>);
  }
}

export default Banner;