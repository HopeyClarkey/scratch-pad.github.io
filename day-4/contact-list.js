// #!/usr/bin/env node

'use strict';

/**
 * 4: Contact List // Contacts
 *
 *  a. Create a factory Function called makeContact(id, nameFirst, nameLast)
 *     that returns a contact object.
 *
 *          ex: makeContact(1, 'Max', 'Gaudin'); // => {id: 1, nameFirst: 'Max', nameLast: 'Gaudin'}
 *
 *  b. Create a factory Function called makeContactList that returns an Object
 *     that manages contacts. The contact-list object should have the following methods:
 *
 *      1. length(): returns the number of contacts within the list. (the list is `contacts`)
 * 
 *      2. addContact(contact): takes a contact object to be added to the
 *         contact-list.
 * 
 *      3. findContact(fullName): takes a full-name String, like 'Max Gaudin', and
 *         returns the contact object if found in the contacts-list, or,
 *         undefined if the fullName does not match any contacts in the list.
 * 
 *      4. removeContact(contact): takes a contact object to be removed from
 *         the contact-list.
 * 
 *      5. add a printAllContactNames() Function to your makeContactList() factory. The printAllContactNames() Function should
 *         return a String formated with all the full-names of the separated
 *         with a line-break, like so:
 *
 *         myContacts.printAllContactNames(); // => Max Gaudin
 *                                                  John Fraboni
 *                                                  Kaelyn Chresfield
 *
 *          WARNING: To pass this test, the LAST full name should have NO
 *          new-line character added after it!
 */
//i- takes 3 parameters, id, first name, and last name.
//o- object that has all three parameters as keys in object
//c-
//e-

function makeContact(id, nameFirst, nameLast) {
  // Solve this function first
  
  //function must return object
      return {
  //id key & id value
      id: id,
  //first name key and value
      nameFirst: nameFirst,
  //last name key and value
      nameLast: nameLast
  }
}

// i-
//o- object that manages contacts
//c- must use methods: length- to find the number of contacts within the list 
//c ct- add contact- takes an object called 'contact' to be added to the contact list
//c ct- findcontact-takes a full name string called 'fullname'- this should return the contact object if a match is found within the object, and undefined if it does not
//c ct- removeContact- this would remove the object 'contact'
//c ct- printAllContactNames- this should return a string formated with all the full names of the contact objects with a line break
//c ct- ^^^ last full name should have NO new line character added after it.

function makeContactList() {
  /*
   * You need something here to hold contacts. See length api for a hint:
   */
  //contacts storage array
    var contacts = [];
  //returning object with each function as an entry and a key
        return {

  // key length: requirement-
  // we implemented the length api for you //
  // creat function, taking no parameter as it is just finding the number of contacts within the list
    length: function(){
  // returns the amount of contacts.
        return contacts.length;
    },


  // key addContact: requirement-
  //create function that takes 1 parameter, a contact you would like to add.
    addContact: function (contact){
  //takes the contacts array, and finds the end by calling length, and updates to the contact provided
      contacts[contacts.length] = contact;
    },


  // key findContact: requirement-
  // create function itself, taking a parameter called fullName
    findContact: function (fullName){
  // split full name into search components
      var searchName = fullName.split(' ');
  // loop through contact list by 1
        for (var i = 0; i < contacts.length; i++){
  // create variable that represents i
      var contact = contacts[i];
  // if statement to check if split name matches first and last name, using new contact variable to 'point' to contacts[i]
        if (contact['nameFirst'] === searchName[0] && contact['nameLast'] === searchName[1]){
  // return the contact where this is true.
        return contact;
        }
      }
    },


  // remove contact requirement
  //create function that takes a contact object as the parameter to search agains
    removeContact: function (contact){ 
  //loop through contact list
        for (var i = 0; i < contacts.length; i++){
  //create variable that represents contact within array, to check against
      var searchContact = contacts[i];
  // if statement to check if contact matches item in array
        if (searchContact === contact ){
  // splice that takes out at the index i 1 item 
          contacts.splice(i, 1);
        }
      }
    },

  //print requirement- 
  //create function- it does not need a parameter because it's just doing something, just like length requirement
    printAllContactNames: function (){
  // create storage Array
      var stArr = [];
  // loop through the contacts list
        for (var i = 0; i < contacts.length; i++){
  // create contact to 'point' to contacts[i]
      var contact = contacts[i];
  // push to storage array first and last name using contact object
          stArr.push(`${contact.nameFirst} ${contact.nameLast}`);
        }
  // join the array elements together to avoid last line break when returning stArr
        return stArr.join("\n");
      }
    };
  }




// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
if (
  typeof process !== 'undefined' &&
  typeof process.versions.node !== 'undefined'
) {
  // here, export any references you need for tests //
  module.exports.makeContact = makeContact;
  module.exports.makeContactList = makeContactList;
}
