import React from 'react';
import { useAuth } from '../contexts/auth';
import PublicNavigtion from '../navigation/PublicNavigation';
import AuthNavigation from '../navigation/AuthNavigation';


export default function AppNavigation() {
	const { logged } = useAuth();

  return (
    <div>
      {logged ? <AuthNavigation /> : <PublicNavigtion />}
    </div>
  );
}