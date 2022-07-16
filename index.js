function  Resultcalculator(){
    //input subject marks 
    let subject1Marks = +document.querySelector("#subject1Marks").value;
    let subject2Marks = +document.querySelector("#subject2Marks").value;
    let subject3Marks = +document.querySelector("#subject3Marks").value;
    let subject4Marks = +document.querySelector("#subject4Marks").value;
    let subject5Marks = +document.querySelector("#subject5Marks").value;
    let totalmarks = +document.querySelector("#totalmarks").value;
   // single subject marks percentage calculater
    let totalSubject1Markspercentage = 100 * subject1Marks / (totalmarks/5) ;
    let totalSubject2Markspercentage = 100 * subject2Marks / (totalmarks/5) ;
    let totalSubject3Markspercentage = 100 * subject3Marks / (totalmarks/5) ;
    let totalSubject4Markspercentage = 100 * subject4Marks / (totalmarks/5) ;
    let totalSubject5Markspercentage = 100 * subject5Marks / (totalmarks/5) ;
  
    let totalSubjectMarks = subject1Marks + subject2Marks + subject3Marks + subject4Marks + subject5Marks;
    //subject marks print function
    document.querySelector("#totalSubjectMarks").innerHTML = `Total Subject-Marks :: ${totalmarks} out of ${totalSubjectMarks}`;
    
   
   document.querySelector("#totalSubject1Markspercentage").innerHTML = `Subject1-Markspercentage :: ${totalSubject1Markspercentage}%`;
   document.querySelector("#totalSubject2Markspercentage").innerHTML = `Subject2-Markspercentage :: ${totalSubject2Markspercentage}%`;
   document.querySelector("#totalSubject3Markspercentage").innerHTML = `Subject3-Markspercentage :: ${totalSubject3Markspercentage}%`;
   document.querySelector("#totalSubject4Markspercentage").innerHTML = `Subject4-Markspercentage :: ${totalSubject4Markspercentage}%`;  
   document.querySelector("#totalSubject5Markspercentage").innerHTML = `Subject5-Markspercentage :: ${totalSubject5Markspercentage}%`;
  
   let totalSubjectMarkspercentage =  totalSubjectMarks * 100 / totalmarks;
  
    document.querySelector("#totalSubjectMarkspercentage").innerHTML = `percentage :: ${totalSubjectMarkspercentage}% `;
    //condition check for student awarded grade
  
    if (totalSubjectMarkspercentage  >= 80 && totalSubjectMarkspercentage  <=  100 ){
          document.querySelector("#Grade").innerHTML = `GRADE A<sup>+<sup>`;
    }
    else if (totalSubjectMarkspercentage >= 70 && totalSubjectMarkspercentage <= 80 ){
          document.querySelector("#Grade").innerHTML = `GRADE :: A`;
    }
    else if (totalSubjectMarkspercentage >= 60 && totalSubjectMarkspercentage <= 70 ){
          document.querySelector("#Grade").innerHTML = `GRADE :: B`;
    }
    else if (totalSubjectMarkspercentage >= 50 && totalSubjectMarkspercentage <= 60 ){
          document.querySelector("#Grade").innerHTML = `GRADE :: C`;
    }
    else if (totalSubjectMarkspercentage >= 45 && totalSubjectMarkspercentage <= 50 ){
          document.querySelector("#Grade").innerHTML = `GRADE :: D`;
    }
    else if (totalSubjectMarkspercentage >= 40 && totalSubjectMarkspercentage <= 45 ){
          document.querySelector("#Grade").innerHTML = `GRADE :: E`;
    }
  
    else{
          document.querySelector("#Grade").innerHTML = `Fail`;
    }
    }