// @flow
import React, { PureComponent } from 'react';
import Language from '../../../Language';

type Props = {

}

export class Header extends PureComponent<Props> {
    render() {
        return (
            <header>
                <nav>
                    <Language />
                </nav>
            </header>
        );
    }
}

export default Header;
