const USERS = `
    select * from users
`

const USER = `
    select * from users
    where user_id = $1
`

const CREATE = `
    insert into users(username, password) values
    ($1, $2) returning *
`

const UPDATE = `
    update users set
    username = $1, password = $2 
    where user_id = $3 
    returning *
`

const DELETE = `
    delete from users
    where user_id = $1
`

export {
    USERS,
    USER,
    CREATE,
    UPDATE,
    DELETE
}