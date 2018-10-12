# Installation

## 1- Server

**1. Clone the application**

```
git clone https://github.com/erkanerturk/lokumcubaba.git
```

**2. Create MySQL database**
```
Import lokumcubaba.sql
MySQL port : 3306
```

**3. Change MySQL username and password**

+ open `src/main/resources/application.properties`

+ change `spring.datasource.username` and `spring.datasource.password`

**4. Run Java Application**

The app will start running at <http://localhost:8080>


## 2- React Client

Clone this repo and go to client folder.
``` 
cd frontend
yarn install
```

### Run the app
``` 
yarn start
```

and go to <http://localhost:3000>
