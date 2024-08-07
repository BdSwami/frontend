import { Injectable } from '@angular/core';
import { Apollo } from 'apollo-angular';
import { gql } from '@apollo/client/core';

const GET_TASKS = gql`
  query GetTasks($listId: ID!) {
    getTasks(listId: $listId) {
      id
      title
      listId
    }
  }
`;

const CREATE_TASK = gql`
  mutation CreateTask($title: String!, $listId: ID!) {
    createTask(title: $title, listId: $listId) {
      id
      title
      listId
    }
  }
`;

@Injectable({
  providedIn: 'root'
})
export class TaskNewService {

  constructor(private apollo: Apollo) {}

  getTasks(listId: string) {
    return this.apollo.query({
      query: GET_TASKS,
      variables: { listId },
    });
  }

  createTask(title: string, listId: string) {
    return this.apollo.mutate({
      mutation: CREATE_TASK,
      variables: { title, listId },
    });
  }
}
