const store = require('./app/store')
const { icecreamActions } = require('./features/incecream/icecreamSlice')
const cakeActions = require('./features/cake/cakeSlice').cakeActions
const fetchUsers = require('./features/user/userSlice').fetchUsers

console.log('Initial state: ', store.getState())
const unsubscribe = store.subscribe(()=> {
    console.log('Update state: ', store.getState())
})

// store.dispatch(cakeActions.ordered())
// store.dispatch(cakeActions.ordered())

// store.dispatch(icecreamActions.ordered())
// store.dispatch(icecreamActions.ordered())

// store.dispatch(icecreamActions.restocked(2))
// store.dispatch(cakeActions.restocked(3))

store.dispatch(fetchUsers())

// unsubscribe()
// import store from './app/store'
// import { initialState, ordered } from './features/cake/cakeSlice'
// export  {ordered,restock} from './features/cake/cakeSlice'

// console.log('Initial State: ', store.getState());

// const unsubscribe = store.subscribe(()=> {
//     console.log('Update State: ', store.getState())
// })
// store.dispatch(ordered())
// store.dispatch(ordered())
// // store.dispatch(restock(3))  

// unsubscribe()
