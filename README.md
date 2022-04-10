# DatingApp-Angular

Dating App ASP.net core and Angular

--Creating donet webapi from command line
dotnet new sln
dotnet new webapi -o API --framework net5.0
dotnet sln add API

file preference settings 
hide object and bin folder
type exclude
**/obj
**/bin

trust cert
 dotnet dev-certs https --trust

--allow rebuild when file change
 dotnet watch run

 microsoft.entityframeworkcore sqlite

 https://www.nuget.org/packages/dotnet-ef/6.0.3
dotnet tool install --global dotnet-ef --version 6.0.3

dotnet ef migrations add IntialCreate -o Data/Migrations
dotnet ef database update

--- install Angular version 12 or 13
Angular.io
npm install -g @angular/cli@12
ng --version
ng new client --strict false
-- to run
ng serve 

--Create http get for users
ng generate service user
https://www.angularjswiki.com/httpclient/get/

--Add Boostrap
https://www.itsolutionstuff.com/post/how-to-add-bootstrap-5-in-angular-12example.html
npm install bootstrap --save
npm install jquery --save
npm install popper.js --save

angular.json
....
      "styles": [
        "node_modules/bootstrap/dist/css/bootstrap.min.css",
        "src/styles.css"
      ],
      "scripts": [
          "node_modules/jquery/dist/jquery.min.js",
          "node_modules/bootstrap/dist/js/bootstrap.min.js"
      ]
.....

npm install font-awesome

https://valor-software.com/ngx-bootstrap/#/documentation#getting-started



