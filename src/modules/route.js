import { handleActions } from 'redux-actions';

const initailValue = {
  jobs : {
    developer : {
      name : "김세환",
      skills : ["React.js", "Node.js"]
    },
    planner : {
      name : "홍길동",
      skills : ["Excel", "Powerpoint"]
    }
  }
}

const route = handleActions({}, initailValue);

export default route;