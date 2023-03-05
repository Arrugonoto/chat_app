import { useMessageContext } from '../context/MessagesContext';

const { messageId } = useMessageContext;

export const METHODS = {
   GET: 'GET',
   POST: 'POST',
   PATCH: 'PATCH',
   DELETE: 'DELETE',
};

export const API_URL = {
   LOGIN_USER: `http://localhost:5000/api/users/login`,
   REGISTER_USER: `http://localhost:5000/api/users/signup`,
   CREATE_MESSAGE: `http://localhost:5000/api/messages`,
   EDIT_MESSAGE: `http://localhost:5000/api/messages/${messageId}`,
   DELETE_MESSAGE: `http://localhost:5000/api/messages/${messageId}`,
};
