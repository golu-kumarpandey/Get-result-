// let firstName = "Hello world"
// document.write(firstName )
// document.write("<br>")
// document.write(typeof(firstName))
// document.write("<br>")

// let number = 22
// document.write(number)
// document.write("<br>")
// document.write(typeof(number))
// document.write("<br>")

// let array = ['golu','ramayan',"permission"]
// document.write(array)
// document.write("<br>")
// document.write(typeof(array))
// document.write("<br>")

// let bool = true
// document.write(bool)
// document.write("<br>")
// document.write(typeof(bool))

// let name = "golu pandey"
// let fimelName = "joyti kumar"
// let gender = "fimale"
// if (gender == "Male"){
//     document.write(name)
//     console.log(name)

// }else{
//     document.write(fimelName)
//     console.log(fimelName)
// }

// exmple of function parameter
// function printThename (firstname,lastname){
//     document.write("Hello " + firstname + " " +lastname + "")
// }
// function sumofnumber(a,b,){
//     document.write( a + b +"<br>")
//     printThename("golu","kumar")
// }
// sumofnumber(2,3)
// function get_the_marks(M,S,SC,Sk,E){
//     let total = parseInt(M) + parseInt(S)+ parseInt(SC) + parseInt(E) + parseInt(Sk)
//     document.write(`<h1> your total number is ${total} </h1> <br>`)
//     let finnalResult = (total / 500) * 100
//     return finnalResult
// }

// let hindi = prompt("Enter your hindi marks")



// let math = prompt("Enter your math marks")

// let sanskrit = prompt("Enter your sanskrit marks")
// let socileScience = prompt("Enter your socileScience marks")
// let Science = prompt("Enter you sciece marks")
// let markofstudent = get_the_marks(hindi,math,sanskrit,socileScience,Science);
// document.write(`<h1>Your total percetage is: ${markofstudent} % <h1/>`)

// example of using function loop and event 
// function getThetable(){
   
//     let number = prompt("Enter your table number")
//     let intnumber = parseInt(number)
//     for (let i = 1; i <= 10; i++){
//         document.write(`<h3>${intnumber} * ${i} = ${intnumber * i}</h3><br>`)
//     }
// }

// this  code is use for conditional statement
function submit1() {
    
    var hindiMarks = document.getElementById("hindi").value;
    var mathMarks = document.getElementById("math").value;
    var englishMarks = document.getElementById("english").value;
    var scienceMarks = document.getElementById("science").value;
    var computerMarks = document.getElementById("computer").value;
    let erromassage = document.getElementById("error")
    let total_marks = parseInt(hindiMarks) + parseInt(mathMarks) + parseInt(englishMarks) + parseInt(scienceMarks) + parseInt(computerMarks)
    let pecentageMarks = parseInt((total_marks/500) * 100)
    if(total_marks <= 500 ) {
        if ( 300 <= total_marks && total_marks <= 500 ){
            document.getElementById("totalmark").style.display = "block"
            document.getElementById("totalmark").innerHTML = `Your total marks is: ${total_marks}`
            document.getElementById("totalmark").style.color = "green"
            erromassage.style.display = "none"

            // this code is for percentage
             document.getElementById("totalpecentage").style.display = 'block'
             document.getElementById("totalpecentage").innerHTML = `Your percentage is: ${pecentageMarks}%`
             document.getElementById("totalpecentage").style.color ="green"

            //  this code is for devision 
            document.getElementById("dev").style.display = 'block'
             document.getElementById("dev").innerHTML = `Your devision is: 1st`
             document.getElementById("dev").style.color ="green"



            
            
        }else if(250 <= total_marks && total_marks<= 300){

            document.getElementById("totalmark").style.display = "block"
            document.getElementById("totalmark").innerHTML = `Your total marks is: ${total_marks}`
            document.getElementById("totalmark").style.color = "blue"
            erromassage.style.display = "none"

            // this code is for percentage
             document.getElementById("totalpecentage").style.display = 'block'
             document.getElementById("totalpecentage").innerHTML = `Your percentage is: ${pecentageMarks}%`
             document.getElementById("totalpecentage").style.color ="blue"

            //  this code is for devision 
            document.getElementById("dev").style.display = 'block'
             document.getElementById("dev").innerHTML = `Your devision is: 2nd`
             document.getElementById("dev").style.color ="blue"

        }else if( 150 <= total_marks && total_marks <= 250){
            document.getElementById("totalmark").style.display = "block"
            document.getElementById("totalmark").innerHTML = `Your total marks is: ${total_marks}`
            document.getElementById("totalmark").style.color = " black"
            erromassage.style.display = "none"

            // this code is for percentage
             document.getElementById("totalpecentage").style.display = 'block'
             document.getElementById("totalpecentage").innerHTML = `Your percentage is: ${pecentageMarks}%`
             document.getElementById("totalpecentage").style.color ="black"

            //  this code is for devision 
            document.getElementById("dev").style.display = 'block'
             document.getElementById("dev").innerHTML = `Your devision is: 3rd`
             document.getElementById("dev").style.color ="black"
        }else{
            document.getElementById("fail").style.display = "block"
            document.getElementById("fail").style.color = "red"

            document.getElementById("totalmark").style.display = "none"
            document.getElementById("totalmark").innerHTML = `Your total marks is: ${total_marks}`
            document.getElementById("totalmark").style.color = " black"
            erromassage.style.display = "none"

            // this code is for percentage
             document.getElementById("totalpecentage").style.display = 'none'
             document.getElementById("totalpecentage").innerHTML = `Your percentage is: ${pecentageMarks}%`
             document.getElementById("totalpecentage").style.color ="black"

            //  this code is for devision 
            document.getElementById("dev").style.display = 'none'
             document.getElementById("dev").innerHTML = `Your devision is: 3rd`
             document.getElementById("dev").style.color ="black"
        }

    }else{

       
        erromassage.style.display = "block"
        erromassage.style.color = "red"
    }
       
    
   

  
}



