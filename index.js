const Box = (props) => {
        const {class, text} = props
    return(
        <div class={class} >
            <p> {text} </p>
        </div>
    )
};

const element = (
  <div class="bg-container">
    <h1 class="head">Boxes</h1>
    <div class="box-container">
      <Box class='small' text="small" />
      <Box class='medium' text="medium" />
      <Box class='large' text="large" />
    </div>
  </div>
);

ReactDOM.render(element, document.getElementById("root"));
