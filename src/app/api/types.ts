export interface SignedUser {
  name: string;
  photo: string;
}

export interface Users {
  users:{
    first_name: string;
    last_name: string;
    email: string;
    avatar: string;
  }[]
}



