import PropTypes from "prop-types";
import Button from "./Button";

const Header = (props) => {

    return (
        <header className={"header"}>
            <h1>{props.title}</h1>
            <Button color={"green"}
                    text={props.showNewTaskForm ? "Close" : "New"}
                    onClick={props.onAddTask} />
        </header>
    )
}

Header.defaultProps = {
    title: "Tasker",
}

Header.propTypes = {
    title: PropTypes.string.isRequired,
}

export default Header;
