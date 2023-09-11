import {apiSlice} from "../../app/api/apiSlice"



export const authApiSlice=apiSlice.injectEndpoints({

     endpoints:builder=>({
        login:builder.mutation({
            query: credintials=>({
                url:"/auth",
                method:"POST",
                body:{...credintials}
            })
        })
     })

})

export const {useLoginMutation}=authApiSlice