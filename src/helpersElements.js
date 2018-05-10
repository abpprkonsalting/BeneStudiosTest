import React from "react";
import FontAwesomeIcon from '@fortawesome/react-fontawesome'
import faAngleDown from "@fortawesome/fontawesome-free-solid/faAngleDown";
import faAngleUp from "@fortawesome/fontawesome-free-solid/faAngleUp";
import faCheck from "@fortawesome/fontawesome-free-solid/faCheck";
import faPlus from "@fortawesome/fontawesome-free-solid/faPlus";
import faTimes from "@fortawesome/fontawesome-free-solid/faTimes";

class GeneralButton extends React.Component {
    render () {

        switch (this.props.type) {
            case 'mark':
                if (this.props.value === 'active') {
                    return (
                        <a className="mark" onClick={this.props.onClick}>
                            <FontAwesomeIcon icon={faCheck}/>
                        </a>
                    )
                }
                else {
                    return (
                        <a className="mark inactive" onClick={this.props.onClick}>
                            <FontAwesomeIcon icon={faCheck}/>
                        </a>
                    )
                }
            case 'delete':
                return (
                    <a onClick={this.props.onClick}>
                        <FontAwesomeIcon icon={faTimes}/>
                    </a>
                )
            case 'show':
                return (
                    <a onClick={this.props.onClick}>
                        <FontAwesomeIcon icon={faAngleDown}/>
                    </a>
                )
            case 'hide':
                return (
                    <a onClick={this.props.onClick}>
                        <FontAwesomeIcon icon={faAngleUp}/>
                    </a>
                )
            case 'plus':
                return (
                    <a onClick={this.props.onClick}>
                        <FontAwesomeIcon icon={faPlus}/>
                    </a>
                )
            default:
                break;

        }
    }
}

export default GeneralButton;