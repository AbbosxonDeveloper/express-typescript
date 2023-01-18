import {Request, Response} from 'express'

import { USERS, USER , CREATE, UPDATE, DELETE} from "./model";
import {fetchAll} from '../../utils/postgres'

const Users = async(req:Request, res:Response) => {
    try {
        const users = await fetchAll(USERS)
        
        return res.send(users)
    } catch (error) {
        console.log(error);
        
    }
}

const Create = async(req:Request, res:Response) => {
    try {
        const {username, password} = req.body
        const create = await fetchAll(CREATE, username, password)

        if(!create){
            res.status(402).send('user register error')
        }
        res.status(200).send(create)
    } catch (error) {
        console.log(error);
        
    }
}

const Update = async(req:Request, res:Response) => {
    try {
        const {user_id} = req.params
        const {username, password} = req.body
        const update = await fetchAll(UPDATE, username, password , user_id)
        if(!update){
            res.status(400).send('error at update users')
        }
        res.status(200).send('updated!')
    } catch (error) {
        console.log(error);
        
    }
}

const Delete = async(req:Request, res:Response) => {
    try {
        const {user_id} = req.params
        const deleted = await fetchAll(DELETE , user_id)
        if(!deleted){
            res.status(401).send('error at deleting user')
        }
        res.status(200).send('deleted !')
    } catch (error) {
        console.log(error);
    }
}
const User = async(req:Request, res:Response) => {
    try {
        const {user_id} = req.params
        const user = await fetchAll(USER, user_id)
        
        if(!user){
            res.send('no user found')
        }
        res.send(user)
    } catch (error) {
        console.log(error);
    }
}

export default {
    Users,
    User,
    Create,
    Update,
    Delete
}
