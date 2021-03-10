import * as React from 'react';

import { Input } from 'antd';
const { Search } = Input;

export interface ISearchComponentProps {
    placeholder: string;
    onSearch: (value: string) => void;
}

const SearchComponent = (props: ISearchComponentProps): React.ReactElement<ISearchComponentProps> => {
    const { placeholder, onSearch } = props;

    return (
        <Search
            placeholder={placeholder}
            onSearch={onSearch}
            size="large"
        />
    )
};

export default SearchComponent;