import {create} from 'zustand'
import {persist} from 'zustand/middleware'

type LoginFormState = {
    isThereUser : boolean
    setThereIsUser : (boolean : boolean) => void 

    // isContainerClicked : boolean
    // setIsContainerClicked : () => void
    
    userSignUpDataInDatabase : object
    setUserSignUpDataInDatabase : (e : any) => void
}


export const useLoginForm = create<LoginFormState>()(
    persist(
        (set) => ({
            isThereUser : false,
            setThereIsUser : (value) => set(state => ({isThereUser : value})),


            // isContainerClicked : false,
            // setIsContainerClicked : () => set(state => ({isContainerClicked : !state.isContainerClicked})),

            // user medeelel
            userSignUpDataInDatabase : {},
            setUserSignUpDataInDatabase : (e) => set(state => {
                const obj :any = {};
                
                const {name, value} = e.target;
                console.log(name, value)
                obj[name] = value;
                console.log(state.userSignUpDataInDatabase)
                return ({ userSignUpDataInDatabase : {...state.userSignUpDataInDatabase, ...obj} })
            })
        }),
        {name :'login-form-state'}
    )
)