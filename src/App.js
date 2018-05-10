import React from 'react';
import logo from './logo.svg';
import './App.css';
import uuid from 'react-native-uuid';
import GeneralButton from './helpersElements';
import Task from './taskElement';



class App extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            taskList: Array(0).fill(null)
        };
    }

    handleDelete(key) {
        console.log('Before deleting: ',this.state.taskList);
        console.log('Deleting the task with key: ',key);
        var newList = this.state.taskList.filter(task => task.key !== key);
        this.setState({
            taskList: newList
        });
        console.log('After deleting: ',this.state.taskList);
    }
    handleEditTitle(key) {
        var elem = this.state.taskList.find(task => task.key === key);
        if (elem !== undefined) {
            console.log('New task title:', elem.title);
        }

    }

    handleEditDescription(key) {
        var elem = this.state.taskList.find(task => task.key === key);
        if (elem !== undefined) {
            console.log('New description of the task:', elem.title);
            console.log(elem.description);
        }

    }

    handleChangeMark(key) {
        const workingList = this.state.taskList.slice(0);
        var elem = workingList.find(task => task.key === key);
        if (elem !== undefined) {
           elem.status = !(elem.status);
           console.log('New status of the task:', elem.title);
           console.log(elem.status);
        }
        this.setState({
            taskList: workingList
        });
    }
    handleAddTask() {
        var arr = new Array(32);
        uuid.v1(null, arr, 16);
        const newList = this.state.taskList.slice(0);
        newList.push({
            key: uuid.unparse(arr,16),
            title: "new task",
            description: "",
            status: "inactive"
        });
        this.setState({
            taskList: newList
        });
    }

    render() {

        const tasks = this.state.taskList.map((value,index) => {
            return (
                <Task
                    key={value.key}
                    onDelete = {key => this.handleDelete(key)}
                    onEditTitle = {value => this.handleEditTitle(value)}
                    onEditDescription = {value => this.handleEditDescription(value)}
                    onChangeMark = {key => this.handleChangeMark(key)}
                    value = {value}
                />
            );
        });

        return (
            <div className="App">
                <header className="App-header">
                    <img src={logo} className="App-logo" alt="logo"/>
                    <h1 className="App-title">React Todo List</h1>
                </header>

                <section className="container">
                    <div className="task-list">
                        <div className="task-list-header">
                            <span>Tasks:</span>
                            <GeneralButton
                                type='plus'
                                onClick={() => this.handleAddTask()}
                            />
                        </div>
                        <ol>{tasks}</ol>
                    </div>
                </section>


            </div>
        );
    }
}

export default App;
