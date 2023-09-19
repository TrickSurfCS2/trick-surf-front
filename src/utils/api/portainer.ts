import type { IContainer } from '#/types/models/portainer.interface'

///                                                                                 //
export const PortainerApi = (instance: AxiosInstance) => ({
  async getContainers(id: number): Promise<IContainer[]> {
    const { data } = await instance.get<IContainer[]>(`/api/portainer/endpoints`, {
      params: { all: true, id }
    })
    return data
  }
})
