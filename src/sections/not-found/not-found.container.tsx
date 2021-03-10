import * as React from 'react';
import NotFoundView from './not-found.view';

export const ERROR_URL_MESSAGE = 'URL not found!';

const NotFoundContainer: React.FunctionComponent = () => {
    return <NotFoundView message={ERROR_URL_MESSAGE} />
}

export default NotFoundContainer;