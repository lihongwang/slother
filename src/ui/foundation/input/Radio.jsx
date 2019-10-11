import { withStyles } from '@material-ui/core/styles';

import {Radio } from "../../core";

const styles = theme => ({
    label: {
        position: 'relative',
    },
});

export class MUIRadio extends Radio {
    
}

export default withStyles(MUIRadio.combineStyles(styles))(MUIRadio);
