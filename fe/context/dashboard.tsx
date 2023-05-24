import {create} from 'zustand'
import {persist} from 'zustand/middleware'

type DashboardTypeState = {
    dashboardTypeState : string
    whichTypeIdx : number
    dashboardTypeFilterChoice : string
    isDashboardBars : boolean
    
    addProductSaver : object
    setAddProductSaver : (object : object) => void

    setDashboardBarsState : (boolean : boolean) => void
    setDashboardTypeState : (type : string) => void
    setWhichTypeObject : (id : number) => void
    setDashboardTypeFilterChoice : (tag : string) => void

    addProductAndDonationEvent : object
    setAddProductAndDonationEvent : (e : any) => void

    setFilesInAddProduct : (obj : any) => void 

    prevDashboardTypeState : string
    setPrevDashboardTypeState : (string : string) => void 


}

export const useDashboardType = create<DashboardTypeState>()(

    persist(
        (set) => ({
            dashboardTypeState : 'event',
            setDashboardTypeState : (type) => set(state => ({dashboardTypeState : type})),

            whichTypeIdx : 1,
            setWhichTypeObject : (id) => set(state => ({whichTypeIdx : id})),

            dashboardTypeFilterChoice : 'date',
            setDashboardTypeFilterChoice : (tag) => set(state => ({dashboardTypeFilterChoice : tag})),

            isDashboardBars : true,
            setDashboardBarsState : (booleanValue ) => set(state => ({isDashboardBars : booleanValue})),

            addProductSaver : {},
            setAddProductSaver : (object) => set(state=>({addProductSaver : object})),

            addProductAndDonationEvent : {},
            setAddProductAndDonationEvent : (e : any) => set(state => {
                
                const obj :any = {};
                const {name, value} = e.target;
                // console.log(name, value)
                obj[name] = value;
                // console.log('gg');
                console.log(state.addProductAndDonationEvent )
                return ({ addProductAndDonationEvent : {...state.addProductAndDonationEvent, ...obj} })

            }),
            setFilesInAddProduct : (obj) => set(state=>({addProductAndDonationEvent : {...state.addProductAndDonationEvent, ...obj}})),

            prevDashboardTypeState : '',
            setPrevDashboardTypeState : (value) => set(state=>({prevDashboardTypeState : value}))

        }),
        {name : 'dashboard-type-state'}
    )
)