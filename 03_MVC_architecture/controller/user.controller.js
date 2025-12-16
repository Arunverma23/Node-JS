import { userList } from "../model/user.model.js"

export function handleUsers(req, res) {
    const userData = userList()
    console.log(userData);

    res.render('user', {users:userData,name:'Arun'})
}
