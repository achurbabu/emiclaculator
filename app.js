// Listen for Submit
document.getElementById('loan-form').addEventListener('submit', function(e){

//Hide results
document.getElementById('results').style.display = 'none';

//Show loading
document.getElementById('loading').style.display = 'block';

setTimeout(calculateResult, 2000);

e.preventDefault();
});


// Calculate Results
function calculateResult(){

    // UI Elements
    
    
    const years = document.getElementById('years');
    var lop=0;
    var ldp=0;
    var eop=0;
    var edp=0;
    var gst;
    var dnp;
    var ufc;
    
    const monthlyPayment = document.getElementById('monthly-payment');
    const totalPayment = document.getElementById('total-payment');
    const totalInterest = document.getElementById('total-interest');
    const laptop = document.getElementById('laptop');
    const edglobe = document.getElementById('edglobe');
    if (laptop.value=="A315-23") {
     lop = 44000;
     ldp = 37288;
  
    }
      if (laptop.value=="Z2-485") {
     lop = 51000;
     ldp = 37288;
  
    }
    if (laptop.value=="V15–15") {
     lop = 51000;
     ldp = 40500;
  
    }
    if (edglobe.value=="7") {
     eop = 24000;
     edp = 12990;
  
    }
      if (edglobe.value=="57") {
     eop = 48000;
     edp = 19950;
  
    }
    if (edglobe.value=="8") {
     eop = 24000;
     edp = 12990;
  
    }
    if (edglobe.value=="9") {
     eop = 24000;
     edp = 12990;
  
    }
      if (edglobe.value=="810") {
     eop = 48000;
     edp = 19950;
  
    }
    if (edglobe.value=="10") {
     eop = 24000;
     edp = 12990;
  
    }
    if (edglobe.value=="12") {
     eop = 28000;
     edp = 14970;
  
    }
    
    const total = eop + lop;
    const totalsaving = total - edp - ldp;
    const loanamount = Math.round((edp+ ldp) * 1.19);
    gst = Math.round((edp + ldp)*.19);
    dnp = Math.round(loanamount*.2);
    const principal = loanamount - dnp;
    var pf = Math.round(principal *.02);
    ufc = dnp + pf ;
    const rate = 25.77/1200;
    const	time = years.value;
    const emi =(principal	* rate	* Math.pow(1+rate,time)) / (Math.pow(1+rate,time) - 1);
    const mi = Math.round(emi);

    if(isFinite(emi)){
        monthlyPayment.value =mi.toFixed(2);
        totalPayment.value = Math.round((mi * time));
        totalInterest.value = Math.round(((emi * time) - principal ));
        document.getElementById("GST").innerHTML = gst;
        document.getElementById("dp").innerHTML = dnp;
        document.getElementById("la").innerHTML = principal;
        document.getElementById("pf").innerHTML = pf;
        document.getElementById("uc").innerHTML = ufc;
        //Show results
        document.getElementById('results').style.display = 'block';

        //Hide loading
        document.getElementById('loading').style.display = 'none';


    }else{
        showError('Please Check The Numbers');
    }
    google.charts.load('current', {'packages':['corechart']});
google.charts.setOnLoadCallback(drawChart);

// Draw the chart and set the chart values
function drawChart() {
  var data = google.visualization.arrayToDataTable([
  ['Task', 'Total Repayment'],
  ['Total Intrest', totalInterest.value()],
  ['Principle Amount', principal],
  
]);

  // Optional; add a title and set the width and height of the chart
  var options = {'title':'Total Repayment', 'width':550, 'height':400};

  // Display the chart inside the <div> element with id="piechart"
  var chart = new google.visualization.PieChart(document.getElementById('piechart'));
  chart.draw(data, options);
}

}


// Show Error
function showError(error){
    
//Hide results
document.getElementById('results').style.display = 'none';
//Hide loading
document.getElementById('loading').style.display = 'none';

// Create a Div
const errorDiv = document.createElement('div');
// Add Class
errorDiv.className = 'alert alert-danger';
// Create TextNode and append to div
errorDiv.appendChild(document.createTextNode(error));

const card =  document.querySelector('.card');
const heading =  document.querySelector('.heading');

card.insertBefore(errorDiv, heading);

// Clear Error after 3 Seconds
setTimeout(clearError, 3000);
}

// Clear Error
function clearError(){
    document.querySelector('.alert').remove();
}