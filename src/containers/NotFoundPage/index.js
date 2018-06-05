import React, { PureComponent } from 'react';
import i18next from 'i18next';

type Props = {

}

export class NotFoundPage extends PureComponent<Props> {
    render() {
        return (
            <div>
                <h1>{i18next.t('NOT_FOUND.TITLE')}</h1>
            </div>
        );
    }
}

export default NotFoundPage;
