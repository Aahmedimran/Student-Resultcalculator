 const Resultcalculator = () =>{
    //input-mathed subject marks 
    let subject1Marks = +document.querySelector("#subject1Marks").value;
    let subject2Marks = +document.querySelector("#subject2Marks").value;
    let subject3Marks = +document.querySelector("#subject3Marks").value;
    let subject4Marks = +document.querySelector("#subject4Marks").value;
    let subject5Marks = +document.querySelector("#subject5Marks").value;
    let totalmarks = +document.querySelector("#totalmarks").value;

if(subject1Marks>100 || subject2Marks>100 || subject3Marks>100 || subject4Marks>100 || subject5Marks>100 )        {
      alert("please enter correct value");
}

    document.querySelector("#ObtaniendSubjectmarks1").innerHTML = `${subject1Marks}`;
    document.querySelector("#ObtaniendSubjectmarks2").innerHTML = `${subject2Marks}`;
    document.querySelector("#ObtaniendSubjectmarks3").innerHTML = `${subject3Marks}`;
    document.querySelector("#ObtaniendSubjectmarks4").innerHTML = `${subject4Marks}`;
    document.querySelector("#ObtaniendSubjectmarks5").innerHTML = `${subject5Marks}`;



    //All subject marks add founction
    let totalSubjectMarks = subject1Marks + subject2Marks + subject3Marks + subject4Marks + subject5Marks;
    //All subject marks print function
    document.querySelector("#totalSubjectMarks").innerHTML = `Total Subject-Marks :: ${totalSubjectMarks} out of ${totalmarks}`;
    
     
   // All subject marks percentage calculate function
   let totalSubjectMarkspercentage =  totalSubjectMarks * 100 / totalmarks;
   // All subject marks percentage print function
    document.querySelector("#totalSubjectMarkspercentage").innerHTML = ` ${totalSubjectMarkspercentage}% `;


  // single subject marks calculate function
    let singleSubjectmarks = totalmarks/5;
    // print single subject marks
     document.querySelector("#singleSubjectmarks1").innerHTML = `${singleSubjectmarks}`;
     document.querySelector("#singleSubjectmarks2").innerHTML = `${singleSubjectmarks}`;
     document.querySelector("#singleSubjectmarks3").innerHTML = `${singleSubjectmarks}`;
     document.querySelector("#singleSubjectmarks4").innerHTML = `${singleSubjectmarks}`;
     document.querySelector("#singleSubjectmarks5").innerHTML = `${singleSubjectmarks}`;





     // single subject marks percentage calculater founction
   let totalSubject1Markspercentage = 100 * subject1Marks / singleSubjectmarks;   
   let totalSubject2Markspercentage = 100 * subject2Marks / singleSubjectmarks;
   let totalSubject3Markspercentage = 100 * subject3Marks / singleSubjectmarks;
   let totalSubject4Markspercentage = 100 * subject4Marks / singleSubjectmarks;
   let totalSubject5Markspercentage = 100 * subject5Marks / singleSubjectmarks;

// single subject marks percentage print fouction
   document.querySelector("#totalSubject1Markspercentage").innerHTML = `${totalSubject1Markspercentage}%`;
   document.querySelector("#totalSubject2Markspercentage").innerHTML = `${totalSubject2Markspercentage}%`;
   document.querySelector("#totalSubject3Markspercentage").innerHTML = `${totalSubject3Markspercentage}%`;
   document.querySelector("#totalSubject4Markspercentage").innerHTML = `${totalSubject4Markspercentage}%`;  
   document.querySelector("#totalSubject5Markspercentage").innerHTML = `${totalSubject5Markspercentage}%`;
  










 


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