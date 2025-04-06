import { create } from "zustand";

const Store = create((set) => ({
    card: 1, // Initial card state
    setcard: (newcardname) => set({ card: newcardname }), // Set card manually

    message: "", // Initial message state
    setmessage: (newMessage) => set({ message: newMessage }) // Set message manually
}));

export default Store;
