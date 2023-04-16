function Button() {
    return (
        <div>
      <button className="Button" onClick={calculatebmi()} >
        Calculate
      </button>
      <button className="Button">Clear</button>
      </div>
    );
  }
  export default Button;