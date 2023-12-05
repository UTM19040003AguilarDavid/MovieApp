/* eslint-disable react-refresh/only-export-components */
import { useState, useEffect, useContext, createContext } from 'react';
import { supabase } from '../supabase/client';

const AuthContext = createContext({});
// custom hook to use context
export function useAuth() {
  return useContext(AuthContext);
}

export function AuthProvider({ children }) {
  const [session, setSession] = useState(null);
  const [user, setUser] = useState(null);

  useEffect(() => {
    supabase.auth.getSession().then(({ data }) => {
      setSession(data.session);
      setUser(data.session.user);
    });
    const { data: authListener } = supabase.auth.onAuthStateChange(
      (event, session) => {
        console.log(event, session);
        setSession(session);
        setUser(session ? session.user : null);
      }
    );
    return () => {
      authListener.subscription.unsubscribe();
    };
  }, []);

  const signOut = () => supabase.auth.signOut();

  const value = {
    session,
    user,
    signOut,
    // add more custom methods or properties here
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}
