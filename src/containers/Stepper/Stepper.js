import React, { Component } from 'react'
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepButton from '@material-ui/core/StepButton';
import Button from '@material-ui/core/Button';
import Aux from '../../utils/Auxilary'
import classes from './Stepper.css'

class MyStepper extends Component {
    state = {
        activeStep: 0,
        completed: [],
    };


    getSteps = () => [...this.props.steps]

    getStepContent = (step) => this.props.children[step]

    totalSteps = () => this.props.steps.length

    isLastStep = () => this.state.activeStep === this.totalSteps() - 1;

    completedSteps = () => [...this.state.completed].length

    allStepsCompleted = () => this.completedSteps() === this.totalSteps()

    handleNext = () => {
        let activeStep;
        if (this.isLastStep() && !this.allStepsCompleted()) {
            const steps = this.getSteps();
            activeStep = steps.findIndex((step, i) => !(i in this.state.completed))
        }
        else {
            activeStep = this.state.activeStep + 1;
        }
        this.setState({
            activeStep,
        });
    }

    handleBack = () => {
        this.setState(state => ({
            activeStep: state.activeStep - 1,
        }));
    };

    handleStep = step => () => {
        this.setState({
            activeStep: step,
        });
    };

    handleComplete = () => {
        const { completed } = this.state;
        completed[this.state.activeStep] = true;
        this.setState({
            completed,
        });
        this.handleNext();
    };

    handleReset = () => {
        this.setState({
            activeStep: 0,
            completed: {},
        });
    };

    onSubmit = (event)=>{
        event.preventDefault();
        this.isLastStep() ? this.props.onSave() : this.handleComplete();
    }


    render() {
        const steps = this.getSteps();
        const { activeStep } = this.state;

        return (
            <Aux>
                <Stepper nonLinear activeStep={activeStep}>
                    {steps.map((label, index) => {
                        return (
                            <Step key={label}>
                                <StepButton
                                    onClick={this.handleStep(index)}
                                    completed={this.state.completed[index]}>
                                    {label}
                                </StepButton>
                            </Step>
                        );
                    })}

                </Stepper>
                <div>
                    {this.allStepsCompleted() ?
                        (
                            <Button onClick={this.handleReset}>Finish</Button>
                        )
                        :
                        (
                            <div>
                                <form onSubmit={event=>this.onSubmit(event)}>{this.getStepContent(activeStep)}
                                <div className={classes.buttonsRow}>
                                    
                                    <div className={classes.navigationButtons}> 
                                        <Button 
                                            color='primary'
                                            onClick={this.props.onClose}>
                                            Close
                                        </Button>
                                    </div>
                                    <div className={classes.closeButton}>
                                        <Button
                                            disabled={activeStep === 0}
                                            onClick={this.handleBack}>
                                            Back
                                        </Button>
                                        <Button
                                            variant="contained"
                                            color="primary"
                                            //onClick={this.isLastStep() ? this.props.onSave : this.handleComplete}
                                            type='submit'>
                                            {this.isLastStep() ? 'Save' : 'Next'}
                                        </Button>
                                    </div>
                                </div>
                                </form>
                            </div>
                        )
                    }
                </div>
            </Aux>
        )
    }
}

export default MyStepper;