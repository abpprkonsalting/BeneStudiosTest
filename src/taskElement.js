import React from "react";
import GeneralButton from './helpersElements';

class TaskHeader extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            value: this.props.value
        };
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event) {
        var newState = {...this.state};
        newState.value.title = event.target.value;
        this.setState(newState);
        this.props.onEditTitle(this.state.value.key);
    }

    render() {
        return (
            <form>
                <input type="text" value={this.state.value.title} onChange={this.handleChange} />
            </form>
        );
    }
}

class TaskBody extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            value: this.props.value
        };
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event) {
        var newState = {...this.state};
        newState.value.description = event.target.value;
        this.setState(newState);
        this.props.onEditDescription(this.state.value.key);
    }

    render() {
        return (
            <form>
                <textarea type="text" value={this.state.value.description} onChange={this.handleChange} />
            </form>
        );
    }
}

class Task extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            bodyClass: "task-body-text",
            button: 'show',
            mark: props.value.status
        };
    }

    handleToggleDescription() {
        if (this.state.bodyClass === 'task-body-text') {
            this.setState({
                bodyClass:'task-body-text shown',
                button: 'hide'
            });
        }
        else {
            this.setState({
                bodyClass:'task-body-text',
                button: 'show'
            });
        }
    }

    handleChangeMark() {
        if (this.state.mark === 'active') {
            this.setState({
                mark:'inactive'
            });
        }
        else {
            this.setState({
                mark:'active'
            });
        }
        this.props.onChangeMark(this.props.value.key);
    }

    render() {
        return (
            <div className="task">
                <div className="task-header">
                    <GeneralButton
                        type='mark'
                        value={this.state.mark}
                        onClick={() => this.handleChangeMark()}
                    />
                    <GeneralButton
                        type={this.state.button}
                        onClick={() => this.handleToggleDescription()}
                    />
                    <TaskHeader
                        value = {this.props.value}
                        onEditTitle = {key => this.props.onEditTitle(key)}
                    />
                    <GeneralButton
                        type='delete'
                        onClick={() => this.props.onDelete(this.props.value.key)}
                    />
                </div>
                <div className="task-body">
                    <div className={this.state.bodyClass}>
                        <TaskBody
                            value = {this.props.value}
                            onEditDescription = {key => this.props.onEditDescription(key)}
                        />
                    </div>
                </div>

            </div>

        )
    }
}

export default Task;