import inquirer from 'inquirer';
import colors from 'colors';

const preguntas = [
    {
        type: 'list',
        name: 'opcion',
        message: `${'Que desea hacer?'.green}`,
        choices: [
            {
                value: '1',
                name: `${'1'.green} - Agregar Tarea`
            },
            {
                value: '2',
                name: `${'2'.green} - Listar Tareas`
            },
            {
                value: '3',
                name: `${'3'.green} - Listar Tareas Completas`,
            },
            {
                value: '4',
                name: `${'4'.green} - Listar Tareas Pendientes`
            },
            {
                value: '5',
                name: `${'5'.green} - Completar Tareas`
            },
            {
                value: '6',
                name: `${'6'.green} - Borrar Tarea`
            },
            {
                value: '0',
                name: `${'0'.red} - Salir`
            }
        ]
    }
];

const inquirerMenu = async () => {
    console.clear();
    console.log('====================='.green);
    console.log('Seleccione una Opcion'.white);
    console.log('=====================\n'.green);

    const {opcion} = await inquirer.prompt(preguntas);
    return opcion;
}

const pausa = async () => {
    const pregunta = [
        {
            type: 'input',
            name: 'enter',
            message: `Presione ${'ENTER'.white} para continuar`
        }
    ];

    console.log('\n')
    await inquirer.prompt(pregunta);
}

const leerInput = async(message) => {
    const pregunta = [
        {
            type: 'input',
            name: 'description',
            message,
            validate(value) {
                if(value.length === 0) {
                    return 'Por favor ingrese un valor'
                }
                return true;
            },
        }
    ];

    const {description} = await inquirer.prompt(pregunta);
    return description
}

const listadoTareasBorrar = async (tareas = []) => {
    const choices = tareas.map((tarea, i) => {
        const idx = `${i + 1}`.green;
        return {
            value: tarea.id,
            name: `${idx} ${tarea.description}`
        }
    });

    choices.unshift({
        value: '0',
        name: '0'.green + ' Cancelar'
    });

    const preguntas = [
        {
            type: 'list',
            name: 'id',
            message: 'Borrar',
            choices
        }
    ]

    const {id} = await inquirer.prompt(preguntas);
    return id;
}

const confirmar = async (message) => {
    const pregunta = [
        {
            type: 'confirm',
            name: 'ok',
            message
        }
    ];

    const {ok} = await inquirer.prompt(pregunta);
    return ok;
}

const mostrarListadoCheckList = async (tareas = []) => {
    const choices = tareas.map((tarea, i) => {
        const idx = `${i + 1}`.green;
        return {
            value: tarea.id,
            name: `${idx} ${tarea.description}`,
            checked: (tarea.completadoEn) ? true : false
        }
    });

    const pregunta = [
        {
            type: 'checkbox',
            name: 'ids',
            message: 'Seleccione',
            choices
        }
    ]

    const {ids} = await inquirer.prompt(pregunta);
    return ids;
}

export {
    inquirerMenu, 
    pausa, 
    leerInput,
    listadoTareasBorrar,
    confirmar,
    mostrarListadoCheckList
}