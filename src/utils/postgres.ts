import { Pool, PoolClient } from "pg";


const pool:Pool = new Pool({
    connectionString: "postgres://postgres:abbos@localhost:5432/users_db"
})

const fetchAll = async(SQL:string , ...params: any[]) => {
    const client:PoolClient = await pool.connect()
    try {
        const {rows} = await client.query(SQL, params)
        return rows
    } catch (error) {
        console.log(error);
        
    }finally{
        client.release()
    }
}



export {
    fetchAll,
}