import "./styling.css"


function calculate(e){ 
    e.preventDefault();

    let userinput = document.getElementById("inp").value;
    var dob = new Date(userinput);
    var month_diff = Date.now() - dob.getTime(); 
    var age_dt = new Date(month_diff);  
    var year = age_dt.getUTCFullYear();  
    var age = Math.abs(year - 1970);  
    return document.getElementById("result").innerHTML =  "Your Age is: " + age + " years. ";  
}


export default function AgeCalc(){

    return <div>
        <h1>Age Calculator</h1>
        <form onSubmit={calculate}>
            <label>Enter your DOB</label>
            <br/>
            <input type="date" id="inp" required></input>
            <br/>
            <input type="submit" value="Calculate Age" id="btn"></input>
        </form>
        <p id="result"></p>
    </div>
}