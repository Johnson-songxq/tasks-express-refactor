# tasks-express-refactor
This project refactors the 'tasks project' in more formal structure:

-- package.json  
-- package-lock.json  
-- node_modules  
-- .env (environment variable file)  
-- config (another type of environment variable management)  
-- other configuration files  
-- src  
|-- index.js entry file  
|-- server.js / app.js (may be the entry file)    
|-- routes (route directory supported by our server)  
> |-- task(s).js (tasks.router.js)  
  |-- user(s).js  
  |-- index.js(register all the routes)  
    
|-- controllers (logical handler and correlate to the data base, may also include the data validation from the front end)  
> |-- task(s).js (task.controller.js)  
|-- user(s).js  
|-- ...  

|-- models (interact with DB) CRUD, ORM(Object Relational mapping)library  
> |-- Task.js (Capital case) (Task.model.js)  
|-- User.js  
|-- ...  

|-- middleware  
> |-- cors.js  
|-- errorMiddleware  
> |-- xxxErrorHandler.js  

|-- utils (utilities)  
> |-- helper functions  
|-- db connection  
    
# Some useful packages:
- helmet
- cors
- dotenv
- cross-env
- morgan
- winston 

