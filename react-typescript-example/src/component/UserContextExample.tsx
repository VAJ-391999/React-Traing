import { createContext } from 'react';

export const userName = {
    firstname: '',
    lastname: ''
}

const UserXContext = createContext<typeof userName>(userName);

export default UserXContext;

