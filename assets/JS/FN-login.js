// Importación de los datos de la configuracion
import { configLogin } from '../../src/config/config.js';

//Importación la funcion para enrutar el home
//import { navegacion } from '../../src/utils/router.js';

const 
    config = {
        textoMail: configLogin.textoEmail,
        textoPassword: configLogin.textoPasswor,
    },
    doc = document
;

export let 
    loginActive = false,
    objPerfil = []
;

export default function() {

    const
        imgPasswordText = doc.getElementById('togglePassword'),
        campoPassword = doc.getElementById('password'),
        inputMail = doc.getElementById('username'),
        inputPasssword = doc.getElementById('password'),
        formularioLogin = doc.getElementById('form-login')
    ;

    // Crear la subcrición al evento que hace click en el ojo para mostrar la contraseña
    imgPasswordText.addEventListener('click', function() {
        // Alterna el tipo de input entre 'password' y 'text'
        const type = campoPassword.getAttribute('type') === 'password' ? 'text' : 'password' ;
        campoPassword.setAttribute('type', type);
    
        // Alterna el icono (opcional)
        this.querySelector('#togglePassword i').classList.toggle('fa-eye-slash') ;  
        this.querySelector('#togglePassword i').classList.toggle('fa-eye') ;
    });

    // Crear la suscripción al evento para quitar o mostras el texto en el placeholder del mail
    inputMail.addEventListener('click', () => inputMail.placeholder = '');
    inputMail.addEventListener('blur', () => inputMail.placeholder = config.textoMail);

    // Crear la suscripción al evento para quitar o mostras el texto en el placeholder del password
    inputPasssword.addEventListener('click', () => inputPasssword.placeholder = '');
    inputPasssword.addEventListener('blur', () => inputPasssword.placeholder = config.textoPassword);

    formularioLogin.addEventListener('submit', (event) => {
        event.preventDefault();
    
        const objLogin = {
            user: inputMail.value,
            password : inputPasssword.value
        };

        // Simulacion de Respuesta API para bajar los datos del perfil para crear la barra de navegación dinamica
        /*objPerfil = {
            nombre: 'Juan',
            apellido: 'Requena',
            jefe:'Diego Herrero',
            menus: [
                {
                    menu: 'Menu 1',
                    submenu: [
                        { name: 'Submenu 1', link: '#Submenu-1' },
                        { name: 'Submenu 2', link: '#Submenu-2' },
                        { name: 'Submenu 3', link: '#Submenu-3' },
                        { name: 'Submenu 4', link: '#Submenu-4' },
                        { name: 'Submenu 5', link: '#Submenu-5' },
                    ],
                },
                {
                    menu: 'Menu 2',
                    submenu: [
                        { name: 'Submenu 1', link: '#Submenu-1' },
                        { name: 'Submenu 2', link: '#Submenu-2' },
                        { name: 'Submenu 3', link: '#Submenu-3' },
                        { name: 'Submenu 4', link: '#Submenu-4' },
                        { name: 'Submenu 5', link: '#Submenu-5' },
                    ],
                },
                {
                    menu: 'Menu 3',
                    submenu: [
                        { name: 'Submenu 1', link: '#Submenu-1' },
                        { name: 'Submenu 2', link: '#Submenu-2' },
                        { name: 'Submenu 3', link: '#Submenu-3' },
                        { name: 'Submenu 4', link: '#Submenu-4' },
                        { name: 'Submenu 5', link: '#Submenu-5' },
                    ],
                },
            ]
        };           
    
        loginActive = true;*/
        //navegacion('/home');

    });
};