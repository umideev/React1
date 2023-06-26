import React from "react";

class ComponentClass extends React.Component {
    render() {
        return (
            <div>
                <div>
                    <div>Name:{this.props.name}</div>
                    <div>ID:{this.props.id}</div>
                    <div>statues:{this.props.statues}</div>
                </div>


            </div>
        )
    }
}

export default ComponentClass