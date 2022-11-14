class FormValidation{
    formValues={
        year :"",
        month:"",
        power:"",
        kilometer:"",
        gear:"",
        repair:"",
        model:""
    }
    errorValues={
        yearerr :"",
        montherr:"",
        powererr:"",
        kilometererr:"",
        gearerr:"",
        repairerr:"",
        modelerr:"",
        branderr:"",
        fuelerr:"",
        vehicleerr:""
    }
    showErrorMsg(index,msg){
        const form_control=document.getElementsByClassName('form-control')[index]
        form_control.classList.add('error')
        form_control.getElementsByTagName('span')[0].textContent=msg
    }
    
    showSuccessMsg(index){
        const form_control=document.getElementsByClassName('form-control')[index]
        form_control.classList.remove('error');
        form_control.classList.add('success');
    } 
    
    getInputs(){
        this.formValues.year=document.getElementById('year').value.trim();
        this.formValues.month=document.getElementById('month').value.trim();
        this.formValues.power=document.getElementById('power').value.trim();
        this.formValues.kilometer=document.getElementById('kilometer').value.trim()
    }
    
    Validateyear(){
        var text = /^[0-9]+$/;
        const year = this.formValues.year;
        var current_year=new Date().getFullYear();
        if(year==""){
            this.errorValues.yearerr="*Please Enter Year"
            this.showErrorMsg(0,this.errorValues.yearerr)
        }
        else if ((year != "") && (!text.test(year))) {
            this.errorValues.yearerr="*Please Enter only Numbers"
            this.showErrorMsg(0,this.errorValues.yearerr)
        }


        else if (year.length != 4) {
            this.errorValues.yearerr="*Year should be only 4 numbers"
            this.showErrorMsg(0,this.errorValues.yearerr)
        }
        
        else if((year < 1920) || (year > current_year))
            {
                this.errorValues.yearerr="*Year should be in range 1920 to current year"
                this.showErrorMsg(0,this.errorValues.yearerr)
            }
        else 
        { 
            this.errorValues.yearerr="";
            this.showSuccessMsg(0);
        }
    }

    
    
    ValidateMonth(){
        var text = /^[0-9]+$/;
        const month=this.formValues.month;
        if(month==""){
            this.errorValues.montherr="*Please Enter Month"
            this.showErrorMsg(1,this.errorValues.montherr)
        }
        else if ((month != "") && (!text.test(month))) {
            this.errorValues.montherr="*Please Enter only Numbers"
            this.showErrorMsg(1,this.errorValues.montherr)
        }
        else if((month <= 0) || (month > 12))
            {
                this.errorValues.montherr="*Month should be in range 1 to 12"
                this.showErrorMsg(1,this.errorValues.montherr)
            }
        else {
            this.errorValues.montherr="";
            this.showSuccessMsg(1);
        }
    }
    
    ValidatePower(){
        var text = /^[0-9]+$/;
        const power=this.formValues.power;
        if(power==""){
            this.errorValues.powererr="*Please Enter power value"
            this.showErrorMsg(2,this.errorValues.powererr)
        }
        else if ((power != "") && (!text.test(power))) {
            this.errorValues.powererr="*Please Enter only Numbers"
            this.showErrorMsg(2,this.errorValues.powererr)
        }
        else if((power <= 0) || (power > 12))
            {
                this.errorValues.powererr="*power should be in range 1 to 12"
                this.showErrorMsg(2,this.errorValues.powererr)
            }
        else {
            this.errorValues.powererr="";
            this.showSuccessMsg(2);
        }
    }
    
    ValidateKm()
    {
        var text = /^[0-9]+$/;
        const km=this.formValues.kilometer;
        if(km==""){
            this.errorValues.kilometererr="*Please Enter Kilometer"
            this.showErrorMsg(3,this.errorValues.kilometererr)
        }
        else if ((km != "") && (!text.test(km))) {
            this.errorValues.kilometererr="*Please Enter only Numbers"
            this.showErrorMsg(3,this.errorValues.kilometererr)
        }
        else if((km <= 0) || (km > 12))
            {
                this.errorValues.kilometererr="*kilometer should be in range 1 to 12"
                this.showErrorMsg(3,this.errorValues.kilometererr)
            }
        else {
            this.errorValues.kilometererr="";
            this.showSuccessMsg(3);
        }
    }
    
    PredictValue(){
        const {yearerr,montherr,powererr,kilometererr,gearerr,repairerr,modelerr,branderr,fuelerr,vehicleerr}=this.errorValues;
        if(yearerr==="" &&
        montherr==="" &&
        powererr==="" &&
        kilometererr==="" &&
        gearerr==="" &&
        repairerr==="" &&
        modelerr==="" &&
        branderr==="" &&
        fuelerr==="" &&
        vehicleerr===""){
            
        }
    }
    validateGear(){  
        if(document.getElementById('manual').checked) {     
            this.errorValues.gearerr="";
            this.showSuccessMsg(4);  
        }   
        else if(document.getElementById('automatic').checked) {   
            this.errorValues.gearerr="";
            this.showSuccessMsg(4);      
        }    
        else if   
            (document.getElementById("not").checked){  
            this.errorValues.gearerr="";
            this.showSuccessMsg(4);
        } 
        else{
            this.errorValues.gearerr="*Nothing is checked"
                this.showErrorMsg(4,this.errorValues.gearerr) 
        }  
    }  
    
    validateRepair(){  
        if(document.getElementById('yes').checked) {     
            this.errorValues.repairerr="";
            this.showSuccessMsg(5);  
        }   
        else if(document.getElementById('no').checked) {   
            this.errorValues.repairerr="";
            this.showSuccessMsg(5);      
        }    
        else if   
            (document.getElementById("notdec").checked){  
            this.errorValues.repairerr="";
            this.showSuccessMsg(5);
        } 
        else{
            this.errorValues.repairerr="*Nothing is checked"
                this.showErrorMsg(5,this.errorValues.repairerr) 
        }  
    }
 
    validateModel(){ 
     if ( document.getElementById('model').value) {
            this.errorValues.modelerr="";
            this.showSuccessMsg(6);
     }
     else{
        this.errorValues.modelerr="*Nothing is selected"
        this.showErrorMsg(6,this.errorValues.modelerr) 
     }
    }

    validateBrand(){ 
        if ( document.getElementById('brand').value) {
               this.errorValues.branderr="";
               this.showSuccessMsg(7);
        }
        else{
           this.errorValues.branderr="*Nothing is selected"
           this.showErrorMsg(7,this.errorValues.branderr) 
        }
       }

    validateFuel(){ 
        if ( document.getElementById('fuel').value) {
               this.errorValues.fuelerr="";
               this.showSuccessMsg(8);
        }
        else{
           this.errorValues.fuelerr="*Nothing is selected"
           this.showErrorMsg(8,this.errorValues.fuelerr) 
        }
       }
    
    validateVehicle(){ 
        if ( document.getElementById('vehicle').value) {
               this.errorValues.vehicleerr="";
               this.showSuccessMsg(9);
        }
        else{
           this.errorValues.vehicleerr="*Nothing is selected"
           this.showErrorMsg(9,this.errorValues.vehicleerr) 
        }
       }
    removeInputs(){
    }
}

const ValidateUserInputs = new FormValidation()
document.getElementsByClassName('form')[0].addEventListener('submit', event => 
{
event.preventDefault()
ValidateUserInputs.getInputs()
ValidateUserInputs.Validateyear()
ValidateUserInputs.ValidateMonth()
ValidateUserInputs.ValidatePower()
ValidateUserInputs.ValidateKm()
ValidateUserInputs.validateGear()
ValidateUserInputs.validateRepair()
ValidateUserInputs.validateModel()
ValidateUserInputs.validateBrand()
ValidateUserInputs.validateFuel()
ValidateUserInputs.validateVehicle()
})  