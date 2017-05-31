// 1. Ultra E-mail App

// This app provides easy access to all your e-mail service providers in one app. The app will let you select one of your email addresses and view your e-mails for that address.

// ```
// Write your answer here or in a separate js file.
emailApp

- providers
    - Accounts
        - inbox
        - from
        - read
        - unread
    - sent
        - to 
        - date
        - time
    - email
    - password
    -createAccount

// js Objects
var emailApp = {
    providers : [{
        accounts: [{
            createAccount:[{
                username: string
                password: string
                phoneNumber: string
            }]
             email: string;
             password: string;
             inbox: [{
                 read: boolean
                 unread: boolean
                 message: string
                 from: string
             }]
            sent: [{
                read: boolean
                unread: boolean
                message: string
                from: string
            }]
        }]
    }]   
}

// Example
var ExampleEmailApp = {
    providers : [{
        accounts: [{
            createAccount:[{
                username: 'firstname.lastname@emailApp.com';
                password: '$uperm@n2017';
                phoneNumber: '404-867-5309';
            }]
             email: 'Jean Luc Picard';
             password: 'makeitso';
             inbox: [{
                 read: true
                 unread: false
                 message:'Star Date 05242017'
                 from: 'Ambassdor Spock'
             }]
            sent: [{
                read: true
                unread: true
                message: 're:Star Date 05242017'
                from: 'Jean Luc Picard'

            }]
        }]


    }]
    
    
}

