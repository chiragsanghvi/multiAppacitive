This module returns a new instance of the Appacitive Javascript SDK on every include, overriding the default Singleton-like behaviour. This is achieved by clearing node's require.cache of the Appacitive module.

npm install multiappacitive

**Usage**
```javascript
//Include multiAppacitive
var multiAppacitive = require('multiappacitive');

//Get a new instance of Appacitive
var Appacitive = new multiAppacitive();

//Get another new instance of Appacitive
var otherAppacitive = new multiAppacitive();
```

After getting a new instance, you need to intialize the SDK, as we do for normal singleton behaviour.

**Example**

The only place where we may need to change the singleton behaviour of SDK is performing actions on behalf of a loggged-in user, using his user-token. 

*export.js*
```javascript
// This script will be used to setup Appacitive usertoken in the SDK, if supplied, and return a new instance of Appacitive.
// If you provide a user object then that object will be set as current user. 
// You can always fetch a user by his token and set it as current user afterwards.

var multiAppacitive = require('multiappacitive');

exports.init = function (userToken, user) {
        
        var Appacitive = new multiAppacitive();
        
        Appacitive.initialize({ 
            apikey: {apikey}, 
            env: "{env}",
            appId: "{appId}",
            userToken: userToken, 
            user: user
        });

        return Appacitive;
};

```

*sample.js*
```javascript
var app = require('./exports.js');

var userToken = "{usertoken}";

var Appacitive = app.init(userToken);	
```



