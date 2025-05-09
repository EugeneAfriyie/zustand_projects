import { create } from "zustand";




const usePasswordStore = create((set) => ({
  password: "", 
  length: 12, 
  includeUppercase: true, 
  includeLowercase: true, 
  includeNumbers: true, 
  includeSymbols: true, 

  generatedPassword: "", // Initialize generated password state
  setGeneratedPassword: (newGeneratedPassword) => set({ generatedPassword: newGeneratedPassword }), // Function to update generated password
}));