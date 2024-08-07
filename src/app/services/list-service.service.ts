import { Injectable } from '@angular/core';
import { Apollo } from 'apollo-angular';
import { gql } from '@apollo/client/core';

@Injectable({
  providedIn: 'root'
})

export class ListServiceService{
  constructor(private apollo: Apollo) {}
  getLists() {
    return this.apollo.query({
      query: gql`
        query {
          getLists {
            id
            title
          }
        }
      `,
    });
  }

  createList(title: string) {
    return this.apollo.mutate({
      mutation: gql`
        mutation($title: String!) {
          createList(title: $title) {
            id
            title
          }
        }
      `,
      variables: {
        title: title,
      },
    });
  }

  updateList(id: string, title: string) {
    return this.apollo.mutate({
      mutation: gql`
        mutation($id: ID!, $title: String!) {
          updateList(id: $id, title: $title) {
            id
            title
          }
        }
      `,
      variables: {
        id: id,
        title: title,
      },
    });
  }

  deleteList(id: string) {
    return this.apollo.mutate({
      mutation: gql`
        mutation($id: ID!) {
          deleteList(id: $id) {
            id
            title
          }
        }
      `,
      variables: {
        id: id,
      },
    });
  }

  getCountTask(id : string){

    return this.apollo.query({
      query: gql`
      query Query($yuvi: ID!) {
          getLegthSubTask(id: $yuvi)
      }
      `,
      variables: {
        yuvi: id
      }
    });

  }
}
