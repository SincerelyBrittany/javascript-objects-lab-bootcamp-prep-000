// 1) Objects
//       updateObjectWithKeyAndValue(object, key, value)
//         returns an object with the orignal key value pairs and the new key value pair:

//   2) Objects
//       updateObjectWithKeyAndValue(object, key, value)
//         does not modify the original object, but rather returns a clone with the new data:

//   3) Objects
//       updateObjectWithKeyAndValue(object, key, value)
//         returns an object with an updated key value pair:


function updateObjectWithKeyAndValue(object, key, value){
  object =[key,value];
  return object
}


//   4) Objects
//       destructivelyUpdateObjectWithKeyAndValue(object, key, value)
//         updates `object` with the given `key` and `value` (it is destructive) and returns the entire updated object:

function destructivelyUpdateObjectWithKeyAndValue(object, key, value){
  object =[key,value];
  return object
}


//   5) Objects
//       deleteFromObjectByKey(object, key)
//         deletes `key` from a clone of object and returns the new object (it isnon-destructive):

//   6) Objects
//       deleteFromObjectByKey(object, key)
//         does not modify the original object (it is non-destructive):

function deleteFromObjectByKey(object, key){
  object =[key,value];
  return object
}


//   7) Objects
//       destructivelyDeleteFromObjectByKey(object, key)
//         returns object without the delete key/value pair:

function destructivelyDeleteFromObjectByKey(object, key){
  object =[key,value];
  return object
}

//   8) Objects
//       destructivelyDeleteFromObjectByKey(object, key)
//         modifies the original object:
