function ResultBox({result}){
    if(result==='null' || result===undefined){
        return(
        <div className="Result-Box" >
        <p>Your BMI : </p>
        </div>
    );
    }
    else{
        return(
            <div className="Result-Box" >
            <p>Your BMI : {result.toFixed(2)}</p>
            </div>
        );
    }
}
export default ResultBox;