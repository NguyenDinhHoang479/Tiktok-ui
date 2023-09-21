import Button from "../../Button";
import classNames from "classnames/bind";
import styles from "./Menu.module.scss";
const cx = classNames.bind(styles);
const Menuitem = ({ data, onClick }) => {
    const classes = cx("item",{
        separate: data.separate,
    })
    return (
        <Button
            leftIcon={data.icon}
            to={data.to}
            btnMenu
            onClick={onClick}
            className={cx(classes)}
        >
            {data.title}
        </Button>
    )
}

export default Menuitem;