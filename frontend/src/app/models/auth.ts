export interface Login {
  username: string;
  password: string;
}

export interface Register extends Login {
  email: string;
}
