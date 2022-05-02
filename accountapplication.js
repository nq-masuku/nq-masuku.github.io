class Account {
    #name;
    #deposit;
    constructor(n,d){
        this.#name =n;
        this.#deposit = d;
    }

    printDetails(){
        return "Account name: "+ this.#name + ": " + this.#deposit
    }

    getAccountName(){
        return this.#name;
    }

    getAmount(){
        return this.#deposit;
    }

}

var accountInfoList =[];

function addAccount(){
    let acc = new Account(document.getElementById("uid").value,
        parseFloat(document.getElementById("depid").value));
    accountInfoList.push(acc);
    pupolateTextArea();
}

function getAccList(){
    return this.accountInfoList;
}

function populateDropDown(){
    var select = document.getElementById("accounts"); 
    select.innerHTML = "";
// Populate list with options:
   for(var i = 0; i < accountInfoList.length; i++) {
    var opt = accountInfoList[i].printDetails();
    var accName = ''+accountInfoList[i].getAccountName();
    select.innerHTML += "<option value=\"" + accName + "\">" + opt + "</option>";
   }
}

function pupolateTextArea(){
    let str='';
    for(let i=0; i< accountInfoList.length; i++){
        str += accountInfoList[i].printDetails() + '\n';
    }

    let textb = document.getElementById("txta");
    textb.value ='';
    textb.value = str;

    populateDropDown();
}

function deposit(){
    var accSelected = document.getElementById("accounts").value;
    for(let i=0; i< accountInfoList.length; i++){
       if(accSelected === accountInfoList[i].getAccountName()){
           var newMoney = parseFloat(accountInfoList[i].getAmount()) + parseFloat(document.getElementById("money").value);
        accountInfoList[i] = new Account(accSelected, newMoney);
       }
    }
    alert("Account:"+ accSelected+ " was updated");
    pupolateTextArea();
}

function debit(){
    var accSelected = document.getElementById("accounts").value;
    for(let i=0; i< accountInfoList.length; i++){
       if(accSelected === accountInfoList[i].getAccountName()){
           if(parseFloat(accountInfoList[i].getAmount()) < parseFloat(document.getElementById("money").value)){
               alert("Insufficient balance!");
           }else{
            var newMoney = parseFloat(accountInfoList[i].getAmount()) - parseFloat(document.getElementById("money").value);
            accountInfoList[i] = new Account(accSelected, newMoney);
            alert("Account:"+ accSelected+ " was updated");
           }

       }
    }
   
    pupolateTextArea();
}

function enable(){
    var accSelected = document.getElementById("accounts").value;
    if(accSelected !=="0"){
        document.getElementById("deposit").disabled = false;
        document.getElementById("debit").disabled = false;
    }
}


function onpload(){
    document.getElementById("deposit").disabled = true;
    document.getElementById("debit").disabled = true;
}
