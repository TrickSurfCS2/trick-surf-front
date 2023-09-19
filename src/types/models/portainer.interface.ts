export interface IContainer {
  Command: string
  Created: number
  HostConfig: HostConfig
  Id: string
  Image: string
  ImageID: string
  Labels: Labels
  Mounts: Mount[]
  Names: string[]
  NetworkSettings: NetworkSettings
  Portainer?: Portainer
  Ports: Port[]
  State: string
  Status: string
  IsPortainer?: boolean
}

export interface HostConfig {
  NetworkMode: string
}

export interface Labels {
  [key: string]: string
}

export interface Mount {
  Destination: string
  Driver?: string
  Mode: string
  Name?: string
  Propagation: string
  RW: boolean
  Source: string
  Type: string
}

export interface NetworkSettings {
  Networks: Networks
}

export interface Networks {
  bridge: Bridge
}

export interface Bridge {
  Aliases: unknown
  DriverOpts: unknown
  EndpointID: string
  Gateway: string
  GlobalIPv6Address: string
  GlobalIPv6PrefixLen: number
  IPAMConfig?: Ipamconfig
  IPAddress: string
  IPPrefixLen: number
  IPv6Gateway: string
  Links: unknown
  MacAddress: string
  NetworkID: string
}

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface Ipamconfig {}

export interface Portainer {
  ResourceControl: ResourceControl
}

export interface ResourceControl {
  Id: number
  ResourceId: string
  SubResourceIds: unknown[]
  Type: number
  UserAccesses: unknown[]
  TeamAccesses: unknown[]
  Public: boolean
  AdministratorsOnly: boolean
  System: boolean
}

export interface Port {
  IP?: string
  PrivatePort: number
  PublicPort?: number
  Type: string
}
