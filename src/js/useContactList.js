import { create } from 'zustand'
import { persist, createJSONStorage } from 'zustand/middleware'

export const useContactList = create(
  persist(
    (set) => ({
      contacts: [
        {
          name: 'Elvis Hernandez',
          email: 'testemail@gmail.com',
          phone: 'xxx-xxx-xxxxx',
          address: '345 sw 3rd st'
        }
      ],
      addContact: (data) => {
        set((state) => ({ contacts: [...state.contacts, data] }))
      },
    }),
    {
      name: 'food-storage', // name of the item in the storage (must be unique)
      
    })
)

