let amount=10000;
let password=12345678;
let enterpass=prompt("Enter your password")
let confirmpassword=prompt("Confirm Password")
if (password == enterpass && enterpass == confirmpassword) {
    alert(amount)
    let action=prompt("Press 1 to withdraw money,Press 2 to deposit money")
    if (action==1) {
        let withamount=parseInt(prompt("Enter money to withdraw"))
        if (withamount<=amount) {
            let newwithamount=parseInt(amount-withamount)
            alert(newwithamount)
        } else {
            alert("Not enough money")
        }
    } else if (action==2) {
        let depoamount=parseInt(prompt("Enter money to deposit"))
        let newdepoamount=amount+depoamount;
        alert(newdepoamount)
    }
}
else {
    alert("Entered password is not correct") 
}