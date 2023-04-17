function ResultBox({value}){
    return(
        <div className="Result-Box" >
        <p>Your BMI : </p>
        {value.result}
        </div>
    );
}
export default ResultBox;