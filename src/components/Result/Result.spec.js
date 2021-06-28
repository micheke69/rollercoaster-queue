import {configure,shallow} from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
import Result from './Result';

configure({ adapter: new Adapter() });

describe('<Result />', () => {
    
    let wrapper;

    beforeEach(() => {
        wrapper = shallow(<Result isChaotic={true} bribes={{}}/>)
    });
    
    it('should show too chaotic message',() =>{
        expect(wrapper.find('h3').text()).toBe('It is too chaotic.');
    });
    it('should show correct result',() =>{
        wrapper.setProps({isChaotic: false, bribes: {'5': 1}})
        expect(wrapper.find('p').text()).toBe('No.Ticket 5:');
        expect(wrapper.find('span').text()).toBe('1 brides.');
    });
})