/* 
- Container is responsible for how component works rather how component should look.
- Doing this to separate functionality from component. 
 */

import { connect } from 'react-redux';
import Header from './header';
import { toggleForm } from '../../actions';

const mapState = ({ formVisibility }) => ({ formVisibility });

const mapDispatch = (dispatch) => ({
    toggleVisibility: () => {
        dispatch(toggleForm());
    }
})

export default connect(mapState, mapDispatch)(Header);