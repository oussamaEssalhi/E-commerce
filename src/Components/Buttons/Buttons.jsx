import "./Buttons.css";

const Buttons = (props) => {
    return (
        <div className="button-primary">
            {props.children}
            {props.icon}
        </div>
    );
};
const ButtonSecondary = (props) => {
    return (
        <div className="button-primary-secondary">
            {props.children}
            {props.icon}
        </div>
    );
};

export default Buttons;
export { ButtonSecondary };
