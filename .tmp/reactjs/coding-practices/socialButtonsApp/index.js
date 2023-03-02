const Button = (props) => {
    const { class, name } = props;
    return (
  <div>
    <button className={class}>{name}</button>
  </div>;
    );
};

const element = (
  <div className="bg">
    <h1 className="heading">Social Buttons</h1>
    <div className="button-elements">
      <Button class="like" name="Like"/>
      <Button class="comment" name="Comment"/>
      <Button class="share" name="Share"/>
    </div>
  </div>
);

ReactDOM.render(element, document.getElementById("root"));
