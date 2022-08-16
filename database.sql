CREATE DATABASE node_login;

-- create a table for users
CREATE TABLE users
(
    user_id SERIAL PRIMARY KEY,
    firstname VARCHAR(50) NOT NULL,
    lastname VARCHAR(50) NOT NULL,
    email VARCHAR(100) NOT NULL UNIQUE,
    phone VARCHAR(100) NOT NULL,
    password VARCHAR(200) NOT NULL
);

-- insert a fake user
INSERT INTO users
    (firstname, lastname, email, phone, password)
VALUES
    ('Meheen', 'Zafar', 'mehru123@gmail.com', '03180566415', 'mehru123');

-- view all users in the users table
SELECT *
FROM users;

-- view a single user from the users table
SELECT *
FROM users
WHERE email ='mehru123@gmail.com';

-- clear the entire table
TRUNCATE TABLE users;

-- delete the entire table
DROP TABLE users