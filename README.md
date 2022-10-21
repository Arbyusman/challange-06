# challange-05
Repository ini ditujukan sebagai boilerplate dalam membuat sebuah HTTP Server menggunakan Express.js
Repository ini menggunakan Service Repository Pattern.

## Email & password superAdmin
```
- Email    : arby@gmail.com
- Password : P@5sW0rd!!!

```
## Run Server

To run the server in normal mode:

    yarn start

To run the server in development mode:

    yarn develop

Server will run at `http://localhost:8000` by default.

## Database Management

Di dalam repository ini sudah terdapat beberapa script yang dapat digunakan dalam memanage database, yaitu:

- `yarn db:create` digunakan untuk membuat database
- `yarn db:drop` digunakan untuk menghapus database
- `yarn db:migrate` digunakan untuk menjalankan database migration
- `yarn db:seed` digunakan untuk melakukan seeding
- `yarn db:rollback` digunakan untuk membatalkan migrasi terakhir
## DB Design
![App Screenshot](https://res.cloudinary.com/duoehn6px/image/upload/v1666351785/image/img02mwxmgcq0ljtua5s.png)

