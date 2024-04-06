import { createSelector } from "@reduxjs/toolkit"
export const Users = (state)=>{
return state.Friends.users
}
export const superSelectorUsers = createSelector(Users,(u)=>{
    return u
})