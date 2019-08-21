'use strict';

function collectSameElements(collectionA, objectB) {
  var c = new Array();
  let collectionC=objectB.value
  for(var i = 0; i<collectionA.length ; i++)
  {
    for(var j = 0; j<collectionC.length ; j++)
    {
      if (collectionA[i] == collectionC[j])
      {
        c.push(collectionA[i]);
          break;
      }
    }
  }
    return c;
  }
