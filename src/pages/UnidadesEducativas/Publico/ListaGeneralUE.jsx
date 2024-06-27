import {useEffect,useState} from 'react'

import { FaMagnifyingGlass } from "react-icons/fa6";

import {useNavigate} from 'react-router-dom'

import ListaUE from '../ListaUE';

import { getDatoGeneralUE } from '../../../api/UnidadesEducativas';



const ListaGeneralUE = () => {
    const navigate = useNavigate();


    const [datosUnidadEducativa, setDatosUnidadEducativa] = useState([]);
    const [turno, setTurno] = useState([]);

    const [turnoSeleccionado, setTurnoSeleccionado] = useState("");

    const [infraEstructura, setInfraEstructura] = useState([]);

    useEffect(() => {
      const fetchingDatosGeneralUE = async () => {
        try{
          const response = await getDatoGeneralUE();
          setDatosUnidadEducativa(response)
        }catch(error){
          console.log("Error en Componente ListaGeneral fetchingDatosGeneralUE",error);
        }
      };
      fetchingDatosGeneralUE();
    }, []);

    

    const changeRutaNuevoFormulario=()=>{
        navigate('/unidadeducativa/agregarnuevo');
    }

   

    // useEffect(() => {
    //   const fetchingEstructura = async()=>{
    //     try{
    //       const baseUrl = import.meta.env.VITE_BASE_URL;
    //       const url = baseUrl + '/infraestructuras';
    //       const datosInfraEstructura =await axios.get(url);
    //       setInfraEstructura(datosInfraEstructura.data);
    //     }catch(error){
    //       console.log('Error al obtener Datos InfraEstructura', error);
    //     }
    //   }
    //   fetchingEstructura();
    // }, [])


    const changeFormDetails=()=>{
      navigate('/unidadeducativa/detalles');
    }

    const opctionBusqueda = [
      {label: 'Ascendente', value: 1},
      {label: 'Descende', value: 2},
    ];

    const opctionTipoInfraEstructura = [
        {label: 'Modulo', value: 1},
        {label: 'Escuela', value: 2},
    ];

    const opctionTurno = [
        {label: 'Mañana', value: 1},
        {label: 'Turno', value: 2},
        {label: 'Noche', value: 3},
    ];


    const handleTurno = (event)=>{
      setTurnoSeleccionado(event.target.value);
    }

    return (
        <div className='flex flex-col items-center justify-center'>
          
          {/* Parte Superrior */}
          <section className='grid-cols-12 flex justify-center p-2 mb-10'>
    
            <section className='col-span-4 flex gap-12 pl-2 pr-3'>
              {/* Boton */}
              <div className='flex col-span-1'>
                <button 
                    onClick={changeRutaNuevoFormulario}
                    className='text-white font-new-font font-new-bold bg-primary-900/90 rounded-lg py-3 px-2'>
                        Agregar Nuevo
                </button>

              </div>
    
              <div className='col-span-3 flex items-center gap-2'>
                <p className='font-new-font font-new-bold text-white'>Ordenar por</p>
                {/* <span className='bg-gray-300 rounded-xl py-1 px-2 border border-1 border-black'>NombreDrop</span> */}
                <select 

                  className="w-full rounded-xl py-1 pl-2 font-semibold bg-gray-300">
                    {opctionBusqueda.map(option =>(
                        <option value={option.label} key={option.value}>{option.label}</option>
                    ))}
                </select>
              </div>
    
            </section>
    
            <section className='col-span-4 flex justify-center items-center gap-12 '>
            <div className='col-span-2 flex items-center gap-2'>
                <p className=' font-new-font font-new-bold text-white'>Tipo</p>
                {/* <span className=' bg-gray-300 rounded-xl py-1 px-2 border border-1 border-black'>NombreDrop</span> */}
                <select 
                    className="w-full rounded-xl py-1 pl-2 font-semibold bg-gray-300">
                    {opctionTipoInfraEstructura.map(option =>(
                        <option value={option.nombre} key={option.id}>{option.nombre}</option>
                    ))}
                </select>
              </div>
    
              <div className='col-span-2 flex items-center gap-2'>
                <p className='font-new-font font-new-bold text-white'>Turno</p>
                {/* <span className='bg-gray-300 rounded-xl py-1 px-2 border border-1 border-black'>NombreDrop</span> */}
                <select 
                    
                    className="w-full rounded-xl py-1 pl-2 font-semibold bg-gray-300">
                    {opctionTurno.map(option =>(
                        <option value={option.nombre} key={option.id}>{option.nombre}</option>
                    ))}
                </select>
              </div>
            </section>
    
            <section className='col-span-4  flex items-center justify-end px-3 gap-3'>
              <p className='font-new-font font-new-bold text-white'>Nombre</p>
              <div className='w-full flex bg-gray-300 border border-black rounded-xl px-2'>
                <FaMagnifyingGlass className='mt-2' />
                <input
                  type='text'
                  placeholder='Buscar'
                  className='w-full font-semibold  rounded-xl py-1 bg-gray-300  px-1 outline-none'
                />
              </div>
            </section>
    
          </section>
    
          {/* //Parte de la Listas de Colegios */}
          <main className="flex flex-col justify-center mt-10 md:w-[80%] sm:w-[100%] ">
            <section className='w-full'>
                <ul className='grid grid-cols-11 bg-white gap-1 mb-3 rounded-xl shadow-lg'>
                  <li className=" font-semibold text-start col-span-4 px-3 py-2 ">Nombre</li>
                  <li className=" font-semibold text-start col-span-4 px-3 py-2 ">Nombre Director</li>
                  <li className=" font-semibold text-center col-span-1 px-2 py-2 ">Mañana</li>
                  <li className=" font-semibold text-center col-span-2 px-2 py-2 ">Acciones</li>
                </ul>
            </section>
    
            <section className='w-full'>
              {
                datosUnidadEducativa.map((element)=>{
                  return(
                    <ListaUE
                      // key={element.id}
                      id = {element.id}
                      nombreUE={element.nombre} 
                      nombreDirector={element.idGestion.director} 
                      turno={element.idTurno.nombre}
                    />

                  );
                })
              }
              
            </section>
    
          </main>
        </div>
      )
}

export default ListaGeneralUE
