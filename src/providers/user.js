import provideCrud from 'provide-crud';
import provideAuthentication from 'provide-authentication';

const user = provideAuthentication(provideCrud('user', { name: '', role: 'USER' }));

export default user;
