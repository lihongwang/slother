import { withStyles } from '@material-ui/core/styles';
import { Checkbox } from "../../core";

const styles = theme => ({
    root: {},
    label: {
        transform: 'translate(0, 1.5px) scale(0.75)',
        transformOrigin: `top ${theme.direction === 'ltr' ? 'left' : 'right'}`,
    },
    checkbox: {
        height: 32,
    },
});


export class MUICheckbox extends Checkbox {
   
}

export default withStyles(MUICheckbox.combineStyles(styles))(MUICheckbox);
