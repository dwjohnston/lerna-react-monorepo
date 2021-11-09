# lerna-react-monorepo

**Instructions**

```
yarn
yarn build
cd packages/main
yarn start
```

**Note on dependency versions** - I have dev dep set at `16.8.1` (But peer dep `^16.8.1`) for `react-dep` and `16.13.1` for main. This is to force the no hoisting behaviour, while being semvar-sound. 

You will get an invalid hook call - because two instances of React exist. 


Tried seeing if yarn deals with peerDependencies better. 

I might not have configured this properly, but from the searching I've done, it looks like yarn has the same problem with peer dependencies. 
