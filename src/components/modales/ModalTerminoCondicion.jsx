import {useNavigate} from "react-router-dom";

const ModalTerminoCondicion = ({open,onClose}) => {
    
    const navigate = useNavigate();
    if (!open) return null;
  
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-10">

      <div className="fixed top-1/2 left-1/2 max-w-lg w-11/12 max-h-[90vh] bg-white shadow-2xl rounded-2xl p-5 -translate-x-1/2 -translate-y-1/2 ">
        <p
          className="font-bold text-4xl font-google-anta mb-5"
          style={{ textShadow: "2px 2px #31bb11" }}
        >
          TÉRMINOS Y CONDICIONES
        </p>
        
        {/* <div className="overflow-y-auto">


        </div> */}

        <div className="w-full flex-shrink-0 pr-8 font-google-anta rounded-lg p-[1%] overflow-y-auto max-h-[500px]">
          <p className="font-bold text-3xl pb-4 text-gray-800">
            Aceptación de los Términos
          </p>
          <p className="text-xl text-gray-700 leading-relaxed mb-6">
            Al registrarse en UrbanEase Solutions, el usuario acepta cumplir con
            los términos y condiciones aquí descritos. Estos términos y
            condiciones pueden ser modificados ocasionalmente, y dichas
            modificaciones serán efectivas inmediatamente después de su
            publicación en nuestra plataforma.
          </p>
          <p className="font-bold text-3xl pb-4 text-gray-800">
            Registro y Cuenta de Usuario
          </p>
          <ul className="list-disc pl-8 text-xl text-gray-700 leading-relaxed mb-6">
            <li>
              <strong>Requisitos de Registro:</strong> Para registrarse, el
              usuario debe proporcionar información veraz y actualizada. Se
              requiere un nombre de usuario, una dirección de correo electrónico
              válida y la creación de una contraseña.
            </li>
            <li>
              <strong>Confidencialidad de la Cuenta:</strong> El usuario es
              responsable de mantener la confidencialidad de su cuenta y
              contraseña. Debe notificar inmediatamente a UrbanEase Solutions
              sobre cualquier uso no autorizado de su cuenta.
            </li>
          </ul>
          <p className="font-bold text-3xl pb-4 text-gray-800">
            Uso de la Plataforma
          </p>
          <p className="text-xl text-gray-700 leading-relaxed mb-6">
            <strong>Acceso y Uso Permitido:</strong> Usted se compromete a
            utilizar la plataforma únicamente para fines personales y no
            comerciales, y de acuerdo con todas las leyes locales, estatales,
            nacionales e internacionales aplicables.
          </p>
          <p className="text-xl text-gray-700 leading-relaxed mb-6">
            <strong>Conducta del Usuario:</strong> Usted se compromete a no
            utilizar la plataforma para:
          </p>
          <ul className="list-disc pl-8 text-xl text-gray-700 leading-relaxed mb-6">
            <li>Publicar contenido falso, inexacto o engañoso.</li>
            <li>
              Infringir los derechos de propiedad intelectual de terceros.
            </li>
            <li>
              Distribuir virus o cualquier otra tecnología que pueda dañar la
              plataforma o a sus usuarios.
            </li>
          </ul>
          <p className="font-bold text-3xl pb-4 text-gray-800">
            Recolección de Datos
          </p>
          <ul className="list-disc pl-8 text-xl text-gray-700 leading-relaxed mb-6">
            <li>
              <strong>Recolección de Datos:</strong> Al registrarse, usted
              acepta que UrbanEase Solutions recolecte y utilice sus datos
              personales conforme a nuestra Política de Privacidad.
            </li>
            <li>
              <strong>Uso de Datos:</strong> Los datos recolectados se
              utilizarán para mejorar la experiencia del usuario, personalizar
              contenido y gestionar la plataforma.
            </li>
          </ul>
          <p className="font-bold text-3xl pb-4 text-gray-800">Seguridad</p>
          <p className="text-xl text-gray-700 leading-relaxed mb-6">
            UrbanEase Solutions implementa medidas de seguridad para proteger la
            información personal del usuario contra acceso no autorizado,
            alteración, divulgación o destrucción. Sin embargo, no se puede
            garantizar una seguridad absoluta en la transmisión de datos a
            través de Internet.
          </p>
          <p className="font-bold text-3xl pb-4 text-gray-800">
            Derechos de Propiedad Intelectual
          </p>
          <ul className="list-disc pl-8 text-xl text-gray-700 leading-relaxed mb-6">
            <li>
              <strong>Contenido del Usuario:</strong> Usted conserva todos los
              derechos de propiedad sobre el contenido que publica en la
              plataforma. Sin embargo, al publicar contenido, concede a
              UrbanEase Solutions una licencia mundial, no exclusiva, libre de
              regalías y transferible para usar, reproducir y distribuir dicho
              contenido.
            </li>
            <li>
              <strong>Contenido de UrbanEase Solutions:</strong> Todo el
              contenido creado por UrbanEase Solutions, incluyendo software,
              gráficos y textos, es propiedad de UrbanEase Solutions y está
              protegido por leyes de derechos de autor y otras leyes de
              propiedad intelectual.
            </li>
          </ul>
        </div>

        <div className="w-[100%] flex flex-row justify-end items-end py-[0.5%] gap-[2%]">
          
          <button 
            className="bg-red-500 text-white font-bold font-google-anta text-2xl px-[2%] py-[1%] rounded-md hover:bg-red-700"
            onClick={()=>navigate('/')}
           >
            Rechazar
          </button>

          <button 
            className="bg-green-500 text-white font-bold font-google-anta text-2xl px-[2%] py-[1%] rounded-md hover:bg-green-700"
            onClick={onClose}
          >
            Aceptar
          </button>
        </div>
      </div>
    </div>
  );
};

export default ModalTerminoCondicion;
