# CRUD_User

Install package:
```bash
npm install
```
Set the environment variables:
```bash
cp .env.example .env

# open .env and modify the environment variables
```
Strat server
```bash
npm start
```
Use Postman to send the request.

Get all users:
```bash
[GET] locahost:3000/user/
```
Get user by Id:
```bash
[GET] localhost:3000/user/:id
```
Create an user:
```bash
[POST] localhost:3000/user/create
```
Update an user:
```bash
[PUT] localhost:3000/user/:id
```
Delete an user:
```bash
[DELETE] localhost:3000/user/:id
```
