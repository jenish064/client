import axiosInstance from '../../utils/AxiosInterceptor';

export const fetchUserData = async () => {
  try {
    const response = await axiosInstance.get('/api/users', { params: { page: 1 } });
    return response;
  } catch (error) {
    console.error('Fetch Data Error:', error);
    throw error;
  }
};

export const addUserData = async (data) => {
  try {
    const response = await axiosInstance.post('/api/users', data);
    return response;
  } catch (error) {
    console.error('Add User Error:', error);
  }
};

export const updateUserData = async (id, data) => {
  try {
    const response = await axiosInstance.put(`/api/users/${id}`, data);
    return response;
  } catch (error) {
    console.error('Add User Error:', error);
  }
};

export const deleteUserData = async (id) => {
  try {
    const response = await axiosInstance.delete(`/api/users/${id}`);
    return response;
  } catch (error) {
    console.error('Fetch Data Error:', error);
    throw error;
  }
};
