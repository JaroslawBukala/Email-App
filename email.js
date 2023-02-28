// An Email Simulation
/*
//I have used information from my previous assignment
create your email class here
*/
	class Email{
	static inbox = []
	constructor(hasBeenRead, emailContents, isSpam, fromAddress){
	this.hasBeenRead = false
	this.emailContents = emailContents
	this.isSpam = false
	this.fromAddress = fromAddress
	Email.inbox.push(this)
	}


	markAsRead(){
    this.hasBeenRead = true
    }


    //marking email as spam at a user-chosen index
    markAsSpam(index){
		if(index >=0 && index < Email.inbox.length){
			Email.inbox[index].isSpam = true
			alert(`The email message ${Email.inbox[index].emailContents} sent from ${Email.inbox[index].fromAddress} has been market as spam`)
		}else{
			alert(`You can only enter indexes between 0 and ${Email.inbox.length-1}.`)
		}
    }

	//add new email and push it into the inbox array
	addEmail(hasBeenRead, emailContents, isSpam, fromAddress){
		new Email(hasBeenRead, emailContents, isSpam, fromAddress)
	  }

	//get the total number of messages
	getCount(){
		alert(`You have ${Email.inbox.length} messages in the inbox`)
	  }

	//get the email message at a user-chosen index
	getEmail(index) {
		if (index >=0 && index < Email.inbox.length){
				 alert(`The email message is ${Email.inbox[index].emailContents}. The message was sent from ${Email.inbox[index].fromAddress}`)
			   } else{
				 alert(`You can only enter index between 0 and ${Email.inbox.length-1}.`)
			   }
			   Email.inbox[index].hasBeenRead = true
	  }

	//get all messages that have not been read
	getUnreadEmails(){  
		let notReadEmails = ''
		let noMessages = ''
			for (let i = 0; i < Email.inbox.length; i++){
		 	 if (Email.inbox[i].hasBeenRead == false ) {
				notReadEmails += `The email message is ${Email.inbox[i].emailContents}. The message was sent from ${Email.inbox[i].fromAddress}\n`
				Email.inbox[i].hasBeenRead = true
			  } 
			}
			if(notReadEmails){
				alert(notReadEmails)
			}else if(!noMessages){
				alert('There are no unread messages')
			}
			

		  }

	//get all spam emails
	getSpamEmails(){
			let spamEmails = ''
			let noSpam = ''
			for(let i = 0; i< Email.inbox.length; i++){
				if (Email.inbox[i].isSpam == true){
					spamEmails += `The spam message is ${Email.inbox[i].emailContents}. The message was sent from ${Email.inbox[i].fromAddress}\n`
					Email.inbox[i].hasBeenRead = true
				   } 
			}
			if(spamEmails){
				alert(spamEmails)
			}else if(!noSpam){
				alert('There are no spam messages')
			}
		
		}


	delete(index){
				if(index >=0 && index < Email.inbox.length){
					Email.inbox.splice(index, 1)
				   } else{
					 console.log(`You can only enter index between 0 and ${Email.inbox.length-1}`)
				   }

		  }
}


//create instances of the Email class
newEmail = new Email(false, 'Testing 1', false, 'e@gmail.com')
newEmail1 = new Email(false, 'Testing 2', false, 'd@gmail.com')
newEmail2 = new Email(false, 'Testing 3', false, 'd@gmail.com')
newEmail3 = new Email(false, 'Testing 4', false, 'c@gmail.com')
newEmail4 = new Email(false, 'Testing 5', false, 'b@gmail.com')
newEmail5 = new Email(false, 'Testing 6', false, 'j@gmail.com')


//front end logic, allow the usewr choose the option they want
userChoice = "";
while(userChoice != "7"){
	console.log(Email.inbox)
	userChoice = prompt("What would you like to do:\n 1. Read email\n 2. Mark spam\n3. Send email\n4. Delete email\n5. View spam emails\n6. View unread emails\n7. quit?");
	if(userChoice == "1"){
		newEmail.getCount()
		newEmail.getEmail(prompt('Enter the index at which you want to read the email'))
	}else if(userChoice == "2"){
		newEmail.markAsSpam(prompt('Enter the index at which you want to mark the email as spam'))
	}else if(userChoice == "3"){
		newEmail.addEmail(false, prompt('Type in your message'), false, prompt('What is your email address?'))
	}else if(userChoice == "4"){
		newEmail.delete(prompt('Enter the index at which you want to delete the email'))
	}else if(userChoice == "5"){
		newEmail.getSpamEmails()
	}else if(userChoice == "6"){
		newEmail.getUnreadEmails()
	}else if(userChoice == "7"){
		alert("Goodbye");
	}else{
		alert("Oops - incorrect input");
		
	}
}