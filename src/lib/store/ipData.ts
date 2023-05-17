import { create } from 'zustand'

interface IpData {
  ip: string
  setIp: (ip: string) => void
}

export const useIpData = create<IpData>((set) => ({
  ip: '',
  setIp: (ip) => { set({ ip }) }
}))
