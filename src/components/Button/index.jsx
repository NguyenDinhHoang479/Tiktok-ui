import classNames from "classnames/bind";
import { Link } from "react-router-dom";
import styles from "./Button.module.scss";


const cx = classNames.bind(styles);
const Button = ({
    to,
    href,
    primary = false,
    small = false,
    large = false,
    outline = false,
    rounded = false,
    btnMenu = false,
    leftIcon,
    rightIcon,
    className,
    children,
    onClick,
    disabled = false,
    ...passProps }) => {

    let Comp = "button";
    const props = {
        onClick,
        ...passProps
    }

    if (to) {
        props.to = to
        Comp = Link
    } else if (href) {
        props.href = href
        Comp = "a"
    }

    if(disabled){
        Object.keys(props).forEach((key)=>{
           if(key.startsWith('on') && typeof props[key] === 'function'){
              delete props[key]
           }
        })
    }

    const classes = cx('wrapper', {
        [className]: className,
        primary: primary,
        outline: outline,
        small: small,
        large: large,
        disabled: disabled,
        rounded: rounded,
        btnMenu: btnMenu

        
    });

    return (
        <Comp className={classes} {...props}>
            {leftIcon && <span className={cx('icon')}>{leftIcon}</span>}
            <span className={cx("content")}>{children}</span>
            {rightIcon && <span className={cx('icon')}>{rightIcon}</span>}
        </Comp>
    );
}

export default Button;