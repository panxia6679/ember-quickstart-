import Component from '@glimer/component';
import { action } from '@ember/object';


export default class PeopleListComponent extends Component {
    @action
    showPerson(person) {
      alert(`The person's name is ${person}!`);
    }
}