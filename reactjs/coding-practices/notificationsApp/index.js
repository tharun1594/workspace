const Notification = props => {
    const { class, image, text } = props;
    return (
        <div className={class}>
            <img src="" className={image} />
            <p>{text}</p>            
        </div>
    );
}

const element = (
    <div className="bg">
        <h1>Notifications</h1>
        <Notification class="info" image="image" text="Information Message" />
        <Notification class="success" image="image" text="Success Message" />
        <Notification class="warning" image="image" text="Warning Message" />
        <Notification class="error" image="image" text="Error Message" />
    </div>
)

ReactDOM.render(element, document.getElementById('root'))
