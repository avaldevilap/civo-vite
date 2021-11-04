export interface Region {
  code: string;
  name: string;
  type: string;
  default: boolean;
  out_of_capacity: boolean;
  country: string;
  country_name: string;
  features: Features;
  instances: Instance[];
}

export interface Features {
  iaas: boolean;
  kubernetes: boolean;
}

export interface Instance {
  id: string;
  name: string;
  hostname: string;
  account_id: string;
  size: string;
  firewall_id: string;
  source_type: string;
  source_id: string;
  network_id: string;
  initial_user: string;
  initial_password: string;
  ssh_key: string;
  ssh_key_id: string;
  tags: string[];
  user_script: string;
  status: string;
  civostatsd_token: string;
  public_ip: null;
  private_ip: null;
  ipv6: null;
  namespace_id: null;
  notes: string;
  reverse_dns: string;
  cpu_cores: number;
  ram_mb: number;
  disk_gb: number;
}

export interface Network {
  id: string;
  label: string;
  name: string;
  default: boolean;
}

export interface Firewall {
  id: string;
  name: string;
  account_id: string;
  rules_count: number;
  instances_count: null;
  default: string;
  label: null;
  network_id: string;
}
