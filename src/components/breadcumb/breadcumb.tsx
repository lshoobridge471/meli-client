import { Breadcrumb } from 'antd';
import * as React from 'react';
import { Link } from 'react-router-dom';

export interface IBreadcumbSectionProps {
    link?: string;
    name: string;
}

export interface IBreadcumbProps {
    sections: IBreadcumbSectionProps[];
}

const Breadcumb: React.FunctionComponent<IBreadcumbProps> = (props: IBreadcumbProps) => {
    const { sections } = props;
    return (
        <>
            <Breadcrumb>
                {sections.map((section: IBreadcumbSectionProps): React.ReactElement => {
                    const { name, link } = section;
                    return (
                        <Breadcrumb.Item key={name}>
                            {!link && (name)}
                            {link && <Link to={link}>{name}</Link>}
                        </Breadcrumb.Item>
                    );
                })}
            </Breadcrumb>
        </>
    );
};

export default Breadcumb;