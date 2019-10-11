import { withStyles } from '@material-ui/core/styles';
import {Select} from "../../core";

const styles = theme => ({
    input: {
        minWidth: theme.spacing.unit * 20,
    },
});

export class SelectInput extends Select {
    
}

export default withStyles(SelectInput.combineStyles(styles))(SelectInput);
