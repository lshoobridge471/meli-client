import { IBreadcumbSectionProps } from '../../../components/breadcumb/breadcumb';
import { formatMoney, getProductConditionName, parseBreadcumbStrings } from './utils';
describe('items utils test suite', () => {

    it('getProductConditionName check', () => {
        const getCondition = getProductConditionName("new");
        expect(getCondition).toEqual('Nuevo');
    });

    it('formatMoney check', () => {
        const value: number = 1989;
        const formattedValue: string = formatMoney(value);
        expect(formattedValue).toEqual(`$\xa01989`);
    });

    it('formatMoney check with custom decimals', () => {
        const value: number = 1989;
        const formattedValue: string = formatMoney(value, 2);
        expect(formattedValue).toEqual(`$\xa01989,00`);
    });

    it('formatMoney check with decimals', () => {
        const value: number = 1989.99;
        const formattedValue: string = formatMoney(value);
        expect(formattedValue).toEqual(`$\xa01989,99`);
    });

    it('parseBreadcumbStrings check', () => {
        const itemsMock: string[] = ["item1", "item2"];
        const itemsMockParsed: IBreadcumbSectionProps[] = [{
            name: "item1",
        },{
            name: "item2",
        }];
        const itemsParsed = parseBreadcumbStrings(itemsMock);
        expect(itemsMockParsed).toEqual(itemsParsed);
    });
});