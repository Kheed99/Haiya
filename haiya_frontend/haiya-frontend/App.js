import React, { useState } from 'react';
import { SafeAreaView, Button } from 'react-native';
import SignupScreen from './screens/SignupScreen'; // Adjust the path if necessary
import LoginScreen from './screens/LoginScreen'; // Adjust the path if necessary

export default function App() {
  const [isLogin, setIsLogin] = useState(true); // State to toggle between login and signup

  const toggleForm = () => {
    setIsLogin(!isLogin); // Toggle the form
  };

  return (
    <SafeAreaView style={{ flex: 1 }}>
      {isLogin ? <LoginScreen /> : <SignupScreen />}
      <Button title={isLogin ? "Switch to Signup" : "Switch to Login"} onPress={toggleForm} />
    </SafeAreaView>
  );
}
