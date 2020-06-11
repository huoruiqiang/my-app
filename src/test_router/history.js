//解决 react-router-dom v4不能使用hashHistory的问题
import { createHashHistory } from 'history';
const hashHistory = createHashHistory();
export default hashHistory;