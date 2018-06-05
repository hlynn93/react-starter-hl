// @flow
import React, { PureComponent } from 'react';
import i18next from 'i18next';

type Props = {

}

export class ProfilePage extends PureComponent<Props> {
    render() {
        return (
            <div>
                <h1>{i18next.t('PROFILE.WELCOME', { name: 'John' })}</h1>
            </div>
        );
    }
}

export default ProfilePage;
