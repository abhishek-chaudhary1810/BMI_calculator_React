function ResultBox({state, setResult}){
    return(
        <div className="Result-Box" >
        <p>Your BMI : </p>
        <p>{state}</p>
        </div>
    );
}
export default ResultBox;