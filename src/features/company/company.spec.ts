/**
 * Unit tests for company reducer and actions
 */

import { CompanyState } from './reducer';
import reducer from './reducer';
import { setCompanyFailure, setCompanySuccess } from './actions';

describe('Company reducer', () => {

    const initialState: CompanyState = {
        error: '',
        data: {}
    };

    const mockData = {
        "headquarters": {
            "address": "Rocket Road",
            "city": "Hawthorne",
            "state": "California"
        },
        "name": "SpaceX",
        "founder": "Elon Musk",
        "founded": 2002,
        "summary": "SpaceX designs, manufactures and launches advanced rockets and spacecraft. The company was founded in 2002 to revolutionize space technology, with the ultimate goal of enabling people to live on other planets.",
        "id": "5eb75edc42fea42237d7f3ed"
    };

    it('should handle initial state', () => {
        expect(reducer(undefined, {type: 'unknown'})).toEqual(initialState);
    });

    it('should handle set company with success', () => {
        const actual = reducer(initialState, setCompanySuccess(mockData));
        expect(actual.data).toEqual(mockData);
    });

    it('should handle set company failure', () => {
        const error = new Error('Error!');
        const actual = reducer(initialState, setCompanyFailure(error));
        expect(actual.error).toEqual(error);
    });
});
