import { createContext, useState } from "react"
import PropTypes from "prop-types"

export const ValidatorProvider = createContext()

export function ValidationRoute({children}){
    const [emailValidation, setEmailValidation] = useState(false)



    return(<ValidatorProvider.Provider value ={{emailValidation, setEmailValidation}}>
        {children}
    </ValidatorProvider.Provider>)

}

ValidationRoute.propTypes = {
    children : PropTypes.node.isRequired
}