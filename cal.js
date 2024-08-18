// declaration
    var ChangeCalculatorModeBTN = document.getElementById("ChangeCalculatorModeBTN");
    var ToggledModeTXT = document.getElementById("ToggledModeTXT");
    var Toggled = document.getElementById("Toggled");
    var SoundEffect = document.getElementById("SoundEffect");
    var click = 0;
    var Modes = [ 2 , 1 ];
    var ToggledModeTXT = document.getElementById("ToggledModeTXT");
    var CalculateText = document.getElementById("CalculateText");
    var CalculateBTN = document.getElementById("CalculateBTN");
    var ButtonShadow = document.getElementById("ButtonShadow");
    var CalculatorContainer = document.getElementById("CalculatorContainer");
    var DisplayScreen = document.getElementById("DisplayScreen");
    var InputOperation = document.getElementById("InputOperation");
    var DisplayScreenMode2 = document.getElementById("DisplayScreenMode2");

    var OperationButtonAdd = document.getElementById("OperationButtonAdd");
    var OperationButtonMin = document.getElementById("OperationButtonMin");
    var OperationButtonMul = document.getElementById("OperationButtonMul");
    var OperationButtonDiv = document.getElementById("OperationButtonDiv");

    var NumPadButton1 = document.getElementById("NumPadButton1");
    var NumPadButton2 = document.getElementById("NumPadButton2");
    var NumPadButton3 = document.getElementById("NumPadButton3");
    var ClearInputVal = document.getElementById("ClearInputVal");
    
    var NumPadButton4 = document.getElementById("NumPadButton4");
    var NumPadButton5 = document.getElementById("NumPadButton5");
    var NumPadButton6 = document.getElementById("NumPadButton6");
    var DecimalInputVal = document.getElementById("DecimalInputVal");  

    var NumPadButton7 = document.getElementById("NumPadButton7");
    var NumPadButton8 = document.getElementById("NumPadButton8");
    var NumPadButton9 = document.getElementById("NumPadButton9");
    var NumPadButton0 = document.getElementById("NumPadButton0");

    var StoredOperation=[];

// functions
    // clear field mode 2
    function clearField(){
        InputOperation.value = 0;
        StoredOperation.length=0;
    }

    // numpad function
    function StoreOperation( store ){
       
        StoredOperation.push(store);
        let ConvertTostringOperation = StoredOperation.join("");
        let SplitOperation = ConvertTostringOperation.split(" ");

        let OperationValue = InputOperation.value = SplitOperation;

        console.log("stored: " +  StoredOperation);
        console.log("converted: " +  ConvertTostringOperation);
        console.log("splitted: " +  SplitOperation);
        console.log("value: " +  OperationValue);
    }

    // calculate mode 2
    function CalculateOperationMode2(){
        console.log(" calculating mode 2 ");
        ToggleButton();

        let OperationValue = InputOperation.value;
        let StringOP = OperationValue.toString();
        let SplitString = StringOP.split("");
        
        
           if(SplitString.includes("+")){
                console.log(true);
                SplitString = StringOP.split("+");
                console.log(SplitString);

                let num1 = SplitString[0];
                let num2 = SplitString[1];

                if(num1.includes(".") && num2.includes(".")){
                    console.log( "float " + " + " + " float" );

                    let ParseNum1 = parseFloat(SplitString[0]);
                    let ParseNum2 = parseFloat(SplitString[1]);

                    let Total = ParseNum1 + ParseNum2;
                    InputOperation.value = Total;

                }
                else if(num1.includes(".") && !num2.includes(".")){
                    console.log( "float " + " + " + " wholeNum" );

                    let ParseNum1 = parseFloat(SplitString[0]);
                    let ParseNum2 = parseInt(SplitString[1]);

                    let Total = ParseNum1 + ParseNum2;
                    InputOperation.value = Total;
                }
                else if(!num1.includes(".") && num2.includes(".")){
                    console.log( "wholeNum " + " + " + " float" );

                    let ParseNum1 = parseInt(SplitString[0]);
                    let ParseNum2 = parseFloat(SplitString[1]);

                    let Total = ParseNum1 + ParseNum2;
                    InputOperation.value = Total;
                }
                else if(!num1.includes(".") && !num2.includes(".")){
                    console.log( "wholeNum " + " + " + " wholeNum" );

                    let ParseNum1 = parseInt(SplitString[0]);
                    let ParseNum2 = parseInt(SplitString[1]);

                    let Total = ParseNum1 + ParseNum2;
                    InputOperation.value = Total;
                }
           }
           else if(SplitString.includes("-")){
            console.log(true);
            SplitString = StringOP.split("-");
            console.log(SplitString);

            let num1 = SplitString[0];
            let num2 = SplitString[1];

            if(num1.includes(".") && num2.includes(".")){
                console.log( "float " + " - " + " float" );

                let ParseNum1 = parseFloat(SplitString[0]);
                let ParseNum2 = parseFloat(SplitString[1]);

                let Total = ParseNum1 - ParseNum2;
                InputOperation.value = Total;

            }
            else if(num1.includes(".") && !num2.includes(".")){
                console.log( "float " + " - " + " wholeNum" );

                let ParseNum1 = parseFloat(SplitString[0]);
                let ParseNum2 = parseInt(SplitString[1]);

                let Total = ParseNum1 - ParseNum2;
                InputOperation.value = Total;
            }
            else if(!num1.includes(".") && num2.includes(".")){
                console.log( "wholeNum " + " - " + " float" );

                let ParseNum1 = parseInt(SplitString[0]);
                let ParseNum2 = parseFloat(SplitString[1]);

                let Total = ParseNum1 - ParseNum2;
                InputOperation.value = Total;
            }
            else if(!num1.includes(".") && !num2.includes(".")){
                console.log( "wholeNum " + " - " + " wholeNum" );

                let ParseNum1 = parseInt(SplitString[0]);
                let ParseNum2 = parseInt(SplitString[1]);

                let Total = ParseNum1 - ParseNum2;
                InputOperation.value = Total;
            }
       }
       else if(SplitString.includes("x")){
        console.log(true);
        SplitString = StringOP.split("x");
        console.log(SplitString);

        let num1 = SplitString[0];
        let num2 = SplitString[1];

        if(num1.includes(".") && num2.includes(".")){
            console.log( "float " + " x " + " float" );

            let ParseNum1 = parseFloat(SplitString[0]);
            let ParseNum2 = parseFloat(SplitString[1]);

            let Total = ParseNum1 * ParseNum2;
            InputOperation.value = Total;

        }
        else if(num1.includes(".") && !num2.includes(".")){
            console.log( "float " + " x " + " wholeNum" );

            let ParseNum1 = parseFloat(SplitString[0]);
            let ParseNum2 = parseInt(SplitString[1]);

            let Total = ParseNum1 * ParseNum2;
            InputOperation.value = Total;
        }
        else if(!num1.includes(".") && num2.includes(".")){
            console.log( "wholeNum " + " x " + " float" );

            let ParseNum1 = parseInt(SplitString[0]);
            let ParseNum2 = parseFloat(SplitString[1]);

            let Total = ParseNum1 + ParseNum2;
            InputOperation.value = Total;
        }
        else if(!num1.includes(".") && !num2.includes(".")){
            console.log( "wholeNum " + " * " + " wholeNum" );

            let ParseNum1 = parseInt(SplitString[0]);
            let ParseNum2 = parseInt(SplitString[1]);

            let Total = ParseNum1 + ParseNum2;
            InputOperation.value = Total;
          }
        }
        else if(SplitString.includes("÷")){
            console.log(true);
            SplitString = StringOP.split("÷");
            console.log(SplitString);
    
            let num1 = SplitString[0];
            let num2 = SplitString[1];
    
            if(num1.includes(".") && num2.includes(".")){
                console.log( "float " + " ÷ " + " float" );
    
                let ParseNum1 = parseFloat(SplitString[0]);
                let ParseNum2 = parseFloat(SplitString[1]);
    
                let Total = ParseNum1 / ParseNum2;
                InputOperation.value = Total;
                
                
            }
            else if(num1.includes(".") && !num2.includes(".")){
                console.log( "float " + " ÷ " + " wholeNum" );
    
                let ParseNum1 = parseFloat(SplitString[0]);
                let ParseNum2 = parseInt(SplitString[1]);
    
                let Total = ParseNum1 / ParseNum2;
                InputOperation.value = Total;

                if(InputOperation.value === 'Infinity'){
                    InputOperation.value = "error";
                }
            }
            else if(!num1.includes(".") && num2.includes(".")){
                console.log( "wholeNum " + " ÷ " + " float" );
    
                let ParseNum1 = parseInt(SplitString[0]);
                let ParseNum2 = parseFloat(SplitString[1]);
    
                let Total = ParseNum1 / ParseNum2;
                InputOperation.value = Total;

                if(InputOperation.value === 'Infinity'){
                    InputOperation.value = "error";
                }
            }
            else if(!num1.includes(".") && !num2.includes(".")){
                console.log( "wholeNum " + " ÷ " + " wholeNum" );
    
                let ParseNum1 = parseInt(SplitString[0]);
                let ParseNum2 = parseInt(SplitString[1]);
    
                let Total = ParseNum1 / ParseNum2;
                InputOperation.value = Total;

                if(InputOperation.value === 'Infinity'){
                    InputOperation.value = "error";
                }
              }
            }
        

        console.log("value : " + OperationValue);
        console.log(StringOP);
        console.log(SplitString);
        
    }

    // color fill the buttons
    function FillButtonColors(){

        // add button
        OperationButtonAdd.style.border="1px solid solid rgb(36, 34, 34)";
        OperationButtonAdd.style.backgroundColor="rgb(36, 34, 34)";

        // minus button
        OperationButtonMin.style.border="1px solid solid rgb(36, 34, 34)";
        OperationButtonMin.style.backgroundColor="rgb(36, 34, 34)";

        // multplication button
        OperationButtonMul.style.border="1px solid solid rgb(36, 34, 34)";
        OperationButtonMul.style.backgroundColor="rgb(36, 34, 34)";

        // division button
        OperationButtonDiv.style.border="1px solid solid rgb(36, 34, 34)";
        OperationButtonDiv.style.backgroundColor="rgb(36, 34, 34)";

        // numpad 1
        NumPadButton1.style.border="1px solid solid rgb(36, 34, 34)";
        NumPadButton1.style.backgroundColor="rgb(36, 34, 34)";

        // numpad 2
        NumPadButton2.style.border="1px solid solid rgb(36, 34, 34)";
        NumPadButton2.style.backgroundColor="rgb(36, 34, 34)";

        // numpad 3
        NumPadButton3.style.border="1px solid solid rgb(36, 34, 34)";
        NumPadButton3.style.backgroundColor="rgb(36, 34, 34)";

        // clear
        ClearInputVal.style.border="1px solid solid rgb(255, 30, 30)";
        ClearInputVal.style.backgroundColor="rgb(255, 30, 30)";

        // numpad 4
        NumPadButton4.style.border="1px solid solid rgb(36, 34, 34)";
        NumPadButton4.style.backgroundColor="rgb(36, 34, 34)";

        // numpad 5
        NumPadButton5.style.border="1px solid solid rgb(36, 34, 34)";
        NumPadButton5.style.backgroundColor="rgb(36, 34, 34)";

        // numpad 6
        NumPadButton6.style.border="1px solid solid rgb(36, 34, 34)";
        NumPadButton6.style.backgroundColor="rgb(36, 34, 34)";

        // decimal
        DecimalInputVal.style.border="1px solid solid rgb(255, 30, 30)";
        DecimalInputVal.style.backgroundColor="rgb(255, 30, 30)";

        // numpad 7
        NumPadButton7.style.border="1px solid solid rgb(36, 34, 34)";
        NumPadButton7.style.backgroundColor="rgb(36, 34, 34)";

        // numpad 8
        NumPadButton8.style.border="1px solid solid rgb(36, 34, 34)";
        NumPadButton8.style.backgroundColor="rgb(36, 34, 34)";

        // numpad 9
        NumPadButton9.style.border="1px solid solid rgb(36, 34, 34)";
        NumPadButton9.style.backgroundColor="rgb(36, 34, 34)";

        // numpad 0
        NumPadButton0.style.border="1px solid solid rgb(36, 34, 34)";
        NumPadButton0.style.backgroundColor="rgb(36, 34, 34)";
    }

    // animate mode 2 button transition
    function PopUpMode2Buttons(){

        let Timer;  
            let sec = 3;  
            Timer = setInterval(()=>{  

        sec--;  
        if(sec === 2){
            console.log( " 2 " );

            OperationButtonAdd.style.transition="0.3s ease-in-out";
            OperationButtonAdd.style.display="block";
            OperationButtonAdd.style.marginTop="32px";

            OperationButtonMin.style.transition="0.3s ease-in-out";
            OperationButtonMin.style.display="block";
            OperationButtonMin.style.marginTop="32px";

            OperationButtonMul.style.transition="0.3s ease-in-out";
            OperationButtonMul.style.display="block";
            OperationButtonMul.style.marginTop="32px";

            OperationButtonDiv.style.transition="0.3s ease-in-out";
            OperationButtonDiv.style.display="block";
            OperationButtonDiv.style.marginTop="32px";

            NumPadButton1.style.transition="0.3s ease-in-out";
            NumPadButton1.style.display="block";
            NumPadButton1.style.marginTop="100px";

            NumPadButton2.style.transition="0.3s ease-in-out";
            NumPadButton2.style.display="block";
            NumPadButton2.style.marginTop="100px";

            NumPadButton3.style.transition="0.3s ease-in-out";
            NumPadButton3.style.display="block";
            NumPadButton3.style.marginTop="100px";

            ClearInputVal.style.transition="0.3s ease-in-out";
            ClearInputVal.style.display="block";
            ClearInputVal.style.marginTop="100px";

            NumPadButton4.style.transition="0.3s ease-in-out";
            NumPadButton4.style.display="block";
            NumPadButton4.style.marginTop="164px";

            NumPadButton5.style.transition="0.3s ease-in-out";
            NumPadButton5.style.display="block";
            NumPadButton5.style.marginTop="164px";

            NumPadButton6.style.transition="0.3s ease-in-out";
            NumPadButton6.style.display="block";
            NumPadButton6.style.marginTop="164px";

            DecimalInputVal.style.transition="0.3s ease-in-out";
            DecimalInputVal.style.display="block";
            DecimalInputVal.style.marginTop="164px";

            NumPadButton7.style.transition="0.3s ease-in-out";
            NumPadButton7.style.display="block";
            NumPadButton7.style.marginTop="226px";
            
            NumPadButton8.style.transition="0.3s ease-in-out";
            NumPadButton8.style.display="block";
            NumPadButton8.style.marginTop="226px";
            
            NumPadButton9.style.transition="0.3s ease-in-out";
            NumPadButton9.style.display="block";
            NumPadButton9.style.marginTop="226px";

            NumPadButton0.style.transition="0.3s ease-in-out";
            NumPadButton0.style.display="block";
            NumPadButton0.style.marginTop="290px";
        }

        if(sec <= 0){  
            clearInterval(Timer); 
            ToggledModeTXT.innerText= sec;
            FillButtonColors();
        }
        },1000); 
    }

    // display screen mode 2
    function DisplayMode2Screen(){
        console.log( " mode 2 screen active " );
        DisplayScreenMode2.style.display="block";
    }
    function HideMode2Screen(){
        console.log( " mode 2 screen hidden " );
        DisplayScreenMode2.style.display="none";
    }
        // hover DSM2
        function ToggleDisplayScreenM2(){
            DisplayScreenMode2.style.transition="0.3s ease-in-out";
            DisplayScreenMode2.style.border="1px solid rgb(255, 202, 202)";
            DisplayScreenMode2.style.boxShadow="0px 8px 10px 0px rgba(255, 78, 78, 0.445)";
        }
        function UnToggleDisplayScreenM2(){
            DisplayScreenMode2.style.transition="0.3s ease-in-out";
            DisplayScreenMode2.style.border="1px solid rgb(179, 179, 179)";
            DisplayScreenMode2.style.boxShadow="none";
        } 

    // Toggle Display Screen
    function ToggleDisplayScreen(){
        DisplayScreen.style.transition="0.3s ease-in-out";
        DisplayScreen.style.border="1px solid rgb(255, 202, 202)";
        DisplayScreen.style.boxShadow="0px 8px 10px 0px rgba(255, 78, 78, 0.445)";
    }
    function UnToggleDisplayScreen(){
        DisplayScreen.style.transition="0.3s ease-in-out";
        DisplayScreen.style.border="1px solid rgb(179, 179, 179)";
        DisplayScreen.style.boxShadow="none";
    }

    // Sound Effect
    function PlaySoundEffect(){
        SoundEffect.play();
    }

    // Toggle button
    function ToggleButton(){
        PlaySoundEffect();

        CalculateBTN.style.transition="0.1s ease-in-out";
        CalculateBTN.style.translate="0px 4px";
    }
    function UnToggleButton(){
        CalculateBTN.style.transition="0.1s ease-in-out";
        CalculateBTN.style.translate="0px 0px";
    }

    // pass parameter for solving calculation
        // check if division total is 0;
        function DivisionZero( total ){
            console.log( " Division is :" + total );
            let ErrorDivision = "error";
            

            if(total === 0){
                console.log( " error " );
                InputOperation.value = ErrorDivision;
            }
        }

    function PassIntOperation( num1, operator, num2 ){
        console.log( "operation: " + num1 + " " + operator + " " + num2 );
        let Total;

        if(operator === '+'){
            Total = num1 + num2;
            InputOperation.value=Total;
            
            console.log("Total: " + Total);
        }
        else if(operator === '-'){
            Total = num1 - num2;
            InputOperation.value=Total;
            
            console.log("Total: " + Total);
        }
        else if(operator === '*'){
            Total = num1 * num2;
            InputOperation.value=Total;
            
            console.log("Total: " + Total);
        }
        else if(operator === '/'){
            Total = num1 * num2;
            InputOperation.value=Total;

            DivisionZero( InputOperation.value=Total );

            console.log("Total: " + Total);
        }
    }
    function PassIntANDFloatOperation( num1, operator, num2 ){
        console.log( "operation: " + num1 + " " + operator + " " + num2 );
        let Total;

        if(operator === '+'){
            Total = num1 + num2;
            InputOperation.value=Total;
            
            console.log("Total: " + Total);
        }
        else if(operator === '-'){
            Total = num1 - num2;
            InputOperation.value=Total;
            
            console.log("Total: " + Total);
        }
        else if(operator === '*'){
            Total = num1 * num2;
            InputOperation.value=Total;
            
            console.log("Total: " + Total);
        }
        else if(operator === '/'){
            Total = num1 * num2;
            InputOperation.value=Total;

            DivisionZero( InputOperation.value=Total );

            console.log("Total: " + Total);
        }
    }
    function PassFloatingANDIntOperation( num1, operator, num2 ){
        console.log( "operation: " + num1 + " " + operator + " " + num2 );
        let Total;

        if(operator === '+'){
            Total = num1 + num2;
            InputOperation.value=Total;
            
            console.log("Total: " + Total);
        }
        else if(operator === '-'){
            Total = num1 - num2;
            InputOperation.value=Total;
            
            console.log("Total: " + Total);
        }
        else if(operator === '*'){
            Total = num1 * num2;
            InputOperation.value=Total;
            
            console.log("Total: " + Total);
        }
        else if(operator === '/'){
            Total = num1 * num2;
            InputOperation.value=Total;

            DivisionZero( InputOperation.value=Total );

            console.log("Total: " + Total);
        }
    }
    function PassFloatingOperation( num1, operator, num2 ){
        console.log( "operation: " + num1 + " " + operator + " " + num2 );
        let Total;

        if(operator === '+'){
            Total = num1 + num2;
            InputOperation.value=Total;
            
            console.log("Total: " + Total);
        }
        else if(operator === '-'){
            Total = num1 - num2;
            InputOperation.value=Total;
            
            console.log("Total: " + Total);
        }
        else if(operator === '*'){
            Total = num1 * num2;
            InputOperation.value=Total;
            
            console.log("Total: " + Total);
        }
        else if(operator === '/'){
            Total = num1 * num2;
            InputOperation.value=Total;

            DivisionZero( InputOperation.value=Total );
            
            console.log("Total: " + Total);
        }
    }
    

    // calculate operation in mode 1
    function CalculateOperationMode1(){
        ToggleButton();

        let OperationValue = InputOperation.value;
        let SplitOperation = OperationValue.split(" ");

        let num1 = SplitOperation[0];
        let num2 = SplitOperation[2];
        let op = SplitOperation[1];

        // check if floating number or whole number
        if(OperationValue !== ""){
            if(num1.includes(".") && num2.includes(".")){
                console.log(" float + float ");
    
                let ParseNum1 = parseFloat(num1);
                let ParseNum2 = parseFloat(num2);
    
                PassFloatingOperation( ParseNum1, op, ParseNum2 );
            }
            else if(num1.includes(".") && !num2.includes(".")){
                console.log(" float + WholeNum ");
    
                let ParseNum1 = parseFloat(num1);
                let ParseNum2 = parseFloat(num2);
    
                PassFloatingANDIntOperation( ParseNum1, op, ParseNum2 );
            }
            else if(!num1.includes(".") && num2.includes(".")){
                console.log(" WholeNum + float ");
    
                let ParseNum1 = parseFloat(num1);
                let ParseNum2 = parseFloat(num2);
    
                PassIntANDFloatOperation( ParseNum1, op, ParseNum2 );
            }
            else if(!num1.includes(".") && !num2.includes(".")){
                console.log(" WholeNum + WholeNum ");
    
                let ParseNum1 = parseFloat(num1);
                let ParseNum2 = parseFloat(num2);
    
                PassIntOperation( ParseNum1, op, ParseNum2 );
            }    
        }
        else{
            console.log(" operation empty ");
        }
        
        console.log(SplitOperation);
        console.log( num1 + " " +  SplitOperation[1] + " " + num2 );
    }

    // change of container size
    function Mode1Size(){
        CalculatorContainer.style.transition="0.3s ease-in-out";
        CalculatorContainer.style.height="300px";
    }
    function Mode2Size(){
        CalculatorContainer.style.transition="0.3s ease-in-out";
        CalculatorContainer.style.height="550px";
    }

    // function for button transition between modes
    function DefaultMode1Transition(){
    
        CalculateText.textContent="";
        CalculateText.style.position="absolute";
        CalculateText.style.marginLeft="0px";
        CalculateText.style.marginTop="0px";
       
        CalculateBTN.style.position="absolute";
        CalculateBTN.style.zIndex="2";
        CalculateBTN.style.transition="0.3s ease-in-out";
        CalculateBTN.style.width="132px";
        CalculateBTN.style.paddingLeft="32px";
        CalculateBTN.style.paddingRight="122px";
        CalculateBTN.style.paddingBottom="38px";
        CalculateBTN.style.borderRadius="4px";
       
        ButtonShadow.style.position="absolute";
        ButtonShadow.style.zIndex="1";
        ButtonShadow.style.marginLeft="66px";
        ButtonShadow.style.marginTop="55px";
        ButtonShadow.style.width="156px";
        ButtonShadow.style.height="22px";
        ButtonShadow.style.paddingLeft="24px";
        ButtonShadow.style.paddingRight="16px";
        ButtonShadow.style.borderRadius="4px";  

        let Timer;  
        let sec = 1;  
        Timer = setInterval(()=>{  
            sec--;  
            if(sec <= 0){  
                clearInterval(Timer); 
                CalculateText.textContent="calculate";
            }
        },1000); 
               
        ChangeCalculatorModeBTN.disabled=true;
        if(ChangeCalculatorModeBTN.disabled===true){
            console.log("button is cooling down");

            let Timer;  
            let sec = 12;  
            Timer = setInterval(()=>{  
                sec--;  
                if(sec <= 0){  
                clearInterval(Timer); 
                ChangeCalculatorModeBTN.disabled=false;
                console.log("button can be pressed again");
                }
            },1000);    
        }

        Mode1Size();
        HideMode2Screen();
    }

    function Mode1Transition(){  
        OperationButtonAdd.style.display="none";
        OperationButtonMin.style.display="none";
        OperationButtonMul.style.display="none";
        OperationButtonDiv.style.display="none";

        NumPadButton1.style.display="none";
        NumPadButton2.style.display="none";
        NumPadButton3.style.display="none";
        ClearInputVal.style.display="none";
        NumPadButton4.style.display="none";
        NumPadButton5.style.display="none";
        NumPadButton6.style.display="none";
        DecimalInputVal.style.display="none";
        NumPadButton7.style.display="none";
        NumPadButton8.style.display="none";
        NumPadButton9.style.display="none";
        NumPadButton0.style.display="none";

        CalculateBTN.animate( 
            [ 
               { transform : 'translateX(164px)' }, 
               { transform : 'translateX(0px)' }, 
            ], 
            {
                duration : 324, 
                fill     : 'forwards', 
                easing   : 'ease-in-out' 
             } 
        );
        ButtonShadow.animate( 
            [ 
               { transform : 'translateX(0px)' }, 
               { transform : 'translateX(0px)' }, 
            ], 
            {
                duration : 324, 
                fill     : 'forwards', 
                easing   : 'ease-in-out' 
             } 
        );
        DefaultMode1Transition();
    }

    function Mode2Transition(){
        CalculateText.textContent="=";
                        
        CalculateText.style.position="absolute";
        CalculateText.style.marginLeft="-20px";
        CalculateText.style.marginTop="-3px";

        CalculateBTN.style.position="absolute";
        CalculateBTN.style.zIndex="2";
        CalculateBTN.style.transition="0.3s ease-in-out";
        CalculateBTN.style.width="0px";
        CalculateBTN.style.paddingLeft="32px";
        CalculateBTN.style.paddingRight="5px";
        CalculateBTN.style.borderRadius="6px";

        ButtonShadow.style.position="absolute";
        ButtonShadow.style.zIndex="1";
        ButtonShadow.style.marginLeft="66px";
        ButtonShadow.style.marginTop="42px";
        ButtonShadow.style.width="0px";
        ButtonShadow.style.height="36px";
        ButtonShadow.style.paddingLeft="24px";
        ButtonShadow.style.paddingRight="15px";
        ButtonShadow.style.borderRadius="4px";
        
        CalculateBTN.animate( 
            [ 
               { transform : 'translateX(0px)' }, 
               { transform : 'translateX(180px)' }, 
            ], 
            {
                duration : 324, 
                fill     : 'forwards', 
                easing   : 'ease-in-out' 
             } 
        );
        ButtonShadow.animate( 
            [ 
               { transform : 'translateX(0px)' }, 
               { transform : 'translateX(180px)' }, 
            ], 
            {
                duration : 324, 
                fill     : 'forwards', 
                easing   : 'ease-in-out' 
             } 
        );

        ChangeCalculatorModeBTN.disabled=true;
        if(ChangeCalculatorModeBTN.disabled===true){
            console.log("button is cooling down");

            let Timer;  
            let sec = 12;  
            Timer = setInterval(()=>{  
                sec--;  
                if(sec <= 0){  
                   clearInterval(Timer); 
                   ChangeCalculatorModeBTN.disabled=false;
                   console.log("button can be pressed again");
                }
            },1000);    
        }

        Mode2Size();
        DisplayMode2Screen();
        PopUpMode2Buttons();
    }

    // change modes
    function ChangeModes(){
        let ClickCount = click += 1;

        for(let i=0; i < ClickCount; i++){
            if(ClickCount === 1){
                console.log(ClickCount);
                PlaySoundEffect();
                ToggledModeTXT.innerText="M2";

                Toggled.animate(
                    [
                        { transform : 'translateX(0px)' },
                        { transform : 'translateX(22px)' },
                    ],  
                    {
                        duration : 100, 
                        fill     : 'forwards', 
                        easing   : 'ease-in-out' 
                    }
                );
                // mode 2
                let CurrentMode = Modes[0];
                console.log("current mode: " + CurrentMode);
                
                if(!CurrentMode){
                    console.log(false);

                    CalculateText.textContent="calculate";
                }
                else{
                    if(CurrentMode){
                        console.log(true);
                        Mode2Transition();
                    }          
                }
            }
            else if(ClickCount === 2){
                console.log(ClickCount);
                ToggledModeTXT.innerText="M1";

                Toggled.animate(
                    [
                        { transform : 'translateX(22px)' },
                        { transform : 'translateX(0px)' },
                    ],  
                    {
                        duration : 100, 
                        fill     : 'forwards', 
                        easing   : 'ease-in-out' 
                    }
                );
                // mode 1
                let CurrentMode = Modes[1];
                console.log("current mode: " + CurrentMode);

                if(!CurrentMode){
                    console.log(false);

                    CalculateText.textContent="=";
                }
                else{
                    if(CurrentMode){
                        console.log(true);
                        Mode1Transition();  
                    }
                }
            }
            if(ClickCount >= 2){
                ClickCount = click = 0;
            } 
        }
    }

// callbacks
    ChangeCalculatorModeBTN.addEventListener('click',()=>{
        ChangeModes();
    });

    CalculateBTN.addEventListener('click',()=>{
        let ModeText = CalculateText.textContent;
        if(ModeText === '='){
            console.log( " mode 2 " );
            CalculateOperationMode2();
        }
        else if(ModeText !== '='){
            console.log( " mode 1 " );
            CalculateOperationMode1();
        }

        
    });
    CalculateBTN.addEventListener('mouseleave',()=>{
        UnToggleButton();
    });

    InputOperation.addEventListener('click',()=>{
        ToggleDisplayScreen();
    });
    DisplayScreen.addEventListener('mouseleave',()=>{
        UnToggleDisplayScreen();
    }); 

    DisplayScreenMode2.addEventListener('mouseenter',()=>{
        ToggleDisplayScreenM2();
    });
    DisplayScreenMode2.addEventListener('mouseleave',()=>{
        UnToggleDisplayScreenM2();
    });

    OperationButtonAdd.addEventListener('click',()=>{ 
        console.log(" + ");
        let Addition = "+";
        StoreOperation( Addition );
    });
    OperationButtonMin.addEventListener('click',()=>{
        console.log(" - ");
        let Subtraction = "-";
        StoreOperation( Subtraction );
    });
    OperationButtonMul.addEventListener('click',()=>{
        console.log(" x ");
        let Multiplication = "x";
        StoreOperation( Multiplication );
    });
    OperationButtonDiv.addEventListener('click',()=>{
        console.log(" ÷ ");
        let Division = "÷";
        StoreOperation( Division );
    });

    NumPadButton1.addEventListener('click',()=>{
        console.log(" 1 ");
        let NumpPad = "1";
        StoreOperation( NumpPad );
    });
    NumPadButton2.addEventListener('click',()=>{
        console.log(" 2 ");
        let NumpPad = "2";
        StoreOperation( NumpPad );
    });
    NumPadButton3.addEventListener('click',()=>{
        console.log(" 3 ");
        let NumpPad = "3";
        StoreOperation( NumpPad );
    });
    NumPadButton4.addEventListener('click',()=>{
        console.log(" 4 ");
        let NumpPad = "4";
        StoreOperation( NumpPad );
    });
    NumPadButton5.addEventListener('click',()=>{
        console.log(" 5 ");
        let NumpPad = "5";
        StoreOperation( NumpPad );
    });
    NumPadButton6.addEventListener('click',()=>{
        console.log(" 6 ");
        let NumpPad = "6";
        StoreOperation( NumpPad );
    });
    NumPadButton7.addEventListener('click',()=>{
        console.log(" 7 ");
        let NumpPad = "7";
        StoreOperation( NumpPad );
    });
    NumPadButton8.addEventListener('click',()=>{
        console.log(" 8 ");
        let NumpPad = "8";
        StoreOperation( NumpPad );
    });
    NumPadButton9.addEventListener('click',()=>{
        console.log(" 9 ");
        let NumpPad = "9";
        StoreOperation( NumpPad );
    });
    NumPadButton0.addEventListener('click',()=>{
        console.log(" 0 ");
        let NumpPad = "0";
        StoreOperation( NumpPad );
    });
    
    ClearInputVal.addEventListener('click',()=>{
            clearField();
    });

    DecimalInputVal.addEventListener('click',()=>{
        console.log(" decimal added '.' ");

        console.log(" . ");
        let Decimal = ".";
        StoreOperation( Decimal );
    });