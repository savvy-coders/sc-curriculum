# Using Firebase in JavaScript
## Using `auth`
[Get Started with Firebase Authentication](https://firebase.google.com/docs/auth/web/start)
```javascript
// remember: auth = firebase.auth()
import auth from "./firebase"

// register new user from email and password
auth.createUserWithEmailAndPassword(email, password);

// sign in existing user
auth.signInWithEmailAndPassword(email, password)

// user sign out
auth.signOut(callback)

// listen for change in authorization status
auth.onAuthStateChanged(user => { console.log(user) })
```
[Managing Users in Firebase](https://firebase.google.com/docs/auth/web/manage-users)

## Using `db`
[Get started with Firestore](https://firebase.google.com/docs/firestore/quickstart)
* [**C**reating/**U**pdating Firestore Data](https://firebase.google.com/docs/firestore/manage-data/add-data)
* [**R**eading Firestore Data](https://firebase.google.com/docs/firestore/query-data/get-data)
* [**D**eleting Firestore Data](https://firebase.google.com/docs/firestore/manage-data/delete-data)
```javascript
// remember: db = firebase.firestore()
import db from "./firebase"

// select a collection
const coll = db.collection( /* collection name */ )

// create a new document in a collection
coll.add({ /* document Object */ })

// read all documents from a collection
// "snapshot" represents the state of the collection at the time we called get()
coll.get().then(collectionSnapshot => collectionSnapshot.docs.forEach(doc => console.log(doc.data())))

// read a single document from a collection
// "snapshot" represents the state of the document at the time we called get()
coll.doc( /* document ID */ ).get().then(documentSnapshot => console.log(documentSnapshot.data()))

// update a document in a collection
coll.doc( /* document ID */ ).update({ /* key */ : /* value */})

// delete a document in a collection
coll.doc( /* document ID */ ).delete()
```
[Get realtime database updates with Firestore](https://firebase.google.com/docs/firestore/query-data/listen)

# SPA Example
## [SPA Example with Firebase](https://github.com/savvy-coders/SPA-example-with-Firebase)