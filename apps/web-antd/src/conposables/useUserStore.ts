import { supabase } from '../../../../packages/effects/common-ui/src/utils/supabase';

export const useUserStore = () => {
  // 登录
  const signIn = async (email: string, password: string) => {
    const { data, error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });
    return { data, error };
  };
  // 注册
  const signUp = async (email: string, password: string) => {
    const { data, error } = await supabase.auth.signUp({
      email,
      password,
    });
    return { data, error };
  };

  const fetchUsers = async () => {
    const { data, error } = await supabase.from('users').select('*');
    return { data, error };
  };

  return {
    signIn,
    signUp,
    fetchUsers,
  };
};
