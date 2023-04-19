/*
Conditional Rendering is done based on the value of result prop
also result is 
*/
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
            <p>Your BMI : {result}</p>
            </div>
        );
    }
}
export default ResultBox;