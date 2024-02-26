import instance from "./HandelApi";


export const getMovieDetails=((id,language)=>{
    return   instance.get(`/movie/${id}?language=${language}`);
})