# lerna-react-monorepo

**Instructions**

```
yarn bootstrap
yarn build
cd packages/main
yarn start
```

You will get an invalid hook call - because two instances of React exist. 


Tried seeing if yarn deals with peerDependencies better. 

I might not have configured this properly, but from the searching I've done, it looks like yarn has the same problem with peer dependencies. 
