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
[GET] locahost:3000/user/getall
```
Get user by Id:
```bash
[GET] localhost:3000/user/get/:id
```
Create an user:
```bash
[POST] localhost:3000/user/post
```
Update an user:
```bash
[PUT] localhost:3000/user/update/:id
```
Delete an user:
```bash
[DELETE] localhost:3000/user/delete/:id
```
