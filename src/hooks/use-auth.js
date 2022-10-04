import { useSelector } from 'react-redux';
import { userSelector } from '../redux/slices/userSlice';

export function useAuth() {
  const { name, email, token, id } = useSelector(userSelector);

  return {
    isAuth: !!email,
    name,
    email,
    token,
    id,
  };
}
