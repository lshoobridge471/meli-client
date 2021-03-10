import * as React from 'react';
import Alert from '../../components/alert/alert';

export interface INotFoundViewProps {
    message: string;
}

const NotFoundView: React.FunctionComponent<INotFoundViewProps> = (props: INotFoundViewProps) => {
    const { message } = props;
    return <Alert className="alertBannerPadding" banner type="error" message={message} showIcon />;
}

export default NotFoundView;