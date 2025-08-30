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
  var contacts = [];
  // length requirement
  return {
    // we implemented the length api for you //
    length: function(){
      return contacts.length;
    },

  // add contact requirement
    addContact: function (contact){
      //takes the contacts array, and finds the end by calling length, and updates to the contact provided????
      contacts[contacts.length] = contact;
    },

  // find contact requirement
  // create function itself
    findContact: function (fullName){
  // split full name into search components
      var searchName = fullName.split(' ');
  // loop through contact list 
      for (var i = 0; i < contacts.length; i++){
  // create variable that represents i
        var contact = contacts[i];
  // if statement to check if split name matches first and last name, using new contact variable to 'point' to [i]
      if (contact[nameFirst] === searchName[0] && contact[nameLast] === searchName[1]);
      };
    };

    };
  // remove contact requirement
    removeContact: function (contact){

    };
  //print requirement- does not need a parameter because it's just doing something??id*k
    printAllContactNames: function (){

    };
  }

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
