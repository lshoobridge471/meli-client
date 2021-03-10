import { configure } from 'enzyme';
import EnzymeAdapter from '@wojtekmaj/enzyme-adapter-react-17';
import 'jest-fetch-mock';

configure({ adapter: new EnzymeAdapter() });