
if (typeof gdjs.evtsExt__CharacterMovement__ChooseAnimationDirection !== "undefined") {
  gdjs.evtsExt__CharacterMovement__ChooseAnimationDirection.registeredGdjsCallbacks.forEach(callback =>
    gdjs._unregisterCallback(callback)
  );
}

gdjs.evtsExt__CharacterMovement__ChooseAnimationDirection = {};
gdjs.evtsExt__CharacterMovement__ChooseAnimationDirection.GDMindyObjects1_1final = [];

gdjs.evtsExt__CharacterMovement__ChooseAnimationDirection.GDMindyObjects1= [];
gdjs.evtsExt__CharacterMovement__ChooseAnimationDirection.GDMindyObjects2= [];


gdjs.evtsExt__CharacterMovement__ChooseAnimationDirection.mapOfGDgdjs_9546evtsExt_9595_9595CharacterMovement_9595_9595ChooseAnimationDirection_9546GDMindyObjects1Objects = Hashtable.newFrom({"Mindy": gdjs.evtsExt__CharacterMovement__ChooseAnimationDirection.GDMindyObjects1});
gdjs.evtsExt__CharacterMovement__ChooseAnimationDirection.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{

gdjs.copyArray(eventsFunctionContext.getObjects("Mindy"), gdjs.evtsExt__CharacterMovement__ChooseAnimationDirection.GDMindyObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__CharacterMovement__ChooseAnimationDirection.GDMindyObjects1.length;i<l;++i) {
    if ( !(gdjs.evtsExt__CharacterMovement__ChooseAnimationDirection.GDMindyObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("TopDownMovement")).isMoving()) ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__CharacterMovement__ChooseAnimationDirection.GDMindyObjects1[k] = gdjs.evtsExt__CharacterMovement__ChooseAnimationDirection.GDMindyObjects1[i];
        ++k;
    }
}
gdjs.evtsExt__CharacterMovement__ChooseAnimationDirection.GDMindyObjects1.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__CharacterMovement__ChooseAnimationDirection.GDMindyObjects1 */
{for(var i = 0, len = gdjs.evtsExt__CharacterMovement__ChooseAnimationDirection.GDMindyObjects1.length ;i < len;++i) {
    gdjs.evtsExt__CharacterMovement__ChooseAnimationDirection.GDMindyObjects1[i].activateBehavior(eventsFunctionContext.getBehaviorName("TopDownAnimator"), false);
}
}}

}


{

gdjs.copyArray(eventsFunctionContext.getObjects("Mindy"), gdjs.evtsExt__CharacterMovement__ChooseAnimationDirection.GDMindyObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__CharacterMovement__ChooseAnimationDirection.GDMindyObjects1.length;i<l;++i) {
    if ( gdjs.evtsExt__CharacterMovement__ChooseAnimationDirection.GDMindyObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("TopDownMovement")).isMoving() ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__CharacterMovement__ChooseAnimationDirection.GDMindyObjects1[k] = gdjs.evtsExt__CharacterMovement__ChooseAnimationDirection.GDMindyObjects1[i];
        ++k;
    }
}
gdjs.evtsExt__CharacterMovement__ChooseAnimationDirection.GDMindyObjects1.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__CharacterMovement__ChooseAnimationDirection.GDMindyObjects1 */
{for(var i = 0, len = gdjs.evtsExt__CharacterMovement__ChooseAnimationDirection.GDMindyObjects1.length ;i < len;++i) {
    gdjs.evtsExt__CharacterMovement__ChooseAnimationDirection.GDMindyObjects1[i].activateBehavior(eventsFunctionContext.getBehaviorName("TopDownAnimator"), true);
}
}}

}


{

gdjs.evtsExt__CharacterMovement__ChooseAnimationDirection.GDMindyObjects1.length = 0;


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{gdjs.evtsExt__CharacterMovement__ChooseAnimationDirection.GDMindyObjects1_1final.length = 0;
let isConditionTrue_1 = false;
isConditionTrue_0 = false;
{
gdjs.copyArray(eventsFunctionContext.getObjects("Mindy"), gdjs.evtsExt__CharacterMovement__ChooseAnimationDirection.GDMindyObjects2);
for (var i = 0, k = 0, l = gdjs.evtsExt__CharacterMovement__ChooseAnimationDirection.GDMindyObjects2.length;i<l;++i) {
    if ( !(gdjs.evtsExt__CharacterMovement__ChooseAnimationDirection.GDMindyObjects2[i].behaviorActivated(eventsFunctionContext.getBehaviorName("NavMeshPathfindingBehavior"))) ) {
        isConditionTrue_1 = true;
        gdjs.evtsExt__CharacterMovement__ChooseAnimationDirection.GDMindyObjects2[k] = gdjs.evtsExt__CharacterMovement__ChooseAnimationDirection.GDMindyObjects2[i];
        ++k;
    }
}
gdjs.evtsExt__CharacterMovement__ChooseAnimationDirection.GDMindyObjects2.length = k;
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
    for (let j = 0, jLen = gdjs.evtsExt__CharacterMovement__ChooseAnimationDirection.GDMindyObjects2.length; j < jLen ; ++j) {
        if ( gdjs.evtsExt__CharacterMovement__ChooseAnimationDirection.GDMindyObjects1_1final.indexOf(gdjs.evtsExt__CharacterMovement__ChooseAnimationDirection.GDMindyObjects2[j]) === -1 )
            gdjs.evtsExt__CharacterMovement__ChooseAnimationDirection.GDMindyObjects1_1final.push(gdjs.evtsExt__CharacterMovement__ChooseAnimationDirection.GDMindyObjects2[j]);
    }
}
}
{
gdjs.copyArray(eventsFunctionContext.getObjects("Mindy"), gdjs.evtsExt__CharacterMovement__ChooseAnimationDirection.GDMindyObjects2);
for (var i = 0, k = 0, l = gdjs.evtsExt__CharacterMovement__ChooseAnimationDirection.GDMindyObjects2.length;i<l;++i) {
    if ( !(gdjs.evtsExt__CharacterMovement__ChooseAnimationDirection.GDMindyObjects2[i].getBehavior(eventsFunctionContext.getBehaviorName("NavMeshPathfindingBehavior")).IsMoving((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined))) ) {
        isConditionTrue_1 = true;
        gdjs.evtsExt__CharacterMovement__ChooseAnimationDirection.GDMindyObjects2[k] = gdjs.evtsExt__CharacterMovement__ChooseAnimationDirection.GDMindyObjects2[i];
        ++k;
    }
}
gdjs.evtsExt__CharacterMovement__ChooseAnimationDirection.GDMindyObjects2.length = k;
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
    for (let j = 0, jLen = gdjs.evtsExt__CharacterMovement__ChooseAnimationDirection.GDMindyObjects2.length; j < jLen ; ++j) {
        if ( gdjs.evtsExt__CharacterMovement__ChooseAnimationDirection.GDMindyObjects1_1final.indexOf(gdjs.evtsExt__CharacterMovement__ChooseAnimationDirection.GDMindyObjects2[j]) === -1 )
            gdjs.evtsExt__CharacterMovement__ChooseAnimationDirection.GDMindyObjects1_1final.push(gdjs.evtsExt__CharacterMovement__ChooseAnimationDirection.GDMindyObjects2[j]);
    }
}
}
{
gdjs.copyArray(gdjs.evtsExt__CharacterMovement__ChooseAnimationDirection.GDMindyObjects1_1final, gdjs.evtsExt__CharacterMovement__ChooseAnimationDirection.GDMindyObjects1);
}
}
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__CharacterMovement__ChooseAnimationDirection.GDMindyObjects1 */
{for(var i = 0, len = gdjs.evtsExt__CharacterMovement__ChooseAnimationDirection.GDMindyObjects1.length ;i < len;++i) {
    gdjs.evtsExt__CharacterMovement__ChooseAnimationDirection.GDMindyObjects1[i].activateBehavior(eventsFunctionContext.getBehaviorName("PathfindingAnimator"), false);
}
}}

}


{

gdjs.copyArray(eventsFunctionContext.getObjects("Mindy"), gdjs.evtsExt__CharacterMovement__ChooseAnimationDirection.GDMindyObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__CharacterMovement__ChooseAnimationDirection.GDMindyObjects1.length;i<l;++i) {
    if ( gdjs.evtsExt__CharacterMovement__ChooseAnimationDirection.GDMindyObjects1[i].behaviorActivated(eventsFunctionContext.getBehaviorName("NavMeshPathfindingBehavior")) ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__CharacterMovement__ChooseAnimationDirection.GDMindyObjects1[k] = gdjs.evtsExt__CharacterMovement__ChooseAnimationDirection.GDMindyObjects1[i];
        ++k;
    }
}
gdjs.evtsExt__CharacterMovement__ChooseAnimationDirection.GDMindyObjects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__CharacterMovement__ChooseAnimationDirection.GDMindyObjects1.length;i<l;++i) {
    if ( gdjs.evtsExt__CharacterMovement__ChooseAnimationDirection.GDMindyObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("NavMeshPathfindingBehavior")).IsMoving((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__CharacterMovement__ChooseAnimationDirection.GDMindyObjects1[k] = gdjs.evtsExt__CharacterMovement__ChooseAnimationDirection.GDMindyObjects1[i];
        ++k;
    }
}
gdjs.evtsExt__CharacterMovement__ChooseAnimationDirection.GDMindyObjects1.length = k;
}
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__CharacterMovement__ChooseAnimationDirection.GDMindyObjects1 */
{for(var i = 0, len = gdjs.evtsExt__CharacterMovement__ChooseAnimationDirection.GDMindyObjects1.length ;i < len;++i) {
    gdjs.evtsExt__CharacterMovement__ChooseAnimationDirection.GDMindyObjects1[i].activateBehavior(eventsFunctionContext.getBehaviorName("PathfindingAnimator"), true);
}
}}

}


{

gdjs.copyArray(eventsFunctionContext.getObjects("Mindy"), gdjs.evtsExt__CharacterMovement__ChooseAnimationDirection.GDMindyObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = !(gdjs.evtsExt__CharacterMovement__IsMoving.func(runtimeScene, gdjs.evtsExt__CharacterMovement__ChooseAnimationDirection.mapOfGDgdjs_9546evtsExt_9595_9595CharacterMovement_9595_9595ChooseAnimationDirection_9546GDMindyObjects1Objects, eventsFunctionContext.getBehaviorName("NavMeshPathfindingBehavior"), eventsFunctionContext.getBehaviorName("TopDownMovement"), (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)));
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__CharacterMovement__ChooseAnimationDirection.GDMindyObjects1 */
{for(var i = 0, len = gdjs.evtsExt__CharacterMovement__ChooseAnimationDirection.GDMindyObjects1.length ;i < len;++i) {
    gdjs.evtsExt__CharacterMovement__ChooseAnimationDirection.GDMindyObjects1[i].setAnimationName("Idle");
}
}}

}


};

gdjs.evtsExt__CharacterMovement__ChooseAnimationDirection.func = function(runtimeScene, Mindy, NavMeshPathfindingBehavior, TopDownMovement, TopDownAnimator, PathfindingAnimator, parentEventsFunctionContext) {
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
, "TopDownAnimator": TopDownAnimator
, "PathfindingAnimator": PathfindingAnimator
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

gdjs.evtsExt__CharacterMovement__ChooseAnimationDirection.GDMindyObjects1.length = 0;
gdjs.evtsExt__CharacterMovement__ChooseAnimationDirection.GDMindyObjects2.length = 0;

gdjs.evtsExt__CharacterMovement__ChooseAnimationDirection.eventsList0(runtimeScene, eventsFunctionContext);

return;
}

gdjs.evtsExt__CharacterMovement__ChooseAnimationDirection.registeredGdjsCallbacks = [];