# google oauth20 login

## Description

Core based on express generator, refactored with routes callback functionality found in the controllers directory and passport functionality found in the config dir using express sessions. Mongoose connection to atlas requires the options parameter in the mongoose.connect method, found in app.js and /test/test-helper.js. Attention dotenv required, keys neede are:

```js
//twitter app
twitter_oauth_dev_consumer_api_key=
twitter_oauth_dev_consumer_api_secret_key=

//google app
google_oauth20_dev_client_id=
google_oauth20_dev_client_secret=

// soon to be legacy, mLab was acquired by mongodb, so not using 
mlab_dev_uri=
mlab_prod_uri=

// used for test, dev, prod, but dev and prod should match as a key so actual environments hold
// 3 sets below based on string key and an options key specifically for prop replicaSet is associated with respective key
atlas_tests_clusterM0_userm001Basic_url=
atlas_tests_clusterM0_userm001Basic_replicaSet=
atlas_clusterM0_userm001Basic_url=
atlas_clusterM0_userm001Basic_replicaSet=

// arbitrary but needed to decryption of cookie session
cookie_session_key=
```

Current endponts

```js
// passport common endpoints
GET /auth/twitter
GET /auth/twitter/callback
GET /auth/google
GET /auth/google/callback

 // simple helper to see session.user info
 GET /api/get-user

 // basic usage
 GET /api/logout
 GET /home
```

- see package.json for details
