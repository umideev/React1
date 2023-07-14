import React from "react";
import './render.css'
import lightOn from './essets/on.jpg'
import lightOff from './essets/off.jpg'

class Render extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            status:10000,
            status:5000,
            status:1000,

        }
    }
    render() { 
        const onHalf = () => {
            this.setState({
              status : '5000'
            })
        }

        const onNone = () => {
            this.setState({
              status : '1000'
            })
        }


        const onFull = () => {
            this.setState({
              status : '10000'
            })
        }
        return (
            <div className="main">
               Cola : {this.state.status}
               <br/>
               <button onClick={onFull}>Full Button</button>
               <button onClick={onHalf}>Half Button</button>
               <button onClick={onNone}>None Button</button>
            </div>
        )
    }
}

export default Render