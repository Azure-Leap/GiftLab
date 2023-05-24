import {create} from 'zustand'
import {persist} from 'zustand/middleware'

type NavbarCategoryState = {
    dashboardCategoryState : string
    setDashboardCategoryState : (category : string) => void
}

export const useNavbar = create<NavbarCategoryState>()(

    persist(
        (set) => ({
            dashboardCategoryState : 'home',
            setDashboardCategoryState : (category) => set(state => ({dashboardCategoryState : category}))

        }),
        {name : 'navbar-category-state'}
    )
)