import { Button } from "@material-ui/core";
import React from "react";

export interface IMyButtonProps {
    buttonName: string;
    handleButtonClick(): void;
}
export class MyButton extends React.Component<IMyButtonProps> {
    render () {
        return (
            <Button color="primary"
                onClick={this.onButtonClicked}>
                {this.props.buttonName}
            </Button>
        )
    }
}