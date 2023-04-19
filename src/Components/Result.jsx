function ResultBox({result, setResult}){
    if(result==='null'){
    return(
        <div className="Result-Box" >
        <p>Your BMI : </p>
        </div>
    );
    }
    else{
        return(
            <div className="Result-Box" >
            <p>Your BMI : </p>
            <p>{result}</p>
            </div>
        );
    }
}
export default ResultBox;