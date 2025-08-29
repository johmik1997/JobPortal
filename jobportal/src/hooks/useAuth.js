import { useSelector } from 'react-redux'
import { selectCurrentToken } from "../features/auth/authSlice"
import jwtDecode from 'jwt-decode'

const useAuth = () => {
    const token = useSelector(selectCurrentToken)
    let isManager = false
    let isAdmin = false
    let status = "Employee"
    let username = ""
    let roles = []
    let userId = ""

    if (token) {
        const decoded = jwtDecode(token)
        const { id, username: name, roles: userRoles } = decoded.UserInfo

        userId = id
        username = name
        roles = userRoles

        isManager = roles.includes('Manager')
        isAdmin = roles.includes('Admin')

        if (isManager) status = "Manager"
        if (isAdmin) status = "Admin"
    }
    else{
        console.log("there is no token stored")
    }

    return { userId, username, roles, status, isManager, isAdmin }
}

export default useAuth
