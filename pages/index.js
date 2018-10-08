import React from 'react';
import Container from '../component/container';
import Lan from '../modules/language';

export default class extends React.Component {
    componentDidMount() {

    }

    render() {
        return (
            <div>
                <Container
                title={Lan.t('blog_name')}>
                    <p>This is the list of the latest posts.</p>
                </Container>
            </div>

        );
    }
}