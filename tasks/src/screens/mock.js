import moment from 'moment';

const tasks = [
    {
        id: 1,
        desc: 'Tarefa Mock 1',
        estimateAt: moment().toDate(),
        doneAt: null
    },
    {
        id: 2,
        desc: 'Tarefa Mock 2',
        estimateAt: moment().add({ days: 1 }).toDate(),
        doneAt: null
    }
];

export const getTasks = async () => {
    return new Promise(resolve => {
        setTimeout(() => resolve(tasks), 1000);
    });
};

export const addTask = async task => {
    return new Promise(resolve => {
        setTimeout(() => {
            task.id = tasks.length + 1;
            tasks.push(task);
            resolve(task);
        }, 1000);
    });
};

export const toggleTask = async taskId => {
    return new Promise(resolve => {
        setTimeout(() => {
            const task = tasks.find(t => t.id === taskId);
            task.doneAt = task.doneAt ? null : new Date();
            resolve(task);
        }, 1000);
    });
};

export const deleteTask = async taskId => {
    return new Promise(resolve => {
        setTimeout(() => {
            const index = tasks.findIndex(t => t.id === taskId);
            tasks.splice(index, 1);
            resolve();
        }, 1000);
    });
};
