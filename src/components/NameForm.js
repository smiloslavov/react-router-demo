import React from 'react';
import { Form, FormControl, Button } from 'react-bootstrap';
import { Prompt } from 'react-router-dom';

class NameForm extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            firstName: '',
            lastName: '',
            valid: false
        };
    }

    onHandleFirstNameChange = (event) => {
        this.setState({
            firstName: event.target.value
        });
    }

    onHandleLastNameChange = (event) => {
        this.setState({
            lastName: event.target.value
        });
    }

    onSubmit = () => {
        if (this.state.firstName === '' || this.state.lastName === '') {
            this.setState({valid: false});
        } else {
            this.setState({valid: true});
            alert(`Your name is ${this.state.firstName} ${this.state.lastName}`);
        }
    }

    render = () => {
        return (
            <div>
                <Prompt 
                    when={this.state.valid !== true} 
                    message="Leaving this form will lose your unsaved data." 
                />
                <h1>Prompt for Completion</h1>
                <Form horizontal={true} inline={true}>
                    <FormControl
                        type="text"
                        value={this.state.firstName}
                        placeholder="Please enter first name"
                        onChange={this.onHandleFirstNameChange}
                    />
                    <FormControl
                        type="text"
                        value={this.state.lastName}
                        placeholder="Please enter last name"
                        onChange={this.onHandleLastNameChange}
                    />
                    <Button 
                        className={'btn btn-primary'}
                        onClick={this.onSubmit}>
                        Submit
                    </Button>
                </Form>
            </div>
        );
    }
}

export default NameForm;