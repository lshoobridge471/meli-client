import * as React from 'react';
import { Alert as AntdAlert, AlertProps } from 'antd';

const Alert: React.FunctionComponent<AlertProps> = (props: AlertProps) => {
    return (
        <div className="Alert">
            <AntdAlert {...props} />
        </div>
    )
};

export default Alert;