## Lecture-02 : Here we will create our own react APP

- Make your app ready to deploy to production such as minify, bundling etc.
- When you create the directly create-react-app it gives you basic `APP` which is already production ready does all the work such as bundling etc. Here we will do it by our own.
# NPM: Standard repository for all the packages and it's abbrevation is not node package manager :)
## Steps to create your own React App
   ### STEP-1: npm init (It will ask you few questions)
   * Once you fill all the details in npm init, you will see package.json is created
   * (package.json) is the configuration of npm

   ### STEP-2: npm install -D parcel .

   * There are two types of `dependencies` one is the dev dependency and one is the normal dependency, when we are developing we need dev dependency. Parcel will do chunking, bundle and we are doing this in development phase so we are using dev dependency.
   * After doing this, node modules folder and package.lock.json is created and in the package.json you will see parcel as dev dependency.
   * `carat(^, minor upgrade)` and `tilde(~, major upgrade)` in package.json .
   * package.lock.json locks the version means it tracks the exact version of package installed. for example currently package.json has ^2.8.3 and in future 2.8.5 version is installed so in package.lock.json will show 2.8.5 and in package.json will remain ^2.8.3 .
   * `(integrity)` : sha512- it stores the hash so that in production same version/hash of the package would be installed.

   ### STEP-3: npx parcel index.html , this will create a local server. npx is execute a package.

   ### STEP-4: npm install react
   ### STEP-5: npm install react-dom
    
* Transitive dependencies 
* Create .gitignore file and put node_modules in that so that git will not track node_modules as we don't want to push this on production.
* With the package.json and package.lock.json we can recreate node_modules by just writing npm install   
* So this is an another way to get React into our APP through npm. It means without using create-react-app we can include React in our project
* We have installed React in our project to use it we need to import from node_modules.
* when we import react and react-dom we will get error (browser scripts doesnot allow import or export) this is because we include app.js as a script so we need to change its type to module.
## Parcel Feature:
* Dev Build
* Local server
* HMR= Hot Module Replacement( when we make changes we don't need to refresh webpage so this is done by HMR)
* File Watching Alogorithm (written in c++)
* Caching - Faster Builds
* Image optimization
* Minification
* Bundling
* Compress
* Consistent Hashing
* Code Splitting
* Differential Bundling -  support older browsers
* Diagnostic
* Error Handling
* You can host your app on HTTPS
* Tree Shaking - Remove unused Code
* Different dev and prod bundles

  - All these will help you in system design interview

  - .parcel-cache and dist folder is created which caches the data

## Question: How to create your own create-react-app?
## Question: What is bundler (Parcel,webpack) Explain it's features.
