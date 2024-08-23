
gdjs.evtsExt__NavMeshPathfinding__NavMeshPathfindingObstacleBehavior = gdjs.evtsExt__NavMeshPathfinding__NavMeshPathfindingObstacleBehavior || {};

/**
 * Behavior generated from Obstacle for navigation mesh pathfinding (experimental)
 */
gdjs.evtsExt__NavMeshPathfinding__NavMeshPathfindingObstacleBehavior.NavMeshPathfindingObstacleBehavior = class NavMeshPathfindingObstacleBehavior extends gdjs.RuntimeBehavior {
  constructor(instanceContainer, behaviorData, owner) {
    super(instanceContainer, behaviorData, owner);
    this._runtimeScene = instanceContainer;

    this._onceTriggers = new gdjs.OnceTriggers();
    this._behaviorData = {};
    this._sharedData = gdjs.evtsExt__NavMeshPathfinding__NavMeshPathfindingObstacleBehavior.NavMeshPathfindingObstacleBehavior.getSharedData(
      instanceContainer,
      behaviorData.name
    );
    
  }

  // Hot-reload:
  updateFromBehaviorData(oldBehaviorData, newBehaviorData) {
    

    return true;
  }

  // Network sync:
  getNetworkSyncData() {
    return {
      ...super.getNetworkSyncData(),
      props: {
        
      }
    };
  }
  updateFromNetworkSyncData(networkSyncData) {
    super.updateFromNetworkSyncData(networkSyncData);
    
  }

  // Properties:
  
}

/**
 * Shared data generated from Obstacle for navigation mesh pathfinding (experimental)
 */
gdjs.evtsExt__NavMeshPathfinding__NavMeshPathfindingObstacleBehavior.NavMeshPathfindingObstacleBehavior.SharedData = class NavMeshPathfindingObstacleBehaviorSharedData {
  constructor(sharedData) {
    
    this.Viewpoint = sharedData.Viewpoint !== undefined ? sharedData.Viewpoint : "Top-Down";
    this.CellSize = sharedData.CellSize !== undefined ? sharedData.CellSize : Number("10") || 0;
    this.AreaLeftBound = sharedData.AreaLeftBound !== undefined ? sharedData.AreaLeftBound : Number("0") || 0;
    this.AreaTopBound = sharedData.AreaTopBound !== undefined ? sharedData.AreaTopBound : Number("0") || 0;
    this.AreaRightBound = sharedData.AreaRightBound !== undefined ? sharedData.AreaRightBound : Number("0") || 0;
    this.AreaBottomBound = sharedData.AreaBottomBound !== undefined ? sharedData.AreaBottomBound : Number("0") || 0;
    this.IsometricRatio = Number("") || 0;
  }
  
  // Shared properties:
  
  _getViewpoint() {
    return this.Viewpoint !== undefined ? this.Viewpoint : "Top-Down";
  }
  _setViewpoint(newValue) {
    this.Viewpoint = newValue;
  }
  _getCellSize() {
    return this.CellSize !== undefined ? this.CellSize : Number("10") || 0;
  }
  _setCellSize(newValue) {
    this.CellSize = newValue;
  }
  _getAreaLeftBound() {
    return this.AreaLeftBound !== undefined ? this.AreaLeftBound : Number("0") || 0;
  }
  _setAreaLeftBound(newValue) {
    this.AreaLeftBound = newValue;
  }
  _getAreaTopBound() {
    return this.AreaTopBound !== undefined ? this.AreaTopBound : Number("0") || 0;
  }
  _setAreaTopBound(newValue) {
    this.AreaTopBound = newValue;
  }
  _getAreaRightBound() {
    return this.AreaRightBound !== undefined ? this.AreaRightBound : Number("0") || 0;
  }
  _setAreaRightBound(newValue) {
    this.AreaRightBound = newValue;
  }
  _getAreaBottomBound() {
    return this.AreaBottomBound !== undefined ? this.AreaBottomBound : Number("0") || 0;
  }
  _setAreaBottomBound(newValue) {
    this.AreaBottomBound = newValue;
  }
  _getIsometricRatio() {
    return this.IsometricRatio !== undefined ? this.IsometricRatio : Number("") || 0;
  }
  _setIsometricRatio(newValue) {
    this.IsometricRatio = newValue;
  }
}

gdjs.evtsExt__NavMeshPathfinding__NavMeshPathfindingObstacleBehavior.NavMeshPathfindingObstacleBehavior.getSharedData = function(instanceContainer, behaviorName) {
  if (!instanceContainer._NavMeshPathfinding_NavMeshPathfindingObstacleBehaviorSharedData) {
    const initialData = instanceContainer.getInitialSharedDataForBehavior(
      behaviorName
    );
    instanceContainer._NavMeshPathfinding_NavMeshPathfindingObstacleBehaviorSharedData = new gdjs.evtsExt__NavMeshPathfinding__NavMeshPathfindingObstacleBehavior.NavMeshPathfindingObstacleBehavior.SharedData(
      initialData
    );
  }
  return instanceContainer._NavMeshPathfinding_NavMeshPathfindingObstacleBehaviorSharedData;
}

// Methods:
gdjs.evtsExt__NavMeshPathfinding__NavMeshPathfindingObstacleBehavior.NavMeshPathfindingObstacleBehavior.prototype.onCreatedContext = {};
gdjs.evtsExt__NavMeshPathfinding__NavMeshPathfindingObstacleBehavior.NavMeshPathfindingObstacleBehavior.prototype.onCreatedContext.GDObjectObjects1= [];
gdjs.evtsExt__NavMeshPathfinding__NavMeshPathfindingObstacleBehavior.NavMeshPathfindingObstacleBehavior.prototype.onCreatedContext.GDObjectObjects2= [];


gdjs.evtsExt__NavMeshPathfinding__NavMeshPathfindingObstacleBehavior.NavMeshPathfindingObstacleBehavior.prototype.onCreatedContext.userFunc0x885068 = function GDJSInlineCode(runtimeScene, objects, eventsFunctionContext) {
"use strict";
const object = objects[0];
const behaviorName = eventsFunctionContext.getBehaviorName("Behavior");
const behavior = object.getBehavior(behaviorName);
behavior.__NavMeshPathfinding = behavior.__NavMeshPathfinding || {};
behavior.__NavMeshPathfinding.obstacle =
    new gdjs.__NavMeshPathfinding.NavMeshPathfindingObstacleBehavior(
        runtimeScene, behavior);

};
gdjs.evtsExt__NavMeshPathfinding__NavMeshPathfindingObstacleBehavior.NavMeshPathfindingObstacleBehavior.prototype.onCreatedContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{



}


{


let isConditionTrue_0 = false;
{
{gdjs.evtsExt__NavMeshPathfinding__DefineJavaScript.func(runtimeScene, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}}

}


{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__NavMeshPathfinding__NavMeshPathfindingObstacleBehavior.NavMeshPathfindingObstacleBehavior.prototype.onCreatedContext.GDObjectObjects1);

var objects = [];
objects.push.apply(objects,gdjs.evtsExt__NavMeshPathfinding__NavMeshPathfindingObstacleBehavior.NavMeshPathfindingObstacleBehavior.prototype.onCreatedContext.GDObjectObjects1);
gdjs.evtsExt__NavMeshPathfinding__NavMeshPathfindingObstacleBehavior.NavMeshPathfindingObstacleBehavior.prototype.onCreatedContext.userFunc0x885068(runtimeScene, objects, typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined);

}


};

gdjs.evtsExt__NavMeshPathfinding__NavMeshPathfindingObstacleBehavior.NavMeshPathfindingObstacleBehavior.prototype.onCreated = function(parentEventsFunctionContext) {

var that = this;
var runtimeScene = this._runtimeScene;
var thisObjectList = [this.owner];
var Object = Hashtable.newFrom({Object: thisObjectList});
var Behavior = this.name;
var eventsFunctionContext = {
  _objectsMap: {
"Object": Object
},
  _objectArraysMap: {
"Object": thisObjectList
},
  _behaviorNamesMap: {
"Behavior": Behavior
},
  globalVariablesForExtension: runtimeScene.getGame().getVariablesForExtension("NavMeshPathfinding"),
  sceneVariablesForExtension: runtimeScene.getScene().getVariablesForExtension("NavMeshPathfinding"),
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
  getOnceTriggers: function() { return that._onceTriggers; }
};

gdjs.evtsExt__NavMeshPathfinding__NavMeshPathfindingObstacleBehavior.NavMeshPathfindingObstacleBehavior.prototype.onCreatedContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__NavMeshPathfinding__NavMeshPathfindingObstacleBehavior.NavMeshPathfindingObstacleBehavior.prototype.onCreatedContext.GDObjectObjects2.length = 0;

gdjs.evtsExt__NavMeshPathfinding__NavMeshPathfindingObstacleBehavior.NavMeshPathfindingObstacleBehavior.prototype.onCreatedContext.eventsList0(runtimeScene, eventsFunctionContext);

return;
}
gdjs.evtsExt__NavMeshPathfinding__NavMeshPathfindingObstacleBehavior.NavMeshPathfindingObstacleBehavior.prototype.doStepPreEventsContext = {};
gdjs.evtsExt__NavMeshPathfinding__NavMeshPathfindingObstacleBehavior.NavMeshPathfindingObstacleBehavior.prototype.doStepPreEventsContext.GDObjectObjects1= [];


gdjs.evtsExt__NavMeshPathfinding__NavMeshPathfindingObstacleBehavior.NavMeshPathfindingObstacleBehavior.prototype.doStepPreEventsContext.userFunc0x8887b0 = function GDJSInlineCode(runtimeScene, objects, eventsFunctionContext) {
"use strict";
const object = objects[0];
const behaviorName = eventsFunctionContext.getBehaviorName("Behavior");
const behavior = object.getBehavior(behaviorName);

behavior.__NavMeshPathfinding.obstacle.doStepPreEvents(runtimeScene);
};
gdjs.evtsExt__NavMeshPathfinding__NavMeshPathfindingObstacleBehavior.NavMeshPathfindingObstacleBehavior.prototype.doStepPreEventsContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__NavMeshPathfinding__NavMeshPathfindingObstacleBehavior.NavMeshPathfindingObstacleBehavior.prototype.doStepPreEventsContext.GDObjectObjects1);

var objects = [];
objects.push.apply(objects,gdjs.evtsExt__NavMeshPathfinding__NavMeshPathfindingObstacleBehavior.NavMeshPathfindingObstacleBehavior.prototype.doStepPreEventsContext.GDObjectObjects1);
gdjs.evtsExt__NavMeshPathfinding__NavMeshPathfindingObstacleBehavior.NavMeshPathfindingObstacleBehavior.prototype.doStepPreEventsContext.userFunc0x8887b0(runtimeScene, objects, typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined);

}


};

gdjs.evtsExt__NavMeshPathfinding__NavMeshPathfindingObstacleBehavior.NavMeshPathfindingObstacleBehavior.prototype.doStepPreEvents = function(parentEventsFunctionContext) {
this._onceTriggers.startNewFrame();
var that = this;
var runtimeScene = this._runtimeScene;
var thisObjectList = [this.owner];
var Object = Hashtable.newFrom({Object: thisObjectList});
var Behavior = this.name;
var eventsFunctionContext = {
  _objectsMap: {
"Object": Object
},
  _objectArraysMap: {
"Object": thisObjectList
},
  _behaviorNamesMap: {
"Behavior": Behavior
},
  globalVariablesForExtension: runtimeScene.getGame().getVariablesForExtension("NavMeshPathfinding"),
  sceneVariablesForExtension: runtimeScene.getScene().getVariablesForExtension("NavMeshPathfinding"),
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
  getOnceTriggers: function() { return that._onceTriggers; }
};

gdjs.evtsExt__NavMeshPathfinding__NavMeshPathfindingObstacleBehavior.NavMeshPathfindingObstacleBehavior.prototype.doStepPreEventsContext.GDObjectObjects1.length = 0;

gdjs.evtsExt__NavMeshPathfinding__NavMeshPathfindingObstacleBehavior.NavMeshPathfindingObstacleBehavior.prototype.doStepPreEventsContext.eventsList0(runtimeScene, eventsFunctionContext);

return;
}
gdjs.evtsExt__NavMeshPathfinding__NavMeshPathfindingObstacleBehavior.NavMeshPathfindingObstacleBehavior.prototype.onDeActivateContext = {};
gdjs.evtsExt__NavMeshPathfinding__NavMeshPathfindingObstacleBehavior.NavMeshPathfindingObstacleBehavior.prototype.onDeActivateContext.GDObjectObjects1= [];


gdjs.evtsExt__NavMeshPathfinding__NavMeshPathfindingObstacleBehavior.NavMeshPathfindingObstacleBehavior.prototype.onDeActivateContext.userFunc0x888860 = function GDJSInlineCode(runtimeScene, objects, eventsFunctionContext) {
"use strict";
const object = objects[0];
const behaviorName = eventsFunctionContext.getBehaviorName("Behavior");
const behavior = object.getBehavior(behaviorName);

behavior.__NavMeshPathfinding.obstacle.onDeActivate();
};
gdjs.evtsExt__NavMeshPathfinding__NavMeshPathfindingObstacleBehavior.NavMeshPathfindingObstacleBehavior.prototype.onDeActivateContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__NavMeshPathfinding__NavMeshPathfindingObstacleBehavior.NavMeshPathfindingObstacleBehavior.prototype.onDeActivateContext.GDObjectObjects1);

var objects = [];
objects.push.apply(objects,gdjs.evtsExt__NavMeshPathfinding__NavMeshPathfindingObstacleBehavior.NavMeshPathfindingObstacleBehavior.prototype.onDeActivateContext.GDObjectObjects1);
gdjs.evtsExt__NavMeshPathfinding__NavMeshPathfindingObstacleBehavior.NavMeshPathfindingObstacleBehavior.prototype.onDeActivateContext.userFunc0x888860(runtimeScene, objects, typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined);

}


};

gdjs.evtsExt__NavMeshPathfinding__NavMeshPathfindingObstacleBehavior.NavMeshPathfindingObstacleBehavior.prototype.onDeActivate = function(parentEventsFunctionContext) {

var that = this;
var runtimeScene = this._runtimeScene;
var thisObjectList = [this.owner];
var Object = Hashtable.newFrom({Object: thisObjectList});
var Behavior = this.name;
var eventsFunctionContext = {
  _objectsMap: {
"Object": Object
},
  _objectArraysMap: {
"Object": thisObjectList
},
  _behaviorNamesMap: {
"Behavior": Behavior
},
  globalVariablesForExtension: runtimeScene.getGame().getVariablesForExtension("NavMeshPathfinding"),
  sceneVariablesForExtension: runtimeScene.getScene().getVariablesForExtension("NavMeshPathfinding"),
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
  getOnceTriggers: function() { return that._onceTriggers; }
};

gdjs.evtsExt__NavMeshPathfinding__NavMeshPathfindingObstacleBehavior.NavMeshPathfindingObstacleBehavior.prototype.onDeActivateContext.GDObjectObjects1.length = 0;

gdjs.evtsExt__NavMeshPathfinding__NavMeshPathfindingObstacleBehavior.NavMeshPathfindingObstacleBehavior.prototype.onDeActivateContext.eventsList0(runtimeScene, eventsFunctionContext);

return;
}
gdjs.evtsExt__NavMeshPathfinding__NavMeshPathfindingObstacleBehavior.NavMeshPathfindingObstacleBehavior.prototype.onActivateContext = {};
gdjs.evtsExt__NavMeshPathfinding__NavMeshPathfindingObstacleBehavior.NavMeshPathfindingObstacleBehavior.prototype.onActivateContext.GDObjectObjects1= [];


gdjs.evtsExt__NavMeshPathfinding__NavMeshPathfindingObstacleBehavior.NavMeshPathfindingObstacleBehavior.prototype.onActivateContext.userFunc0x88f308 = function GDJSInlineCode(runtimeScene, objects, eventsFunctionContext) {
"use strict";
const object = objects[0];
const behaviorName = eventsFunctionContext.getBehaviorName("Behavior");
const behavior = object.getBehavior(behaviorName);

behavior.__NavMeshPathfinding.obstacle.onActivate();
};
gdjs.evtsExt__NavMeshPathfinding__NavMeshPathfindingObstacleBehavior.NavMeshPathfindingObstacleBehavior.prototype.onActivateContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__NavMeshPathfinding__NavMeshPathfindingObstacleBehavior.NavMeshPathfindingObstacleBehavior.prototype.onActivateContext.GDObjectObjects1);

var objects = [];
objects.push.apply(objects,gdjs.evtsExt__NavMeshPathfinding__NavMeshPathfindingObstacleBehavior.NavMeshPathfindingObstacleBehavior.prototype.onActivateContext.GDObjectObjects1);
gdjs.evtsExt__NavMeshPathfinding__NavMeshPathfindingObstacleBehavior.NavMeshPathfindingObstacleBehavior.prototype.onActivateContext.userFunc0x88f308(runtimeScene, objects, typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined);

}


};

gdjs.evtsExt__NavMeshPathfinding__NavMeshPathfindingObstacleBehavior.NavMeshPathfindingObstacleBehavior.prototype.onActivate = function(parentEventsFunctionContext) {

var that = this;
var runtimeScene = this._runtimeScene;
var thisObjectList = [this.owner];
var Object = Hashtable.newFrom({Object: thisObjectList});
var Behavior = this.name;
var eventsFunctionContext = {
  _objectsMap: {
"Object": Object
},
  _objectArraysMap: {
"Object": thisObjectList
},
  _behaviorNamesMap: {
"Behavior": Behavior
},
  globalVariablesForExtension: runtimeScene.getGame().getVariablesForExtension("NavMeshPathfinding"),
  sceneVariablesForExtension: runtimeScene.getScene().getVariablesForExtension("NavMeshPathfinding"),
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
  getOnceTriggers: function() { return that._onceTriggers; }
};

gdjs.evtsExt__NavMeshPathfinding__NavMeshPathfindingObstacleBehavior.NavMeshPathfindingObstacleBehavior.prototype.onActivateContext.GDObjectObjects1.length = 0;

gdjs.evtsExt__NavMeshPathfinding__NavMeshPathfindingObstacleBehavior.NavMeshPathfindingObstacleBehavior.prototype.onActivateContext.eventsList0(runtimeScene, eventsFunctionContext);

return;
}
gdjs.evtsExt__NavMeshPathfinding__NavMeshPathfindingObstacleBehavior.NavMeshPathfindingObstacleBehavior.prototype.onDestroyContext = {};
gdjs.evtsExt__NavMeshPathfinding__NavMeshPathfindingObstacleBehavior.NavMeshPathfindingObstacleBehavior.prototype.onDestroyContext.GDObjectObjects1= [];


gdjs.evtsExt__NavMeshPathfinding__NavMeshPathfindingObstacleBehavior.NavMeshPathfindingObstacleBehavior.prototype.onDestroyContext.userFunc0x88f308 = function GDJSInlineCode(runtimeScene, objects, eventsFunctionContext) {
"use strict";
const object = objects[0];
const behaviorName = eventsFunctionContext.getBehaviorName("Behavior");
const behavior = object.getBehavior(behaviorName);

behavior.__NavMeshPathfinding.obstacle.onDestroy();
};
gdjs.evtsExt__NavMeshPathfinding__NavMeshPathfindingObstacleBehavior.NavMeshPathfindingObstacleBehavior.prototype.onDestroyContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__NavMeshPathfinding__NavMeshPathfindingObstacleBehavior.NavMeshPathfindingObstacleBehavior.prototype.onDestroyContext.GDObjectObjects1);

var objects = [];
objects.push.apply(objects,gdjs.evtsExt__NavMeshPathfinding__NavMeshPathfindingObstacleBehavior.NavMeshPathfindingObstacleBehavior.prototype.onDestroyContext.GDObjectObjects1);
gdjs.evtsExt__NavMeshPathfinding__NavMeshPathfindingObstacleBehavior.NavMeshPathfindingObstacleBehavior.prototype.onDestroyContext.userFunc0x88f308(runtimeScene, objects, typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined);

}


};

gdjs.evtsExt__NavMeshPathfinding__NavMeshPathfindingObstacleBehavior.NavMeshPathfindingObstacleBehavior.prototype.onDestroy = function(parentEventsFunctionContext) {

var that = this;
var runtimeScene = this._runtimeScene;
var thisObjectList = [this.owner];
var Object = Hashtable.newFrom({Object: thisObjectList});
var Behavior = this.name;
var eventsFunctionContext = {
  _objectsMap: {
"Object": Object
},
  _objectArraysMap: {
"Object": thisObjectList
},
  _behaviorNamesMap: {
"Behavior": Behavior
},
  globalVariablesForExtension: runtimeScene.getGame().getVariablesForExtension("NavMeshPathfinding"),
  sceneVariablesForExtension: runtimeScene.getScene().getVariablesForExtension("NavMeshPathfinding"),
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
  getOnceTriggers: function() { return that._onceTriggers; }
};

gdjs.evtsExt__NavMeshPathfinding__NavMeshPathfindingObstacleBehavior.NavMeshPathfindingObstacleBehavior.prototype.onDestroyContext.GDObjectObjects1.length = 0;

gdjs.evtsExt__NavMeshPathfinding__NavMeshPathfindingObstacleBehavior.NavMeshPathfindingObstacleBehavior.prototype.onDestroyContext.eventsList0(runtimeScene, eventsFunctionContext);

return;
}
gdjs.evtsExt__NavMeshPathfinding__NavMeshPathfindingObstacleBehavior.NavMeshPathfindingObstacleBehavior.prototype.CellSizeContext = {};
gdjs.evtsExt__NavMeshPathfinding__NavMeshPathfindingObstacleBehavior.NavMeshPathfindingObstacleBehavior.prototype.CellSizeContext.GDObjectObjects1= [];
gdjs.evtsExt__NavMeshPathfinding__NavMeshPathfindingObstacleBehavior.NavMeshPathfindingObstacleBehavior.prototype.CellSizeContext.GDObjectObjects2= [];


gdjs.evtsExt__NavMeshPathfinding__NavMeshPathfindingObstacleBehavior.NavMeshPathfindingObstacleBehavior.prototype.CellSizeContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
{
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__NavMeshPathfinding__NavMeshPathfindingObstacleBehavior.NavMeshPathfindingObstacleBehavior.prototype.CellSizeContext.GDObjectObjects1);
{if (typeof eventsFunctionContext !== 'undefined') { eventsFunctionContext.returnValue = (( gdjs.evtsExt__NavMeshPathfinding__NavMeshPathfindingObstacleBehavior.NavMeshPathfindingObstacleBehavior.prototype.CellSizeContext.GDObjectObjects1.length === 0 ) ? 0 :gdjs.evtsExt__NavMeshPathfinding__NavMeshPathfindingObstacleBehavior.NavMeshPathfindingObstacleBehavior.prototype.CellSizeContext.GDObjectObjects1[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._sharedData._getCellSize()); }}}

}


};

gdjs.evtsExt__NavMeshPathfinding__NavMeshPathfindingObstacleBehavior.NavMeshPathfindingObstacleBehavior.prototype.CellSize = function(parentEventsFunctionContext) {

var that = this;
var runtimeScene = this._runtimeScene;
var thisObjectList = [this.owner];
var Object = Hashtable.newFrom({Object: thisObjectList});
var Behavior = this.name;
var eventsFunctionContext = {
  _objectsMap: {
"Object": Object
},
  _objectArraysMap: {
"Object": thisObjectList
},
  _behaviorNamesMap: {
"Behavior": Behavior
},
  globalVariablesForExtension: runtimeScene.getGame().getVariablesForExtension("NavMeshPathfinding"),
  sceneVariablesForExtension: runtimeScene.getScene().getVariablesForExtension("NavMeshPathfinding"),
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
  getOnceTriggers: function() { return that._onceTriggers; }
};

gdjs.evtsExt__NavMeshPathfinding__NavMeshPathfindingObstacleBehavior.NavMeshPathfindingObstacleBehavior.prototype.CellSizeContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__NavMeshPathfinding__NavMeshPathfindingObstacleBehavior.NavMeshPathfindingObstacleBehavior.prototype.CellSizeContext.GDObjectObjects2.length = 0;

gdjs.evtsExt__NavMeshPathfinding__NavMeshPathfindingObstacleBehavior.NavMeshPathfindingObstacleBehavior.prototype.CellSizeContext.eventsList0(runtimeScene, eventsFunctionContext);

return Number(eventsFunctionContext.returnValue) || 0;
}
gdjs.evtsExt__NavMeshPathfinding__NavMeshPathfindingObstacleBehavior.NavMeshPathfindingObstacleBehavior.prototype.SetCellSizeContext = {};
gdjs.evtsExt__NavMeshPathfinding__NavMeshPathfindingObstacleBehavior.NavMeshPathfindingObstacleBehavior.prototype.SetCellSizeContext.GDObjectObjects1= [];
gdjs.evtsExt__NavMeshPathfinding__NavMeshPathfindingObstacleBehavior.NavMeshPathfindingObstacleBehavior.prototype.SetCellSizeContext.GDObjectObjects2= [];


gdjs.evtsExt__NavMeshPathfinding__NavMeshPathfindingObstacleBehavior.NavMeshPathfindingObstacleBehavior.prototype.SetCellSizeContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
{
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__NavMeshPathfinding__NavMeshPathfindingObstacleBehavior.NavMeshPathfindingObstacleBehavior.prototype.SetCellSizeContext.GDObjectObjects1);
{for(var i = 0, len = gdjs.evtsExt__NavMeshPathfinding__NavMeshPathfindingObstacleBehavior.NavMeshPathfindingObstacleBehavior.prototype.SetCellSizeContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__NavMeshPathfinding__NavMeshPathfindingObstacleBehavior.NavMeshPathfindingObstacleBehavior.prototype.SetCellSizeContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._sharedData._setCellSize((typeof eventsFunctionContext !== 'undefined' ? Number(eventsFunctionContext.getArgument("Value")) || 0 : 0));
}
}{for(var i = 0, len = gdjs.evtsExt__NavMeshPathfinding__NavMeshPathfindingObstacleBehavior.NavMeshPathfindingObstacleBehavior.prototype.SetCellSizeContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__NavMeshPathfinding__NavMeshPathfindingObstacleBehavior.NavMeshPathfindingObstacleBehavior.prototype.SetCellSizeContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior")).InvalidateNavMesh((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}}

}


};

gdjs.evtsExt__NavMeshPathfinding__NavMeshPathfindingObstacleBehavior.NavMeshPathfindingObstacleBehavior.prototype.SetCellSize = function(Value, parentEventsFunctionContext) {

var that = this;
var runtimeScene = this._runtimeScene;
var thisObjectList = [this.owner];
var Object = Hashtable.newFrom({Object: thisObjectList});
var Behavior = this.name;
var eventsFunctionContext = {
  _objectsMap: {
"Object": Object
},
  _objectArraysMap: {
"Object": thisObjectList
},
  _behaviorNamesMap: {
"Behavior": Behavior
},
  globalVariablesForExtension: runtimeScene.getGame().getVariablesForExtension("NavMeshPathfinding"),
  sceneVariablesForExtension: runtimeScene.getScene().getVariablesForExtension("NavMeshPathfinding"),
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
if (argName === "Value") return Value;
    return "";
  },
  getOnceTriggers: function() { return that._onceTriggers; }
};

gdjs.evtsExt__NavMeshPathfinding__NavMeshPathfindingObstacleBehavior.NavMeshPathfindingObstacleBehavior.prototype.SetCellSizeContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__NavMeshPathfinding__NavMeshPathfindingObstacleBehavior.NavMeshPathfindingObstacleBehavior.prototype.SetCellSizeContext.GDObjectObjects2.length = 0;

gdjs.evtsExt__NavMeshPathfinding__NavMeshPathfindingObstacleBehavior.NavMeshPathfindingObstacleBehavior.prototype.SetCellSizeContext.eventsList0(runtimeScene, eventsFunctionContext);

return;
}
gdjs.evtsExt__NavMeshPathfinding__NavMeshPathfindingObstacleBehavior.NavMeshPathfindingObstacleBehavior.prototype.AreaLeftBoundContext = {};
gdjs.evtsExt__NavMeshPathfinding__NavMeshPathfindingObstacleBehavior.NavMeshPathfindingObstacleBehavior.prototype.AreaLeftBoundContext.GDObjectObjects1= [];
gdjs.evtsExt__NavMeshPathfinding__NavMeshPathfindingObstacleBehavior.NavMeshPathfindingObstacleBehavior.prototype.AreaLeftBoundContext.GDObjectObjects2= [];


gdjs.evtsExt__NavMeshPathfinding__NavMeshPathfindingObstacleBehavior.NavMeshPathfindingObstacleBehavior.prototype.AreaLeftBoundContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
{
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__NavMeshPathfinding__NavMeshPathfindingObstacleBehavior.NavMeshPathfindingObstacleBehavior.prototype.AreaLeftBoundContext.GDObjectObjects1);
{if (typeof eventsFunctionContext !== 'undefined') { eventsFunctionContext.returnValue = (( gdjs.evtsExt__NavMeshPathfinding__NavMeshPathfindingObstacleBehavior.NavMeshPathfindingObstacleBehavior.prototype.AreaLeftBoundContext.GDObjectObjects1.length === 0 ) ? 0 :gdjs.evtsExt__NavMeshPathfinding__NavMeshPathfindingObstacleBehavior.NavMeshPathfindingObstacleBehavior.prototype.AreaLeftBoundContext.GDObjectObjects1[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._sharedData._getAreaLeftBound()); }}}

}


};

gdjs.evtsExt__NavMeshPathfinding__NavMeshPathfindingObstacleBehavior.NavMeshPathfindingObstacleBehavior.prototype.AreaLeftBound = function(parentEventsFunctionContext) {

var that = this;
var runtimeScene = this._runtimeScene;
var thisObjectList = [this.owner];
var Object = Hashtable.newFrom({Object: thisObjectList});
var Behavior = this.name;
var eventsFunctionContext = {
  _objectsMap: {
"Object": Object
},
  _objectArraysMap: {
"Object": thisObjectList
},
  _behaviorNamesMap: {
"Behavior": Behavior
},
  globalVariablesForExtension: runtimeScene.getGame().getVariablesForExtension("NavMeshPathfinding"),
  sceneVariablesForExtension: runtimeScene.getScene().getVariablesForExtension("NavMeshPathfinding"),
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
  getOnceTriggers: function() { return that._onceTriggers; }
};

gdjs.evtsExt__NavMeshPathfinding__NavMeshPathfindingObstacleBehavior.NavMeshPathfindingObstacleBehavior.prototype.AreaLeftBoundContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__NavMeshPathfinding__NavMeshPathfindingObstacleBehavior.NavMeshPathfindingObstacleBehavior.prototype.AreaLeftBoundContext.GDObjectObjects2.length = 0;

gdjs.evtsExt__NavMeshPathfinding__NavMeshPathfindingObstacleBehavior.NavMeshPathfindingObstacleBehavior.prototype.AreaLeftBoundContext.eventsList0(runtimeScene, eventsFunctionContext);

return Number(eventsFunctionContext.returnValue) || 0;
}
gdjs.evtsExt__NavMeshPathfinding__NavMeshPathfindingObstacleBehavior.NavMeshPathfindingObstacleBehavior.prototype.SetAreaLeftBoundContext = {};
gdjs.evtsExt__NavMeshPathfinding__NavMeshPathfindingObstacleBehavior.NavMeshPathfindingObstacleBehavior.prototype.SetAreaLeftBoundContext.GDObjectObjects1= [];
gdjs.evtsExt__NavMeshPathfinding__NavMeshPathfindingObstacleBehavior.NavMeshPathfindingObstacleBehavior.prototype.SetAreaLeftBoundContext.GDObjectObjects2= [];


gdjs.evtsExt__NavMeshPathfinding__NavMeshPathfindingObstacleBehavior.NavMeshPathfindingObstacleBehavior.prototype.SetAreaLeftBoundContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
{
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__NavMeshPathfinding__NavMeshPathfindingObstacleBehavior.NavMeshPathfindingObstacleBehavior.prototype.SetAreaLeftBoundContext.GDObjectObjects1);
{for(var i = 0, len = gdjs.evtsExt__NavMeshPathfinding__NavMeshPathfindingObstacleBehavior.NavMeshPathfindingObstacleBehavior.prototype.SetAreaLeftBoundContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__NavMeshPathfinding__NavMeshPathfindingObstacleBehavior.NavMeshPathfindingObstacleBehavior.prototype.SetAreaLeftBoundContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._sharedData._setAreaLeftBound((typeof eventsFunctionContext !== 'undefined' ? Number(eventsFunctionContext.getArgument("Value")) || 0 : 0));
}
}{for(var i = 0, len = gdjs.evtsExt__NavMeshPathfinding__NavMeshPathfindingObstacleBehavior.NavMeshPathfindingObstacleBehavior.prototype.SetAreaLeftBoundContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__NavMeshPathfinding__NavMeshPathfindingObstacleBehavior.NavMeshPathfindingObstacleBehavior.prototype.SetAreaLeftBoundContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior")).InvalidateNavMesh((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}}

}


};

gdjs.evtsExt__NavMeshPathfinding__NavMeshPathfindingObstacleBehavior.NavMeshPathfindingObstacleBehavior.prototype.SetAreaLeftBound = function(Value, parentEventsFunctionContext) {

var that = this;
var runtimeScene = this._runtimeScene;
var thisObjectList = [this.owner];
var Object = Hashtable.newFrom({Object: thisObjectList});
var Behavior = this.name;
var eventsFunctionContext = {
  _objectsMap: {
"Object": Object
},
  _objectArraysMap: {
"Object": thisObjectList
},
  _behaviorNamesMap: {
"Behavior": Behavior
},
  globalVariablesForExtension: runtimeScene.getGame().getVariablesForExtension("NavMeshPathfinding"),
  sceneVariablesForExtension: runtimeScene.getScene().getVariablesForExtension("NavMeshPathfinding"),
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
if (argName === "Value") return Value;
    return "";
  },
  getOnceTriggers: function() { return that._onceTriggers; }
};

gdjs.evtsExt__NavMeshPathfinding__NavMeshPathfindingObstacleBehavior.NavMeshPathfindingObstacleBehavior.prototype.SetAreaLeftBoundContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__NavMeshPathfinding__NavMeshPathfindingObstacleBehavior.NavMeshPathfindingObstacleBehavior.prototype.SetAreaLeftBoundContext.GDObjectObjects2.length = 0;

gdjs.evtsExt__NavMeshPathfinding__NavMeshPathfindingObstacleBehavior.NavMeshPathfindingObstacleBehavior.prototype.SetAreaLeftBoundContext.eventsList0(runtimeScene, eventsFunctionContext);

return;
}
gdjs.evtsExt__NavMeshPathfinding__NavMeshPathfindingObstacleBehavior.NavMeshPathfindingObstacleBehavior.prototype.AreaTopBoundContext = {};
gdjs.evtsExt__NavMeshPathfinding__NavMeshPathfindingObstacleBehavior.NavMeshPathfindingObstacleBehavior.prototype.AreaTopBoundContext.GDObjectObjects1= [];
gdjs.evtsExt__NavMeshPathfinding__NavMeshPathfindingObstacleBehavior.NavMeshPathfindingObstacleBehavior.prototype.AreaTopBoundContext.GDObjectObjects2= [];


gdjs.evtsExt__NavMeshPathfinding__NavMeshPathfindingObstacleBehavior.NavMeshPathfindingObstacleBehavior.prototype.AreaTopBoundContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
{
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__NavMeshPathfinding__NavMeshPathfindingObstacleBehavior.NavMeshPathfindingObstacleBehavior.prototype.AreaTopBoundContext.GDObjectObjects1);
{if (typeof eventsFunctionContext !== 'undefined') { eventsFunctionContext.returnValue = (( gdjs.evtsExt__NavMeshPathfinding__NavMeshPathfindingObstacleBehavior.NavMeshPathfindingObstacleBehavior.prototype.AreaTopBoundContext.GDObjectObjects1.length === 0 ) ? 0 :gdjs.evtsExt__NavMeshPathfinding__NavMeshPathfindingObstacleBehavior.NavMeshPathfindingObstacleBehavior.prototype.AreaTopBoundContext.GDObjectObjects1[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._sharedData._getAreaTopBound()); }}}

}


};

gdjs.evtsExt__NavMeshPathfinding__NavMeshPathfindingObstacleBehavior.NavMeshPathfindingObstacleBehavior.prototype.AreaTopBound = function(parentEventsFunctionContext) {

var that = this;
var runtimeScene = this._runtimeScene;
var thisObjectList = [this.owner];
var Object = Hashtable.newFrom({Object: thisObjectList});
var Behavior = this.name;
var eventsFunctionContext = {
  _objectsMap: {
"Object": Object
},
  _objectArraysMap: {
"Object": thisObjectList
},
  _behaviorNamesMap: {
"Behavior": Behavior
},
  globalVariablesForExtension: runtimeScene.getGame().getVariablesForExtension("NavMeshPathfinding"),
  sceneVariablesForExtension: runtimeScene.getScene().getVariablesForExtension("NavMeshPathfinding"),
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
  getOnceTriggers: function() { return that._onceTriggers; }
};

gdjs.evtsExt__NavMeshPathfinding__NavMeshPathfindingObstacleBehavior.NavMeshPathfindingObstacleBehavior.prototype.AreaTopBoundContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__NavMeshPathfinding__NavMeshPathfindingObstacleBehavior.NavMeshPathfindingObstacleBehavior.prototype.AreaTopBoundContext.GDObjectObjects2.length = 0;

gdjs.evtsExt__NavMeshPathfinding__NavMeshPathfindingObstacleBehavior.NavMeshPathfindingObstacleBehavior.prototype.AreaTopBoundContext.eventsList0(runtimeScene, eventsFunctionContext);

return Number(eventsFunctionContext.returnValue) || 0;
}
gdjs.evtsExt__NavMeshPathfinding__NavMeshPathfindingObstacleBehavior.NavMeshPathfindingObstacleBehavior.prototype.SetAreaTopBoundContext = {};
gdjs.evtsExt__NavMeshPathfinding__NavMeshPathfindingObstacleBehavior.NavMeshPathfindingObstacleBehavior.prototype.SetAreaTopBoundContext.GDObjectObjects1= [];
gdjs.evtsExt__NavMeshPathfinding__NavMeshPathfindingObstacleBehavior.NavMeshPathfindingObstacleBehavior.prototype.SetAreaTopBoundContext.GDObjectObjects2= [];


gdjs.evtsExt__NavMeshPathfinding__NavMeshPathfindingObstacleBehavior.NavMeshPathfindingObstacleBehavior.prototype.SetAreaTopBoundContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
{
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__NavMeshPathfinding__NavMeshPathfindingObstacleBehavior.NavMeshPathfindingObstacleBehavior.prototype.SetAreaTopBoundContext.GDObjectObjects1);
{for(var i = 0, len = gdjs.evtsExt__NavMeshPathfinding__NavMeshPathfindingObstacleBehavior.NavMeshPathfindingObstacleBehavior.prototype.SetAreaTopBoundContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__NavMeshPathfinding__NavMeshPathfindingObstacleBehavior.NavMeshPathfindingObstacleBehavior.prototype.SetAreaTopBoundContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._sharedData._setAreaTopBound((typeof eventsFunctionContext !== 'undefined' ? Number(eventsFunctionContext.getArgument("Value")) || 0 : 0));
}
}{for(var i = 0, len = gdjs.evtsExt__NavMeshPathfinding__NavMeshPathfindingObstacleBehavior.NavMeshPathfindingObstacleBehavior.prototype.SetAreaTopBoundContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__NavMeshPathfinding__NavMeshPathfindingObstacleBehavior.NavMeshPathfindingObstacleBehavior.prototype.SetAreaTopBoundContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior")).InvalidateNavMesh((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}}

}


};

gdjs.evtsExt__NavMeshPathfinding__NavMeshPathfindingObstacleBehavior.NavMeshPathfindingObstacleBehavior.prototype.SetAreaTopBound = function(Value, parentEventsFunctionContext) {

var that = this;
var runtimeScene = this._runtimeScene;
var thisObjectList = [this.owner];
var Object = Hashtable.newFrom({Object: thisObjectList});
var Behavior = this.name;
var eventsFunctionContext = {
  _objectsMap: {
"Object": Object
},
  _objectArraysMap: {
"Object": thisObjectList
},
  _behaviorNamesMap: {
"Behavior": Behavior
},
  globalVariablesForExtension: runtimeScene.getGame().getVariablesForExtension("NavMeshPathfinding"),
  sceneVariablesForExtension: runtimeScene.getScene().getVariablesForExtension("NavMeshPathfinding"),
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
if (argName === "Value") return Value;
    return "";
  },
  getOnceTriggers: function() { return that._onceTriggers; }
};

gdjs.evtsExt__NavMeshPathfinding__NavMeshPathfindingObstacleBehavior.NavMeshPathfindingObstacleBehavior.prototype.SetAreaTopBoundContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__NavMeshPathfinding__NavMeshPathfindingObstacleBehavior.NavMeshPathfindingObstacleBehavior.prototype.SetAreaTopBoundContext.GDObjectObjects2.length = 0;

gdjs.evtsExt__NavMeshPathfinding__NavMeshPathfindingObstacleBehavior.NavMeshPathfindingObstacleBehavior.prototype.SetAreaTopBoundContext.eventsList0(runtimeScene, eventsFunctionContext);

return;
}
gdjs.evtsExt__NavMeshPathfinding__NavMeshPathfindingObstacleBehavior.NavMeshPathfindingObstacleBehavior.prototype.AreaRightBoundContext = {};
gdjs.evtsExt__NavMeshPathfinding__NavMeshPathfindingObstacleBehavior.NavMeshPathfindingObstacleBehavior.prototype.AreaRightBoundContext.GDObjectObjects1= [];
gdjs.evtsExt__NavMeshPathfinding__NavMeshPathfindingObstacleBehavior.NavMeshPathfindingObstacleBehavior.prototype.AreaRightBoundContext.GDObjectObjects2= [];


gdjs.evtsExt__NavMeshPathfinding__NavMeshPathfindingObstacleBehavior.NavMeshPathfindingObstacleBehavior.prototype.AreaRightBoundContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
{
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__NavMeshPathfinding__NavMeshPathfindingObstacleBehavior.NavMeshPathfindingObstacleBehavior.prototype.AreaRightBoundContext.GDObjectObjects1);
{if (typeof eventsFunctionContext !== 'undefined') { eventsFunctionContext.returnValue = (( gdjs.evtsExt__NavMeshPathfinding__NavMeshPathfindingObstacleBehavior.NavMeshPathfindingObstacleBehavior.prototype.AreaRightBoundContext.GDObjectObjects1.length === 0 ) ? 0 :gdjs.evtsExt__NavMeshPathfinding__NavMeshPathfindingObstacleBehavior.NavMeshPathfindingObstacleBehavior.prototype.AreaRightBoundContext.GDObjectObjects1[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._sharedData._getAreaRightBound()); }}}

}


};

gdjs.evtsExt__NavMeshPathfinding__NavMeshPathfindingObstacleBehavior.NavMeshPathfindingObstacleBehavior.prototype.AreaRightBound = function(parentEventsFunctionContext) {

var that = this;
var runtimeScene = this._runtimeScene;
var thisObjectList = [this.owner];
var Object = Hashtable.newFrom({Object: thisObjectList});
var Behavior = this.name;
var eventsFunctionContext = {
  _objectsMap: {
"Object": Object
},
  _objectArraysMap: {
"Object": thisObjectList
},
  _behaviorNamesMap: {
"Behavior": Behavior
},
  globalVariablesForExtension: runtimeScene.getGame().getVariablesForExtension("NavMeshPathfinding"),
  sceneVariablesForExtension: runtimeScene.getScene().getVariablesForExtension("NavMeshPathfinding"),
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
  getOnceTriggers: function() { return that._onceTriggers; }
};

gdjs.evtsExt__NavMeshPathfinding__NavMeshPathfindingObstacleBehavior.NavMeshPathfindingObstacleBehavior.prototype.AreaRightBoundContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__NavMeshPathfinding__NavMeshPathfindingObstacleBehavior.NavMeshPathfindingObstacleBehavior.prototype.AreaRightBoundContext.GDObjectObjects2.length = 0;

gdjs.evtsExt__NavMeshPathfinding__NavMeshPathfindingObstacleBehavior.NavMeshPathfindingObstacleBehavior.prototype.AreaRightBoundContext.eventsList0(runtimeScene, eventsFunctionContext);

return Number(eventsFunctionContext.returnValue) || 0;
}
gdjs.evtsExt__NavMeshPathfinding__NavMeshPathfindingObstacleBehavior.NavMeshPathfindingObstacleBehavior.prototype.SetAreaRightBoundContext = {};
gdjs.evtsExt__NavMeshPathfinding__NavMeshPathfindingObstacleBehavior.NavMeshPathfindingObstacleBehavior.prototype.SetAreaRightBoundContext.GDObjectObjects1= [];
gdjs.evtsExt__NavMeshPathfinding__NavMeshPathfindingObstacleBehavior.NavMeshPathfindingObstacleBehavior.prototype.SetAreaRightBoundContext.GDObjectObjects2= [];


gdjs.evtsExt__NavMeshPathfinding__NavMeshPathfindingObstacleBehavior.NavMeshPathfindingObstacleBehavior.prototype.SetAreaRightBoundContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
{
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__NavMeshPathfinding__NavMeshPathfindingObstacleBehavior.NavMeshPathfindingObstacleBehavior.prototype.SetAreaRightBoundContext.GDObjectObjects1);
{for(var i = 0, len = gdjs.evtsExt__NavMeshPathfinding__NavMeshPathfindingObstacleBehavior.NavMeshPathfindingObstacleBehavior.prototype.SetAreaRightBoundContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__NavMeshPathfinding__NavMeshPathfindingObstacleBehavior.NavMeshPathfindingObstacleBehavior.prototype.SetAreaRightBoundContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._sharedData._setAreaRightBound((typeof eventsFunctionContext !== 'undefined' ? Number(eventsFunctionContext.getArgument("Value")) || 0 : 0));
}
}{for(var i = 0, len = gdjs.evtsExt__NavMeshPathfinding__NavMeshPathfindingObstacleBehavior.NavMeshPathfindingObstacleBehavior.prototype.SetAreaRightBoundContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__NavMeshPathfinding__NavMeshPathfindingObstacleBehavior.NavMeshPathfindingObstacleBehavior.prototype.SetAreaRightBoundContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior")).InvalidateNavMesh((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}}

}


};

gdjs.evtsExt__NavMeshPathfinding__NavMeshPathfindingObstacleBehavior.NavMeshPathfindingObstacleBehavior.prototype.SetAreaRightBound = function(Value, parentEventsFunctionContext) {

var that = this;
var runtimeScene = this._runtimeScene;
var thisObjectList = [this.owner];
var Object = Hashtable.newFrom({Object: thisObjectList});
var Behavior = this.name;
var eventsFunctionContext = {
  _objectsMap: {
"Object": Object
},
  _objectArraysMap: {
"Object": thisObjectList
},
  _behaviorNamesMap: {
"Behavior": Behavior
},
  globalVariablesForExtension: runtimeScene.getGame().getVariablesForExtension("NavMeshPathfinding"),
  sceneVariablesForExtension: runtimeScene.getScene().getVariablesForExtension("NavMeshPathfinding"),
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
if (argName === "Value") return Value;
    return "";
  },
  getOnceTriggers: function() { return that._onceTriggers; }
};

gdjs.evtsExt__NavMeshPathfinding__NavMeshPathfindingObstacleBehavior.NavMeshPathfindingObstacleBehavior.prototype.SetAreaRightBoundContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__NavMeshPathfinding__NavMeshPathfindingObstacleBehavior.NavMeshPathfindingObstacleBehavior.prototype.SetAreaRightBoundContext.GDObjectObjects2.length = 0;

gdjs.evtsExt__NavMeshPathfinding__NavMeshPathfindingObstacleBehavior.NavMeshPathfindingObstacleBehavior.prototype.SetAreaRightBoundContext.eventsList0(runtimeScene, eventsFunctionContext);

return;
}
gdjs.evtsExt__NavMeshPathfinding__NavMeshPathfindingObstacleBehavior.NavMeshPathfindingObstacleBehavior.prototype.AreaBottomBoundContext = {};
gdjs.evtsExt__NavMeshPathfinding__NavMeshPathfindingObstacleBehavior.NavMeshPathfindingObstacleBehavior.prototype.AreaBottomBoundContext.GDObjectObjects1= [];
gdjs.evtsExt__NavMeshPathfinding__NavMeshPathfindingObstacleBehavior.NavMeshPathfindingObstacleBehavior.prototype.AreaBottomBoundContext.GDObjectObjects2= [];


gdjs.evtsExt__NavMeshPathfinding__NavMeshPathfindingObstacleBehavior.NavMeshPathfindingObstacleBehavior.prototype.AreaBottomBoundContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
{
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__NavMeshPathfinding__NavMeshPathfindingObstacleBehavior.NavMeshPathfindingObstacleBehavior.prototype.AreaBottomBoundContext.GDObjectObjects1);
{if (typeof eventsFunctionContext !== 'undefined') { eventsFunctionContext.returnValue = (( gdjs.evtsExt__NavMeshPathfinding__NavMeshPathfindingObstacleBehavior.NavMeshPathfindingObstacleBehavior.prototype.AreaBottomBoundContext.GDObjectObjects1.length === 0 ) ? 0 :gdjs.evtsExt__NavMeshPathfinding__NavMeshPathfindingObstacleBehavior.NavMeshPathfindingObstacleBehavior.prototype.AreaBottomBoundContext.GDObjectObjects1[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._sharedData._getAreaBottomBound()); }}}

}


};

gdjs.evtsExt__NavMeshPathfinding__NavMeshPathfindingObstacleBehavior.NavMeshPathfindingObstacleBehavior.prototype.AreaBottomBound = function(parentEventsFunctionContext) {

var that = this;
var runtimeScene = this._runtimeScene;
var thisObjectList = [this.owner];
var Object = Hashtable.newFrom({Object: thisObjectList});
var Behavior = this.name;
var eventsFunctionContext = {
  _objectsMap: {
"Object": Object
},
  _objectArraysMap: {
"Object": thisObjectList
},
  _behaviorNamesMap: {
"Behavior": Behavior
},
  globalVariablesForExtension: runtimeScene.getGame().getVariablesForExtension("NavMeshPathfinding"),
  sceneVariablesForExtension: runtimeScene.getScene().getVariablesForExtension("NavMeshPathfinding"),
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
  getOnceTriggers: function() { return that._onceTriggers; }
};

gdjs.evtsExt__NavMeshPathfinding__NavMeshPathfindingObstacleBehavior.NavMeshPathfindingObstacleBehavior.prototype.AreaBottomBoundContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__NavMeshPathfinding__NavMeshPathfindingObstacleBehavior.NavMeshPathfindingObstacleBehavior.prototype.AreaBottomBoundContext.GDObjectObjects2.length = 0;

gdjs.evtsExt__NavMeshPathfinding__NavMeshPathfindingObstacleBehavior.NavMeshPathfindingObstacleBehavior.prototype.AreaBottomBoundContext.eventsList0(runtimeScene, eventsFunctionContext);

return Number(eventsFunctionContext.returnValue) || 0;
}
gdjs.evtsExt__NavMeshPathfinding__NavMeshPathfindingObstacleBehavior.NavMeshPathfindingObstacleBehavior.prototype.SetAreaBottomBoundContext = {};
gdjs.evtsExt__NavMeshPathfinding__NavMeshPathfindingObstacleBehavior.NavMeshPathfindingObstacleBehavior.prototype.SetAreaBottomBoundContext.GDObjectObjects1= [];
gdjs.evtsExt__NavMeshPathfinding__NavMeshPathfindingObstacleBehavior.NavMeshPathfindingObstacleBehavior.prototype.SetAreaBottomBoundContext.GDObjectObjects2= [];


gdjs.evtsExt__NavMeshPathfinding__NavMeshPathfindingObstacleBehavior.NavMeshPathfindingObstacleBehavior.prototype.SetAreaBottomBoundContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
{
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__NavMeshPathfinding__NavMeshPathfindingObstacleBehavior.NavMeshPathfindingObstacleBehavior.prototype.SetAreaBottomBoundContext.GDObjectObjects1);
{for(var i = 0, len = gdjs.evtsExt__NavMeshPathfinding__NavMeshPathfindingObstacleBehavior.NavMeshPathfindingObstacleBehavior.prototype.SetAreaBottomBoundContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__NavMeshPathfinding__NavMeshPathfindingObstacleBehavior.NavMeshPathfindingObstacleBehavior.prototype.SetAreaBottomBoundContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._sharedData._setAreaBottomBound((typeof eventsFunctionContext !== 'undefined' ? Number(eventsFunctionContext.getArgument("Value")) || 0 : 0));
}
}{for(var i = 0, len = gdjs.evtsExt__NavMeshPathfinding__NavMeshPathfindingObstacleBehavior.NavMeshPathfindingObstacleBehavior.prototype.SetAreaBottomBoundContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__NavMeshPathfinding__NavMeshPathfindingObstacleBehavior.NavMeshPathfindingObstacleBehavior.prototype.SetAreaBottomBoundContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior")).InvalidateNavMesh((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}}

}


};

gdjs.evtsExt__NavMeshPathfinding__NavMeshPathfindingObstacleBehavior.NavMeshPathfindingObstacleBehavior.prototype.SetAreaBottomBound = function(Value, parentEventsFunctionContext) {

var that = this;
var runtimeScene = this._runtimeScene;
var thisObjectList = [this.owner];
var Object = Hashtable.newFrom({Object: thisObjectList});
var Behavior = this.name;
var eventsFunctionContext = {
  _objectsMap: {
"Object": Object
},
  _objectArraysMap: {
"Object": thisObjectList
},
  _behaviorNamesMap: {
"Behavior": Behavior
},
  globalVariablesForExtension: runtimeScene.getGame().getVariablesForExtension("NavMeshPathfinding"),
  sceneVariablesForExtension: runtimeScene.getScene().getVariablesForExtension("NavMeshPathfinding"),
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
if (argName === "Value") return Value;
    return "";
  },
  getOnceTriggers: function() { return that._onceTriggers; }
};

gdjs.evtsExt__NavMeshPathfinding__NavMeshPathfindingObstacleBehavior.NavMeshPathfindingObstacleBehavior.prototype.SetAreaBottomBoundContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__NavMeshPathfinding__NavMeshPathfindingObstacleBehavior.NavMeshPathfindingObstacleBehavior.prototype.SetAreaBottomBoundContext.GDObjectObjects2.length = 0;

gdjs.evtsExt__NavMeshPathfinding__NavMeshPathfindingObstacleBehavior.NavMeshPathfindingObstacleBehavior.prototype.SetAreaBottomBoundContext.eventsList0(runtimeScene, eventsFunctionContext);

return;
}
gdjs.evtsExt__NavMeshPathfinding__NavMeshPathfindingObstacleBehavior.NavMeshPathfindingObstacleBehavior.prototype.InvalidateNavMeshContext = {};
gdjs.evtsExt__NavMeshPathfinding__NavMeshPathfindingObstacleBehavior.NavMeshPathfindingObstacleBehavior.prototype.InvalidateNavMeshContext.GDObjectObjects1= [];


gdjs.evtsExt__NavMeshPathfinding__NavMeshPathfindingObstacleBehavior.NavMeshPathfindingObstacleBehavior.prototype.InvalidateNavMeshContext.userFunc0x8ae078 = function GDJSInlineCode(runtimeScene, objects, eventsFunctionContext) {
"use strict";
const object = objects[0];
const behaviorName = eventsFunctionContext.getBehaviorName("Behavior");
const behavior = object.getBehavior(behaviorName);

eventsFunctionContext.returnValue = behavior.__NavMeshPathfinding.obstacle._manager.invalidateNavMesh();

};
gdjs.evtsExt__NavMeshPathfinding__NavMeshPathfindingObstacleBehavior.NavMeshPathfindingObstacleBehavior.prototype.InvalidateNavMeshContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__NavMeshPathfinding__NavMeshPathfindingObstacleBehavior.NavMeshPathfindingObstacleBehavior.prototype.InvalidateNavMeshContext.GDObjectObjects1);

var objects = [];
objects.push.apply(objects,gdjs.evtsExt__NavMeshPathfinding__NavMeshPathfindingObstacleBehavior.NavMeshPathfindingObstacleBehavior.prototype.InvalidateNavMeshContext.GDObjectObjects1);
gdjs.evtsExt__NavMeshPathfinding__NavMeshPathfindingObstacleBehavior.NavMeshPathfindingObstacleBehavior.prototype.InvalidateNavMeshContext.userFunc0x8ae078(runtimeScene, objects, typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined);

}


};

gdjs.evtsExt__NavMeshPathfinding__NavMeshPathfindingObstacleBehavior.NavMeshPathfindingObstacleBehavior.prototype.InvalidateNavMesh = function(parentEventsFunctionContext) {

var that = this;
var runtimeScene = this._runtimeScene;
var thisObjectList = [this.owner];
var Object = Hashtable.newFrom({Object: thisObjectList});
var Behavior = this.name;
var eventsFunctionContext = {
  _objectsMap: {
"Object": Object
},
  _objectArraysMap: {
"Object": thisObjectList
},
  _behaviorNamesMap: {
"Behavior": Behavior
},
  globalVariablesForExtension: runtimeScene.getGame().getVariablesForExtension("NavMeshPathfinding"),
  sceneVariablesForExtension: runtimeScene.getScene().getVariablesForExtension("NavMeshPathfinding"),
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
  getOnceTriggers: function() { return that._onceTriggers; }
};

gdjs.evtsExt__NavMeshPathfinding__NavMeshPathfindingObstacleBehavior.NavMeshPathfindingObstacleBehavior.prototype.InvalidateNavMeshContext.GDObjectObjects1.length = 0;

gdjs.evtsExt__NavMeshPathfinding__NavMeshPathfindingObstacleBehavior.NavMeshPathfindingObstacleBehavior.prototype.InvalidateNavMeshContext.eventsList0(runtimeScene, eventsFunctionContext);

return;
}


gdjs.registerBehavior("NavMeshPathfinding::NavMeshPathfindingObstacleBehavior", gdjs.evtsExt__NavMeshPathfinding__NavMeshPathfindingObstacleBehavior.NavMeshPathfindingObstacleBehavior);
