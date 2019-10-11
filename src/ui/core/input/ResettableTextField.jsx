import InputAdornment from '@material-ui/core/InputAdornment';
import IconButton from '@material-ui/core/IconButton';
import MuiTextField from '@material-ui/core/TextField';
import { withStyles, createStyles } from '@material-ui/core/styles';
import ClearIcon from '@material-ui/icons/Clear';

import React from 'react';

import PropTypes from 'prop-types';

import classNames from 'classnames';

import { t } from "../i18n";
import {ValidatorComponent} from "../validator";

const styles = createStyles({
    clearIcon: {
        height: 16,
        width: 0,
        top: "-7px",
        position: "relative"
    },
    visibleClearIcon: {
        width: 16,
    },
    clearButton: {
        height: 24,
        width: 0,
    },
    visibleClearButton: {
        width: 24,
    },
});

/**
 * An override of the default Material-UI TextField which is resettable
 */
class ResettableTextField extends ValidatorComponent {
    static propTypes = {
        classes: PropTypes.object.isRequired,
        clearAlwaysVisible: PropTypes.bool,
        InputProps: PropTypes.object,
        onBlur: PropTypes.func,
        onChange: PropTypes.func.isRequired,
        onFocus: PropTypes.func,
        resettable: PropTypes.bool,
        value: PropTypes.any.isRequired,
    };

    state = { showClear: false, isValid: true };

    handleClickClearButton(event) {
        event.preventDefault();
        this.props.onChange('');
    };

    handleMouseDownClearButton(event) {
        event.preventDefault();
    };

    handleFocus(event) {
        if(this.props.resettable) this.setState({ showClear: true });
        this.props.onFocus && this.props.onFocus(event);
    };

    handleBlur(event) {
        if(this.props.resettable) this.setState({ showClear: false });
        this.props.onBlur && this.props.onBlur(event);
    };

    render() {
        const {
            translate,
            classes,
            clearAlwaysVisible,
            InputProps,
            error,
            errorMessages,
            validators,
            requiredError,
            helperText,
            validatorListener,
            withRequiredValidator,
            value,
            resettable,
            ...rest
        } = this.props;
        const { showClear, isValid } = this.state;
        const {
            clearButton,
            clearIcon,
            visibleClearButton,
            visibleClearIcon,
        } = classes;
        return (
            <MuiTextField
                fullWidth
                value={value}
                InputProps={{
                    endAdornment: resettable && value && (
                        <InputAdornment position="end">
                            <IconButton
                                className={classNames(clearButton, {
                                    [visibleClearButton]:
                                        clearAlwaysVisible || showClear,
                                })}
                                aria-label="clear"
                                title={t('ra.action.clear_input_value')}
                                disableRipple
                                onClick={this.handleClickClearButton.bind(this)}
                                onMouseDown={this.handleMouseDownClearButton}
                            >
                                <ClearIcon
                                    className={classNames(clearIcon, {
                                        [visibleClearIcon]:
                                            clearAlwaysVisible || showClear,
                                    })}
                                />
                            </IconButton>
                        </InputAdornment>
                    ),
                    ...InputProps,
                }}
                {...rest}
                error={!isValid || error}
                helperText={(!isValid && this.getErrorMessage()) || helperText}
                onFocus={this.handleFocus.bind(this)}
                onBlur={this.handleBlur.bind(this)}
            />
        );
    }
}

export default withStyles(ResettableTextField.combineStyles(styles))(ResettableTextField);
