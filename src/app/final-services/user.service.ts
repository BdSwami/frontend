import { Injectable } from '@angular/core';
import { Apollo } from 'apollo-angular';
import { gql } from '@apollo/client/core';

const LOGIN_MUTATION = gql`
  mutation Login($username: String!, $password: String!) {
    login(username: $username, password: $password)
  }
`;

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private apollo: Apollo) { }

  getUsers(){
    console.log("badal");
    
    return this.apollo.query({
      query : gql`
      query{
        getUsers {
         id
         email
         username
         password
       }
      }
      `
    });
  }

  signUp(name: string, email : string, password : string){
    console.log(name,email,"sign up");
    
    return this.apollo.mutate({
      mutation: gql`
        mutation CreateUser($name: String!, $email: String!, $password: String!) {
          createUser(username: $name, email: $email, password: $password) {
            id
            username
            email
            password
          }
        }
      `,
      variables: { name, email, password }
    });
  }

  login(username: string, password: string) {
    return this.apollo.mutate({
      mutation: LOGIN_MUTATION,
      variables: { username, password },
    }).toPromise().then((result: any) => {
      const token = result.data.login;
      localStorage.setItem('token', token);
      return token;
    });
  }
}
