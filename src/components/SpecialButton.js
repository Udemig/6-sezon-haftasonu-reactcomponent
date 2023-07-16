const SpecialButton = (props) => {
  //console.log(props)

  return (
    <div>
      <button
      

      className={props.className} onClick={props.butonFonksiyonu}>
        {props.butonIsmi}
      </button>
    </div>
  );
};

export default SpecialButton;
