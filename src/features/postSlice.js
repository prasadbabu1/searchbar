import { createSlice } from '@reduxjs/toolkit'

const postSlice=createSlice({
    name: 'posts',
  initialState:[],
  reducers:{
    addPost:(state,action)=>{
        const newPost={
            id:Date.now(),
            title:action.payload.title,
            content:action.payload.content,
        }
        state.push(newPost)
    },
    deletePost:(state,action)=>{
        return state.filter((post)=>post.id!=action.payload.id)

    },
    updatePost:(state,action)=>{
      const{id, title, content}=action.payload;
      const postUpdate=state.find((post)=>post.id===id);
      if(postUpdate){
        postUpdate.title=title;
        postUpdate.content=content;
      }

    }
    

  }
})
export const{addPost,deletePost,updatePost}=postSlice.actions
export default postSlice.reducer
