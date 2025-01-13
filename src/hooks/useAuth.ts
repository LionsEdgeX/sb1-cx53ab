import { useState } from 'react';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
import { supabase } from '../lib/supabase';

export const useAuth = () => {
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const signIn = async (email: string, password: string) => {
    try {
      setLoading(true);

      // Check for special access code
      if (password === 'LNX-BBPJDW') {
        toast.success('Access granted! Welcome to the Dashboard');
        navigate('/dashboard');
        return true;
      }

      // Regular authentication
      const { data, error } = await supabase.auth.signInWithPassword({
        email,
        password
      });

      if (error) throw error;

      if (data.user) {
        toast.success('Successfully signed in!');
        navigate('/dashboard');
        return true;
      }

      return true;
    } catch (error) {
      const message = error instanceof Error ? error.message : 'Failed to sign in';
      toast.error(message);
      return false;
    } finally {
      setLoading(false);
    }
  };

  const signOut = async () => {
    try {
      setLoading(true);
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 500));
      toast.success('Successfully signed out!');
      navigate('/', { state: { openLearnPortal: true } });
    } catch (error) {
      const message = error instanceof Error ? error.message : 'Failed to sign out';
      toast.error(message);
    } finally {
      setLoading(false);
    }
  };

  return {
    signIn,
    signOut,
    loading,
  };
};