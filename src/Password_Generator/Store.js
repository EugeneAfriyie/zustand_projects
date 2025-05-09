import { create } from "zustand";

const usePasswordStore = create((set) => ({
  password: "", 
  length: 12, 
  includeUppercase: true, 
  includeLowercase: true, 
  includeNumbers: true, 
  includeSymbols: true, 

  generatedPassword: "",


setLength:(length) => set({ length }),
 toggleUppercase:() => (set((state) => ({ includeUppercase: !state.includeUppercase }))),
 toggleNumbers:() => (set((state) => ({ includeNumbers: !state.includeNumbers }))),
 toggleLowercase:() => (set((state) => ({ includeLowercase: !state.includeLowercase }))),
 toggleSymbols:() => (set((state) => ({ includeSymbols: !state.includeSymbols }))),


  generatePassword: ()  => set((state) => {
    // const { length, includeUppercase, includeLowercase, includeNumbers, includeSymbols } = get();
    const upperCaseChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const lowerCaseChars = "abcdefghijklmnopqrstuvwxyz";
    const numberChars = "0123456789";
    const symbolChars = "!@#$%^&*()_+[]{}|;:,.<>?";
    let charSet = "";

    if (state.includeUppercase) charSet += upperCaseChars;
    if (state.includeLowercase) charSet += lowerCaseChars;
    if (state.includeNumbers) charSet += numberChars;
    if (state.includeSymbols) charSet += symbolChars;

    let password = "";
    for (let i = 0; i < state.length; i++) {
      password += charSet.charAt(Math.floor(Math.random() * charSet.length));
    }

    return {generatedPassword: password};

  }),
}));


export default usePasswordStore;