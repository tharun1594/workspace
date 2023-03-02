const Box = props => {
    const { class, text } = props;
    return (
        <div className={class}>{text}</div>
    );
}

const element = (
    <div className="bg">
        <h1 className="heading">Boxes</h1>
        <Box class="small" text="Small" />
        <Box class="medium" text="Medium" />
        <Box class="large" text="Large" />        
    </div>
)

ReactDOM.render(element, document.getElementById("root"));
