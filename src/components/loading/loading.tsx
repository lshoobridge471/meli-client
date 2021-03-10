import * as React from 'react';
import { Spin, SpinProps } from 'antd';
import { LoadingOutlined } from '@ant-design/icons';

export interface ILoadingProps extends SpinProps {
    fontSize: number;
}

const Loading: React.FunctionComponent<ILoadingProps> = (props: ILoadingProps) => {
    const { fontSize, ...spinProps } = props;
    const antIcon = <LoadingOutlined style={{ fontSize: fontSize }} spin />;
    return (
        <div className="Loading">
            <Spin {...spinProps} indicator={antIcon} />
        </div>
    )
};

export default Loading;