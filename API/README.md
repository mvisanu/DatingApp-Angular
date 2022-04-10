# DatingApp

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
