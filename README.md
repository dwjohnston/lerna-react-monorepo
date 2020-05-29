# lerna-react-monorepo

Check out the different branches for different approaches to this problem. 

## Instructions 

```
npm i 
./node_modules/.bin/lerna bootstrap 
cd packages/react-dep && npm run build 
cd ../main && npm start
```

You will get an `Invalid hook call` error - which is because there are two versions of react around. 

https://github.com/facebook/react/issues/14257#issuecomment-508808246

The problem is that the `react-dep` code is using its own version of react, rather than using the version in `main`. 
