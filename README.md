# authentication-and-jwt
- Authentication and authorisation are a important factors for security and user integrity.
- This app is made to do so.

### Tech stack
 - MERN 
 
### Libraries used for validation, hashing password and other stuff.
- Form validation can be done on both client side(using html5 forms) and server side. 
- But in this app I did it on server side.
- I used a library called `@hapi/joi`, where I created a schema using joi with validation constraints so that it is used for data validation of the form-data we recieved and check that data is valid(like - password lenght , valid email etc) or not.
- For password hashing I used a library called `bcryptjs`. This library allow us to generate `salt`(random unique charaters) and hash password using that salt.
- A for password hashing I used bcrypt to generate salt and hash user password.
- Salt is used to provide more security from the attackers. 
- Attackers can decrypt the hashed password using decryptive algos but providing salt is a hard work for them. As salt is always unique(in this app) as it is generating each time randomly 
- After all this when the user data is valid and the data is stored in db with hashed password, we have private routes that needs authorised users to access them.
- For that we log in, but I used a middleware function `verify` for my private route that is access only when the user is authorised to access that.
- But we cannot keep logging each time, for that I use another famous library JWT(jsonwebtokens)
- That assign each user with a secret access token key when the user logs in.
- And this secret token key is passed as the header with the request, and once the token keys in header are matched the user is able to access the private routes and doesn't need to log in again and again(until the token expires or the user logged out).

### App completed :-)
