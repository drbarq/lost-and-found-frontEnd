# Lost and Found - Overview

Lost and Found is an application that connects people through their lost items.  Users of Lost and Found are able to register their items and generate custom QR Codes which they can then place on their items, similar to a name tag.  

These QR codes are special though as they provide a direct line of communication between the user owner who has lost an item and the finder who has found the item.  

The QR codes are technology agnostic and can be scanned with any cell phone camera without the use of additional apps.  Once scanned the landing page is unique to the item.  A message from the owner is displayed with a short form for the finder to fill out.  The fields follow a 'voice-mail' format allowing the finder to leave a short message for the owner to contact them.  

The platform provides a direct line of communication to between two unrelated people while maintaing a layer of privacy and anonymity for the owner and finder.

## Lost and Found - Hosted Solution 

Homepage 
https://tustinlostandfound.firebaseapp.com/

Found Item Portal
https://tustinlostandfound.firebaseapp.com/foundit/36

## Lost and Found - Build: Frontend 

I wrote the front end using React and hosted it on firebase.  It is connected to my Ruby on Rails backend which is hosted on Heroku.  The homepage simulates a user who is signed in.  The account information is rendered with the users registered items.  Clicking on the individual field will open the edit item dialogue window to allow editing of the user or item.  

The Found item portal is a landing page for the QR code associated with that item.  The form which renders is the connection to the item owner.  Go ahead and send me a text! 

## Lost and Found - Usage 

Lost and Found - Homepage and Account Page
![alt text](https://media.giphy.com/media/l0WgtXXElivKdJBCFt/giphy.gif)

Lost and Found - View and Edit Item
![alt text](https://media.giphy.com/media/lPAbTQMWFhQxsgzfcH/giphy.gif)

Scanning the QR code below will take you to the Found Item Portal
![alt text] (https://i.imgur.com/eIrP67F.png)

Found Item Portal
![alt text](https://media.giphy.com/media/VdhvosCPBUwOSE9yUP/giphy.gif) 


## Lost and Found - Run Instructions 

- Fork 🍴
- Clone
- ``` npm install ```
- ``` npm start ```

The app uses api keys which are stored within the encrypted Rails files.  Contact the team for access.

## CONTRIBUTING
Joe Tustin [[GitHub]](https://github.com/drbarq) [[Linkedin]](https://www.linkedin.com/in/joetustin/)
