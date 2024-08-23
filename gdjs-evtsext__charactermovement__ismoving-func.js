
if (typeof gdjs.evtsExt__CharacterMovement__IsMoving !== "undefined") {
  gdjs.evtsExt__CharacterMovement__IsMoving.registeredGdjsCallbacks.forEach(callback =>
    gdjs._unregisterCallback(callback)
  );
}

gdjs.evtsExt__CharacterMovement__IsMoving = {};
gdjs.evtsExt__CharacterMovement__IsMoving.GDMindyObjects1_1final = [];

gdjs.evtsExt__CharacterMovement__IsMoving.GDMindyObjects1= [];
gdjs.evtsExt__CharacterMovement__IsMoving.GDMindyObjects2= [];


gdjs.evtsExt__CharacterMovement__IsMoving.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{

gdjs.evtsExt__CharacterMovement__IsMoving.GDMindyObjects1.length = 0;


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{gdjs.evtsExt__CharacterMovement__IsMoving.GDMindyObjects1_1final.length = 0;
let isConditionTrue_1 = false;
isConditionTrue_0 = false;
{
gdjs.copyArray(eventsFunctionContext.getObjects("Mindy"), gdjs.evtsExt__CharacterMovement__IsMoving.GDMindyObjects2);
for (var i = 0, k = 0, l = gdjs.evtsExt__CharacterMovement__IsMoving.GDMindyObjects2.length;i<l;++i) {
    if ( gdjs.evtsExt__CharacterMovement__IsMoving.GDMindyObjects2[i].getBehavior(eventsFunctionContext.getBehaviorName("TopDownMovement")).isMoving() ) {
        isConditionTrue_1 = true;
        gdjs.evtsExt__CharacterMovement__IsMoving.GDMindyObjects2[k] = gdjs.evtsExt__CharacterMovement__IsMoving.GDMindyObjects2[i];
        ++k;
    }
}
gdjs.evtsExt__CharacterMovement__IsMoving.GDMindyObjects2.length = k;
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
    for (let j = 0, jLen = gdjs.evtsExt__CharacterMovement__IsMoving.GDMindyObjects2.length; j < jLen ; ++j) {
        if ( gdjs.evtsExt__CharacterMovement__IsMoving.GDMindyObjects1_1final.indexOf(gdjs.evtsExt__CharacterMovement__IsMoving.GDMindyObjects2[j]) === -1 )
            gdjs.evtsExt__CharacterMovement__IsMoving.GDMindyObjects1_1final.push(gdjs.evtsExt__CharacterMovement__IsMoving.GDMindyObjects2[j]);
    }
}
}
{
gdjs.copyArray(eventsFunctionContext.getObjects("Mindy"), gdjs.evtsExt__CharacterMovement__IsMoving.GDMindyObjects2);
{let isConditionTrue_2 = false;
isConditionTrue_2 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__CharacterMovement__IsMoving.GDMindyObjects2.length;i<l;++i) {
    if ( gdjs.evtsExt__CharacterMovement__IsMoving.GDMindyObjects2[i].behaviorActivated(eventsFunctionContext.getBehaviorName("NavMeshPathfindingBehavior")) ) {
        isConditionTrue_2 = true;
        gdjs.evtsExt__CharacterMovement__IsMoving.GDMindyObjects2[k] = gdjs.evtsExt__CharacterMovement__IsMoving.GDMindyObjects2[i];
        ++k;
    }
}
gdjs.evtsExt__CharacterMovement__IsMoving.GDMindyObjects2.length = k;
if (isConditionTrue_2) {
isConditionTrue_2 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__CharacterMovement__IsMoving.GDMindyObjects2.length;i<l;++i) {
    if ( gdjs.evtsExt__CharacterMovement__IsMoving.GDMindyObjects2[i].getBehavior(eventsFunctionContext.getBehaviorName("NavMeshPathfindingBehavior")).IsMoving((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_2 = true;
        gdjs.evtsExt__CharacterMovement__IsMoving.GDMindyObjects2[k] = gdjs.evtsExt__CharacterMovement__IsMoving.GDMindyObjects2[i];
        ++k;
    }
}
gdjs.evtsExt__CharacterMovement__IsMoving.GDMindyObjects2.length = k;
}
isConditionTrue_1 = isConditionTrue_2;
}
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
    for (let j = 0, jLen = gdjs.evtsExt__CharacterMovement__IsMoving.GDMindyObjects2.length; j < jLen ; ++j) {
        if ( gdjs.evtsExt__CharacterMovement__IsMoving.GDMindyObjects1_1final.indexOf(gdjs.evtsExt__CharacterMovement__IsMoving.GDMindyObjects2[j]) === -1 )
            gdjs.evtsExt__CharacterMovement__IsMoving.GDMindyObjects1_1final.push(gdjs.evtsExt__CharacterMovement__IsMoving.GDMindyObjects2[j]);
    }
}
}
{
gdjs.copyArray(gdjs.evtsExt__CharacterMovement__IsMoving.GDMindyObjects1_1final, gdjs.evtsExt__CharacterMovement__IsMoving.GDMindyObjects1);
}
}
if (isConditionTrue_0) {
{if (typeof eventsFunctionContext !== 'undefined') { eventsFunctionContext.returnValue = true; }}}

}


};

gdjs.evtsExt__CharacterMovement__IsMoving.func = function(runtimeScene, Mindy, NavMeshPathfindingBehavior, TopDownMovement, parentEventsFunctionContext) {
var eventsFunctionContext = {
  _objectsMap: {
"Mindy": Mindy
},
  _objectArraysMap: {
"Mindy": gdjs.objectsListsToArray(Mindy)
},
  _behaviorNamesMap: {
"NavMeshPathfindingBehavior": NavMeshPathfindingBehavior
, "TopDownMovement": TopDownMovement
},
  globalVariablesForExtension: runtimeScene.getGame().getVariablesForExtension("CharacterMovement"),
  sceneVariablesForExtension: runtimeScene.getScene().getVariablesForExtension("CharacterMovement"),
  localVariables: [],
  getObjects: function(objectName) {
    return eventsFunctionContext._objectArraysMap[objectName] || [];
  },
  getObjectsLists: function(objectName) {
    return eventsFunctionContext._objectsMap[objectName] || null;
  },
  getBehaviorName: function(behaviorName) {
    return eventsFunctionContext._behaviorNamesMap[behaviorName] || behaviorName;
  },
  createObject: function(objectName) {
    const objectsList = eventsFunctionContext._objectsMap[objectName];
    if (objectsList) {
      const object = parentEventsFunctionContext ?
        parentEventsFunctionContext.createObject(objectsList.firstKey()) :
        runtimeScene.createObject(objectsList.firstKey());
      if (object) {
        objectsList.get(objectsList.firstKey()).push(object);
        eventsFunctionContext._objectArraysMap[objectName].push(object);
      }
      return object;    }
    return null;
  },
  getInstancesCountOnScene: function(objectName) {
    const objectsList = eventsFunctionContext._objectsMap[objectName];
    let count = 0;
    if (objectsList) {
      for(const objectName in objectsList.items)
        count += parentEventsFunctionContext ?
parentEventsFunctionContext.getInstancesCountOnScene(objectName) :
        runtimeScene.getInstancesCountOnScene(objectName);
    }
    return count;
  },
  getLayer: function(layerName) {
    return runtimeScene.getLayer(layerName);
  },
  getArgument: function(argName) {
    return "";
  },
  getOnceTriggers: function() { return runtimeScene.getOnceTriggers(); }
};

gdjs.evtsExt__CharacterMovement__IsMoving.GDMindyObjects1.length = 0;
gdjs.evtsExt__CharacterMovement__IsMoving.GDMindyObjects2.length = 0;

gdjs.evtsExt__CharacterMovement__IsMoving.eventsList0(runtimeScene, eventsFunctionContext);

return !!eventsFunctionContext.returnValue;
}

gdjs.evtsExt__CharacterMovement__IsMoving.registeredGdjsCallbacks = [];