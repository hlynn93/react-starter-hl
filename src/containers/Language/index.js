// @flow
import React from 'react'
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { setLanguage } from './action';
import { Languages } from '../../translations';

type Props = {
    language: string,
    actions: {
        setLanguage: Function
    }
}

export const LanguageSwitcher = ({
    language,
    actions
}: Props) => {
    return (
        <div>
            {
            Object.keys(Languages).map(k => (
                <button
                key={k}
                onClick={actions.setLanguage.bind(null, Languages[k])}
                >
                {k}
                </button>
            ))
            }
        </div>
    )
}

LanguageSwitcher.defaultProps = {
    actions: {
        setLanguage: () => {}
    }
}

const mapStateToProps = state => ({
    language: state.language.value || ''
})

const mapDispatchToProps = (dispatch, ownProps) => ({
    actions: bindActionCreators({
        setLanguage
    }, dispatch)
})

export default connect(mapStateToProps, mapDispatchToProps)(LanguageSwitcher)
