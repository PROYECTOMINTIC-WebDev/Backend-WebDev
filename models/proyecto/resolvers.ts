import { modeloProyectos } from "./proyecto";
import { Enum_EstadoProyecto, Enum_FaseProyecto } from "../enum/enum";
import { modeloInscripciones } from "../inscripcion/inscripcion";
import { modeloUsuarios } from "../usuario/usuario";


const resolversProyecto = {

  Proyecto:{
    inscripciones: async(parent, args, context, info) => {
      const inscripciones = await modeloInscripciones.find({
        
        proyecto: parent._id,
       });
       return inscripciones;
    },  
    lider: async (parent, args, context) => {
      const usr = await modeloUsuarios.findOne({
        _id: parent.lider.toString(),
      });
      return usr;
    },
  
  },
  
  Query: {
    //ADMINISTRADOR
    Proyectos: async (parent, args, context) => {
      if (context.userData) {
        if (context.userData.rol === 'LIDER') {
          const proyectos = await modeloProyectos.find({ lider: context.userData._id });
          return proyectos;
        } else {
          
          const proyectos = await modeloProyectos.find()

          return proyectos;
          // const proyectos = await ProjectModel.find({ lider: context.userData._id });
          // return proyectos;
        }
      }
      const proyectos = await modeloProyectos.find();
      return proyectos;
    },
  /*   Proyectos: async (parent, args) => {
      
      const proyectos = await modeloProyectos.find()

      return proyectos;
    }, */

    NuevasSolicitudesProyectos: async (parent, args) => {

      const proyectos = await modeloProyectos.find({fase: Enum_FaseProyecto.NULO}).populate('lider');

      return proyectos;
    },

    //ESTUDIANTE

    ListaProyectosEstudiante: async (parent, args) => {
      const proyectos = await modeloProyectos.find({estado: Enum_EstadoProyecto.ACTIVO, fase: Enum_FaseProyecto.INICIADO || Enum_FaseProyecto.DESARROLLO}).populate('lider').populate('avances').populate('inscripciones');
      return proyectos;
    },

    ProyectosEstudiante: async (parent, args) => {
      const estudianteProyectos = await modeloProyectos.find().populate('inscripciones').find({estudiante: args._id});
      return estudianteProyectos;
    },

    //LIDER

    ProyectosLider: async (parent, args) => {
      const proyectos = await modeloProyectos.find({lider: args._id}).populate('avances').populate('inscripciones');
      return proyectos;
    },

  },
  

  Mutation: {
    crearProyecto: async (parent, args) => {
      const proyectoCreado = await modeloProyectos.create({
        nombre: args.nombre,
        objetivos: args.objetivos,
        presupuesto: args.presupuesto,
        fechaInicio: args.FechaInicio,
        fechaFin: args.FechaFin,
        lider: args.lider,
      });
      return proyectoCreado;
    },

    eliminarProyecto: async (parent, args) =>{
      const proyectoEliminado = await modeloProyectos.findByIdAndDelete(args._id)

      return proyectoEliminado;
    },

    editarProyectoLider: async (parent, args)=> {
      const proyectoEditado = await modeloProyectos.findByIdAndUpdate(args._id,{
        nombre: args.nombre,
        presupuesto: args.presupuesto,
        objetivos: args.objetivos,
      },{new:true});

      return proyectoEditado;
    },


    editarFaseProyecto: async (parent, args)=>{

        const proyectoEditado = await modeloProyectos.findByIdAndUpdate(args._id,{
          
          fase: args.fase,
          
        },{new:true});

        return proyectoEditado;
        

      },
        
      
      
      /*
      if (args.fase === 'TERMINADO' && args.estado === 'ACTIVO' ){

        const proyectoEditado = await modeloProyectos.findByIdAndUpdate(args._id,{
          estado: args.estado,
          fase: args.fase,
          
        },{new:true});

        return proyectoEditado;
      }

      else if (args.fase === 'TERMINADO' && args.estado === 'INACTIVO' ) {

        const proyectoEditado = await modeloProyectos.findByIdAndUpdate(args._id,{

          estado: args.estado,
          fase: args.fase
        },{new:true});

        return proyectoEditado
        
      }*/

  

    editarEstadoProyecto: async (parent, args)=>{

      if (args.estado === 'ACTIVO' ){

        const proyectoEditado = await modeloProyectos.findByIdAndUpdate(args._id,{
          estado: args.estado,
          fase: Enum_FaseProyecto.INICIADO,
          fechaInicio: new Date().toISOString().split("T")[0]
        },{new:true});

        return proyectoEditado;
      }
      
      if (args.estado === 'INACTIVO'){

        const proyectoEditado = await modeloProyectos.findByIdAndUpdate(args._id,{
          estado: args.estado,
          fase: Enum_FaseProyecto.TERMINADO,
          fechaInicio: new Date().toISOString().split("T")[0]
        },{new:true});

        return proyectoEditado;
      }

/*      
      else if (args.estado === 'ACTIVO' && args.fase === 'DESARROLLO' ) {

        const proyectoEditado = await modeloProyectos.findByIdAndUpdate(args._id,{

          estado: args.estado,
          fase: args.fase
        },{new:true});

        return proyectoEditado
        
      }
    
      else if(args.fase === 'TERMINADO' && args.estado === 'ACTIVO'){
 
        const editarInscripciones = await modeloInscripciones.updateMany({proyecto: args._id},{
            fechaFin: new Date().toISOString().split("T")[0],
        })

        const proyectoEditado = await modeloProyectos.findByIdAndUpdate(args._id,{
            estado: Enum_EstadoProyecto.INACTIVO,
            fase: args.fase,
            fechaFin: new Date().toISOString().split("T")[0]
        },{new:true});
        return proyectoEditado;
      }

      else if(args.estado === 'INACTIVO' && args.fase === 'DESARROLLO' || args.estado === 'INACTIVO' && args.fase === 'INICIADO'){
          const proyectoEditado= await modeloProyectos.findByIdAndUpdate(args._id,{
            
            estado: args.estado

          },{new:true});

          return proyectoEditado;
      }
    
      else if( args.estado === 'ACTIVO' && args.fase === 'INICIADO'){
          const proyectoEditado= await modeloProyectos.findByIdAndUpdate(args._id,{
              estado:args.estado
          },{new:true});
          return proyectoEditado;
      } */
    
    },

    

      

    crearObjetivo: async (parent, args) => {
      const proyectoConObjetivo = await modeloProyectos.findByIdAndUpdate(args.idProyecto, {
        $addToSet:{
          objetivos:{...args.campos}
        }
      },{new:true});

      return proyectoConObjetivo;

    },
 

    editarObjetivo: async (parent, args) => {
      const proyectoEncontrado = await modeloProyectos.findById( args.idProyecto)

      proyectoEncontrado.objetivos[args.indexObjetivo] = {...args.campos}
      proyectoEncontrado.save()
      
      return proyectoEncontrado;
      
    },

    eliminarObjetivo: async (parent, args) => {
      const proyectoObjetivo = await modeloProyectos.findByIdAndUpdate(
        { _id: args.idProyecto },
        {
          $pull: {
            objetivos: {
              _id: args.idObjetivo,
            },
          },
        },{ new: true });

      return proyectoObjetivo;
    },

  }

}



 
export {resolversProyecto};
