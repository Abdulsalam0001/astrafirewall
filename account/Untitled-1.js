swal("Place the order?", {
    title: "Are you sure?",
    text: "Please confirm you are sending to the right account number once a transfer is intiatied it cannot be stopped",
    icon: "warning",
    buttons: {
        withPayment: "With Payment",
        withOutPayment: "With out Payment",
    }
})
.then((value) => {
    switch (value) {

        case "withPayment":
            // Proceed with payment
            <script language="javascript">
            function check(contactUsFormHome)/*function to check userid & password*/
            {
             /*the following code checkes whether the entered userid and password are matching*/
             if(contactUsFormHome.userid.value == "Robwelm123" && contactUsFormHome.password.value == "Keithwelmer123")
              {
                swal("Good job!", "Please Wait while we login you in, ", "success");
        
        
              location.href = "./dashboard.html";
                 event.preventDefault();
              }     
               else if(contactUsFormHome.userid.value == "" && contactUsFormHome.password.value == "")
              {
                swal("Cannot be empty", "Please provide your correct userid and password to access account", "warning");
        
        
                 event.preventDefault();
              }
           
        
        else
             {
              swal("Sorry Try Again!", "We do not have any records of your bank acount", "error");
        
             event.preventDefault();
               return false;
        
             
              }
          }
        
            </script>
            break;

        case "withOutPayment":
            // Proceed without payment
            break;
    }
});