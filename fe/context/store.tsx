import {create} from 'zustand'
import {persist} from 'zustand/middleware'

type Cart = {
    title : string,
    image : string,
    id : string,
    description : string,
    carouselImg : string,
    quantity : number,
    type : string,
    ConveyGratitudeToDonors : string
}


type CartState = {
    cart : Cart[],
    isOpen : boolean,
    toggleCart : () => void,
    addPostToCart : (item : Cart) => void,
    removePost : (item : Cart) => void,
    filteredCarts : Cart[],
    setFilteredCarts : (type : string ) => void

    paymentIntent : string
    setPaymentIntent : (value : string) => void

    onCheckout : string
    setCheckout : (value : string) => void

    clearCart : () => void
}

export const useCartStore = create<CartState>()(

    persist(
        (set)=>({
            cart:[],
            filteredCarts : [],
            isOpen:false,
            toggleCart: () => set(state => ({isOpen : !state.isOpen})),
            // clearCart : () => set(state=>({}),
            addPostToCart : (item) => set((state) => {
                
                const isExistingItem = state.cart.find( interestingItem => interestingItem.id === item.id );
                if(isExistingItem) {
                    const updatedCart = state.cart.map( interestingItem => {

                            if(interestingItem.id === item.id) {
                                
                                return {...interestingItem, quantity : interestingItem.quantity! + 1}
                            } 
                            return interestingItem
                    })
                    return {cart : updatedCart}
                } else {
                    return {cart : [...state.cart, {...item, quantity : 1}]}
                }}
            ),
            removePost : (item) => set(state => {
                if(item.quantity > 1 ) {
                    const updatedCart = state.cart.map( interestingItem => {
                        if(item.id === interestingItem.id){
                            return {...interestingItem, quantity : interestingItem.quantity! - 1}
                        }
                        return interestingItem
                    })
                    return {cart : updatedCart}
                } else {
                    const updatedCart = state.cart.filter(interestingItem => interestingItem.id !== item.id)
                    return {cart : updatedCart}
                }
            }),
            setFilteredCarts : (type) => set(state => {
                const filteredCarts = state.cart.filter(interestingItem => interestingItem.type === type);
                return {filteredCarts}
            }),

            paymentIntent : '',
            setPaymentIntent: (value) => set(state => ({paymentIntent : value})),

            onCheckout : 'cart',
            setCheckout : (value) => set(state => ({onCheckout : value})),
            clearCart : () => set(state => ({cart : []}) )

        }),
        {name : 'cart'}
    )
    
)