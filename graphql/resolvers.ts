const resolvers ={
    Query: {
        Usuario: async (parent,args)=>{
        const usuario=[
                {
                    'nombre': "manuel",
                },
                {
                    'nombre': "juan",
                },
                {
                    'nombre': "pedro",
                },
             
            ];
            return usuario
    
        },
      
    },

    

}
export {resolvers}