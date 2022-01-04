import { actions } from '../../appConfig';

const commit = jest.fn();
describe('#actions', () => {
  describe('#setReferrerHost', () => {
    it('creates actions properly', () => {
      actions.setReferrerHost({ commit }, 'www.hellorep.ai');
      expect(commit.mock.calls).toEqual([
        ['SET_REFERRER_HOST', 'www.hellorep.ai'],
      ]);
    });
  });

  describe('#setWidgetColor', () => {
    it('creates actions properly', () => {
      actions.setWidgetColor({ commit }, { widgetColor: '#eaeaea' });
      expect(commit.mock.calls).toEqual([
        ['SET_WIDGET_COLOR', { widgetColor: '#eaeaea' }],
      ]);
    });
  });
});
