import Dexie from 'dexie';

export const db = new Dexie('myDatabase');
db.version(5).stores({
    notes: '++id, title, text',
});
