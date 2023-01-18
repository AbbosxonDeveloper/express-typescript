create database users_db;
\c users_db


create table users (
    user_id serial primary key,
    username varchar(30) not null,
    password varchar(20) not null
);




insert into users(username, password) values
('Abbosxon', 'abbos1'),
('Ali', 'ai28');