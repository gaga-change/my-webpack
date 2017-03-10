/**
 * Created by 严俊东 on 2017/3/10.
 */
import _ from 'lodash/array'
function component() {
    var element = document.createElement('div');
    element.innerText = _.join(["Hello", "webpack", "!"], ' ');
    return element;
}
document.body.appendChild(component());