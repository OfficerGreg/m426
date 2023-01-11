# m426
m426 sprint 1

## requirements:

  - SQL
  - maven
  - java
  - npm


## installation:

  - In the application.properties file change the **username**, **password** and **database** to match your SQL.
   ![application-properties](https://user-images.githubusercontent.com/73076485/211749186-1cc55b27-2f1f-437b-8f65-c46959ad580a.png)
  
  - Start the backend with **mvn spring-boot:run** to generate the SQL tables
  - Insert the following roles into your backend:
        
        
        INSERT INTO roles(name) VALUES('ROLE_USER');
        INSERT INTO roles(name) VALUES('ROLE_ADMIN');
        
        
  - Install the required frontennd dependencies with the command **npm install**
  - Run the frontend with **npm start**
       

 
