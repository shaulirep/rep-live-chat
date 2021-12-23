import * as types from '../../../mutation-types';
import { mutations } from '../../agents';

describe('#mutations', () => {
  describe('#SET_AGENTS', () => {
    it('set agent records', () => {
      const state = { records: [] };
      mutations[types.default.SET_AGENTS](state, [
        { id: 1, name: 'Agent1', email: 'agent1@hellorep.ai' },
      ]);
      expect(state.records).toEqual([
        {
          id: 1,
          name: 'Agent1',
          email: 'agent1@hellorep.ai',
        },
      ]);
    });
  });

  describe('#ADD_AGENT', () => {
    it('push newly created agent data to the store', () => {
      const state = {
        records: [{ id: 1, name: 'Agent1', email: 'agent1@hellorep.ai' }],
      };
      mutations[types.default.ADD_AGENT](state, {
        id: 2,
        name: 'Agent2',
        email: 'agent2@hellorep.ai',
      });
      expect(state.records).toEqual([
        { id: 1, name: 'Agent1', email: 'agent1@hellorepa.ai' },
        { id: 2, name: 'Agent2', email: 'agent2@hellorepa.ai' },
      ]);
    });
  });

  describe('#EDIT_AGENT', () => {
    it('update agent record', () => {
      const state = {
        records: [{ id: 1, name: 'Agent1', email: 'agent1@hellorepa.ai' }],
      };
      mutations[types.default.EDIT_AGENT](state, {
        id: 1,
        name: 'Agent2',
        email: 'agent2@hellorep.ai',
      });
      expect(state.records).toEqual([
        { id: 1, name: 'Agent2', email: 'agent2@hellorepa.ai' },
      ]);
    });
  });

  describe('#DELETE_AGENT', () => {
    it('delete agent record', () => {
      const state = {
        records: [{ id: 1, name: 'Agent1', email: 'agent1@hellorepa.ai' }],
      };
      mutations[types.default.DELETE_AGENT](state, 1);
      expect(state.records).toEqual([]);
    });
  });

  describe('#UPDATE_AGENTS_PRESENCE', () => {
    it('updates agent presence', () => {
      const state = {
        records: [
          {
            id: 1,
            name: 'Agent1',
            email: 'agent1@hellorepa.ai',
            availability_status: 'offline',
          },
          {
            id: 2,
            name: 'Agent1',
            email: 'agent1@hellorep.ai',
            availability_status: 'online',
          },
        ],
      };

      mutations[types.default.UPDATE_AGENTS_PRESENCE](state, { '1': 'busy' });
      expect(state.records).toEqual([
        {
          id: 1,
          name: 'Agent1',
          email: 'agent1@hellorep.ai',
          availability_status: 'busy',
        },
        {
          id: 2,
          name: 'Agent1',
          email: 'agent1@hellorep.ai',
        },
      ]);
    });
  });
});
